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
  {
    value: "japan",
    label: "Japan",
    detail: `${scholarshipGuides.filter((guide) => guide.country === "japan").length} guides`,
  },
];

const japanPlanningGroups = [
  {
    label: "Act now",
    tone: "urgent",
    text: "Deadlines are live or preparation should already be underway.",
    guides: ["Aoyama SMIPRP · Aug 24, 09:00 JST · postal cutoff confirm", "Tsukuba MBA-IB · Aug 25–Sep 11 · work experience + interview", "JAIST · Sep 4–16 · essay + online oral", "NUCB MiM · Oct 24, 18:00 JST · IELTS 6.0/English-degree waiver · high cost", "University of Aizu · Dec 7–14, 17:00 JST · supervisor + on-campus English oral", "Tsukuba AISIP", "IUJ", "GRIPS", "Hyogo Global Business · Jan 6–13 · guide pending", "Ritsumeikan GSISE · Jan 7–21 · supervisor + written exam"],
  },
  {
    label: "Confirm next",
    tone: "verify",
    text: "Good options, but the exact intake, language or 2027 guide needs confirmation.",
    guides: ["Musashino Data Science · Aug 18–27 · language check", "Hiroshima SmaSo · Jan 5–12 · guide due Oct", "FUN Hakodate · Jan 5–13 · intake + English plan", "TCU Informatics · Jan 7–14 · supervisor + exam route", "Saitama MEcon · Sep–Oct 2026 guide pending", "Ritsumeikan MPED · Sep 2027 guide pending", "Hokkaido GFR · late-Oct guide · adviser first", "SIT SSFS · pre-consult by Oct 30 · Nov 16–27 · self-funded", "TUT International Master’s + MEXT", "Hosei IIST · Sep 2027 guide pending · IELTS 5.5 · MOI not accepted", "Kobe KIC · Oct 2027 English guide pending · TOEFL 80-equivalent", "TUMSAT · guide late Oct · Nov 30–Dec 3 · technical exam", "Meiji MPP · Sep-only · 2027 guide pending · essay + interview"],
  },
  {
    label: "Eligibility watch",
    tone: "caution",
    text: "Do not apply until the profile and route-specific restriction is resolved.",
    guides: ["Saitama ESITI · doctoral only · direct route requires overseas residence"],
  },
] as const;

const usaPlanningGroups = [
  {
    label: "Strongest active lead",
    tone: "urgent",
    text: "The lab currently advertises funded PhD hiring and the research fit is unusually strong.",
    guides: ["Alabama · AutMn Trustworthy Autonomy Lab"],
  },
  {
    label: "Email before applying",
    tone: "verify",
    text: "The opportunity page exists, but the exact Fall 2027 seat must be confirmed in writing.",
    guides: ["SIU · Mobile Distributed Computing Lab", "UMBC · Haibin Zhang"],
  },
  {
    label: "Funding deadlines",
    tone: "caution",
    text: "Prepare tests and documents early; a professor reply does not replace the graduate application.",
    guides: ["Alabama · Dec 31", "SIU · Dec 31", "UMBC · Jan 7"],
  },
] as const;

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
            <span>Source-checked · Updated August 2026</span>
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
                : `${guides.length} verified routes to study and funding in Japan.`}
            </h2>
          </div>
          <p>
            Details can change between admission cycles. Always confirm the final
            deadline, eligibility and funding on the linked official website.
          </p>
        </div>

        <section className="scholarship-planning-map" aria-labelledby="scholarship-planning-title">
            <header>
              <span className="kicker">Quick decision map</span>
              <h2 id="scholarship-planning-title">কোন option এখন কীভাবে দেখবেন?</h2>
              <p>
                Funding claim admission guarantee নয়। আগে status group দেখুন,
                তারপর নিচের complete guide খুলে exact action নিন।
              </p>
            </header>
            <div>
              {(activeCountry === "japan" ? japanPlanningGroups : usaPlanningGroups).map((group) => (
                <article data-tone={group.tone} key={group.label}>
                  <strong>{group.label}</strong>
                  <p>{group.text}</p>
                  <ul>
                    {group.guides.map((guide) => <li key={guide}>{guide}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </section>

        {guides.length > 0 ? (
          <div className="scholarship-card-grid">
            {guides.map((guide, index) => (
              <article className="scholarship-card" key={guide.slug}>
                <div className="scholarship-card-top">
                  <span>0{index + 1} · {guide.country.toUpperCase()}</span>
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
