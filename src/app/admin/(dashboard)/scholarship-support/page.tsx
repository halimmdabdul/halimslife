import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";

import { AdminActionForm } from "@/components/admin-action-form";
import { RichTextContent } from "@/components/rich-text-content";
import { RichTextEditor } from "@/components/rich-text-editor";
import { updateContactMessageStatus } from "@/app/admin/message-actions";
import { requireAdmin } from "@/lib/admin-auth";

export const metadata: Metadata = {
  title: "Scholarship Support",
  robots: { index: false, follow: false },
};

const PAGE_SIZE = 10;

type SupportRequest = {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: "new" | "read" | "replied";
  admin_reply: string | null;
  replied_at: string | null;
  created_at: string;
};

function linkify(text: string): ReactNode[] {
  return text.split(/(https?:\/\/[^\s]+)/g).filter(Boolean).map((part, index) =>
    /^https?:\/\//.test(part)
      ? <a href={part} key={index} target="_blank" rel="noreferrer">{part}</a>
      : part,
  );
}

export default async function AdminScholarshipSupportPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { supabase } = await requireAdmin();
  const params = await searchParams;

  const [{ count: totalCount }, { count: newCount }] = await Promise.all([
    supabase
      .from("contact_messages")
      .select("*", { count: "exact", head: true })
      .eq("topic", "scholarship-support"),
    supabase
      .from("contact_messages")
      .select("*", { count: "exact", head: true })
      .eq("topic", "scholarship-support")
      .eq("status", "new"),
  ]);

  const totalPages = Math.max(1, Math.ceil((totalCount ?? 0) / PAGE_SIZE));
  const requestedPage = Math.max(1, Number.parseInt(params.page ?? "1", 10) || 1);
  const currentPage = Math.min(requestedPage, totalPages);
  const from = (currentPage - 1) * PAGE_SIZE;
  const to = from + PAGE_SIZE - 1;

  const { data, error } = await supabase
    .from("contact_messages")
    .select("id,name,email,subject,message,status,admin_reply,replied_at,created_at")
    .eq("topic", "scholarship-support")
    .order("created_at", { ascending: false })
    .range(from, to);

  if (error) throw new Error("Unable to load scholarship support requests.");
  const requests = (data ?? []) as SupportRequest[];

  return (
    <>
      <header className="admin-page-header">
        <div>
          <span>STUDENT SUPPORT</span>
          <h1>Scholarship Support</h1>
          <p>Logged-in users-এর scholarship guidance request, target country/degree ও CV/transcript link এখানে দেখুন।</p>
        </div>
        <span className="admin-user-total">{newCount ?? 0} new · {totalCount ?? 0} total</span>
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

            <details className="admin-item-editor admin-reply-panel">
              <summary>Reply from the site {request.admin_reply ? "(already replied)" : ""}</summary>
              {request.admin_reply ? (
                <div className="admin-previous-reply">
                  <span>Sent {request.replied_at ? new Intl.DateTimeFormat("en", { dateStyle: "medium", timeStyle: "short" }).format(new Date(request.replied_at)) : ""}</span>
                  <RichTextContent content={request.admin_reply} />
                </div>
              ) : null}
              <AdminActionForm actionName="replyToContactMessage" className="admin-content-form" successMessage={`Reply sent to ${request.email}.`}>
                <input type="hidden" name="messageId" value={request.id} />
                <RichTextEditor name="replyMessage" label={`Reply message (emailed directly to ${request.email})`} rows={7} placeholder="Write your reply here... Markdown formatting is supported." />
                <button className="admin-submit-button" type="submit">Send reply email</button>
              </AdminActionForm>
            </details>
          </article>
        ))}
      </section>

      {totalPages > 1 ? (
        <nav className="admin-pagination" aria-label="Scholarship support pages">
          {currentPage > 1 ? (
            <Link href={`/admin/scholarship-support?page=${currentPage - 1}`}>← Previous</Link>
          ) : (
            <span className="disabled">← Previous</span>
          )}
          <span className="admin-pagination-status">Page {currentPage} of {totalPages}</span>
          {currentPage < totalPages ? (
            <Link href={`/admin/scholarship-support?page=${currentPage + 1}`}>Next →</Link>
          ) : (
            <span className="disabled">Next →</span>
          )}
        </nav>
      ) : null}
    </>
  );
}
