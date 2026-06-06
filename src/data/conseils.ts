// RÉSERVÉ — non utilisé sur le site Logidental.
// Ces fiches d'information patient sont destinées au futur template de site
// des cabinets labellisés Racines & Couronnes (contenu patient, pas B2B).
// Conservées ici pour réemploi. Source des thèmes : « Livre du cabinet » § 5.14.2.
// Informations générales, à visée pédagogique ; ne remplacent pas l'avis du praticien.

export type Conseil = {
  slug: string;
  title: string;
  excerpt: string;
  intro: string;
  sections: { heading: string; body: string }[];
};

export const conseils: Conseil[] = [
  {
    slug: "facettes-ceramiques",
    title: "Les facettes céramiques",
    excerpt: "De fines coquilles de céramique pour corriger la forme et la teinte des dents visibles.",
    intro:
      "Les facettes sont de fines pellicules de céramique collées sur la face visible des dents pour en améliorer l'apparence.",
    sections: [
      {
        heading: "Dans quels cas ?",
        body: "Dents tachées, usées, légèrement désalignées, espacées ou abîmées sur le secteur du sourire.",
      },
      {
        heading: "Comment ça se passe ?",
        body: "Après une étude esthétique, une très fine préparation de l'émail est réalisée, une empreinte est prise, puis les facettes fabriquées en laboratoire sont collées.",
      },
      {
        heading: "Après la pose",
        body: "Une bonne hygiène et des contrôles réguliers prolongent leur durée de vie. Évitez de croquer des aliments très durs.",
      },
    ],
  },
  {
    slug: "inlay-onlay",
    title: "L'inlay / onlay",
    excerpt: "Une restauration sur mesure, alternative au plombage pour les dents très cariées.",
    intro:
      "L'inlay/onlay est une pièce fabriquée en laboratoire (céramique ou composite) qui restaure une dent abîmée en préservant un maximum de tissu sain.",
    sections: [
      {
        heading: "Dans quels cas ?",
        body: "Caries de taille moyenne à importante, là où une simple obturation ne suffit pas et où la couronne n'est pas encore nécessaire.",
      },
      {
        heading: "Comment ça se passe ?",
        body: "La dent est nettoyée et préparée, une empreinte est prise, puis la pièce est collée lors d'une seconde séance.",
      },
      {
        heading: "Les avantages",
        body: "Solidité, étanchéité et esthétique supérieures à une obturation classique.",
      },
    ],
  },
  {
    slug: "extraction-dentaire",
    title: "L'extraction dentaire",
    excerpt: "Le retrait d'une dent qui ne peut être conservée, dans des conditions sécurisées.",
    intro:
      "L'extraction consiste à retirer une dent lorsqu'elle ne peut plus être soignée ou conservée.",
    sections: [
      {
        heading: "Dans quels cas ?",
        body: "Dent très délabrée, infection importante, dent de sagesse incluse, ou pour des raisons orthodontiques.",
      },
      {
        heading: "Comment ça se passe ?",
        body: "Réalisée sous anesthésie locale, après information sur les alternatives et recueil de votre consentement.",
      },
      {
        heading: "Conseils après l'extraction",
        body: "Mordez la compresse 1 à 2 h, évitez de cracher, de fumer et tout effort physique le jour même, privilégiez une alimentation tiède et molle. Contactez le cabinet en cas de saignement persistant ou de douleur croissante.",
      },
    ],
  },
  {
    slug: "couronne-dentaire",
    title: "La couronne dentaire",
    excerpt: "Une « coiffe » qui protège et reconstitue une dent fragilisée.",
    intro:
      "La couronne recouvre entièrement une dent abîmée pour la protéger et lui rendre sa forme et sa fonction.",
    sections: [
      {
        heading: "Dans quels cas ?",
        body: "Dent dévitalisée, très cariée ou fracturée, ou comme support d'un bridge ou d'un implant.",
      },
      {
        heading: "Comment ça se passe ?",
        body: "La dent est préparée, une empreinte est prise, une couronne provisoire est posée, puis la couronne définitive est scellée.",
      },
      {
        heading: "Entretien",
        body: "Brossage et fil/brossettes au quotidien : une couronne bien entretenue dure de nombreuses années.",
      },
    ],
  },
  {
    slug: "prophylaxie-dentaire",
    title: "La prophylaxie dentaire",
    excerpt: "L'ensemble des soins de prévention pour garder des dents et des gencives saines.",
    intro:
      "La prophylaxie regroupe les actes de prévention : détartrage, polissage, conseils d'hygiène et contrôles réguliers.",
    sections: [
      {
        heading: "Pourquoi ?",
        body: "Prévenir les caries et les maladies des gencives préserve mieux vos dents — et coûte moins cher — que de les traiter.",
      },
      {
        heading: "En pratique",
        body: "Détartrage et polissage périodiques, application de fluor si besoin, et un contrôle au moins une fois par an.",
      },
      {
        heading: "À la maison",
        body: "Brossage deux fois par jour, fil dentaire ou brossettes, et une alimentation pauvre en sucres.",
      },
    ],
  },
  {
    slug: "blanchiment-dentaire",
    title: "Le blanchiment dentaire",
    excerpt: "Éclaircir la teinte des dents sous le contrôle d'un professionnel.",
    intro:
      "Le blanchiment professionnel éclaircit la couleur des dents à l'aide d'un gel adapté, en toute sécurité.",
    sections: [
      {
        heading: "Dans quels cas ?",
        body: "Dents jaunies ou ternies par le temps, le café, le thé ou le tabac, sur des dents saines.",
      },
      {
        heading: "Comment ça se passe ?",
        body: "Un examen préalable vérifie l'absence de carie ; le blanchiment se fait au cabinet et/ou à domicile avec des gouttières sur mesure.",
      },
      {
        heading: "Bon à savoir",
        body: "Une sensibilité passagère est possible. Le résultat dure plus longtemps en limitant les aliments colorants et le tabac.",
      },
    ],
  },
  {
    slug: "implants-dentaires",
    title: "Les implants dentaires",
    excerpt: "Une racine artificielle en titane pour remplacer une dent manquante.",
    intro:
      "L'implant est une vis en titane placée dans l'os de la mâchoire pour servir de support à une couronne, un bridge ou une prothèse.",
    sections: [
      {
        heading: "Dans quels cas ?",
        body: "Remplacer une ou plusieurs dents absentes, ou stabiliser une prothèse, sans avoir à tailler les dents voisines.",
      },
      {
        heading: "Comment ça se passe ?",
        body: "Bilan (radiographie ou 3D), pose chirurgicale sous anesthésie locale, cicatrisation (ostéo-intégration), puis pose de la prothèse.",
      },
      {
        heading: "Entretien",
        body: "Une hygiène rigoureuse et un suivi régulier garantissent la longévité de l'implant.",
      },
    ],
  },
  {
    slug: "maladie-parodontale",
    title: "La maladie parodontale",
    excerpt: "Une atteinte des gencives et de l'os qui peut conduire au déchaussement.",
    intro:
      "Les maladies parodontales (gingivite, parodontite) touchent les tissus qui soutiennent la dent ; non traitées, elles peuvent mener au déchaussement.",
    sections: [
      {
        heading: "Les signes",
        body: "Gencives rouges, gonflées, qui saignent, mauvaise haleine, dents qui bougent ou se déchaussent.",
      },
      {
        heading: "Le traitement",
        body: "Détartrage et surfaçage, contrôle de l'hygiène, parfois soins chirurgicaux. Un suivi régulier est essentiel.",
      },
      {
        heading: "La prévention",
        body: "Brossage soigné, brossettes ou fil, arrêt du tabac et contrôles réguliers.",
      },
    ],
  },
];
