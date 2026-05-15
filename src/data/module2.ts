import slide1 from "@/assets/pdf2/page_1.jpg";
import slide2 from "@/assets/pdf2/page_2.jpg";
import slide4 from "@/assets/pdf2/page_4.jpg";
import slide5 from "@/assets/pdf2/page_5.jpg";
import slide6 from "@/assets/pdf2/page_6.jpg";
import slide7 from "@/assets/pdf2/page_7.jpg";
import slide8 from "@/assets/pdf2/page_8.jpg";
import slide9 from "@/assets/pdf2/page_9.jpg";
import slide10 from "@/assets/pdf2/page_10.jpg";
import slide11 from "@/assets/pdf2/page_11.jpg";
import slide12 from "@/assets/pdf2/page_12.jpg";
import slide15 from "@/assets/pdf2/page_15.jpg";
import type { Slide } from "./module1";

export const moduleInfo2 = {
  code: "Module 2",
  title: "Stratégie de contenu avancée : intentions, sémantique et EEAT",
  course: "Rédaction & Optimisation SEO Avancée",
  level: "Universitaire — SEO Avancé 2026",
  duration: "≈ 6h",
  prerequis: "Module 1 + fondamentaux du SEO (cours « Principes de base du SEO »)",
  objectifs: [
    "Analyser les intentions de recherche avec une grille fine (au-delà des 4 catégories classiques).",
    "Construire un contenu optimisé pour les entités sémantiques et le Passage Indexing.",
    "Appliquer les critères EEAT (Experience, Expertise, Authoritativeness, Trustworthiness) à chaque contenu.",
    "Créer des contenus ciblant la Position Zéro (featured snippets, réponses directes) et les recherches sans clic.",
    "Intégrer l'IA générative dans une chaîne éditoriale SEO efficace sans nuire à l'EEAT.",
  ],
};

export const chapters2 = [
  { id: "intro", title: "Introduction", icon: "Sparkles" },
  { id: "intent", title: "1. Intentions de recherche", icon: "Target" },
  { id: "semantic", title: "2. SEO sémantique & entités", icon: "Network" },
  { id: "passage", title: "3. Passage Indexing & Position 0", icon: "FileText" },
  { id: "eeat", title: "4. EEAT en pratique", icon: "ShieldCheck" },
  { id: "ai", title: "5. IA générative hybride", icon: "Bot" },
  { id: "synthese", title: "Synthèse & TP", icon: "GraduationCap" },
];

