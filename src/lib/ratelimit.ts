import { Ratelimit } from "@upstash/ratelimit";
import { Redis } from "@upstash/redis";

// Limiteur de débit partagé entre toutes les instances (Upstash Redis).
// Désactivé automatiquement si les variables d'environnement ne sont pas
// configurées (ex. en local) → le site reste fonctionnel sans clés.
const url = process.env.UPSTASH_REDIS_REST_URL ?? process.env.KV_REST_API_URL;
const token = process.env.UPSTASH_REDIS_REST_TOKEN ?? process.env.KV_REST_API_TOKEN;

export const ratelimit =
  url && token
    ? new Ratelimit({
        redis: new Redis({ url, token }),
        // 5 envois max par tranche glissante de 10 minutes et par IP.
        limiter: Ratelimit.slidingWindow(5, "10 m"),
        prefix: "logidental/forms",
        analytics: false,
      })
    : null;

// Récupère l'IP cliente à partir des en-têtes du proxy (Vercel).
export function getClientIp(req: Request): string {
  const xff = req.headers.get("x-forwarded-for");
  if (xff) return xff.split(",")[0].trim();
  return req.headers.get("x-real-ip") ?? "unknown";
}

// Renvoie true si la requête doit être bloquée (quota dépassé).
// Fail-open : en cas d'absence de configuration ou d'erreur du limiteur,
// on n'empêche pas l'envoi.
export async function isRateLimited(req: Request): Promise<boolean> {
  if (!ratelimit) return false;
  try {
    const { success } = await ratelimit.limit(getClientIp(req));
    return !success;
  } catch {
    return false;
  }
}
