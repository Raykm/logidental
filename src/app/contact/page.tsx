import { Phone, MapPin, Clock, Mail, FileText, Calendar, MessageCircle } from "lucide-react";
import Link from "next/link";
import ContactForm from "@/components/ui/ContactForm";

export const metadata = {
  title: "Contact & Devis — Logidental",
  description:
    "Contactez Logidental pour une étude personnalisée de votre projet de cabinet dentaire. Devis, rendez-vous ou question — nous vous répondons sous 24h.",
  alternates: { canonical: "/contact" },
  openGraph: {
    url: "/contact",
    title: "Contact & Devis — Logidental",
    description:
      "Contactez Logidental pour une étude personnalisée de votre projet de cabinet dentaire. Devis, rendez-vous ou question — nous vous répondons sous 24h.",
  },
};

const typeCards = [
  {
    value: "devis",
    label: "Demander un devis",
    description: "Obtenez une proposition chiffrée pour votre projet",
    icon: FileText,
  },
  {
    value: "rdv",
    label: "Prendre un rendez-vous",
    description: "Rencontrons-nous pour discuter de votre projet",
    icon: Calendar,
  },
  {
    value: "question",
    label: "Poser une question",
    description: "Une question ? Notre équipe vous répond",
    icon: MessageCircle,
  },
  {
    value: "rappel",
    label: "Demande de rappel",
    description: "Laissez vos coordonnées, nous vous rappelons",
    icon: Phone,
  },
];

type Props = {
  searchParams: Promise<{ type?: string }>;
};

export default async function ContactPage({ searchParams }: Props) {
  const { type } = await searchParams;

  return (
    <>
      {/* Hero */}
      <section className="bg-surface border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-secondary font-semibold text-sm tracking-widest uppercase mb-3">
            Parlons de votre projet
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl text-charcoal mb-4">
            Comment pouvons-nous vous aider ?
          </h1>
          <p className="text-charcoal-muted max-w-2xl text-lg">
            Choisissez le type de demande — nous vous recontactons sous 24h.
          </p>
        </div>
      </section>

      {/* Choix du type de demande */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {typeCards.map((card) => {
              const Icon = card.icon;
              const isActive = type === card.value;
              return (
                <Link
                  key={card.value}
                  href={`/contact?type=${card.value}#formulaire`}
                  className={`flex flex-col gap-3 p-6 rounded-xl border-2 transition-all ${
                    isActive
                      ? "border-primary bg-primary/5"
                      : "border-gray-100 hover:border-primary/40 hover:shadow-sm"
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${isActive ? "bg-primary/10" : "bg-surface"}`}>
                    <Icon className={`w-5 h-5 ${isActive ? "text-primary" : "text-charcoal-muted"}`} />
                  </div>
                  <div>
                    <p className={`font-semibold text-sm ${isActive ? "text-primary" : "text-charcoal"}`}>
                      {card.label}
                    </p>
                    <p className="text-charcoal-muted text-xs mt-0.5 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Formulaire + coordonnées */}
      <section className="bg-white" id="formulaire">
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
              <h2 className="font-serif text-2xl text-charcoal mb-8">Votre demande</h2>
              <ContactForm defaultType={type} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
