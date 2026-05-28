import img1 from "@/assets/pdf3/img_1.webp";
import img2 from "@/assets/pdf3/img_2.jpg";
import img3 from "@/assets/pdf3/img_3.jpg";
import img4 from "@/assets/pdf3/img_4.webp";
import img5 from "@/assets/pdf3/img_5.jpg";
import img05 from "@/assets/pdf3/img_05.webp";
import img6 from "@/assets/pdf3/img_6.webp";
import img7 from "@/assets/pdf3/img_7.webp";
import img8 from "@/assets/pdf3/img_8.webp";
import img9 from "@/assets/pdf3/img_9.webp";
import img10 from "@/assets/pdf3/img_10.webp";
import img11 from "@/assets/pdf3/img_11.webp";
import img12 from "@/assets/pdf3/img_12.webp";
import img14 from "@/assets/pdf3/img_14.webp";
import img15 from "@/assets/pdf3/img_15.webp";
import img16 from "@/assets/pdf3/img_16.webp";
import img19 from "@/assets/pdf3/img_19.jpg";
import type { Slide } from "./module1";
export const moduleInfo3 = {
  code: "Module 3",
  title: "Optimisation technique avancée : données structurées, internationalisation et performance",
  course: "Rédaction & Optimisation SEO Avancée",
  level: "Universitaire — SEO Avancé 2026",
  duration: "≈ 6h",
  prerequis: "Modules 1 & 2 + fondamentaux du SEO (cours « Principes de base du SEO »)",
  objectifs: [
    "Implémenter des données structurées complexes (Article, Product, HowTo, Recipe…) avec relations entre entités et les valider.",
    "Gérer un SEO multilingue et international fiable (hreflang sans erreurs, sitemaps, stratégies d'URL).",
    "Optimiser les ressources critiques (images, scripts, polices, CDN) pour améliorer les Core Web Vitals.",
    "Mettre en œuvre des en-têtes HTTP et directives de sécurité (HSTS, CSP) favorables au référencement.",
  ],
};

export const chapters3 = [
  { id: "intro", title: "Introduction", icon: "Sparkles" },
  { id: "schema", title: "1. Données structurées avancées", icon: "Braces" },
  { id: "intl", title: "2. SEO international & hreflang", icon: "Globe" },
  { id: "perf", title: "3. Optimisation des ressources", icon: "Zap" },
  { id: "security", title: "4. Sécurité & en-têtes HTTP", icon: "ShieldCheck" },
  { id: "synthese", title: "Synthèse & TP", icon: "GraduationCap" },
];

