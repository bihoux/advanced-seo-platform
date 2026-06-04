import img1 from "@/assets/pdf4/img_1.webp";
import img2 from "@/assets/pdf4/img_2.webp";
import img3 from "@/assets/pdf4/img_3.webp";
import img4 from "@/assets/pdf4/img_4.webp";
import img5 from "@/assets/pdf4/img_5.webp";
import img6 from "@/assets/pdf4/img_6.webp";
import img7 from "@/assets/pdf4/img_7.webp";
import img8 from "@/assets/pdf4/img_8.webp";
import img9 from "@/assets/pdf4/img_9.webp";
import img10 from "@/assets/pdf4/img_10.webp";
import img11 from "@/assets/pdf4/img_11.webp";
import img12 from "@/assets/pdf4/img_12.webp";
import type { Slide } from "./module1";

export const moduleInfo4 = {
  code: "Module 4",
  title: "SEO off-site avancé : netlinking stratégique et mesure de la popularité",
  course: "Rédaction & Optimisation SEO Avancée",
  level: "Universitaire — SEO Avancé 2026",
  duration: "≈ 6h",
  prerequis: "Modules 1, 2, 3 + fondamentaux du netlinking (cours « Principes de base du SEO »)",
  objectifs: [
    "Concevoir une stratégie de netlinking white hat basée sur des leviers modernes (link bait, digital PR, guest blogging contrôlé).",
    "Analyser un profil de backlinks (qualité, pertinence, ancres, toxicité) avec des outils avancés (Ahrefs, Majestic, SEMrush).",
    "Auditer la concurrence pour identifier des opportunités de liens.",
    "Mettre en place un système de suivi des KPIs off-site (Domain Authority, Trust Flow, dofollow/nofollow).",
    "Comprendre les modèles d'attribution multi-canaux pour mesurer l'impact réel du netlinking sur les conversions.",
  ],
};

export const chapters4 = [
  { id: "intro", title: "Introduction", icon: "Sparkles" },
  { id: "etat", title: "1. État des lieux 2025", icon: "Compass" },
  { id: "strategies", title: "2. Stratégies avancées", icon: "Link2" },
  { id: "audit", title: "3. Audit du profil de liens", icon: "Search" },
  { id: "impact", title: "4. Mesure d'impact business", icon: "TrendingUp" },
  { id: "pieges", title: "5. Pièges à éviter", icon: "AlertTriangle" },
  { id: "synthese", title: "Synthèse & TP", icon: "GraduationCap" },
];

