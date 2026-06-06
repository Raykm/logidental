import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { clusterPages } from "@/data/racines-couronnes";

// Navigation entre les piliers de la solution R&C + appel à l'action.
// Affichée en bas de chaque page de détail du cluster.
export default function RcClusterNav({ currentSlug }: { currentSlug: string }) {
  const others = clusterPages.filter((p) => p.slug !== currentSlug);

  return (
    <>
      {/* Autres piliers */}
      <section className="bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
            <h2 className="font-serif text-2xl text-charcoal">Explorer la solution R&C</h2>
            <Link
              href="/racines-couronnes"
              className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
            >
              Retour à la vue d&apos;ensemble <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {others.map((p) => (
              <Link
                key={p.slug}
                href={`/racines-couronnes/${p.slug}`}
                className="group bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-secondary/30 transition-all"
              >
                <h3 className="font-semibold text-charcoal mb-2 group-hover:text-secondary transition-colors">
                  {p.label}
                </h3>
                <p className="text-charcoal-muted text-sm leading-relaxed">{p.tagline}</p>
              </Link>
            ))}
          </div>
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
