"use client";

import Link from "next/link";
import { useState } from "react";

import { BrandLogo } from "@/components/brand-logo";
import { SiteControls } from "@/components/site-preferences";

const links = [
  ["#top", "হোম"],
  ["#pathways", "পাথওয়ে"],
  ["#projects", "প্রজেক্টস"],
  ["#insights", "আর্টিকেল"],
  ["/scholarships", "রিসোর্স"],
  ["/about", "আমার সম্পর্কে"],
];

export function HomeHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="home-header" id="top">
      <div className="home-brand">
        <BrandLogo />
        <span>Engineer · Researcher · Educator</span>
      </div>
      <nav className={open ? "is-open" : ""} aria-label="Homepage navigation">
        {links.map(([href, label]) => <Link href={href} key={href} onClick={() => setOpen(false)}>{label}</Link>)}
      </nav>
      <div className="home-header-actions">
        <SiteControls />
        <Link className="home-contact" href="/contact">যোগাযোগ করুন</Link>
        <button className="home-menu" type="button" aria-label="Toggle navigation" aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