export const slides4: Slide[] = [
  {
    id: "m4-s1",
    chapter: "intro",
    title: "Netlinking stratégique & popularité",
    subtitle: "SEO off-site avancé — Standards 2026",
    type: "intro",
    image: img1,
    content: {
      tagline: "Construire un profil de liens solide, durable et mesurable : white hat, digital PR, attribution.",
      pillars: ["LINK.QUALITY", "DIGITAL.PR", "AUDIT.PROFILE", "ATTRIBUTION"],
    },
  },
  {
    id: "m4-s2",
    chapter: "intro",
    title: "Objectifs pédagogiques",
    type: "list",
    content: { items: moduleInfo4.objectifs, prerequis: moduleInfo4.prerequis },
  },
  {
    id: "m4-s3",
    chapter: "intro",
    title: "Pourquoi le netlinking a changé",
    type: "content",
    image: img2,
    content: {
      lead: "Le netlinking reste l'un des piliers du SEO, mais les pratiques ont radicalement changé. Google pénalise désormais les schémas artificiels (PBN, achat de liens en masse) et valorise les liens éditoriaux naturels obtenus grâce à la qualité du contenu et à des relations presse authentiques.",
      callout: "La mesure de performance ne se limite plus au nombre de backlinks : pertinence thématique, ratio dofollow/nofollow, textes d'ancrage et impact business via des modèles d'attribution.",
    },
  },
  {
    id: "m4-s4",
    chapter: "etat",
    title: "1.1 Anciennes pratiques vs réalité 2025",
    type: "table",
    image: img3,
    content: {
      headers: ["Anciennes pratiques", "Réalité 2025"],
      rows: [
        ["Compter le nombre total de backlinks", "Seules la qualité et la pertinence thématique comptent vraiment"],
        ["Acheter des liens sur des plateformes", "Risque de pénalité manuelle (notification dans GSC)"],
        ["Utiliser des annuaires génériques", "Sans valeur, voire toxiques"],
        ["Échanger des liens massivement", "Détecté comme un schéma artificiel (filtre Penguin)"],
        ["Optimiser les ancres avec le mot-clé exact", "Suroptimisation — nature et variété indispensables"],
      ],
      tip: "Google utilise désormais l'IA pour détecter les liens artificiels même avec ancres variées.",
    },
  },
  {
    id: "m4-s5",
    chapter: "etat",
    title: "1.2 Signaux de qualité pour Google",
    type: "content",
    image: img4,
    content: {
      lead: "Google évalue chaque backlink selon plusieurs critères croisés.",
      items: [
        "Pertinence thématique : un lien depuis un site du même sujet pèse plus qu'un lien générique.",
        "Autorité du domaine source : Domain Authority (Moz), Trust Flow (Majestic), Domain Rating (Ahrefs).",
        "Position du lien : un lien éditorial en plein contenu > sidebar ou footer.",
        "Proximité sémantique : le texte autour du lien doit être en rapport avec le sujet cible.",
        "Trafic généré : un lien qui apporte des visiteurs réels est un signal positif.",
      ],
      warning: "Nouveauté 2025 : les schémas de guest blogging massif (même article sur 50 sites) sont désormais pénalisés.",
    },
  },
  {
    id: "m4-s6",
    chapter: "strategies",
    title: "2.1 Link baiting 2.0 — contenus appâts à liens",
    type: "table",
    image: img5,
    content: {
      headers: ["Type de contenu", "Exemple", "Pourquoi les sites linkent"],
      rows: [
        ["Étude originale / données exclusives", "« Analyse des 10 000 premiers résultats Google sur les snippets »", "Journalistes et bloggers citent la source de données"],
        ["Infographie dynamique / interactive", "Carte évolutive des prix de l'immobilier par région", "Attractive, facile à intégrer avec un embed"],
        ["Outil gratuit (calculateur, générateur)", "« Estimateur de budget SEO personnalisé »", "Les utilisateurs le partagent et les sites le recommandent"],
        ["Avis d'expert relayé (digital PR)", "« Interview de 50 experts sur les tendances 2025 »", "Chaque expert cite l'article sur son propre site"],
        ["Contenu polémique / pensée critique", "« Pourquoi les Core Web Vitals sont surévalués »", "Génère des réactions et des liens contradictoires"],
      ],
      tip: "Créez d'abord le contenu linkable, puis approchez les sites pertinents avec un message personnalisé : « voici une ressource qui pourrait enrichir votre article sur X ».",
    },
  },
  {
    id: "m4-s7",
    chapter: "strategies",
    title: "2.2 Digital PR — relations presse numériques",
    type: "content",
    image: img6,
    content: {
      lead: "Obtenir des mentions dans des médias en ligne, blogs influents ou sites d'actualité.",
      steps: [
        { name: "Créer un angle médiatique", desc: "Ex. « 35 % des sites e-commerce français ignorent le INP »." },
        { name: "Rédiger un communiqué ou dossier de presse", desc: "Pas de lien forcé, juste l'information." },
        { name: "Contacter les journalistes", desc: "Personnalisé, via Muck Rack ou LinkedIn." },
        { name: "Proposer une exclusivité", desc: "À un média majeur avant la diffusion générale." },
      ],
      rule: "Les liens provenant de sites d'actualité reconnus sont très puissants et rarement en nofollow.",
    },
  },
  {
    id: "m4-s8",
    chapter: "strategies",
    title: "2.3 Guest blogging sélectif",
    type: "content",
    image: img7,
    content: {
      lead: "Oubliez les 100 articles invités par mois. Privilégiez quelques publications très qualitatives sur des sites que vous admirez.",
      groups: [
        {
          name: "Critères de sélection du site hôte",
          items: [
            "Domain Rating (Ahrefs) > 50",
            "Pertinence thématique forte (même secteur ou complémentaire)",
            "Trafic organique réel (Similarweb / Ahrefs)",
            "Pas de vente de liens explicite",
          ],
        },
        {
          name: "Rédaction de l'article",
          items: [
            "Contenu original, pas de duplication avec votre site",
            "Un seul lien (ou deux) vers votre site, placé naturellement",
            "Éviter les ancres exactes ou « cliquez ici »",
            "Signer avec votre nom (personne) plutôt qu'avec la marque",
          ],
        },
      ],
      warning: "Ne publiez jamais le même article invité sur plusieurs sites : duplicate content, Google ignore les liens.",
    },
  },
  {
    id: "m4-s9",
    chapter: "strategies",
    title: "2.4 Broken link building moderne",
    type: "content",
    image: img8,
    content: {
      lead: "Trouver des liens cassés (404) sur des sites pertinents, puis proposer votre contenu en remplacement.",
      items: [
        "Ahrefs > « Best by links » sur un concurrent pour identifier ses backlinks, puis vérifier les pages sources avec liens morts.",
        "Avec Broken Link Checker ou Check My Links, filtrer les pages avec erreurs 404.",
        "Contacter le webmaster avec un message court et utile, proposant la ressource de remplacement.",
      ],
      callout: "Taux de succès faible (2-5 %), mais chaque lien obtenu est de grande qualité.",
    },
  },
  {
    id: "m4-s10",
    chapter: "audit",
    title: "3.1 Mesures avancées du profil de liens",
    type: "table",
    image: img9,
    content: {
      headers: ["Indicateur", "Outil", "Interprétation"],
      rows: [
        ["Domain Rating (DR) / Domain Authority (DA)", "Ahrefs / Moz", "Score global d'autorité (0-100). Visez une progression régulière."],
        ["Trust Flow (TF)", "Majestic", "Confiance des sites référents. Doit être proche du Citation Flow."],
        ["Ratio dofollow / nofollow", "Ahrefs", "Profil naturel : 60-80 % dofollow, 20-40 % nofollow."],
        ["Texte d'ancrage", "Ahrefs > Anchors", "Ancres exactes < 10-15 % du total."],
        ["Sites référents (referring domains)", "Tous outils", "Nombre de domaines uniques — plus important que le total de backlinks."],
      ],
      tip: "À mesurer au moins une fois par mois pour suivre la progression et détecter les anomalies.",
    },
  },
  {
    id: "m4-s11",
    chapter: "audit",
    title: "3.2 Désaveu de liens toxiques (Disavow Tool)",
    type: "content",
    image: img10,
    content: {
      lead: "Si vous héritez de mauvais backlinks (anciennes pratiques ou negative SEO), demandez à Google de les ignorer via l'outil de désaveu dans GSC.",
      steps: [
        { name: "Exporter les liens toxiques", desc: "Ahrefs / SEMrush avec score de toxicité élevé." },
        { name: "Vérifier manuellement", desc: "Ne désavouer que les liens clairement spammy (annuaires automatiques, sites sans contenu)." },
        { name: "Créer un fichier .txt", desc: "Une ligne par domaine : domain:spamsite.ru — ou par URL." },
        { name: "Téléverser dans GSC", desc: "Propriété > Outils de désaveu." },
      ],
      warning: "Mesure avancée : utilisé à tort, le désaveu peut ignorer des liens utiles. Testez d'abord en contactant les webmasters pour suppression.",
    },
  },
  {
    id: "m4-s12",
    chapter: "audit",
    title: "3.3 Analyse concurrentielle",
    type: "content",
    image: img11,
    content: {
      lead: "Pour trouver des opportunités, examinez les profils de vos concurrents directs (mêmes mots-clés).",
      items: [
        "Entrer le domaine d'un concurrent dans Ahrefs > Backlinks.",
        "Filtrer par Domain Rating > 40 et pertinence thématique.",
        "Repérer les sites qui les citent (blogs, médias, ressources).",
        "Évaluer la possibilité d'obtenir un lien depuis ces mêmes sources (contenu complémentaire ou mis à jour).",
      ],
      callout: "Outil bonus : Link Intersect (Ahrefs / SEMrush) — sites qui linkent vers vos concurrents mais pas vers vous.",
    },
  },
  {
    id: "m4-s13",
    chapter: "impact",
    title: "4.1 Modèles d'attribution multi-canaux",
    type: "content",
    image: img12,
    content: {
      lead: "Mesurer l'impact réel d'un backlink sur les conversions exige de comprendre les modèles d'attribution.",
      groups: [
        { name: "Premier clic", items: ["Crédite intégralement la première source de visite (utile pour mesurer la découverte)."] },
        { name: "Dernier clic", items: ["Attribution standard de GA4. Sous-estime l'impact des canaux d'acquisition initiaux."] },
        { name: "Linéaire", items: ["Répartit équitablement la conversion sur tous les points de contact."] },
        { name: "Data-driven (GA4)", items: ["Pondération automatique selon le poids réel de chaque canal, basé sur le machine learning."] },
      ],
      rule: "Dans GA4 : créer un événement conversion, puis Explorations > Attribution > « Premier clic » et filtrer sur la source referral / organic.",
    },
  },
  {
    id: "m4-s14",
    chapter: "impact",
    title: "4.2 KPIs off-site pour le reporting",
    type: "table",
    content: {
      headers: ["KPI", "Fréquence", "Objectif"],
      rows: [
        ["Domaines référents (nouveaux vs perdus)", "Mensuel", "Croissance nette positive"],
        ["Score d'autorité moyen (DR pondéré)", "Mensuel", "Amélioration de la qualité globale"],
        ["Backlinks avec ancres exactes (%)", "Trimestriel", "Maintenir < 15 %"],
        ["Ratio dofollow / nofollow", "Mensuel", "Rester dans 60-40 / 80-20"],
        ["Trafic généré par les backlinks (GA4)", "Mensuel", "Au moins 5 % du trafic organique"],
        ["Conversions issues des backlinks (premier clic)", "Mensuel", "ROI du netlinking"],
      ],
    },
  },
  {
    id: "m4-s15",
    chapter: "pieges",
    title: "5. Pièges avancés à éviter",
    type: "table",
    content: {
      headers: ["Erreur", "Pourquoi c'est dangereux", "Alternative"],
      rows: [
        ["Acheter des « liens éternels » (PBN)", "Google détecte les réseaux et pénalise tous les sites liés", "Construire de vraies relations éditoriales"],
        ["Toujours le même texte d'ancrage exact", "Signal clair de manipulation", "Mélanger ancres naturelles, marque, génériques, URL nues"],
        ["Ignorer les liens nofollow", "Ils sont naturels (commentaires, forums)", "Les conserver — un profil 100 % dofollow est anormal"],
        ["Ne pas surveiller les backlinks perdus", "Vous perdez de l'autorité sans le savoir", "Alertes « Lost backlinks » dans Ahrefs"],
        ["Link building sur des pages non indexées", "Le lien n'aura aucun effet", "Vérifier l'indexation avec site:url"],
      ],
    },
  },
  {
    id: "m4-s16",
    chapter: "synthese",
    title: "Mini résumé du Module 4",
    type: "table",
    content: {
      headers: ["Thème", "Points clés"],
      rows: [
        ["Stratégies modernes", "Link bait (études, outils, infographies), digital PR, guest blogging sélectif, broken link building."],
        ["Audit de profil de liens", "DR/DA, Trust Flow, ratio dofollow/nofollow, ancres, toxicité. Outils : Ahrefs, Majestic, SEMrush."],
        ["Analyse concurrentielle", "Backlinks des concurrents, Link Intersect, repérage des sites sources."],
        ["Mesure d'impact", "Modèles d'attribution (premier clic, linéaire, data-driven). KPIs off-site."],
        ["Désaveu", "Utiliser uniquement pour les liens clairement spammy (Disavow Tool)."],
      ],
    },
  },
  {
    id: "m4-s17",
    chapter: "synthese",
    title: "TP — tech-innov.fr",
    type: "exercise",
    content: {
      contexte: "Vous êtes responsable SEO de tech-innov.fr (DR 32), un blog sur les innovations technologiques. Un concurrent direct geek-plus.com a un DR de 54.",
      taches: [
        {
          n: 1,
          titre: "Analyse de profil",
          items: [
            "1 200 backlinks, 210 domaines référents. Ratio 95 % dofollow.",
            "Top ancres : « cliquez ici » (25 %), « tech innov » (15 %), « meilleur outil SEO » (12 %).",
            "Identifier les anomalies et proposer des actions correctives.",
          ],
        },
        {
          n: 2,
          titre: "Opportunités de liens",
          items: [
            "geek-plus.com a un backlink depuis futurtech.com (DR 68).",
            "Rédiger un email type sans spam pour proposer une citation complémentaire.",
            "Justifier l'approche (valeur ajoutée pour le site cible).",
          ],
        },
        {
          n: 3,
          titre: "Mesure d'impact",
          items: [
            "Configurer un modèle d'attribution « Premier clic » sur 30 jours dans GA4.",
            "Identifier un KPI off-site complémentaire à suivre mensuellement.",
          ],
        },
        {
          n: 4,
          titre: "Désaveu",
          items: [
            "Lien toxique depuis annuaire-obsolète.ru (score 85). Rédiger la ligne du fichier .txt.",
            "Rappeler les précautions avant d'utiliser le Disavow Tool.",
          ],
        },
      ],
      livrable: "Rapport de 2 pages maximum, répondant aux 4 tâches avec justifications et extraits de code/exemples.",
    },
  },
];

