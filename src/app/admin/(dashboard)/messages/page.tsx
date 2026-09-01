import type { Metadata } from "next";
import Link from "next/link";

import { AdminActionForm } from "@/components/admin-action-form";
import { RichTextContent } from "@/components/rich-text-content";
import { RichTextEditor } from "@/components/rich-text-editor";
import { updateContactMessageStatus } from "@/app/admin/message-actions";
import { requireAdmin } from "@/lib/admin-auth";

export const metadata: Metadata = {
  title: "Contact messages",
  robots: { index: false, follow: false },
};

const PAGE_SIZE = 10;

type ContactMessage = {
  id: number;
  name: string;
  email: string;
  topic: string;
  subject: string;
  message: string;
  status: "new" | "read" | "replied";
  admin_reply: string | null;
  replied_at: string | null;
  created_at: string;
};

export default async function AdminMessagesPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { supabase } = await requireAdmin();
  const params = await searchParams;

  const [{ count: totalCount }, { count: unreadCount }] = await Promise.all([
    supabase
      .from("contact_messages")
      .select("*", { count: "exact", head: true })
      .neq("topic", "scholarship-support"),
    supabase
      .from("contact_messages")
      .select("*", { count: "exact", head: true })
      .neq("topic", "scholarship-support")
      .eq("status", "new"),
  ]);

  const totalPages = Math.max(1, Math.ceil((totalCount ?? 0) / PAGE_SIZE));
  const requestedPage = Math.max(1, Number.parseInt(params.page ?? "1", 10) || 1);
  const currentPage = Math.min(requestedPage, totalPages);
  const from = (currentPage - 1) * PAGE_SIZE;
  const to = from + PAGE_SIZE - 1;

  const { data, error } = await supabase
    .from("contact_messages")
    .select("id,name,email,topic,subject,message,status,admin_reply,replied_at,created_at")
    .neq("topic", "scholarship-support")
    .order("created_at", { ascending: false })
    .range(from, to);

  if (error) throw new Error("Unable to load contact messages.");
  const messages = (data ?? []) as ContactMessage[];

  return (
    <>
      <header className="admin-page-header">
        <div>
          <span>CONTACT INBOX</span>
          <h1>Messages</h1>
          <p>Website contact form থেকে আসা প্রশ্ন ও collaboration requests।</p>
        </div>
        <span className="admin-user-total">{unreadCount ?? 0} new · {totalCount ?? 0} total</span>
      </header>

      <section className="admin-message-list">
        {messages.length === 0 ? (
          <div className="admin-empty-state">
            <strong>No messages yet</strong>
            <p>নতুন contact form submission এখানে দেখা যাবে।</p>
          </div>
        ) : messages.map((message) => (
          <article className={message.status === "new" ? "is-new" : ""} key={message.id}>
            <header>
              <div>
                <span className={`message-status ${message.status}`}>{message.status}</span>
                <strong>{message.subject}</strong>
                <small>{message.name} · {message.email}</small>
              </div>
              <time dateTime={message.created_at}>
                {new Intl.DateTimeFormat("en", {
                  dateStyle: "medium",
                  timeStyle: "short",
                }).format(new Date(message.created_at))}
              </time>
            </header>
            <p>{message.message}</p>
            <footer>
              <span>{message.topic}</span>
              <a href={`mailto:${message.email}?subject=${encodeURIComponent(`Re: ${message.subject}`)}`}>Reply by email ↗</a>
              <form action={updateContactMessageStatus}>
                <input type="hidden" name="messageId" value={message.id} />
                <select name="status" defaultValue={message.status} aria-label={`Status for ${message.subject}`}>
                  <option value="new">New</option>
                  <option value="read">Read</option>
                  <option value="replied">Replied</option>
                </select>
                <button type="submit">Save</button>
              </form>
            </footer>

            <details className="admin-item-editor admin-reply-panel">
              <summary>Reply from the site {message.admin_reply ? "(already replied)" : ""}</summary>
              {message.admin_reply ? (
                <div className="admin-previous-reply">
                  <span>Sent {message.replied_at ? new Intl.DateTimeFormat("en", { dateStyle: "medium", timeStyle: "short" }).format(new Date(message.replied_at)) : ""}</span>
                  <RichTextContent content={message.admin_reply} />
                </div>
              ) : null}
              <AdminActionForm actionName="replyToContactMessage" className="admin-content-form" successMessage={`Reply sent to ${message.email}.`}>
                <input type="hidden" name="messageId" value={message.id} />
                <RichTextEditor name="replyMessage" label={`Reply message (emailed directly to ${message.email})`} rows={7} placeholder="Write your reply here... Markdown formatting is supported." />
                <button className="admin-submit-button" type="submit">Send reply email</button>
              </AdminActionForm>
            </details>
          </article>
        ))}
      </section>

      {totalPages > 1 ? (
        <nav className="admin-pagination" aria-label="Message pages">
          {currentPage > 1 ? (
            <Link href={`/admin/messages?page=${currentPage - 1}`}>← Previous</Link>
          ) : (
            <span className="disabled">← Previous</span>
          )}
          <span className="admin-pagination-status">Page {currentPage} of {totalPages}</span>
          {currentPage < totalPages ? (
            <Link href={`/admin/messages?page=${currentPage + 1}`}>Next →</Link>
          ) : (
            <span className="disabled">Next →</span>
          )}
        </nav>
      ) : null}
    </>
  );
}
