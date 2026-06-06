// Contenu de la solution Racines & Couronnes (R&C).
// Source : « Livre du cabinet dentaire » — SAS LOGIDENTAL, édition 2026.
// Synthèse à visée commerciale destinée aux chirurgiens-dentistes libéraux.

// Les 4 piliers de la solution — utilisés par le hub et la navigation inter-pages.
export const clusterPages = [
  {
    slug: "le-modele",
    label: "Le modèle économique",
    tagline: "Mutualisez vos charges, démultipliez votre rentabilité",
    teaser:
      "Confiez à Logidental tout ce qui ne relève pas du soin : charges fixes mutualisées, achats groupés, équipements lourds partagés. Un avantage économique qu'un praticien isolé n'obtient pas.",
  },
  {
    slug: "independance",
    label: "Votre indépendance préservée",
    tagline: "Libéral à 100 %, propriétaire de votre patientèle",
    teaser:
      "Vous restez libéral, maître de votre exercice et de votre organisation. Vos confrères du pôle ne sont liés à vous par aucun rapport financier : vous gagnez la force du collectif sans rien céder de votre liberté.",
  },
  {
    slug: "nos-engagements",
    label: "Nos engagements qualité",
    tagline: "Une charte éthique, vérifiable et auditable",
    teaser:
      "La charte Racines & Couronnes formalise des engagements mesurables : information du patient, urgences, hygiène, radioprotection, RGPD, écoute. Un cadre qui rassure vos patients et valorise votre exercice.",
  },
  {
    slug: "cle-en-main",
    label: "Clé en main & accompagnement",
    tagline: "Un cabinet livré prêt à soigner, une gestion déléguée",
    teaser:
      "De l'agencement à l'informatique, du secrétariat à la comptabilité : Logidental installe et gère votre cabinet de A à Z. Vous n'avez plus qu'à soigner.",
  },
];

// --- Le modèle économique (Partie III du Livre du cabinet) ---

export const leviersMutualisation = [
  {
    title: "Charges fixes mutualisées",
    description:
      "Loyer, personnel, énergie, informatique, assurances : le coût unitaire supporté par praticien décroît à mesure que le pôle s'agrandit.",
  },
  {
    title: "Achats groupés",
    description:
      "Consommables, prothèses, maintenance, prestataires : un volume agrégé améliore mécaniquement vos conditions tarifaires.",
  },
  {
    title: "Équipements lourds partagés",
    description:
      "Imagerie, stérilisation : des investissements hors de portée en exercice isolé deviennent accessibles, amortis sur l'ensemble du pôle.",
  },
  {
    title: "Gestion fiscale & comptable déléguée",
    description:
      "Veille fiscale, collecte et conservation des justificatifs, liaison avec l'expert-comptable : moins de déductions manquées, risque de redressement réduit.",
  },
  {
    title: "Pilotage centralisé",
    description:
      "Arbitrages d'investissement (déduction immédiate ou amortissement) et politique tarifaire commune pilotés pour votre compte.",
  },
];

export const comparatif = [
  { critere: "Charges fixes", isole: "Supportées seul", pole: "Mutualisées, coût unitaire dégressif" },
  { critere: "Achats & maintenance", isole: "Tarifs unitaires", pole: "Tarifs négociés en volume" },
  { critere: "Équipements lourds", isole: "Souvent hors de portée", pole: "Accessibles, amortis collectivement" },
  { critere: "Comptabilité & fiscalité", isole: "À votre charge", pole: "Externalisée et sécurisée" },
  { critere: "Temps consacré à la gestion", isole: "Élevé", pole: "Recentré sur le soin" },
];

// --- Indépendance préservée (Charte, règlement intérieur, FAQ) ---

