import Link from "next/link";
import { FileText, Clock, Sparkles, Radiation, GraduationCap, Lock, Heart, Check } from "lucide-react";
import { engagements, engagementPrincipes } from "@/data/racines-couronnes";
import RcClusterNav from "@/components/ui/RcClusterNav";

export const metadata = {
  title: "Nos engagements qualité — Racines & Couronnes | Logidental",
  description:
    "La charte éthique Racines & Couronnes : des engagements vérifiables et auditables sur l'information du patient, l'hygiène, la radioprotection, le RGPD et la satisfaction.",
  alternates: { canonical: "/racines-couronnes/nos-engagements" },
  openGraph: {
    url: "/racines-couronnes/nos-engagements",
    title: "Nos engagements qualité — Racines & Couronnes | Logidental",
    description:
      "La charte éthique R&C : des engagements vérifiables et auditables au service de vos patients et de votre exercice.",
  },
};

const engagementIcons = [FileText, Clock, Sparkles, Radiation, GraduationCap, Lock, Heart];

export default function NosEngagementsPage() {
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
          <h1 className="font-serif text-4xl sm:text-5xl text-charcoal mb-4">Nos engagements qualité</h1>
          <p className="text-charcoal-muted max-w-2xl text-lg">
            La charte éthique Racines &amp; Couronnes formalise des engagements
            <strong className="text-charcoal"> vérifiables, mesurables et auditables</strong>. Un cadre
            commun qui rassure vos patients et valorise votre exercice.
          </p>
        </div>
      </section>

      {/* Principes fondateurs */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-3xl text-charcoal mb-4">Des principes fondateurs</h2>
              <p className="text-charcoal-muted leading-relaxed">
                La solution Racines &amp; Couronnes repose avant tout sur l&apos;éthique et le respect du
                patient. Ces principes guident chaque praticien adhérent au réseau.
              </p>
            </div>
            <ul className="space-y-3">
              {engagementPrincipes.map((p) => (
                <li key={p} className="flex items-start gap-3 text-charcoal-muted">
                  <Check className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Engagements vérifiables */}
      <section className="bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl text-charcoal mb-4">7 engagements vérifiables</h2>
            <p className="text-charcoal-muted max-w-xl mx-auto">
              Chaque engagement est assorti d&apos;indicateurs revus chaque année en assemblée générale.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {engagements.map((engagement, i) => {
              const Icon = engagementIcons[i];
              return (
                <div key={engagement.title} className="bg-white rounded-xl p-8 shadow-sm">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-lg text-charcoal mb-3">{engagement.title}</h3>
                  <p className="text-charcoal-muted text-sm leading-relaxed">{engagement.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <RcClusterNav currentSlug="nos-engagements" />
    </>
  );
}
