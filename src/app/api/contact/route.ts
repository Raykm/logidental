import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/schemas";
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

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    return NextResponse.json({ error: "Champs invalides" }, { status: 400 });
  }
  const { nom, email, telephone, sujet, message, type, _gotcha } = parsed.data;

  // Honeypot : si ce champ caché est rempli, c'est un bot. On accepte sans
  // rien envoyer pour ne pas signaler le filtrage.
  if (_gotcha) {
    return NextResponse.json({ ok: true });
  }

  const typeLabels: Record<string, string> = {
    devis: "Devis",
    rdv: "Rendez-vous",
    question: "Question",
    rappel: "Rappel tél.",
  };
  const typeLabel = typeLabels[type] ?? type;

  try {
    const transporter = getTransporter();
    await transporter.sendMail({
      from: `Logidental <${mailFrom}>`,
      to: mailTo,
      replyTo: email,
      subject: `[${typeLabel}] ${sujet} — ${nom}`,
      text: `Type : ${typeLabel}\nNom : ${nom}\nEmail : ${email}\nTéléphone : ${telephone || "Non renseigné"}\nSujet : ${sujet}\n\nMessage :\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Erreur d'envoi" }, { status: 500 });
  }
}
