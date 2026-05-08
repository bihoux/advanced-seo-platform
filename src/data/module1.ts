import slide1 from "@/assets/pdf/page_1.jpg";
import slide2 from "@/assets/pdf/page_2.jpg";
import slide3 from "@/assets/pdf/page_3.jpg";
import slide5 from "@/assets/pdf/page_5.jpg";
import slide6 from "@/assets/pdf/page_6.jpg";
import slide8 from "@/assets/pdf/page_8.jpg";
import slide9 from "@/assets/pdf/page_9.jpg";
import slide10 from "@/assets/pdf/page_10.jpg";
import slide11 from "@/assets/pdf/page_11.jpg";
import slide12 from "@/assets/pdf/page_12.jpg";

export type Slide = {
  id: string;
  chapter: string;
  title: string;
  subtitle?: string;
  type: "intro" | "content" | "table" | "list" | "image" | "summary" | "exercise" | "quiz";
  image?: string;
  content?: any;
};

export const moduleInfo = {
  code: "Module 1",
  title: "Architecture technique avancée et signaux utilisateur",
  course: "Rédaction & Optimisation SEO Avancée",
  level: "Universitaire — SEO Avancé 2026",
  duration: "≈ 6h",
  prerequis: "Maîtrise des fondamentaux du SEO (cours « Principes de base du SEO »)",
  objectifs: [
    "Diagnostiquer et optimiser le budget de crawl d'un site de taille intermédiaire à grande.",
    "Maîtriser les Core Web Vitals (LCP, INP, CLS) et leur impact sur le classement.",
    "Mettre en œuvre une architecture sémantique avancée (cocon thématique, maillage intelligent).",
    "Appliquer les principes d'indexabilité pour les applications JavaScript (SPA, frameworks modernes).",
    "Évaluer la cohérence entre signaux UX et SEO (mobile-first, accessibilité, sobriété numérique).",
  ],
};

export const chapters = [
  { id: "intro", title: "Introduction", icon: "Sparkles" },
  { id: "crawl", title: "1. Crawl & Indexation", icon: "Bot" },
  { id: "cwv", title: "2. Core Web Vitals", icon: "Gauge" },
  { id: "semantic", title: "3. Architecture sémantique", icon: "Network" },
  { id: "js", title: "4. JavaScript SEO", icon: "Code2" },
  { id: "ux", title: "5. UX • A11y • Green SEO", icon: "Leaf" },
  { id: "synthese", title: "Synthèse & TP", icon: "GraduationCap" },
];

