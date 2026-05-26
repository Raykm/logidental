import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { faq } from "@/data/faq";
import FaqAccordion from "@/components/ui/FaqAccordion";

export const metadata = {
  title: "La solution Racines & Couronnes — Logidental",
  description:
    "Racines & Couronnes : une solution innovante pour exercer en libéral dans un cabinet dentaire clé en main, avec indépendance totale.",
};

const avantages = [
  "Plateau technique complet et moderne dès l'installation",
  "Investissement optimisé avec charges mensualisées",
  "Identité visuelle forte et rassurante",
  "Cadre juridique et réglementaire simplifié",
  "Gestion des charges prise en charge par Logidental",
  "Indépendance totale préservée",
];

const processSteps = [
  {
    step: "01",
    title: "Analyse des besoins",
    description:
      "Une analyse fonctionnelle et précise de vos besoins, de votre situation et de vos objectifs professionnels.",
  },
  {
    step: "02",
    title: "Proposition chiffrée",
    description:
      "Une proposition détaillée et budgétisée, adaptée à votre projet, avec plusieurs scenarii si nécessaire.",
  },
  {
    step: "03",
    title: "Déploiement",
    description:
      "Mise en place complète de la solution R&C : agencement, équipement, informatique, accompagnement.",
  },
];

export default function RacinesCouronnesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary to-secondary-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col lg:flex-row items-center gap-10">
            <div className="flex-1">
              <p className="text-white/70 font-semibold text-sm tracking-widest uppercase mb-4">
                Le label qualité Logidental
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl mb-6">
                La solution Racines & Couronnes
              </h1>
              <p className="text-white/85 text-lg leading-relaxed mb-8 max-w-xl">
                Une solution innovante pour concilier confort, sérénité et indépendance.
                Fruit d'une collaboration entre praticiens passionnés et spécialistes du monde dentaire.
              </p>
              <Link
                href="/contact"
                className="bg-white text-secondary hover:bg-gray-50 font-semibold px-6 py-3.5 rounded-lg transition-colors inline-flex items-center gap-2"
              >
                En savoir plus
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="flex-shrink-0">
              <Image
                src="/logos/logo-rc.png"
                alt="Racines & Couronnes"
                width={200}
                height={137}
                className="brightness-0 invert"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pour qui */}
      <section className="bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl text-charcoal mb-4">Pour qui ?</h2>
            <p className="text-charcoal-muted leading-relaxed text-lg">
              La solution R&C s'adresse aux{" "}
              <strong className="text-charcoal">chirurgiens-dentistes en libéral</strong>,
              quel que soit le moment de leur parcours professionnel : début de carrière,
              déménagement, changement d'association, ou retraite progressive.
            </p>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-serif text-3xl text-charcoal mb-4">Pourquoi R&C ?</h2>
              <p className="text-charcoal-muted leading-relaxed mb-8">
                La solution Racines & Couronnes repose sur l'éthique et le respect du patient.
                Elle vous permet d'exercer dans des conditions optimales tout en conservant votre indépendance totale.
              </p>
              <ul className="space-y-3">
                {avantages.map((a) => (
                  <li key={a} className="flex items-start gap-3 text-charcoal-muted">
                    <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-secondary/5 rounded-2xl p-10 border border-secondary/20">
              <p className="font-serif text-2xl text-charcoal mb-6">
                "Exercez en toute sérénité, nous gérons le reste."
              </p>
              <p className="text-charcoal-muted leading-relaxed">
                Contrat unique, synergie de compétences, collaboration entre praticiens et spécialistes
                du monde dentaire. Les valeurs R&C : respect du patient, excellence du service,
                avant-garde technologique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl text-charcoal mb-4">Un process rigoureux</h2>
            <p className="text-charcoal-muted max-w-xl mx-auto">
              De la première rencontre à la livraison du cabinet, chaque étape est maîtrisée.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {processSteps.map((step) => (
              <div key={step.step} className="bg-white rounded-xl p-8 shadow-sm">
                <p className="font-serif text-5xl text-secondary/20 mb-4">{step.step}</p>
                <h3 className="font-semibold text-lg text-charcoal mb-3">{step.title}</h3>
                <p className="text-charcoal-muted text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl text-charcoal mb-4">
              5 questions pour mieux comprendre R&C
            </h2>
          </div>
          <FaqAccordion items={faq} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="font-serif text-3xl mb-4">Intéressé par la solution R&C ?</h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Rencontrons-nous pour étudier votre projet et vous proposer la solution adaptée à votre situation.
          </p>
          <Link
            href="/contact"
            className="bg-white text-secondary hover:bg-gray-50 font-semibold px-6 py-3.5 rounded-lg transition-colors inline-flex items-center gap-2"
          >
            Prendre contact
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
