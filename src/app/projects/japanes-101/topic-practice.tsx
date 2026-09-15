"use client";

import { useRef, useState } from "react";
import { ProfessionalIntroduction } from "./professional-introduction";
import { DailyRoutine } from "./daily-routine";
import { ShoppingPractice } from "./shopping-practice";
import { emptyShopping } from "./shopping-content";
import { FoodOrderingPractice } from "./food-ordering-practice";
import { emptyFoodOrder } from "./food-ordering-content";
import { DirectionsPractice } from "./directions-practice";
import { emptyTravel } from "./directions-content";
import { PlansPractice } from "./plans-practice";
import { emptyPlan } from "./plans-content";
import { emptyRoutine, type RoutineDay, type RoutineProfile } from "./daily-routine-content";
import { JapaneseText } from "./japanese-text";
import { JapaneseAudioGuide, JapaneseAudioPlayer } from "./japanese-audio-player";
import styles from "./japanes-101.module.css";

const phrases = [
  { japanese: "はじめまして。", reading: "Hajimemashite.", meaning: "প্রথম পরিচয়ের সময়: আপনার সঙ্গে পরিচিত হয়ে ভালো লাগল।" },
  { japanese: "わたしはハリムです。", reading: "Watashi wa Harimu desu.", meaning: "আমি হালিম। নিজের নাম বসিয়ে বলুন: わたしは［নাম］です。" },
  { japanese: "バングラデシュから来ました。", reading: "Banguradeshu kara kimashita.", meaning: "আমি বাংলাদেশ থেকে এসেছি। から দিয়ে কোথা থেকে এসেছেন বোঝায়।" },
  { japanese: "よろしくお願いします。", reading: "Yoroshiku onegaishimasu.", meaning: "পরিচয় শেষ করার ভদ্র expression; প্রসঙ্গ অনুযায়ী আপনার সহযোগিতা কামনা করছি।" },
];

const questions = [
  { prompt: "প্রথমবার পরিচয়ের শুরুতে কোনটি বলবেন?", options: ["はじめまして。", "おやすみなさい。", "さようなら。"], answer: 0, explanation: "はじめまして প্রথমবার পরিচয়ের greeting।" },
  { prompt: "নিজের নাম বলুন: わたし［　］ハリムです。", options: ["を", "は", "に"], answer: 1, explanation: "এখানে topic particle は বসে; উচ্চারণ হবে ‘wa’।" },
];

type TopicId = "introduction" | "routine" | "shopping" | "food" | "directions" | "plans";