export const slides3: Slide[] = [
  {
    id: "m3-s1",
    chapter: "intro",
    title: "Optimisation technique avancée",
    subtitle: "Données structurées · Hreflang · Performance · Sécurité",
    type: "intro",
    image: img1,
    content: {
      kicker: "MODULE 3",
      tagline: "Parler le langage des moteurs : balisage sémantique, internationalisation fiable et base technique robuste au service des Core Web Vitals.",
      pillars: ["SCHEMA.LD+JSON", "HREFLANG.MAP", "PERF.CWV", "SEC.HEADERS"],
    },
  },
  {
    id: "m3-s2",
    chapter: "intro",
    title: "Objectifs pédagogiques",
    type: "list",
    content: { items: moduleInfo3.objectifs, prerequis: moduleInfo3.prerequis },
  },
  {
    id: "m3-s3",
    chapter: "intro",
    title: "Pourquoi un SEO technique avancé ?",
    type: "content",
    image: img2,
    content: {
      lead: "Le SEO technique ne se limite pas à rendre un site rapide et crawable. À un niveau avancé, il s'agit de parler le langage des moteurs : données structurées pour désambiguïser le contenu, balises hreflang pour éviter la cannibalisation internationale, et réglages fins sur les ressources qui impactent l'expérience utilisateur.",
      callout: "Ce module vous donne les clés pour dépasser les implémentations basiques et construire une base technique robuste, évolutive et internationale.",
    },
  },
  {
    id: "m3-s4",
    chapter: "schema",
    title: "1.1 Rappel des formats et bonnes pratiques",
    type: "content",
    image: img5,
    
    content: {
      lead: "Le format recommandé par Google est JSON-LD (JavaScript Object Notation for Linked Data). Il se place dans <head> ou à la fin du <body>.",
      principle: "Pourquoi « avancé » ?",
      items: [
        "La simple copie d'un extrait JSON-LD générique n'est plus suffisante.",
        "Il faut comprendre les relations entre types (ex. Article lié à Person et Organization).",
        "Éviter les erreurs subtiles : propriétés obligatoires manquantes, types incompatibles, contenu non visible balisé.",
      ],
    },
  },
  {
    id: "m3-s5",
    chapter: "schema",
    title: "1.2 Types prioritaires en 2025 (hors FAQ)",
    type: "content",
    content: {
      lead: "Suite à la mise à jour de Google d'août 2023, FAQPage n'est plus éligible aux résultats enrichis pour la plupart des sites commerciaux. Seuls les sites gouvernementaux, sanitaires ou d'information publique peuvent encore en bénéficier.",
      warning: "FAQPage : à ne plus utiliser sauf cas très particulier (gouvernement, santé, information publique).",
    },
  },
  {
    id: "m3-s6",
    chapter: "schema",
    title: "Types Schema.org à implémenter en priorité",
    type: "table",
    image: img4,
    content: {
      headers: ["Type Schema.org", "Usage", "Propriétés clés obligatoires"],
      rows: [
        ["Article (BlogPosting, NewsArticle)", "Contenu éditorial", "headline, author, datePublished, publisher"],
        ["Product", "Fiches e-commerce", "name, offers (prix, dispo), aggregateRating si avis"],
        ["BreadcrumbList", "Fil d'Ariane", "itemListElement (position, nom, URL)"],
        ["LocalBusiness (Hotel, Restaurant)", "Activités locales", "address, telephone, openingHours"],
        ["HowTo", "Tutoriels, recettes", "step (name, text), totalTime"],
        ["VideoObject", "Contenus vidéo", "thumbnailUrl, uploadDate, duration"],
        ["Event", "Conférences, concerts, webinaires", "name, startDate, location"],
      ],
      tip: "Intégrer speakable pour les assistants vocaux : \"speakable\": { \"@type\": \"SpeakableSpecification\", \"cssSelector\": [\".chapo\", \".resume\"] }.",
    },
  },
  {
    id: "m3-s7",
    chapter: "schema",
    title: "1.3 Exemple avancé — Article + Person + Organization",
    subtitle: "JSON-LD enrichi",
    type: "content",
    image: img05,
    content: {
      lead: "Un Article moderne déclare son auteur (Person), son éditeur (Organization), son image, ses dates de publication et de modification, ainsi qu'un passage speakable pour les assistants vocaux.",
      code: `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Optimisation technique SEO : guide 2025",
  "description": "Core Web Vitals, JavaScript SEO, hreflang.",
  "image": "https://exemple.com/image-principale.jpg",
  "author": {
    "@type": "Person",
    "name": "Marie Lecoq",
    "url": "https://exemple.com/auteur/marie-lecoq",
    "sameAs": [
      "https://linkedin.com/in/marielecoq",
      "https://twitter.com/m_lecoq"
    ]
  },
  "publisher": {
    "@type": "Organization",
    "name": "Agence SEO Avancé",
    "logo": {
      "@type": "ImageObject",
      "url": "https://exemple.com/logo.png"
    }
  },
  "datePublished": "2025-06-01",
  "dateModified": "2025-06-10",
  "mainEntityOfPage": "https://exemple.com/guide-technique",
  "speakable": {
    "@type": "SpeakableSpecification",
    "cssSelector": [".introduction", ".conclusion"]
  }
}
</script>`,
    },
  },
  {
    id: "m3-s8",
    chapter: "schema",
    title: "1.4 Pièges fréquents & validation",
    type: "table",
    image: img6,
    content: {
      headers: ["Erreur", "Pourquoi c'est problématique", "Correction"],
      rows: [
        ["Utiliser FAQPage pour du contenu marketing", "Google l'ignore depuis 2023 (pas de rich snippet)", "Convertir en HowTo (si étapes) ou supprimer"],
        ["Oublier publisher dans Article", "Google ne peut pas identifier l'entité responsable", "Ajouter publisher (Organization ou Person)"],
        ["Baliser du contenu invisible", "Pénalité possible (contenu trompeur)", "Ne baliser que ce qui est réellement affiché"],
        ["Ne pas mettre à jour dateModified", "Les pages anciennes semblent obsolètes", "Automatiser la mise à jour via CMS ou script"],
      ],
      tip: "Validation : Rich Results Test (Google) + Schema Markup Validator (Schema.org). Vérifier aussi les rapports d'améliorations dans Google Search Console.",
    },
  },
  {
    id: "m3-s9",
    chapter: "intl",
    title: "2.1 Hreflang — syntaxe et valeurs",
    type: "content",
    image: img7,
    content: {
      lead: "La balise hreflang indique à Google la langue et éventuellement la région d'une page, ainsi que ses alternatives. Elle évite la cannibalisation entre versions linguistiques et améliore le ciblage géographique.",
      code: `<link rel="alternate" hreflang="fr"    href="https://exemple.com/fr/page" />
<link rel="alternate" hreflang="en-GB" href="https://exemple.com/en-gb/page" />
<link rel="alternate" hreflang="en-US" href="https://exemple.com/en-us/page" />
<link rel="alternate" hreflang="x-default" href="https://exemple.com/" />`,
      items: [
        "x-default : page par défaut quand aucune langue / région ne correspond (souvent l'accueil ou un sélecteur de langue).",
        "Codes : fr (langue), fr-FR (langue + région), en-US, de, es-ES…",
        "Toujours utiliser un tiret « - », jamais un underscore.",
      ],
    },
  },
  {
    id: "m3-s10",
    chapter: "intl",
    title: "2.2 Placement des balises — 3 méthodes",
    type: "table",
    image: img8,
    content: {
      headers: ["Méthode", "Avantages", "Inconvénients", "Recommandée pour"],
      rows: [
        ["Dans le <head> HTML", "Simple, direct", "Lourd pour les grands sites (10 000+ pages)", "Petit site (< 500 pages)"],
        ["Dans le sitemap XML", "Centralisé, idéal pour les sites volumineux", "Nécessite plusieurs sitemaps ou un index", "Site > 1 000 pages avec versions multiples"],
        ["Dans l'en-tête HTTP", "Pour fichiers non-HTML (PDF, images)", "Complexe, rarement utilisé", "Contenus téléchargeables"],
      ],
      tip: "Pour un grand site, le balisage dans le sitemap est la voie royale : centralisation, maintenance et déploiement automatisés.",
    },
  },
  {
    id: "m3-s11",
    chapter: "intl",
    title: "Exemple — hreflang dans un sitemap XML",
    type: "content",
    content: {
      lead: "Recommandé pour les grands sites multilingues : un seul fichier déclare toutes les alternatives.",
      code: `<url>
  <loc>https://exemple.com/fr/article-optimisation</loc>
  <xhtml:link rel="alternate" hreflang="fr"
              href="https://exemple.com/fr/article-optimisation"/>
  <xhtml:link rel="alternate" hreflang="en"
              href="https://exemple.com/en/optimization-article"/>
  <xhtml:link rel="alternate" hreflang="de"
              href="https://exemple.com/de/optimierungsartikel"/>
  <xhtml:link rel="alternate" hreflang="x-default"
              href="https://exemple.com/"/>
</url>`,
      rule: "Chaque URL listée doit déclarer toutes ses alternatives, y compris elle-même : c'est la règle de réciprocité.",
    },
  },
  {
    id: "m3-s12",
    chapter: "intl",
    title: "2.3 Erreurs critiques à éviter",
    type: "table",
    image: img9,
    content: {
      headers: ["Erreur", "Conséquence", "Correction"],
      rows: [
        ["Absence de réciprocité (A → B, mais B ne pointe pas vers A)", "Google ignore le balisage", "Vérification automatique (Screaming Frog, hreflang-check.com)"],
        ["Syntaxe erronée : fr_FR au lieu de fr-FR", "La balise n'est pas reconnue", "Utiliser des tirets, jamais d'underscore"],
        ["URLs relatives (href=\"/fr/page\")", "Google peut mal interpréter", "Toujours utiliser des URL absolues (https://…)"],
        ["Hreflang sans contenu réellement traduit", "Pénalité pour contenu trompeur", "Chaque alternative doit avoir une vraie traduction"],
        ["Oublier x-default", "Google peut servir une version inappropriée", "Ajouter x-default vers l'accueil ou un sélecteur de langue"],
      ],
    },
  },
  {
    id: "m3-s13",
    chapter: "intl",
    title: "2.4 Stratégies d'URL pour l'international",
    type: "table",
    image: img10,
    content: {
      headers: ["Structure", "Exemple", "Cas d'usage", "Avantage SEO"],
      rows: [
        ["Sous-répertoire", "exemple.com/fr/, exemple.com/de/", "Sites multilingues sur un seul domaine", "Consolidation de l'autorité du domaine"],
        ["Sous-domaine", "fr.exemple.com, de.exemple.com", "Versions hébergées séparément", "Bon, mais autorité légèrement diluée"],
        ["Domaine différent (ccTLD)", "exemple.fr, exemple.de", "Ciblage pays fort (TLD national)", "Meilleur marquage géographique, mais coût/maintenance lourds"],
      ],
      tip: "Utilisez Google Search Console > International Targeting pour vérifier que Google détecte correctement vos balises hreflang et signaler les erreurs.",
    },
  },
  {
    id: "m3-s14",
    chapter: "perf",
    title: "3.1 Images — au-delà des formats modernes",
    type: "content",
    image: img11,
    content: {
      lead: "Les formats WebP et AVIF sont désormais obligatoires. Mais l'optimisation avancée va beaucoup plus loin pour gagner sur le LCP et le CLS.",
      items: [
        "Responsive avec srcset : servir des tailles différentes selon l'écran et des formats selon le support (image/avif dans type).",
        "Lazy loading stratégique : jamais sur l'image LCP, sur toutes les autres.",
        "Chargement asynchrone des images hors viewport via loading=\"lazy\" (HTML natif).",
        "Précharger les images critiques : <link rel=\"preload\" as=\"image\" href=\"image-lcp.jpg\">.",
      ],
      code: `<picture>
  <source srcset="image.avif" type="image/avif">
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="description"
       loading="lazy" width="800" height="600">
</picture>`,
    },
  },
  {
    id: "m3-s15",
    chapter: "perf",
    title: "3.2 Scripts, polices & CSS — limiter l'impact",
    type: "table",
    image: img12,
    content: {
      headers: ["Type de ressource", "Problème", "Solution avancée"],
      rows: [
        ["JavaScript tiers (pixels, chatbots, analytics)", "Dégradation de l'INP, blocage du rendu", "Charger en async ou defer ; sandboxer avec Partytown"],
        ["Polices web (Google Fonts, Adobe)", "FOIT / FOUT, CLS", "font-display: optional (pas de swap) ou héberger localement avec preload"],
        ["CSS non critique", "Retard du LCP", "Inline le CSS critique (above-the-fold), différer le reste (rel=\"preload\" as=\"style\" puis onload)"],
      ],
      tip: "Astuce polices : font-display: optional n'utilise la police que si elle est déjà en cache — sinon le navigateur garde la police système et évite tout décalage de mise en page.",
    },
  },
  {
    id: "m3-s16",
    chapter: "perf",
    title: "3.3 CDN, HTTP/2 et HTTP/3",
    type: "content",
    content: {
      groups: [
        { name: "CDN", items: ["Indispensable pour réduire la latence (serveurs proches des utilisateurs).", "Privilégier un CDN supportant preconnect et server push."] },
        { name: "HTTP/2", items: ["Multiplexage des requêtes sur une seule connexion.", "Server push à utiliser avec précaution — souvent moins efficace que preload."] },
        { name: "HTTP/3 (QUIC)", items: ["Plus rapide en cas de perte de paquets, mobile et réseaux dégradés.", "Vérifier que votre hébergement et votre CDN le supportent."] },
      ],
      rule: "Mesurez l'impact réel via PageSpeed Insights (données CrUX) et WebPageTest avant/après chaque déploiement.",
    },
  },
  {
    id: "m3-s17",
    chapter: "security",
    title: "4.1 HSTS — HTTP Strict Transport Security",
    type: "content",
    image: img14,
    content: {
      lead: "HSTS force la navigation en HTTPS pour tous les visiteurs. Google utilise ce signal comme indicateur de confiance et peut améliorer (légèrement) le classement des sites qui l'implémentent.",
      code: `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`,
      items: [
        "max-age=63072000 : 2 ans, recommandé pour bénéficier de la liste preload.",
        "includeSubDomains : protège également tous les sous-domaines.",
        "preload : permet d'être inscrit dans le préchargement HSTS des navigateurs (Chrome, Firefox, Safari).",
      ],
    },
  },
  {
    id: "m3-s18",
    chapter: "security",
    title: "4.2 CSP — Content Security Policy",
    type: "content",
    image: img15,
    content: {
      lead: "Bien que non direct pour le SEO, un CSP bien configuré empêche l'injection de scripts malveillants qui dégraderaient l'expérience (pop-ups, redirections). Impact indirect mais réel sur la confiance et l'EEAT.",
      code: `Content-Security-Policy: default-src 'self';
                         script-src 'self' cdn.example.com;
                         object-src 'none'`,
      callout: "Un site compromis subit souvent des chutes brutales de trafic SEO. La CSP est une assurance technique de continuité.",
    },
  },
  {
    id: "m3-s19",
    chapter: "security",
    title: "4.3 Autres en-têtes utiles",
    type: "table",
    image: img16,
    content: {
      headers: ["En-tête", "Rôle pour le SEO"],
      rows: [
        ["X-Robots-Tag", "Indique noindex / nofollow pour des fichiers non-HTML (PDF, images, vidéos)"],
        ["Referrer-Policy", "Contrôle les informations de provenance — peut affecter l'analyse du trafic"],
        ["Cache-Control", "Optimise le caching navigateur / CDN et donc les Core Web Vitals"],
      ],
      tip: "X-Robots-Tag est la seule façon propre de désindexer un PDF : impossible d'y insérer une balise meta robots dans le <head>.",
    },
  },
  {
    id: "m3-s20",
    chapter: "synthese",
    title: "Mini résumé du Module 3",
    type: "table",
    image: img19,
    content: {
      headers: ["Thème", "Points clés"],
      rows: [
        ["Données structurées", "Éviter FAQPage (obsolète). Prioriser Article, Product, BreadcrumbList, HowTo. Vérifier réciprocité et propriétés obligatoires."],
        ["Hreflang", "Syntaxe fr-FR (tiret). Réciprocité obligatoire. x-default recommandé. Placer dans le sitemap pour les grands sites."],
        ["Optimisation ressources", "Images : WebP/AVIF + srcset + lazy (hors LCP). Polices : font-display: optional. Scripts tiers : async/defer ou Partytown."],
        ["Sécurité", "HSTS (+ preload) renforce la confiance. CSP évite les dégradations. X-Robots-Tag pour les fichiers non-HTML."],
      ],
    },
  },
  {
    id: "m3-s21",
    chapter: "synthese",
    title: "TP — travel-expert.com",
    type: "exercise",
    content: {
      contexte: "Vous êtes responsable SEO du site travel-expert.com, guide de voyage multilingue (français, anglais, allemand) avec plus de 5 000 pages (recettes locales, articles, fiches destinations).",
      taches: [
        {
          n: 1,
          titre: "Données structurées",
          items: [
            "Écrire un bloc JSON-LD pour une recette (type Recipe) — ex. « Tarte flambée alsacienne ».",
            "Inclure name, image, author, recipeIngredient, recipeInstructions (liste), totalTime.",
            "Ajouter isAccessibleForFree (true/false) pour respecter les bonnes pratiques.",
          ],
        },
        {
          n: 2,
          titre: "Hreflang",
          items: [
            "Pages : /fr/recette-tarte-flambee, /en/flammekueche-recipe, /de/flammkuchen-rezept. x-default = version FR.",
            "Rédiger le bloc HTML à placer dans le <head> de la page française.",
            "Choisir la méthode (sitemap vs HTML) pour 5 000+ pages et justifier.",
          ],
        },
        {
          n: 3,
          titre: "Optimisation des ressources",
          items: [
            "Rédiger le HTML d'une image LCP avec srcset (600w, 1200w) et formats AVIF / WebP / JPEG.",
            "Recommander une stratégie de lazy loading pour les images secondaires (code).",
          ],
        },
        {
          n: 4,
          titre: "Sécurité",
          items: [
            "Rédiger l'en-tête HSTS (preload + includeSubDomains) pour Apache ou Nginx.",
            "Expliquer pourquoi cette en-tête améliore la confiance (EEAT).",
          ],
        },
        {
          n: 5,
          titre: "Validation",
          items: [
            "Décrire un test Rich Results Test sur l'extrait JSON-LD (même fictif).",
            "Citer deux erreurs fréquentes en données structurées détectables avec l'outil.",
          ],
        },
      ],
      livrable: "Document structuré avec extraits de code, explications et checklist de validation (1 à 2 pages).",
    },
  },
];

