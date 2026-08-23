import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import portrait from "@/assets/halim-portrait-v2.png";
import manufacturingArt from "@/assets/about/manufacturing-facility.png";
import journeyArt from "@/assets/journey/hero-bangladesh-japan.png";
import roboticsArt from "@/assets/journey/stage-03-robotics.png";
import webArt from "@/assets/homepage/research-laptop-v2.png";
import { CvPrintButton } from "@/components/cv-print-button";
import { InnerPageShell } from "@/components/inner-page-shell";
import styles from "./cv.module.css";

export const metadata: Metadata = {
  title: "CV | Software & AI Engineer",
  description:
    "The curriculum vitae of Halim Md Abdul—Japan-based Software and AI Engineer working across computer vision, industrial automation, recommender systems and multi-agent systems.",
  alternates: { canonical: "/cv" },
  openGraph: {
    title: "Halim Md Abdul — Software & AI Engineer",
    description:
      "Research, engineering experience, publications and technical capabilities.",
    url: "/cv",
    type: "profile",
  },
};

const experience = [
  {
    image: manufacturingArt,
    dates: "Aug 2025 — Present",
    role: "System Engineer",
    company: "Aspark Co., Ltd.",
    location: "Japan",
    context: "Battery manufacturing software & computer vision",
    bullets: [
      "Develop manufacturing and decision-support software using C#, Python, JavaScript, React, Next.js and Oracle.",
      "Apply computer vision to verify production conditions, reduce preventable human error and improve factory-workflow reliability.",
      "Build automated reporting functions that retrieve process data and produce consistent daily reports.",
      "Contribute to implementation, unit and integration testing, production support and maintenance in a 19-member engineering project.",
    ],
  },
  {
    image: roboticsArt,
    dates: "Jan 2022 — Jul 2025",
    role: "Software / AI Engineer",
    company: "Niche Creation Co., Ltd.",
    location: "Yamanashi, Japan",
    context: "AI, robotics, computer vision & healthcare IoT",
    bullets: [
      "Designed and deployed AI-enabled robotic picking and visual-inspection systems from requirements through operational support.",
      "Built real-time pipelines with Python, OpenCV, YOLO, CNN/RCNN and OCR for detection, orientation, quality and damage analysis.",
      "Implemented a constraint-aware selection algorithm using position, distance, orientation and safe robot picking-angle ranges.",
      "Integrated C# desktop software with PLCs, touch panels, industrial cameras and robotic arms for synchronized control and traceability.",
      "Built web and mobile interfaces and REST API integrations for a hospital IoT monitoring system supporting patients with paralysis.",
    ],
  },
  {
    image: webArt,
    dates: "Jan 2018 — Sep 2019",
    role: "IT Engineer",
    company: "StoryIT",
    location: "Dhaka, Bangladesh",
    context: "Web platforms & business software",
    bullets: [
      "Developed an e-learning portal, sales-management software, responsive applications, administrative workflows and mobile APIs.",
      "Delivered payment integrations and production features using PHP, Laravel, MySQL, JavaScript, Bootstrap and WordPress.",
    ],
  },
];

const research = [
  {
    title: "Game Theory & Multi-Agent Systems",
    meta: "Fukuta Laboratory · Foundational study",
    description:
      "Developed working knowledge of strategic-form games, utility and payoff modelling, best-response reasoning, Nash equilibrium, cooperation, repeated interaction and auction/mechanism fundamentals.",
  },
  {
    title: "Health Management Recommender System",
    meta: "Shizuoka University · 2019–2021",
    description:
      "Investigated personalized recommendation methods for health-management and medical diagnostic-support applications, leading to two peer-reviewed or presented publications.",
  },
];

const publications = [
  {
    year: "2021",
    title:
      "Implementing Recommender System-based Approach for Health Management Mobile Application",
    authors: "Abdul, H. M., Ibrahim, I., & Fukuta, N.",
    venue: "17th International Conference on Quality in Research (QIR), pp. 187–190 · IEEE",
    href: "https://doi.org/10.1109/QIR54354.2021.9716190",
  },
  {
    year: "2020",
    title:
      "Preliminary analysis of recommender-based approach for medical diagnostic problems",
    authors: "Abdul, H. M., & Fukuta, N.",
    venue: "IEICE Technical Report, 120(281), AI2020-12, pp. 57–58",
  },
];

