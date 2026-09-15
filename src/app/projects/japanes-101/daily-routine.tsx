"use client";

import { useState } from "react";
import { JapaneseText } from "./japanese-text";
import { JapaneseAudioGuide, JapaneseAudioPlayer } from "./japanese-audio-player";
import { buildRoutine, destinations, emptyRoutine, exampleRoutine, routineConversations, routineDays, routinePatterns, routinePhrases, routineQuestions, routineTimeOptions, transports, type RoutineDay, type RoutineProfile } from "./daily-routine-content";
import styles from "./japanes-101.module.css";

type Props = {
  profiles: Record<RoutineDay, RoutineProfile>;
  onProfileChange: (day: RoutineDay, profile: RoutineProfile) => void;
};
const timeFields = [
  ["wake", "ঘুম থেকে ওঠা"], ["breakfast", "সকালের খাবার"], ["departure", "স্কুল / অফিসে যাওয়ার সময়"],
  ["lunch", "দুপুরের খাবার"], ["study", "জাপানি পড়া"], ["sleep", "ঘুমাতে যাওয়া"],
] as const;
const reviews = ["Kanji না চিনলেও hiragana দেখে বাক্য পড়তে পেরেছি।", "নিজের সময় দিয়ে অন্তত ৩টি বাক্য বলেছি।", "に, を ও で-এর পার্থক্য বুঝেছি।", "প্রশ্ন শুনে script না দেখে একটি উত্তর দিয়েছি।", "Weekday ও weekend-এর পার্থক্য বলতে পেরেছি।"];

