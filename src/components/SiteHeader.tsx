import { Link, useRouterState } from "@tanstack/react-router";
import logoEni from "@/assets/logo-eni.webp";
import logoCapri from "@/assets/logo-capriai.webp";
import { Sparkles } from "lucide-react";

const NAV = [
  { to: "/", label: "Accueil" },
  { to: "/cours", label: "Cours" },
  { to: "/modules", label: "Modules" },
  { to: "/quiz", label: "Quiz" },
  { to: "/flashcards", label: "Flashcards" },
  { to: "/glossaire", label: "Glossaire" },
  { to: "/formateur", label: "Formateur" },
] as const;

export default function SiteHeader() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  return (
    <header className="sticky top-0 z-50 glass-strong border-b border-border/40">
      <div className="mx-auto max-w-7xl px-4 h-16 flex items-center gap-4">
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <img src={logoEni} alt="ENI" className="h-9 w-9 rounded-full ring-2 ring-primary/40" />
          <div className="hidden sm:block leading-tight">
            <div className="text-[11px] uppercase tracking-widest text-muted-foreground">ENI · Université de Fianarantsoa</div>
            <div className="font-display font-bold text-sm">SEO Avancé <span className="text-gradient">2026</span></div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-1 ml-6 text-sm">
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
        <div className="ml-auto flex items-center gap-3">
          <div className="hidden lg:flex items-center gap-2 text-xs text-muted-foreground glass px-3 py-1.5 rounded-full">
            <Sparkles className="h-3.5 w-3.5 text-accent" />
            Powered by <span className="text-gradient font-semibold">CapriAI Bi'hOux</span>
          </div>
          <img src={logoCapri} alt="CapriAI" className="h-9 w-14 rounded-md object-cover ring-1 ring-accent/30" />
        </div>
      </div>
    </header>
  );
}
