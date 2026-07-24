import type { Metadata } from "next";
import { connection } from "next/server";

import { InnerPageShell } from "@/components/inner-page-shell";
import { PublicAuthForm } from "@/components/public-auth-form";

export const metadata: Metadata = {
  title: "Account তৈরি করুন",
  description: "Halim's Life learning community-তে account তৈরি করুন।",
  robots: { index: false, follow: false },
};

export default async function SignupPage() {
  await connection();

  return (
    <InnerPageShell>
      <section className="public-auth-page container">
        <div>
          <span className="kicker">Join the community</span>
          <h1>আপনার learning journey শুরু করুন।</h1>
          <p>
            একটি account দিয়ে future learning resources ও community features
            access করুন।
          </p>
        </div>
        <PublicAuthForm mode="signup" />
      </section>
    </InnerPageShell>
  );
}
