"use client";

import { useActionState, useEffect, useRef } from "react";

import {
  submitScholarshipSupportRequest,
  type ScholarshipSupportState,
} from "@/app/account/scholarship-support/actions";
import {
  SCHOLARSHIP_COUNTRIES,
  SCHOLARSHIP_DEGREES,
} from "@/lib/scholarship-support-options";

const initialState: ScholarshipSupportState = {};

export function ScholarshipSupportForm({
  defaultName,
  defaultEmail,
}: {
  defaultName: string;
  defaultEmail: string;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, pending] = useActionState(
    submitScholarshipSupportRequest,
    initialState,
  );

  useEffect(() => {
    if (state.success) formRef.current?.reset();
  }, [state.success]);

  return (
    <form ref={formRef} action={formAction} className="contact-form account-support-form">
      <div className="contact-form-row">
        <label>
          <span>আপনার নাম</span>
          <input name="name" type="text" defaultValue={defaultName} autoComplete="name" minLength={2} maxLength={80} required />
        </label>
        <label>
          <span>Email address</span>
          <input name="email" type="email" defaultValue={defaultEmail} autoComplete="email" maxLength={254} required />
        </label>
      </div>

      <div className="contact-form-row">
        <label>
          <span>Target country</span>
          <select name="country" defaultValue="undecided">
            {SCHOLARSHIP_COUNTRIES.map((option) => (
              <option value={option.value} key={option.value}>{option.label}</option>
            ))}
          </select>
        </label>
        <label>
          <span>Target degree</span>
          <select name="degree" defaultValue="undecided">
            {SCHOLARSHIP_DEGREES.map((option) => (
              <option value={option.value} key={option.value}>{option.label}</option>
            ))}
          </select>
        </label>
      </div>

      <label>
        <span>বর্তমান শিক্ষাগত পটভূমি</span>
        <input name="background" type="text" placeholder="যেমনঃ BSc in CSE, 3rd year" minLength={5} maxLength={300} required />
      </label>

      <label>
        <span>CV / Transcript Google Drive link (optional)</span>
        <input name="driveLink" type="url" placeholder="https://drive.google.com/..." maxLength={500} />
        <small>Link দেওয়ার আগে Drive-এ share settings-এ গিয়ে &quot;Anyone with the link&quot; access দিন, নয়তো খুলতে পারব না।</small>
      </label>

      <label>
        <span>কী ধরনের সাহায্য চান?</span>
        <textarea name="goals" rows={7} placeholder="যেমনঃ কোন scholarship-এর জন্য apply করা উচিত, SOP review, professor email ইত্যাদি" minLength={10} maxLength={2000} required />
        <small>সর্বোচ্চ ২০০০ অক্ষর</small>
      </label>

      <label className="contact-honeypot" aria-hidden="true">
        Website
        <input name="website" type="text" tabIndex={-1} autoComplete="off" />
      </label>

      <div className="contact-form-submit">
        <button type="submit" disabled={pending}>
          {pending ? "পাঠানো হচ্ছে…" : "Request পাঠান"}
          <span aria-hidden="true">→</span>
        </button>
        <small>আপনার তথ্য শুধু scholarship guidance-এর জন্যই ব্যবহার করা হবে।</small>
      </div>

      <div aria-live="polite">
        {state.error ? <p className="contact-form-error">{state.error}</p> : null}
        {state.success ? <p className="contact-form-success">{state.success}</p> : null}
      </div>
    </form>
  );
}
