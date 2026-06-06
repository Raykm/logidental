export const metadata = {
  title: "Politique de confidentialité — Logidental",
  description:
    "Comment Racines & Couronnes (SAS Logidental) traite vos données personnelles et de santé : finalités, bases légales, durées de conservation, hébergement HDS et vos droits (RGPD).",
  alternates: { canonical: "/confidentialite" },
  openGraph: {
    url: "/confidentialite",
    title: "Politique de confidentialité — Logidental",
  },
};

export default function ConfidentialitePage() {
  return (
    <section className="bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="font-serif text-4xl text-charcoal mb-4">Politique de confidentialité</h1>
        <p className="text-charcoal-muted mb-12">
          La protection de vos données est encadrée par le Règlement (UE) 2016/679 (RGPD), la loi Informatique
          et Libertés et le Code de la santé publique.
        </p>

        <div className="space-y-10 text-charcoal-muted leading-relaxed">
          <div>
            <h2 className="font-semibold text-charcoal text-xl mb-4">Responsable du traitement</h2>
            <p>
              <strong className="text-charcoal">SAS LOGIDENTAL</strong>, exploitant Racines &amp; Couronnes des
              Vautes — 56 rue Cassiopée, 34570 Vailhauquès. Contact :{" "}
              <a href="mailto:contact@logidental.fr" className="text-secondary hover:underline">
                contact@logidental.fr
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-charcoal text-xl mb-4">Finalités</h2>
            <p>
              Vos données sont traitées pour le suivi médical et la tenue du dossier, la facturation et la
              télétransmission, la gestion des rendez-vous et la communication avec vous.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-charcoal text-xl mb-4">Bases légales</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                Soins et tenue du dossier médical : exécution de la mission de soins (article 9.2.h du RGPD).
                Aucun consentement spécifique n&apos;est requis.
              </li>
              <li>Rappels et confirmations de rendez-vous : intérêt légitime du cabinet.</li>
              <li>Newsletter et communications de prévention : consentement explicite (opt-in).</li>
            </ul>
          </div>

          <div>
            <h2 className="font-semibold text-charcoal text-xl mb-4">Données de santé et hébergement</h2>
            <p>
              Les données de santé constituent une catégorie particulière. Lorsqu&apos;elles sont externalisées,
              elles sont hébergées chez un hébergeur certifié <strong className="text-charcoal">HDS</strong>{" "}
              (Hébergeur de Données de Santé). Les prestataires techniques sont liés par un contrat conforme à
              l&apos;article 28 du RGPD.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-charcoal text-xl mb-4">Durées de conservation</h2>
            <p>
              Le dossier médical est conservé 20 ans à compter du dernier acte (jusqu&apos;au 28ᵉ anniversaire
              pour les patients mineurs), conformément à l&apos;article R.1112-7 du Code de la santé publique.
              Les autres données sont conservées selon les durées légales et les référentiels CNIL applicables.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-charcoal text-xl mb-4">Vos droits</h2>
            <p>
              Vous disposez d&apos;un droit d&apos;accès, de rectification, d&apos;effacement, d&apos;opposition,
              de limitation et de portabilité, exercés auprès du délégué à la protection des données (DPO) à
              l&apos;adresse{" "}
              <a href="mailto:contact@logidental.fr" className="text-secondary hover:underline">
                contact@logidental.fr
              </a>
              . Une réponse vous est apportée dans un délai d&apos;un mois. Vous pouvez également saisir la CNIL
              (
              <a
                href="https://www.cnil.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:underline"
              >
                www.cnil.fr
              </a>
              ).
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-charcoal text-xl mb-4">Cookies et mesure d&apos;audience</h2>
            <p>
              Ce site utilise une solution de mesure d&apos;audience respectueuse de la vie privée : aucun cookie
              de traçage n&apos;est déposé et aucune donnée personnelle identifiable n&apos;est collectée à des
              fins publicitaires.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-charcoal text-xl mb-4">Médiation</h2>
            <p>
              En cas de différend, vous pouvez saisir le Conseil départemental de l&apos;Ordre des
              chirurgiens-dentistes, qui propose une conciliation gratuite préalable à toute action.
            </p>
          </div>

          <p className="text-sm text-gray-400 pt-4 border-t border-gray-100">
            Dernière mise à jour : juin 2026
          </p>
        </div>
      </div>
    </section>
  );
}
