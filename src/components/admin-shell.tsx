import type { ReactNode } from "react";
import Link from "next/link";

import { logoutAdmin } from "@/app/admin/actions";
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
        <nav>
          <Link href="/admin">Overview</Link>
          <Link href="/admin/analytics">Analytics & SEO</Link>
          <Link href="/admin/courses">Courses & lectures</Link>
          <Link href="/admin/users">Users & roles</Link>
          <Link href="/projects">View projects</Link>
          <Link href="/">View website ↗</Link>
        </nav>
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
