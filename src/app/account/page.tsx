import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { connection } from "next/server";

import { logoutUser } from "@/app/auth-actions";
import { AccountSidebar } from "@/components/account-sidebar";
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

  const displayName = profile?.full_name || "Learner";
  const joinedOn = profile?.created_at
    ? new Date(profile.created_at).toLocaleDateString("bn-BD", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "—";

  return (
    <InnerPageShell>
      <section className="account-page container">
        <div className="account-layout">
          <AccountSidebar displayName={displayName} email={profile?.email || user.email || ""} active="account" />

          <div className="account-main">
            <span className="kicker">আমার Account</span>
            <h1>আসসালামু আলাইকুম, {displayName}</h1>
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
                <span>যোগদানের তারিখ</span>
                <strong>{joinedOn}</strong>
              </div>
              <div>
                <span>Status</span>
                <strong>Active</strong>
              </div>
            </div>
            <form className="account-logout" action={logoutUser}>
              <button type="submit">Logout করুন</button>
            </form>
          </div>
        </div>
      </section>
    </InnerPageShell>
  );
}
