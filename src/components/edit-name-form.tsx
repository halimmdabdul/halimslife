"use client";

import { useActionState, useState } from "react";

import { updateOwnName, type ProfileUpdateState } from "@/app/account/actions";

const initialState: ProfileUpdateState = {};

export function EditNameForm({ currentName }: { currentName: string }) {
  const [editing, setEditing] = useState(false);
  const [state, formAction, pending] = useActionState(updateOwnName, initialState);

  // Close the edit form once the save succeeds. Derived during render (not
  // an effect) so it can't fire an extra post-commit render pass.
  const [handledSuccess, setHandledSuccess] = useState(state.success);
  if (state.success !== handledSuccess) {
    setHandledSuccess(state.success);
    if (state.success) setEditing(false);
  }

  if (!editing) {
    return (
      <div className="profile-field-row">
        <span>নাম</span>
        <div className="profile-field-value">
          <strong>{currentName}</strong>
          <button type="button" className="profile-edit-trigger" onClick={() => setEditing(true)}>
            Edit
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="profile-field-row profile-field-row--editing">
      <span>নাম</span>
      <form action={formAction} className="profile-edit-form">
        <input name="fullName" defaultValue={currentName} required minLength={2} maxLength={80} autoFocus />
        <div>
          <button type="submit" disabled={pending}>{pending ? "সংরক্ষণ হচ্ছে…" : "Save"}</button>
          <button type="button" onClick={() => setEditing(false)} disabled={pending}>Cancel</button>
        </div>
        {state.error && <p className="profile-edit-error">{state.error}</p>}
      </form>
    </div>
  );
}
