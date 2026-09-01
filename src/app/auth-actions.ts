"use server";

import { redirect } from "next/navigation";

import { createServerSupabaseClient } from "@/lib/supabase/server";

export type PublicAuthState = {
  error?: string;
  success?: string;
};

// Only allow same-origin relative paths (e.g. "/projects/minna-no-nihongo-n5")
// so this can't be turned into an open redirect via a crafted form value.
function safeRedirectPath(value: FormDataEntryValue | null): string | null {
  const path = String(value ?? "");
  if (!path.startsWith("/") || path.startsWith("//")) return null;
  return path;
}

// supabase-js falls back to JSON.stringify(body) for an auth error message
// when the API response has none of msg/message/error_description/error —
// which renders as the literal text "{}" for some malformed error bodies
// (e.g. certain rate-limit responses). Never show that raw text to users.
function friendlyAuthErrorMessage(message: string): string {
  if (!message || message.trim().startsWith("{")) {
    return "কিছু একটা সমস্যা হয়েছে, আবার চেষ্টা করুন।";
  }
  if (message.toLowerCase().includes("rate limit")) {
    return "অনেকবার চেষ্টা হয়েছে—কিছুক্ষণ পর আবার চেষ্টা করুন।";
  }
  return message;
}

export async function loginUser(
  _previousState: PublicAuthState,
  formData: FormData,
): Promise<PublicAuthState> {
  const email = String(formData.get("email") ?? "")
    .trim()
    .toLowerCase();
  const password = String(formData.get("password") ?? "");

  if (!email.includes("@") || password.length < 6) {
    return { error: "সঠিক email এবং password দিন।" };
  }

  const supabase = await createServerSupabaseClient();

  if (!supabase) {
    return { error: "Authentication service configure করা হয়নি।" };
  }

  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return { error: "Email অথবা password সঠিক নয়।" };
  }

  redirect(safeRedirectPath(formData.get("redirectTo")) ?? "/account");
}

export async function signupUser(
  _previousState: PublicAuthState,
  formData: FormData,
): Promise<PublicAuthState> {
  const fullName = String(formData.get("fullName") ?? "").trim();
  const email = String(formData.get("email") ?? "")
    .trim()
    .toLowerCase();
  const password = String(formData.get("password") ?? "");

  if (fullName.length < 2) {
    return { error: "আপনার পুরো নাম লিখুন।" };
  }

  if (!email.includes("@") || password.length < 8) {
    return {
      error: "সঠিক email এবং কমপক্ষে ৮ অক্ষরের password দিন।",
    };
  }

  const supabase = await createServerSupabaseClient();

  if (!supabase) {
    return { error: "Authentication service configure করা হয়নি।" };
  }

  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { full_name: fullName },
      emailRedirectTo: "https://halimslife.com/account",
    },
  });

  if (error) {
    return { error: friendlyAuthErrorMessage(error.message) };
  }

  if (!data.session) {
    return {
      success:
        "Account তৈরি হয়েছে। Login করার আগে email confirmation link-এ click করুন।",
    };
  }

  redirect(safeRedirectPath(formData.get("redirectTo")) ?? "/account");
}

export async function logoutUser() {
  const supabase = await createServerSupabaseClient();

  if (supabase) {
    await supabase.auth.signOut();
  }

  redirect("/");
}
