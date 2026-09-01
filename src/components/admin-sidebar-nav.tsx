"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/admin", label: "Overview", exact: true },
  { href: "/admin/analytics", label: "Analytics & SEO" },
  { href: "/admin/messages", label: "Contact messages" },
  { href: "/admin/scholarship-support", label: "Scholarship Support" },
  { href: "/admin/courses", label: "Courses & lectures" },
  { href: "/admin/blog", label: "Blog posts" },
  { href: "/admin/users", label: "Users & roles" },
];

export function AdminSidebarNav() {
  const pathname = usePathname();

  function isActive(href: string, exact?: boolean) {
    if (exact) return pathname === href;
    return pathname === href || pathname.startsWith(`${href}/`);
  }

  return (
    <nav>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          aria-current={isActive(item.href, item.exact) ? "page" : undefined}
        >
          {item.label}
        </Link>
      ))}
      <Link href="/projects">View projects</Link>
      <Link href="/">View website ↗</Link>
    </nav>
  );
}
