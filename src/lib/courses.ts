import "server-only";

import { cache } from "react";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export type PublicCourse = {
  id: number;
  slug: string;
  title: string;
  subtitle: string | null;
  description: string | null;
  category: string;
  level: string;
};

export type PublicLecture = {
  id: number;
  title: string;
  lecture_type: "video" | "reading" | "quiz";
  duration: string | null;
  video_url: string | null;
  content: string | null;
  position: number;
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
  const { data, error } = await supabase.from("courses").select("id,slug,title,subtitle,description,category,level").eq("published", true).order("created_at");
  return error ? [] : (data ?? []) as PublicCourse[];
});

export const getPublishedCourse = cache(async (slug: string): Promise<PublicCourseDetail | null> => {
  const supabase = await createServerSupabaseClient();
  if (!supabase) return null;
  const { data, error } = await supabase
    .from("courses")
    .select("id,slug,title,subtitle,description,category,level,course_sections(id,title,position,lectures(id,title,lecture_type,duration,video_url,content,position))")
    .eq("slug", slug)
    .eq("published", true)
    .single();
  if (error || !data) return null;
  const course = data as unknown as PublicCourseDetail;
  course.course_sections.sort((a, b) => a.position - b.position || a.id - b.id);
  course.course_sections.forEach((section) => section.lectures.sort((a, b) => a.position - b.position || a.id - b.id));
  return course;
});