export const quiz4 = [
  {
    q: "Quel critère est le plus déterminant pour la qualité d'un backlink en 2025 ?",
    options: ["Le nombre total de backlinks", "La pertinence thématique du site source", "La couleur du lien", "Le nombre de mots-clés dans l'ancre"],
    answer: 1,
    explain: "Google valorise la pertinence thématique et l'autorité du site source bien plus que le volume total.",
  },
  {
    q: "Quelle métrique de Majestic mesure la qualité de la confiance des backlinks ?",
    options: ["Domain Rating", "PageRank", "Trust Flow", "Domain Authority"],
    answer: 2,
    explain: "Le Trust Flow (Majestic) évalue la confiance ; comparé au Citation Flow, il détecte les liens achetés.",
  },
  {
    q: "Quel ratio dofollow/nofollow est considéré comme naturel ?",
    options: ["100 % dofollow", "60-80 % dofollow, 20-40 % nofollow", "50/50 strict", "100 % nofollow"],
    answer: 1,
    explain: "Un profil naturel comporte une part significative de nofollow (commentaires, forums, mentions).",
  },
  {
    q: "Quelle pratique est désormais pénalisée par Google en 2025 ?",
    options: ["Digital PR personnalisée", "Guest blogging massif sur 50 sites avec le même article", "Création d'études originales", "Broken link building éthique"],
    answer: 1,
    explain: "Google détecte les schémas de guest blogging massif via l'IA et pénalise les sites concernés.",
  },
  {
    q: "Pour un grand site, comment identifier les opportunités de liens d'un concurrent ?",
    options: ["Lire le robots.txt", "Utiliser Link Intersect (Ahrefs/SEMrush)", "Compter ses pages indexées", "Mesurer son LCP"],
    answer: 1,
    explain: "Link Intersect liste les sites qui pointent vers vos concurrents mais pas vers vous — gisement direct.",
  },
  {
    q: "Quel pourcentage d'ancres exactes ne faut-il pas dépasser ?",
    options: ["50 %", "30 %", "10-15 %", "0 %"],
    answer: 2,
    explain: "Au-delà de 10-15 % d'ancres exactes, Google peut détecter une suroptimisation manipulatrice.",
  },
  {
    q: "Quel modèle d'attribution est recommandé pour mesurer l'impact initial d'un backlink ?",
    options: ["Dernier clic", "Premier clic", "Linéaire", "Position basée"],
    answer: 1,
    explain: "Le modèle « premier clic » crédite la source qui a initié le parcours utilisateur.",
  },
  {
    q: "Que doit contenir un fichier de désaveu de liens ?",
    options: ["Une liste d'URLs valides", "Une ligne par domaine (domain:site.com) ou URL toxique", "Un commentaire JavaScript", "Une balise meta"],
    answer: 1,
    explain: "Le fichier .txt accepte « domain:exemple.com » ou des URLs individuelles à ignorer.",
  },
  {
    q: "Quel signal indique potentiellement un schéma de liens artificiel ?",
    options: ["Trust Flow proche du Citation Flow", "Écart important entre TF et CF", "Présence de liens nofollow", "Diversité des domaines référents"],
    answer: 1,
    explain: "Un grand écart TF/CF suggère beaucoup de citations mais peu de confiance — souvent signe de liens achetés.",
  },
  {
    q: "Pourquoi conserver des backlinks nofollow ?",
    options: ["Ils transmettent du PageRank", "Ils sont naturels (commentaires, forums) et un profil 100 % dofollow est anormal", "Ils boostent le LCP", "Ils sont obligatoires"],
    answer: 1,
    explain: "Les nofollow font partie d'un profil naturel ; leur absence totale est un signal suspect.",
  },
];

