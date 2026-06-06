import Link from "next/link";
import { ShieldCheck, Award, RefreshCw } from "lucide-react";
import { labelDomaines } from "@/data/racines-couronnes";
import RcClusterNav from "@/components/ui/RcClusterNav";

export const metadata = {
  title: "Le Label Racines & Couronnes — Logidental",
  description:
    "Le label Racines & Couronnes est une démarche qualité auditée : 8 domaines d'exigences, deux niveaux (Essentiel et Excellence), audit tous les 6 mois. La garantie d'un cabinet sûr et conforme.",
  alternates: { canonical: "/racines-couronnes/le-label" },
  openGraph: {
    url: "/racines-couronnes/le-label",
    title: "Le Label Racines & Couronnes — Logidental",
    description:
      "Une démarche qualité auditée : 8 domaines d'exigences, deux niveaux Essentiel et Excellence, audit tous les 6 mois.",
  },
};

const packs = [
  {
    icon: ShieldCheck,
    title: "Pack Essentiel",
    description:
      "Le socle de conformité requis pour obtenir le label : sécurité, hygiène et obligations réglementaires.",
  },
  {
    icon: Award,
    title: "Pack Excellence",
    description:
      "Les exigences de montée en maturité, au-delà du socle, pour viser le plus haut niveau de qualité.",
  },
  {
    icon: RefreshCw,
    title: "Audit tous les 6 mois",
    description:
      "Chaque critère est noté sur 5 lors d'un audit initial puis semestriel. Tout écart donne lieu à une action corrective suivie.",
  },
];

export default function LeLabelPage() {
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
          <h1 className="font-serif text-4xl sm:text-5xl text-charcoal mb-4">Le Label R&amp;C</h1>
          <p className="text-charcoal-muted max-w-2xl text-lg">
            Bien plus qu&apos;une marque, Racines &amp; Couronnes est une <strong className="text-charcoal">démarche
            qualité auditée</strong>. Le label garantit qu&apos;un cabinet respecte un référentiel exigeant,
            vérifié régulièrement — au bénéfice des patients comme des praticiens.
          </p>
        </div>
      </section>

      {/* Fonctionnement du label */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl text-charcoal mb-4">Un référentiel exigeant, audité tous les 6 mois</h2>
            <p className="text-charcoal-muted">
              Le label repose sur une grille d&apos;audit à deux niveaux et une vérification dans la durée.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {packs.map((pack) => (
              <div key={pack.title} className="bg-surface rounded-xl p-8">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-5">
                  <pack.icon className="w-6 h-6 text-secondary" />
                </div>
                <h3 className="font-semibold text-lg text-charcoal mb-3">{pack.title}</h3>
                <p className="text-charcoal-muted text-sm leading-relaxed">{pack.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8 domaines d'exigences */}
      <section className="bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <h2 className="font-serif text-3xl text-charcoal mb-4">8 domaines d&apos;exigences</h2>
            <p className="text-charcoal-muted">
              Le référentiel couvre l&apos;ensemble de la vie du cabinet, de l&apos;asepsie à
              l&apos;engagement environnemental.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
            {labelDomaines.map((domaine, i) => (
              <div key={domaine.title} className="flex gap-5">
                <span className="font-serif text-3xl text-secondary/30 leading-none select-none w-10 flex-shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-semibold text-lg text-charcoal mb-2">{domaine.title}</h3>
                  <p className="text-charcoal-muted text-sm leading-relaxed">{domaine.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <RcClusterNav currentSlug="le-label" />
    </>
  );
}