const skills = [
  {
    label: "Research & theory",
    items: "Game theory foundations, multi-agent systems, recommender systems, algorithm design, probability, statistics, optimization, experimental evaluation",
  },
  {
    label: "Programming",
    items: "Python, C#, JavaScript, PHP, SQL, VB.NET",
  },
  {
    label: "Machine learning & AI",
    items: "Computer vision, YOLO, CNN/RCNN, OCR, OpenCV, data preprocessing and model evaluation",
  },
  {
    label: "Web & mobile",
    items: "React, Next.js, ASP.NET Core, Laravel, Flutter, SwiftUI, REST APIs",
  },
  {
    label: "Data & systems",
    items: "Oracle, MySQL, Firebase, PLCs, industrial cameras, robotic arms, Git, Jira, SharePoint, Postman",
  },
];

export default function CvPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Halim Md Abdul",
    url: "https://halimslife.com/cv",
    email: "mailto:reiazbubt@gmail.com",
    jobTitle: "Software and AI Engineer",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Shizuoka University",
    },
    knowsAbout: [
      "Computer Vision",
      "Multi-Agent Systems",
      "Game Theory",
      "Recommender Systems",
      "Industrial Automation",
    ],
  };

  return (
    <InnerPageShell>
      <article className={`cv-page ${styles.page}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        <header className="cv-hero">
          <div className="container cv-hero-grid">
            <div className="cv-identity">
              <span className="cv-overline">Curriculum Vitae · 2026</span>
              <h1>Halim Md Abdul</h1>
              <p className="cv-role">Software / AI Engineer <span>—</span><br />Research-minded systems builder</p>
              <p className="cv-intro">আমি শিল্প অটোমেশন, কম্পিউটার ভিশন, healthcare IoT এবং web applications-এর জন্য production systems তৈরি করি।</p>
              <p className="cv-intro">I build production systems across industrial automation, computer vision, healthcare IoT and web applications.</p>
              <div className="cv-actions">
                <CvPrintButton />
                <a href="mailto:reiazbubt@gmail.com">
                  Email me <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>

            <aside className="cv-profile-card">
              <div className="cv-photo">
                <Image
                  src={portrait}
                  alt="Halim Md Abdul"
                  fill
                  priority
                  sizes="(max-width: 700px) 220px, 250px"
                />
              </div>
              <div className="cv-profile-copy">
                <span>Based in</span><strong>Japan</strong>
                <span>Education</span><strong>M.Sc. in Informatics</strong>
                <span>Focus</span><strong>Software · AI · Research</strong>
              </div>
            </aside>
            <Image className="cv-hero-art" src={journeyArt} alt="Mount Fuji and Japanese pagoda watercolor" fill priority sizes="52vw" />
          </div>
          <div className="container cv-contact-strip" aria-label="Contact details">
            <a href="mailto:reiazbubt@gmail.com">reiazbubt@gmail.com</a>
            <a href="tel:+817021656683">+81 70-2165-6683</a>
            <a href="https://scholar.google.com/citations?hl=en&user=KtZ4jcMAAAAJ" target="_blank" rel="noreferrer">Google Scholar ↗</a>
            <a href="https://github.com/halimmdabdul" target="_blank" rel="noreferrer">GitHub ↗</a>
          </div>
        </header>

        <div className="container cv-document">
          <aside className="cv-index" aria-label="CV sections">
            <span>On this page</span>
            <nav>
              <a href="#profile">Profile</a>
              <a href="#experience">Experience</a>
              <a href="#research">Research</a>
              <a href="#publications">Publications</a>
              <a href="#skills">Skills</a>
            </nav>
          </aside>

          <div className="cv-content">
            <section className="cv-section cv-profile-section" id="profile">
              <div className="cv-section-label"><span>01</span><strong>Research profile</strong></div>
              <div>
                <h2>Engineering systems shaped by research thinking.</h2>
                <p>
                  Software and AI engineer with an M.Sc. in Informatics,
                  peer-reviewed research in health recommender systems and graduate
                  research experience in the Fukuta Laboratory at Shizuoka University.
                  My current interests include strategic decision-making, learning in
                  multi-agent settings and data-driven algorithm design.
                </p>
                <div className="cv-interest-cloud" aria-label="Research interests">
                  {["Multi-Agent Systems", "Game-Theoretic Decision-Making", "Learning in Games", "Machine Learning", "Optimization", "Recommender Systems"].map((interest) => (
                    <span key={interest}>{interest}</span>
                  ))}
                </div>
                <blockquote>
                  My objective is to investigate settings where multiple agents or
                  stakeholders have different goals and respond to one another
                  strategically—especially learning in games, Stackelberg-type
                  interactions and incentive-aware recommendation.
                </blockquote>
              </div>
            </section>

            <section className="cv-section" id="experience">
              <div className="cv-section-label"><span>02</span><strong>Experience</strong></div>
              <div>
                <h2>From product code to production systems.</h2>
                <div className="cv-timeline">
                  {experience.map((item) => (
                    <article key={`${item.company}-${item.role}`}>
                      <div className="cv-timeline-marker" aria-hidden="true" />
                      <div className="cv-experience-image"><Image src={item.image} alt="" fill sizes="190px" /></div>
                      <p className="cv-date">{item.dates}</p>
                      <h3>{item.role}</h3>
                      <p className="cv-company">{item.company} · {item.location}</p>
                      <p className="cv-context">{item.context}</p>
                      <ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section className="cv-section" id="research">
              <div className="cv-section-label"><span>03</span><strong>Education & research</strong></div>
              <div>
                <h2>Research foundation.</h2>
                <article className="cv-education-card">
                  <span>Sep 2019 — Sep 2021</span>
                  <h3>M.Sc. in Informatics</h3>
                  <p>Shizuoka University · Fukuta Laboratory · Shizuoka, Japan</p>
                  <strong>Scholarship recipient for graduate study in Japan</strong>
                </article>
                <div className="cv-research-grid">
                  {research.map((item) => (
                    <article key={item.title}>
                      <span>{item.meta}</span>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section className="cv-section" id="publications">
              <div className="cv-section-label"><span>04</span><strong>Publications</strong></div>
              <div>
                <h2>Selected research output.</h2>
                <div className="cv-publication-list">
                  {publications.map((publication) => (
                    <article key={publication.title}>
                      <span>{publication.year}</span>
                      <div>
                        <h3>{publication.title}</h3>
                        <p>{publication.authors}</p>
                        <small>{publication.venue}</small>
                      </div>
                      {publication.href ? <a href={publication.href} target="_blank" rel="noreferrer" aria-label={`Open ${publication.title}`}>↗</a> : null}
                    </article>
                  ))}
                </div>
              </div>
            </section>

            <section className="cv-section" id="skills">
              <div className="cv-section-label"><span>05</span><strong>Capabilities</strong></div>
              <div>
                <h2>Technical & research toolkit.</h2>
                <div className="cv-skills-grid">
                  {skills.map((skill) => (
                    <article key={skill.label}><h3>{skill.label}</h3><p>{skill.items}</p></article>
                  ))}
                </div>
                <div className="cv-languages">
                  <h3>Languages</h3>
                  <div><span>Bengali <small>Native</small></span><span>English <small>Professional working</small></span><span>Japanese <small>Professional environments</small></span></div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <section className="container cv-closing">
          <Image src={journeyArt} alt="Japanese landscape watercolor" fill sizes="1120px" />
          <div><span>Open to meaningful research & engineering conversations</span><h2>Let&apos;s build systems that make better decisions.</h2></div>
          <Link href="/contact?topic=career&subject=CV%20and%20career%20conversation">Start a conversation <span aria-hidden="true">→</span></Link>
        </section>
      </article>
    </InnerPageShell>
  );
}