export const quiz3 = [
  {
    q: "Quel format Google recommande-t-il pour les données structurées ?",
    options: ["Microdata", "RDFa", "JSON-LD", "Microformats"],
    answer: 2,
    explain: "JSON-LD est le format officiellement recommandé : il s'intègre dans <head> ou <body> sans modifier le DOM visible.",
  },
  {
    q: "Depuis 2023, quel Schema est devenu pratiquement inéligible aux résultats enrichis pour les sites commerciaux ?",
    options: ["Article", "Product", "FAQPage", "HowTo"],
    answer: 2,
    explain: "FAQPage n'apparaît plus que pour les sites gouvernementaux, sanitaires ou d'information publique.",
  },
  {
    q: "Quelle propriété est obligatoire dans un Schema Article ?",
    options: ["price", "publisher", "duration", "address"],
    answer: 1,
    explain: "publisher (Organization ou Person) est obligatoire pour identifier l'entité responsable du contenu.",
  },
  {
    q: "Quelle est la syntaxe correcte pour cibler le Royaume-Uni en hreflang ?",
    options: ["en_GB", "en-GB", "uk-en", "GB-en"],
    answer: 1,
    explain: "Format ISO : langue minuscule + tiret + région majuscule. Jamais d'underscore.",
  },
  {
    q: "Pour un site multilingue de plus de 5 000 pages, où placer les hreflang ?",
    options: ["Dans le <head> HTML de chaque page", "Dans un sitemap XML", "Dans le fichier robots.txt", "Dans le manifest.json"],
    answer: 1,
    explain: "Le sitemap XML centralise les alternatives, simplifie la maintenance et évite d'alourdir le HTML.",
  },
  {
    q: "Que représente x-default dans une déclaration hreflang ?",
    options: [
      "La langue maternelle du site",
      "La page servie quand aucune langue/région ne correspond",
      "Un alias pour l'anglais",
      "Le fallback du sitemap",
    ],
    answer: 1,
    explain: "x-default désigne la page par défaut (souvent l'accueil ou un sélecteur de langue).",
  },
  {
    q: "Sur quelle image faut-il ÉVITER le lazy loading ?",
    options: ["Toutes les images du footer", "Les miniatures de blog", "L'image LCP de la page", "Les images dans <picture>"],
    answer: 2,
    explain: "Lazy-loader l'image LCP dégrade fortement le Largest Contentful Paint. À précharger plutôt avec <link rel=\"preload\">.",
  },
  {
    q: "Quelle valeur de font-display évite le mieux le CLS ?",
    options: ["swap", "block", "optional", "fallback"],
    answer: 2,
    explain: "font-display: optional n'utilise la police que si elle est déjà en cache, supprimant les décalages de mise en page.",
  },
  {
    q: "Quel en-tête force la navigation en HTTPS et est utilisé par Google comme signal de confiance ?",
    options: ["CSP", "HSTS", "X-Frame-Options", "Referrer-Policy"],
    answer: 1,
    explain: "Strict-Transport-Security (HSTS) force HTTPS, surtout combiné avec preload et includeSubDomains.",
  },
  {
    q: "Comment désindexer proprement un PDF dans Google ?",
    options: [
      "Ajouter une meta robots dans le <head> du PDF",
      "Utiliser l'en-tête HTTP X-Robots-Tag",
      "Bloquer dans robots.txt uniquement",
      "Renommer le fichier",
    ],
    answer: 1,
    explain: "Un PDF n'a pas de <head> HTML : l'en-tête HTTP X-Robots-Tag est la seule méthode propre pour le désindexer.",
  },
];

