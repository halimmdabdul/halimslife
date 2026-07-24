import type { Metadata } from "next";
import Link from "next/link";
import { connection } from "next/server";

import { LoginForm } from "./login-form";

export const metadata: Metadata = {
  title: "Admin login",
  description: "Secure administration login for Halim's Life.",
  robots: { index: false, follow: false },
};

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  await connection();
  const { error } = await searchParams;

  return (
    <main className="admin-login-page">
      <section className="admin-login-card">
        <Link className="admin-login-brand" href="/">
          Halim<span>.</span>
        </Link>
        <div className="admin-login-heading">
          <span>Secure administration</span>
          <h1>Welcome back</h1>
          <p>Website content ও users manage করতে sign in করুন।</p>
        </div>
        {error === "forbidden" ? (
          <p className="admin-form-error">
            আপনার account-এ admin role নেই।
          </p>
        ) : null}
        {error === "configuration" ? (
          <p className="admin-form-error">
            Supabase configuration পাওয়া যায়নি।
          </p>
        ) : null}
        <LoginForm />
        <Link className="admin-back-link" href="/">
          ← Website-এ ফিরে যান
        </Link>
      </section>
      <aside className="admin-login-aside">
        <div>
          <span>HALIM&apos;S LIFE</span>
          <h2>Content, community and access—one secure workspace.</h2>
          <p>Supabase Auth · Server-side sessions · Role-based security</p>
        </div>
      </aside>
    </main>
  );
}
