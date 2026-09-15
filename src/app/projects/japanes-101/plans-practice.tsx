"use client";

import { useState } from "react";
import { calendarDay, calendarMonth } from "./japanese-numbers";
import { routineTime, routineTimeOptions } from "./daily-routine-content";
import { buildPlanScript, daysInPlanMonth, emptyPlan, planActivities, planDate, planListening, planPhrases, planPlaces, planQuestions, planResponses, planWeekdays, type PlanProfile } from "./plans-content";
import { JapaneseText } from "./japanese-text";
import { JapaneseAudioGuide, JapaneseAudioPlayer } from "./japanese-audio-player";
import styles from "./japanes-101.module.css";

function PlansListening() {
  const [index, setIndex] = useState(0);
  const [answer, setAnswer] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const exercise = planListening[index];
  return <section id="plans-listening" className={styles.practiceBlock} aria-labelledby="plans-listening-title">
    <h3 id="plans-listening-title">04 · শুনে দিন, সময় ও meaning বুঝুন</h3>
    <p>আগে audio শুনুন; একটি উত্তর বেছে যাচাই করলে transcript দেখাবে। Japanese voice না থাকলে এই exercise-এর audio পাওয়া যাবে না।</p>
    <div className={styles.listeningCard}>
      <span>LISTENING {index + 1}/{planListening.length}</span>
      <JapaneseAudioPlayer text={exercise.japanese} label={`Plans listening ${index + 1}`} />
      <fieldset className={styles.question}><legend>{exercise.prompt}</legend><div className={styles.options}>
        {exercise.options.map((option, optionIndex) => <label className={answer === optionIndex ? styles.optionSelected : ""} key={option}>
          <input type="radio" name="plans-listening-answer" checked={answer === optionIndex} onChange={() => { setAnswer(optionIndex); setChecked(false); }} />{option}
        </label>)}
      </div></fieldset>
      <div className={styles.checkActions}>
        <button type="button" className={styles.primaryButton} disabled={answer === null} onClick={() => setChecked(true)}>Listening যাচাই</button>
        <button type="button" className={styles.secondaryButton} onClick={() => { setIndex((index + 1) % planListening.length); setAnswer(null); setChecked(false); }}>পরের listening</button>
      </div>
      {checked && <div className={styles.listeningFeedback} role="status"><p>{answer === exercise.answer ? "✓ সঠিক!" : `↺ সঠিক উত্তর: ${exercise.options[exercise.answer]}`}</p><p lang="ja"><JapaneseText text={exercise.japanese} /></p><p>{exercise.meaning}</p></div>}
    </div>
  </section>;
}

