import type { ReactNode } from "react";
import Link from "next/link";

export function InnerPageShell({ children }: { children: ReactNode }) {
  return (
    <>
      <header className="topbar">
        <Link className="logo" href="/">
          Halim<span>.</span>
        </Link>
        <nav aria-label="মূল নেভিগেশন">
          <a href="/about">আমার সম্পর্কে</a>
          <a href="/journey">আমার জার্নি</a>
          <a href="/projects">প্রজেক্ট</a>
          <a href="/insights">লেখালেখি</a>
        </nav>
        <a className="nav-contact" href="/contact">
          যোগাযোগ
        </a>
      </header>
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
          </div>
          <p className="copyright">
            © {new Date().getFullYear()} Halim Md Abdul
          </p>
        </div>
      </footer>
    </>
  );
}
