import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, CheckCircle2, Lock } from "lucide-react";
import { modulesRegistry, upcomingModules } from "@/data/modules";

export const Route = createFileRoute("/modules")({
  head: () => ({
    meta: [
      { title: "Modules — SEO Avancé · ENI" },
      { name: "description", content: "Programme universitaire complet : architecture technique, stratégie de contenu avancée, EEAT, IA générative — cours SEO Avancé 2026 de l'ENI." },
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
      <h1 className="text-3xl md:text-5xl font-display font-bold mb-3">Rédaction & Optimisation SEO Avancée</h1>
      <p className="text-muted-foreground mb-10">Curriculum universitaire — ENI · Université de Fianarantsoa</p>

      <div className="space-y-6 mb-10">
        {modulesRegistry.map((m) => (
          <div key={m.slug} className="glass-strong rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/15 rounded-full blur-3xl" />
            <div className="relative">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <div className="text-xs text-primary font-semibold uppercase tracking-widest mb-1">{m.info.code} · Disponible</div>
                  <h2 className="text-2xl md:text-3xl font-display font-bold">{m.info.title}</h2>
                </div>
                <BookOpen className="h-8 w-8 text-accent shrink-0" />
              </div>
              <p className="text-sm text-muted-foreground mb-5">{m.info.level} · {m.info.duration} · {m.slides.length} slides · {m.quiz.length} questions</p>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <div className="text-xs uppercase tracking-wider text-accent font-semibold mb-2">Objectifs pédagogiques</div>
                  <ul className="space-y-2 text-sm">
                    {m.info.objectifs.map((o, i) => (
                      <li key={i} className="flex gap-2"><CheckCircle2 className="h-4 w-4 text-eni-green shrink-0 mt-0.5" />{o}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-accent font-semibold mb-2">Chapitres</div>
                  <ul className="space-y-2 text-sm">
                    {m.chapters.map(c => (
                      <li key={c.id} className="glass px-3 py-2 rounded-lg">{c.title}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <Link to="/cours/$moduleId" params={{ moduleId: m.slug }} className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-accent px-5 py-2.5 rounded-xl font-semibold text-primary-foreground glow-primary">
                Démarrer le module <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>

      <h3 className="text-xs uppercase tracking-widest text-muted-foreground mb-3">À venir</h3>
      <div className="grid md:grid-cols-3 gap-4 opacity-60">
        {upcomingModules.map(m => (
          <div key={m.code} className="glass rounded-2xl p-5">
            <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-widest mb-2">
              <Lock className="h-3 w-3" /> {m.code} · Bientôt
            </div>
            <h4 className="font-display font-bold text-base">{m.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}
