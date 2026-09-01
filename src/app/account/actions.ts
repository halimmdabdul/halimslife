"use server";

import { revalidatePath } from "next/cache";

import { createServerSupabaseClient } from "@/lib/supabase/server";

export type ProfileUpdateState = {
  error?: string;
  success?: boolean;
};

export async function updateOwnName(
  _previousState: ProfileUpdateState,
  formData: FormData,
): Promise<ProfileUpdateState> {
  const fullName = String(formData.get("fullName") ?? "").trim();

  if (fullName.length < 2 || fullName.length > 80) {
    return { error: "নাম কমপক্ষে ২ অক্ষরের হতে হবে।" };
  }

  const supabase = await createServerSupabaseClient();
  if (!supabase) {
    return { error: "Authentication service configure করা হয়নি।" };
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return { error: "আপনি login করেননি।" };
  }

  const { error } = await supabase
    .from("profiles")
    .update({ full_name: fullName, updated_at: new Date().toISOString() })
    .eq("id", user.id);

  if (error) {
    return { error: "নাম আপডেট করা যায়নি, আবার চেষ্টা করুন।" };
  }

  revalidatePath("/account");
  return { success: true };
}
