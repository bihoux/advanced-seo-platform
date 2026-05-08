import { createFileRoute } from "@tanstack/react-router";
import formateur from "@/assets/formateur.webp";
import logoEni from "@/assets/logo-eni.webp";
import logoCapri from "@/assets/logo-capriai.webp";
import { Award, BookOpen, Brain, Code, Globe2, Mail, Sparkles } from "lucide-react";

export const Route = createFileRoute("/formateur")({
  head: () => ({
    meta: [
      { title: "Formateur — Mr RANDRIATSARAFARA Miandrisoa Hoby · ENI" },
      { name: "description", content: "Profil du formateur — chercheur en informatique, spécialiste SEO & IA à l'École Nationale d'Informatique (Université de Fianarantsoa)." },
      { property: "og:title", content: "Mr RANDRIATSARAFARA Miandrisoa Hoby" },
      { property: "og:description", content: "Chercheur, enseignant et spécialiste SEO & IA à l'ENI." },
    ],
  }),
  component: Trainer,
});

function Trainer() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12">
      <div className="grid md:grid-cols-[320px_1fr] gap-10 items-start">
        <div className="glass-strong rounded-3xl p-5 ring-cyber sticky top-20">
          <img src={formateur} alt="Mr RANDRIATSARAFARA Miandrisoa Hoby" className="rounded-2xl w-full" />
          <div className="mt-4 flex items-center justify-between">
            <img src={logoEni} alt="ENI" className="h-10 w-10 rounded-full" />
            <img src={logoCapri} alt="CapriAI" className="h-10 w-16 rounded object-cover" />
          </div>
        </div>

        <div>
          <div className="text-xs text-accent uppercase tracking-widest mb-2">À propos du formateur</div>
          <h1 className="text-3xl md:text-5xl font-display font-bold">
            Mr RANDRIATSARAFARA<br /><span className="text-gradient-primary">Miandrisoa Hoby</span>
          </h1>
          <p className="mt-3 text-muted-foreground text-lg">
            Chercheur en informatique · Spécialiste SEO & Intelligence Artificielle<br />
            École Nationale d'Informatique — Université de Fianarantsoa
          </p>

          <blockquote className="mt-8 glass border-l-4 border-primary p-5 rounded-r-2xl italic">
            « L'avenir du référencement appartient à ceux qui maîtrisent l'architecture, la sémantique et l'IA — non plus aux mots-clés isolés. »
          </blockquote>

          <div className="grid sm:grid-cols-2 gap-4 mt-8">
            {[
              { icon: Brain, title: "Intelligence Artificielle", d: "NLP, traitement sémantique, IA générative appliquée à l'éducation." },
              { icon: Globe2, title: "SEO Technique Avancé", d: "Core Web Vitals, JavaScript SEO, cocon sémantique, crawl budget." },
              { icon: Code, title: "Architecture Web", d: "SSR, SSG, Islands architecture, performance web 2026." },
              { icon: BookOpen, title: "Pédagogie numérique", d: "Conception de plateformes e-learning interactives." },
            ].map((e, i) => (
              <div key={i} className="glass-strong rounded-2xl p-5">
                <e.icon className="h-7 w-7 text-accent mb-3" />
                <div className="font-display font-bold">{e.title}</div>
                <p className="text-sm text-muted-foreground mt-1">{e.d}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <div className="text-xs uppercase tracking-widest text-accent font-semibold mb-3">Compétences</div>
            <div className="flex flex-wrap gap-2">
              {["SEO Avancé 2026", "Intelligence Artificielle", "NLP", "TanStack / React", "TypeScript", "Architecture Sémantique", "Core Web Vitals", "Recherche universitaire", "Pédagogie active", "Cyberspace & UX"].map(t => (
                <span key={t} className="px-3 py-1.5 glass rounded-full text-xs">{t}</span>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <a className="glass px-4 py-2.5 rounded-xl flex items-center gap-2 hover:bg-white/10" href="#">
              <Mail className="h-4 w-4" /> Contact
            </a>
            <a className="glass px-4 py-2.5 rounded-xl flex items-center gap-2 hover:bg-white/10" href="#">
              <Award className="h-4 w-4" /> ENI · Fianarantsoa
            </a>
            <a className="glass px-4 py-2.5 rounded-xl flex items-center gap-2 hover:bg-white/10" href="#">
              <Sparkles className="h-4 w-4 text-accent" /> CapriAI Bi'hOux
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