export const flashcards4 = [
  { front: "Domain Rating (DR)", back: "Score Ahrefs (0-100) mesurant la force globale du profil de backlinks d'un domaine." },
  { front: "Trust Flow (TF)", back: "Indicateur Majestic mesurant la confiance basée sur la qualité des sites référents." },
  { front: "Citation Flow (CF)", back: "Majestic — mesure la quantité de citations. Comparé au TF pour détecter les liens achetés." },
  { front: "Link Bait 2.0", back: "Contenus conçus pour attirer naturellement des liens : études, outils, infographies interactives, digital PR." },
  { front: "Digital PR", back: "Relations presse numériques : obtenir des mentions dans médias et blogs reconnus via angles éditoriaux." },
  { front: "Broken link building", back: "Identifier des liens 404 sur des sites pertinents et proposer son contenu en remplacement." },
  { front: "Disavow Tool", back: "Outil GSC permettant à Google d'ignorer des backlinks toxiques (fichier .txt avec domain:...)." },
  { front: "Link Intersect", back: "Fonctionnalité Ahrefs/SEMrush listant les sites qui linkent vos concurrents mais pas vous." },
  { front: "Attribution premier clic", back: "Modèle GA4 créditant la première source d'acquisition — mesure l'impact des backlinks de découverte." },
  { front: "Ancre exacte", back: "Texte d'ancrage reprenant le mot-clé cible. À limiter à 10-15 % pour éviter la suroptimisation." },
  { front: "PBN", back: "Private Blog Network — réseau de sites créés pour générer des liens. Détecté et pénalisé par Google." },
  { front: "Pertinence thématique", back: "Adéquation entre le sujet du site source et celui de la page liée. Premier critère de qualité d'un backlink." },
];

