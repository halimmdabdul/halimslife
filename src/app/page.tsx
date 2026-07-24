import Image, { type StaticImageData } from "next/image";

import heroRobotics from "@/assets/hero/slide-1.jpeg";
import heroCode from "@/assets/hero/slide-3.jpeg";
import heroJapan from "@/assets/hero/slide-5.jpeg";
import profileImage from "@/assets/profile.webp";

const projects = [
  {
    number: "01",
    title: "KanaStory",
    eyebrow: "Japanese learning",
    description:
      "A story-led, interactive way to make hiragana and katakana feel memorable—not mechanical.",
    href: "https://kanastory.halimslife.com/",
    image: heroJapan,
  },
  {
    number: "02",
    title: "JLPT Learning Hubs",
    eyebrow: "Education systems",
    description:
      "Focused roadmaps, vocabulary, grammar and practice resources for learners moving from N5 toward fluency.",
    href: "https://n5.halimslife.com/",
    image: heroCode,
  },
  {
    number: "03",
    title: "Engineering Notes",
    eyebrow: "Knowledge sharing",
    description:
      "Practical field notes on engineering work, communication and building a career in Japan.",
    href: "#writing",
    image: heroRobotics,
  },
];

const expertise = [
  {
    mark: "CV",
    title: "Computer Vision",
    description:
      "Perception, camera pipelines and translating visual data into dependable engineering decisions.",
  },
  {
    mark: "RX",
    title: "Robotics & Systems",
    description:
      "Working across sensors, software and real-world constraints with a systems-first mindset.",
  },
  {
    mark: "JP",
    title: "Engineering in Japan",
    description:
      "Clear documentation, shared context and consistent delivery inside Japanese product teams.",
  },
  {
    mark: "ED",
    title: "Education Design",
    description:
      "Turning difficult Japanese and programming concepts into Bengali-friendly learning paths.",
  },
];

