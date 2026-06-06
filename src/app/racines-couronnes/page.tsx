import Image from "next/image";
import Link from "next/link";
import { ArrowRight, TrendingUp, ShieldCheck, BadgeCheck, KeyRound } from "lucide-react";
import { faq } from "@/data/faq";
import { clusterPages } from "@/data/racines-couronnes";
import FaqAccordion from "@/components/ui/FaqAccordion";

export const metadata = {
  title: "La solution Racines & Couronnes — Logidental",
  description:
    "Racines & Couronnes : le label de Logidental pour exercer en libéral dans un cabinet dentaire clé en main, avec une indépendance totale. Modèle économique, engagements qualité, accompagnement.",
  alternates: { canonical: "/racines-couronnes" },
  openGraph: {
    url: "/racines-couronnes",
    title: "La solution Racines & Couronnes — Logidental",
    description:
      "Racines & Couronnes : exercer en libéral dans un cabinet dentaire clé en main, avec une indépendance totale.",
  },
};

const pillarIcons: Record<string, typeof TrendingUp> = {
  "le-modele": TrendingUp,
  independance: ShieldCheck,
  "nos-engagements": BadgeCheck,
  "cle-en-main": KeyRound,
};

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
              <h1 className="font-serif text-4xl sm:text-5xl mb-6">La solution Racines &amp; Couronnes</h1>
              <p className="text-white/85 text-lg leading-relaxed mb-8 max-w-xl">
                Une solution innovante pour concilier confort, sérénité et indépendance. Fruit d&apos;une
                collaboration entre praticiens passionnés et spécialistes du monde dentaire.
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

      {/* Résumé vendeur */}
      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="font-serif text-3xl text-charcoal mb-4">
            Tout votre cabinet, sauf le soin
          </h2>
          <p className="text-charcoal-muted leading-relaxed text-lg">
            Racines &amp; Couronnes est le label de Logidental qui réunit, sous un cadre éthique commun, des
            chirurgiens-dentistes libéraux au sein de pôles mutualisés. Vous bénéficiez de la force d&apos;un
            collectif — économies d&apos;échelle, équipements partagés, gestion entièrement déléguée — tout
            en restant pleinement indépendant et propriétaire de votre patientèle.
          </p>
        </div>
      </section>

      {/* Les 4 piliers */}
      <section className="bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl text-charcoal mb-4">La solution R&amp;C en 4 piliers</h2>
            <p className="text-charcoal-muted max-w-xl mx-auto">
              Explorez chaque dimension de la solution, de son modèle économique à nos engagements qualité.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-8">
            {clusterPages.map((pillar) => {
              const Icon = pillarIcons[pillar.slug];
              return (
                <Link
                  key={pillar.slug}
                  href={`/racines-couronnes/${pillar.slug}`}
                  className="group bg-white rounded-2xl p-8 shadow-sm hover:shadow-md border border-transparent hover:border-secondary/30 transition-all flex flex-col"
                >
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-serif text-xl text-charcoal mb-2">{pillar.label}</h3>
                  <p className="text-primary font-medium text-sm mb-3">{pillar.tagline}</p>
                  <p className="text-charcoal-muted text-sm leading-relaxed mb-5 flex-1">{pillar.teaser}</p>
                  <span className="inline-flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                    Découvrir <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pour qui */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl text-charcoal mb-4">Pour qui ?</h2>
            <p className="text-charcoal-muted leading-relaxed text-lg">
              La solution R&amp;C s&apos;adresse aux{" "}
              <strong className="text-charcoal">chirurgiens-dentistes en libéral</strong>, quel que soit le
              moment de leur parcours professionnel : début de carrière, déménagement, changement
              d&apos;association, ou retraite progressive.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl text-charcoal mb-4">5 questions pour mieux comprendre R&amp;C</h2>
          </div>
          <FaqAccordion items={faq} />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h2 className="font-serif text-3xl mb-4">Intéressé par la solution R&amp;C ?</h2>
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
