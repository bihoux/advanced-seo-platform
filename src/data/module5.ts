import img1 from "@/assets/pdf5/img_1.webp";
import img2 from "@/assets/pdf5/img_2.webp";
import img3 from "@/assets/pdf5/img_3.webp";
import img4 from "@/assets/pdf5/img_4.webp";
import img5 from "@/assets/pdf5/img_5.webp";
import img6 from "@/assets/pdf5/img_6.webp";
import img7 from "@/assets/pdf5/img_7.webp";
import img8 from "@/assets/pdf5/img_8.webp";
import img9 from "@/assets/pdf5/img_9.webp";
import img10 from "@/assets/pdf5/img_10.webp";
import img11 from "@/assets/pdf5/img_11.webp";
import img12 from "@/assets/pdf5/img_12.webp";
import img13 from "@/assets/pdf5/img_13.webp";
import img14 from "@/assets/pdf5/img_14.webp";
import type { Slide } from "./module1";

export const moduleInfo5 = {
  code: "Module 5",
  title: "SEO & IA générative : SGE, E-E-A-T et au-delà",
  course: "Rédaction & Optimisation SEO Avancée",
  level: "Universitaire — SEO Avancé 2026",
  duration: "≈ 6h",
  prerequis: "Modules 1 à 4 + maîtrise des fondamentaux SEO (cours « Principes de base du SEO »)",
  objectifs: [
    "Comprendre le fonctionnement de la Search Generative Experience (SGE) et son impact sur la visibilité organique.",
    "Adapter sa stratégie de contenu pour être cité comme source dans les réponses génératives de Google.",
    "Appliquer les critères E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) de manière concrète et mesurable.",
    "Intégrer l'IA générative dans sa chaîne de production éditoriale sans compromettre la qualité ni l'éthique.",
    "Anticiper les évolutions du SEO à horizon 2027-2028 (recherche multimodale, agents IA).",
  ],
};

export const chapters5 = [
  { id: "intro", title: "Introduction", icon: "Sparkles" },
  { id: "sge", title: "1. Search Generative Experience", icon: "Bot" },
  { id: "eeat", title: "2. E-E-A-T en profondeur", icon: "ShieldCheck" },
  { id: "ia", title: "3. IA dans la chaîne SEO", icon: "Brain" },
  { id: "kpis", title: "4. Nouveaux KPIs", icon: "BarChart3" },
  { id: "futur", title: "5. Perspectives 2026-2027", icon: "Telescope" },
  { id: "synthese", title: "Synthèse & TP", icon: "GraduationCap" },
];

