import { moduleInfo, chapters, slides, quiz, flashcards, glossary } from "./module1";
import { moduleInfo2, chapters2, slides2, quiz2, flashcards2, glossary2 } from "./module2";
import { moduleInfo3, chapters3, slides3, quiz3, flashcards3, glossary3 } from "./module3";
import { moduleInfo4, chapters4, slides4, quiz4, flashcards4, glossary4 } from "./module4";
import { moduleInfo5, chapters5, slides5, quiz5, flashcards5, glossary5 } from "./module5";
import type { Slide } from "./module1";

export type ModuleData = {
  slug: string;
  status: "available" | "soon";
  info: typeof moduleInfo;
  chapters: { id: string; title: string; icon: string }[];
  slides: Slide[];
  quiz: typeof quiz;
  flashcards: typeof flashcards;
  glossary: typeof glossary;
};

export const modulesRegistry: ModuleData[] = [
  {
    slug: "module-1",
    status: "available",
    info: moduleInfo,
    chapters,
    slides,
    quiz,
    flashcards,
    glossary,
  },
  {
    slug: "module-2",
    status: "available",
    info: moduleInfo2,
    chapters: chapters2,
    slides: slides2,
    quiz: quiz2,
    flashcards: flashcards2,
    glossary: glossary2,
  },
  {
    slug: "module-3",
    status: "available",
    info: moduleInfo3,
    chapters: chapters3,
    slides: slides3,
    quiz: quiz3,
    flashcards: flashcards3,
    glossary: glossary3,
  },
  {
    slug: "module-4",
    status: "available",
    info: moduleInfo4,
    chapters: chapters4,
    slides: slides4,
    quiz: quiz4,
    flashcards: flashcards4,
    glossary: glossary4,
  },
  {
    slug: "module-5",
    status: "available",
    info: moduleInfo5,
    chapters: chapters5,
    slides: slides5,
    quiz: quiz5,
    flashcards: flashcards5,
    glossary: glossary5,
  },
];

export const upcomingModules = [
  { code: "Module 6", title: "SEO sémantique avancé & graphes de connaissance" },
  { code: "Module 7", title: "SEO local & Maps avancés" },
];

export const getModule = (slug: string) => modulesRegistry.find((m) => m.slug === slug);

// Aggregations across all modules
export const allQuiz = modulesRegistry.flatMap((m) => m.quiz.map((q) => ({ ...q, module: m.info.code })));
export const allFlashcards = modulesRegistry.flatMap((m) => m.flashcards.map((f) => ({ ...f, module: m.info.code })));
export const allGlossary = modulesRegistry.flatMap((m) => m.glossary.map((g) => ({ ...g, module: m.info.code })));
