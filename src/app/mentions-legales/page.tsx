export const metadata = {
  title: "Mentions légales — Logidental",
  alternates: { canonical: "/mentions-legales" },
  openGraph: {
    url: "/mentions-legales",
    title: "Mentions légales — Logidental",
  },
};

export default function MentionsLegalesPage() {
  return (
    <section className="bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="font-serif text-4xl text-charcoal mb-12">Mentions légales</h1>

        <div className="space-y-10 text-charcoal-muted leading-relaxed">
          <div>
            <h2 className="font-semibold text-charcoal text-xl mb-4">Éditeur du site</h2>
            <p>
              <strong className="text-charcoal">LOGIDENTAL SAS</strong><br />
              56 rue Cassiopée, Écoparc Bel Air<br />
              34570 Vailhauquès<br />
              Téléphone : 04 67 92 06 05<br />
              Email : contact@logidental.fr<br />
              RCS Montpellier 805 058 013<br />
              Capital social : 10 000 €
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-charcoal text-xl mb-4">Directeur de la publication</h2>
            <p>Alexandre TALHOUK, Directeur Général</p>
          </div>

          <div>
            <h2 className="font-semibold text-charcoal text-xl mb-4">Hébergement</h2>
            <p>
              Ce site est hébergé par <strong className="text-charcoal">Vercel Inc.</strong><br />
              440 N Barranca Ave #4133, Covina, CA 91723, États-Unis<br />
              <a href="https://vercel.com" className="text-secondary hover:underline" target="_blank" rel="noopener noreferrer">
                vercel.com
              </a>
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-charcoal text-xl mb-4">Propriété intellectuelle</h2>
            <p>
              L'ensemble des contenus présents sur ce site (textes, images, logos, graphismes) est la propriété
              exclusive de Logidental SAS ou de ses partenaires. Toute reproduction, représentation, modification ou
              exploitation commerciale, totale ou partielle, est interdite sans autorisation écrite préalable.
              Une exception est accordée pour les usages pédagogiques et non commerciaux avec mention de la source.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-charcoal text-xl mb-4">Données personnelles</h2>
            <p>
              Les informations collectées via les formulaires de ce site (contact, devis, support) sont utilisées
              exclusivement pour traiter vos demandes. Aucune donnée nominative n'est collectée à l'insu de
              l'utilisateur ni cédée à des tiers.
            </p>
            <p className="mt-3">
              Ce site utilise <strong className="text-charcoal">Umami Analytics</strong>, un outil de mesure
              d'audience respectueux de la vie privée : aucun cookie de traçage n'est déposé, aucune donnée
              personnelle identifiable n'est collectée.
            </p>
            <p className="mt-3">
              Conformément à la loi Informatique et Libertés du 6 janvier 1978 modifiée et au RGPD, vous disposez
              d'un droit d'accès, de rectification et de suppression de vos données. Exercez ce droit par email à{" "}
              <a href="mailto:contact@logidental.fr" className="text-secondary hover:underline">
                contact@logidental.fr
              </a>.
            </p>
          </div>

          <div>
            <h2 className="font-semibold text-charcoal text-xl mb-4">Responsabilité</h2>
            <p>
              Logidental SAS s'efforce de maintenir les informations de ce site à jour et exactes, mais ne peut
              garantir l'exactitude, la complétude ou l'actualité des informations diffusées. Logidental SAS décline
              toute responsabilité pour les dommages directs ou indirects résultant de l'utilisation de ce site.
            </p>
          </div>

          <p className="text-sm text-gray-400 pt-4 border-t border-gray-100">
            Dernière mise à jour : mai 2026
          </p>
        </div>
      </div>
    </section>
  );
}
