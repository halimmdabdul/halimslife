import type { Metadata } from "next";

import { CoursePlayer } from "@/components/course-player";
import { getPublishedCourse } from "@/lib/courses";

export const metadata: Metadata = {
  title: "Japanese Foundations — Bengali-Friendly JLPT N5 Course",
  description:
    "Learn JLPT N5 through 10 structured modules and 30 Bengali-friendly lessons covering kana, grammar, reading, everyday communication and exam practice.",
  alternates: { canonical: "/academy/japanese-n5" },
};

export default async function JapaneseN5CoursePage() {
  const course = await getPublishedCourse("japanese-n5");

  if (
    !course ||
    course.course_sections.every((section) => section.lectures.length === 0)
  ) {
    return <CoursePlayer courseKey="japanese-n5" />;
  }

  return (
    <CoursePlayer
      courseKey="japanese-n5"
      course={{
        title: course.title,
        subtitle: course.subtitle || `${course.category} · ${course.level}`,
      }}
      sections={course.course_sections.filter((section) => section.lectures.length > 0).map((section) => ({
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
          materials: lecture.lecture_materials.map((material) => ({
            title: material.title,
            url: material.file_url,
            fileType: material.file_type,
            fileSize: material.file_size,
          })),
          videoUrl: lecture.video_url,
        })),
      }))}
    />
  );
}
