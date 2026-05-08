import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Maximize2, Minimize2, List, X } from "lucide-react";
import { slides, chapters } from "@/data/module1";
import { SlideRenderer } from "@/components/SlideRenderer";

export const Route = createFileRoute("/cours")({
  head: () => ({
    meta: [
      { title: "Cours interactif — SEO Avancé · ENI" },
      { name: "description", content: "Module 1 du cours SEO Avancé 2026 : 22 slides interactifs sur l'architecture technique, Core Web Vitals, cocon sémantique, JavaScript SEO et green SEO." },
      { property: "og:title", content: "Cours interactif — Module 1" },
      { property: "og:description", content: "Slides pédagogiques immersifs sur le SEO technique avancé." },
    ],
  }),
  component: Cours,
});

function Cours() {
  const [i, setI] = useState(0);
  const [full, setFull] = useState(false);
  const [navOpen, setNavOpen] = useState(true);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key === " ") setI((v) => Math.min(slides.length - 1, v + 1));
      if (e.key === "ArrowLeft") setI((v) => Math.max(0, v - 1));
      if (e.key === "Escape" && full) setFull(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [full]);

  const slide = slides[i];
  const progress = ((i + 1) / slides.length) * 100;

  return (
    <div className="mx-auto max-w-7xl px-4 py-8">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <div className="text-xs text-accent uppercase tracking-widest">Module 1</div>
          <h1 className="text-2xl md:text-3xl font-display font-bold">Architecture technique avancée</h1>
        </div>
        <div className="flex gap-2">
          <button onClick={() => setNavOpen(v => !v)} className="glass p-2.5 rounded-lg hover:bg-white/10" aria-label="Sommaire">
            {navOpen ? <X className="h-4 w-4" /> : <List className="h-4 w-4" />}
          </button>
          <button onClick={() => setFull(v => !v)} className="glass p-2.5 rounded-lg hover:bg-white/10" aria-label="Plein écran">
            {full ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </button>
        </div>
      </div>

      <div className="h-1 rounded-full bg-white/5 overflow-hidden mb-6">
        <div className="h-full bg-gradient-to-r from-primary to-accent transition-all" style={{ width: `${progress}%` }} />
      </div>

      <div className={`grid gap-6 ${navOpen ? "lg:grid-cols-[260px_1fr]" : ""}`}>
        {navOpen && (
          <aside className="glass-strong rounded-2xl p-4 max-h-[80vh] overflow-y-auto sticky top-20 self-start">
            <div className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Sommaire</div>
            <div className="space-y-1">
              {chapters.map((c) => {
                const chapSlides = slides.map((s, idx) => ({ s, idx })).filter(x => x.s.chapter === c.id);
                return (
                  <div key={c.id}>
                    <div className="text-xs font-semibold text-accent uppercase tracking-wider mt-3 mb-1 px-2">{c.title}</div>
                    {chapSlides.map(({ s, idx }) => (
                      <button
                        key={s.id}
                        onClick={() => setI(idx)}
                        className={`w-full text-left text-sm px-3 py-2 rounded-lg transition ${idx === i ? "bg-primary/20 text-primary" : "hover:bg-white/5 text-muted-foreground"}`}
                      >
                        <span className="font-mono text-xs opacity-50 mr-2">{(idx + 1).toString().padStart(2, "0")}</span>
                        {s.title}
                      </button>
                    ))}
                  </div>
                );
              })}
            </div>
          </aside>
        )}

        <div className={full ? "fixed inset-0 z-50 bg-background overflow-y-auto p-4" : ""}>
          <AnimatePresence mode="wait">
            <SlideRenderer key={slide.id} slide={slide} index={i} total={slides.length} />
          </AnimatePresence>

          <div className="mt-6 flex items-center justify-between gap-3">
            <button
              onClick={() => setI(v => Math.max(0, v - 1))}
              disabled={i === 0}
              className="glass px-4 py-2.5 rounded-xl flex items-center gap-2 disabled:opacity-40 hover:bg-white/10 transition"
            >
              <ChevronLeft className="h-4 w-4" /> Précédent
            </button>
            <div className="text-sm text-muted-foreground hidden md:block">
              Utilisez ← → pour naviguer · <kbd className="glass px-2 py-0.5 rounded">Esc</kbd> pour quitter le plein écran
            </div>
            {i < slides.length - 1 ? (
              <button
                onClick={() => setI(v => Math.min(slides.length - 1, v + 1))}
                className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-2.5 rounded-xl flex items-center gap-2 glow-primary"
              >
                Suivant <ChevronRight className="h-4 w-4" />
              </button>
            ) : (
              <Link to="/quiz" className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-2.5 rounded-xl flex items-center gap-2 glow-primary">
                Tester mes connaissances <ChevronRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
