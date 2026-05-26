import Link from "next/link";
import { Monitor, TicketCheck, Phone, Clock } from "lucide-react";
import TicketForm from "@/components/ui/TicketForm";

export const metadata = {
  title: "Support — Logidental",
  description:
    "Besoin d'aide ? Accédez à la téléassistance Logidental ou ouvrez un ticket de support.",
  alternates: { canonical: "/support" },
  openGraph: {
    url: "/support",
    title: "Support — Logidental",
    description: "Besoin d'aide ? Accédez à la téléassistance Logidental ou ouvrez un ticket de support.",
  },
};

export default function SupportPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-secondary font-semibold text-sm tracking-widest uppercase mb-3">
            Assistance
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl text-charcoal mb-4">Support</h1>
          <p className="text-charcoal-muted max-w-2xl text-lg">
            Notre équipe est disponible pour vous assister. Choisissez la solution adaptée à votre besoin.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Téléassistance */}
            <div className="bg-secondary/5 border border-secondary/20 rounded-2xl p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
                  <Monitor className="w-6 h-6 text-secondary" />
                </div>
                <h2 className="font-serif text-2xl text-charcoal">Téléassistance</h2>
              </div>
              <p className="text-charcoal-muted leading-relaxed mb-6">
                Votre technicien prend la main sur votre poste à distance pour résoudre votre problème
                rapidement. Téléchargez TeamViewer et communiquez votre identifiant à notre équipe.
              </p>
              <div className="flex items-center gap-2 text-sm text-charcoal-muted mb-8">
                <Clock className="w-4 h-4 text-secondary" />
                Lun–Ven 9h–12h / 14h–18h
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://www.teamviewer.com/fr/telecharger/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary hover:bg-secondary-dark text-white font-semibold px-5 py-3 rounded-lg transition-colors inline-flex items-center gap-2"
                >
                  <Monitor className="w-4 h-4" />
                  Télécharger TeamViewer
                </a>
                <a
                  href="tel:+33467920605"
                  className="border border-secondary text-secondary hover:bg-secondary hover:text-white font-semibold px-5 py-3 rounded-lg transition-colors inline-flex items-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  04 67 92 06 05
                </a>
              </div>
            </div>

            {/* Ticket */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <TicketCheck className="w-6 h-6 text-primary" />
                </div>
                <h2 className="font-serif text-2xl text-charcoal">Ouvrir un ticket</h2>
              </div>
              <p className="text-charcoal-muted mb-6">
                Décrivez votre problème, nous vous recontactons dans les meilleurs délais.
              </p>
              <TicketForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
