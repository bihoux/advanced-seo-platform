import { motion } from "framer-motion";
import type { Slide } from "@/data/module1";
import { CheckCircle2, AlertTriangle, Lightbulb, Sparkles, ArrowRight } from "lucide-react";

export function SlideRenderer({ slide, index, total }: { slide: Slide; index: number; total: number }) {
  return (
    <motion.article
      key={slide.id}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="glass-strong rounded-3xl p-6 md:p-12 min-h-[60vh] relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
      <div className="relative">
        <div className="flex items-center justify-between mb-6">
          <span className="text-xs uppercase tracking-widest text-accent font-semibold">
            Slide {index + 1} / {total}
          </span>
          <span className="text-xs text-muted-foreground glass px-3 py-1 rounded-full">
            {slide.chapter}
          </span>
        </div>

        {slide.subtitle && (
          <div className="text-sm text-primary font-semibold mb-2 uppercase tracking-wider">{slide.subtitle}</div>
        )}
        <h2 className="text-3xl md:text-5xl font-bold font-display mb-8 leading-tight">
          {slide.type === "intro" ? <span className="text-gradient-primary">{slide.title}</span> : slide.title}
        </h2>

        {slide.type === "intro" && <IntroSlide slide={slide} />}
        {slide.type === "content" && <ContentSlide slide={slide} />}
        {slide.type === "table" && <TableSlide slide={slide} />}
        {slide.type === "list" && <ListSlide slide={slide} />}
        {slide.type === "image" && <ImageSlide slide={slide} />}
        {slide.type === "exercise" && <ExerciseSlide slide={slide} />}
      </div>
    </motion.article>
  );
}

function IntroSlide({ slide }: { slide: Slide }) {
  const c = slide.content;
  return (
    <div className="grid md:grid-cols-2 gap-10 items-center">
      <div className="space-y-6">
        <p className="text-xl text-muted-foreground leading-relaxed">{c.tagline}</p>
        <div className="flex flex-wrap gap-3">
          {c.pillars?.map((p: string) => (
            <span key={p} className="px-4 py-2 rounded-full glass text-sm font-mono text-accent ring-cyber">
              {p}
            </span>
          ))}
        </div>
      </div>
      {slide.image && (
        <motion.img
          src={slide.image}
          alt={slide.title}
          className="rounded-2xl w-full ring-1 ring-border shadow-2xl animate-float"
        />
      )}
    </div>
  );
}

