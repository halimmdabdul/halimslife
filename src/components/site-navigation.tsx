"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { TranslatedText } from "@/components/site-preferences";

export function SiteNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const navigationRef = useRef<HTMLDivElement>(null);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setMenuOpen(false);
    }

    function closeOutside(event: MouseEvent) {
      if (!navigationRef.current?.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    }

    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("mousedown", closeOutside);
    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("mousedown", closeOutside);
    };
  }, []);

  function currentRoute(href: string) {
    return pathname === href || pathname.startsWith(`${href}/`)
      ? "page" as const
      : undefined;
  }

  return (
    <div className="site-navigation" ref={navigationRef}>
      <nav
        id="site-navigation"
        aria-label="Main navigation"
        className={menuOpen ? "mobile-nav-open" : undefined}
      >
        <Link href="/" aria-current={currentRoute("/")} onClick={closeMenu}>
          <TranslatedText bn="হোম" en="Home" ja="ホーム" />
        </Link>
        <Link href="/about" aria-current={currentRoute("/about")} onClick={closeMenu}>
          <TranslatedText bn="আমার সম্পর্কে" en="About" ja="私について" />
        </Link>
        <Link href="/cv" aria-current={currentRoute("/cv")} onClick={closeMenu}>
          <TranslatedText bn="সিভি" en="CV" ja="履歴書" />
        </Link>
        <Link href="/journey" aria-current={currentRoute("/journey")} onClick={closeMenu}>
          <TranslatedText bn="আমার জার্নি" en="Journey" ja="歩み" />
        </Link>
        <Link href="/projects" aria-current={currentRoute("/projects")} onClick={closeMenu}>
          <TranslatedText bn="প্রজেক্ট" en="Projects" ja="プロジェクト" />
        </Link>
        <Link href="/academy" aria-current={currentRoute("/academy")} onClick={closeMenu}>
          <TranslatedText bn="একাডেমি" en="Academy" ja="アカデミー" />
        </Link>
        <Link href="/scholarships" aria-current={currentRoute("/scholarships")} onClick={closeMenu}>
          <TranslatedText bn="স্কলারশিপ" en="Scholarships" ja="奨学金" />
        </Link>
        <Link href="/blog" aria-current={currentRoute("/blog")} onClick={closeMenu}>
          <TranslatedText bn="ব্লগ" en="Blog" ja="ブログ" />
        </Link>
        <Link href="/contact" aria-current={currentRoute("/contact")} onClick={closeMenu}>
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
