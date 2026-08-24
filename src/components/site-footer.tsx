import Link from "next/link";

import { BrandLogo } from "@/components/brand-logo";

const navigationLinks = [
  { href: "/about", label: "About" },
  { href: "/cv", label: "CV" },
  { href: "/journey", label: "Journey" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/insights", label: "Insights" },
];

const learningLinks = [
  { href: "/academy", label: "Academy" },
  { href: "/scholarships", label: "Scholarships" },
  { href: "/academy/japanese-n5", label: "Japanese N5" },
  { href: "/projects/minna-no-nihongo-n5", label: "N5 Learning Project" },
  { href: "/signup", label: "Create account" },
  { href: "/contact?topic=academy&subject=Course%20question", label: "Ask about a course" },
];

const profileLinks = [
  { href: "https://github.com/halimmdabdul", label: "GitHub" },
  {
    href: "https://scholar.google.com/citations?hl=en&user=KtZ4jcMAAAAJ",
    label: "Google Scholar",
  },
];

export function SiteFooter() {
  return (
    <footer className="footer" id="site-footer">
      <div className="container footer-main">
        <div className="footer-intro">
          <BrandLogo footer />
          <p>
            Japan থেকে engineering, research এবং Bengali-friendly practical
            learning resources—curiosity থেকে real skill তৈরির জন্য।
          </p>
          <span className="footer-location">⌖ Japan · 日本</span>
          <a className="footer-email" href="mailto:reiazbubt@gmail.com">
            reiazbubt@gmail.com <span aria-hidden="true">↗</span>
          </a>
        </div>

        <nav className="footer-column" aria-label="Footer navigation">
          <h2>Explore</h2>
          <div className="footer-links">
            {navigationLinks.map((link) => (
              <Link href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </nav>

        <nav className="footer-column" aria-label="Learning links">
          <h2>Learn</h2>
          <div className="footer-links">
            {learningLinks.map((link) => (
              <Link href={link.href} key={link.href}>{link.label}</Link>
            ))}
          </div>
        </nav>

        <nav className="footer-column" aria-label="External profiles">
          <h2>Connect</h2>
          <div className="footer-links">
            {profileLinks.map((link) => (
              <a
                href={link.href}
                key={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label} <span aria-hidden="true">↗</span>
              </a>
            ))}
            <Link href="/contact">Contact form</Link>
          </div>
        </nav>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Halim Md Abdul. All rights reserved.</p>
        <div>
          <Link href="/contact">Contact</Link>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
