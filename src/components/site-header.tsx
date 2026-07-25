import Link from "next/link";

import { BrandLogo } from "@/components/brand-logo";
import { PublicAuthLink } from "@/components/public-auth-link";
import {
  SiteControls,
  TranslatedText,
} from "@/components/site-preferences";

export function SiteHeader() {
  return (
    <header className="topbar">
      <BrandLogo />
      <nav aria-label="Main navigation">
        <Link href="/about">
          <TranslatedText bn="আমার সম্পর্কে" en="About" ja="私について" />
        </Link>
        <Link href="/journey">
          <TranslatedText bn="আমার জার্নি" en="Journey" ja="歩み" />
        </Link>
        <Link href="/projects">
          <TranslatedText bn="প্রজেক্ট" en="Projects" ja="プロジェクト" />
        </Link>
        <Link href="/blog">
          <TranslatedText bn="ব্লগ" en="Blog" ja="ブログ" />
        </Link>
        <Link href="/contact">
          <TranslatedText bn="যোগাযোগ" en="Contact" ja="お問い合わせ" />
        </Link>
      </nav>
      <div className="header-actions">
        <SiteControls />
        <PublicAuthLink />
      </div>
    </header>
  );
}
