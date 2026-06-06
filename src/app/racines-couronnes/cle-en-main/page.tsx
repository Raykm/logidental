import Link from "next/link";
import { Check, Stethoscope } from "lucide-react";
import { priseEnChargeLogidental, resteAuPraticien, processSteps } from "@/data/racines-couronnes";
import RcClusterNav from "@/components/ui/RcClusterNav";

export const metadata = {
  title: "Clé en main & accompagnement — Racines & Couronnes | Logidental",
  description:
    "De l'agencement à la comptabilité, Logidental installe et gère votre cabinet de A à Z. Découvrez ce que nous prenons en charge et notre process en 4 étapes.",
  alternates: { canonical: "/racines-couronnes/cle-en-main" },
  openGraph: {
    url: "/racines-couronnes/cle-en-main",
    title: "Clé en main & accompagnement — Racines & Couronnes | Logidental",
    description:
      "Logidental installe et gère votre cabinet de A à Z. Vous n'avez plus qu'à soigner.",
  },
};

export default function CleEnMainPage() {
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
          <h1 className="font-serif text-4xl sm:text-5xl text-charcoal mb-4">Clé en main &amp; accompagnement</h1>
          <p className="text-charcoal-muted max-w-2xl text-lg">
            De l&apos;agencement à l&apos;informatique, du secrétariat à la comptabilité, Logidental
            installe et gère votre cabinet de A à Z. Vous n&apos;avez plus qu&apos;à soigner.
          </p>
        </div>
      </section>

      {/* Répartition */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Logidental */}
            <div className="bg-secondary/5 rounded-2xl p-10 border border-secondary/20">
              <h2 className="font-serif text-2xl text-charcoal mb-6">Logidental prend en charge</h2>
              <ul className="space-y-3">
                {priseEnChargeLogidental.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-charcoal-muted">
                    <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Praticien */}
            <div className="bg-surface rounded-2xl p-10 border border-gray-100">
              <h2 className="font-serif text-2xl text-charcoal mb-6">Vous gardez la main sur</h2>
              <ul className="space-y-3">
                {resteAuPraticien.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-charcoal-muted">
                    <Stethoscope className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-charcoal-muted text-sm leading-relaxed mt-6">
                L&apos;essentiel : votre exercice clinique et votre relation patient restent entièrement
                les vôtres.
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
              De la première rencontre à l&apos;accompagnement au long cours, chaque étape est maîtrisée.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
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

      <RcClusterNav currentSlug="cle-en-main" />
    </>
  );
}