export const flashcards3 = [
  { front: "JSON-LD", back: "Format recommandé par Google pour les données structurées, placé dans <script type=\"application/ld+json\">." },
  { front: "Schema Article", back: "Type éditorial : headline, author, datePublished, publisher (obligatoire), image, dateModified." },
  { front: "FAQPage (2023+)", back: "Quasi-désactivé pour les rich results sauf sites gouvernementaux, santé ou information publique." },
  { front: "speakable", back: "Propriété Schema indiquant les passages à lire à voix haute par les assistants vocaux." },
  { front: "hreflang", back: "Indique langue (fr) et région (fr-FR) d'une page et ses alternatives. Tirets, URLs absolues, réciprocité obligatoire." },
  { front: "x-default", back: "Valeur hreflang servie quand aucune langue/région ne correspond. Souvent l'accueil ou un sélecteur." },
  { front: "srcset", back: "Attribut HTML qui sert des tailles d'images différentes selon l'écran. Combiné à <picture> pour AVIF/WebP/JPEG." },
  { front: "font-display: optional", back: "Utilise la police custom seulement si déjà en cache, sinon police système — évite FOIT / CLS." },
  { front: "Partytown", back: "Bibliothèque qui exécute les scripts tiers dans un Web Worker pour ne plus bloquer le thread principal (INP)." },
  { front: "HSTS preload", back: "Strict-Transport-Security: max-age=63072000; includeSubDomains; preload — force HTTPS et inscrit le domaine dans la liste navigateurs." },
  { front: "CSP", back: "Content-Security-Policy : limite les origines autorisées (scripts, styles, médias) pour bloquer XSS et injections." },
  { front: "X-Robots-Tag", back: "En-tête HTTP permettant noindex/nofollow sur des fichiers non-HTML (PDF, images, vidéos)." },
];

