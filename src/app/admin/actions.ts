"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { requireAdmin } from "@/lib/admin-auth";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export type LoginState = {
  error?: string;
};

export async function loginAdmin(
  _previousState: LoginState,
  formData: FormData,
): Promise<LoginState> {
  const email = String(formData.get("email") ?? "")
    .trim()
    .toLowerCase();
  const password = String(formData.get("password") ?? "");

  if (!email || !email.includes("@") || password.length < 6) {
    return { error: "সঠিক email ও password দিন।" };
  }

  const supabase = await createServerSupabaseClient();

  if (!supabase) {
    return { error: "Supabase environment variables configure করা হয়নি।" };
  }

  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error || !data.user) {
    return { error: "Email অথবা password সঠিক নয়।" };
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", data.user.id)
    .single();

  if (profile?.role !== "admin") {
    await supabase.auth.signOut();
    return { error: "এই account-এর admin permission নেই।" };
  }

  redirect("/admin");
}

export async function logoutAdmin() {
  const supabase = await createServerSupabaseClient();

  if (supabase) {
    await supabase.auth.signOut();
  }

  redirect("/admin/login");
}

export async function updateUserRole(formData: FormData) {
  const { profile, supabase } = await requireAdmin();
  const userId = String(formData.get("userId") ?? "");
  const role = String(formData.get("role") ?? "");

  if (!userId || (role !== "admin" && role !== "user")) {
    throw new Error("Invalid role update request.");
  }

  if (userId === profile.id && role !== "admin") {
    throw new Error("You cannot remove your own admin role.");
  }

  const { error } = await supabase
    .from("profiles")
    .update({ role, updated_at: new Date().toISOString() })
    .eq("id", userId);

  if (error) {
    throw new Error("Role update failed.");
  }

  revalidatePath("/admin");
  revalidatePath("/admin/users");
}

function requiredText(formData: FormData, name: string) {
  const value = String(formData.get(name) ?? "").trim();
  if (!value) throw new Error(`${name} is required.`);
  return value;
}

function optionalText(formData: FormData, name: string) {
  return String(formData.get(name) ?? "").trim() || null;
}

function practiceTestFromForm(formData: FormData) {
  const question = optionalText(formData, "testQuestion");
  const options = [1, 2, 3, 4]
    .map((number) => optionalText(formData, `testOption${number}`))
    .filter((option): option is string => Boolean(option));
  const correctOption = Number(formData.get("testCorrectOption") ?? 0);

  if (!question && options.length === 0 && correctOption === 0) return {};
  if (!question || options.length < 2 || !Number.isInteger(correctOption) || correctOption < 1 || correctOption > options.length) {
    throw new Error("Practice test needs a question, at least two options, and a valid correct option.");
  }
  return { question, options, correctAnswer: options[correctOption - 1] };
}

export async function createCourse(formData: FormData) {
  const { supabase } = await requireAdmin();
  const slug = requiredText(formData, "slug").toLowerCase();
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    throw new Error("Slug must contain lowercase letters, numbers, and hyphens only.");
  }

  const { error } = await supabase.from("courses").insert({
    slug,
    title: requiredText(formData, "title"),
    subtitle: optionalText(formData, "subtitle"),
    description: optionalText(formData, "description"),
    category: requiredText(formData, "category"),
    level: requiredText(formData, "level"),
    published: formData.get("published") === "on",
  });
  if (error) throw new Error(`Course creation failed: ${error.message}`);
  revalidatePath("/admin/courses");
  revalidatePath("/academy");
}

export async function updateCourse(formData: FormData) {
  const { supabase } = await requireAdmin();
  const courseId = Number(formData.get("courseId"));
  const slug = requiredText(formData, "slug").toLowerCase();
  if (!Number.isInteger(courseId) || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    throw new Error("Invalid course update request.");
  }

  const { error } = await supabase
    .from("courses")
    .update({
      slug,
      title: requiredText(formData, "title"),
      subtitle: optionalText(formData, "subtitle"),
      description: optionalText(formData, "description"),
      category: requiredText(formData, "category"),
      level: requiredText(formData, "level"),
    })
    .eq("id", courseId);
  if (error) throw new Error(`Course update failed: ${error.message}`);
  revalidatePath("/admin/courses");
  revalidatePath("/academy");
}

