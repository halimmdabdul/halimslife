import type { ReactNode } from "react";
import Link from "next/link";

import { SiteHeader } from "@/components/site-header";

export function InnerPageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main>{children}</main>
      <footer className="footer">
        <div className="container">
          <div>
            <Link className="logo footer-logo" href="/">
              Halim<span>.</span>
            </Link>
            <p>Engineer · Researcher · Lifelong Learner</p>
          </div>
          <div className="footer-links">
            <a
              href="https://github.com/halimmdabdul"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://scholar.google.com/citations?hl=en&user=KtZ4jcMAAAAJ"
              target="_blank"
              rel="noreferrer"
            >
              Google Scholar
            </a>
            <a href="mailto:reiazbubt@gmail.com">Email</a>
            <Link href="/blog">Blog</Link>
          </div>
          <p className="copyright">
            © {new Date().getFullYear()} Halim Md Abdul
          </p>
        </div>
      </footer>
    </>
  );
}
