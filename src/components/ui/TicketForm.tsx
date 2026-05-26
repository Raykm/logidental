"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Loader2 } from "lucide-react";

const schema = z.object({
  nom: z.string().min(2, "Nom requis"),
  email: z.string().email("Email invalide"),
  sujet: z.string().min(3, "Sujet requis"),
  message: z.string().min(10, "Décrivez votre problème (10 caractères min.)"),
});

type FormData = z.infer<typeof schema>;

export default function TicketForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormData) {
    setStatus("loading");
    try {
      const res = await fetch("/api/ticket", {
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
      <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
        <p className="font-semibold text-green-800 mb-1">Ticket envoyé !</p>
        <p className="text-green-700 text-sm">Nous vous recontactons dans les meilleurs délais.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-charcoal mb-1">Nom</label>
          <input
            {...register("nom")}
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            placeholder="Votre nom"
          />
          {errors.nom && <p className="text-red-500 text-xs mt-1">{errors.nom.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-charcoal mb-1">Email</label>
          <input
            {...register("email")}
            type="email"
            className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            placeholder="votre@email.fr"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-charcoal mb-1">Sujet</label>
        <input
          {...register("sujet")}
          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
          placeholder="Objet du problème"
        />
        {errors.sujet && <p className="text-red-500 text-xs mt-1">{errors.sujet.message}</p>}
      </div>
      <div>
        <label className="block text-sm font-medium text-charcoal mb-1">Description</label>
        <textarea
          {...register("message")}
          rows={4}
          className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary resize-none"
          placeholder="Décrivez votre problème en détail..."
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
      </div>
      {status === "error" && (
        <p className="text-red-600 text-sm">Une erreur est survenue. Veuillez réessayer.</p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-primary hover:bg-primary-dark disabled:opacity-60 text-white font-semibold px-6 py-3 rounded-lg transition-colors inline-flex items-center justify-center gap-2"
      >
        {status === "loading" ? (
          <><Loader2 className="w-4 h-4 animate-spin" /> Envoi en cours...</>
        ) : (
          <><Send className="w-4 h-4" /> Envoyer le ticket</>
        )}
      </button>
    </form>
  );
}
