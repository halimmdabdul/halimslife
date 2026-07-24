import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { connection } from "next/server";

import { logoutUser } from "@/app/auth-actions";
import { InnerPageShell } from "@/components/inner-page-shell";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "আমার Account",
  robots: { index: false, follow: false },
};

export default async function AccountPage() {
  await connection();
  const supabase = await createServerSupabaseClient();

  if (!supabase) {
    redirect("/login");
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name,email,role,created_at")
    .eq("id", user.id)
    .single();

  return (
    <InnerPageShell>
      <section className="account-page container">
        <span className="kicker">আমার Account</span>
        <h1>আসসালামু আলাইকুম, {profile?.full_name || "Learner"}</h1>
        <div className="account-card">
          <div>
            <span>Email</span>
            <strong>{profile?.email || user.email}</strong>
          </div>
          <div>
            <span>Role</span>
            <strong>{profile?.role || "user"}</strong>
          </div>
          <div>
            <span>Status</span>
            <strong>Active</strong>
          </div>
        </div>
        <form action={logoutUser}>
          <button type="submit">Logout করুন</button>
        </form>
      </section>
    </InnerPageShell>
  );
}
