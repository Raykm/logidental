// Contenu de la solution Racines & Couronnes (R&C).
// Source : « Livre du cabinet dentaire » — SAS LOGIDENTAL, édition 2026.
// Synthèse à visée commerciale destinée aux chirurgiens-dentistes libéraux.

// Les 4 piliers de la solution — utilisés par le hub et la navigation inter-pages.
export const clusterPages = [
  {
    slug: "le-modele",
    label: "Le modèle économique",
    tagline: "Un loyer mensuel, un socle de base, des modules à la carte",
    teaser:
      "Vous louez un cabinet clé en main et ne payez que pour les services dont vous avez besoin. Un loyer mensuel clair, ajustable selon les modules choisis — et toute la gestion déléguée à Logidental.",
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

// --- Le modèle économique : loyer mensuel, socle de base + modules à la carte ---

export const principeModele = [
  {
    title: "Un socle de base",
    description:
      "Vous louez un cabinet clé en main : locaux aménagés, équipement et services essentiels pour exercer dès le premier jour.",
  },
  {
    title: "Des modules à la carte",
    description:
      "Vous ajoutez uniquement les services dont vous avez besoin — secrétariat, stérilisation, consommables, communication… — et les ajustez à votre activité.",
  },
  {
    title: "Un loyer mensuel",
    description:
      "Vous réglez un loyer mensuel correspondant au socle et aux modules choisis. Un budget clair, sans investissement initial lourd.",
  },
];

export const avantagesModele = [
  {
    title: "Aucun investissement lourd",
    description:
      "Pas de matériel à acheter ni de travaux à financer : vous vous installez dans un cabinet déjà équipé.",
  },
  {
    title: "Un budget prévisible",
    description:
      "Un loyer mensuel clair qui couvre exactement les services que vous avez retenus, sans mauvaise surprise.",
  },
  {
    title: "Une offre flexible",
    description:
      "Vous ne payez que les modules utiles et pouvez les faire évoluer au rythme de votre activité.",
  },
  {
    title: "Zéro gestion",
    description:
      "Logidental prend en charge tout ce qui ne relève pas du soin : administratif, personnel, maintenance, informatique…",
  },
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

// --- Le Label Racines & Couronnes (grille d'audit, § 11.3) ---

export const labelDomaines = [
  {
    title: "Hygiène et asepsie",
    description:
      "Stérilisation tracée selon un protocole formalisé, zones de stérilisation séparées (marche en avant), plan de nettoyage des locaux, contrôle de la qualité de l'eau et de l'air.",
  },
  {
    title: "Sécurité des salariés",
    description:
      "Matériel de premiers secours et défibrillateur (DAE), formation AFGSU, EPI conformes, protocole AES affiché, sensibilisation aux risques biologiques et chimiques.",
  },
  {
    title: "Santé publique",
    description:
      "Gestion des DASRI avec prestataire agréé, protection RGPD des données patients, stockage sécurisé des produits dangereux et fiches de données de sécurité disponibles.",
  },
  {
    title: "Accueil et protection des patients",
    description:
      "Horaires clairs, information des urgences en l'absence du praticien, circuits d'accueil sans croisement, désinfection systématique entre chaque patient, prise en charge des patients fragiles.",
  },
  {
    title: "Conformité réglementaire",
    description:
      "DUERP à jour, affichages obligatoires, registre de sécurité, accessibilité PMR validée, contrôle de radioprotection à jour, audits internes réguliers.",
  },
  {
    title: "Maintenance",
    description:
      "Vérifications électrique et incendie à jour, maintenance tracée du fauteuil et des dispositifs de stérilisation.",
  },
  {
    title: "Relation patient et éthique",
    description:
      "Consentement éclairé systématique, charte patient affichée, enquête de satisfaction annuelle et traitement des retours.",
  },
  {
    title: "Engagement environnemental et performance",
    description:
      "Tri sélectif des déchets, réduction des consommables à usage unique, suivi d'indicateurs de performance (ex. taux de rendez-vous manqués).",
  },
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
