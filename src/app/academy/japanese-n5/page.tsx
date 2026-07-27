import type { Metadata } from "next";

import { CoursePlayer } from "@/components/course-player";
import { getPublishedCourse } from "@/lib/courses";

export const metadata: Metadata = {
  title: "Japanese Foundations — JLPT N5 Course",
  description: "Study JLPT N5 Japanese through video lessons, notes and practice tests.",
  alternates: { canonical: "/academy/japanese-n5" },
};

export default async function JapaneseN5CoursePage() {
  const course = await getPublishedCourse("japanese-n5");

  if (!course || course.course_sections.length === 0) {
    return <CoursePlayer />;
  }

  return (
    <CoursePlayer
      course={{
        title: course.title,
        subtitle: course.subtitle || `${course.category} · ${course.level}`,
      }}
      sections={course.course_sections.map((section) => ({
        title: section.title,
        lessons: section.lectures.map((lecture) => ({
          title: lecture.title,
          duration:
            lecture.duration ||
            (lecture.lecture_type === "quiz" ? "Test" : "Lesson"),
          type: lecture.lecture_type,
          content: lecture.content,
          overview: lecture.overview,
          studyNotes: lecture.study_notes,
          practiceTest: lecture.practice_test,
          videoUrl: lecture.video_url,
        })),
      }))}
    />
  );
}
