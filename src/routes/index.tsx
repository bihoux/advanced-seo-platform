import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Brain, Gauge, Layers, Network, Sparkles, Zap, Target, ShieldCheck } from "lucide-react";
import logoEni from "@/assets/logo-eni.webp";
import logoCapri from "@/assets/logo-capriai.webp";
import { modulesRegistry } from "@/data/modules";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Accueil — SEO Avancé 2026 · ENI" },
      { name: "description", content: "Plateforme pédagogique premium de l'ENI sur la rédaction et l'optimisation SEO avancée 2026. Modules interactifs, slides, quiz, flashcards et glossaire." },
      { property: "og:title", content: "Rédaction & Optimisation SEO Avancée — ENI" },
      { property: "og:description", content: "Cours universitaire interactif sur le SEO technique, sémantique, EEAT et IA générative 2026." },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Course",
        name: "Rédaction et Optimisation SEO Avancée",
        description: "Cours universitaire en SEO technique, sémantique, EEAT et IA générative.",
        provider: { "@type": "CollegeOrUniversity", name: "École Nationale d'Informatique — Université de Fianarantsoa" },
      }),
    }],
  }),
  component: Home,
});

const ICONS: any = { Sparkles, Bot: Brain, Gauge, Network, Code2: Layers, Leaf: Zap, GraduationCap: BookOpen, Target, ShieldCheck, FileText: BookOpen };

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <ModulesShowcase />
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
            Une plateforme universitaire immersive : architecture technique, Core Web Vitals, cocon sémantique 2.0, EEAT, Passage Indexing et IA générative hybride.
            <span className="block mt-2">
              Powered by <span className="text-gradient font-semibold">MHR</span> — assistant pédagogique IA.
            </span>
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link to="/cours" className="group inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent px-6 py-3 rounded-xl font-semibold text-primary-foreground glow-primary hover:scale-[1.03] transition">
              Commencer un cours
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
          <div className="relative glass-strong rounded-3xl p-8 ring-cyber space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-accent uppercase tracking-widest">Programme</div>
                <div className="font-display font-bold text-xl">Curriculum SEO 2026</div>
              </div>
              <img src={logoCapri} alt="CapriAI" className="h-12 w-20 rounded-md object-cover" />
            </div>
            <div className="space-y-3">
              {modulesRegistry.map((m) => (
                <Link
                  key={m.slug}
                  to="/cours/$moduleId"
                  params={{ moduleId: m.slug }}
                  className="block glass p-4 rounded-2xl hover:bg-white/10 transition group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <div className="text-[11px] text-primary font-semibold uppercase tracking-widest">{m.info.code}</div>
                      <div className="font-display font-bold text-sm truncate">{m.info.title}</div>
                      <div className="text-xs text-muted-foreground mt-0.5">{m.slides.length} slides · {m.quiz.length} quiz</div>
                    </div>
                    <ArrowRight className="h-4 w-4 text-accent group-hover:translate-x-1 transition shrink-0" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stats() {
  const totalSlides = modulesRegistry.reduce((s, m) => s + m.slides.length, 0);
  const totalQuiz = modulesRegistry.reduce((s, m) => s + m.quiz.length, 0);
  const totalFlash = modulesRegistry.reduce((s, m) => s + m.flashcards.length, 0);
  const stats = [
    { v: `${modulesRegistry.length}`, l: "Modules disponibles" },
    { v: `${totalSlides}`, l: "Slides interactifs" },
    { v: `${totalQuiz}`, l: "Questions de quiz" },
    { v: `${totalFlash}+`, l: "Flashcards" },
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

function ModulesShowcase() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-24">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="text-xs text-accent uppercase tracking-widest mb-3">Programme</div>
        <h2 className="text-4xl md:text-5xl font-display font-bold">
          <span className="text-gradient-primary">Modules pédagogiques</span>
        </h2>
        <p className="mt-4 text-muted-foreground">Plongez dans chaque module : slides immersifs, exercices et synthèse interactive.</p>
      </div>

      <div className="space-y-12">
        {modulesRegistry.map((m, mi) => (
          <div key={m.slug}>
            <div className="flex items-end justify-between mb-5 flex-wrap gap-3">
              <div>
                <div className="text-xs text-primary font-semibold uppercase tracking-widest">{m.info.code}</div>
                <h3 className="text-2xl md:text-3xl font-display font-bold">{m.info.title}</h3>
              </div>
              <Link to="/cours/$moduleId" params={{ moduleId: m.slug }} className="text-sm text-accent inline-flex items-center gap-1 hover:gap-2 transition-all">
                Démarrer le module <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {m.chapters.map((c, i) => {
                const Icon = ICONS[c.icon] ?? Sparkles;
                return (
                  <motion.div
                    key={c.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.04 }}
                    className="glass-strong rounded-2xl p-6 hover:ring-cyber transition group"
                  >
                    <Link to="/cours/$moduleId" params={{ moduleId: m.slug }} className="block">
                      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <h4 className="font-display font-bold text-lg mb-2">{c.title}</h4>
                      <div className="text-xs text-muted-foreground flex items-center gap-1 group-hover:text-primary transition">
                        Ouvrir <ArrowRight className="h-3 w-3" />
                      </div>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
            {mi < modulesRegistry.length - 1 && <div className="mt-12 border-t border-border/30" />}
          </div>
        ))}
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
        Plongez dans des slides interactifs, des quiz pédagogiques, des flashcards et un glossaire complet — pensés pour l'enseignement universitaire.
      </p>
      <Link to="/cours" className="mt-8 inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent px-8 py-4 rounded-xl font-semibold text-primary-foreground glow-primary hover:scale-[1.03] transition">
        Démarrer un module <ArrowRight className="h-4 w-4" />
      </Link>
    </section>
  );
}
