import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { connection } from "next/server";

import { AccountSidebar } from "@/components/account-sidebar";
import { InnerPageShell } from "@/components/inner-page-shell";
import { ScholarshipSupportForm } from "@/components/scholarship-support-form";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Scholarship Support",
  robots: { index: false, follow: false },
};

export default async function ScholarshipSupportPage() {
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
    .select("full_name,email")
    .eq("id", user.id)
    .single();

  const displayName = profile?.full_name || "Learner";
  const email = profile?.email || user.email || "";

  return (
    <InnerPageShell>
      <section className="account-page container">
        <div className="account-layout">
          <AccountSidebar displayName={displayName} email={email} active="scholarship-support" />

          <div className="account-main">
            <span className="kicker">Scholarship Support</span>
            <h1>আপনার scholarship journey-তে সাহায্য চান?</h1>
            <p className="account-support-intro">
              আপনার target country, degree এবং বর্তমান পটভূমি জানান—personalized guidance দেওয়ার চেষ্টা করব।
            </p>
            <ScholarshipSupportForm defaultName={displayName} defaultEmail={email} />
          </div>
        </div>
      </section>
    </InnerPageShell>
  );
}
