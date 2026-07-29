"use client";

import { useActionState, useEffect, useRef } from "react";

import {
  submitContactMessage,
  type ContactFormState,
} from "@/app/contact/actions";

const initialState: ContactFormState = {};

export function ContactForm({
  defaultTopic = "general",
  defaultSubject = "",
}: {
  defaultTopic?: string;
  defaultSubject?: string;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, pending] = useActionState(
    submitContactMessage,
    initialState,
  );

  useEffect(() => {
    if (state.success) formRef.current?.reset();
  }, [state.success]);

  return (
    <form ref={formRef} action={formAction} className="contact-form">
      <div className="contact-form-heading">
        <span>Send a message</span>
        <h2>কীভাবে সাহায্য করতে পারি?</h2>
        <p>যতটা সম্ভব বিস্তারিত লিখুন—তাহলে useful reply দেওয়া সহজ হবে।</p>
      </div>

      <div className="contact-form-row">
        <label>
          <span>আপনার নাম</span>
          <input name="name" type="text" autoComplete="name" minLength={2} maxLength={80} required />
        </label>
        <label>
          <span>Email address</span>
          <input name="email" type="email" autoComplete="email" maxLength={254} required />
        </label>
      </div>

      <label>
        <span>কোন বিষয়ে কথা বলতে চান?</span>
        <select name="topic" defaultValue={defaultTopic}>
          <option value="general">General question</option>
          <option value="academy">Academy বা course</option>
          <option value="engineering">Engineering project</option>
          <option value="research">Research</option>
          <option value="career">Career guidance</option>
          <option value="collaboration">Collaboration</option>
        </select>
      </label>

      <label>
        <span>Subject</span>
        <input name="subject" type="text" defaultValue={defaultSubject} minLength={3} maxLength={120} required />
      </label>

      <label>
        <span>আপনার message</span>
        <textarea name="message" rows={7} minLength={10} maxLength={2000} required />
        <small>সর্বোচ্চ ২০০০ অক্ষর</small>
      </label>

      <label className="contact-honeypot" aria-hidden="true">
        Website
        <input name="website" type="text" tabIndex={-1} autoComplete="off" />
      </label>

      <div className="contact-form-submit">
        <button type="submit" disabled={pending}>
          {pending ? "পাঠানো হচ্ছে…" : "Message পাঠান"}
          <span aria-hidden="true">→</span>
        </button>
        <small>আপনার email অন্য কারও সঙ্গে share করা হবে না।</small>
      </div>

      <div aria-live="polite">
        {state.error ? <p className="contact-form-error">{state.error}</p> : null}
        {state.success ? <p className="contact-form-success">{state.success}</p> : null}
      </div>
    </form>
  );
}
