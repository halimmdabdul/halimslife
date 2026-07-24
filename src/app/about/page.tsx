import type { Metadata } from "next";
import Image from "next/image";
import { connection } from "next/server";

import profileWide from "@/assets/halim-wide.webp";
import { InnerPageShell } from "@/components/inner-page-shell";
import { TranslatedText } from "@/components/site-preferences";

export const metadata: Metadata = {
  title: "আমার সম্পর্কে",
  description:
    "জাপান-প্রবাসী বাংলাদেশি software engineer Halim Md Abdul-এর শিক্ষা, কাজ, research এবং community mission সম্পর্কে জানুন।",
  alternates: { canonical: "/about" },
};

export default async function AboutPage() {
  await connection();

  return (
    <InnerPageShell>
      <section className="inner-hero container">
        <div>
          <span className="kicker">
            <TranslatedText bn="আমার সম্পর্কে" en="About me" ja="私について" />
          </span>
          <h1>
            <TranslatedText
              bn="আমি হালিম—একজন engineer, researcher এবং lifelong learner।"
              en="I’m Halim—an engineer, researcher and lifelong learner."
              ja="ハリムです。エンジニア、研究者、そして生涯学習者です。"
            />
          </h1>
          <p>
            বাংলাদেশ থেকে জাপানে এসে পড়াশোনা ও engineering career গড়ার পথে যা
            শিখেছি, সেটাই এখন অন্যদের জন্য সহজ করে share করতে চাই।
          </p>
        </div>
        <div className="inner-portrait">
          <Image
            src={profileWide}
            alt="জাপানে Halim Md Abdul"
            fill
            priority
            sizes="(max-width: 800px) 92vw, 42vw"
          />
        </div>
      </section>
      <section className="prose-section container">
        <div>
          <span>পরিচয়</span>
          <h2>Technology দিয়ে problem solve করি, knowledge দিয়ে মানুষকে এগিয়ে দিই।</h2>
        </div>
        <div className="prose-copy">
          <p>
            আমি বর্তমানে জাপানের Prime Planet Energy &amp; Solutions
            (PPES)-এ Software Engineer হিসেবে কর্মরত। আমার কাজের মূল ক্ষেত্র
            robotics, computer vision, perception এবং sensor/camera pipeline।
          </p>
          <p>
            Shizuoka University থেকে Computer Science-এ Master of Science
            সম্পন্ন করেছি। Academic research-এ health management ও medical
            diagnostic problem-এর জন্য recommender-system approach নিয়ে কাজ
            করেছি।
          </p>
          <p>
            আমার আরেকটি বড় লক্ষ্য হলো বাংলাভাষীদের জন্য Japanese learning এবং
            programming fundamentals সহজ করা—যাতে শুরু করার জন্য language বা
            background কোনো বাধা না হয়।
          </p>
        </div>
      </section>
    </InnerPageShell>
  );
}
