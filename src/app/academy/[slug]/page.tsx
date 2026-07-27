import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CoursePlayer } from "@/components/course-player";
import { getPublishedCourse } from "@/lib/courses";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const course = await getPublishedCourse(slug);
  if (!course) return { title: "Course not found" };
  return { title: course.title, description: course.description || course.subtitle || undefined, alternates: { canonical: `/academy/${slug}` } };
}

export default async function DynamicCoursePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const course = await getPublishedCourse(slug);
  if (!course || course.course_sections.length === 0) notFound();

  return (
    <CoursePlayer
      course={{ title: course.title, subtitle: course.subtitle || `${course.category} · ${course.level}` }}
      sections={course.course_sections.map((section) => ({
        title: section.title,
        lessons: section.lectures.map((lecture) => ({
          title: lecture.title,
          duration: lecture.duration || (lecture.lecture_type === "quiz" ? "Test" : "Lesson"),
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
