import type { ReactNode } from "react";
import Link from "next/link";

import { logoutAdmin } from "@/app/admin/actions";
import { AdminSidebarNav } from "@/components/admin-sidebar-nav";
import type { AdminProfile } from "@/lib/admin-auth";

export function AdminShell({
  profile,
  children,
}: {
  profile: AdminProfile;
  children: ReactNode;
}) {
  return (
    <div className="admin-app">
      <aside className="admin-sidebar">
        <Link className="admin-brand" href="/admin">
          Halim<span>.</span>
          <small>ADMIN</small>
        </Link>
        <AdminSidebarNav />
        <div className="admin-account">
          <span>{profile.full_name?.charAt(0) || "H"}</span>
          <div>
            <strong>{profile.full_name || "Administrator"}</strong>
            <small>{profile.email}</small>
          </div>
          <form action={logoutAdmin}>
            <button type="submit">Log out</button>
          </form>
        </div>
      </aside>
      <main className="admin-main">{children}</main>
    </div>
  );
}
