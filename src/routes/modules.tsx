import { createFileRoute, Link } from "@tanstack/react-router";
import { chapters, slides, moduleInfo } from "@/data/module1";
import { ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/modules")({
  head: () => ({
    meta: [
      { title: "Modules — SEO Avancé · ENI" },
      { name: "description", content: "Liste complète des modules du cours SEO avancé 2026 avec objectifs et chapitres." },
      { property: "og:title", content: "Modules — SEO Avancé 2026" },
      { property: "og:description", content: "Programme universitaire du cours SEO avancé de l'ENI." },
    ],
  }),
  component: Modules,
});

function Modules() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="text-xs text-accent uppercase tracking-widest mb-2">Programme</div>
      <h1 className="text-3xl md:text-5xl font-display font-bold mb-3">{moduleInfo.course}</h1>
      <p className="text-muted-foreground mb-10">Curriculum universitaire — ENI · Université de Fianarantsoa</p>

      <div className="glass-strong rounded-3xl p-8 mb-8 relative overflow-hidden">
        <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/15 rounded-full blur-3xl" />
        <div className="relative">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <div className="text-xs text-primary font-semibold uppercase tracking-widest mb-1">{moduleInfo.code} · Disponible</div>
              <h2 className="text-2xl md:text-3xl font-display font-bold">{moduleInfo.title}</h2>
            </div>
            <BookOpen className="h-8 w-8 text-accent shrink-0" />
          </div>
          <p className="text-sm text-muted-foreground mb-5">{moduleInfo.level} · {moduleInfo.duration} · {slides.length} slides</p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <div className="text-xs uppercase tracking-wider text-accent font-semibold mb-2">Objectifs pédagogiques</div>
              <ul className="space-y-2 text-sm">
                {moduleInfo.objectifs.map((o, i) => (
                  <li key={i} className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-eni-green shrink-0 mt-0.5" />{o}</li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-accent font-semibold mb-2">Chapitres</div>
              <ul className="space-y-2 text-sm">
                {chapters.map(c => (
                  <li key={c.id} className="glass px-3 py-2 rounded-lg">{c.title}</li>
                ))}
              </ul>
            </div>
          </div>

          <Link to="/cours" className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent px-5 py-2.5 rounded-xl font-semibold text-primary-foreground glow-primary">
            Démarrer le module <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4 opacity-60">
        {[
          { c: "Module 2", t: "Stratégie de contenu & rédaction E-E-A-T", s: "Bientôt" },
          { c: "Module 3", t: "SEO sémantique & entités (NLP)", s: "Bientôt" },
          { c: "Module 4", t: "Netlinking avancé & autorité", s: "Bientôt" },
        ].map(m => (
          <div key={m.c} className="glass rounded-2xl p-6">
            <div className="text-xs text-muted-foreground uppercase tracking-widest mb-1">{m.c} · {m.s}</div>
            <h3 className="font-display font-bold text-lg">{m.t}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
