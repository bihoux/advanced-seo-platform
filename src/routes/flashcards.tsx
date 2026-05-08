import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion } from "framer-motion";
import { flashcards } from "@/data/module1";
import { ChevronLeft, ChevronRight, RefreshCw } from "lucide-react";

export const Route = createFileRoute("/flashcards")({
  head: () => ({
    meta: [
      { title: "Flashcards — SEO Avancé · ENI" },
      { name: "description", content: "Cartes de révision interactives sur les concepts clés du SEO technique avancé 2026." },
      { property: "og:title", content: "Flashcards SEO 2026" },
      { property: "og:description", content: "Mémorisez les concepts clés du Module 1." },
    ],
  }),
  component: Flash,
});

function Flash() {
  const [i, setI] = useState(0);
  const [flip, setFlip] = useState(false);
  const c = flashcards[i];
  const go = (d: number) => { setFlip(false); setI((i + d + flashcards.length) % flashcards.length); };

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <div className="text-xs text-accent uppercase tracking-widest mb-2">Flashcards · Module 1</div>
      <h1 className="text-3xl md:text-4xl font-display font-bold mb-2">Cartes de révision</h1>
      <p className="text-muted-foreground mb-8">Cliquez la carte pour la retourner. {i + 1} / {flashcards.length}</p>

      <motion.div
        key={i}
        onClick={() => setFlip(f => !f)}
        className="cursor-pointer perspective"
        style={{ perspective: "1200px" }}
      >
        <motion.div
          animate={{ rotateY: flip ? 180 : 0 }}
          transition={{ duration: 0.6 }}
          className="relative h-72 md:h-80"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="absolute inset-0 glass-strong rounded-3xl flex flex-col items-center justify-center p-8 text-center" style={{ backfaceVisibility: "hidden" }}>
            <div className="text-xs uppercase tracking-widest text-accent mb-3">Concept</div>
            <div className="text-3xl md:text-4xl font-display font-bold text-gradient-primary">{c.front}</div>
            <div className="absolute bottom-4 text-xs text-muted-foreground flex items-center gap-1"><RefreshCw className="h-3 w-3" /> Cliquez pour retourner</div>
          </div>
          <div className="absolute inset-0 glass-strong rounded-3xl flex items-center justify-center p-8 text-center" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
            <p className="text-lg leading-relaxed">{c.back}</p>
          </div>
        </motion.div>
      </motion.div>

      <div className="mt-6 flex justify-between gap-3">
        <button onClick={() => go(-1)} className="glass px-4 py-2.5 rounded-xl flex items-center gap-2 hover:bg-white/10">
          <ChevronLeft className="h-4 w-4" /> Précédente
        </button>
        <button onClick={() => go(1)} className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-4 py-2.5 rounded-xl flex items-center gap-2 glow-primary">
          Suivante <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
