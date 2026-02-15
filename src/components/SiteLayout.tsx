// Design North Star (Minimal Tech-Editorial)
// - Single layout wrapper for all routes
// - Stable spacing + subtle background treatment

import * as React from "react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteNav />
      <main className="mx-auto w-full max-w-6xl px-4 py-10 md:py-14">{children}</main>
      <SiteFooter />
    </div>
  );
}
