import Link from "next/link";
import { Briefcase, Users, UserCheck, CalendarClock, FileSignature, RefreshCw } from "lucide-react";
import { independancePoints } from "@/data/racines-couronnes";
import RcClusterNav from "@/components/ui/RcClusterNav";

export const metadata = {
  title: "Votre indépendance préservée — Racines & Couronnes | Logidental",
  description:
    "Statut libéral, propriété de votre patientèle, liberté d'organisation : la solution R&C vous apporte la force du collectif sans rien céder de votre indépendance.",
  alternates: { canonical: "/racines-couronnes/independance" },
  openGraph: {
    url: "/racines-couronnes/independance",
    title: "Votre indépendance préservée — Racines & Couronnes | Logidental",
    description:
      "Statut libéral, propriété de votre patientèle, liberté d'organisation : la force du collectif sans rien céder de votre indépendance.",
  },
};

const pointIcons = [Briefcase, Users, UserCheck, CalendarClock, FileSignature, RefreshCw];

export default function IndependancePage() {
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
          <h1 className="font-serif text-4xl sm:text-5xl text-charcoal mb-4">Votre indépendance préservée</h1>
          <p className="text-charcoal-muted max-w-2xl text-lg">
            Rejoindre un Pôle R&amp;C, c&apos;est gagner la force du collectif sans rien céder de votre
            liberté. Vous vous libérez de la gestion, pas de votre exercice.
          </p>
        </div>
      </section>

      {/* Points */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 gap-8">
            {independancePoints.map((point, i) => {
              const Icon = pointIcons[i];
              return (
                <div key={point.title} className="flex gap-5">
                  <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg text-charcoal mb-2">{point.title}</h3>
                    <p className="text-charcoal-muted text-sm leading-relaxed">{point.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Citation */}
      <section className="bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <p className="font-serif text-3xl text-charcoal leading-snug">
            « Exercez en toute sérénité, nous gérons le reste. »
          </p>
          <p className="text-charcoal-muted mt-4">
            La promesse Racines &amp; Couronnes : confort, sérénité et indépendance.
          </p>
        </div>
      </section>

      <RcClusterNav currentSlug="independance" />
    </>
  );
}