export const slides: Slide[] = [
  {
    id: "s1",
    chapter: "intro",
    title: "Architecture technique avancée",
    subtitle: "& signaux utilisateur — Standards SEO 2026",
    type: "intro",
    image: slide1,
    content: {
      kicker: "MODULE 1",
      tagline: "L'Anatomie d'un Site Dominant — Blueprint Technique & Sémantique",
      pillars: ["SYS.CRAWL", "SYS.SEMANTICS", "SYS.RENDER"],
    },
  },
  {
    id: "s2",
    chapter: "intro",
    title: "Objectifs pédagogiques",
    type: "list",
    content: { items: moduleInfo.objectifs, prerequis: moduleInfo.prerequis },
  },
  {
    id: "s3",
    chapter: "intro",
    title: "Plan du module",
    type: "image",
    image: slide2,
    content: {
      steps: [
        "Crawl intelligent et budget de Googlebot",
        "Core Web Vitals 2026 (FID → INP)",
        "Architecture sémantique 2.0 — cocon & graphe de liens",
        "JavaScript SEO : stratégies de rendu",
        "Union UX-SEO : mobile, accessibilité, sobriété",
      ],
    },
  },
  {
    id: "s4",
    chapter: "crawl",
    title: "1.1 Le budget de crawl",
    subtitle: "Notion clé",
    type: "content",
    content: {
      lead: "Un robot comme Googlebot ne passe qu'un temps limité sur chaque site. Ce temps, appelé crawl budget, est partagé entre la découverte de nouvelles pages et la ré-exploration de pages existantes.",
      callout: "En SEO avancé, il faut allouer ce budget aux pages à forte valeur ajoutée et éviter de gaspiller sur des pages sans intérêt (filtres, tris, paramètres de session, pages d'impression…).",
    },
  },
  {
    id: "s5",
    chapter: "crawl",
    title: "Bonnes pratiques 2026",
    type: "table",
    image: slide3,
    content: {
      headers: ["Facteur", "Recommandation"],
      rows: [
        ["Pages orphelines", "Supprimer ou intégrer au maillage — Googlebot ne les trouve que via sitemap, mais cela gaspille du budget."],
        ["Redirections inutiles", "Éviter les chaînes (301 → 302 → 200). Limiter à une redirection par URL."],
        ["Paramètres d'URL", "Utiliser rel=\"canonical\", paramètres ignorés dans GSC, ou bloquer les paramètres sans contenu."],
        ["Fréquence de mise à jour", "Indiquer via lastmod dans le sitemap (incrémental) pour prioriser les pages fraîches."],
      ],
    },
  },
  {
    id: "s6",
    chapter: "crawl",
    title: "1.2 Meta robots & X-Robots-Tag",
    subtitle: "Contrôle fin de l'indexation",
    type: "content",
    content: {
      lead: "Les balises meta robots permettent un contrôle page par page. En avancé, on utilise aussi l'en-tête HTTP X-Robots-Tag pour les fichiers non-HTML (PDF, images, etc.).",
      examples: [
        { tag: "noindex, follow", desc: "Page non indexée, mais les liens sont suivis (ex. page de remerciement après formulaire)." },
        { tag: "noindex, nofollow", desc: "Page exclue complètement (ex. contenu dupliqué interne)." },
        { tag: "max-snippet:0", desc: "Empêche Google d'afficher un extrait (utile pour pages très sensibles)." },
      ],
      warning: "Erreur fréquente : utiliser noindex sur des pages qui reçoivent des liens entrants — vous perdez la transmission de popularité.",
    },
  },
  {
    id: "s7",
    chapter: "crawl",
    title: "1.3 Sitemap XML dynamique & segmentation",
    type: "content",
    content: {
      lead: "Pour les grands sites (>10 000 pages), un sitemap unique est inefficace. Créez plusieurs sitemaps thématiques et référencez-les dans un fichier sitemap-index.xml.",
      code: `sitemap-index.xml
├── sitemap-produits.xml
├── sitemap-articles.xml
└── sitemap-categories.xml`,
      rule: "À faire : inclure uniquement les pages que vous voulez voir indexées. Pas de pages noindex, pas d'URLs avec paramètres de session.",
    },
  },
  {
    id: "s8",
    chapter: "cwv",
    title: "2. Core Web Vitals 2026",
    subtitle: "LCP • INP • CLS",
    type: "content",
    image: slide5,
    content: {
      lead: "En mars 2024, Google a remplacé FID (First Input Delay) par INP (Interaction to Next Paint). L'INP mesure la latence de toutes les interactions sur l'ensemble de la visite.",
    },
  },
  {
    id: "s9",
    chapter: "cwv",
    title: "Les 3 métriques & seuils",
    type: "table",
    content: {
      headers: ["Métrique", "Seuil « bon »", "Mesure"],
      rows: [
        ["LCP — Largest Contentful Paint", "≤ 2,5 s", "Temps de chargement du plus grand élément visible (image, bloc texte, vidéo)."],
        ["INP — Interaction to Next Paint", "≤ 200 ms", "Réactivité globale après chaque interaction utilisateur."],
        ["CLS — Cumulative Layout Shift", "≤ 0,1", "Stabilité visuelle (éviter les déplacements inattendus)."],
      ],
    },
  },
  {
    id: "s10",
    chapter: "cwv",
    title: "2.2 Optimisations concrètes",
    type: "content",
    image: slide6,
    content: {
      groups: [
        {
          name: "Pour LCP",
          items: [
            "Hébergement réactif (TTFB < 200 ms) et CDN.",
            "Images : formats modernes WebP / AVIF, srcset pour le responsive.",
            "Préchauffage des connexions : <link rel=\"preconnect\">.",
            "Supprimer tout JS bloquant le rendu de l'élément LCP.",
          ],
        },
        {
          name: "Pour INP",
          items: [
            "Découper les longues tâches JS (>50 ms) en fragments (setTimeout, requestIdleCallback).",
            "Éviter les écouteurs d'événements lourds sur les boutons critiques.",
            "Utiliser passive: true pour les événements de défilement.",
          ],
        },
        {
          name: "Pour CLS",
          items: [
            "Définir explicitement width et height sur images et iframes.",
            "Réserver l'espace pour publicités et bannières dynamiques.",
            "Utiliser font-display: optional ou swap pour éviter FOIT/FOUT.",
          ],
        },
      ],
    },
  },
  {
    id: "s11",
    chapter: "cwv",
    title: "2.3 Erreurs avancées à éviter",
    type: "list",
    content: {
      items: [
        "Appliquer un lazy loading sur l'image LCP — elle doit se charger prioritairement.",
        "Ignorer l'impact des scripts tiers (pixels, réseaux sociaux, chatbots) — ils dégradent l'INP.",
        "Utiliser des polices hébergées en externe sans preload — elles retardent le LCP.",
      ],
      tip: "Combinez le rapport « Core Web Vitals » de la GSC avec PageSpeed Insights et Lighthouse (Chrome DevTools) pour un diagnostic complet.",
    },
  },
  {
    id: "s12",
    chapter: "semantic",
    title: "3.1 Du maillage au graphe sémantique",
    type: "content",
    content: {
      lead: "Le maillage interne ne sert pas seulement à la navigation. Il construit un graphe thématique que Google utilise pour comprendre votre expertise.",
      principle: "Cocon sémantique (Laurent Bourrelly, enrichi par l'IA) :",
      items: [
        "Une page pilier (contenu large, introductif) répond à la requête principale générique.",
        "Des pages satellites traitent des sous-sujets spécifiques (longue traîne).",
        "Liens internes bilatéraux et thématiques : chaque satellite pointe vers le pilier ET vers d'autres satellites connexes.",
      ],
    },
  },
  {
    id: "s13",
    chapter: "semantic",
    title: "3.2 Cocon classique vs Cocon 2.0",
    type: "table",
    content: {
      headers: ["Critère", "Version classique", "Version 2.0 (2025-2026)"],
      rows: [
        ["Choix des pages", "Intuition + volumes de recherche", "Topic clustering via NLP (MarketMuse, Frase)"],
        ["Mots-clés", "Regroupement lexical manuel", "Identification automatique des entités (Google Natural Language API)"],
        ["Maillage", "Règle des 3 clics max", "Graphe de liens avec PageRank interne mesurable (Oncrawl, Screaming Frog)"],
        ["Mise à jour", "Statique", "Dynamique : injection automatique de liens à chaque publication"],
      ],
    },
  },
  {
    id: "s14",
    chapter: "semantic",
    title: "3.3 Exemple — Site d'éco-tourisme",
    type: "image",
    image: slide8,
    content: {
      pilier: "/guide-eco-tourisme-bretagne — H1 : « Écotourisme en Bretagne : destinations, hébergements et bonnes pratiques »",
      satellites: [
        "/hebergements-eco-bretagne",
        "/randonnees-littorales-bretagne",
        "/restaurants-bio-bretagne",
        "/mobilite-douce-bretagne",
      ],
      mesure: "Utilisez Screaming Frog en mode « calcul du PageRank interne ». Vérifiez que les satellites reçoivent du jus de lien depuis le pilier.",
    },
  },
  {
    id: "s15",
    chapter: "js",
    title: "4.1 Le piège des frameworks JS",
    subtitle: "React • Vue • Angular",
    type: "content",
    image: slide9,
    content: {
      lead: "Googlebot exécute JavaScript, mais en deux vagues :",
      waves: [
        { n: "1", title: "Premier crawl", desc: "Le HTML brut (peu ou pas de JS exécuté)." },
        { n: "2", title: "Deuxième vague (WRS)", desc: "Exécution du JS, parfois plusieurs heures ou jours après." },
      ],
      warning: "Si votre contenu critique dépend entièrement d'un rendu côté client (CSR), vous prenez le risque d'une indexation retardée ou manquée.",
    },
  },
  {
    id: "s16",
    chapter: "js",
    title: "4.2 SSR, pré-rendu, hybridation",
    type: "table",
    image: slide10,
    content: {
      headers: ["Approche", "Description", "Adapté pour"],
      rows: [
        ["SSR (Server-Side Rendering)", "Le serveur renvoie du HTML complet avec le contenu.", "Contenu principal (produits, articles)"],
        ["Pré-rendu statique (SSG)", "Génération de pages HTML lors du build (Next.js export, Nuxt generate).", "Pages peu dynamiques (blog, pages institutionnelles)"],
        ["Hydratation sélective (Islands)", "Rendu serveur des parties importantes, hydratation progressive.", "Sites complexes avec interactions lourdes"],
      ],
      tip: "À tester systématiquement : URL Inspection Tool de la GSC → « Tester la page en direct » → « Afficher le contenu extrait ».",
    },
  },
  {
    id: "s17",
    chapter: "js",
    title: "4.3 Directives pour les développeurs",
    type: "list",
    content: {
      items: [
        "Ne bloquez pas les ressources JS dans robots.txt (évitez Disallow: /js/).",
        "Implémentez le rendu côté serveur pour les pages à indexer rapidement.",
        "Utilisez history.pushState (et non des hash #) pour les nouvelles routes.",
        "Fournissez des liens statiques <a href> dans le HTML (pas seulement onClick).",
      ],
    },
  },
  {
    id: "s18",
    chapter: "ux",
    title: "5.1 Mobile-first indexation",
    type: "content",
    image: slide11,
    content: {
      lead: "En 2026, Google indexe uniquement la version mobile de la quasi-totalité des nouveaux sites. Vérifiez avec le rapport « Ergonomie mobile » de la GSC.",
      checklist: [
        "Texte lisible sans zoomer (taille de police > 14px).",
        "Espaces tactiles (boutons) ≥ 48 × 48 px.",
        "Aucun contenu non accessible sur mobile (tableaux trop larges, vidéo Flash).",
      ],
    },
  },
  {
    id: "s19",
    chapter: "ux",
    title: "5.2 Accessibilité (a11y) × SEO",
    type: "list",
    content: {
      lead: "Google ne pénalise pas directement l'absence de conformité WCAG, mais l'accessibilité améliore le temps passé, le taux de rebond et les signaux comportementaux.",
      items: [
        "Balises ARIA correctement utilisées (role=\"navigation\", aria-label).",
        "Contrastes suffisants (ratio ≥ 4,5:1 pour le texte normal).",
        "Navigation au clavier fonctionnelle (sans pièges).",
        "Textes alternatifs pertinents pour les images, y compris les boutons graphiques.",
      ],
    },
  },
  {
    id: "s20",
    chapter: "ux",
    title: "5.3 Sobriété numérique — Green SEO",
    type: "content",
    content: {
      lead: "Des sites plus légers (donc plus écologiques) obtiennent de meilleures performances Core Web Vitals. Optimiser l'écologie, c'est optimiser le SEO.",
      steps: [
        { name: "Étape 1 — Allègement", desc: "Brotli > Gzip · réduction des polices web (privilégier polices système) · fusion CSS/JS, sprites SVG." },
        { name: "Étape 2 — Gain physique", desc: "Baisse du volume de données transférées · chute du nombre de requêtes HTTP." },
        { name: "Étape 3 — Récompense algorithmique", desc: "Amélioration fulgurante du LCP et de l'INP · libération du crawl budget." },
      ],
    },
  },
  {
    id: "s21",
    chapter: "synthese",
    title: "Mini résumé du Module 1",
    type: "table",
    image: slide12,
    content: {
      headers: ["Thème", "Points clés"],
      rows: [
        ["Crawl budget", "Éviter les pages orphelines, réduire les redirections, noindex sur les pages sans valeur."],
        ["Core Web Vitals", "LCP ≤ 2,5 s · INP ≤ 200 ms · CLS ≤ 0,1. Remplacer FID par INP (2025)."],
        ["Architecture sémantique", "Cocon thématique 2.0 : page pilier + satellites, maillage bilatéral, enrichi par l'IA."],
        ["JavaScript SEO", "Préférer SSR ou pré-rendu ; tester avec l'URL Inspection Tool de la GSC."],
        ["UX + SEO", "Mobile-first, accessibilité, sobriété = meilleures performances."],
      ],
    },
  },
  {
    id: "s22",
    chapter: "synthese",
    title: "TP — Exercice pratique",
    type: "exercise",
    content: {
      contexte: "Vous êtes consultant SEO pour ecom-bio.fr, e-commerce d'aliments biologiques (15 000 pages : produits, catégories, blog). Vous avez accès à la Google Search Console.",
      taches: [
        {
          n: 1,
          titre: "Diagnostic de crawl",
          items: [
            "Identifiez dans GSC le rapport « Couverture » : combien de pages exclues ? Causes ?",
            "Proposez 3 actions pour améliorer le budget de crawl (regrouper filtres, consolider paramètres…).",
          ],
        },
        {
          n: 2,
          titre: "Core Web Vitals",
          items: [
            "Lancez PageSpeed Insights sur la page d'accueil. Notez LCP, INP, CLS en mobile.",
            "Si une métrique est « à améliorer », donnez deux recommandations techniques précises.",
          ],
        },
        {
          n: 3,
          titre: "Architecture sémantique",
          items: [
            "Page pilier : « Alimentation bio sans gluten ». Identifiez 3 satellites potentiels.",
            "Rédigez deux exemples de liens internes (avec ancres) pour respecter un cocon thématique.",
          ],
        },
        {
          n: 4,
          titre: "JavaScript SEO",
          items: [
            "Le menu en React charge les sous-catégories dynamiquement. Quelle solution de rendu recommandez-vous ? Justifiez.",
          ],
        },
      ],
      livrable: "Rapport structuré (2 pages max) reprenant les 4 questions, avec captures d'écran si possible.",
    },
  },
];