export const glossary4 = [
  { term: "Backlink", def: "Lien entrant depuis un site externe vers une page de votre site." },
  { term: "Dofollow / Nofollow", def: "Attribut HTML indiquant si un lien transmet (dofollow) ou non (nofollow) de l'autorité SEO." },
  { term: "Domain Rating (DR)", def: "Score Ahrefs de 0 à 100 mesurant la force du profil de backlinks d'un domaine." },
  { term: "Domain Authority (DA)", def: "Score Moz équivalent au DR (0-100), évaluant l'autorité globale d'un domaine." },
  { term: "Trust Flow (TF)", def: "Indicateur Majestic mesurant la qualité et la confiance des sites référents." },
  { term: "Citation Flow (CF)", def: "Indicateur Majestic mesurant la quantité de citations vers un site." },
  { term: "Link Bait", def: "Contenu créé spécifiquement pour attirer des backlinks naturellement (études, outils, infographies)." },
  { term: "Digital PR", def: "Relations presse numériques visant à obtenir mentions et liens depuis médias et blogs influents." },
  { term: "Guest blogging", def: "Publication d'un article invité sur un autre site pour obtenir un backlink éditorial." },
  { term: "Broken link building", def: "Technique consistant à proposer son contenu en remplacement d'un lien cassé (404)." },
  { term: "PBN", def: "Private Blog Network — réseau privé de sites créés artificiellement pour générer des liens." },
  { term: "Disavow Tool", def: "Outil Google Search Console permettant de demander l'ignorance de backlinks toxiques." },
  { term: "Ancre (anchor text)", def: "Texte cliquable d'un lien hypertexte. Influence la perception thématique par Google." },
  { term: "Link Intersect", def: "Fonctionnalité d'analyse listant les sites qui pointent vers vos concurrents mais pas vous." },
  { term: "Attribution multi-canaux", def: "Modèle GA4 répartissant les conversions entre les différentes sources d'acquisition." },
  { term: "Negative SEO", def: "Pratique malveillante visant à pénaliser un site concurrent (souvent par génération de liens toxiques)." },
  { term: "Domaines référents", def: "Nombre de domaines uniques pointant vers votre site (KPI plus pertinent que le total de backlinks)." },
];
