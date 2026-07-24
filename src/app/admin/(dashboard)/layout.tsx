import type { ReactNode } from "react";

import { AdminShell } from "@/components/admin-shell";
import { requireAdmin } from "@/lib/admin-auth";

export default async function AdminDashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const { profile } = await requireAdmin();

  return <AdminShell profile={profile}>{children}</AdminShell>;
}