export const quiz = [
  {
    q: "Quel est le seuil « bon » pour l'INP en 2026 ?",
    options: ["≤ 100 ms", "≤ 200 ms", "≤ 500 ms", "≤ 2,5 s"],
    answer: 1,
    explain: "L'INP doit rester sous 200 ms pour être considéré comme « bon » par Google.",
  },
  {
    q: "Quelle métrique a remplacé le FID en 2024 ?",
    options: ["LCP", "TBT", "INP", "TTFB"],
    answer: 2,
    explain: "INP (Interaction to Next Paint) remplace FID et mesure toutes les interactions.",
  },
  {
    q: "Que faire d'une page recevant des backlinks mais sans intérêt à indexer ?",
    options: [
      "noindex, nofollow",
      "noindex, follow",
      "Bloquer dans robots.txt",
      "Supprimer la page",
    ],
    answer: 1,
    explain: "noindex, follow conserve la transmission de popularité via les liens.",
  },
  {
    q: "Pour un site React e-commerce, quelle stratégie de rendu privilégier ?",
    options: ["CSR pur", "SSR", "Hash routing", "AMP only"],
    answer: 1,
    explain: "Le SSR garantit un HTML complet immédiatement disponible pour Googlebot.",
  },
  {
    q: "Quel format d'image moderne pour optimiser le LCP ?",
    options: ["BMP", "GIF", "WebP / AVIF", "TIFF"],
    answer: 2,
    explain: "WebP et AVIF offrent un excellent ratio qualité/poids.",
  },
  {
    q: "Dans un cocon sémantique 2.0, le maillage est :",
    options: [
      "Unidirectionnel pilier → satellite",
      "Bilatéral et thématique",
      "Aléatoire",
      "Inutile",
    ],
    answer: 1,
    explain: "Les satellites pointent vers le pilier ET entre eux pour former un graphe.",
  },
];

