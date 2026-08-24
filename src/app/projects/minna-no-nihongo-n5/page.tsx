import type { Metadata } from "next";

import { CoursePlayer } from "@/components/course-player";
import { minnaN5CompanionSections } from "@/lib/minna-n5-companion";

export const metadata: Metadata = {
  title: "Minna no Nihongo N5 বাংলা Learning Project | Unit 1–25",
  description: "Minna no Nihongo beginner progression অনুসরণ করে Unit 1–25-এর independent বাংলা explanation, original examples, practice এবং self-test।",
  alternates: { canonical: "/projects/minna-no-nihongo-n5" },
};

export default function MinnaN5ProjectPage() {
  return <CoursePlayer
    courseKey="minna-n5-bangla-project"
    course={{
      title: "Minna no Nihongo N5 · বাংলা Learning Project",
      subtitle: "Start Here + 25 units · 52 original lessons · Beginner / JLPT N5",
      locale: "bn",
      notice: "Independent learning project—3A Corporation-এর textbook, dialogue, vocabulary list বা exercise এখানে কপি করা হয়নি। মূল বই ও audio-এর সঙ্গে original বাংলা companion হিসেবে ব্যবহার করুন।",
    }}
    sections={minnaN5CompanionSections}
    navigation={{ label: "Projects", href: "/projects", overviewLabel: "সব projects" }}
  />;
}
