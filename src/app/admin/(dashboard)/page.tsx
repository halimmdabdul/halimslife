import type { Metadata } from "next";

import { requireAdmin } from "@/lib/admin-auth";

export const metadata: Metadata = {
  title: "Admin overview",
  robots: { index: false, follow: false },
};

export default async function AdminOverviewPage() {
  const { profile, supabase } = await requireAdmin();

  const [
    { count: userCount },
    { count: postCount },
    { count: adminCount },
    { count: messageCount },
    { count: scholarshipRequestCount },
  ] =
    await Promise.all([
      supabase.from("profiles").select("*", { count: "exact", head: true }),
      supabase.from("posts").select("*", { count: "exact", head: true }),
      supabase
        .from("profiles")
        .select("*", { count: "exact", head: true })
        .eq("role", "admin"),
      supabase
        .from("contact_messages")
        .select("*", { count: "exact", head: true })
        .eq("status", "new")
        .neq("topic", "scholarship-support"),
      supabase
        .from("contact_messages")
        .select("*", { count: "exact", head: true })
        .eq("status", "new")
        .eq("topic", "scholarship-support"),
    ]);

  return (
    <>
      <header className="admin-page-header">
        <div>
          <span>ADMIN OVERVIEW</span>
          <h1>আসসালামু আলাইকুম, {profile.full_name || "Halim"}</h1>
          <p>আপনার website ও community access-এর বর্তমান summary।</p>
        </div>
      </header>
      <section className="admin-stats">
        <article>
          <span>Total users</span>
          <strong>{userCount ?? 0}</strong>
          <p>Registered profiles</p>
        </article>
        <article>
          <span>Administrators</span>
          <strong>{adminCount ?? 0}</strong>
          <p>Accounts with full access</p>
        </article>
        <article>
          <span>Published content</span>
          <strong>{postCount ?? 0}</strong>
          <p>Posts in Supabase</p>
        </article>
        <article>
          <span>New messages</span>
          <strong>{messageCount ?? 0}</strong>
          <p>Contact requests awaiting review</p>
        </article>
        <article>
          <span>Scholarship requests</span>
          <strong>{scholarshipRequestCount ?? 0}</strong>
          <p>Support requests awaiting review</p>
        </article>
      </section>
      <section className="admin-panel">
        <div>
          <span>Security status</span>
          <h2>Server-side authorization active</h2>
          <p>
            প্রতিটি admin page এবং Server Action session ও database role
            verify করে। Supabase RLS unauthorized access block করে।
          </p>
        </div>
        <span className="admin-security-badge">Protected</span>
      </section>
    </>
  );
}
