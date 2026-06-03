"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Loader2 } from "lucide-react";
import { useState } from "react";

const sujets = [
  "Agencement de cabinet",
  "Informatique & Réseaux",
  "Digitalisation",
  "Solution Racines & Couronnes",
  "Services à la carte",
  "Autre",
];

const schema = z.object({
  type: z.string().min(1, "Veuillez choisir un type de demande"),
  nom: z.string().min(2, "Nom requis"),
  email: z.string().email("Email invalide"),
  telephone: z.string().optional(),
  sujet: z.string().min(1, "Sujet requis"),
  message: z.string().min(20, "Message trop court (20 caractères min.)"),
});

type FormData = z.infer<typeof schema>;

type Props = {
  defaultType?: string;
};

export default function ContactForm({ defaultType }: Props) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { type: defaultType ?? "devis" },
  });

  async function onSubmit(data: FormData) {
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
        <p className="font-semibold text-green-800 text-lg mb-2">Message envoyé !</p>
        <p className="text-green-700">Nous vous recontactons sous 24h. Merci de votre confiance.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <input type="hidden" {...register("type")} />

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-charcoal mb-1.5">Nom *</label>
          <input
            {...register("nom")}
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            placeholder="Votre nom"
          />
          {errors.nom && <p className="text-red-500 text-xs mt-1">{errors.nom.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-charcoal mb-1.5">Email *</label>
          <input
            {...register("email")}
            type="email"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            placeholder="votre@email.fr"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-medium text-charcoal mb-1.5">Téléphone</label>
          <input
            {...register("telephone")}
            type="tel"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            placeholder="06 00 00 00 00"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-charcoal mb-1.5">Sujet *</label>
          <select
            {...register("sujet")}
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary bg-white"
          >
            <option value="">Choisir un sujet</option>
            {sujets.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          {errors.sujet && <p className="text-red-500 text-xs mt-1">{errors.sujet.message}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-charcoal mb-1.5">Message *</label>
        <textarea
          {...register("message")}
          rows={5}
          className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
          placeholder="Décrivez votre projet ou votre besoin..."
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
      </div>

      {status === "error" && (
        <p className="text-red-600 text-sm">Une erreur est survenue. Veuillez réessayer ou nous appeler.</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-primary hover:bg-primary-dark disabled:opacity-60 text-white font-semibold px-6 py-3.5 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
      >
        {status === "loading" ? (
          <><Loader2 className="w-4 h-4 animate-spin" /> Envoi en cours...</>
        ) : (
          <><Send className="w-4 h-4" /> Envoyer ma demande</>
        )}
      </button>
      <p className="text-xs text-charcoal-muted text-center">
        Vos données sont uniquement utilisées pour traiter votre demande.
      </p>
    </form>
  );
}