export function PlansPractice({ profile, onProfileChange }: { profile: PlanProfile; onProfileChange: (profile: PlanProfile) => void }) {
  const [showYou, setShowYou] = useState(true);
  const [copyStatus, setCopyStatus] = useState("");
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [checked, setChecked] = useState(false);
  const lines = buildPlanScript(profile);
  const script = lines.map((line) => line.japanese).join("\n");
  const date = planDate(profile);
  const time = routineTime(profile.time);
  const place = planPlaces.find((item) => item.id === profile.place);
  const allAnswered = planQuestions.every((_, index) => answers[index] !== undefined);
  const score = planQuestions.filter((question, index) => answers[index] === question.answer).length;

  function update<K extends keyof PlanProfile>(key: K, value: PlanProfile[K]) {
    const next = { ...profile, [key]: value };
    if (key === "month" && Number(next.day) > daysInPlanMonth(next.month)) next.day = "";
    onProfileChange(next);
    setCopyStatus("");
  }
  async function copyScript() {
    if (!script) return;
    try { await navigator.clipboard.writeText(script); setCopyStatus("Conversation copy হয়েছে।"); }
    catch { setCopyStatus("Copy করা যায়নি; script দেখিয়ে নিজে select করে copy করুন।"); }
  }

  return <>
    <header className={styles.topicHeader}>
      <span>TOPIC 06 · LET’S MAKE A PLAN</span><h2>Making Plans & Invitations</h2>
      <p><span lang="ja"><JapaneseText text="予定と誘い" /></span> / yotei to sasoi</p>
      <small>বন্ধুকে আমন্ত্রণ জানান, দিন/সময় প্রস্তাব করুন, কোথায় দেখা করবেন ঠিক করুন—অথবা ভদ্রভাবে না বলুন।</small>
    </header>
    <nav className={`${styles.proNav} ${styles.routineNav}`} aria-label="Plans practice sections">
      <a href="#plans-phrases">বাক্য</a><a href="#plans-dates">দিন ও তারিখ</a><a href="#plans-builder">নিজের plan</a><a href="#plans-listening">Listening</a><a href="#plans-check">Quiz</a>
    </nav>
    <p className={styles.readingHint}>Kanji-এর উপরে hiragana, নিচে romaji ও বাংলা meaning আছে। Normal / slow audio শুনে দুই role-ই repeat করুন।</p>
    <JapaneseAudioGuide />

    <section id="plans-phrases" className={styles.practiceBlock} aria-labelledby="plans-phrases-title">
      <h3 id="plans-phrases-title">01 · আমন্ত্রণ ও উত্তর দেওয়ার বাক্য</h3>
      <div className={styles.phraseGrid}>{planPhrases.map((phrase) => <article className={styles.phraseCard} key={phrase.japanese}>
        <strong lang="ja"><JapaneseText text={phrase.japanese} /></strong><small>{phrase.reading}</small>
        <JapaneseAudioPlayer text={phrase.japanese} label={`Invitation phrase: ${phrase.reading}`} />
        <details><summary>বাংলা meaning দেখুন</summary><p>{phrase.meaning}</p></details>
      </article>)}</div>
      <div className={styles.coachingNote}><b>তিনটি useful pattern</b>
        <p><JapaneseText text="飲みませんか。 = আমন্ত্রণ; 飲みません。 = খাব না। 会いましょう。 = দেখা করি / চলুন দেখা করি।" /></p>
        <p><JapaneseText text="午後3時に = বিকেল ৩টায়; 駅で = স্টেশনে; 土曜日はどうですか。 = শনিবার হলে কেমন হয়?" /></p>
        <p><JapaneseText text="ちょっと……" /> invitation-এর উত্তরে প্রায়ই ভদ্রভাবে না বলা। না চাইতেই বিস্তারিত কারণ জানতে চাপ দেবেন না।</p>
      </div>
    </section>

    <section id="plans-dates" className={styles.practiceBlock} aria-labelledby="plans-dates-title">
      <h3 id="plans-dates-title">02 · সপ্তাহের দিন ও বিশেষ date readings</h3>
      <div className={styles.phraseGrid}>{planWeekdays.map((day) => <article className={styles.phraseCard} key={day.id}>
        <strong lang="ja"><JapaneseText text={day.japanese} /></strong><small>{day.reading} · {day.meaning}</small><JapaneseAudioPlayer text={day.japanese} label={`Weekday: ${day.reading}`} />
      </article>)}</div>
      <details className={styles.coachingNote}><summary>তারিখের special readings দেখুন</summary>
        <div className={styles.counterList}>{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 14, 20, 24].map((day) => <div key={day}>
          <span lang="ja"><JapaneseText text={`${day}日`} /></span><small>{calendarDay(day)!.romaji} · {day} তারিখ</small><JapaneseAudioPlayer text={`${day}日`} label={`Calendar day ${day}`} />
        </div>)}</div>
      </details>
      <p className={styles.hint}>মাসে special reading: ৪ = shi-gatsu, ৭ = shichi-gatsu, ৯ = ku-gatsu। এখানে day reading ক্যালেন্ডারের তারিখের জন্য, কত দিন স্থায়ী হয় সেই counter নয়।</p>
    </section>

    <section id="plans-builder" className={styles.practiceBlock} aria-labelledby="plans-builder-title">
      <h3 id="plans-builder-title">03 · নিজের invitation conversation তৈরি করুন</h3>
      <p>Activity, দিন/তারিখ, দেখা করার সময় ও জায়গা বেছে নিন। বন্ধুর sample response-ও আপনি বাছবেন—এটি learning role-play; সত্যিকারের আমন্ত্রণ পাঠানো বা calendar booking নয়।</p>
      <div className={styles.proFields}>
        <label>একসঙ্গে কী করবেন?<select value={profile.activity} onChange={(event) => update("activity", event.target.value)}><option value="">Activity বেছে নিন</option>{planActivities.map((item) => <option value={item.id} key={item.id}>{item.label}</option>)}</select></label>
        <label>দিন কীভাবে বলবেন?<select value={profile.dateMode} onChange={(event) => update("dateMode", event.target.value as PlanProfile["dateMode"])}><option value="weekday">সপ্তাহের দিন</option><option value="date">মাস ও তারিখ</option></select></label>
        {profile.dateMode === "weekday" ? <label>সপ্তাহের দিন<select value={profile.weekday} onChange={(event) => update("weekday", event.target.value)}><option value="">দিন বেছে নিন</option>{planWeekdays.map((item) => <option value={item.id} key={item.id}>{item.meaning} · {item.reading}</option>)}</select></label> : <>
          <label>মাস<select value={profile.month} onChange={(event) => update("month", event.target.value)}><option value="">মাস বেছে নিন</option>{Array.from({ length: 12 }, (_, index) => index + 1).map((month) => <option value={String(month)} key={month}>{month} মাস · {calendarMonth(month)!.romaji}</option>)}</select></label>
          <label>তারিখ<select value={profile.day} disabled={!profile.month} onChange={(event) => update("day", event.target.value)}><option value="">তারিখ বেছে নিন</option>{Array.from({ length: daysInPlanMonth(profile.month) }, (_, index) => index + 1).map((day) => <option value={String(day)} key={day}>{day} তারিখ · {calendarDay(day)!.romaji}</option>)}</select></label>
        </>}
        <label>দেখা করার সময়<select value={profile.time} onChange={(event) => update("time", event.target.value)}><option value="">সময় বেছে নিন</option>{routineTimeOptions.map((item) => <option value={item.value} key={item.value}>{item.label}</option>)}</select></label>
        <label>দেখা করার জায়গা<select value={profile.place} onChange={(event) => update("place", event.target.value)}><option value="">জায়গা বেছে নিন</option>{planPlaces.map((item) => <option value={item.id} key={item.id}>{item.meaning} · {item.reading}</option>)}</select></label>
        <label>বন্ধুর sample response<select value={profile.response} onChange={(event) => update("response", event.target.value)}><option value="">Role-play বেছে নিন</option>{planResponses.map((item) => <option value={item.id} key={item.id}>{item.label}</option>)}</select></label>
      </div>
      {date && time && <div className={styles.shopReceipt}>
        <span>YOUR PROPOSAL · {profile.response === "decline" ? "SAMPLE: DECLINED, NOT CONFIRMED" : "LEARNING ROLE-PLAY"}</span>
        <strong lang="ja"><JapaneseText text={`${date.japanese}の${time.japanese}`} /></strong>
        <small>{date.reading} no {time.reading} · {date.meaning}, {time.meaning}</small>
        <JapaneseAudioPlayer text={`${date.japanese}の${time.japanese}`} label="Your proposed day and time" />
        {place && profile.response !== "decline" && <p>{place.meaning} · {place.reading}</p>}
      </div>}
      <p className={styles.hint}>দিন ও তারিখ আলাদা mode—কোনো তারিখের weekday আন্দাজ করা হয় না। বছর বাছা হয় না; February ২৮ দিন ধরা হয়। বাস্তবে কোন সপ্তাহ/বছর ও কোন station/cafe বোঝাচ্ছেন তা স্পষ্ট করুন।</p>
      <div className={styles.scriptTools}>
        <button type="button" className={styles.secondaryButton} disabled={!lines.length} aria-controls="plans-dialogue" aria-expanded={showYou} onClick={() => setShowYou(!showYou)}>{showYou ? "নিজের বাক্য লুকিয়ে practice" : "সব বাক্য দেখুন"}</button>
        <button type="button" className={styles.secondaryButton} disabled={!lines.length} onClick={copyScript}>Conversation copy</button>
        <button type="button" className={styles.secondaryButton} onClick={() => { onProfileChange({ ...emptyPlan }); setCopyStatus(""); setShowYou(true); }}>Plan reset</button>
      </div>
      <p role="status">{copyStatus}</p>
      {showYou && <JapaneseAudioPlayer text={script} label="Your invitation conversation" disabledReason={!lines.length ? "Activity, দিন/তারিখ, সময়, জায়গা ও response বেছে conversation শুনুন।" : ""} />}
      {!lines.length && <p>বাছাইগুলো সম্পূর্ণ করলে এখানে আপনার conversation দেখাবে।</p>}
      <div id="plans-dialogue" className={styles.shopDialogue}>{lines.map((line, index) => <article className={`${styles.phraseCard} ${line.role === "you" ? styles.customerLine : styles.clerkLine}`} key={`${index}-${line.japanese}`}>
        <span className={styles.speakerLabel}>{line.role === "you" ? "YOU · INVITING" : "FRIEND · SAMPLE RESPONSE"}</span>
        {line.role === "you" && !showYou ? <p className={styles.patternMeaning}>আপনার turn—না দেখে Japanese-এ বলুন।</p> : <>
          <p className={styles.dialogueJapanese} lang="ja"><JapaneseText text={line.japanese} /></p><small className={styles.scriptReading}>{line.reading}</small>
          <JapaneseAudioPlayer text={line.japanese} label={`Invitation ${line.role} line ${index + 1}`} /><details><summary>বাংলা meaning</summary><p>{line.meaning}</p></details>
        </>}
      </article>)}</div>
      <p className={styles.hint}>একবার YOU, তারপর FRIEND-এর role বলুন। না বলার scenario-তে meeting confirm হয় না। বাছাই এই খোলা page-এ থাকে; refresh করলে reset হয়।</p>
    </section>

    <PlansListening />
    <section id="plans-check" className={styles.practiceBlock} aria-labelledby="plans-check-title">
      <h3 id="plans-check-title">05 · ছোট self-check</h3>
      {planQuestions.map((question, index) => <fieldset className={styles.question} key={question.prompt}>
        <legend>{index + 1}. <JapaneseText text={question.prompt} /></legend><div className={styles.options}>{question.options.map((option, optionIndex) => <label className={answers[index] === optionIndex ? styles.optionSelected : ""} key={option}>
          <input type="radio" name={`plans-question-${index}`} checked={answers[index] === optionIndex} onChange={() => { setAnswers((previous) => ({ ...previous, [index]: optionIndex })); setChecked(false); }} /><span><JapaneseText text={option} /></span>
        </label>)}</div>{checked && <p>{answers[index] === question.answer ? "✓ সঠিক। " : "↺ আবার চেষ্টা করুন। "}<JapaneseText text={question.explanation} /></p>}
      </fieldset>)}
      <div className={styles.checkActions}><button type="button" className={styles.primaryButton} disabled={!allAnswered} onClick={() => setChecked(true)}>উত্তর যাচাই করুন</button><button type="button" className={styles.secondaryButton} onClick={() => { setAnswers({}); setChecked(false); }}>Quiz reset</button><span role="status">{checked ? `${score}/${planQuestions.length} সঠিক উত্তর` : "সব প্রশ্নে একটি করে উত্তর বেছে নিন।"}</span></div>
    </section>
    <p className={styles.sourceNote}>আরও শিখুন: <a href="https://www.irodori.jpf.go.jp/assets/data/bn/pdf/X_L12_Bengali.pdf" target="_blank" rel="noreferrer">Japan Foundation · Irodori বাংলা, Lesson 12</a>। Builder ও exercises নিজস্ব sample content। Audio browser-generated; pronunciation-এর automatic score নেই।</p>
  </>;
}
