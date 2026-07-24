import Image from "next/image";
import Link from "next/link";
import { connection } from "next/server";

import japanLife from "@/assets/hero/slide-5.jpeg";
import profileWide from "@/assets/halim-wide.webp";
import profileImage from "@/assets/profile.webp";
import { SiteHeader } from "@/components/site-header";
import { TranslatedText } from "@/components/site-preferences";

const focusAreas = [
  {
    icon: "⌁",
    title: "Robotics & Computer Vision",
    text: "Perception, camera pipeline, sensor data এবং real-world engineering problem নিয়ে কাজ করি।",
  },
  {
    icon: "あ",
    title: "Japanese Learning",
    text: "বাংলাভাষীদের জন্য Kana থেকে JLPT N1 পর্যন্ত সহজ learning path তৈরি করছি।",
  },
  {
    icon: "</>",
    title: "Programming Fundamentals",
    text: "Syntax নয়—problem solving, debugging mindset ও strong foundation শেখাতে চাই।",
  },
];

const projects = [
  {
    tag: "Featured project",
    title: "KanaStory",
    text: "হিরাগানা ও কাতাকানা শেখার জন্য story-based interactive learning experience।",
    link: "https://kanastory.halimslife.com/",
    linkText: "KanaStory দেখুন",
    accent: "green",
  },
  {
    tag: "Learning ecosystem",
    title: "JLPT বাংলা হাব",
    text: "N5 থেকে N1—ভোকাবুলারি, গ্রামার, roadmap এবং practice resource এক জায়গায়।",
    link: "https://n5.halimslife.com/",
    linkText: "N5 দিয়ে শুরু করুন",
    accent: "blue",
  },
  {
    tag: "Open knowledge",
    title: "Engineering Notes",
    text: "জাপানে engineering career, কাজের culture এবং practical programming নিয়ে লেখা।",
    link: "/insights",
    linkText: "লেখাগুলো দেখুন",
    accent: "orange",
  },
];

const timeline = [
  {
    year: "এখন",
    title: "Software Engineer · PPES, Japan",
    text: "Robotics, perception এবং computer vision-এর real-world application নিয়ে কাজ করছি।",
  },
  {
    year: "MSc",
    title: "Shizuoka University, Japan",
    text: "Computer Science-এ Master of Science সম্পন্ন করেছি এবং recommender system নিয়ে research করেছি।",
  },
  {
    year: "শুরু",
    title: "Bangladesh to Japan",
    text: "Curiosity, consistency এবং প্রতিদিন একটু করে শেখা—এই তিনটি জিনিসই আমার journey-র ভিত্তি।",
  },
];

