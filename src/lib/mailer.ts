import nodemailer from "nodemailer";

// Transporteur SMTP OVH partagé par les routes d'envoi d'email.
// La boîte contact@logidental.fr est hébergée chez OVH (ssl0.ovh.net).
// Les identifiants sont fournis par variables d'environnement.
const host = process.env.SMTP_HOST;
const port = Number(process.env.SMTP_PORT ?? 465);
const user = process.env.SMTP_USER;
const pass = process.env.SMTP_PASSWORD;

export const mailFrom = process.env.SMTP_USER ?? "contact@logidental.fr";
export const mailTo = process.env.MAIL_TO ?? "raymond.karim@logidental.fr";

export function getTransporter() {
  if (!host || !user || !pass) {
    throw new Error("Configuration SMTP manquante");
  }
  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // SSL direct sur 465, STARTTLS sinon
    auth: { user, pass },
  });
}