export const slides2: Slide[] = [
  {
    id: "m2-s1",
    chapter: "intro",
    title: "Stratégie de contenu avancée 2025-2026",
    subtitle: "Intentions · Sémantique · EEAT",
    type: "intro",
    image: slide1,
    content: {
      kicker: "MODULE 2",
      tagline: "Le Moteur SEO Sémantique — Architecture des intentions, Passage Indexing, EEAT et intégration de l'IA hybride.",
      pillars: ["INTENT.MAP", "ENTITY.GRAPH", "EEAT.PROOF"],
    },
  },
  {
    id: "m2-s2",
    chapter: "intro",
    title: "Objectifs pédagogiques",
    type: "list",
    content: { items: moduleInfo2.objectifs, prerequis: moduleInfo2.prerequis },
  },
  {
    id: "m2-s3",
    chapter: "intro",
    title: "Le changement de paradigme",
    subtitle: "De la chaîne de caractères à l'entité",
    type: "table",
    image: slide2,
    content: {
      headers: ["SEO Traditionnel (Pré-SGE)", "SEO Moderne (2025-2026)"],
      rows: [
        ["Mots-clés exacts (Strings)", "Entités sémantiques et contextes (Things)"],
        ["4 catégories d'intention basiques", "Grille granulaire (6+ intentions spécifiques)"],
        ["Répétition et bourrage de mots-clés", "Co-occurrences (Topic Clusters & NLP)"],
        ["100% Humain ou 100% IA brute", "Workflow Hybride (IA + Human-in-the-loop)"],
        ["Volume de mots et liens", "Preuves vérifiables (EEAT) et SGE"],
      ],
      tip: "Règle d'or absolue : une seule page ne répond qu'à une seule intention principale.",
    },
  },
  {
    id: "m2-s4",
    chapter: "intro",
    title: "Architecture d'un contenu SGE-Ready",
    type: "content",
    content: {
      lead: "Le contenu reste « roi », mais sa définition a radicalement changé. Google évalue désormais la profondeur sémantique, la couverture des intentions et la preuve d'expérience derrière chaque article. La Search Generative Experience (SGE) bouleverse les SERP en favorisant les contenus cités comme sources fiables.",
      groups: [
        { name: "Cartographie des Intentions", items: ["Ciblage chirurgical de la requête principale et des sous-intentions associées."] },
        { name: "Réseau d'Entités", items: ["Profondeur sémantique via Google NLP, MUM et BERT — couvrir les concepts, pas seulement les mots."] },
        { name: "Structure & Passage Indexing", items: ["Optimisation pour la Position Zéro : paragraphes autonomes, titres explicites, réponses directes."] },
      ],
    },
  },
  {
    id: "m2-s5",
    chapter: "intent",
    title: "1.1 Au-delà des 4 types classiques",
    type: "content",
    content: {
      lead: "La grille classique (informationnel, navigationnel, transactionnel, commercial) est insuffisante pour le SEO moderne. Voici une segmentation opérationnelle utilisée par les outils comme Semrush ou Sistrix.",
      callout: "Méthodologie : pour chaque requête cible, analysez la SERP manuellement. Si vous voyez des extraits « HowTo » ou des vidéos, l'intention est tutorielle. Si vous voyez des comparatifs, l'intention est commerciale.",
    },
  },
  {
    id: "m2-s6",
    chapter: "intent",
    title: "Matrice de diagnostic — 6 intentions granulaires",
    type: "table",
    image: slide4,
    content: {
      headers: ["Intention", "Exemple de requête", "Format de contenu adapté"],
      rows: [
        ["Définition / concept", "« qu'est-ce que le EEAT »", "Paragraphe concis (40-60 mots) + glossaire"],
        ["Comparaison / avis", "« Ahrefs vs Semrush »", "Tableaux comparatifs, listes pour/contre"],
        ["Tutoriel / guide pas-à-pas", "« créer un fichier robots.txt »", "Structure HowTo, balise Schema HowTo"],
        ["Local / proximité", "« boulangerie bio Paris 11 »", "Google Business Profile, pages de localité"],
        ["Actualité / tendance", "« mise à jour core Google juillet 2025 »", "Date explicite, section « derniers ajouts »"],
        ["Produit / catalogue", "« chaussures de randonnée femme T39 »", "Fiche produit avec prix, dispo, avis"],
      ],
    },
  },
  {
    id: "m2-s7",
    chapter: "intent",
    title: "1.2 Cartographie des intentions pour une page",
    type: "content",
    content: {
      lead: "Le SEO avancé exige qu'une seule page ne réponde qu'à une seule intention principale. Vous pouvez couvrir des intentions secondaires dans des sous-sections avec un format adapté.",
      callout: "Exemple : page « changer un pneu de voiture » (intention principale : tutoriel). En fin d'article, vous pouvez ajouter une section « Comparaison des meilleurs crics hydrauliques » (intention comparatif) — mais cela risque de diluer la clarté. Mieux vaut créer une page satellite dédiée.",
      rule: "Outils recommandés : alsoasked.com ou l'onglet « People also ask » de Google pour identifier les sous-intentions associées.",
    },
  },
  {
    id: "m2-s8",
    chapter: "semantic",
    title: "2.1 Des mots-clés aux entités",
    type: "content",
    image: slide5,
    content: {
      lead: "Le traitement du langage naturel (BERT, MUM) permet à Google de comprendre le contexte et les entités (personnes, lieux, concepts, produits) présentes dans votre contenu. Une entité est un élément distinct identifiable.",
      principle: "Exemple — requête « meilleur film de science-fiction 2025 »",
      items: [
        "Entités identifiées : film, science-fiction, 2025.",
        "Entités liées : réalisateurs, acteurs, notes critiques.",
        "Distinctions : Oscars, festivals, prix.",
      ],
      callout: "Votre contenu doit mentionner ces entités (et leurs relations) pour être jugé pertinent par Google.",
    },
  },
  {
    id: "m2-s9",
    chapter: "semantic",
    title: "2.2 Topic Clustering & NLP",
    type: "table",
    content: {
      headers: ["Approche manuelle", "Approche outillée (recommandée)"],
      rows: [
        ["Lister les synonymes, termes liés", "Extraire les entités avec Google Natural Language API ou MarketMuse"],
        ["Regrouper en clusters thématiques", "Générer des briefs SEO incluant la densité d'entités"],
        ["Vérifier les co-occurrences dans le top 10 SERP (YourTextGuru)", "Analyser la concurrence pour chaque entité"],
      ],
      tip: "Bonnes pratiques : utilisez des variations lexicales naturelles, structurez le contenu autour des questions utilisateurs, ajoutez des liens internes vers des pages d'entités.",
    },
  },
  {
    id: "m2-s10",
    chapter: "semantic",
    title: "2.3 Données structurées sémantiques",
    type: "content",
    content: {
      lead: "Les balises Schema.org aident Google à identifier les entités et leurs attributs. Pour un contenu avancé, priorisez :",
      examples: [
        { tag: "Article", desc: "Avec author, datePublished, publisher." },
        { tag: "Person", desc: "Pour les auteurs (lien vers profil, expertise)." },
        { tag: "Organization", desc: "Pour l'entité éditoriale." },
        { tag: "HowTo", desc: "Pour les tutoriels en étapes." },
        { tag: "FAQPage", desc: "Depuis 2023, n'apparaît plus que pour sites gouvernementaux/santé. À utiliser avec modération, ou avec speakable." },
      ],
      rule: "À lire : la documentation Google sur les « speakable » pour les assistants vocaux.",
    },
  },
  {
    id: "m2-s11",
    chapter: "passage",
    title: "3.1 Le Passage Indexing",
    subtitle: "Un levier méconnu",
    type: "content",
    image: slide6,
    content: {
      lead: "Depuis 2021, Google peut indexer un paragraphe spécifique d'une page, même si la page traite d'un sujet plus large. Une page bien structurée peut se classer pour des requêtes très fines sans page dédiée.",
      checklist: [
        "Chaque paragraphe doit pouvoir être lu de manière autonome (complet, compréhensible hors contexte).",
        "Utilisez des titres H2/H3 explicites — évitez « Introduction » ou « Détails ». Préférez « Comment réparer un pneu crevé en 3 étapes ».",
        "Placez la réponse à la question dans les 40-60 premiers mots du paragraphe (idéal pour les snippets).",
      ],
    },
  },
  {
    id: "m2-s12",
    chapter: "passage",
    title: "3.2 Structure pyramidale moderne (EEAT)",
    type: "table",
    image: slide7,
    content: {
      headers: ["Niveau", "Contenu", "Exigence SEO"],
      rows: [
        ["H1", "Titre principal incluant l'intention et le mot-clé principal", "50-70 caractères (~600px)"],
        ["Chapô", "Résumé 100-150 mots : auteur, promesse, preuves", "Doit contenir la requête principale et entités clés"],
        ["H2", "Sections principales (chaque H2 = une sous-intention)", "Intégrer entités ou questions"],
        ["H3", "Détails, listes, exemples", "Utiliser pour les étapes d'un tutoriel"],
        ["Encadré « À savoir »", "Citations d'experts, données internes", "Renforce l'EEAT"],
        ["Conclusion + CTA", "Synthèse, lien vers ressources ou formulaire", "Progression vers la conversion"],
      ],
      tip: "Exemple — H1 : « Audit SEO technique : méthode complète pour 2025 (guide EEAT) ». Chapô : « Par Jean Dupont, auditeur certifié Google, 7 ans d'expérience… »",
    },
  },
  {
    id: "m2-s13",
    chapter: "passage",
    title: "3.3 Optimiser pour la Position Zéro",
    type: "table",
    content: {
      headers: ["Type de snippet", "Format", "Optimisation"],
      rows: [
        ["Paragraphe", "40-60 mots, réponse directe", "Démarrer le paragraphe par la réponse (« Un audit SEO technique consiste à… »)"],
        ["Liste (à puces ou numérotée)", "Étapes, ingrédients, critères", "Encadrer dans <ul> ou <ol> avec phrase introductive"],
        ["Tableau", "Comparatif", "Utiliser <table> avec en-têtes <th> clairs"],
      ],
      tip: "Astuce : repérez les requêtes qui déclenchent un snippet chez un concurrent, analysez la structure, puis proposez une réponse plus claire, plus courte ou avec plus de données.",
    },
  },
  {
    id: "m2-s14",
    chapter: "eeat",
    title: "4.1 EEAT — La couche de confiance",
    type: "content",
    image: slide8,
    content: {
      lead: "Depuis décembre 2022, Google a ajouté Experience à l'acronyme E-A-T. Une page doit démontrer que l'auteur ou le site a une expérience directe du sujet.",
      callout: "EEAT n'est pas un facteur de classement direct, mais un bouclier algorithmique : il protège vos contenus des Core Updates et conditionne leur citation par la SGE.",
    },
  },
  {
    id: "m2-s15",
    chapter: "eeat",
    title: "Les 4 composantes de l'EEAT",
    type: "table",
    image: slide9,
    content: {
      headers: ["Sigle", "Signification", "Comment le prouver en contenu"],
      rows: [
        ["E — Experience", "Avoir utilisé, testé, vécu le sujet", "Photos originales, témoignages, cas clients, données issues de vraies campagnes"],
        ["E — Expertise", "Connaissances approfondies", "Diplômes, certifications, bibliographie, langage technique maîtrisé"],
        ["A — Authoritativeness", "Reconnaissance par d'autres experts", "Backlinks de sites référents, mentions médias, prix, distinctions"],
        ["T — Trustworthiness", "Transparence, sécurité, honnêteté", "Mentions légales, politique de confidentialité, HTTPS, avis vérifiés, pas de contenu trompeur"],
      ],
    },
  },
  {
    id: "m2-s16",
    chapter: "eeat",
    title: "4.2 Mise en œuvre concrète",
    type: "content",
    image: slide10,
    content: {
      groups: [
        {
          name: "Pour Experience (1er E)",
          items: [
            "Ajouter des photos personnelles (pas des banques d'images) — ex. votre équipe utilisant le produit.",
            "Raconter une anecdote réelle : « Lors de notre test sur 3 sites e-commerce, nous avons observé que… »",
            "Citer des données internes : « D'après les 500 audits réalisés en 2024, 78% des sites ont un LCP trop élevé. »",
          ],
        },
        {
          name: "Pour l'Expertise",
          items: [
            "Bio d'auteur détaillée en fin d'article (lien LinkedIn, publications).",
            "Notes de bas de page ou références à des études scientifiques.",
            "Afficher la date de publication et de dernière mise à jour (Schema dateModified).",
          ],
        },
        {
          name: "Pour l'Autorité",
          items: [
            "Backlinks éditoriaux (pas achetés) — ex. articles invités sur sites reconnus.",
            "Être cité comme source par des médias ou institutions.",
          ],
        },
        {
          name: "Pour la Confiance",
          items: [
            "Page « Notre équipe » avec CV des rédacteurs.",
            "Processus de relecture explicite : « Article relu par un docteur en nutrition le 12/05/2025 ».",
            "Marquer les liens sponsorisés ou affiliés (rel=\"sponsored\").",
          ],
        },
      ],
      warning: "Google peut pénaliser les contenus générés par IA qui manquent de preuves d'expérience. L'IA est un outil d'aide, pas un créateur de vérité.",
    },
  },
  {
    id: "m2-s17",
    chapter: "ai",
    title: "5.1 IA générative — Utilités & limites",
    type: "content",
    image: slide11,
    content: {
      lead: "L'IA (ChatGPT, Jasper, ContentShake) est excellente pour générer des plans et briefs, proposer introductions/conclusions types, créer des FAQ à partir des « People also ask », ou reformuler des phrases trop complexes.",
      groups: [
        {
          name: "Limites à connaître",
          items: [
            "Hallucinations : invente faits, chiffres, citations.",
            "Ton générique : trop « corporate » ou plat, manque d'expérience personnelle.",
            "Risque de duplicate : deux utilisateurs peuvent générer le même contenu.",
            "Non-alignement EEAT : l'IA ne peut pas prouver d'expérience.",
          ],
        },
      ],
    },
  },
  {
    id: "m2-s18",
    chapter: "ai",
    title: "5.2 Processus hybride (Human-in-the-loop)",
    type: "image",
    image: slide12,
    content: {
      steps: [
        "Recherche d'intention et entités (humain + outils).",
        "Génération d'un premier jet (IA) — pas plus de 70% du texte final.",
        "Relecture critique (humain) : suppression des erreurs, ajout d'anecdotes réelles, données originales.",
        "Enrichissement EEAT (humain) : bios, photos, témoignages, liens internes.",
        "Optimisation technique (balises, données structurées, maillage).",
        "Vérification avec détecteur d'IA (optionnel) — Google ne pénalise pas l'IA si le contenu est utile.",
      ],
    },
  },
  {
    id: "m2-s19",
    chapter: "ai",
    title: "5.3 Bonnes pratiques spécifiques",
    type: "table",
    content: {
      headers: ["Action recommandée", "À éviter absolument"],
      rows: [
        ["Indiquer en bas d'article : « Cet article a été relu et enrichi par [expert humain] »", "Publier du contenu IA brut, sans vérification factuelle"],
        ["Ajouter des captures d'écran originales ou des graphiques", "Utiliser des exemples génériques (« selon une étude » sans source)"],
        ["Configurer l'IA avec un tone of voice (« style direct, vocabulaire technique »)", "Laisser l'IA générer des listes de mots-clés (keyword stuffing)"],
        ["Demander à l'IA de citer ses sources (puis vérifier)", "Faire rédiger des avis ou témoignages fictifs"],
      ],
      tip: "Ressource : consultez les Google Search Central Guidelines sur le contenu généré par IA — aucune interdiction, mais exigence de qualité EEAT.",
    },
  },
  {
    id: "m2-s20",
    chapter: "synthese",
    title: "Mini-résumé du Module 2",
    type: "table",
    content: {
      headers: ["Thème", "Points clés"],
      rows: [
        ["Intentions de recherche", "Grille fine en 6 types. Une page = une intention principale."],
        ["SEO sémantique", "Passer des mots-clés aux entités (Google NLP). Topic clusters + données structurées."],
        ["Passage Indexing", "Chaque paragraphe doit être autonome. Titres explicites."],
        ["Position Zéro", "Réponse directe en 40-60 mots. Listes HTML, tableaux."],
        ["EEAT", "Prouver Experience (photos, données), Expertise (bio, diplômes), Autorité (backlinks), Confiance (transparence, sécurité)."],
        ["IA générative", "Outil d'aide au plan et au brouillon — supervision humaine indispensable pour EEAT et hallucinations."],
      ],
    },
  },
  {
    id: "m2-s21",
    chapter: "synthese",
    title: "TP — Exercice pratique Module 2",
    type: "exercise",
    image: slide15,
    content: {
      contexte: "Vous devez créer un contenu pour le site de conseil financier « Argent Futé ». Sujet : « Comment épargner pour la retraite quand on est auto-entrepreneur ? »",
      taches: [
        {
          n: 1,
          titre: "Analyse d'intention",
          items: [
            "Quelle est l'intention principale (parmi les 6 types) ? Justifiez.",
            "Identifiez 3 sous-intentions (ex. « quel PER choisir », « fiscalité auto-entrepreneur »).",
          ],
        },
        {
          n: 2,
          titre: "Recherche d'entités",
          items: [
            "À l'aide de Google NLP (ou manuellement), listez 5 entités (concepts, produits, institutions) qui doivent apparaître dans l'article.",
          ],
        },
        {
          n: 3,
          titre: "Optimisation EEAT",
          items: [
            "Rédigez un chapô de 120 mots intégrant : preuve d'expérience, bio courte de l'auteur (fictive mais crédible), engagement de mise à jour.",
            "Proposez deux types de preuves originales (données internes, témoignages, captures).",
          ],
        },
        {
          n: 4,
          titre: "Structure vers la Position Zéro",
          items: [
            "Pour la requête « âge idéal pour commencer à épargner retraite auto-entrepreneur », rédigez un paragraphe de 50 mots qui pourrait devenir un snippet.",
            "Prévoyez une liste à puces ou un tableau pour une autre requête (ex. « comparatif PER vs assurance vie »).",
          ],
        },
        {
          n: 5,
          titre: "Utilisation de l'IA",
          items: [
            "Générez un premier jet d'introduction avec un outil gratuit. Réécrivez-la en ajoutant un exemple personnel ou une statistique originale pour améliorer l'EEAT.",
            "Expliquez en 3 lignes les modifications apportées.",
          ],
        },
      ],
      livrable: "Document d'une page maximum, structuré en 5 sections correspondant aux tâches.",
    },
  },
];

