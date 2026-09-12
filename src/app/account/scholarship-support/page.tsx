import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { connection } from "next/server";

import { AccountSidebar } from "@/components/account-sidebar";
import { InnerPageShell } from "@/components/inner-page-shell";
import { RichTextContent } from "@/components/rich-text-content";
import { ScholarshipSupportForm } from "@/components/scholarship-support-form";
import { ScholarshipFollowUpForm } from "@/components/scholarship-followup-form";
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

type ThreadReply = {
  id: number;
  request_id: number;
  sender: "admin" | "user";
  message: string;
  created_at: string;
};

type ScholarshipRecommendation = {
  id: number;
  request_id: number;
  scholarship_name: string;
  university: string;
  degree_level: string | null;
  country: string | null;
  deadline: string | null;
  link: string | null;
  notes: string | null;
  created_at: string;
};

const recommendationDateFormatter = new Intl.DateTimeFormat("bn-BD", { year: "numeric", month: "long", day: "numeric" });

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

  const requestIds = requests.map((request) => request.id);
  const recommendationsByRequest = new Map<number, ScholarshipRecommendation[]>();
  const repliesByRequest = new Map<number, ThreadReply[]>();
  if (requestIds.length > 0) {
    const [{ data: recommendationRows }, { data: replyRows }] = await Promise.all([
      supabase
        .from("scholarship_recommendations")
        .select("id,request_id,scholarship_name,university,degree_level,country,deadline,link,notes,created_at")
        .in("request_id", requestIds)
        .order("created_at", { ascending: false }),
      supabase
        .from("contact_message_replies")
        .select("id,request_id,sender,message,created_at")
        .in("request_id", requestIds)
        .order("created_at", { ascending: true }),
    ]);
    for (const recommendation of (recommendationRows ?? []) as ScholarshipRecommendation[]) {
      const existing = recommendationsByRequest.get(recommendation.request_id) ?? [];
      existing.push(recommendation);
      recommendationsByRequest.set(recommendation.request_id, existing);
    }
    for (const reply of (replyRows ?? []) as ThreadReply[]) {
      const existing = repliesByRequest.get(reply.request_id) ?? [];
      existing.push(reply);
      repliesByRequest.set(reply.request_id, existing);
    }
  }

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

            <div className="account-support-howto">
              <h2>কীভাবে কাজ করে</h2>
              <ol>
                <li>
                  <strong>ফর্ম পূরণ করুন।</strong> Target country, degree level, বর্তমান শিক্ষাগত পটভূমি এবং ঠিক কী ধরনের সাহায্য দরকার (যেমনঃ কোন scholarship-এর জন্য apply করা উচিত, SOP review, professor email) লিখুন। যত স্পষ্ট করে লিখবেন, guidance তত সঠিক ও personalized হবে।
                </li>
                <li>
                  <strong>CV/Transcript link দিন (থাকলে ভালো)।</strong> Google Drive link শেয়ার করলে আপনার প্রোফাইল দেখে আরও নির্দিষ্টভাবে scholarship সাজেস্ট করা সহজ হয়—optional, কিন্তু recommend করা হয়।
                </li>
                <li>
                  <strong>Request পাঠান।</strong> Submit করার সাথে সাথে request save হয়ে যাবে, এবং সাধারণত ১–২ working day-এর মধ্যে reply পাবেন—নিচের &quot;আপনার আগের requests&quot; অংশে reply দেখতে পাবেন এবং email-এও notification যাবে।
                </li>
                <li>
                  <strong>প্রয়োজনে reply দিন।</strong> Reply পড়ার পর নতুন প্রশ্ন থাকলে বা আরও তথ্য দিতে চাইলে reply বক্সে লিখে পাঠাতে পারবেন—এটা একটা চলমান কথোপকথনের মতো, শুধু একবার reply দিয়ে শেষ না।
                </li>
                <li>
                  <strong>Recommendations দেখুন।</strong> নির্দিষ্ট কোনো scholarship সাজেস্ট করা হলে সেটা আলাদা card আকারে link ও deadline সহ দেখতে পাবেন।
                </li>
              </ol>
            </div>

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
                      {(repliesByRequest.get(request.id) ?? []).length > 0 ? (
                        <div className="account-support-thread">
                          {(repliesByRequest.get(request.id) ?? []).map((reply) => (
                            <div className={`account-thread-message ${reply.sender}`} key={reply.id}>
                              <span>
                                {reply.sender === "admin" ? "Halim." : "আপনি"} ·{" "}
                                {new Intl.DateTimeFormat("bn-BD", { year: "numeric", month: "long", day: "numeric" }).format(new Date(reply.created_at))}
                              </span>
                              <RichTextContent content={reply.message} />
                            </div>
                          ))}
                        </div>
                      ) : (
                        <p className="account-support-pending">এখনো reply দেওয়া হয়নি—সাধারণত ১–২ working day-এর মধ্যে reply পাবেন।</p>
                      )}

                      <ScholarshipFollowUpForm requestId={request.id} />

                      {(recommendationsByRequest.get(request.id) ?? []).length > 0 ? (
                        <div className="account-support-recommendations">
                          <h3>Scholarship recommendations</h3>
                          {(recommendationsByRequest.get(request.id) ?? []).map((recommendation) => (
                            <article className="account-recommendation-card" key={recommendation.id}>
                              <strong>{recommendation.scholarship_name}</strong>
                              <span>{recommendation.university}</span>
                              <div className="account-recommendation-tags">
                                {recommendation.degree_level ? <span>{recommendation.degree_level}</span> : null}
                                {recommendation.country ? <span>{recommendation.country}</span> : null}
                                {recommendation.deadline ? <span>Deadline: {recommendationDateFormatter.format(new Date(recommendation.deadline))}</span> : null}
                              </div>
                              {recommendation.notes ? <p>{recommendation.notes}</p> : null}
                              {recommendation.link ? (
                                <a href={recommendation.link} target="_blank" rel="noreferrer">বিস্তারিত দেখুন ↗</a>
                              ) : null}
                            </article>
                          ))}
                        </div>
                      ) : null}
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
