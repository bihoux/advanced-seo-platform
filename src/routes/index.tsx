import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Brain, Gauge, Layers, Network, Sparkles, Zap } from "lucide-react";
import logoEni from "@/assets/logo-eni.webp";
import logoCapri from "@/assets/logo-capriai.webp";
import formateur from "@/assets/formateur.webp";
import { chapters, moduleInfo } from "@/data/module1";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Accueil — SEO Avancé 2026 · ENI · CapriAI Bi'hOux" },
      { name: "description", content: "Plateforme pédagogique premium de l'ENI sur la rédaction et l'optimisation SEO avancée 2026. Cours interactif, slides, quiz, flashcards." },
      { property: "og:title", content: "Rédaction & Optimisation SEO Avancée — ENI" },
      { property: "og:description", content: "Cours universitaire interactif sur le SEO technique 2026." },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Course",
        name: "Rédaction et Optimisation SEO Avancée",
        description: "Module 1 — Architecture technique avancée et signaux utilisateur",
        provider: { "@type": "CollegeOrUniversity", name: "École Nationale d'Informatique — Université de Fianarantsoa" },
        instructor: { "@type": "Person", name: "RANDRIATSARAFARA Miandrisoa Hoby" },
      }),
    }],
  }),
  component: Home,
});

const ICONS: any = { Sparkles, Bot: Brain, Gauge, Network, Code2: Layers, Leaf: Zap, GraduationCap: BookOpen };

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ModuleOverview />
      <Trainer />
      <CTA />
    </>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-0 right-10 w-[500px] h-[500px] bg-accent/15 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />

      <div className="relative mx-auto max-w-7xl px-4 pt-20 pb-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-xs uppercase tracking-widest mb-6"
          >
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            <span className="text-muted-foreground">Plateforme pédagogique intelligente</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold leading-[1.05] tracking-tight"
          >
            Rédaction &<br />
            <span className="text-gradient-primary">Optimisation SEO</span><br />
            <span className="text-gradient">Avancée 2026</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            Un cours universitaire immersif sur l'architecture technique, les Core Web Vitals, le cocon sémantique 2.0, le JavaScript SEO et la sobriété numérique.
            <span className="block mt-2">
              Powered by <span className="text-gradient font-semibold">CapriAI Bi'hOux</span> — assistant pédagogique IA.
            </span>
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link to="/cours" className="group inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent px-6 py-3 rounded-xl font-semibold text-primary-foreground glow-primary hover:scale-[1.03] transition">
              Commencer le cours
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
            </Link>
            <Link to="/modules" className="inline-flex items-center gap-2 glass px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition">
              Explorer les modules
            </Link>
          </motion.div>

          <div className="mt-10 flex items-center gap-4 text-sm text-muted-foreground">
            <img src={logoEni} alt="ENI" className="h-12 w-12 rounded-full ring-2 ring-primary/40" />
            <div>
              <div className="font-semibold text-foreground">École Nationale d'Informatique</div>
              <div>Université de Fianarantsoa · Madagascar</div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 blur-3xl" />
          <div className="relative glass-strong rounded-3xl p-6 ring-cyber">
            <img src={formateur} alt="Formateur" className="rounded-2xl w-full" />
            <div className="mt-4 flex items-center justify-between">
              <div>
                <div className="text-xs text-accent uppercase tracking-widest">Formateur</div>
                <div className="font-display font-bold">Mr RANDRIATSARAFARA M. Hoby</div>
                <div className="text-xs text-muted-foreground">Spécialiste SEO & IA · ENI</div>
              </div>
              <img src={logoCapri} alt="CapriAI" className="h-12 w-20 rounded-md object-cover" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { v: "5", l: "Piliers techniques" },
    { v: "22", l: "Slides interactifs" },
    { v: "6", l: "Quiz Q/R" },
    { v: "10+", l: "Flashcards" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-4 -mt-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.l} className="glass-strong rounded-2xl p-5 text-center">
            <div className="text-3xl md:text-4xl font-display font-bold text-gradient-primary">{s.v}</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ModuleOverview() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="text-xs text-accent uppercase tracking-widest mb-3">{moduleInfo.code}</div>
        <h2 className="text-4xl md:text-5xl font-display font-bold">
          <span className="text-gradient-primary">{moduleInfo.title}</span>
        </h2>
        <p className="mt-4 text-muted-foreground">{moduleInfo.level} · {moduleInfo.duration}</p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {chapters.map((c, i) => {
          const Icon = ICONS[c.icon] ?? Sparkles;
          return (
            <motion.div
              key={c.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="glass-strong rounded-2xl p-6 hover:ring-cyber transition group cursor-pointer"
            >
              <Link to="/cours" className="block">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition">
                  <Icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <h3 className="font-display font-bold text-lg mb-2">{c.title}</h3>
                <div className="text-xs text-muted-foreground flex items-center gap-1 group-hover:text-primary transition">
                  Voir <ArrowRight className="h-3 w-3" />
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

function Trainer() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <div className="glass-strong rounded-3xl p-8 md:p-12 grid md:grid-cols-3 gap-10 items-center relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/15 rounded-full blur-3xl" />
        <div className="relative">
          <img src={formateur} alt="Mr RANDRIATSARAFARA Miandrisoa Hoby" className="rounded-2xl w-full ring-1 ring-border" />
        </div>
        <div className="md:col-span-2 relative">
          <div className="text-xs text-accent uppercase tracking-widest mb-2">À propos du formateur</div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">Mr RANDRIATSARAFARA Miandrisoa Hoby</h2>
          <p className="text-muted-foreground mb-5">
            Chercheur en informatique, enseignant à l'École Nationale d'Informatique, spécialiste en SEO avancé, intelligence artificielle et technologies web. Co-créateur de la plateforme pédagogique <span className="text-gradient font-semibold">CapriAI Bi'hOux</span>.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Chercheur", "Enseignant ENI", "SEO Avancé", "IA & NLP", "Architecture Web", "Pédagogie numérique"].map(b => (
              <span key={b} className="px-3 py-1.5 glass rounded-full text-xs">{b}</span>
            ))}
          </div>
          <Link to="/formateur" className="mt-6 inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
            Voir le profil complet <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-20 text-center">
      <h2 className="text-4xl md:text-5xl font-display font-bold">
        Prêt à <span className="text-gradient-primary">dominer</span> le SEO 2026 ?
      </h2>
      <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
        Plongez dans 22 slides interactifs, des quiz pédagogiques, des flashcards et un glossaire complet — pensés pour l'enseignement universitaire.
      </p>
      <Link to="/cours" className="mt-8 inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent px-8 py-4 rounded-xl font-semibold text-primary-foreground glow-primary hover:scale-[1.03] transition">
        Démarrer le Module 1 <ArrowRight className="h-4 w-4" />
      </Link>
    </section>
  );
}
