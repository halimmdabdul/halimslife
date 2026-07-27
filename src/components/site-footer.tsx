import Link from "next/link";

import { BrandLogo } from "@/components/brand-logo";

const navigationLinks = [
  { href: "/about", label: "About" },
  { href: "/journey", label: "Journey" },
  { href: "/projects", label: "Projects" },
  { href: "/academy", label: "Academy" },
  { href: "/blog", label: "Blog" },
  { href: "/insights", label: "Insights" },
  { href: "/contact", label: "Contact" },
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
            Engineer, researcher and lifelong learner sharing practical ideas
            from Japan.
          </p>
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
            <a href="mailto:reiazbubt@gmail.com">Email</a>
          </div>
        </nav>
      </div>

      <div className="container footer-bottom">
        <p>© {new Date().getFullYear()} Halim Md Abdul. All rights reserved.</p>
        <Link href="/">Back to home</Link>
      </div>
    </footer>
  );
}
