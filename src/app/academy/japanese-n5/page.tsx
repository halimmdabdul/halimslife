import type { Metadata } from "next";

import { CoursePlayer } from "@/components/course-player";

export const metadata: Metadata = {
  title: "Japanese Foundations — JLPT N5 Course",
  description: "Study JLPT N5 Japanese through video lessons, notes and practice tests.",
  alternates: { canonical: "/academy/japanese-n5" },
};

export default function JapaneseN5CoursePage() {
  return <CoursePlayer />;
}