export const slides5: Slide[] = [
  {
    id: "m5-s1",
    chapter: "intro",
    title: "SEO & IA générative",
    subtitle: "SGE, E-E-A-T et au-delà",
    type: "intro",
    image: img1,
    content: {
      tagline: "L'IA n'est plus un simple outil de rédaction : elle devient un acteur des SERP. Adaptez votre stratégie pour être cité comme source fiable.",
      pillars: ["SGE.CITED", "EEAT.PROVEN", "HUMAN+AI", "MULTIMODAL"],
    },
  },
  {
    id: "m5-s2",
    chapter: "intro",
    title: "Objectifs pédagogiques",
    type: "list",
    content: { items: moduleInfo5.objectifs, prerequis: moduleInfo5.prerequis },
  },
  {
    id: "m5-s3",
    chapter: "intro",
    title: "Pourquoi ce module final ?",
    type: "content",
    image: img2,
    content: {
      lead: "2026 marque un tournant : la Search Generative Experience (SGE) transforme la SERP en assistant conversationnel capable de synthétiser des informations issues de plusieurs sources. Parallèlement, les critères E-E-A-T deviennent le langage de la confiance.",
      callout: "Vous apprendrez à faire certifier votre contenu comme source fiable par l'IA, à structurer votre site pour les extraits génératifs, et à établir une gouvernance éditoriale mixte (humain + IA) durable.",
    },
  },
  {
    id: "m5-s4",
    chapter: "sge",
    title: "1.1 Qu'est-ce que la SGE ?",
    type: "content",
    image: img3,
    content: {
      lead: "Déployée progressivement depuis 2023, la SGE remplace ou complète les featured snippets par une réponse générée par IA, en langage naturel, placée en tête de la SERP.",
      items: [
        "Une réponse synthétique de 3 à 5 lignes, parfois en puces.",
        "Des cartes cliquables pour approfondir chaque point.",
        "Des citations (bullet points avec logos des sources) renvoyant aux sites originaux.",
        "Des questions de suivi pour continuer la conversation.",
      ],
      callout: "Exemple — requête « meilleur outil SEO pour audit technique » : Google génère un paragraphe avec citations Semrush, Ahrefs, Screaming Frog accompagné de cartes cliquables.",
    },
  },
  {
    id: "m5-s5",
    chapter: "sge",
    title: "1.2 Impact sur les clics et le comportement",
    type: "table",
    image: img4,
    content: {
      headers: ["Métrique", "Avant SGE", "Avec SGE", "Conséquence SEO"],
      rows: [
        ["CTR de la position 1", "~25-35 %", "Chute à 15-20 %", "Nécessité d'apparaître dans la réponse IA"],
        ["Recherches sans clic (zero-click)", "~50 % sur mobile", "Jusqu'à 65-70 %", "Le référencement ne garantit plus le trafic"],
        ["Visibilité de marque", "Titre + description", "Mention explicite (citation)", "Nouveau KPI : taux de citation SGE"],
      ],
    },
  },
  {
    id: "m5-s6",
    chapter: "sge",
    title: "1.3 Comment être cité par la SGE ?",
    type: "content",
    image: img5,
    content: {
      lead: "Google ne dévoile pas l'algorithme, mais les analyses (Semrush, Authoritas) et brevets suggèrent plusieurs critères convergents.",
      items: [
        "Fiabilité des sources : sites avec un E-E-A-T élevé.",
        "Originalité des données : études, chiffres, graphiques originaux.",
        "Structure claire et concise : la réponse IA extrait souvent un paragraphe de 40-60 mots.",
        "Données structurées : Article, QAPage, HowTo facilitent l'extraction.",
        "Popularité vérifiée : backlinks de sites médias, mentions dans articles de confiance.",
      ],
      rule: "Analysez les citations SGE pour vos requêtes cibles : repérez la partie reprise (50 premiers mots) et les preuves qui apparaissent (statistiques, dates, auteurs).",
    },
  },
  {
    id: "m5-s7",
    chapter: "eeat",
    title: "2.1 Définition et évolution du E-E-A-T",
    type: "table",
    image: img6,
    content: {
      headers: ["Composante", "Signification", "Prouvé par"],
      rows: [
        ["Experience", "L'auteur ou le site a une expérience directe et concrète du sujet", "Photos personnelles, témoignages, études de cas internes"],
        ["Expertise", "Connaissances approfondies, niveau master ou professionnel", "Diplômes, certifications, publications, bio détaillée"],
        ["Authoritativeness", "Reconnaissance par d'autres experts du domaine", "Backlinks de sites référents, mentions dans médias, prix"],
        ["Trustworthiness", "Transparence, honnêteté, sécurité, absence de tromperie", "Mentions légales, HTTPS, avis vérifiés, date de mise à jour"],
      ],
      tip: "L'ajout du premier E (Experience) en décembre 2022 a changé la donne : le vécu terrain prime sur la simple expertise théorique.",
    },
  },
  {
    id: "m5-s8",
    chapter: "eeat",
    title: "2.2 E-E-A-T pour un article de blog technique",
    type: "table",
    image: img7,
    content: {
      headers: ["Critère", "Action"],
      rows: [
        ["Experience", "Ajouter une section « Retour d'expérience : lors d'un audit client chez X, nous avons constaté que… »"],
        ["Expertise", "Citer sources académiques, études sectorielles, noms d'experts reconnus"],
        ["Authoritativeness", "Obtenir un backlink d'un site connu (digital PR) ou être référencé dans une newsletter influente"],
        ["Trustworthiness", "Afficher clairement auteur (photo, bio, LinkedIn), date de publication et de modification"],
      ],
    },
  },
  {
    id: "m5-s9",
    chapter: "eeat",
    title: "2.3 E-E-A-T pour une fiche produit e-commerce",
    type: "table",
    image: img8,
    content: {
      headers: ["Critère", "Action"],
      rows: [
        ["Experience", "Photos/vidéos réalisées par l'équipe (pas de catalogue générique), avis clients vérifiés avec texte"],
        ["Expertise", "Guides d'utilisation par experts internes, fiches techniques détaillées, comparatifs"],
        ["Authoritativeness", "Notations externes, labels (« Recommandé par … »), certifications (Origine France Garantie)"],
        ["Trustworthiness", "Politique de retour claire, prix TTC, stock temps réel, avis sans censure"],
      ],
    },
  },
  {
    id: "m5-s10",
    chapter: "eeat",
    title: "2.4 Bio d'auteur enrichie (modèle E-E-A-T)",
    type: "content",
    image: img9,
    content: {
      lead: "Une simple phrase « Jean Dupont, expert SEO » ne suffit plus. Structurez une bio avancée pour cumuler les signaux.",
      code: `Jean Dupont — Consultant SEO certifié (Google Analytics Individual Qualification)
+ 7 ans d'expérience dans l'audit technique de sites e-commerce
+ Auteur du guide « SEO technique avancé 2025 » (Éditions Eyrolles)
+ Intervenant à SEO Camp' 2024 (vidéo disponible)
+ LinkedIn : linkedin.com/in/jeandupont — 15 recommandations

Dernière mise à jour : 10 juin 2025 (après vérification des Core Web Vitals)`,
      rule: "Implémentation technique : données structurées author (Person) avec sameAs (LinkedIn, Twitter), alumniOf (école), knowsAbout (sujets).",
    },
  },
  {
    id: "m5-s11",
    chapter: "ia",
    title: "3.1 Usages IA recommandés (et non recommandés)",
    type: "table",
    image: img10,
    content: {
      headers: ["Usage IA", "Pertinence SEO", "Précaution"],
      rows: [
        ["Générer des plans de contenu (titres, sous-parties)", "Très utile", "Vérifier la cohérence avec l'intention utilisateur"],
        ["Proposer des questions FAQ depuis « People also ask »", "Recommandé", "Relire les formulations (l'IA peut inventer)"],
        ["Méta descriptions / titres alternatifs", "Bon pour brainstorming", "Personnaliser pour éviter le « ton IA »"],
        ["Paragraphes factuels (dates, lois, chiffres)", "Risqué", "L'IA hallucine fréquemment — toujours recouper"],
        ["Traduction pour le multilingue", "Possible", "Faire relire par un humain natif (culture)"],
        ["Génération d'images (héros, infographies)", "Modéré", "Google valorise les images originales et authentiques"],
      ],
    },
  },
  {
    id: "m5-s12",
    chapter: "ia",
    title: "3.2 Processus hybride (Human + AI)",
    type: "content",
    image: img11,
    content: {
      lead: "Pour un contenu fiable, organisez un workflow en 6 étapes alternant intervention humaine et génération IA.",
      steps: [
        { name: "Recherche & brief (humain)", desc: "Intention, requête principale, entités, preuves E-E-A-T à apporter." },
        { name: "Premier jet structuré (IA)", desc: "Prompt détaillé avec structure (H1, H2, H3) et ton attendu." },
        { name: "Vérification factuelle (humain)", desc: "Chaque chiffre, date, citation vérifié. Supprimer les hallucinations." },
        { name: "Enrichissement E-E-A-T (humain)", desc: "Anecdotes, photos originales, témoignages, données internes." },
        { name: "Optimisation technique", desc: "Title, meta, données structurées, liens internes, maillage." },
        { name: "Relecture & signature (humain)", desc: "Charte éditoriale, nom d'auteur humain ou mention collaborative." },
      ],
    },
  },
  {
    id: "m5-s13",
    chapter: "ia",
    title: "3.3 Prompting avancé pour le SEO",
    type: "content",
    image: img12,
    content: {
      lead: "Un bon prompt définit rôle, sujet, public, structure, contraintes E-E-A-T et longueur cible.",
      code: `Rôle : expert SEO technique.
Sujet : « Comment optimiser le Largest Contentful Paint (LCP)
         pour un site e-commerce ? »
Contraintes :
- Public : développeurs et chefs de projet (niveau avancé).
- Structure : H1 (mot-clé principal), 5 H2 (causes fréquentes
  de mauvais LCP), des H3 pour les solutions.
- Inclure une section E-E-A-T avec études de cas (valeurs concrètes).
- Style : direct, technique, sans jargon superflu.
- Longueur cible : 2000 mots.`,
      warning: "Après génération : retirez les références inventées (« selon une étude de 2024 » fictive) et ajoutez des liens vers des ressources authentiques.",
    },
  },
  {
    id: "m5-s14",
    chapter: "ia",
    title: "3.4 Détecter et corriger les hallucinations",
    type: "content",
    content: {
      lead: "L'IA peut inventer des citations d'experts inexistants, créer de toutes pièces des statistiques, attribuer de faux brevets ou articles.",
      steps: [
        { name: "Vérifier chaque donnée chiffrée", desc: "Recherchez l'information sur Google ou dans une source fiable." },
        { name: "Corriger ou supprimer", desc: "Si non trouvée, supprimez la phrase ou remplacez par une donnée vérifiée." },
        { name: "Ajouter la source authentique", desc: "Lien vers la source — augmente l'E-E-A-T en bonus." },
      ],
      rule: "N'affichez jamais une statistique sans source. Mieux vaut pas de chiffre qu'un faux chiffre.",
    },
  },
  {
    id: "m5-s15",
    chapter: "ia",
    title: "3.5 Respect des guidelines Google",
    type: "content",
    content: {
      lead: "Google n'interdit pas le contenu généré par IA, à condition qu'il soit utile, original et aligné avec E-E-A-T.",
      callout: "Les pénalités visent le contenu de faible qualité, qu'il soit humain ou IA. Mentionner l'usage de l'IA n'est pas obligatoire, mais la transparence améliore la confiance.",
      principle: "Exemple de mention transparente : « Cet article a été rédigé avec l'aide de ChatGPT, puis relu et enrichi par notre expert SEO. »",
    },
  },
  {
    id: "m5-s16",
    chapter: "kpis",
    title: "4.1 Indicateurs spécifiques SGE",
    type: "table",
    image: img13,
    content: {
      headers: ["KPI", "Définition", "Outil de mesure"],
      rows: [
        ["Taux de citation SGE", "% de pages citées dans les réponses génératives pour vos mots-clés cibles", "Semrush Sensor, Authoritas, trackers SGE (beta)"],
        ["CTR des citations", "Clics sur votre citation dans le bloc SGE", "Google Search Console (rapports personnalisés)"],
        ["Visibilité dans questions suggérées", "Présence dans les questions de suivi générées par l'IA", "Analyse manuelle ou scraping contrôlé"],
      ],
    },
  },
  {
    id: "m5-s17",
    chapter: "kpis",
    title: "4.2 Mesurer l'impact E-E-A-T",
    type: "content",
    content: {
      lead: "Contrairement à la SGE, l'E-E-A-T n'a pas de métrique officielle. Évaluation indirecte par recoupement.",
      items: [
        "Progression des backlinks de qualité (sites référents DR élevé).",
        "Hausse des conversions sur les pages enrichies (E-E-A-T vs sans E-E-A-T).",
        "Augmentation du temps passé et de l'engagement (GA4).",
        "Amélioration des positions pour les requêtes YMYL (santé, finance, droit).",
      ],
    },
  },
  {
    id: "m5-s18",
    chapter: "kpis",
    title: "4.3 Tableau de bord avancé (Looker Studio)",
    type: "table",
    content: {
      headers: ["Source", "Données"],
      rows: [
        ["Google Search Console", "Clics, impressions, position moyenne, pages"],
        ["Semrush / Ahrefs", "Domaines référents, scores de confiance, citations SGE (si API)"],
        ["GA4", "Trafic organique, conversions, modèles d'attribution"],
        ["Outil de suivi backlinks (Majestic)", "Trust Flow, Citation Flow"],
        ["Google Trends", "Popularité des requêtes et impact SGE"],
      ],
      tip: "Centralisez ces sources dans Looker Studio pour un suivi complet et visuel.",
    },
  },
  {
    id: "m5-s19",
    chapter: "futur",
    title: "5.1 Recherche multimodale (MUM étendu)",
    type: "content",
    image: img14,
    content: {
      lead: "Google MUM (Multitask Unified Model) comprend des requêtes combinant texte, image, audio, vidéo. Ex. : « Je prends une photo de cette plante, dis-moi comment l'entretenir et où l'acheter. »",
      items: [
        "Baliser les images avec Schema ImageObject (métadonnées riches).",
        "Ajouter des transcripts pour les vidéos (sous-titres, descriptions).",
        "Structurer les données produits pour l'achat intégré.",
      ],
    },
  },
  {
    id: "m5-s20",
    chapter: "futur",
    title: "5.2 Agents IA & recherche conversationnelle",
    type: "content",
    content: {
      lead: "Des assistants (SearchGPT, futures intégrations navigateurs) dialoguent avec l'utilisateur pour affiner la requête. Le classement dépendra de la capacité à répondre précisément à des questions en langage naturel.",
      rule: "Stratégie : structurez votre FAQ en QAPage et proposez des extraits de 30-40 mots pour chaque réponse.",
    },
  },
  {
    id: "m5-s21",
    chapter: "futur",
    title: "5.3 Éthique & transparence",
    type: "content",
    content: {
      lead: "Avec l'essor de l'IA, les utilisateurs sont plus sceptiques. Investissez dans la confiance.",
      items: [
        "Certification humaine (contenu relu par un expert avec vérification E-E-A-T).",
        "Traçabilité des mises à jour (historique des modifications).",
        "Absence de conflit d'intérêts (ne pas masquer les liens sponsorisés).",
      ],
    },
  },
  {
    id: "m5-s22",
    chapter: "synthese",
    title: "Mini résumé du Module 5",
    type: "table",
    content: {
      headers: ["Thème", "Points clés"],
      rows: [
        ["SGE", "Réponse générative en tête de SERP réduit les clics. Être cité exige E-E-A-T élevé, paragraphes concis (40-60 mots), données originales."],
        ["E-E-A-T", "Experience, Expertise, Authoritativeness, Trust. Mise en œuvre via bios enrichies, preuves concrètes, transparence."],
        ["IA générative", "Workflow hybride : IA pour plan + premier jet, humain pour vérification, E-E-A-T, optimisation. Détruire les hallucinations."],
        ["KPIs avancés", "Taux de citation SGE, backlinks qualitatifs, engagement sur pages E-E-A-T."],
        ["Perspectives", "Multimodal (MUM), agents conversationnels. Anticiper avec contenus granulaires et balises riches."],
      ],
    },
  },
  {
    id: "m5-s23",
    chapter: "synthese",
    title: "TP — bien-manger-bio.fr",
    type: "exercise",
    content: {
      contexte: "Vous travaillez pour le site bien-manger-bio.fr, un guide d'alimentation biologique. Vous souhaitez adapter votre contenu pour la SGE et renforcer l'E-E-A-T.",
      taches: [
        {
          n: 1,
          titre: "Analyse SGE",
          items: [
            "Choisir une requête (ex. « bienfaits des protéines végétales ») et observer le bloc génératif.",
            "Identifier les sources citées et les types de preuves (statistiques, études, témoignages).",
            "Rédiger une recommandation pour qu'une page similaire puisse être citée.",
          ],
        },
        {
          n: 2,
          titre: "E-E-A-T appliqué",
          items: [
            "Article fictif : « les 10 meilleures marques de tofu bio ».",
            "Proposer 3 améliorations concrètes pour renforcer l'Experience (photo test, avis client, dégustation).",
            "Rédiger une bio d'auteur (150 mots) respectant les 4 critères E-E-A-T.",
          ],
        },
        {
          n: 3,
          titre: "Processus IA hybride",
          items: [
            "Générer un premier jet (300 mots) sur « Tofu : choisir un produit bio sans additifs ».",
            "Identifier 2 phrases potentielles d'hallucination et les corriger avec une source vérifiée.",
            "Justifier pourquoi l'intervention humaine est obligatoire sur ce sujet YMYL.",
          ],
        },
        {
          n: 4,
          titre: "Nouveaux KPIs",
          items: [
            "Lister au moins 3 indicateurs (GSC + GA4) à suivre à 90 jours.",
            "Détailler le seuil de performance souhaité pour chacun.",
          ],
        },
      ],
      livrable: "Rapport structuré (2-3 pages) avec extraits, captures et justifications. Inclure une checklist E-E-A-T finale.",
    },
  },
];

