"use client";

import Link from "next/link";
import { useState } from "react";

import { TranslatedText } from "@/components/site-preferences";

export function SiteNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-navigation">
      <nav
        id="site-navigation"
        aria-label="Main navigation"
        className={menuOpen ? "mobile-nav-open" : undefined}
      >
        <Link href="/about" onClick={closeMenu}>
          <TranslatedText bn="আমার সম্পর্কে" en="About" ja="私について" />
        </Link>
        <Link href="/journey" onClick={closeMenu}>
          <TranslatedText bn="আমার জার্নি" en="Journey" ja="歩み" />
        </Link>
        <Link href="/projects" onClick={closeMenu}>
          <TranslatedText bn="প্রজেক্ট" en="Projects" ja="プロジェクト" />
        </Link>
        <Link href="/academy" onClick={closeMenu}>
          <TranslatedText bn="একাডেমি" en="Academy" ja="アカデミー" />
        </Link>
        <Link href="/blog" onClick={closeMenu}>
          <TranslatedText bn="ব্লগ" en="Blog" ja="ブログ" />
        </Link>
        <Link href="/contact" onClick={closeMenu}>
          <TranslatedText bn="যোগাযোগ" en="Contact" ja="お問い合わせ" />
        </Link>
      </nav>
      <button
        className="mobile-menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="site-navigation"
        aria-label={menuOpen ? "Close navigation" : "Open navigation"}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <span />
        <span />
        <span />
      </button>
    </div>
  );
}
