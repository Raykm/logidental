import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronDown,
  TrendingUp,
  ShieldCheck,
  BadgeCheck,
  KeyRound,
  Rocket,
  Building2,
  Repeat,
  Sunset,
} from "lucide-react";
import { faq } from "@/data/faq";
import { clusterPages } from "@/data/racines-couronnes";
import FaqAccordion from "@/components/ui/FaqAccordion";
import Reveal from "@/components/ui/Reveal";

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

const profils = [
  {
    icon: Rocket,
    title: "Début de carrière",
    description: "Installez-vous sans la lourdeur de la gestion, opérationnel dès le premier jour.",
  },
  {
    icon: Building2,
    title: "Installation ou déménagement",
    description: "Un cabinet clé en main, moderne et équipé, là où vous souhaitez exercer.",
  },
  {
    icon: Repeat,
    title: "Changement d'association",
    description: "Rejoignez un collectif de confrères, sans aucun lien financier entre vous.",
  },
  {
    icon: Sunset,
    title: "Retraite progressive",
    description: "Levez le pied à votre rythme et préparez sereinement votre relève.",
  },
];

export default function RacinesCouronnesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-secondary to-secondary-dark text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/10 blur-3xl animate-float-slow"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-32 -left-24 w-80 h-80 rounded-full bg-white/5 blur-3xl"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <Reveal className="flex-1">
              <p className="text-white/70 font-semibold text-sm tracking-widest uppercase mb-4">
                Le label qualité Logidental
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
                La solution Racines &amp; Couronnes
              </h1>
              <p className="text-white/85 text-lg leading-relaxed mb-8 max-w-xl">
                Une solution innovante pour concilier confort, sérénité et indépendance. Fruit d&apos;une
                collaboration entre praticiens passionnés et spécialistes du monde dentaire.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="group bg-white text-secondary hover:bg-gray-50 font-semibold px-6 py-3.5 rounded-lg transition-colors inline-flex items-center gap-2"
                >
                  En savoir plus
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/racines-couronnes/le-modele"
                  className="border border-white/40 hover:border-white hover:bg-white/10 text-white font-semibold px-6 py-3.5 rounded-lg transition-colors inline-flex items-center gap-2"
                >
                  Découvrir le modèle
                </Link>
              </div>
            </Reveal>
            <Reveal delay={150} className="flex-shrink-0">
              <Image
                src="/logos/logo-rc.png"
                alt="Racines & Couronnes"
                width={240}
                height={164}
                className="brightness-0 invert"
              />
            </Reveal>
          </div>
        </div>

        {/* Indice de scroll */}
        <a
          href="#decouvrir"
          aria-label="Faire défiler vers le contenu"
          className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-1.5 text-white/70 hover:text-white transition-colors"
        >
          <span className="text-xs font-semibold tracking-widest uppercase">Découvrir</span>
          <ChevronDown className="scroll-cue w-6 h-6 animate-bounce" />
        </a>
      </section>

      {/* Slogan */}
      <section id="decouvrir" className="relative overflow-hidden bg-charcoal text-white scroll-mt-20">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-20 left-1/4 w-72 h-72 rounded-full bg-secondary/20 blur-3xl"
        />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <Reveal>
            <p className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-tight">
              Notre expérience au service de <span className="text-secondary">votre exercice.</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* La promesse R&C */}
      <section className="bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <Reveal>
            <h2 className="text-primary font-semibold text-sm tracking-widest uppercase mb-5">
              La promesse R&amp;C
            </h2>
            <p className="text-charcoal-muted leading-relaxed text-lg">
              Racines &amp; Couronnes est le label de Logidental qui permet aux chirurgiens-dentistes
              libéraux d&apos;exercer dans un cabinet clé en main. Vous louez un cabinet entièrement
              équipé et choisissez les services dont vous avez besoin, pour un loyer mensuel clair — tout
              en restant pleinement indépendant et propriétaire de votre patientèle. Logidental prend en
              charge tout ce qui ne relève pas du soin.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Les 4 piliers */}
      <section className="bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <Reveal className="text-center mb-16 max-w-xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal mb-4">
              La solution R&amp;C en 4 piliers
            </h2>
            <p className="text-charcoal-muted">
              Explorez chaque dimension de la solution, de son modèle économique à nos engagements qualité.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-8">
            {clusterPages.map((pillar, i) => {
              const Icon = pillarIcons[pillar.slug];
              return (
                <Reveal key={pillar.slug} delay={i * 100} className="h-full">
                  <Link
                    href={`/racines-couronnes/${pillar.slug}`}
                    className="group relative h-full bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl border border-transparent hover:border-secondary/30 transition-all duration-300 hover:-translate-y-1 flex flex-col overflow-hidden"
                  >
                    <span
                      aria-hidden
                      className="absolute top-6 right-8 font-serif text-6xl text-secondary/5 group-hover:text-secondary/10 transition-colors select-none"
                    >
                      0{i + 1}
                    </span>
                    <div className="relative w-14 h-14 rounded-xl bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white flex items-center justify-center mb-5 transition-colors duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="relative font-serif text-xl text-charcoal mb-2">{pillar.label}</h3>
                    <p className="relative text-primary font-medium text-sm mb-3">{pillar.tagline}</p>
                    <p className="relative text-charcoal-muted text-sm leading-relaxed mb-5 flex-1">
                      {pillar.teaser}
                    </p>
                    <span className="relative inline-flex items-center gap-2 text-primary font-semibold text-sm">
                      Découvrir <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pour qui */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <Reveal className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal mb-4">Pour qui ?</h2>
            <p className="text-charcoal-muted text-lg">
              La solution R&amp;C s&apos;adresse aux chirurgiens-dentistes en libéral, à chaque étape de
              leur parcours professionnel.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {profils.map((profil, i) => {
              const Icon = profil.icon;
              return (
                <Reveal key={profil.title} delay={i * 100} className="h-full">
                  <div className="group h-full bg-surface rounded-xl p-7 border border-transparent hover:border-secondary/30 hover:bg-white hover:shadow-md transition-all duration-300">
                    <div className="w-12 h-12 rounded-lg bg-white shadow-sm group-hover:bg-secondary/10 flex items-center justify-center mb-5 transition-colors">
                      <Icon className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="font-semibold text-charcoal mb-2">{profil.title}</h3>
                    <p className="text-charcoal-muted text-sm leading-relaxed">{profil.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-surface">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <Reveal className="text-center mb-12">
            <h2 className="font-serif text-3xl sm:text-4xl text-charcoal mb-4">
              8 questions pour mieux comprendre R&amp;C
            </h2>
          </Reveal>
          <Reveal>
            <FaqAccordion items={faq} />
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-secondary text-white">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-16 -left-10 w-72 h-72 rounded-full bg-white/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-20 right-0 w-80 h-80 rounded-full bg-secondary-dark/40 blur-3xl"
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <Reveal>
            <h2 className="font-serif text-3xl sm:text-4xl mb-4">Intéressé par la solution R&amp;C ?</h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Rencontrons-nous pour étudier votre projet et vous proposer la solution adaptée à votre
              situation.
            </p>
            <Link
              href="/contact"
              className="group bg-white text-secondary hover:bg-gray-50 font-semibold px-6 py-3.5 rounded-lg transition-colors inline-flex items-center gap-2"
            >
              Prendre contact
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
