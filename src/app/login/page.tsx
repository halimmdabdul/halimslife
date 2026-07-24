import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { connection } from "next/server";

import { InnerPageShell } from "@/components/inner-page-shell";
import { PublicAuthForm } from "@/components/public-auth-form";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Login",
  description: "Halim's Life community account-এ login করুন।",
  robots: { index: false, follow: false },
};

export default async function LoginPage() {
  await connection();
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = (await supabase?.auth.getUser()) ?? { data: { user: null } };

  if (user) {
    redirect("/account");
  }

  return (
    <InnerPageShell>
      <section className="public-auth-page container">
        <div>
          <span className="kicker">Member login</span>
          <h1>আবার স্বাগতম।</h1>
          <p>আপনার account ও learning community-তে প্রবেশ করুন।</p>
        </div>
        <PublicAuthForm mode="login" />
      </section>
    </InnerPageShell>
  );
}