export const quiz5 = [
  {
    q: "Que signifie SGE ?",
    options: ["Search Geographic Engine", "Search Generative Experience", "Semantic Graph Engine", "Speed Generator Engine"],
    answer: 1,
    explain: "La Search Generative Experience est la SERP générative de Google, qui synthétise des réponses par IA.",
  },
  {
    q: "Quel est l'impact estimé de la SGE sur le CTR de la position 1 ?",
    options: ["Aucun changement", "Hausse à 50 %", "Chute à 15-20 %", "Disparition totale"],
    answer: 2,
    explain: "Les estimations indiquent une chute du CTR de 25-35 % vers 15-20 % avec l'arrivée de la SGE.",
  },
  {
    q: "Quelle longueur de paragraphe est idéale pour être cité par la SGE ?",
    options: ["10-15 mots", "40-60 mots", "200-300 mots", "Plus de 500 mots"],
    answer: 1,
    explain: "La SGE extrait généralement un paragraphe concis de 40-60 mots qui répond directement à la question.",
  },
  {
    q: "Que désigne le premier E dans E-E-A-T ?",
    options: ["Education", "Experience", "Engagement", "Excellence"],
    answer: 1,
    explain: "Experience (vécu, expérience directe) a été ajouté en décembre 2022 aux critères E-A-T initiaux.",
  },
  {
    q: "Quelle propriété Schema lie un auteur à ses profils externes (LinkedIn, Twitter) ?",
    options: ["alumniOf", "sameAs", "knowsAbout", "worksFor"],
    answer: 1,
    explain: "sameAs sert à lier une entité Person à ses URLs externes (réseaux sociaux, profils professionnels).",
  },
  {
    q: "Quel usage IA est le plus risqué pour le SEO ?",
    options: ["Générer un plan de contenu", "Rédiger des paragraphes factuels (dates, chiffres)", "Brainstorming de méta descriptions", "Proposer des questions FAQ"],
    answer: 1,
    explain: "L'IA hallucine fréquemment sur les données factuelles : toujours recouper avec des sources fiables.",
  },
  {
    q: "Dans le workflow hybride Human+AI, quelle étape est obligatoirement humaine ?",
    options: ["Premier jet structuré", "Génération du plan", "Vérification factuelle", "Brainstorming SEO"],
    answer: 2,
    explain: "La vérification factuelle est obligatoirement humaine pour détecter et corriger les hallucinations IA.",
  },
  {
    q: "Que sont les requêtes YMYL ?",
    options: ["Your Marketing Your Limit", "Your Money Your Life — santé, finance, droit", "Yearly Modular Yield Logic", "Your Mobile Your Loyalty"],
    answer: 1,
    explain: "YMYL (Your Money or Your Life) : sujets impactant fortement la vie (santé, finance, droit) où l'E-E-A-T est crucial.",
  },
  {
    q: "Quel type Schema est recommandé pour une FAQ optimisée pour les agents IA ?",
    options: ["Article", "QAPage", "HowTo", "WebPage"],
    answer: 1,
    explain: "QAPage permet aux assistants conversationnels d'extraire précisément questions et réponses courtes.",
  },
  {
    q: "Google interdit-il le contenu généré par IA ?",
    options: ["Oui, totalement interdit", "Non, à condition qu'il soit utile, original et aligné E-E-A-T", "Oui, sauf pour les traductions", "Non, sans aucune condition"],
    answer: 1,
    explain: "Google sanctionne le contenu de faible qualité, qu'il soit humain ou IA. L'IA est autorisée si elle apporte de la valeur.",
  },
];

