import { ImageIcon } from "lucide-react";

export const metadata = {
  title: "Nos Réalisations — Logidental",
  description:
    "Découvrez nos réalisations : cabinets dentaires conçus et livrés clés en main par les équipes Logidental.",
};

const placeholders = [1, 2, 3, 4, 5];

export default function NosRealisationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-surface border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <p className="text-secondary font-semibold text-sm tracking-widest uppercase mb-3">
            Portfolio
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl text-charcoal mb-4">
            Nos Réalisations
          </h1>
          <p className="text-charcoal-muted max-w-2xl text-lg">
            Chaque cabinet est unique. Découvrez quelques-uns de nos projets réalisés clés en main,
            de la conception à la livraison.
          </p>
        </div>
      </section>

      {/* Grille */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {placeholders.map((n) => (
              <div
                key={n}
                className="aspect-[4/3] bg-surface rounded-xl border-2 border-dashed border-gray-200 flex flex-col items-center justify-center gap-3 text-charcoal-muted"
              >
                <ImageIcon className="w-10 h-10 text-gray-300" />
                <p className="text-sm font-medium">Réalisation {n}</p>
                <p className="text-xs text-gray-400">Photo à venir</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
