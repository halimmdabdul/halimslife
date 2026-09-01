import type { Metadata } from "next";

import { updateUserRole } from "@/app/admin/actions";
import { DeleteUserForm } from "@/components/delete-user-button";
import { requireAdmin } from "@/lib/admin-auth";

export const metadata: Metadata = {
  title: "Users & roles",
  robots: { index: false, follow: false },
};

type ProfileRow = {
  id: string;
  email: string;
  full_name: string | null;
  role: "admin" | "user";
  created_at: string;
};

export default async function AdminUsersPage() {
  const { profile: currentAdmin, supabase } = await requireAdmin();
  const { data, error } = await supabase
    .from("profiles")
    .select("id,email,full_name,role,created_at")
    .order("created_at", { ascending: false });

  if (error) {
    throw new Error("Unable to load user profiles.");
  }

  const profiles = (data ?? []) as ProfileRow[];

  return (
    <>
      <header className="admin-page-header">
        <div>
          <span>ACCESS CONTROL</span>
          <h1>Users & roles</h1>
          <p>Admin access review এবং user role securely manage করুন।</p>
        </div>
        <span className="admin-user-total">{profiles.length} users</span>
      </header>
      <section className="admin-users-table">
        <div className="admin-table-head">
          <span>User</span>
          <span>Joined</span>
          <span>Role</span>
          <span>Action</span>
          <span>Delete</span>
        </div>
        {profiles.map((profile) => {
          const isCurrentAdmin = profile.id === currentAdmin.id;

          return (
            <div className="admin-user-row" key={profile.id}>
              <div className="admin-user-identity">
                <span>{profile.full_name?.charAt(0) || profile.email[0]}</span>
                <div>
                  <strong>{profile.full_name || "Unnamed user"}</strong>
                  <small>{profile.email}</small>
                </div>
              </div>
              <time dateTime={profile.created_at}>
                {new Intl.DateTimeFormat("en", {
                  year: "numeric",
                  month: "short",
                  day: "numeric",
                }).format(new Date(profile.created_at))}
              </time>
              <span className={`role-pill ${profile.role}`}>{profile.role}</span>
              <form action={updateUserRole}>
                <input type="hidden" name="userId" value={profile.id} />
                <select
                  name="role"
                  defaultValue={profile.role}
                  disabled={isCurrentAdmin}
                  aria-label={`Role for ${profile.email}`}
                >
                  <option value="user">User</option>
                  <option value="admin">Admin</option>
                </select>
                <button type="submit" disabled={isCurrentAdmin}>
                  {isCurrentAdmin ? "Current account" : "Update"}
                </button>
              </form>
              {isCurrentAdmin ? null : <DeleteUserForm userId={profile.id} email={profile.email} />}
            </div>
          );
        })}
      </section>
    </>
  );
}