export function TopicPractice() {
  const [selected, setSelected] = useState<TopicId | null>(null);
  const [planProfile, setPlanProfile] = useState({ ...emptyPlan });
  const [travelProfile, setTravelProfile] = useState({ ...emptyTravel });
  const [foodOrderProfile, setFoodOrderProfile] = useState({ ...emptyFoodOrder });
  const [shoppingProfile, setShoppingProfile] = useState({ ...emptyShopping });
  const [routineProfiles, setRoutineProfiles] = useState<Record<RoutineDay, RoutineProfile>>({ weekday: { ...emptyRoutine }, weekend: { ...emptyRoutine } });
  const [name, setName] = useState("");
  const [country, setCountry] = useState("バングラデシュ");
  const [role, setRole] = useState("学生");
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [checked, setChecked] = useState(false);
  const panelRef = useRef<HTMLElement>(null);
  const score = questions.filter((question, index) => answers[index] === question.answer).length;
  const allAnswered = questions.every((_, index) => answers[index] !== undefined);
  const basicScript = ["はじめまして。", `わたしは${name.trim() || "［名前］"}です。`, `${country}から来ました。`, `${role}です。`, "よろしくお願いします。"].join("\n");

  function chooseTopic(topic: TopicId) {
    setSelected(topic);
    panelRef.current?.focus({ preventScroll: true });
    if (window.matchMedia("(max-width: 750px)").matches) {
      panelRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  return (
    <div className={styles.workspace}>
      <aside className={styles.sidebar}>
        <span className={styles.eyebrow}>LEARNING TOPICS</span>
        <h2>একটি topic বেছে নিন</h2>
        <nav aria-label="Japanese 101 topics">
          <button type="button" className={`${styles.topicButton} ${selected === "introduction" ? styles.topicActive : ""}`} onClick={() => chooseTopic("introduction")} aria-controls="topic-practice" aria-current={selected === "introduction" ? "true" : undefined}>
            <i>01</i>
            <span><b>Self-introduction</b><small lang="ja"><JapaneseText text="自己紹介" /></small><small>jiko-shoukai</small></span>
          </button>
          <button type="button" className={`${styles.topicButton} ${selected === "routine" ? styles.topicActive : ""}`} onClick={() => chooseTopic("routine")} aria-controls="topic-practice" aria-current={selected === "routine" ? "true" : undefined}>
            <i>02</i>
            <span><b>Daily Routine</b><small lang="ja"><JapaneseText text="毎日の生活" /></small><small>mainichi no seikatsu</small></span>
          </button>
          <button type="button" className={`${styles.topicButton} ${selected === "shopping" ? styles.topicActive : ""}`} onClick={() => chooseTopic("shopping")} aria-controls="topic-practice" aria-current={selected === "shopping" ? "true" : undefined}>
            <i>03</i>
            <span><b>Shopping & Prices</b><small lang="ja"><JapaneseText text="買い物" /></small><small>kaimono</small></span>
          </button>
          <button type="button" className={`${styles.topicButton} ${selected === "food" ? styles.topicActive : ""}`} onClick={() => chooseTopic("food")} aria-controls="topic-practice" aria-current={selected === "food" ? "true" : undefined}>
            <i>04</i>
            <span><b>Food & Ordering</b><small lang="ja"><JapaneseText text="食べ物と注文" /></small><small>tabemono to chuumon</small></span>
          </button>
          <button type="button" className={`${styles.topicButton} ${selected === "directions" ? styles.topicActive : ""}`} onClick={() => chooseTopic("directions")} aria-controls="topic-practice" aria-current={selected === "directions" ? "true" : undefined}>
            <i>05</i>
            <span><b>Directions & Transportation</b><small lang="ja"><JapaneseText text="道案内と交通" /></small><small>michi-annai to koutsuu</small></span>
          </button>
          <button type="button" className={`${styles.topicButton} ${selected === "plans" ? styles.topicActive : ""}`} onClick={() => chooseTopic("plans")} aria-controls="topic-practice" aria-current={selected === "plans" ? "true" : undefined}>
            <i>06</i>
            <span><b>Making Plans & Invitations</b><small lang="ja"><JapaneseText text="予定と誘い" /></small><small>yotei to sasoi</small></span>
          </button>
        </nav>
        <p>Topic খুলুন → বাক্য শিখুন → নিজে practice করুন।</p>
      </aside>

      <section id="topic-practice" className={styles.practicePanel} ref={panelRef} tabIndex={-1} aria-label="Topic practice">
        {!selected ? (
          <div className={styles.emptyState}>
            <span lang="ja"><JapaneseText text="自己紹介" /></span>
            <h2>আপনার প্রথম Japanese introduction</h2>
            <p>বাম পাশ থেকে যেকোনো topic বেছে practice শুরু করুন—নিজের পরিচয়, যাতায়াত থেকে বন্ধুদের আমন্ত্রণ ও পরিকল্পনা পর্যন্ত।</p>
            <button type="button" className={styles.primaryButton} onClick={() => chooseTopic("introduction")}>Practice শুরু করুন →</button>
          </div>
        ) : selected === "routine" ? (
          <DailyRoutine profiles={routineProfiles} onProfileChange={(day, profile) => setRoutineProfiles((previous) => ({ ...previous, [day]: profile }))} />
        ) : selected === "shopping" ? (
          <ShoppingPractice profile={shoppingProfile} onProfileChange={setShoppingProfile} />
        ) : selected === "food" ? (
          <FoodOrderingPractice profile={foodOrderProfile} onProfileChange={setFoodOrderProfile} />
        ) : selected === "directions" ? (
          <DirectionsPractice profile={travelProfile} onProfileChange={setTravelProfile} />
        ) : selected === "plans" ? (
          <PlansPractice profile={planProfile} onProfileChange={setPlanProfile} />
        ) : (
          <>
            <header className={styles.topicHeader}>
              <span>TOPIC 01 · BASIC → PROFESSIONAL</span>
              <h2>Self-introduction</h2>
              <p><span lang="ja"><JapaneseText text="自己紹介" /></span> / jiko-shoukai</p>
              <small>ছোট পরিচয় থেকে polished workplace ও interview introduction—ধাপে ধাপে practice করুন।</small>
            </header>
            <a className={styles.nextLevelLink} href="#pro-introduction">Next level · Professional introduction ↓</a>
            <p className={styles.readingHint}>Kanji-এর উপরের ছোট hiragana-ই reading। এগুলো দেখে ধীরে ধীরে পড়ুন; romaji ও বাংলা meaning-ও রাখা হয়েছে।</p>
            <JapaneseAudioGuide />

            <section className={styles.practiceBlock} aria-labelledby="phrases-title">
              <h3 id="phrases-title">01 · বাক্য শিখুন</h3>
              <div className={styles.phraseGrid}>
                {phrases.map((phrase) => (
                  <article className={styles.phraseCard} key={phrase.japanese}>
                    <strong lang="ja"><JapaneseText text={phrase.japanese} /></strong>
                    <small>{phrase.reading}</small>
                    <JapaneseAudioPlayer text={phrase.japanese} label="Basic phrase" />
                    <details><summary>বাংলা meaning দেখুন</summary><p><JapaneseText text={phrase.meaning} /></p></details>
                  </article>
                ))}
              </div>
            </section>

            <section className={styles.practiceBlock} aria-labelledby="introduction-title">
              <h3 id="introduction-title">02 · নিজের introduction তৈরি করুন</h3>
              <p>নাম Japanese বা English-এ লিখতে পারেন। নিচের পরিচয়টি দেখে তারপর না দেখে বলার চেষ্টা করুন।</p>
              <div className={styles.fields}>
                <label>আপনার নাম<input value={name} onChange={(event) => setName(event.target.value)} placeholder="ハリム / Halim" maxLength={60} autoComplete="off" /></label>
                <label>দেশ<select value={country} onChange={(event) => setCountry(event.target.value)}><option value="バングラデシュ">বাংলাদেশ · バングラデシュ</option><option value="インド">ভারত · インド</option><option value="ネパール">নেপাল · ネパール</option><option value="日本">জাপান · 日本（にほん）</option></select></label>
                <label>পেশা<select value={role} onChange={(event) => setRole(event.target.value)}><option value="学生">শিক্ষার্থী · 学生（がくせい）</option><option value="会社員">কোম্পানি কর্মী · 会社員（かいしゃいん）</option><option value="エンジニア">ইঞ্জিনিয়ার · エンジニア</option><option value="教師">শিক্ষক · 教師（きょうし）</option></select></label>
              </div>
              <div className={styles.introduction}>
                <span>YOUR INTRODUCTION</span>
                <p lang="ja"><JapaneseText text="はじめまして。" /><br />わたしは{name.trim() || <JapaneseText text="［名前］" />}です。<br /><JapaneseText text={`${country}から来ました。`} /><br /><JapaneseText text={`${role}です。`} /><br /><JapaneseText text="よろしくお願いします。" /></p>
              </div>
              <JapaneseAudioPlayer text={basicScript} label="Your basic introduction" disabledReason={!name.trim() ? "নাম যোগ করে সম্পূর্ণ introduction শুনুন।" : ""} />
              <p className={styles.hint}>নিজের নামের kanji reading আন্দাজ করা হয় না। Beginner হলে নামটি hiragana/katakana-তে লিখুন; automatic translation হচ্ছে না।</p>
            </section>

            <section className={styles.practiceBlock} aria-labelledby="check-title">
              <h3 id="check-title">03 · নিজেকে যাচাই করুন</h3>
              {questions.map((question, index) => (
                <fieldset className={styles.question} key={question.prompt}>
                  <legend>{index + 1}. <JapaneseText text={question.prompt} /></legend>
                  <div className={styles.options}>
                    {question.options.map((option, optionIndex) => (
                      <label className={answers[index] === optionIndex ? styles.optionSelected : ""} key={option}>
                        <input type="radio" name={`question-${index}`} checked={answers[index] === optionIndex} onChange={() => { setAnswers((previous) => ({ ...previous, [index]: optionIndex })); setChecked(false); }} />
                        <span lang="ja"><JapaneseText text={option} /></span>
                      </label>
                    ))}
                  </div>
                  {checked && <p>{answers[index] === question.answer ? "✓ সঠিক। " : "↺ আবার চেষ্টা করুন। "}<JapaneseText text={question.explanation} /></p>}
                </fieldset>
              ))}
              <div className={styles.checkActions}>
                <button type="button" className={styles.primaryButton} disabled={!allAnswered} onClick={() => setChecked(true)}>উত্তর যাচাই করুন</button>
                <button type="button" className={styles.secondaryButton} onClick={() => { setAnswers({}); setChecked(false); }}>আবার practice</button>
                <span role="status">{checked ? `${score}/${questions.length} সঠিক উত্তর` : "প্রতিটি প্রশ্নে একটি উত্তর বেছে নিন।"}</span>
              </div>
            </section>
            <ProfessionalIntroduction name={name} country={country} onNameChange={setName} />
          </>
        )}
      </section>
    </div>
  );
}
