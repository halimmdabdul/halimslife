import type { ReactNode } from "react";

import { AdminActionForm } from "@/components/admin-action-form";
import { RichTextContent } from "@/components/rich-text-content";
import { RichTextEditor } from "@/components/rich-text-editor";
import {
  scholarshipCountryLabels,
  scholarshipDegreeLabels,
} from "@/lib/scholarship-support-options";
import { ScholarshipRecommendations, type ScholarshipRecommendation } from "./recommendations";
import { StatusUpdateForm } from "./status-form";

export type ThreadReply = {
  id: number;
  request_id: number;
  sender: "admin" | "user";
  message: string;
  created_at: string;
};

export type SupportRequest = {
  id: number;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: "new" | "read" | "replied";
  admin_reply: string | null;
  replied_at: string | null;
  created_at: string;
  target_country: string | null;
  target_degree: string | null;
  background: string | null;
  goals: string | null;
  drive_link: string | null;
};

const dateFormatter = new Intl.DateTimeFormat("en", { dateStyle: "medium", timeStyle: "short" });

function linkify(text: string): ReactNode[] {
  return text.split(/(https?:\/\/[^\s]+)/g).filter(Boolean).map((part, index) =>
    /^https?:\/\//.test(part)
      ? <a href={part} key={index} target="_blank" rel="noreferrer">{part}</a>
      : part,
  );
}

export function ScholarshipRequestCard({
  request,
  recommendations,
  replies,
}: {
  request: SupportRequest;
  recommendations: ScholarshipRecommendation[];
  replies: ThreadReply[];
}) {
  // Requests submitted before the structured columns existed only have the
  // flattened `message` text — fall back to showing that as-is for them.
  const hasStructuredFields = Boolean(request.target_country && request.target_degree);
  const hasThread = replies.length > 0;

  return (
    <article className={request.status === "new" ? "is-new" : ""}>
      <header>
        <div>
          <span className={`message-status ${request.status}`}>{request.status}</span>
          <strong>{request.subject}</strong>
          <small>{request.name} · {request.email}</small>
        </div>
        <time dateTime={request.created_at}>{dateFormatter.format(new Date(request.created_at))}</time>
      </header>

      {hasStructuredFields ? (
        <div className="admin-scholarship-summary">
          <div className="admin-scholarship-tags">
            <span className="admin-scholarship-tag">
              {scholarshipCountryLabels[request.target_country as string] ?? request.target_country}
            </span>
            <span className="admin-scholarship-tag">
              {scholarshipDegreeLabels[request.target_degree as string] ?? request.target_degree}
            </span>
            {request.drive_link ? (
              <a href={request.drive_link} target="_blank" rel="noreferrer" className="admin-scholarship-drive-link">
                CV/Transcript ↗
              </a>
            ) : null}
          </div>
          {request.background ? (
            <p className="admin-scholarship-field">
              <span>Background</span>
              {request.background}
            </p>
          ) : null}
          {request.goals ? (
            <p className="admin-scholarship-field">
              <span>Needs</span>
              {request.goals}
            </p>
          ) : null}
        </div>
      ) : (
        <p>{linkify(request.message)}</p>
      )}

      <footer>
        <span>Scholarship Support</span>
        <a href={`mailto:${request.email}?subject=${encodeURIComponent(`Re: ${request.subject}`)}`}>Reply by email ↗</a>
        <StatusUpdateForm requestId={request.id} status={request.status} subject={request.subject} />
      </footer>

      <details className="admin-item-editor admin-reply-panel" open={hasThread}>
        <summary>Reply from the site {hasThread || request.admin_reply ? "(already replied)" : ""}</summary>
        {hasThread ? (
          <div className="admin-message-thread">
            {replies.map((reply) => (
              <div className={`admin-thread-message ${reply.sender}`} key={reply.id}>
                <span>{reply.sender === "admin" ? "You" : request.name} · {dateFormatter.format(new Date(reply.created_at))}</span>
                <p>{reply.message}</p>
              </div>
            ))}
          </div>
        ) : request.admin_reply ? (
          <div className="admin-previous-reply">
            <span>Sent {request.replied_at ? dateFormatter.format(new Date(request.replied_at)) : ""}</span>
            <RichTextContent content={request.admin_reply} />
          </div>
        ) : null}
        <AdminActionForm
          actionName="replyToContactMessage"
          className="admin-content-form"
          successMessage={`Reply sent to ${request.email}.`}
          confirm={{
            title: "Send reply email?",
            text: `This will immediately email ${request.email}. This cannot be undone.`,
            confirmButtonText: "Send email",
          }}
        >
          <input type="hidden" name="messageId" value={request.id} />
          <RichTextEditor name="replyMessage" label={`Reply message (emailed directly to ${request.email})`} rows={7} placeholder="Write your reply here... Markdown formatting is supported." />
          <button className="admin-submit-button" type="submit">Send reply email</button>
        </AdminActionForm>
      </details>

      <ScholarshipRecommendations
        requestId={request.id}
        applicantEmail={request.email}
        recommendations={recommendations}
      />
    </article>
  );
}
