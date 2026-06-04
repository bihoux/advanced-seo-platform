import logoEni from "@/assets/logo-eni.webp";
import logoCapri from "@/assets/logo-capriai.webp";
import { Link } from "@tanstack/react-router";

export default function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border/40 bg-background/60">
      <div className="mx-auto max-w-7xl px-4 py-12 grid md:grid-cols-4 gap-8">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <img src={logoEni} alt="ENI" className="h-10 w-10 rounded-full" />
            <div>
              <div className="font-display font-bold">ENI</div>
              <div className="text-xs text-muted-foreground">Université de Fianarantsoa</div>
            </div>
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed">
            École Nationale d'Informatique — La pépinière des élites informaticiennes
          </p>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-3 text-sm">Navigation</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/modules" className="hover:text-primary">Modules</Link></li>
            <li><Link to="/cours" className="hover:text-primary">Cours interactifs</Link></li>
            <li><Link to="/quiz" className="hover:text-primary">Quiz</Link></li>
            <li><Link to="/flashcards" className="hover:text-primary">Flashcards</Link></li>
            <li><Link to="/glossaire" className="hover:text-primary">Glossaire SEO</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-3 text-sm">Programme</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>Module 1 — Architecture technique</li>
            <li>Module 2 — Stratégie de contenu & EEAT</li>
            <li>Module 3 — Données structurées & performance</li>
            <li>Module 4 — Netlinking & popularité</li>
            <li>Module 5 — SEO à l’ère de l’IA</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-3 text-sm">Branding IA</h4>
          <div className="flex items-center gap-3 glass rounded-xl p-3">
            <img src={logoCapri} alt="CapriAI Bi'hOux" className="h-12 w-20 rounded object-cover" />
            <div className="text-xs">
              <div className="text-gradient font-bold">M.H.Randriatsarafara</div>
              <div className="text-muted-foreground">Doctorant & Enseignant en informatique</div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border/30 py-4 text-center text-xs text-muted-foreground">
        © 2026 M. H. Randriatsarafara — Plateforme pédagogique SEO · ENI, Université de Fianarantsoa
      </div>
    </footer>
  );
}
