import type { Metadata } from "next";

import { CoursePlayer } from "@/components/course-player";
import { minnaN5CompanionSections } from "@/lib/minna-n5-companion";

export const metadata: Metadata = {
  title: "Minna no Nihongo N5 Bangla Companion | 25 Units",
  description:
    "Minna no Nihongo beginner progression-এর জন্য foundationসহ ২৫ ইউনিট ও ৫২টি মৌলিক বাংলা guide, Japanese example, practice এবং self-test।",
  alternates: {
    canonical: "/academy/minna-no-nihongo-n5-companion",
  },
};

export default function MinnaN5CompanionPage() {
  return (
    <CoursePlayer
      courseKey="minna-n5-bangla-companion"
      course={{
        title: "Minna no Nihongo N5 · Bangla Companion",
        subtitle: "Start Here + 25 units · 52 original lessons · Beginner / JLPT N5",
        locale: "bn",
        notice:
          "Independent study companion—3A Corporation-এর textbook, dialogue, vocabulary list বা exercise এখানে কপি করা হয়নি। মূল বই ও audio-এর সঙ্গে ব্যবহার করুন।",
      }}
      sections={minnaN5CompanionSections}
    />
  );
}
