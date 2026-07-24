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
