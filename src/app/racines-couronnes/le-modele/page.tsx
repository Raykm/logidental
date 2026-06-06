import Link from "next/link";
import { ArrowRight, TrendingDown, ShoppingCart, Microscope, Calculator, Compass } from "lucide-react";
import { leviersMutualisation, comparatif } from "@/data/racines-couronnes";
import RcClusterNav from "@/components/ui/RcClusterNav";

export const metadata = {
  title: "Le modèle économique R&C — Logidental",
  description:
    "Mutualisation des charges, achats groupés, équipements partagés : l'avantage économique de la solution Racines & Couronnes par rapport à un exercice isolé.",
  alternates: { canonical: "/racines-couronnes/le-modele" },
  openGraph: {
    url: "/racines-couronnes/le-modele",
    title: "Le modèle économique R&C — Logidental",
    description:
      "Mutualisation des charges, achats groupés, équipements partagés : l'avantage économique de la solution Racines & Couronnes.",
  },
};

const leviersIcons = [TrendingDown, ShoppingCart, Microscope, Calculator, Compass];

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
            Confiez à Logidental tout ce qui ne relève pas du soin. La mutualisation de la gestion
            procure des avantages économiques qu&apos;un praticien isolé n&apos;obtient pas — et que vous
            retrouvez intégralement en rejoignant un Pôle R&amp;C.
          </p>
        </div>
      </section>

      {/* Leviers */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="font-serif text-3xl text-charcoal mb-12">Les leviers de la mutualisation</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leviersMutualisation.map((levier, i) => {
              const Icon = leviersIcons[i];
              return (
                <div key={levier.title} className="bg-surface rounded-xl p-8">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-lg text-charcoal mb-3">{levier.title}</h3>
                  <p className="text-charcoal-muted text-sm leading-relaxed">{levier.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparatif */}
      <section className="bg-surface">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl text-charcoal mb-4">Exercice isolé ou Pôle R&amp;C ?</h2>
            <p className="text-charcoal-muted max-w-xl mx-auto">
              À activité égale, le modèle collectif abaisse le coût de fonctionnement et recentre votre
              temps sur le soin.
            </p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="p-4 sm:p-5 text-sm font-semibold text-charcoal-muted"></th>
                  <th className="p-4 sm:p-5 text-sm font-semibold text-charcoal-muted">Exercice isolé</th>
                  <th className="p-4 sm:p-5 text-sm font-semibold text-secondary">Pôle R&amp;C</th>
                </tr>
              </thead>
              <tbody>
                {comparatif.map((row) => (
                  <tr key={row.critere} className="border-b border-gray-100 last:border-0">
                    <td className="p-4 sm:p-5 font-medium text-charcoal">{row.critere}</td>
                    <td className="p-4 sm:p-5 text-charcoal-muted text-sm">{row.isole}</td>
                    <td className="p-4 sm:p-5 text-charcoal text-sm font-medium bg-secondary/5">{row.pole}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Double effet */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="bg-secondary/5 rounded-2xl p-10 border border-secondary/20 max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl text-charcoal mb-4">Un double effet</h2>
            <p className="text-charcoal-muted leading-relaxed mb-4">
              La centralisation agit sur deux plans : elle <strong className="text-charcoal">abaisse votre
              coût de fonctionnement</strong> — donc améliore votre revenu net à activité égale — et elle
              <strong className="text-charcoal"> sécurise la déductibilité</strong> de vos charges en
              garantissant la traçabilité des justificatifs.
            </p>
            <p className="text-charcoal-muted text-sm leading-relaxed">
              L&apos;effet précis sur votre situation est chiffré avec l&apos;expert-comptable du cabinet,
              lors d&apos;une étude personnalisée.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
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
