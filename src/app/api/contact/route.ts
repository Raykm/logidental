import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  const body = await req.json();
  const { nom, email, telephone, sujet, message, type } = body;

  if (!nom || !email || !sujet || !message || !type) {
    return NextResponse.json({ error: "Champs manquants" }, { status: 400 });
  }

  const typeLabels: Record<string, string> = {
    devis: "Devis",
    rdv: "Rendez-vous",
    question: "Question",
    rappel: "Rappel tél.",
  };
  const typeLabel = typeLabels[type] ?? type;

  try {
    await resend.emails.send({
      from: "Logidental <contact@logidental.fr>",
      to: "raymond.karim@logidental.fr",
      replyTo: email,
      subject: `[${typeLabel}] ${sujet} — ${nom}`,
      text: `Type : ${typeLabel}\nNom : ${nom}\nEmail : ${email}\nTéléphone : ${telephone || "Non renseigné"}\nSujet : ${sujet}\n\nMessage :\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Erreur d'envoi" }, { status: 500 });
  }
}