export function DailyRoutine({ profiles, onProfileChange }: Props) {
  const [day, setDay] = useState<RoutineDay>("weekday");
  const [showScript, setShowScript] = useState(true);
  const [copyStatus, setCopyStatus] = useState("");
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [checked, setChecked] = useState(false);
  const [reviewed, setReviewed] = useState<Record<number, boolean>>({});
  const profile = profiles[day];
  const lines = buildRoutine(day, profile);
  const script = lines.map((line) => line.japanese).join("\n");
  const score = routineQuestions.filter((question, index) => answers[index] === question.answer).length;
  const allAnswered = routineQuestions.every((_, index) => answers[index] !== undefined);

  function update(field: keyof RoutineProfile, value: string) {
    onProfileChange(day, { ...profile, [field]: value });
    setCopyStatus("");
  }

  async function copyScript() {
    try {
      await navigator.clipboard.writeText(script);
      setCopyStatus("Routine copy হয়েছে।");
    } catch {
      setShowScript(true);
      setCopyStatus("Copy করা যায়নি। নিচের script select করে copy করুন।");
    }
  }

  return <>
    <header className={styles.topicHeader}>
      <span>TOPIC 02 · YOUR EVERYDAY JAPANESE</span>
      <h2>Daily Routine</h2>
      <p><span lang="ja"><JapaneseText text="毎日の生活" /></span> / mainichi no seikatsu</p>
      <small>কখন ওঠেন, কোথায় যান, কী করেন—নিজের দিনের গল্প সহজ Japanese-এ বলুন।</small>
    </header>
    <nav className={`${styles.proNav} ${styles.routineNav}`} aria-label="Daily Routine practice sections">
      <a href="#routine-phrases">বাক্য</a><a href="#routine-patterns">Patterns</a><a href="#routine-builder">My routine</a><a href="#routine-conversation">Conversation</a><a href="#routine-check">Quiz</a>
    </nav>
    <p className={styles.readingHint}>Kanji-এর উপরে hiragana দেওয়া আছে। আগে audio শুনুন, তারপর ছোট অংশে repeat করুন। Romaji শুধু সাহায্যের জন্য—ধীরে ধীরে hiragana দেখে পড়ুন।</p>
    <JapaneseAudioGuide />

    <section id="routine-phrases" className={styles.practiceBlock} aria-labelledby="routine-phrases-title">
      <h3 id="routine-phrases-title">01 · দিনের প্রয়োজনীয় বাক্য</h3>
      <p>এগুলো model sentence—আপনার routine নয়। নিজের সময় builder-এ বেছে নিন।</p>
      <div className={styles.phraseGrid}>{routinePhrases.map((phrase) => <article className={styles.phraseCard} key={phrase.japanese}>
        <strong lang="ja"><JapaneseText text={phrase.japanese} /></strong><small>{phrase.reading}</small>
        <JapaneseAudioPlayer text={phrase.japanese} label={`Routine phrase: ${phrase.reading}`} />
        <details><summary>বাংলা meaning দেখুন</summary><p>{phrase.meaning}</p></details>
      </article>)}</div>
    </section>

    <section id="routine-patterns" className={styles.practiceBlock} aria-labelledby="routine-patterns-title">
      <h3 id="routine-patterns-title">02 · বাক্য তৈরির সহজ patterns</h3>
      <div className={styles.coachingNote}>
        <b>সময় বলার ছোট shortcut</b>
        <p lang="ja"><JapaneseText text="4時 = よじ · 7時 = しちじ · 9時 = くじ · 7時半 = しちじはん" /></p>
        <p><JapaneseText text="午前 = AM, 午後 = PM। 半 = সাড়ে। দুপুর ১২টা: 昼の12時; মধ্যরাত: 夜の12時।" /></p>
      </div>
      <div className={`${styles.phraseGrid} ${styles.routinePatterns}`}>{routinePatterns.map((pattern) => <article className={styles.phraseCard} key={pattern.title}>
        <h4>{pattern.title}</h4><strong lang="ja"><JapaneseText text={pattern.japanese} /></strong><small>{pattern.reading}</small>
        <JapaneseAudioPlayer text={pattern.japanese} label={pattern.title} />
        <p className={styles.patternMeaning}><JapaneseText text={pattern.meaning} /></p>
      </article>)}</div>
    </section>

    <section id="routine-builder" className={styles.practiceBlock} aria-labelledby="routine-builder-title">
      <h3 id="routine-builder-title">03 · নিজের routine তৈরি করুন</h3>
      <div className={styles.situationPicker}>{(Object.keys(routineDays) as RoutineDay[]).map((value) => <button type="button" key={value} className={day === value ? styles.situationActive : ""} aria-pressed={day === value} onClick={() => { setDay(value); setCopyStatus(""); }}>{value === "weekday" ? "Weekday · কর্মদিবস" : "Weekend · সপ্তাহের শেষ"}</button>)}</div>
      <p>দুই দিনের তথ্য আলাদাভাবে থাকে। যা আপনার জন্য প্রযোজ্য শুধু সেটিই পূরণ করুন; খালি ঘর script-এ যোগ হবে না। সময় 24-hour format-এ বাছুন—script-এ AM/PM অনুযায়ী বলা হবে।</p>
      <div className={styles.proFields}>
        {timeFields.map(([field, label]) => <label key={field}>{label}<select value={profile[field]} disabled={field === "departure" && (!profile.destination || profile.destination === "home")} onChange={(event) => update(field, event.target.value)}>
          <option value="">এখন যোগ করব না</option>{routineTimeOptions.map((time) => <option key={time.value} value={time.value}>{time.label}</option>)}
        </select></label>)}
        <label>দিনে কোথায় যান / থাকেন?<select value={profile.destination} onChange={(event) => update("destination", event.target.value)}><option value="">এখন যোগ করব না</option>{destinations.map((destination) => <option key={destination.id} value={destination.id}>{destination.label}</option>)}</select></label>
        <label>কীভাবে যান?<select value={profile.transport} disabled={!profile.destination || profile.destination === "home"} onChange={(event) => update("transport", event.target.value)}><option value="">এখন যোগ করব না</option>{transports.map((transport) => <option key={transport.id} value={transport.id}>{transport.label}</option>)}</select></label>
      </div>
      <div className={styles.scriptTools}>
        <button type="button" className={styles.secondaryButton} onClick={() => { onProfileChange(day, { ...exampleRoutine }); setCopyStatus("শুধু শেখার sample দেওয়া হয়েছে—নিজের সময় অনুযায়ী বদলান।"); }}>শেখার sample বসান</button>
        <button type="button" className={styles.secondaryButton} onClick={() => { onProfileChange(day, { ...emptyRoutine }); setCopyStatus(""); }}>এই দিনের তথ্য clear করুন</button>
      </div>
      <div className={styles.scriptTools}>
        <button type="button" className={styles.secondaryButton} disabled={!lines.length} aria-controls="routine-script" aria-expanded={showScript} onClick={() => setShowScript(!showScript)}>{showScript ? "Script লুকিয়ে নিজে বলুন" : "Script দেখুন"}</button>
        <button type="button" className={styles.secondaryButton} disabled={!lines.length} onClick={copyScript}>Routine copy করুন</button>
      </div>
      <p role="status">{copyStatus}</p>
      <JapaneseAudioPlayer text={script} label="Your daily routine" disabledReason={!lines.length ? "কমপক্ষে একটি সময় বা গন্তব্য বেছে নিয়ে routine শুনুন।" : ""} />
      <div id="routine-script" className={styles.introduction} hidden={!showScript}>
        <span>{day === "weekday" ? "YOUR WEEKDAY" : "YOUR WEEKEND"} · {lines.length} SENTENCES</span>
        {!lines.length ? <p className={styles.routineEmpty}>উপরের ঘরগুলো পূরণ করলে আপনার routine এখানে দেখাবে।</p> : lines.map((line) => <article className={styles.scriptLine} key={line.label}>
          <small>{line.label}</small><p lang="ja"><JapaneseText text={line.japanese} /></p><span className={styles.scriptReading}>{line.reading}</span>
          <JapaneseAudioPlayer text={line.japanese} label={`Your routine: ${line.label}`} />
          <details><summary>বাংলা meaning</summary><p>{line.meaning}</p></details>
        </article>)}
      </div>
      <p className={styles.hint}>এটি template-based practice, automatic translation নয়। তথ্য শুধু এই খোলা page-এ থাকে; refresh করলে reset হবে।</p>
    </section>

    <section id="routine-conversation" className={styles.practiceBlock} aria-labelledby="routine-conversation-title">
      <h3 id="routine-conversation-title">04 · Conversation practice</h3>
      <p>প্রথমে প্রশ্নের audio শুনুন। উত্তর না খুলে নিজের routine দিয়ে বলুন, তারপর model answer দেখুন।</p>
      <div className={styles.followupList}>{routineConversations.map((item) => <article className={styles.phraseCard} key={item.question}>
        <strong lang="ja"><JapaneseText text={item.question} /></strong><small>{item.reading}</small><p className={styles.patternMeaning}>{item.meaning}</p>
        <JapaneseAudioPlayer text={item.question} label={`Routine question: ${item.reading}`} />
        <details><summary>Model answer দেখুন / শুনুন</summary>
          <p lang="ja"><JapaneseText text={item.answer} /></p><span className={styles.scriptReading}>{item.answerReading}</span><p>{item.answerMeaning}</p>
          <JapaneseAudioPlayer text={item.answer} label="Routine model answer" />
        </details>
      </article>)}</div>
    </section>

    <section id="routine-check" className={styles.practiceBlock} aria-labelledby="routine-check-title">
      <h3 id="routine-check-title">05 · ছোট self-check</h3>
      {routineQuestions.map((question, index) => <fieldset className={styles.question} key={question.prompt}>
        <legend>{index + 1}. <JapaneseText text={question.prompt} /></legend>
        <div className={styles.options}>{question.options.map((option, optionIndex) => <label className={answers[index] === optionIndex ? styles.optionSelected : ""} key={option}>
          <input type="radio" name={`routine-question-${index}`} checked={answers[index] === optionIndex} onChange={() => { setAnswers((previous) => ({ ...previous, [index]: optionIndex })); setChecked(false); }} /><span><JapaneseText text={option} /></span>
        </label>)}</div>
        {checked && <p>{answers[index] === question.answer ? "✓ সঠিক। " : "↺ আবার চেষ্টা করুন। "}<JapaneseText text={question.explanation} /></p>}
      </fieldset>)}
      <div className={styles.checkActions}><button type="button" className={styles.primaryButton} disabled={!allAnswered} onClick={() => setChecked(true)}>উত্তর যাচাই করুন</button><button type="button" className={styles.secondaryButton} onClick={() => { setAnswers({}); setChecked(false); }}>Quiz reset</button><span role="status">{checked ? `${score}/${routineQuestions.length} সঠিক উত্তর` : "সব প্রশ্নে একটি করে উত্তর বেছে নিন।"}</span></div>
    </section>

    <section className={styles.practiceBlock} aria-labelledby="routine-review-title">
      <h3 id="routine-review-title">06 · Script ছাড়া নিজের দিনের গল্প বলুন</h3>
      <p>Builder-এর script লুকিয়ে ৩০–৬০ সেকেন্ডে নিজের দিন বলার চেষ্টা করুন। তারপর weekday-এর সঙ্গে weekend তুলনা করুন। এটি self-review, pronunciation বা fluency-এর automatic score নয়।</p>
      <div className={styles.reviewList}>{reviews.map((review, index) => <label key={review}><input type="checkbox" checked={!!reviewed[index]} onChange={(event) => setReviewed((previous) => ({ ...previous, [index]: event.target.checked }))} /><span>{review}</span></label>)}</div>
      <div className={styles.checkActions}><button type="button" className={styles.secondaryButton} onClick={() => setReviewed({})}>Review reset</button><span role="status">Self-review: {reviews.filter((_, index) => reviewed[index]).length}/{reviews.length}</span></div>
    </section>
    <p className={styles.sourceNote}>সময় বলা আরও শিখুন: <a href="https://www.irodori.jpf.go.jp/assets/data/bn/pdf/X_L09_Bengali.pdf" target="_blank" rel="noreferrer">Japan Foundation · Irodori Lesson 9 (বাংলা)</a>। এখানকার routine builder ও practice আমাদের নিজস্ব; official lesson-এর অনুলিপি নয়।</p>
  </>;
}