export const quiz2 = [
  {
    q: "Combien d'intentions granulaires recense la matrice avancée du Module 2 ?",
    options: ["3", "4", "6", "10"],
    answer: 2,
    explain: "La grille moderne distingue 6 intentions : définition, comparaison, tutoriel, local, actualité, produit.",
  },
  {
    q: "Que signifie le premier E de l'EEAT ajouté en décembre 2022 ?",
    options: ["Efficiency", "Experience", "Engagement", "Expertise"],
    answer: 1,
    explain: "Experience — avoir utilisé, testé ou vécu le sujet (preuves de première main).",
  },
  {
    q: "Quelle longueur viser pour un paragraphe destiné à la Position Zéro ?",
    options: ["10-20 mots", "40-60 mots", "150-200 mots", "300+ mots"],
    answer: 1,
    explain: "Une réponse directe de 40 à 60 mots maximise vos chances de Featured Snippet.",
  },
  {
    q: "Quelle proportion maximale de texte IA recommander dans le workflow hybride ?",
    options: ["30%", "50%", "70%", "100%"],
    answer: 2,
    explain: "Le premier jet IA ne doit pas dépasser 70% du texte final ; le reste est enrichissement humain (EEAT).",
  },
  {
    q: "Quel type de Schema est devenu très restrictif depuis 2023 ?",
    options: ["Article", "FAQPage", "HowTo", "Person"],
    answer: 1,
    explain: "FAQPage n'apparaît plus que pour les sites gouvernementaux et santé. À utiliser avec modération.",
  },
  {
    q: "Le Passage Indexing permet à Google de :",
    options: [
      "Indexer un domaine entier en une passe",
      "Indexer un paragraphe spécifique d'une page",
      "Bloquer l'indexation des pages JS",
      "Générer un sitemap automatiquement",
    ],
    answer: 1,
    explain: "Depuis 2021, Google peut classer un paragraphe précis d'une page longue, à condition qu'il soit autonome.",
  },
  {
    q: "Quel outil permet d'extraire les entités d'un texte de façon automatisée ?",
    options: ["Google Natural Language API", "robots.txt", "Lighthouse", "Wayback Machine"],
    answer: 0,
    explain: "Google NLP API (et alternatives comme MarketMuse) extraient et scorent les entités d'un contenu.",
  },
];

