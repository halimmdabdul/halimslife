import "server-only";

import { cache } from "react";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export type PublicCourse = {
  id: number;
  slug: string;
  title: string;
  subtitle: string | null;
  description: string | null;
  cover_image: string | null;
  category: string;
  level: string;
};

export type PublicLectureMaterial = {
  id: number;
  title: string;
  file_url: string;
  file_type: string | null;
  file_size: number | null;
  position: number;
};

export type PublicLecture = {
  id: number;
  title: string;
  lecture_type: "video" | "reading" | "quiz";
  duration: string | null;
  video_url: string | null;
  content: string | null;
  overview: string | null;
  study_notes: string | null;
  practice_test: {
    question?: string;
    options?: string[];
    correctAnswer?: string;
  } | null;
  position: number;
  lecture_materials: PublicLectureMaterial[];
};

export type PublicCourseSection = {
  id: number;
  title: string;
  position: number;
  lectures: PublicLecture[];
};

export type PublicCourseDetail = PublicCourse & { course_sections: PublicCourseSection[] };

export const getPublishedCourses = cache(async (): Promise<PublicCourse[]> => {
  const supabase = await createServerSupabaseClient();
  if (!supabase) return [];
  const { data, error } = await supabase.from("courses").select("id,slug,title,subtitle,description,cover_image,category,level").eq("published", true).order("created_at");
  return error ? [] : (data ?? []) as PublicCourse[];
});

export const getPublishedCourse = cache(async (slug: string): Promise<PublicCourseDetail | null> => {
  const supabase = await createServerSupabaseClient();
  if (!supabase) return null;
  const { data, error } = await supabase
    .from("courses")
    .select("id,slug,title,subtitle,description,cover_image,category,level,course_sections(id,title,position,lectures(id,title,lecture_type,duration,video_url,content,overview,study_notes,practice_test,position,lecture_materials(id,title,file_url,file_type,file_size,position)))")
    .eq("slug", slug)
    .eq("published", true)
    .single();
  if (error || !data) return null;
  const course = data as unknown as PublicCourseDetail;
  course.course_sections.sort((a, b) => a.position - b.position || a.id - b.id);
  course.course_sections.forEach((section) => {
    section.lectures.sort((a, b) => a.position - b.position || a.id - b.id);
    section.lectures.forEach((lecture) =>
      lecture.lecture_materials.sort((a, b) => a.position - b.position || a.id - b.id),
    );
  });
  return course;
});
