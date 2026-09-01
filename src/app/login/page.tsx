import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { connection } from "next/server";

import { InnerPageShell } from "@/components/inner-page-shell";
import { PublicAuthForm } from "@/components/public-auth-form";
import { TranslatedText } from "@/components/site-preferences";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Login",
  description: "Halim's Life community account-এ login করুন।",
  robots: { index: false, follow: false },
};

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ redirectTo?: string }>;
}) {
  await connection();
  const { redirectTo } = await searchParams;
  const safeRedirectTo = redirectTo?.startsWith("/") && !redirectTo.startsWith("//") ? redirectTo : undefined;
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = (await supabase?.auth.getUser()) ?? { data: { user: null } };

  if (user) {
    redirect(safeRedirectTo ?? "/account");
  }

  return (
    <InnerPageShell>
      <section className="public-auth-page container">
        <div>
          <span className="kicker">Member login</span>
          <h1>
            <TranslatedText
              bn="আবার স্বাগতম।"
              en="Welcome back."
              ja="おかえりなさい。"
            />
          </h1>
          <p>
            <TranslatedText
              bn="আপনার account ও learning community-তে প্রবেশ করুন।"
              en="Access your account and learning community."
              ja="アカウントと学習コミュニティにアクセスします。"
            />
          </p>
        </div>
        <PublicAuthForm mode="login" redirectTo={safeRedirectTo} />
      </section>
    </InnerPageShell>
  );
}