export const flashcards2 = [
  { front: "EEAT", back: "Experience, Expertise, Authoritativeness, Trustworthiness — couche de confiance évaluée par Google." },
  { front: "Passage Indexing", back: "Indexation d'un paragraphe spécifique d'une page (Google, depuis 2021). Exige des paragraphes autonomes." },
  { front: "Position Zéro", back: "Featured Snippet affiché au-dessus des résultats organiques. Réponse directe en 40-60 mots." },
  { front: "Topic Cluster", back: "Regroupement thématique de pages liées sémantiquement autour d'une page pilier." },
  { front: "Entité (SEO)", back: "Élément distinct identifiable (personne, lieu, concept, produit) compris par Google via NLP." },
  { front: "SGE", back: "Search Generative Experience — interface IA de Google qui synthétise des sources fiables." },
  { front: "Speakable", back: "Schema dédié aux assistants vocaux, identifie les passages lisibles à voix haute." },
  { front: "Human-in-the-loop", back: "Workflow IA + supervision humaine : génération auto, puis enrichissement EEAT." },
  { front: "Hallucination IA", back: "Faits, chiffres ou citations inventés par un LLM. Toujours vérifier les sources." },
  { front: "BERT / MUM", back: "Modèles NLP de Google qui comprennent contexte et entités au-delà des mots-clés." },
];

