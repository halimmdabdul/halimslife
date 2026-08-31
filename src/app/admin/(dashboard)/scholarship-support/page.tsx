import type { Metadata } from "next";
import type { ReactNode } from "react";

import { updateContactMessageStatus } from "@/app/admin/message-actions";
import { requireAdmin } from "@/lib/admin-auth";

export const metadata: Metadata = {
  title: "Scholarship Support",
  robots: { index: false, follow: false },
};

type SupportRequest = {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: "new" | "read" | "replied";
  created_at: string;
};

function linkify(text: string): ReactNode[] {
  return text.split(/(https?:\/\/[^\s]+)/g).filter(Boolean).map((part, index) =>
    /^https?:\/\//.test(part)
      ? <a href={part} key={index} target="_blank" rel="noreferrer">{part}</a>
      : part,
  );
}

export default async function AdminScholarshipSupportPage() {
  const { supabase } = await requireAdmin();
  const { data, error } = await supabase
    .from("contact_messages")
    .select("id,name,email,subject,message,status,created_at")
    .eq("topic", "scholarship-support")
    .order("created_at", { ascending: false });

  if (error) throw new Error("Unable to load scholarship support requests.");
  const requests = (data ?? []) as SupportRequest[];
  const newCount = requests.filter((request) => request.status === "new").length;

  return (
    <>
      <header className="admin-page-header">
        <div>
          <span>STUDENT SUPPORT</span>
          <h1>Scholarship Support</h1>
          <p>Logged-in users-এর scholarship guidance request, target country/degree ও CV/transcript link এখানে দেখুন।</p>
        </div>
        <span className="admin-user-total">{newCount} new</span>
      </header>

      <section className="admin-message-list">
        {requests.length === 0 ? (
          <div className="admin-empty-state">
            <strong>No requests yet</strong>
            <p>/account/scholarship-support থেকে আসা নতুন request এখানে দেখা যাবে।</p>
          </div>
        ) : requests.map((request) => (
          <article className={request.status === "new" ? "is-new" : ""} key={request.id}>
            <header>
              <div>
                <span className={`message-status ${request.status}`}>{request.status}</span>
                <strong>{request.subject}</strong>
                <small>{request.name} · {request.email}</small>
              </div>
              <time dateTime={request.created_at}>
                {new Intl.DateTimeFormat("en", {
                  dateStyle: "medium",
                  timeStyle: "short",
                }).format(new Date(request.created_at))}
              </time>
            </header>
            <p>{linkify(request.message)}</p>
            <footer>
              <span>Scholarship Support</span>
              <a href={`mailto:${request.email}?subject=${encodeURIComponent(`Re: ${request.subject}`)}`}>Reply by email ↗</a>
              <form action={updateContactMessageStatus}>
                <input type="hidden" name="messageId" value={request.id} />
                <select name="status" defaultValue={request.status} aria-label={`Status for ${request.subject}`}>
                  <option value="new">New</option>
                  <option value="read">Read</option>
                  <option value="replied">Replied</option>
                </select>
                <button type="submit">Save</button>
              </form>
            </footer>
          </article>
        ))}
      </section>
    </>
  );
}
