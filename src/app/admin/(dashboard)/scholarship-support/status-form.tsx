"use client";

import { useFormStatus } from "react-dom";

import { updateContactMessageStatus } from "@/app/admin/message-actions";

function SaveStatusButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Saving…" : "Save"}
    </button>
  );
}

export function StatusUpdateForm({
  requestId,
  status,
  subject,
}: {
  requestId: number;
  status: "new" | "read" | "replied";
  subject: string;
}) {
  return (
    <form action={updateContactMessageStatus}>
      <input type="hidden" name="messageId" value={requestId} />
      <select name="status" defaultValue={status} aria-label={`Status for ${subject}`}>
        <option value="new">New</option>
        <option value="read">Read</option>
        <option value="replied">Replied</option>
      </select>
      <SaveStatusButton />
    </form>
  );
}
