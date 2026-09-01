import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { connection } from "next/server";

import { AccountSidebar } from "@/components/account-sidebar";
import { InnerPageShell } from "@/components/inner-page-shell";
import { RichTextContent } from "@/components/rich-text-content";
import { ScholarshipSupportForm } from "@/components/scholarship-support-form";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Scholarship Support",
  robots: { index: false, follow: false },
};

type SupportRequest = {
  id: number;
  subject: string;
  status: "new" | "read" | "replied";
  admin_reply: string | null;
  replied_at: string | null;
  created_at: string;
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

  const { data: previousRequests } = await supabase
    .from("contact_messages")
    .select("id,subject,status,admin_reply,replied_at,created_at")
    .eq("topic", "scholarship-support")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false });

  const displayName = profile?.full_name || "Learner";
  const email = profile?.email || user.email || "";
  const requests = (previousRequests ?? []) as SupportRequest[];

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
            <details className="account-support-toggle" open={requests.length === 0}>
              <summary>নতুন Scholarship Support request পাঠান</summary>
              <ScholarshipSupportForm defaultName={displayName} defaultEmail={email} />
            </details>

            {requests.length > 0 ? (
              <div className="account-support-history">
                <h2>আপনার আগের requests</h2>
                <div className="account-support-list">
                  {requests.map((request) => (
                    <article key={request.id}>
                      <header>
                        <div>
                          <span className={`message-status ${request.status}`}>{request.status === "replied" ? "Replied" : request.status === "read" ? "Read" : "Pending"}</span>
                          <strong>{request.subject}</strong>
                        </div>
                        <time dateTime={request.created_at}>
                          {new Intl.DateTimeFormat("bn-BD", { year: "numeric", month: "long", day: "numeric" }).format(new Date(request.created_at))}
                        </time>
                      </header>
                      {request.admin_reply ? (
                        <div className="account-support-reply">
                          <span>আমার reply {request.replied_at ? `· ${new Intl.DateTimeFormat("bn-BD", { year: "numeric", month: "long", day: "numeric" }).format(new Date(request.replied_at))}` : ""}</span>
                          <RichTextContent content={request.admin_reply} />
                        </div>
                      ) : (
                        <p className="account-support-pending">এখনো reply দেওয়া হয়নি—সাধারণত ১–২ working day-এর মধ্যে reply পাবেন।</p>
                      )}
                    </article>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </InnerPageShell>
  );
}
