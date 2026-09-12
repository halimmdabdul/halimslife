"use client";

import { useActionState, useEffect, useRef } from "react";

import {
  submitScholarshipFollowUpReply,
  type ScholarshipFollowUpState,
} from "@/app/account/scholarship-support/actions";

const initialState: ScholarshipFollowUpState = {};

export function ScholarshipFollowUpForm({ requestId }: { requestId: number }) {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, pending] = useActionState(
    submitScholarshipFollowUpReply,
    initialState,
  );

  useEffect(() => {
    if (state.success) formRef.current?.reset();
  }, [state.success]);

  return (
    <form ref={formRef} action={formAction} className="account-followup-form">
      <input type="hidden" name="requestId" value={requestId} />
      <label>
        <span>আপনার reply</span>
        <textarea name="message" rows={3} minLength={2} maxLength={4000} placeholder="এখানে reply লিখুন…" required />
      </label>
      <div className="account-followup-submit">
        <button type="submit" disabled={pending}>
          {pending ? "পাঠানো হচ্ছে…" : "Reply পাঠান"}
        </button>
      </div>
      <div aria-live="polite">
        {state.error ? <p className="contact-form-error">{state.error}</p> : null}
        {state.success ? <p className="contact-form-success">{state.success}</p> : null}
      </div>
    </form>
  );
}
