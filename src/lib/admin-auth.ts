import "server-only";

import { cache } from "react";
import { redirect } from "next/navigation";

import { createServerSupabaseClient } from "@/lib/supabase/server";

export type AdminProfile = {
  id: string;
  email: string;
  full_name: string | null;
  role: "admin";
};

export const requireAdmin = cache(async (): Promise<{
  profile: AdminProfile;
  supabase: NonNullable<
    Awaited<ReturnType<typeof createServerSupabaseClient>>
  >;
}> => {
  const supabase = await createServerSupabaseClient();

  if (!supabase) {
    redirect("/admin/login?error=configuration");
  }

  const {
    data: { user },
    error: userError,
  } = await supabase.auth.getUser();

  if (userError || !user) {
    redirect("/admin/login");
  }

  const { data: profile, error: profileError } = await supabase
    .from("profiles")
    .select("id,email,full_name,role")
    .eq("id", user.id)
    .single();

  if (profileError || profile?.role !== "admin") {
    redirect("/admin/login?error=forbidden");
  }

  return {
    profile: profile as AdminProfile,
    supabase,
  };
});
