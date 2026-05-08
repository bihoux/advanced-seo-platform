import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { glossary } from "@/data/module1";
import { Search } from "lucide-react";

export const Route = createFileRoute("/glossaire")({
  head: () => ({
    meta: [
      { title: "Glossaire SEO — ENI" },
      { name: "description", content: "Glossaire complet des termes techniques du SEO avancé 2026 : Core Web Vitals, cocon sémantique, SSR, INP, et plus." },
      { property: "og:title", content: "Glossaire SEO 2026" },
      { property: "og:description", content: "Définitions clés du SEO technique avancé." },
    ],
  }),
  component: Glo,
});

function Glo() {
  const [q, setQ] = useState("");
  const filtered = glossary.filter(g => g.term.toLowerCase().includes(q.toLowerCase()) || g.def.toLowerCase().includes(q.toLowerCase()));
  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <div className="text-xs text-accent uppercase tracking-widest mb-2">Référence</div>
      <h1 className="text-3xl md:text-4xl font-display font-bold mb-6">Glossaire SEO 2026</h1>

      <div className="glass rounded-2xl flex items-center gap-3 px-4 py-3 mb-8">
        <Search className="h-4 w-4 text-muted-foreground" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Rechercher un terme (LCP, SSR, cocon…)"
          className="bg-transparent flex-1 outline-none text-sm"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-3">
        {filtered.map(g => (
          <div key={g.term} className="glass-strong rounded-2xl p-5">
            <div className="text-lg font-display font-bold text-gradient-primary">{g.term}</div>
            <p className="text-sm text-muted-foreground mt-1">{g.def}</p>
          </div>
        ))}
        {filtered.length === 0 && <p className="text-muted-foreground col-span-2">Aucun résultat.</p>}
      </div>
    </div>
  );
}
