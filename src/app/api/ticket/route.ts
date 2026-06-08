import { NextRequest, NextResponse } from "next/server";
import { ticketSchema } from "@/lib/schemas";
import { isRateLimited } from "@/lib/ratelimit";
import { getTransporter, mailFrom, mailTo } from "@/lib/mailer";

export async function POST(req: NextRequest) {
  if (await isRateLimited(req)) {
    return NextResponse.json(
      { error: "Trop de requêtes. Merci de réessayer dans quelques minutes." },
      { status: 429 }
    );
  }

  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return NextResponse.json({ error: "Requête invalide" }, { status: 400 });
  }

  const parsed = ticketSchema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json({ error: "Champs invalides" }, { status: 400 });
  }
  const { nom, email, sujet, message, _gotcha } = parsed.data;

  // Honeypot : si ce champ caché est rempli, c'est un bot. On accepte sans
  // rien envoyer pour ne pas signaler le filtrage.
  if (_gotcha) {
    return NextResponse.json({ ok: true });
  }

  try {
    const transporter = getTransporter();
    await transporter.sendMail({
      from: `Logidental Support <${mailFrom}>`,
      to: mailTo,
      replyTo: email,
      subject: `[Ticket] ${sujet} — ${nom}`,
      text: `Nom : ${nom}\nEmail : ${email}\nSujet : ${sujet}\n\nDescription :\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Erreur d'envoi" }, { status: 500 });
  }
}
