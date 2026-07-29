import Link from "next/link";

import { InnerPageShell } from "@/components/inner-page-shell";

export default function NotFound() {
  return (
    <InnerPageShell>
      <section className="route-state container">
        <span className="route-state-code">404</span>
        <p className="kicker">Page not found</p>
        <h1>এই পেজটি খুঁজে পাওয়া যায়নি।</h1>
        <p>
          Linkটি পুরোনো হতে পারে অথবা address-এ ভুল আছে। Homepage বা Academy
          থেকে আবার শুরু করুন।
        </p>
        <div className="route-state-actions">
          <Link className="primary-button" href="/">Homepage</Link>
          <Link className="secondary-button" href="/academy">Explore Academy</Link>
        </div>
      </section>
    </InnerPageShell>
  );
}
