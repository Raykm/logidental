import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { carteServices } from "@/data/services";

export const metadata = {
  title: "Services à la carte — Logidental",
  description:
    "Complétez votre offre avec nos services à la carte : assistance administrative, communication, radioprotection, secrétariat, hygiène et plus encore.",
};

export default function ServicesAlaCartePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-secondary font-semibold text-sm tracking-widest uppercase mb-3">
            Nos solutions
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl text-charcoal mb-4">
            Services à la carte
          </h1>
          <p className="text-charcoal-muted max-w-2xl text-lg">
            Composez votre offre selon vos besoins. Chaque service peut être souscrit indépendamment
            pour compléter votre équipement ou votre organisation.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <p className="text-charcoal-muted max-w-3xl text-base leading-relaxed">
            <strong className="text-charcoal">Notre mission :</strong> Promouvoir le savoir-faire de la profession,
            anticiper les exigences économiques, techniques et réglementaires, innover dans la conception
            et la gestion des cabinets dentaires.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {carteServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-xl p-8 border border-gray-100 hover:shadow-md transition-shadow hover:border-secondary/30 group"
              >
                <h3 className="font-semibold text-lg text-charcoal mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-secondary text-sm font-medium">{service.tagline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="font-serif text-3xl mb-4">Vous avez un besoin spécifique ?</h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Contactez-nous pour discuter de vos besoins et construire une offre sur mesure.
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