export async function createCourseSection(formData: FormData) {
  const { supabase } = await requireAdmin();
  const courseId = Number(formData.get("courseId"));
  const position = Number(formData.get("position") ?? 0);
  if (!Number.isInteger(courseId) || !Number.isInteger(position) || position < 0) {
    throw new Error("Invalid course section request.");
  }
  const { error } = await supabase.from("course_sections").insert({
    course_id: courseId,
    title: requiredText(formData, "title"),
    position,
  });
  if (error) throw new Error(`Section creation failed: ${error.message}`);
  revalidatePath("/admin/courses");
}

export async function updateCourseSection(formData: FormData) {
  const { supabase } = await requireAdmin();
  const sectionId = Number(formData.get("sectionId"));
  const position = Number(formData.get("position") ?? 0);
  if (!Number.isInteger(sectionId) || !Number.isInteger(position) || position < 0) {
    throw new Error("Invalid section update request.");
  }
  const { error } = await supabase
    .from("course_sections")
    .update({ title: requiredText(formData, "title"), position })
    .eq("id", sectionId);
  if (error) throw new Error(`Section update failed: ${error.message}`);
  revalidatePath("/admin/courses");
  revalidatePath("/academy");
}

export async function createLecture(formData: FormData) {
  const { supabase } = await requireAdmin();
  const sectionId = Number(formData.get("sectionId"));
  const position = Number(formData.get("position") ?? 0);
  const lectureType = String(formData.get("lectureType") ?? "video");
  if (!Number.isInteger(sectionId) || !Number.isInteger(position) || position < 0 || !["video", "reading", "quiz"].includes(lectureType)) {
    throw new Error("Invalid lecture request.");
  }
  const { error } = await supabase.from("lectures").insert({
    section_id: sectionId,
    title: requiredText(formData, "title"),
    lecture_type: lectureType,
    duration: optionalText(formData, "duration"),
    video_url: optionalText(formData, "videoUrl"),
    content: optionalText(formData, "content"),
    overview: optionalText(formData, "overview"),
    study_notes: optionalText(formData, "studyNotes"),
    practice_test: practiceTestFromForm(formData),
    position,
    is_preview: formData.get("isPreview") === "on",
  });
  if (error) throw new Error(`Lecture creation failed: ${error.message}`);
  revalidatePath("/admin/courses");
}

export async function updateLecture(formData: FormData) {
  const { supabase } = await requireAdmin();
  const lectureId = Number(formData.get("lectureId"));
  const position = Number(formData.get("position") ?? 0);
  const lectureType = String(formData.get("lectureType") ?? "video");
  if (!Number.isInteger(lectureId) || !Number.isInteger(position) || position < 0 || !["video", "reading", "quiz"].includes(lectureType)) {
    throw new Error("Invalid lecture update request.");
  }
  const { error } = await supabase
    .from("lectures")
    .update({
      title: requiredText(formData, "title"),
      lecture_type: lectureType,
      duration: optionalText(formData, "duration"),
      video_url: optionalText(formData, "videoUrl"),
      content: optionalText(formData, "content"),
      overview: optionalText(formData, "overview"),
      study_notes: optionalText(formData, "studyNotes"),
      practice_test: practiceTestFromForm(formData),
      position,
      is_preview: formData.get("isPreview") === "on",
    })
    .eq("id", lectureId);
  if (error) throw new Error(`Lecture update failed: ${error.message}`);
  revalidatePath("/admin/courses");
  revalidatePath("/academy");
}

export async function toggleCoursePublished(formData: FormData) {
  const { supabase } = await requireAdmin();
  const courseId = Number(formData.get("courseId"));
  const published = formData.get("published") === "true";
  if (!Number.isInteger(courseId)) throw new Error("Invalid course request.");
  const { error } = await supabase.from("courses").update({ published }).eq("id", courseId);
  if (error) throw new Error(`Course update failed: ${error.message}`);
  revalidatePath("/admin/courses");
  revalidatePath("/academy");
}

export async function deleteCourseItem(formData: FormData) {
  const { supabase } = await requireAdmin();
  const itemType = String(formData.get("itemType") ?? "");
  const itemId = Number(formData.get("itemId"));
  const table = itemType === "course" ? "courses" : itemType === "section" ? "course_sections" : itemType === "lecture" ? "lectures" : null;
  if (!table || !Number.isInteger(itemId)) throw new Error("Invalid delete request.");
  const { error } = await supabase.from(table).delete().eq("id", itemId);
  if (error) throw new Error(`Delete failed: ${error.message}`);
  revalidatePath("/admin/courses");
  revalidatePath("/academy");
}