export const flashcards5 = [
  { front: "SGE", back: "Search Generative Experience — réponse générée par IA en tête de SERP, avec citations sources." },
  { front: "E-E-A-T", back: "Experience, Expertise, Authoritativeness, Trustworthiness — critères qualité Google pour évaluer la fiabilité." },
  { front: "Experience (1er E)", back: "Vécu direct et concret du sujet (photos, témoignages, études de cas internes). Ajouté en décembre 2022." },
  { front: "Taux de citation SGE", back: "% de vos pages citées dans les réponses génératives pour vos mots-clés cibles." },
  { front: "YMYL", back: "Your Money Your Life — sujets sensibles (santé, finance, droit) où l'E-E-A-T est déterminant." },
  { front: "Hallucination IA", back: "Génération par l'IA d'informations inventées (citations, statistiques, faux brevets). À détecter et corriger." },
  { front: "Workflow hybride Human+AI", back: "Brief humain → 1er jet IA → vérification humaine → enrichissement E-E-A-T → tech → relecture/signature." },
  { front: "QAPage", back: "Type Schema.org pour structurer questions/réponses, optimal pour agents IA conversationnels." },
  { front: "MUM", back: "Multitask Unified Model — IA Google capable de requêtes multimodales (texte + image + audio + vidéo)." },
  { front: "Schema author + sameAs", back: "Données structurées Person reliant un auteur à ses profils externes (LinkedIn, Twitter) — boost E-E-A-T." },
  { front: "Zero-click search", back: "Recherche se terminant sans clic sur un résultat. Estimée à 65-70 % avec la SGE active." },
  { front: "Looker Studio", back: "Outil Google pour tableau de bord intégrant GSC, GA4, Semrush/Ahrefs, Majestic, Google Trends." },
];

