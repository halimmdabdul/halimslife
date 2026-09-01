"use client";

import { deleteUser } from "@/app/admin/actions";

export function DeleteUserForm({ userId, email }: { userId: string; email: string }) {
  return (
    <form
      action={deleteUser}
      onSubmit={(event) => {
        if (!window.confirm(`${email}-কে delete করবেন? এই কাজ undo করা যাবে না।`)) {
          event.preventDefault();
        }
      }}
    >
      <input type="hidden" name="userId" value={userId} />
      <button type="submit" className="admin-delete-user">Delete</button>
    </form>
  );
}
