import { MetadataRoute } from "next";

const BASE = process.env.NEXT_PUBLIC_SITE_URL ?? "https://logidental.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: { url: string; priority: number }[] = [
    { url: BASE, priority: 1.0 },
    { url: `${BASE}/nos-solutions`, priority: 0.9 },
    { url: `${BASE}/racines-couronnes`, priority: 0.8 },
    { url: `${BASE}/racines-couronnes/le-modele`, priority: 0.7 },
    { url: `${BASE}/racines-couronnes/independance`, priority: 0.7 },
    { url: `${BASE}/racines-couronnes/nos-engagements`, priority: 0.7 },
    { url: `${BASE}/racines-couronnes/cle-en-main`, priority: 0.7 },
    { url: `${BASE}/racines-couronnes/le-label`, priority: 0.7 },
    { url: `${BASE}/services-a-la-carte`, priority: 0.7 },
    { url: `${BASE}/support`, priority: 0.5 },
    { url: `${BASE}/contact`, priority: 0.8 },
    { url: `${BASE}/confidentialite`, priority: 0.2 },
    { url: `${BASE}/mentions-legales`, priority: 0.2 },
  ];

  return routes.map((r) => ({
    url: r.url,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: r.priority,
  }));
}
