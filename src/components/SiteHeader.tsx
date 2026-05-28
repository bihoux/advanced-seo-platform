import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import logoEni from "@/assets/logo-eni.webp";
import logoCapri from "@/assets/logo-capriai.webp";
import { Sparkles, Menu, X } from "lucide-react";

const NAV = [
  { to: "/", label: "Accueil" },
  { to: "/modules", label: "Modules" },
  { to: "/cours", label: "Cours" },
  { to: "/quiz", label: "Quiz" },
  { to: "/flashcards", label: "Flashcards" },
  { to: "/glossaire", label: "Glossaire" },
] as const;

export default function SiteHeader() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => { setOpen(false); }, [path]);

  return (
    <header className="sticky top-0 z-50 glass-strong border-b border-border/40">
      <div className="mx-auto max-w-7xl px-4 h-16 flex items-center gap-3">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img src={logoEni} alt="ENI" className="h-9 w-9 rounded-full ring-2 ring-primary/40" />
          <div className="hidden sm:block leading-tight">
            <div className="text-[11px] uppercase tracking-widest text-muted-foreground">ENI · Université de Fianarantsoa</div>
            <div className="font-display font-bold text-sm">SEO Avancé <span className="text-gradient">2026</span></div>
          </div>
          <div className="sm:hidden font-display font-bold text-sm">
            SEO <span className="text-gradient">2026</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1 ml-6 text-sm" aria-label="Navigation principale">
          {NAV.map((n) => {
            const active = path === n.to || (n.to !== "/" && path.startsWith(n.to));
            return (
              <Link
                key={n.to}
                to={n.to}
                className={`px-3 py-1.5 rounded-md transition-colors ${active ? "bg-primary/15 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-white/5"}`}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <div className="hidden lg:flex items-center gap-2 text-xs text-muted-foreground glass px-3 py-1.5 rounded-full">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Powered by <span className="text-gradient font-semibold">CapriAI Bi'hOux</span>
          </div>
          <img src={logoCapri} alt="CapriAI Bi'hOux" className="hidden sm:block h-9 w-14 rounded-md object-cover ring-1 ring-accent/30" />
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden glass p-2 rounded-lg"
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          className="md:hidden border-t border-border/40 bg-background/95 backdrop-blur-xl px-4 py-3 space-y-1"
          aria-label="Navigation mobile"
        >
          {NAV.map((n) => {
            const active = path === n.to || (n.to !== "/" && path.startsWith(n.to));
            return (
              <Link
                key={n.to}
                to={n.to}
                className={`block px-3 py-2.5 rounded-lg text-sm transition-colors ${active ? "bg-primary/15 text-primary" : "text-muted-foreground hover:text-foreground hover:bg-white/5"}`}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