export const glossary3 = [
  { term: "JSON-LD", def: "JavaScript Object Notation for Linked Data — format recommandé par Google pour Schema.org." },
  { term: "Schema.org", def: "Vocabulaire collaboratif (Google, Microsoft, Yahoo) de types pour structurer les données du web." },
  { term: "Rich Results Test", def: "Outil Google qui valide les données structurées et prévisualise les résultats enrichis." },
  { term: "speakable", def: "Propriété Schema désignant les passages d'une page lisibles par les assistants vocaux." },
  { term: "hreflang", def: "Attribut indiquant la langue et la région d'une page et de ses alternatives." },
  { term: "x-default", def: "Valeur hreflang utilisée comme page par défaut hors langues/régions ciblées." },
  { term: "ccTLD", def: "Country Code Top-Level Domain (.fr, .de, .jp) — fort signal de ciblage géographique." },
  { term: "Core Web Vitals", def: "LCP, INP et CLS — indicateurs de performance et de qualité d'expérience utilisés par Google." },
  { term: "LCP", def: "Largest Contentful Paint — temps d'affichage du plus grand élément visible. Cible < 2,5 s." },
  { term: "INP", def: "Interaction to Next Paint — réactivité globale d'une page aux interactions. Cible < 200 ms." },
  { term: "AVIF / WebP", def: "Formats d'image modernes, ratios de compression supérieurs à JPEG/PNG, supportés par tous les navigateurs majeurs." },
  { term: "srcset", def: "Attribut HTML servant des images de résolutions différentes selon l'écran / le device pixel ratio." },
  { term: "font-display: optional", def: "Valeur CSS qui n'utilise une web font que si déjà en cache, supprimant FOIT et CLS de polices." },
  { term: "Partytown", def: "Bibliothèque déportant l'exécution des scripts tiers dans un Web Worker." },
  { term: "CDN", def: "Content Delivery Network — réseau de serveurs distribués géographiquement pour servir les ressources au plus près de l'utilisateur." },
  { term: "HTTP/3", def: "Évolution d'HTTP/2 basée sur QUIC : plus rapide en cas de pertes de paquets, idéal mobile." },
  { term: "HSTS", def: "HTTP Strict Transport Security — en-tête qui force HTTPS et peut être préchargé dans les navigateurs." },
  { term: "CSP", def: "Content Security Policy — politique de sécurité limitant les origines autorisées (scripts, styles, médias)." },
  { term: "X-Robots-Tag", def: "En-tête HTTP appliquant noindex / nofollow à des fichiers non-HTML (PDF, images, vidéos)." },
];
