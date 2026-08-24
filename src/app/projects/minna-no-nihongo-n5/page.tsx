import type { Metadata } from "next";

import { InnerPageShell } from "@/components/inner-page-shell";
import { ProjectBookReader } from "@/components/project-book-reader";
import { minnaN5CompanionSections, minnaN5Units } from "@/lib/minna-n5-companion";

export const metadata: Metadata = {
  title: "Minna no Nihongo N5 বাংলা Digital Book Project | Unit 1–25",
  description: "সূচিপত্র ও book-style reader-এ Minna no Nihongo Unit 1–25-এর independent বাংলা explanation, original examples, practice এবং self-test।",
  alternates: { canonical: "/projects/minna-no-nihongo-n5" },
};

export default function MinnaN5ProjectPage() {
  return <InnerPageShell><ProjectBookReader sections={minnaN5CompanionSections} units={minnaN5Units}/></InnerPageShell>;
}
