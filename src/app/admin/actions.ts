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

type AdminSupabase = Awaited<ReturnType<typeof requireAdmin>>["supabase"];

const courseImageMimeTypes = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/avif",
]);

function courseImageFromForm(formData: FormData) {
  const fileValue = formData.get("featuredImage");
  const file = fileValue instanceof File && fileValue.size > 0 ? fileValue : null;
  const urlValue = optionalText(formData, "featuredImageUrl");
  let externalUrl: string | null = null;

  if (urlValue) {
    try {
      const url = new URL(urlValue);
      if (url.protocol !== "https:" && url.protocol !== "http:") throw new Error();
      externalUrl = url.toString();
    } catch {
      throw new Error("Featured image URL must be a valid HTTP or HTTPS address.");
    }
  }
  if (file && externalUrl) throw new Error("Choose either an image upload or an external image URL.");
  if (file && (file.size > 3 * 1024 * 1024 || !courseImageMimeTypes.has(file.type))) {
    throw new Error("Featured images must be JPEG, PNG, WebP, or AVIF and 3 MB or smaller.");
  }
  return { file, externalUrl };
}

async function uploadCourseImage(
  supabase: AdminSupabase,
  courseId: number,
  file: File,
) {
  const safeName = file.name.replace(/[^A-Za-z0-9._-]+/g, "-").replace(/^-+|-+$/g, "") || "course-image";
  const storagePath = `${courseId}/${crypto.randomUUID()}-${safeName}`;
  const { error } = await supabase.storage
    .from("course-images")
    .upload(storagePath, new Uint8Array(await file.arrayBuffer()), {
      contentType: file.type,
      cacheControl: "3600",
      upsert: false,
    });
  if (error) throw new Error(`Featured image upload failed: ${error.message}`);
  const publicUrl = supabase.storage.from("course-images").getPublicUrl(storagePath).data.publicUrl;
  return { publicUrl, storagePath };
}

export async function createCourse(formData: FormData) {
  const { supabase } = await requireAdmin();
  const slug = requiredText(formData, "slug").toLowerCase();
  const image = courseImageFromForm(formData);
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    throw new Error("Slug must contain lowercase letters, numbers, and hyphens only.");
  }

  const { data: course, error } = await supabase
    .from("courses")
    .insert({
      slug,
      title: requiredText(formData, "title"),
      subtitle: optionalText(formData, "subtitle"),
      description: optionalText(formData, "description"),
      category: requiredText(formData, "category"),
      level: requiredText(formData, "level"),
      published: formData.get("published") === "on",
      cover_image: image.externalUrl,
    })
    .select("id")
    .single();
  if (error?.code === "23505") {
    throw new Error("A course with this title or URL slug already exists.");
  }
  if (error) throw new Error(`Course creation failed: ${error.message}`);
  if (image.file && course) {
    try {
      const uploaded = await uploadCourseImage(supabase, course.id, image.file);
      const { error: updateError } = await supabase
        .from("courses")
        .update({ cover_image: uploaded.publicUrl, cover_storage_path: uploaded.storagePath })
        .eq("id", course.id);
      if (updateError) {
        await supabase.storage.from("course-images").remove([uploaded.storagePath]);
        throw updateError;
      }
    } catch (uploadError) {
      await supabase.from("courses").delete().eq("id", course.id);
      throw uploadError;
    }
  }
  revalidatePath("/admin/courses");
  revalidatePath("/academy");
}

export async function updateCourse(formData: FormData) {
  const { supabase } = await requireAdmin();
  const courseId = Number(formData.get("courseId"));
  const slug = requiredText(formData, "slug").toLowerCase();
  const image = courseImageFromForm(formData);
  const removeImage = formData.get("removeFeaturedImage") === "on";
  if (!Number.isInteger(courseId) || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
    throw new Error("Invalid course update request.");
  }

  const { data: currentCourse } = await supabase
    .from("courses")
    .select("cover_storage_path")
    .eq("id", courseId)
    .single();
  let uploadedImage: { publicUrl: string; storagePath: string } | null = null;
  if (image.file) uploadedImage = await uploadCourseImage(supabase, courseId, image.file);

  const imageValues = uploadedImage
    ? { cover_image: uploadedImage.publicUrl, cover_storage_path: uploadedImage.storagePath }
    : image.externalUrl
      ? { cover_image: image.externalUrl, cover_storage_path: null }
      : removeImage
        ? { cover_image: null, cover_storage_path: null }
        : {};

  const { error } = await supabase
    .from("courses")
    .update({
      slug,
      title: requiredText(formData, "title"),
      subtitle: optionalText(formData, "subtitle"),
      description: optionalText(formData, "description"),
      category: requiredText(formData, "category"),
      level: requiredText(formData, "level"),
      ...imageValues,
    })
    .eq("id", courseId);
  if (error) {
    if (uploadedImage) await supabase.storage.from("course-images").remove([uploadedImage.storagePath]);
    if (error.code === "23505") {
      throw new Error("A course with this title or URL slug already exists.");
    }
    throw new Error(`Course update failed: ${error.message}`);
  }
  if ((uploadedImage || image.externalUrl || removeImage) && currentCourse?.cover_storage_path) {
    await supabase.storage.from("course-images").remove([currentCourse.cover_storage_path]);
  }
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
  if (error?.code === "23505") {
    throw new Error("A lecture with this title already exists in this topic.");
  }
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
  if (error?.code === "23505") {
    throw new Error("A lecture with this title already exists in this topic.");
  }
  if (error) throw new Error(`Lecture update failed: ${error.message}`);
  revalidatePath("/admin/courses");
  revalidatePath("/academy");
}

