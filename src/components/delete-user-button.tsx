"use client";

import { useActionState } from "react";

import { deleteUser, type DeleteUserState } from "@/app/admin/actions";

const initialState: DeleteUserState = {};

export function DeleteUserForm({ userId, email }: { userId: string; email: string }) {
  const [state, formAction, pending] = useActionState(deleteUser, initialState);

  return (
    <form
      action={formAction}
      className="admin-delete-form"
      onSubmit={(event) => {
        if (!window.confirm(`${email}-কে মুছে ফেলবেন? এই কাজটি পরে ফিরিয়ে আনা যাবে না।`)) {
          event.preventDefault();
        }
      }}
    >
      <input type="hidden" name="userId" value={userId} />
      <button type="submit" className="admin-delete-user" disabled={pending}>
        {pending ? "Deleting…" : "Delete"}
      </button>
      {state.error ? (
        <span className="admin-delete-status error" role="alert">
          {state.error}
        </span>
      ) : null}
      {state.success ? (
        <span className="admin-delete-status success" role="status">
          {state.success}
        </span>
      ) : null}
    </form>
  );
}
