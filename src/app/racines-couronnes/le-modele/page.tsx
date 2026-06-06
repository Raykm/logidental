import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Landmark,
  Layers,
  LayoutGrid,
  Wallet,
  PiggyBank,
  CalendarCheck,
  SlidersHorizontal,
  Headset,
  CheckCircle2,
} from "lucide-react";
import { principeModele, avantagesModele } from "@/data/racines-couronnes";
import { carteServices } from "@/data/services";
import RcClusterNav from "@/components/ui/RcClusterNav";

export const metadata = {
  title: "Le modèle économique R&C — Logidental",
  description:
    "Deux façons de rejoindre Racines & Couronnes : louer un cabinet clé en main (loyer mensuel, socle + modules à la carte) ou investir dans un centre. Un modèle clair, sans investissement lourd côté location.",
  alternates: { canonical: "/racines-couronnes/le-modele" },
  openGraph: {
    url: "/racines-couronnes/le-modele",
    title: "Le modèle économique R&C — Logidental",
    description:
      "Louer un cabinet clé en main ou investir dans un centre Racines & Couronnes : deux façons de rejoindre le réseau.",
  },
};

const principeIcons = [Layers, LayoutGrid, Wallet];
const avantageIcons = [PiggyBank, CalendarCheck, SlidersHorizontal, Headset];

export default function LeModelePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Link
            href="/racines-couronnes"
            className="text-secondary font-semibold text-sm tracking-widest uppercase mb-3 inline-block hover:text-secondary-dark"
          >
            Racines &amp; Couronnes
          </Link>
          <h1 className="font-serif text-4xl sm:text-5xl text-charcoal mb-4">Le modèle économique</h1>
          <p className="text-charcoal-muted max-w-2xl text-lg">
            Deux façons de rejoindre Racines &amp; Couronnes : louer un cabinet clé en main ou investir
            dans un centre. Dans les deux cas, Logidental prend en charge tout ce qui ne relève pas du
            soin.
          </p>
        </div>
      </section>

      {/* Deux façons de rejoindre R&C */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl text-charcoal mb-4">Deux façons de rejoindre R&amp;C</h2>
            <p className="text-charcoal-muted">
              Que vous souhaitiez exercer sans contrainte ou investir dans un projet, il existe une formule
              adaptée à votre situation.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-surface rounded-2xl p-8 border border-gray-100">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-5">
                <Building2 className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-serif text-xl text-charcoal mb-3">Louer un cabinet</h3>
              <p className="text-charcoal-muted text-sm leading-relaxed">
                Vous louez un cabinet clé en main contre un loyer mensuel, composé d&apos;un socle de base
                et des modules de services que vous choisissez. Aucun investissement lourd : vous vous
                installez et vous exercez.
              </p>
            </div>
            <div className="bg-surface rounded-2xl p-8 border border-gray-100">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <Landmark className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl text-charcoal mb-3">Investir dans un centre</h3>
              <p className="text-charcoal-muted text-sm leading-relaxed">
                Vous investissez dans un centre Racines &amp; Couronnes : Logidental en assure
                l&apos;agencement clé en main et la gestion, et vous percevez une part des loyers, dans un
                cadre sécurisé.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Le principe (location) */}
      <section className="bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">
            Option location
          </p>
          <h2 className="font-serif text-3xl text-charcoal mb-12">Le principe</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {principeModele.map((etape, i) => {
              const Icon = principeIcons[i];
              return (
                <div key={etape.title} className="bg-white rounded-xl p-8 shadow-sm">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-lg text-charcoal mb-3">{etape.title}</h3>
                  <p className="text-charcoal-muted text-sm leading-relaxed">{etape.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Les modules */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl text-charcoal mb-4">Les modules à la carte</h2>
            <p className="text-charcoal-muted">
              Composez votre cabinet en sélectionnant les services qui correspondent à vos besoins. Votre
              loyer s&apos;ajuste à votre sélection.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {carteServices.map((service) => (
              <div key={service.id} className="bg-surface rounded-xl p-6 border border-gray-100">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">{service.title}</h3>
                    <p className="text-charcoal-muted text-sm leading-relaxed">{service.tagline}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services-a-la-carte"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Voir le détail des services à la carte <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Vos avantages */}
      <section className="bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="font-serif text-3xl text-charcoal mb-12">Ce que ça vous apporte</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {avantagesModele.map((avantage, i) => {
              const Icon = avantageIcons[i];
              return (
                <div key={avantage.title}>
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-lg text-charcoal mb-3">{avantage.title}</h3>
                  <p className="text-charcoal-muted text-sm leading-relaxed">{avantage.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engagement & étude */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-secondary/5 rounded-2xl p-10 border border-secondary/20 max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl text-charcoal mb-4">Un engagement clair</h2>
            <p className="text-charcoal-muted leading-relaxed mb-4">
              L&apos;installation s&apos;inscrit dans un <strong className="text-charcoal">bail
              professionnel de 6 ans</strong>, qui sécurise votre partenariat dans la durée. Le montant
              exact de votre loyer — socle et modules choisis — est établi avec vous lors d&apos;une étude
              personnalisée.
            </p>
            <Link
              href="/contact"
              className="mt-2 inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Demander une étude personnalisée <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <RcClusterNav currentSlug="le-modele" />
    </>
  );
}
