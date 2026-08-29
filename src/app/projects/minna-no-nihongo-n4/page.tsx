import type { Metadata } from "next";

import { InnerPageShell } from "@/components/inner-page-shell";
import { ProjectBookReader, type BookReaderConfig } from "@/components/project-book-reader";
import { minnaN4CompanionSections, minnaN4Units } from "@/lib/minna-n4-companion";
import { minnaN4KanjiByUnit } from "@/lib/minna-n4-unit-kanji";

export const metadata: Metadata = {
  title: "Minna no Nihongo N4 বাংলা Digital Book Project | Unit 26–50",
  description: "সূচিপত্র ও book-style reader-এ Minna no Nihongo Unit 26–50-এর independent বাংলা explanation, original examples, practice এবং self-test।",
  alternates: { canonical: "/projects/minna-no-nihongo-n4" },
};

const readerConfig: BookReaderConfig = {
  bookId: "n4",
  bookLabel: "N4",
  bookTitle: "Minna no Nihongo N4",
  unitRangeLabel: "UNIT 26–50",
  storageKey: "minna-n4-book-progress",
  kanjiByUnit: minnaN4KanjiByUnit,
  unitViewsInModal: true,
};

export default function MinnaN4ProjectPage() {
  return <InnerPageShell><ProjectBookReader sections={minnaN4CompanionSections} units={minnaN4Units} config={readerConfig}/></InnerPageShell>;
}