export const glossary2 = [
  { term: "EEAT", def: "Experience, Expertise, Authoritativeness, Trustworthiness — critères de qualité Google." },
  { term: "SGE", def: "Search Generative Experience — résultats IA de Google synthétisant les meilleures sources." },
  { term: "Passage Indexing", def: "Indexation d'un paragraphe spécifique d'une page longue (Google, 2021)." },
  { term: "Featured Snippet", def: "Encadré de réponse directe affiché en Position Zéro de la SERP." },
  { term: "Entité sémantique", def: "Concept distinct (personne, lieu, produit) reconnu par les modèles NLP de Google." },
  { term: "Topic Cluster", def: "Groupe thématique de pages reliées à une page pilier centrale." },
  { term: "BERT", def: "Bidirectional Encoder Representations from Transformers — modèle NLP de Google (2019)." },
  { term: "MUM", def: "Multitask Unified Model — modèle multimodal de Google, 1000× plus puissant que BERT." },
  { term: "Schema HowTo", def: "Données structurées pour décrire un tutoriel en étapes." },
  { term: "Schema FAQPage", def: "Données structurées pour les FAQ — usage restreint depuis 2023." },
  { term: "Speakable", def: "Propriété Schema indiquant les passages lisibles par assistants vocaux." },
  { term: "Hallucination", def: "Production par un LLM d'informations factuellement fausses présentées comme vraies." },
  { term: "Human-in-the-loop", def: "Processus mixte IA + supervision humaine pour garantir EEAT et qualité." },
  { term: "People Also Ask", def: "Bloc de questions associées affiché dans la SERP — révèle les sous-intentions." },
  { term: "Tone of voice", def: "Ligne éditoriale (style, vocabulaire) à fournir à un LLM pour éviter le ton générique." },
];
