import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { mainServices } from "@/data/services";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: {
    url: "/",
    title: "Logidental — Services dédiés à la médecine Bucco-Dentaire",
    description:
      "Depuis 2014, Logidental conçoit et réalise l'agencement complet de cabinets dentaires clés en main : agencement, informatique, digitalisation.",
  },
};

const stats = [
  { value: "2014", label: "Année de création" },
  { value: "35", label: "Années d'expertise cumulée" },
  { value: "100%", label: "Projets clés en main" },
  { value: "1", label: "Interlocuteur unique" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-charcoal to-[#1a1a1a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <p className="text-secondary font-semibold text-sm tracking-widest uppercase mb-4">
              Depuis 2014
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
              Services dédiés à la médecine{" "}
              <span className="text-secondary">Bucco-Dentaire</span>
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-xl">
              Interlocuteur unique pour la conception et réalisation complète de vos cabinets dentaires —
              de l&apos;étude à la livraison, clé en main.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/nos-solutions"
                className="bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3.5 rounded-lg transition-colors inline-flex items-center gap-2"
              >
                Découvrir nos solutions
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="border border-white/30 hover:border-white text-white font-semibold px-6 py-3.5 rounded-lg transition-colors"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-serif text-5xl text-primary mb-2">{stat.value}</p>
                <p className="text-charcoal-muted text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal mb-4">
              Nos domaines d&apos;expertise
            </h2>
            <p className="text-charcoal-muted max-w-2xl mx-auto">
              Une offre complète pour équiper, connecter et digitaliser votre cabinet dentaire —
              gérée par un seul interlocuteur.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {mainServices.map((service) => (
              <div
                key={service.id}
                className="border border-gray-100 rounded-xl p-8 hover:shadow-md transition-shadow group"
              >
                <h3 className="font-semibold text-xl text-charcoal mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-secondary text-sm font-medium mb-4">{service.tagline}</p>
                <p className="text-charcoal-muted text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-charcoal-muted">
                      <CheckCircle2 className="w-4 h-4 text-secondary flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Racines & Couronnes CTA */}
      <section className="bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="flex items-center gap-8">
              <Image
                src="/logos/logo-rc.png"
                alt="Racines & Couronnes"
                width={120}
                height={82}
                className="flex-shrink-0"
              />
              <div className="text-white">
                <h2 className="font-serif text-3xl sm:text-4xl mb-3">
                  La solution Racines & Couronnes
                </h2>
                <p className="text-white/80 max-w-xl leading-relaxed">
                  Une solution innovante pour concilier confort, sérénité et indépendance.
                  Fruit d&apos;une collaboration entre praticiens et spécialistes du monde dentaire.
                </p>
              </div>
            </div>
            <Link
              href="/racines-couronnes"
              className="flex-shrink-0 bg-white text-secondary hover:bg-gray-50 font-semibold px-6 py-3.5 rounded-lg transition-colors inline-flex items-center gap-2"
            >
              Découvrir R&C
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal mb-4">
            Un projet de cabinet dentaire ?
          </h2>
          <p className="text-charcoal-muted mb-8 max-w-xl mx-auto">
            Contactez-nous pour une étude personnalisée. Nous vous rappelons sous 24h.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-3.5 rounded-lg transition-colors inline-flex items-center gap-2"
            >
              Nous contacter
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="tel:+33467920605"
              className="border border-primary text-primary hover:bg-primary hover:text-white font-semibold px-6 py-3.5 rounded-lg transition-colors"
            >
              04 67 92 06 05
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
