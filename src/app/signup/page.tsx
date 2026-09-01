import type { Metadata } from "next";
import { connection } from "next/server";

import { InnerPageShell } from "@/components/inner-page-shell";
import { PublicAuthForm } from "@/components/public-auth-form";
import { TranslatedText } from "@/components/site-preferences";

export const metadata: Metadata = {
  title: "Account তৈরি করুন",
  description: "Halim's Life learning community-তে account তৈরি করুন।",
  robots: { index: false, follow: false },
};

export default async function SignupPage({
  searchParams,
}: {
  searchParams: Promise<{ redirectTo?: string }>;
}) {
  await connection();
  const { redirectTo } = await searchParams;
  const safeRedirectTo = redirectTo?.startsWith("/") && !redirectTo.startsWith("//") ? redirectTo : undefined;

  return (
    <InnerPageShell>
      <section className="public-auth-page container">
        <div>
          <span className="kicker">Join the community</span>
          <h1>
            <TranslatedText
              bn="আপনার learning journey শুরু করুন।"
              en="Start your learning journey."
              ja="学びの旅を始めましょう。"
            />
          </h1>
          <p>
            একটি account দিয়ে future learning resources ও community features
            access করুন।
          </p>
        </div>
        <PublicAuthForm mode="signup" redirectTo={safeRedirectTo} />
      </section>
    </InnerPageShell>
  );
}
