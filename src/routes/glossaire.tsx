import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { allGlossary } from "@/data/modules";
import { Search } from "lucide-react";

export const Route = createFileRoute("/glossaire")({
  head: () => ({
    meta: [
      { title: "Glossaire SEO — ENI" },
      { name: "description", content: "Glossaire complet du SEO avancé 2026 : Core Web Vitals, cocon sémantique, EEAT, Passage Indexing, SGE et plus encore." },
      { property: "og:title", content: "Glossaire SEO 2026" },
      { property: "og:description", content: "Définitions clés du SEO technique et sémantique." },
    ],
  }),
  component: Glo,
});

function Glo() {
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState<string>("Tous");
  const modules = useMemo(() => Array.from(new Set(allGlossary.map(g => g.module))), []);
  const filtered = allGlossary.filter(g =>
    (filter === "Tous" || g.module === filter) &&
    (g.term.toLowerCase().includes(q.toLowerCase()) || g.def.toLowerCase().includes(q.toLowerCase()))
  );

  return (
    <div className="mx-auto max-w-4xl px-4 py-12">
      <div className="text-xs text-accent uppercase tracking-widest mb-2">Référence</div>
      <h1 className="text-3xl md:text-4xl font-display font-bold mb-6">Glossaire SEO 2026</h1>

      <div className="glass rounded-2xl flex items-center gap-3 px-4 py-3 mb-4">
        <Search className="h-4 w-4 text-muted-foreground" />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Rechercher un terme (LCP, EEAT, SGE…)"
          className="bg-transparent flex-1 outline-none text-sm"
        />
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {["Tous", ...modules].map(m => (
          <button
            key={m}
            onClick={() => setFilter(m)}
            className={`px-3 py-1.5 rounded-full text-xs transition ${filter === m ? "bg-primary/20 text-primary" : "glass text-muted-foreground hover:text-foreground"}`}
          >
            {m}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-3">
        {filtered.map((g, i) => (
          <div key={`${g.term}-${i}`} className="glass-strong rounded-2xl p-5">
            <div className="flex items-baseline justify-between gap-2">
              <div className="text-lg font-display font-bold text-gradient-primary">{g.term}</div>
              <span className="text-[10px] uppercase tracking-widest text-muted-foreground">{g.module}</span>
            </div>
            <p className="text-sm text-muted-foreground mt-1">{g.def}</p>
          </div>
        ))}
        {filtered.length === 0 && <p className="text-muted-foreground col-span-2">Aucun résultat.</p>}
      </div>
    </div>
  );
}
