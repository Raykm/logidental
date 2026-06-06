import { z } from "zod";

// Schémas de validation partagés entre les formulaires (client) et les routes
// API (serveur), pour que la validation soit identique des deux côtés.
// `_gotcha` est un champ honeypot anti-bot : il doit rester vide.

export const contactSchema = z.object({
  type: z.string().min(1, "Veuillez choisir un type de demande").max(50),
  nom: z.string().min(2, "Nom requis").max(100),
  email: z.string().email("Email invalide").max(200),
  telephone: z.string().max(30).optional(),
  sujet: z.string().min(1, "Sujet requis").max(200),
  message: z.string().min(20, "Message trop court (20 caractères min.)").max(5000),
  _gotcha: z.string().optional(),
});

export type ContactData = z.infer<typeof contactSchema>;

export const ticketSchema = z.object({
  nom: z.string().min(2, "Nom requis").max(100),
  email: z.string().email("Email invalide").max(200),
  sujet: z.string().min(3, "Sujet requis").max(200),
  message: z.string().min(10, "Décrivez votre problème (10 caractères min.)").max(5000),
  _gotcha: z.string().optional(),
});

export type TicketData = z.infer<typeof ticketSchema>;