function ContentSlide({ slide }: { slide: Slide }) {
  const c = slide.content;
  return (
    <div className="grid md:grid-cols-5 gap-8">
      <div className={`space-y-5 ${slide.image ? "md:col-span-3" : "md:col-span-5"}`}>
        {c.lead && <p className="text-lg text-muted-foreground leading-relaxed">{c.lead}</p>}
        {c.callout && (
          <div className="glass border-l-4 border-primary p-4 rounded-r-xl flex gap-3">
            <Lightbulb className="h-5 w-5 text-primary shrink-0 mt-0.5" />
            <p className="text-sm">{c.callout}</p>
          </div>
        )}
        {c.principle && <p className="font-semibold text-accent">{c.principle}</p>}
        {c.items && (
          <ul className="space-y-2">
            {c.items.map((it: string, i: number) => (
              <li key={i} className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-eni-green shrink-0 mt-0.5" />
                <span>{it}</span>
              </li>
            ))}
          </ul>
        )}
        {c.examples && (
          <div className="space-y-2">
            {c.examples.map((e: any) => (
              <div key={e.tag} className="glass p-4 rounded-xl">
                <code className="text-accent font-mono text-sm">{e.tag}</code>
                <p className="text-sm text-muted-foreground mt-1">{e.desc}</p>
              </div>
            ))}
          </div>
        )}
        {c.warning && (
          <div className="glass border-l-4 border-destructive p-4 rounded-r-xl flex gap-3">
            <AlertTriangle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
            <p className="text-sm">{c.warning}</p>
          </div>
        )}
        {c.code && (
          <pre className="glass p-4 rounded-xl overflow-x-auto text-sm font-mono text-accent whitespace-pre">
            {c.code}
          </pre>
        )}
        {c.rule && (
          <div className="glass border border-eni-green/40 p-4 rounded-xl flex gap-3">
            <Sparkles className="h-5 w-5 text-eni-green shrink-0 mt-0.5" />
            <p className="text-sm">{c.rule}</p>
          </div>
        )}
        {c.waves && (
          <div className="grid sm:grid-cols-2 gap-3">
            {c.waves.map((w: any) => (
              <div key={w.n} className="glass p-4 rounded-xl">
                <div className="text-3xl font-display font-bold text-gradient">{w.n}</div>
                <div className="font-semibold mt-1">{w.title}</div>
                <p className="text-sm text-muted-foreground mt-1">{w.desc}</p>
              </div>
            ))}
          </div>
        )}
        {c.checklist && (
          <ul className="space-y-2">
            {c.checklist.map((it: string, i: number) => (
              <li key={i} className="flex gap-3">
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span>{it}</span>
              </li>
            ))}
          </ul>
        )}
        {c.steps && (
          <div className="space-y-3">
            {c.steps.map((s: any, i: number) => (
              <div key={i} className="glass p-4 rounded-xl flex gap-4">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold shrink-0">
                  {i + 1}
                </div>
                <div>
                  <div className="font-semibold">{s.name}</div>
                  <p className="text-sm text-muted-foreground mt-1">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        {c.groups && (
          <div className="grid gap-3">
            {c.groups.map((g: any) => (
              <div key={g.name} className="glass p-4 rounded-xl">
                <div className="font-semibold text-primary mb-2">{g.name}</div>
                <ul className="space-y-1.5 text-sm">
                  {g.items.map((it: string, i: number) => (
                    <li key={i} className="flex gap-2"><ArrowRight className="h-4 w-4 text-accent shrink-0 mt-0.5" />{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
      {slide.image && (
        <div className="md:col-span-2">
          <img src={slide.image} alt={slide.title} className="rounded-2xl w-full ring-1 ring-border shadow-xl" />
        </div>
      )}
    </div>
  );
}

function TableSlide({ slide }: { slide: Slide }) {
  const c = slide.content;
  return (
    <div className="space-y-6">
      <div className="overflow-x-auto rounded-2xl ring-1 ring-border">
        <table className="w-full text-sm">
          <thead className="bg-gradient-to-r from-primary/20 to-accent/20">
            <tr>
              {c.headers.map((h: string) => (
                <th key={h} className="text-left p-4 font-display font-semibold">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {c.rows.map((row: string[], i: number) => (
              <tr key={i} className="border-t border-border/40 hover:bg-white/5 transition-colors">
                {row.map((cell, j) => (
                  <td key={j} className={`p-4 align-top ${j === 0 ? "font-semibold text-accent" : "text-muted-foreground"}`}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {c.tip && (
        <div className="glass border-l-4 border-accent p-4 rounded-r-xl flex gap-3">
          <Lightbulb className="h-5 w-5 text-accent shrink-0 mt-0.5" />
          <p className="text-sm">{c.tip}</p>
        </div>
      )}
      {slide.image && <img src={slide.image} alt="" className="rounded-2xl w-full max-h-[40vh] object-contain ring-1 ring-border mx-auto" />}
    </div>
  );
}

function ListSlide({ slide }: { slide: Slide }) {
  const c = slide.content;
  return (
    <div className="space-y-6 max-w-3xl">
      {c.lead && <p className="text-lg text-muted-foreground">{c.lead}</p>}
      {c.prerequis && (
        <div className="glass p-4 rounded-xl text-sm">
          <span className="text-primary font-semibold">Prérequis : </span>
          <span className="text-muted-foreground">{c.prerequis}</span>
        </div>
      )}
      <ul className="space-y-3">
        {c.items.map((it: string, i: number) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08 }}
            className="glass p-4 rounded-xl flex gap-4 items-start"
          >
            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center text-sm font-bold shrink-0">
              {i + 1}
            </div>
            <span className="text-base">{it}</span>
          </motion.li>
        ))}
      </ul>
      {c.tip && (
        <div className="glass border-l-4 border-accent p-4 rounded-r-xl flex gap-3">
          <Lightbulb className="h-5 w-5 text-accent shrink-0 mt-0.5" />
          <p className="text-sm">{c.tip}</p>
        </div>
      )}
    </div>
  );
}

function ImageSlide({ slide }: { slide: Slide }) {
  const c = slide.content;
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      {slide.image && <img src={slide.image} alt={slide.title} className="rounded-2xl w-full ring-1 ring-border shadow-2xl" />}
      <div className="space-y-4">
        {c?.steps && (
          <ol className="space-y-2">
            {c.steps.map((s: string, i: number) => (
              <li key={i} className="flex gap-3 glass p-3 rounded-xl">
                <span className="font-bold text-primary">{i + 1}.</span> {s}
              </li>
            ))}
          </ol>
        )}
        {c?.pilier && (
          <>
            <div>
              <div className="text-xs uppercase tracking-wider text-primary font-semibold mb-1">Page pilier</div>
              <code className="text-sm block glass p-3 rounded-xl">{c.pilier}</code>
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-accent font-semibold mb-2">Pages satellites</div>
              <div className="grid grid-cols-2 gap-2">
                {c.satellites.map((s: string) => (
                  <code key={s} className="text-xs glass p-2 rounded-lg">{s}</code>
                ))}
              </div>
            </div>
            <p className="text-sm text-muted-foreground">{c.mesure}</p>
          </>
        )}
      </div>
    </div>
  );
}

function ExerciseSlide({ slide }: { slide: Slide }) {
  const c = slide.content;
  return (
    <div className="space-y-6">
      <div className="glass border-l-4 border-primary p-5 rounded-r-xl">
        <div className="text-xs uppercase tracking-wider text-primary font-semibold mb-2">Contexte</div>
        <p className="text-sm">{c.contexte}</p>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {c.taches.map((t: any) => (
          <div key={t.n} className="glass p-5 rounded-2xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-bold">{t.n}</div>
              <h3 className="font-display font-semibold">{t.titre}</h3>
            </div>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {t.items.map((i: string, idx: number) => (
                <li key={idx} className="flex gap-2"><ArrowRight className="h-4 w-4 text-accent shrink-0 mt-0.5" />{i}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="glass border border-eni-green/40 p-4 rounded-xl">
        <span className="text-eni-green font-semibold">Livrable attendu : </span>
        <span className="text-sm">{c.livrable}</span>
      </div>
    </div>
  );
}
