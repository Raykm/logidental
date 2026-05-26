import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { nom, email, sujet, message } = body;

  if (!nom || !email || !sujet || !message) {
    return NextResponse.json({ error: "Champs manquants" }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: "Logidental Support <contact@logidental.fr>",
      to: "raymond.karim@logidental.fr",
      replyTo: email,
      subject: `[Ticket] ${sujet} — ${nom}`,
      text: `Nom : ${nom}\nEmail : ${email}\nSujet : ${sujet}\n\nDescription :\n${message}`,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Erreur d'envoi" }, { status: 500 });
  }
}