export const glossary5 = [
  { term: "SGE", def: "Search Generative Experience — interface de Google qui synthétise une réponse par IA en tête de SERP." },
  { term: "E-E-A-T", def: "Experience, Expertise, Authoritativeness, Trustworthiness — cadre qualité des Quality Rater Guidelines de Google." },
  { term: "Experience", def: "Premier E de E-E-A-T : expérience vécue et concrète d'un sujet par l'auteur ou le site." },
  { term: "Expertise", def: "Connaissances approfondies prouvables par diplômes, certifications, publications." },
  { term: "Authoritativeness", def: "Reconnaissance par d'autres experts (backlinks, mentions médias, citations)." },
  { term: "Trustworthiness", def: "Transparence, sécurité, honnêteté : mentions légales, HTTPS, dates de mise à jour, avis vérifiés." },
  { term: "YMYL", def: "Your Money or Your Life — sujets impactant fortement la vie (santé, finance, droit). E-E-A-T crucial." },
  { term: "Hallucination IA", def: "Information inventée par une IA générative (fausse citation, fausse statistique, faux brevet)." },
  { term: "Zero-click search", def: "Recherche se terminant sur la SERP sans clic vers un site externe." },
  { term: "Taux de citation SGE", def: "Pourcentage de pages d'un site citées dans les réponses génératives de Google." },
  { term: "MUM", def: "Multitask Unified Model — modèle IA de Google capable de comprendre requêtes multimodales." },
  { term: "QAPage", def: "Type Schema.org pour pages structurées en questions/réponses, optimal pour assistants IA." },
  { term: "SearchGPT", def: "Moteur conversationnel d'OpenAI : recherche dialoguée, basée sur GPT et sources web." },
  { term: "Quality Rater Guidelines", def: "Document Google détaillant les critères évalués par les évaluateurs humains (E-E-A-T inclus)." },
  { term: "Prompt engineering", def: "Art de formuler des instructions précises à une IA générative pour obtenir des sorties de qualité." },
  { term: "Workflow hybride", def: "Processus éditorial alternant intervention humaine et IA générative pour produire du contenu fiable." },
  { term: "Looker Studio", def: "Outil Google de dataviz pour centraliser GSC, GA4, Ahrefs, Majestic dans des tableaux de bord SEO." },
];