export const flashcards = [
  { front: "Crawl budget", back: "Temps limité que Googlebot consacre à un site. À allouer aux pages à forte valeur." },
  { front: "LCP", back: "Largest Contentful Paint — ≤ 2,5 s. Temps de chargement du plus grand élément visible." },
  { front: "INP", back: "Interaction to Next Paint — ≤ 200 ms. Réactivité globale (remplace FID en 2024)." },
  { front: "CLS", back: "Cumulative Layout Shift — ≤ 0,1. Stabilité visuelle de la page." },
  { front: "X-Robots-Tag", back: "En-tête HTTP pour contrôler l'indexation des fichiers non-HTML (PDF, images)." },
  { front: "Cocon sémantique", back: "Architecture page pilier + satellites avec maillage bilatéral thématique." },
  { front: "SSR", back: "Server-Side Rendering : HTML complet renvoyé par le serveur, idéal pour le SEO." },
  { front: "Islands Architecture", back: "Hydratation sélective : SSR + JS uniquement où nécessaire." },
  { front: "WRS", back: "Web Rendering Service — 2ème vague de Googlebot qui exécute le JS." },
  { front: "Green SEO", back: "Sobriété numérique = meilleures perfs CWV = meilleur SEO." },
];

export const glossary = [
  { term: "Budget de crawl", def: "Volume de pages que Googlebot explore par site sur une période donnée." },
  { term: "Canonical", def: "Balise indiquant la version officielle d'une page en cas de duplications." },
  { term: "CDN", def: "Content Delivery Network — réseau de serveurs distribués géographiquement." },
  { term: "CLS", def: "Cumulative Layout Shift — mesure la stabilité visuelle." },
  { term: "Cocon sémantique", def: "Maillage en pilier + satellites pour structurer une thématique." },
  { term: "FOIT/FOUT", def: "Flash Of Invisible / Unstyled Text lors du chargement des polices." },
  { term: "GSC", def: "Google Search Console — console de diagnostic SEO de Google." },
  { term: "Hydratation", def: "Activation côté client d'un HTML rendu côté serveur." },
  { term: "INP", def: "Interaction to Next Paint — réactivité globale aux interactions." },
  { term: "LCP", def: "Largest Contentful Paint — temps d'affichage du plus grand élément." },
  { term: "Lighthouse", def: "Outil d'audit Chrome DevTools (perf, SEO, a11y, PWA)." },
  { term: "noindex", def: "Directive empêchant l'indexation d'une page." },
  { term: "Page orpheline", def: "Page non liée depuis aucune autre page du site." },
  { term: "PageRank", def: "Algorithme de scoring de popularité des pages via les liens." },
  { term: "SSR / SSG", def: "Server-Side Rendering / Static Site Generation." },
  { term: "TTFB", def: "Time To First Byte — délai du premier octet renvoyé par le serveur." },
  { term: "WRS", def: "Web Rendering Service — moteur de rendu JS de Googlebot." },
];
