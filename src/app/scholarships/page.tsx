import type { Metadata } from "next";
import Link from "next/link";

import { InnerPageShell } from "@/components/inner-page-shell";
import {
  scholarshipGuides,
  type ScholarshipCountry,
} from "@/lib/scholarships";

export const metadata: Metadata = {
  title: "Scholarships | USA & Japan Graduate Funding Guides",
  description:
    "Practical, source-checked guides to graduate funding and scholarship opportunities in the USA and Japan.",
  alternates: { canonical: "/scholarships" },
};

const countries: { value: ScholarshipCountry; label: string; detail: string }[] = [
  {
    value: "usa",
    label: "USA",
    detail: `${scholarshipGuides.filter((guide) => guide.country === "usa").length} guides`,
  },
  { value: "japan", label: "Japan", detail: "Coming soon" },
];

export default async function ScholarshipsPage({
  searchParams,
}: {
  searchParams: Promise<{ country?: string }>;
}) {
  const params = await searchParams;
  const activeCountry: ScholarshipCountry =
    params.country === "japan" ? "japan" : "usa";
  const guides = scholarshipGuides.filter(
    (guide) => guide.country === activeCountry,
  );

  return (
    <InnerPageShell>
      <section className="scholarship-hero">
        <div className="container scholarship-hero-grid">
          <div>
            <span className="scholarship-eyebrow">Scholarship navigator</span>
            <h1>Funding খুঁজুন—তারপর smartভাবে apply করুন।</h1>
            <p>
              USA ও Japan-এর graduate opportunity বুঝতে clear, practical guide।
              প্রতিটি page official source যাচাই করে application-এর বাস্তব flow
              সহজ ভাষায় ব্যাখ্যা করে।
            </p>
          </div>
          <aside>
            <strong>Before you apply</strong>
            <p>
              “Scholarship”, funded admission এবং application portal এক জিনিস নয়।
              আমরা প্রতিটি opportunity আসলে কী—সেটি আগে পরিষ্কার করি।
            </p>
            <span>Source-checked · Updated July 2026</span>
          </aside>
        </div>
      </section>

      <div className="scholarship-index container">
        <div className="scholarship-tabs" aria-label="Filter by country">
          {countries.map((country) => (
            <Link
              href={`/scholarships?country=${country.value}`}
              key={country.value}
              aria-current={activeCountry === country.value ? "page" : undefined}
            >
              <span>{country.label}</span>
              <small>{country.detail}</small>
            </Link>
          ))}
        </div>

        <div className="scholarship-section-heading">
          <div>
            <span className="kicker">{activeCountry} opportunities</span>
            <h2>
              {activeCountry === "usa"
                ? `${guides.length} practical guides for your next application.`
                : "Japan guides are being carefully prepared."}
            </h2>
          </div>
          <p>
            Details can change between admission cycles. Always confirm the final
            deadline, eligibility and funding on the linked official website.
          </p>
        </div>

        {guides.length > 0 ? (
          <div className="scholarship-card-grid">
            {guides.map((guide, index) => (
              <article className="scholarship-card" key={guide.slug}>
                <div className="scholarship-card-top">
                  <span>0{index + 1} · USA</span>
                  <small>{guide.label}</small>
                </div>
                <p className="scholarship-university">{guide.university}</p>
                <h3>{guide.title}</h3>
                <p>{guide.summary}</p>
                <dl>
                  <div><dt>Funding</dt><dd>{guide.funding}</dd></div>
                  <div><dt>Best for</dt><dd>{guide.audience}</dd></div>
                </dl>
                <Link href={`/scholarships/${guide.slug}`}>
                  Read the complete guide <span aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <section className="scholarship-empty-state">
            <span aria-hidden="true">日本</span>
            <div>
              <strong>Japan scholarship guides are coming next.</strong>
              <p>
                MEXT Embassy Recommendation, University Recommendation এবং
                university-specific funding নিয়ে verified guide প্রস্তুত হচ্ছে।
              </p>
            </div>
            <Link href="/contact?topic=general&subject=Japan%20scholarship%20guide">
              Request a Japan guide <span aria-hidden="true">→</span>
            </Link>
          </section>
        )}

        <section className="scholarship-note">
          <strong>Important</strong>
          <p>
            এই guides informational support—admission বা funding guarantee নয়।
            University-এর official page এবং written offer সবসময় চূড়ান্ত authority।
          </p>
        </section>
      </div>
    </InnerPageShell>
  );
}
