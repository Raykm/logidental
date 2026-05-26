import { Phone, MapPin, Clock, Mail } from "lucide-react";
import ContactForm from "@/components/ui/ContactForm";

export const metadata = {
  title: "Contact & Devis — Logidental",
  description:
    "Contactez Logidental pour une étude gratuite et personnalisée de votre projet de cabinet dentaire. Nous vous répondons sous 24h.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-secondary font-semibold text-sm tracking-widest uppercase mb-3">
            Parlons de votre projet
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl text-charcoal mb-4">
            Contact & Devis
          </h1>
          <p className="text-charcoal-muted max-w-2xl text-lg">
            Étude gratuite et personnalisée. Nous vous recontactons sous 24h.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Coordonnées */}
            <div className="lg:col-span-2">
              <h2 className="font-serif text-2xl text-charcoal mb-8">Nos coordonnées</h2>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium text-charcoal mb-1">Adresse</p>
                    <p className="text-charcoal-muted text-sm">
                      56 rue Cassiopée<br />
                      Écoparc Bel Air<br />
                      34570 Vailhauquès
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium text-charcoal mb-1">Téléphone</p>
                    <a href="tel:+33467920605" className="text-charcoal-muted text-sm hover:text-primary transition-colors">
                      04 67 92 06 05
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium text-charcoal mb-1">Email</p>
                    <a href="mailto:contact@logidental.fr" className="text-charcoal-muted text-sm hover:text-primary transition-colors">
                      contact@logidental.fr
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <p className="font-medium text-charcoal mb-1">Horaires</p>
                    <p className="text-charcoal-muted text-sm">
                      Lundi – Vendredi<br />
                      9h00 – 12h00 / 14h00 – 18h00
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Formulaire */}
            <div className="lg:col-span-3">
              <h2 className="font-serif text-2xl text-charcoal mb-8">Demander un devis</h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
