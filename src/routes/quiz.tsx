import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { quiz } from "@/data/module1";
import { CheckCircle2, XCircle, RotateCcw } from "lucide-react";

export const Route = createFileRoute("/quiz")({
  head: () => ({
    meta: [
      { title: "Quiz — SEO Avancé · ENI" },
      { name: "description", content: "Quiz interactif pour valider vos acquis sur l'architecture SEO 2026." },
      { property: "og:title", content: "Quiz interactif SEO 2026" },
      { property: "og:description", content: "Validez vos connaissances sur le Module 1." },
    ],
  }),
  component: Quiz,
});

function Quiz() {
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const q = quiz[i];

  const next = () => {
    if (picked === q.answer) setScore(s => s + 1);
    setPicked(null);
    if (i + 1 >= quiz.length) setDone(true);
    else setI(v => v + 1);
  };
  const reset = () => { setI(0); setPicked(null); setScore(0); setDone(false); };

  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <div className="text-xs text-accent uppercase tracking-widest mb-2">Quiz · Module 1</div>
      <h1 className="text-3xl md:text-4xl font-display font-bold mb-8">Validez vos acquis</h1>

      {!done ? (
        <div className="glass-strong rounded-3xl p-8">
          <div className="flex items-center justify-between mb-4 text-sm text-muted-foreground">
            <span>Question {i + 1} / {quiz.length}</span>
            <span>Score : <span className="text-primary font-bold">{score}</span></span>
          </div>
          <div className="h-1 rounded-full bg-white/5 overflow-hidden mb-6">
            <div className="h-full bg-gradient-to-r from-primary to-accent" style={{ width: `${((i+1)/quiz.length)*100}%` }} />
          </div>

          <h2 className="text-xl md:text-2xl font-display font-semibold mb-6">{q.q}</h2>
          <div className="space-y-3">
            {q.options.map((o, idx) => {
              const isPicked = picked === idx;
              const isCorrect = picked !== null && idx === q.answer;
              const isWrong = isPicked && idx !== q.answer;
              return (
                <button
                  key={idx}
                  disabled={picked !== null}
                  onClick={() => setPicked(idx)}
                  className={`w-full text-left p-4 rounded-xl glass transition flex items-center justify-between
                    ${isCorrect ? "border border-eni-green/60 bg-eni-green/10" : ""}
                    ${isWrong ? "border border-destructive/60 bg-destructive/10" : ""}
                    ${picked === null ? "hover:bg-white/10" : ""}
                  `}
                >
                  <span>{o}</span>
                  {isCorrect && <CheckCircle2 className="h-5 w-5 text-eni-green" />}
                  {isWrong && <XCircle className="h-5 w-5 text-destructive" />}
                </button>
              );
            })}
          </div>

          {picked !== null && (
            <div className="mt-5 glass border-l-4 border-accent p-4 rounded-r-xl text-sm">
              <span className="font-semibold text-accent">Explication : </span>{q.explain}
            </div>
          )}

          <div className="mt-6 flex justify-end">
            <button
              onClick={next}
              disabled={picked === null}
              className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-6 py-2.5 rounded-xl font-semibold disabled:opacity-40 glow-primary"
            >
              {i + 1 === quiz.length ? "Voir mon score" : "Question suivante"}
            </button>
          </div>
        </div>
      ) : (
        <div className="glass-strong rounded-3xl p-10 text-center">
          <div className="text-6xl font-display font-bold text-gradient-primary">{score} / {quiz.length}</div>
          <p className="mt-4 text-muted-foreground">
            {score === quiz.length ? "Excellent ! Vous maîtrisez le Module 1." : score >= quiz.length / 2 ? "Bon score ! Révisez les notions manquées." : "À retravailler — relisez le cours et réessayez."}
          </p>
          <div className="mt-6 flex gap-3 justify-center">
            <button onClick={reset} className="glass px-5 py-2.5 rounded-xl flex items-center gap-2 hover:bg-white/10">
              <RotateCcw className="h-4 w-4" /> Recommencer
            </button>
            <Link to="/flashcards" className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-5 py-2.5 rounded-xl font-semibold glow-primary">
              Réviser avec les flashcards
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