const publications = [
  {
    year: "2021",
    title:
      "Implementing recommender system-based approach for health management mobile application",
    venue: "IEEE · 17th International Conference on Quality in Research",
  },
  {
    year: "2020",
    title:
      "Preliminary analysis of recommender-based approach for medical diagnostic problems",
    venue: "IEICE Technical Report · Vol. 120, Issue 281",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <>
      <header className="site-header">
        <a className="brand-mark" href="#top" aria-label="Halim home">
          H<span>.</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#research">Research</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="mailto:reiazbubt@gmail.com">
          Let&apos;s talk <Arrow />
        </a>
      </header>

      <main id="top">
        <section className="hero shell">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="status-dot" />
              Software engineer · Japan
            </p>
            <h1>
              I build intelligent systems
              <span>—and make complex ideas useful.</span>
            </h1>
            <p className="hero-intro">
              I&apos;m <strong>Halim Md Abdul</strong>, a software engineer
              working at the intersection of robotics, computer vision and
              human learning.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore my work <span>↓</span>
              </a>
              <a
                className="text-link"
                href="https://scholar.google.com/citations?hl=en&user=KtZ4jcMAAAAJ"
                target="_blank"
                rel="noreferrer"
              >
                Google Scholar <Arrow />
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="portrait-frame">
              <Image
                src={profileImage}
                alt="Halim Md Abdul in Japan"
                fill
                priority
                sizes="(max-width: 800px) 88vw, 38vw"
              />
            </div>
            <div className="floating-note note-location">
              <span>Based in</span>
              Japan · 日本
            </div>
            <div className="floating-note note-focus">
              <span>Current focus</span>
              Perception / Vision
            </div>
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
          </div>
        </section>

        <section className="signal-strip" aria-label="Core disciplines">
          <div>
            <span>Robotics</span>
            <i>✦</i>
            <span>Computer Vision</span>
            <i>✦</i>
            <span>Japan</span>
            <i>✦</i>
            <span>Research</span>
            <i>✦</i>
            <span>Education</span>
          </div>
        </section>

        <section className="about shell section" id="about">
          <div className="section-label">01 / About</div>
          <div className="about-content">
            <p className="lead-statement">
              Engineering has taught me to see the whole system. Living in
              Japan has taught me to notice every detail.
            </p>
            <div className="about-grid">
              <p>
                I&apos;m a software engineer at{" "}
                <strong>Prime Planet Energy &amp; Solutions (PPES)</strong> in
                Japan, with a Master&apos;s in Computer Science from Shizuoka
                University. My technical work centers on perception, sensors,
                camera pipelines and practical problem-solving.
              </p>
              <p>
                Beyond engineering, I create Bengali-friendly paths for
                learning Japanese and programming. My aim is simple: turn
                experience into something another person can use to move
                forward.
              </p>
            </div>
            <div className="fact-row">
              <div>
                <strong>MSc</strong>
                <span>Computer Science</span>
              </div>
              <div>
                <strong>2</strong>
                <span>Research publications</span>
              </div>
              <div>
                <strong>N5—N1</strong>
                <span>Learning ecosystem</span>
              </div>
            </div>
          </div>
        </section>

        <section className="expertise section">
          <div className="shell">
            <div className="section-heading">
              <div>
                <div className="section-label light">02 / Expertise</div>
                <h2>Where technology meets real life.</h2>
              </div>
              <p>
                Depth in engineering. Range across cultures. A bias toward
                clarity.
              </p>
            </div>
            <div className="expertise-grid">
              {expertise.map((item) => (
                <article key={item.title} className="expertise-card">
                  <span className="expertise-mark">{item.mark}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="work shell section" id="work">
          <div className="section-heading dark">
            <div>
              <div className="section-label">03 / Selected work</div>
              <h2>Building tools that help people progress.</h2>
            </div>
            <p>
              A growing ecosystem spanning language learning, engineering and
              open knowledge.
            </p>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <ProjectCard key={project.number} {...project} />
            ))}
          </div>
        </section>

        <section className="research section" id="research">
          <div className="research-layout shell">
            <div className="research-intro">
              <div className="section-label light">04 / Research</div>
              <h2>Curiosity, tested.</h2>
              <p>
                My academic work explored recommender systems in health
                management and medical diagnostic contexts.
              </p>
              <a
                className="button button-light"
                href="https://scholar.google.com/citations?hl=en&user=KtZ4jcMAAAAJ"
                target="_blank"
                rel="noreferrer"
              >
                View Scholar profile <Arrow />
              </a>
            </div>
            <div className="publication-list">
              {publications.map((publication) => (
                <article key={publication.title}>
                  <span>{publication.year}</span>
                  <div>
                    <h3>{publication.title}</h3>
                    <p>{publication.venue}</p>
                  </div>
                  <Arrow />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="writing shell section" id="writing">
          <div className="section-label">05 / Ideas I share</div>
          <div className="writing-grid">
            <article>
              <span>Engineering</span>
              <h3>What Japan taught me about clarity at work</h3>
              <p>Documentation, context and the quiet power of consistency.</p>
            </article>
            <article>
              <span>Learning</span>
              <h3>A better roadmap from kana to JLPT</h3>
              <p>Build confidence in layers instead of memorizing in panic.</p>
            </article>
            <article>
              <span>Programming</span>
              <h3>Strong fundamentals beat fast tutorials</h3>
              <p>Problem decomposition, debugging and deliberate practice.</p>
            </article>
          </div>
        </section>

        <section className="contact shell" id="contact">
          <p className="eyebrow">
            <span className="status-dot" />
            Open to meaningful conversations
          </p>
          <h2>
            Let&apos;s build something
            <span>worth understanding.</span>
          </h2>
          <div className="contact-bottom">
            <p>
              Research, engineering, education—or an idea that connects all
              three.
            </p>
            <a href="mailto:reiazbubt@gmail.com">
              reiazbubt@gmail.com <Arrow />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer shell">
        <a className="brand-mark" href="#top">
          H<span>.</span>
        </a>
        <p>© {new Date().getFullYear()} Halim Md Abdul</p>
        <div>
          <a
            href="https://github.com/halimmdabdul"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://scholar.google.com/citations?hl=en&user=KtZ4jcMAAAAJ"
            target="_blank"
            rel="noreferrer"
          >
            Scholar
          </a>
          <a href="mailto:reiazbubt@gmail.com">Email</a>
        </div>
      </footer>
    </>
  );
}

function ProjectCard({
  number,
  title,
  eyebrow,
  description,
  href,
  image,
}: {
  number: string;
  title: string;
  eyebrow: string;
  description: string;
  href: string;
  image: StaticImageData;
}) {
  return (
    <a
      className="project-card"
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
    >
      <div className="project-image">
        <Image
          src={image}
          alt=""
          fill
          sizes="(max-width: 800px) 100vw, 40vw"
        />
      </div>
      <div className="project-copy">
        <div>
          <span className="project-number">{number}</span>
          <span className="project-eyebrow">{eyebrow}</span>
        </div>
        <h3>{title}</h3>
        <p>{description}</p>
        <span className="project-link">
          Explore project <Arrow />
        </span>
      </div>
    </a>
  );
}