const materialMimeTypes = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-powerpoint",
  "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/zip",
  "text/plain",
]);

function externalMaterialUrl(formData: FormData) {
  const value = optionalText(formData, "externalUrl");
  if (!value) return null;
  try {
    const url = new URL(value);
    if (url.protocol !== "https:" && url.protocol !== "http:") throw new Error();
    return url.toString();
  } catch {
    throw new Error("Material URL must be a valid HTTP or HTTPS address.");
  }
}

export async function createLectureMaterial(formData: FormData) {
  const { supabase } = await requireAdmin();
  const lectureId = Number(formData.get("lectureId"));
  const position = Number(formData.get("position") ?? 0);
  const fileValue = formData.get("file");
  const file = fileValue instanceof File && fileValue.size > 0 ? fileValue : null;
  const externalUrl = externalMaterialUrl(formData);
  if (!Number.isInteger(lectureId) || !Number.isInteger(position) || position < 0 || (!file && !externalUrl) || (file && externalUrl)) {
    throw new Error("Choose either one file or one external URL for the material.");
  }

  let fileUrl = externalUrl ?? "";
  let storagePath: string | null = null;
  let fileType = optionalText(formData, "fileType");
  let fileSize: number | null = null;

  if (file) {
    if (file.size > 3 * 1024 * 1024) throw new Error("Uploaded materials must be 3 MB or smaller.");
    if (!materialMimeTypes.has(file.type)) throw new Error("Unsupported material file type.");
    const safeName = file.name.replace(/[^A-Za-z0-9._-]+/g, "-").replace(/^-+|-+$/g, "") || "material";
    storagePath = `${lectureId}/${crypto.randomUUID()}-${safeName}`;
    const { error: uploadError } = await supabase.storage
      .from("course-materials")
      .upload(storagePath, new Uint8Array(await file.arrayBuffer()), {
        contentType: file.type,
        cacheControl: "3600",
        upsert: false,
      });
    if (uploadError) throw new Error(`Material upload failed: ${uploadError.message}`);
    fileUrl = supabase.storage.from("course-materials").getPublicUrl(storagePath).data.publicUrl;
    fileType = fileType || file.name.split(".").pop()?.toUpperCase() || file.type;
    fileSize = file.size;
  }

  const { error } = await supabase.from("lecture_materials").insert({
    lecture_id: lectureId,
    title: requiredText(formData, "title"),
    file_url: fileUrl,
    storage_path: storagePath,
    file_type: fileType,
    file_size: fileSize,
    position,
  });
  if (error) {
    if (storagePath) await supabase.storage.from("course-materials").remove([storagePath]);
    throw new Error(`Material creation failed: ${error.message}`);
  }
  revalidatePath("/admin/courses");
  revalidatePath("/academy");
}

export async function updateLectureMaterial(formData: FormData) {
  const { supabase } = await requireAdmin();
  const materialId = Number(formData.get("materialId"));
  const position = Number(formData.get("position") ?? 0);
  const externalUrl = externalMaterialUrl(formData);
  if (!Number.isInteger(materialId) || !Number.isInteger(position) || position < 0) {
    throw new Error("Invalid material update request.");
  }
  const values: Record<string, string | number | null> = {
    title: requiredText(formData, "title"),
    file_type: optionalText(formData, "fileType"),
    position,
  };
  const { data: current } = await supabase
    .from("lecture_materials")
    .select("storage_path")
    .eq("id", materialId)
    .single();
  if (externalUrl) {
    values.file_url = externalUrl;
    values.storage_path = null;
    values.file_size = null;
  }
  const { error } = await supabase.from("lecture_materials").update(values).eq("id", materialId);
  if (error) throw new Error(`Material update failed: ${error.message}`);
  if (externalUrl && current?.storage_path) {
    await supabase.storage.from("course-materials").remove([current.storage_path]);
  }
  revalidatePath("/admin/courses");
  revalidatePath("/academy");
}

export async function deleteLectureMaterial(formData: FormData) {
  const { supabase } = await requireAdmin();
  const materialId = Number(formData.get("materialId"));
  if (!Number.isInteger(materialId)) throw new Error("Invalid material delete request.");
  const { data } = await supabase.from("lecture_materials").select("storage_path").eq("id", materialId).single();
  const { error } = await supabase.from("lecture_materials").delete().eq("id", materialId);
  if (error) throw new Error(`Material deletion failed: ${error.message}`);
  if (data?.storage_path) await supabase.storage.from("course-materials").remove([data.storage_path]);
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
  const { data: course } = itemType === "course"
    ? await supabase.from("courses").select("cover_storage_path").eq("id", itemId).single()
    : { data: null };
  const { error } = await supabase.from(table).delete().eq("id", itemId);
  if (error) throw new Error(`Delete failed: ${error.message}`);
  if (course?.cover_storage_path) {
    await supabase.storage.from("course-images").remove([course.cover_storage_path]);
  }
  revalidatePath("/admin/courses");
  revalidatePath("/academy");
}
