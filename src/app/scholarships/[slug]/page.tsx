import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { InnerPageShell } from "@/components/inner-page-shell";
import {
  getScholarshipGuide,
  scholarshipGuides,
} from "@/lib/scholarships";

export function generateStaticParams() {
  return scholarshipGuides.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guide = getScholarshipGuide(slug);

  if (!guide) return {};

  return {
    title: guide.title,
    description: guide.summary,
    alternates: { canonical: `/scholarships/${guide.slug}` },
  };
}

export default async function ScholarshipDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getScholarshipGuide(slug);

  if (!guide) notFound();

  return (
    <InnerPageShell>
      <article className="scholarship-detail">
        <header className="scholarship-detail-hero">
          <div className="container">
            <nav aria-label="Breadcrumb">
              <Link href="/scholarships">Scholarships</Link>
              <span aria-hidden="true">/</span>
              <Link href={`/scholarships?country=${guide.country}`}>
                {guide.country === "japan" ? "Japan" : "USA"}
              </Link>
            </nav>
            <span className="scholarship-eyebrow">{guide.label}</span>
            <p className="scholarship-detail-university">{guide.university}</p>
            <h1>{guide.title}</h1>
            <p>{guide.summary}</p>
            <div className="scholarship-quick-facts">
              <div><small>Funding</small><strong>{guide.funding}</strong></div>
              <div><small>Typical length</small><strong>{guide.duration}</strong></div>
              <div><small>Best for</small><strong>{guide.audience}</strong></div>
            </div>
          </div>
        </header>

        <div className="container scholarship-detail-layout">
          <div>
            <section className="scholarship-reality-check">
              <span>Reality check</span>
              <h2>এই opportunity আসলে কী?</h2>
              <p>{guide.realityCheck}</p>
            </section>

            <section className="scholarship-content-section">
              <span className="kicker">Funding at a glance</span>
              <h2>প্রথমে যে বিষয়গুলো বুঝতে হবে</h2>
              <ul className="scholarship-highlight-list">
                {guide.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </section>

            <section className="scholarship-content-section">
              <span className="kicker">Applicant fit</span>
              <h2>কার জন্য এই path ভালো?</h2>
              <ul className="scholarship-check-list">
                {guide.fit.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </section>

            <section className="scholarship-content-section scholarship-quick-start">
              <span className="kicker">Start here today</span>
              <h2>আজ প্রথম ৩০ মিনিটে যা করবেন</h2>
              <p>
                সবকিছু একসঙ্গে করার দরকার নেই। নিচের চারটি কাজ শেষ করলে
                application-এর সঠিক foundation তৈরি হয়ে যাবে।
              </p>
              <ol>
                {guide.quickStart.map((item, index) => (
                  <li key={item}>
                    <span>{index + 1}</span>
                    <p>{item}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section className="scholarship-content-section">
              <span className="kicker">Application roadmap</span>
              <h2>শুরু থেকে submit—সম্পূর্ণ application process</h2>
              <p className="scholarship-section-intro">
                প্রতিটি ধাপ ক্রমানুসারে শেষ করুন। “এই ধাপ শেষ হবে যখন” অংশটি
                মিলিয়ে তারপর পরের ধাপে যান।
              </p>
              <ol className="scholarship-roadmap">
                {guide.steps.map((step, index) => (
                  <li key={step.title}>
                    <span className="scholarship-step-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="scholarship-step-body">
                      <small>{step.timing}</small>
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                      <strong>এই ধাপে যা করবেন</strong>
                      <ul>
                        {step.actions.map((action) => (
                          <li key={action}>{action}</li>
                        ))}
                      </ul>
                      <div className="scholarship-ready-check">
                        <span aria-hidden="true">✓</span>
                        <p><strong>এই ধাপ শেষ হবে যখন:</strong> {step.readyWhen}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </section>

            <section className="scholarship-content-section scholarship-document-section">
              <span className="kicker">Preparation checklist</span>
              <h2>Documents to prepare</h2>
              <div>
                {guide.checklist.map((item) => <span key={item}>{item}</span>)}
              </div>
            </section>

            <section className="scholarship-content-section scholarship-after-submit">
              <span className="kicker">After submission</span>
              <h2>Submit করার পরে কী করবেন?</h2>
              <ol>
                {guide.afterSubmission.map((item, index) => (
                  <li key={item}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{item}</p>
                  </li>
                ))}
              </ol>
            </section>

            <section className="scholarship-content-section scholarship-cautions">
              <span className="kicker">Avoid common mistakes</span>
              <h2>Submit করার আগে সতর্ক থাকুন</h2>
              <ul>
                {guide.cautions.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </section>
          </div>

          <aside className="scholarship-source-panel">
            <span>Official resources</span>
            <h2>Verify before applying</h2>
            <p>Rules and dates may change. Continue from these official pages.</p>
            <div>
              {guide.officialLinks.map((link) => (
                <a href={link.href} key={link.href} target="_blank" rel="noreferrer">
                  <strong>{link.label} <span aria-hidden="true">↗</span></strong>
                  <small>{link.description}</small>
                </a>
              ))}
            </div>
            <small className="scholarship-reviewed">Information reviewed August 6, 2026</small>
          </aside>
        </div>

        <section className="container scholarship-detail-cta">
          <div>
            <span>Need a second pair of eyes?</span>
            <h2>আপনার application plan নিয়ে কথা বলুন।</h2>
          </div>
          <Link href={`/contact?topic=general&subject=${encodeURIComponent(`${guide.university} application question`)}`}>
            Ask a question <span aria-hidden="true">→</span>
          </Link>
        </section>
      </article>
    </InnerPageShell>
  );
}
