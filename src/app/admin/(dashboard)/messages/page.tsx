import type { Metadata } from "next";

import { updateContactMessageStatus } from "@/app/admin/message-actions";
import { requireAdmin } from "@/lib/admin-auth";

export const metadata: Metadata = {
  title: "Contact messages",
  robots: { index: false, follow: false },
};

type ContactMessage = {
  id: number;
  name: string;
  email: string;
  topic: string;
  subject: string;
  message: string;
  status: "new" | "read" | "replied";
  created_at: string;
};

export default async function AdminMessagesPage() {
  const { supabase } = await requireAdmin();
  const { data, error } = await supabase
    .from("contact_messages")
    .select("id,name,email,topic,subject,message,status,created_at")
    .order("created_at", { ascending: false });

  if (error) throw new Error("Unable to load contact messages.");
  const messages = (data ?? []) as ContactMessage[];
  const unreadCount = messages.filter((message) => message.status === "new").length;

  return (
    <>
      <header className="admin-page-header">
        <div>
          <span>CONTACT INBOX</span>
          <h1>Messages</h1>
          <p>Website contact form থেকে আসা প্রশ্ন ও collaboration requests।</p>
        </div>
        <span className="admin-user-total">{unreadCount} new</span>
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
          </article>
        ))}
      </section>
    </>
  );
}
