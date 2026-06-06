import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { mainServices } from "@/data/services";

export const metadata = {
  title: "Nos Solutions — Logidental",
  description:
    "Agencement A-Z, Informatique & Réseaux, Digitalisation : découvrez les 3 domaines d'expertise de Logidental pour votre cabinet dentaire.",
  alternates: { canonical: "/nos-solutions" },
  openGraph: {
    url: "/nos-solutions",
    title: "Nos Solutions — Logidental",
    description:
      "Agencement A-Z, Informatique & Réseaux, Digitalisation : découvrez les 3 domaines d'expertise de Logidental pour votre cabinet dentaire.",
  },
};

export default function NosolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-secondary font-semibold text-sm tracking-widest uppercase mb-3">
            Nos solutions
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl text-charcoal mb-4">
            Une offre complète, un seul interlocuteur
          </h1>
          <p className="text-charcoal-muted max-w-2xl text-lg">
            Logidental prend en charge l&apos;intégralité de votre projet de cabinet dentaire — de la conception
            à la livraison, en passant par l&apos;infrastructure numérique et la communication.
          </p>
        </div>
      </section>

      {/* Services détail */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">
          {mainServices.map((service, index) => (
            <div
              key={service.id}
              className={`flex flex-col lg:flex-row gap-12 items-start ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Bloc coloré */}
              <div className="w-full lg:w-2/5 flex-shrink-0">
                <div className="bg-surface rounded-2xl p-10 h-full flex items-center justify-center min-h-52">
                  <p className="font-serif text-6xl text-secondary/20 font-bold select-none">
                    0{index + 1}
                  </p>
                </div>
              </div>

              {/* Contenu */}
              <div className="flex-1">
                <p className="text-secondary font-semibold text-sm tracking-widest uppercase mb-2">
                  Service 0{index + 1}
                </p>
                <h2 className="font-serif text-3xl text-charcoal mb-3">{service.title}</h2>
                <p className="text-primary font-medium mb-4">{service.tagline}</p>
                <p className="text-charcoal-muted leading-relaxed mb-6">{service.description}</p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-charcoal-muted">
                      <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  Nous contacter <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl mb-4">
            Votre projet mérite le meilleur
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Contactez-nous pour une étude personnalisée. Nous vous répondons sous 24h.
          </p>
          <Link
            href="/contact"
            className="bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3.5 rounded-lg transition-colors inline-flex items-center gap-2"
          >
            Nous contacter
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