const articles = [
  {
    category: "জাপানে ক্যারিয়ার",
    title: "জাপানের engineering team-এ কাজ করে আমি যা শিখেছি",
    text: "Communication, documentation আর context share করা কেন technical skill-এর মতোই গুরুত্বপূর্ণ।",
  },
  {
    category: "জাপানি ভাষা",
    title: "একদম শুরু থেকে JLPT-এর প্রস্তুতি নেবেন যেভাবে",
    text: "ভয় না পেয়ে ছোট ছোট milestone দিয়ে নিজের জন্য একটি practical roadmap বানান।",
  },
  {
    category: "প্রোগ্রামিং",
    title: "Tutorial কম, problem solving বেশি—strong base-এর formula",
    text: "কোড মুখস্থ না করে problem ভাঙতে, ভুল ধরতে এবং নিজে চিন্তা করতে শিখুন।",
  },
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export const metadata = {
  alternates: {
    canonical: "/",
  },
};

export default async function Home() {
  await connection();

  const personStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Halim Md Abdul",
    url: "https://halimslife.com",
    image: "https://halimslife.com/opengraph-image",
    jobTitle: "Software Engineer",
    email: "mailto:reiazbubt@gmail.com",
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Shizuoka University",
    },
    sameAs: [
      "https://github.com/halimmdabdul",
      "https://scholar.google.com/citations?hl=en&user=KtZ4jcMAAAAJ",
    ],
    knowsAbout: [
      "Robotics",
      "Computer Vision",
      "Programming",
      "Japanese language education",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personStructuredData).replace(/</g, "\\u003c"),
        }}
      />
      <SiteHeader />

      <main>
        <section className="personal-hero container">
          <div className="hero-text">
            <div className="welcome-pill">
              <span>👋</span>{" "}
              <TranslatedText
                bn="আসসালামু আলাইকুম, আমি হালিম"
                en="Hello, I’m Halim"
                ja="こんにちは、ハリムです"
              />
            </div>
            <h1>
              <TranslatedText
                bn="বাংলাদেশ থেকে জাপান—"
                en="From Bangladesh to Japan—"
                ja="バングラデシュから日本へ—"
              />
              <span>
                <TranslatedText
                  bn="শেখা, কাজ আর এগিয়ে যাওয়ার গল্প।"
                  en="A story of learning, building and moving forward."
                  ja="学び、働き、前へ進み続ける物語。"
                />
              </span>
            </h1>
            <p className="hero-description">
              <TranslatedText
                bn={
                  <>
                    আমি <strong>Halim Md Abdul</strong>। জাপানে কর্মরত একজন
                    Software Engineer। Robotics, Computer Vision ও programming
                    নিয়ে কাজ করি; আর নিজের অভিজ্ঞতা দিয়ে মানুষকে Japanese ও
                    tech career-এ এগিয়ে যেতে সাহায্য করি।
                  </>
                }
                en={
                  <>
                    I’m <strong>Halim Md Abdul</strong>, a software engineer in
                    Japan working with robotics, computer vision and practical
                    software—and sharing what I learn along the way.
                  </>
                }
                ja={
                  <>
                    日本で働くソフトウェアエンジニア、
                    <strong>Halim Md Abdul</strong>です。ロボティクス、
                    コンピュータビジョン、実践的なソフトウェア開発に取り組み、
                    学びを発信しています。
                  </>
                }
              />
            </p>
            <div className="hero-buttons">
              <a className="primary-button" href="/about">
                <TranslatedText
                  bn="আমার গল্প জানুন"
                  en="Discover my story"
                  ja="私のストーリー"
                />{" "}
                <span>↓</span>
              </a>
              <a
                className="secondary-button"
                href="https://scholar.google.com/citations?hl=en&user=KtZ4jcMAAAAJ"
                target="_blank"
                rel="noreferrer"
              >
                Research profile <Arrow />
              </a>
            </div>
            <div className="mini-proof">
              <div>
                <strong>Japan</strong>
                <span>
                  <TranslatedText
                    bn="বর্তমান ঠিকানা"
                    en="Based in"
                    ja="活動拠点"
                  />
                </span>
              </div>
              <div>
                <strong>MSc</strong>
                <span>Computer Science</span>
              </div>
              <div>
                <strong>2+</strong>
                <span>Publications</span>
              </div>
            </div>
          </div>

          <div className="hero-photo-area">
            <div className="sun-shape" />
            <div className="dot-pattern" />
            <div className="main-photo">
              <Image
                src={profileWide}
                alt="জাপানে হালিম"
                fill
                priority
                sizes="(max-width: 800px) 92vw, 42vw"
              />
            </div>
            <div className="photo-badge badge-job">
              <span className="badge-icon">⚙</span>
              <div>
                <small>বর্তমানে</small>
                <strong>Software Engineer</strong>
              </div>
            </div>
            <div className="photo-badge badge-place">
              <span className="japan-dot" />
              <div>
                <small>কর্মস্থল</small>
                <strong>Japan · 日本</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="trust-bar">
          <div className="container">
            <p>
              <TranslatedText
                bn="আমার কাজ ও আগ্রহ"
                en="Work & interests"
                ja="仕事と関心分野"
              />
            </p>
            <div>
              <span>Robotics</span>
              <i />
              <span>Computer Vision</span>
              <i />
              <span>Japanese Language</span>
              <i />
              <span>Programming</span>
              <i />
              <span>Research</span>
            </div>
          </div>
        </section>

        <section className="about-me container section" id="about">
          <div className="section-intro">
            <span className="kicker">
              <TranslatedText bn="আমার সম্পর্কে" en="About me" ja="私について" />
            </span>
            <h2>
              <TranslatedText
                bn={
                  <>
                    একজন engineer,
                    <br />
                    আজীবন একজন learner।
                  </>
                }
                en={
                  <>
                    An engineer,
                    <br />a lifelong learner.
                  </>
                }
                ja={
                  <>
                    エンジニアとして、
                    <br />
                    生涯学び続ける。
                  </>
                }
              />
            </h2>
          </div>
          <div className="about-body">
            <p className="about-lead">
              আমার বিশ্বাস—সঠিক guidance আর নিয়মিত চেষ্টা থাকলে, কঠিন পথও সহজ
              হয়ে যায়।
            </p>
            <p>
              আমি বর্তমানে জাপানের{" "}
              <strong>Prime Planet Energy &amp; Solutions (PPES)</strong>-এ
              Software Engineer হিসেবে কাজ করছি। Shizuoka University থেকে
              Computer Science-এ MSc সম্পন্ন করেছি।
            </p>
            <p>
              জাপানে পড়াশোনা, চাকরি এবং প্রতিদিনের জীবন থেকে শেখা বিষয়গুলো আমি
              সহজ বাংলায় share করি—যাতে বাংলাদেশের একজন শিক্ষার্থীও নিজের
              journey শুরু করার confidence পায়।
            </p>
            <div className="signature">Halim</div>
          </div>
        </section>

        <section className="focus-section section">
          <div className="container">
            <div className="center-heading">
              <span className="kicker">
                <TranslatedText bn="আমি যা করি" en="What I do" ja="取り組み" />
              </span>
              <h2>
                <TranslatedText
                  bn="Technology, learning এবং মানুষের growth"
                  en="Technology, learning and human growth"
                  ja="テクノロジー、学び、人の成長"
                />
              </h2>
              <p>
                আমার কাজের প্রতিটি জায়গায় একটি common goal—জটিল বিষয়কে সহজ,
                practical এবং useful করা।
              </p>
            </div>
            <div className="focus-grid">
              {focusAreas.map((item) => (
                <article key={item.title}>
                  <span className="focus-icon">{item.icon}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="journey-section container section" id="journey">
          <div className="journey-photo">
            <Image
              src={profileImage}
              alt="Halim Md Abdul"
              fill
              sizes="(max-width: 800px) 92vw, 38vw"
            />
            <div className="journey-quote">
              “Curiosity আমাকে শুরু করিয়েছে,
              <br />
              consistency আমাকে এগিয়ে নিয়েছে।”
            </div>
          </div>
          <div className="journey-content">
            <span className="kicker">
              <TranslatedText bn="আমার জার্নি" en="My journey" ja="これまでの歩み" />
            </span>
            <h2>
              <TranslatedText
                bn="প্রতিটি ধাপ আমাকে নতুন কিছু শিখিয়েছে।"
                en="Every step has taught me something new."
                ja="一歩一歩が、新しい学びにつながりました。"
              />
            </h2>
            <div className="timeline">
              {timeline.map((item, index) => (
                <article key={item.title}>
                  <div className="timeline-marker">
                    <span>{index + 1}</span>
                    {index !== timeline.length - 1 ? <i /> : null}
                  </div>
                  <div>
                    <small>{item.year}</small>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="projects-section section" id="projects">
          <div className="container">
            <div className="split-heading">
              <div>
                <span className="kicker">
                  <TranslatedText
                    bn="আমার প্রজেক্ট"
                    en="My projects"
                    ja="プロジェクト"
                  />
                </span>
                <h2>
                  <TranslatedText
                    bn="শেখার পথকে সহজ করার ছোট ছোট উদ্যোগ।"
                    en="Small initiatives that make learning easier."
                    ja="学びをもっと身近にする、小さな挑戦。"
                  />
                </h2>
              </div>
              <p>
                নিজের শেখা ও অভিজ্ঞতাকে tools, resources এবং community value-তে
                রূপ দেওয়ার চেষ্টা।
              </p>
            </div>
            <div className="project-grid">
              {projects.map((project) => (
                <a
                  key={project.title}
                  className={`project-box ${project.accent}`}
                  href={project.link}
                  target={project.link.startsWith("http") ? "_blank" : undefined}
                  rel={
                    project.link.startsWith("http") ? "noreferrer" : undefined
                  }
                >
                  <span className="project-tag">{project.tag}</span>
                  <h3>{project.title}</h3>
                  <p>{project.text}</p>
                  <span className="project-action">
                    {project.linkText} <Arrow />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section className="research-card container">
          <div className="research-copy">
            <span className="kicker light">Research & Publications</span>
            <h2>Research আমাকে evidence দিয়ে চিন্তা করতে শিখিয়েছে।</h2>
            <p>
              Health management এবং medical diagnostic problem-এ recommender
              system-based approach নিয়ে আমার academic research প্রকাশিত হয়েছে
              IEEE এবং IEICE-তে।
            </p>
            <a
              href="https://scholar.google.com/citations?hl=en&user=KtZ4jcMAAAAJ"
              target="_blank"
              rel="noreferrer"
            >
              Google Scholar দেখুন <Arrow />
            </a>
          </div>
          <div className="research-visual">
            <span className="big-number">02</span>
            <p>Published research works</p>
            <div className="paper-lines">
              <span />
              <span />
              <span />
            </div>
          </div>
        </section>

        <section className="insights container section" id="insights">
          <div className="split-heading compact">
            <div>
              <span className="kicker">
                <TranslatedText
                  bn="আমার লেখালেখি"
                  en="My writing"
                  ja="記事・発信"
                />
              </span>
              <h2>
                <TranslatedText
                  bn="অভিজ্ঞতা থেকে practical কথা।"
                  en="Practical ideas from lived experience."
                  ja="経験から生まれた、実践的な知見。"
                />
              </h2>
            </div>
            <p>Career, Japanese language ও programming নিয়ে সহজ বাংলায়।</p>
          </div>
          <div className="article-grid">
            {articles.map((article, index) => (
              <article key={article.title}>
                <span className="article-no">0{index + 1}</span>
                <span className="article-category">{article.category}</span>
                <h3>{article.title}</h3>
                <p>{article.text}</p>
                <a href="mailto:reiazbubt@gmail.com?subject=Website content">
                  এই বিষয়ে জানতে চাই <Arrow />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="community-section">
          <Image
            src={japanLife}
            alt=""
            fill
            sizes="100vw"
            className="community-bg"
          />
          <div className="community-overlay" />
          <div className="community-content container">
            <span className="kicker light">
              <TranslatedText
                bn="একসাথে এগিয়ে যাই"
                en="Let’s move forward"
                ja="一緒に前へ"
              />
            </span>
            <h2>
              <TranslatedText
                bn="আপনার Japan অথবা tech journey কোথা থেকে শুরু করবেন?"
                en="Where will your Japan or tech journey begin?"
                ja="日本やテクノロジーへの挑戦を、どこから始めますか？"
              />
            </h2>
            <p>
              প্রশ্ন, collaboration কিংবা শুধু নিজের পরিকল্পনাটি share করতে
              চাইলে—আমাকে লিখতে পারেন।
            </p>
            <a className="white-button" href="mailto:reiazbubt@gmail.com">
              <TranslatedText
                bn="হালিমকে মেসেজ করুন"
                en="Message Halim"
                ja="ハリムにメッセージ"
              />{" "}
              <Arrow />
            </a>
          </div>
        </section>

        <section className="contact-section container" id="contact">
          <div>
            <span className="online-dot" />{" "}
            <TranslatedText
              bn="যোগাযোগের জন্য available"
              en="Available for conversations"
              ja="お問い合わせ受付中"
            />
          </div>
          <h2>
            <TranslatedText
              bn="কথা বলা যাক—"
              en="Let’s talk—"
              ja="お話ししましょう—"
            />
            <span>
              <TranslatedText
                bn="আপনার পরবর্তী step নিয়ে।"
                en="about your next step."
                ja="あなたの次の一歩について。"
              />
            </span>
          </h2>
          <a href="mailto:reiazbubt@gmail.com">
            reiazbubt@gmail.com <Arrow />
          </a>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div>
            <Link className="logo footer-logo" href="/">
              Halim<span>.</span>
            </Link>
            <p>Engineer · Researcher · Lifelong Learner</p>
          </div>
          <div className="footer-links">
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
              Google Scholar
            </a>
          <a href="mailto:reiazbubt@gmail.com">Email</a>
          <Link href="/blog">Blog</Link>
          </div>
          <p className="copyright">
            © {new Date().getFullYear()} Halim Md Abdul
          </p>
        </div>
      </footer>
    </>
  );
}