export const independancePoints = [
  {
    title: "Statut libéral intégral",
    description:
      "Vous exercez en libéral et conservez l'entière maîtrise de votre pratique. Vous vous libérez de la gestion, pas de votre liberté.",
  },
  {
    title: "Confrères, pas associés",
    description:
      "Les praticiens d'un Pôle R&C sont de simples confrères, sans aucun lien financier entre eux. La gestion des charges et des ressources humaines est entièrement portée par Logidental.",
  },
  {
    title: "Propriétaire de votre patientèle",
    description:
      "Votre patientèle reste la vôtre. À votre départ, vous récupérez votre base de données complète et pouvez afficher votre plaque de transfert pendant un an.",
  },
  {
    title: "Libre de votre organisation",
    description:
      "Vous déterminez librement vos horaires et vos congés et disposez d'un accès illimité aux locaux. Vous choisissez vos collaborateurs et remplaçants.",
  },
  {
    title: "Un engagement souple",
    description:
      "Une période de transition vous permet de tester le dispositif. L'engagement prend la forme d'un bail professionnel de 6 ans, résiliable avec un préavis de 6 mois.",
  },
  {
    title: "Déjà installé ? C'est possible aussi",
    description:
      "Une étude personnalisée permet de bâtir et budgétiser plusieurs scénarios pour une mise en place progressive de la solution R&C dans votre cabinet existant.",
  },
];

// --- Charte qualité & engagements (§ 1.4 du Livre du cabinet) ---

export const engagements = [
  {
    title: "Information du patient",
    description:
      "Remise systématique d'un devis détaillé avant tout acte hors nomenclature — objectif 100 % des actes concernés.",
  },
  {
    title: "Prise en charge des urgences",
    description:
      "Une organisation collective garantissant un délai de prise en charge cible, mesuré et revu régulièrement.",
  },
  {
    title: "Hygiène & stérilisation",
    description:
      "Application stricte du protocole de stérilisation, audit interne semestriel et plan d'action documenté.",
  },
  {
    title: "Radioprotection",
    description:
      "Port systématique du dosimètre individuel et suivi dosimétrique trimestriel assuré par la Personne Compétente en Radioprotection.",
  },
  {
    title: "Formation continue",
    description:
      "Respect du Développement Professionnel Continu (DPC) sur la période triennale, justificatifs à l'appui.",
  },
  {
    title: "Confidentialité & données",
    description:
      "Respect du RGPD et du secret professionnel, hébergement des données de santé certifié HDS, signalement immédiat de tout incident.",
  },
  {
    title: "Écoute du patient",
    description:
      "Recueil annuel de la satisfaction patient et plan d'amélioration documenté présenté en assemblée générale.",
  },
];

export const engagementPrincipes = [
  "Respect du patient : information loyale, consentement éclairé, secret professionnel.",
  "Respect des règles déontologiques et des recommandations de bonne pratique.",
  "Respect des dispositions conventionnelles et tarifaires applicables.",
  "Respect du personnel, des installations et des ressources du cabinet.",
];

// --- Clé en main & accompagnement (§ 4 et art. 14 du règlement intérieur) ---

export const priseEnChargeLogidental = [
  "Locaux, agencement et loyer",
  "Personnel : accueil, secrétariat, stérilisation, facturation, devis",
  "Informatique, téléphonie et sauvegarde Cloud HDS",
  "Maintenance et gestion du parc technique",
  "Énergie, eau et télécommunications",
  "Mobilier, équipement et entretien des locaux",
  "Sécurité, alarme et surveillance",
  "Assurances collectives et RC d'exploitation",
  "Veille et assistance juridique",
  "Gestion administrative, comptable et communication",
];

export const resteAuPraticien = [
  "Le soin et la relation avec vos patients",
  "Vos consommables et prothèses",
  "Votre responsabilité civile professionnelle",
  "Votre fiscalité personnelle",
];

export const processSteps = [
  {
    step: "01",
    title: "Analyse des besoins",
    description:
      "Une analyse fonctionnelle et précise de vos besoins, de votre situation et de vos objectifs professionnels.",
  },
  {
    step: "02",
    title: "Proposition chiffrée",
    description:
      "Une proposition détaillée et budgétisée, adaptée à votre projet, avec plusieurs scénarios si nécessaire.",
  },
  {
    step: "03",
    title: "Déploiement",
    description:
      "Mise en place complète de la solution R&C : agencement, équipement, informatique, accompagnement.",
  },
  {
    step: "04",
    title: "Accompagnement continu",
    description:
      "Une équipe dédiée (ingénieur, juriste, technicien) assure la gestion quotidienne et la veille pour votre compte, au long cours.",
  },
];
