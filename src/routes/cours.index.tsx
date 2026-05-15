import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Lock } from "lucide-react";
import { modulesRegistry, upcomingModules } from "@/data/modules";

export const Route = createFileRoute("/cours/")({
  head: () => ({
    meta: [
      { title: "Cours interactifs — SEO Avancé · ENI" },
      { name: "description", content: "Sélectionnez un module du cours universitaire SEO Avancé 2026 : architecture technique, stratégie de contenu, EEAT, IA générative." },
      { property: "og:title", content: "Cours interactifs — SEO Avancé 2026" },
      { property: "og:description", content: "Modules pédagogiques immersifs avec slides, quiz et flashcards." },
    ],
  }),
  component: CoursIndex,
});

function CoursIndex() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="text-xs text-accent uppercase tracking-widest mb-2">Catalogue</div>
      <h1 className="text-3xl md:text-5xl font-display font-bold mb-3">Cours interactifs disponibles</h1>
      <p className="text-muted-foreground mb-10">Choisissez un module pour démarrer la présentation slide par slide.</p>

      <div className="grid md:grid-cols-2 gap-5 mb-10">
        {modulesRegistry.map((m) => (
          <Link
            key={m.slug}
            to="/cours/$moduleId"
            params={{ moduleId: m.slug }}
            className="group glass-strong rounded-3xl p-7 ring-cyber transition hover:scale-[1.01] relative overflow-hidden"
          >
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/15 rounded-full blur-3xl group-hover:bg-primary/25 transition" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-xs text-primary font-semibold uppercase tracking-widest">{m.info.code} · Disponible</span>
              </div>
              <h2 className="font-display font-bold text-xl mb-2">{m.info.title}</h2>
              <p className="text-sm text-muted-foreground mb-5">{m.info.duration} · {m.slides.length} slides · {m.quiz.length} questions</p>
              <span className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                Démarrer le module <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-4 opacity-60">
        {upcomingModules.map((m) => (
          <div key={m.code} className="glass rounded-2xl p-5">
            <div className="flex items-center gap-2 text-xs text-muted-foreground uppercase tracking-widest mb-2">
              <Lock className="h-3 w-3" /> {m.code} · Bientôt
            </div>
            <h3 className="font-display font-bold text-base">{m.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
