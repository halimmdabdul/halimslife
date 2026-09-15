"use client";

import { useEffect, useRef, useState } from "react";
import { JapaneseText } from "./japanese-text";
import { JapaneseAudioPlayer } from "./japanese-audio-player";
import { backgrounds, buildIntroduction, followUps, goals, hobbies, professionalPatterns, situations, strengths, type Profile, type Situation } from "./self-introduction-content";
import styles from "./japanes-101.module.css";

const checklist = ["Opening ও নাম পরিষ্কারভাবে বলেছি", "Situation অনুযায়ী relevant background বেছেছি", "নিজের সত্য experience/strength বলেছি", "একটি নির্দিষ্ট detail বা example দিয়েছি", "Sentence-এর মাঝে ছোট pause দিয়েছি", "সময় মেনে polite closing করেছি"];

export function ProfessionalIntroduction({ name, country, onNameChange }: { name: string; country: string; onNameChange: (name: string) => void }) {
  const [situation, setSituation] = useState<Situation>("workplace");
  const [background, setBackground] = useState("");
  const [years, setYears] = useState("");
  const [strength, setStrength] = useState("");
  const [evidence, setEvidence] = useState("");
  const [goal, setGoal] = useState("");
  const [hobby, setHobby] = useState("");
  const [length, setLength] = useState<Profile["length"]>("full");
  const [showScript, setShowScript] = useState(true);
  const [copied, setCopied] = useState("");
  const [duration, setDuration] = useState(60);
  const [remaining, setRemaining] = useState(60);
  const [running, setRunning] = useState(false);
  const [review, setReview] = useState<Record<number, boolean>>({});
  const deadline = useRef(0);
  const lines = buildIntroduction({ situation, name, country, background, years, strength, evidence, goal, hobby, length });
  const selectedBackground = backgrounds.find((item) => item.id === background);
  const script = lines.map((line) => line.japanese).join("\n");
  const reviewed = checklist.filter((_, index) => review[index]).length;

  useEffect(() => {
    if (!running) return;
    const interval = window.setInterval(() => {
      const seconds = Math.max(0, Math.ceil((deadline.current - Date.now()) / 1000));
      setRemaining(seconds);
      if (seconds === 0) setRunning(false);
    }, 250);
    return () => window.clearInterval(interval);
  }, [running]);

  async function copyScript() {
    try {
      await navigator.clipboard.writeText(script);
      setCopied("Introduction copy হয়েছে।");
    } catch {
      setCopied("Copy করা যায়নি—script select করে manually copy করুন।");
    }
  }

  return (
    <div id="pro-introduction" className={styles.proSection}>
      <header className={styles.proHeader}>
        <span>NEXT LEVEL · POLISHED SELF-INTRODUCTION</span>
        <h3>শুধু পরিচয় নয়—নিজেকে পরিষ্কারভাবে তুলে ধরুন</h3>
        <p>Learn the structure → personalise → rehearse → answer follow-ups। Professional মানে relevant, natural ও truthful—শুধু কঠিন শব্দ নয়।</p>
        <nav className={styles.proNav} aria-label="Advanced introduction steps">
          <a href="#pro-patterns">Useful patterns</a><a href="#pro-builder">Build your script</a><a href="#pro-followups">Follow-up practice</a><a href="#pro-rehearsal">Speaking rehearsal</a>
        </nav>
      </header>

      <section className={styles.practiceBlock} aria-labelledby="structure-title">
        <h3 id="structure-title">04 · Introduction-এর professional structure</h3>
        <ol className={styles.structureList}>
          <li><b>Opening + name</b><span>ভদ্রভাবে শুরু; নিজের নাম স্পষ্ট করে বলুন।</span></li>
          <li><b>Relevant background</b><span>এখন কী করেন বা কী পড়েন—একটি focused sentence।</span></li>
          <li><b>A useful detail</b><span>সত্য experience, skill বা একটি বাস্তব ছোট example।</span></li>
          <li><b>Goal + closing</b><span>পরিস্থিতির সঙ্গে মানানসই goal এবং polite ending।</span></li>
        </ol>
        <div className={styles.coachingNote}><b><JapaneseText text="自己紹介 ≠ 長い自己PR" /></b><p>Self-introduction-এ নিজের পরিচয় সংক্ষিপ্ত রাখুন। Interviewer strength/achievement জানতে চাইলে পরে বিস্তারিত evidence দিন। বয়স, marital status বা অন্য private তথ্য দিতে বাধ্য নন।</p></div>
      </section>

      <section id="pro-patterns" className={styles.practiceBlock} aria-labelledby="patterns-title">
        <h3 id="patterns-title">05 · Next-level বাক্য ও usage</h3>
        <p>Bracket-এর জায়গায় কী বসবে আগে বুঝুন। Japanese, pronunciation, meaning এবং usage একসঙ্গে practice করুন।</p>
        <div className={styles.phraseGrid}>{professionalPatterns.map((pattern) => (
          <article key={pattern.japanese} className={styles.phraseCard}>
            <strong lang="ja"><JapaneseText text={pattern.japanese} /></strong><small>{pattern.reading}</small>
            <p className={styles.patternMeaning}>{pattern.meaning}</p>
            <p className={styles.patternExample}><small>Audio model example · নিজের তথ্য নয়</small><span lang="ja"><JapaneseText text={pattern.audioExample} /></span></p>
            <JapaneseAudioPlayer text={pattern.audioExample} label="Professional pattern model example" />
            <details><summary>কখন / কীভাবে ব্যবহার করবেন</summary><p><JapaneseText text={pattern.note} /></p></details>
          </article>
        ))}</div>
      </section>

      <section id="pro-builder" className={styles.practiceBlock} aria-labelledby="builder-title">
        <h3 id="builder-title">06 · আপনার polished introduction বানান</h3>
        <div className={styles.situationPicker} aria-label="Introduction situation">{(Object.keys(situations) as Situation[]).map((key) => (
          <button type="button" key={key} className={situation === key ? styles.situationActive : ""} aria-pressed={situation === key} onClick={() => { setSituation(key); setCopied(""); }}>{situations[key].label}</button>
        ))}</div>
        <p><JapaneseText text={situations[situation].advice} /></p>
        <div className={styles.proFields}>
          <label>আপনার নাম<input value={name} onChange={(event) => { onNameChange(event.target.value); setCopied(""); }} placeholder="ハリム / Halim" maxLength={60} autoComplete="off" /></label>
          <label>Script format<select value={length} onChange={(event) => setLength(event.target.value as Profile["length"])}><option value="brief">Brief · Opening + background + closing</option><option value="full">Extended · Selected details সহ</option></select></label>
          <label className={styles.fullWidth}>আপনার সত্য background<select value={background} onChange={(event) => setBackground(event.target.value)}><option value="">বেছে নিন / এই sentence বাদ রাখুন</option>{backgrounds.map((item) => <option key={item.id} value={item.id}>{item.label}</option>)}</select></label>
          {length === "full" && <>
            {selectedBackground?.kind === "work" && <label>এই ক্ষেত্রে experience · years (optional)<input type="number" value={years} onChange={(event) => setYears(event.target.value)} min={1} max={50} step={1} placeholder="যেমন: 3" /></label>}
            <label>একটি বাস্তব strength (optional)<select value={strength} onChange={(event) => setStrength(event.target.value)}><option value="">বাদ রাখুন</option>{strengths.map((item) => <option key={item.id} value={item.id}>{item.label}</option>)}</select></label>
            <label>আপনার goal (optional)<select value={goal} onChange={(event) => setGoal(event.target.value)}><option value="">বাদ রাখুন</option>{goals.map((item) => <option key={item.id} value={item.id}>{item.label}</option>)}</select></label>
            {situation !== "interview" && <label>Hobby / personal touch (optional)<select value={hobby} onChange={(event) => setHobby(event.target.value)}><option value="">বাদ রাখুন</option>{hobbies.map((item) => <option key={item.id} value={item.id}>{item.label}</option>)}</select></label>}
            <label className={styles.fullWidth}>নিজের বাস্তব ছোট example · complete Japanese sentence (optional)<textarea value={evidence} onChange={(event) => setEvidence(event.target.value)} rows={3} maxLength={300} placeholder="যেমন: たとえば、チームでウェブサイトをつくったけいけんがあります。" /></label>
          </>}
        </div>
        <p className={styles.hint}>দেশটি basic builder-এর selection থেকে আসে। নিজের নাম ও free-text example-এর kanji reading অনুমান করা হয় না—beginner হলে hiragana/katakana লিখুন। এগুলো translate/grammar-check করা হয় না।</p>
        {selectedBackground?.kind === "work" && years !== "" && (!Number.isInteger(Number(years)) || Number(years) < 1 || Number(years) > 50) && <p className={styles.hint}>Experience যোগ করতে 1–50-এর মধ্যে পূর্ণ বছর লিখুন; invalid value script-এ যোগ হয় না।</p>}
        {situation === "interview" && <p className={styles.hint}>Interview script-এ hobby বাদ রাখা হচ্ছে। Relevant background ও interviewer-এর time limit-কে অগ্রাধিকার দিন।</p>}
        <div className={styles.scriptTools}><button type="button" className={styles.secondaryButton} aria-expanded={showScript} aria-controls="professional-script" onClick={() => setShowScript((value) => !value)}>{showScript ? "Script লুকিয়ে practice করুন" : "Script দেখুন"}</button><button type="button" className={styles.secondaryButton} onClick={copyScript}>Script copy করুন</button></div>
        <JapaneseAudioPlayer text={script} label="Your professional introduction" disabledReason={!name.trim() ? "নাম যোগ করে সম্পূর্ণ introduction শুনুন।" : ""} />
        <div id="professional-script" hidden={!showScript} className={styles.introduction}>
          <span>YOUR {situation.toUpperCase()} INTRODUCTION · {length === "brief" ? "BRIEF" : "EXTENDED"}</span>
          {!name.trim() && <p className={styles.hint}>Draft: <JapaneseText text="［名前］" />-এর জায়গায় আপনার নাম যোগ করুন।</p>}
          {lines.map((line) => <div className={styles.scriptLine} key={line.label}><small>{line.label}</small><p lang="ja">{line.label === "Name" ? <>{name.trim() || <JapaneseText text="［名前］" />}<JapaneseText text={situation === "class" ? "です。" : "と申します。"} /></> : line.label === "Your example" ? line.japanese : <JapaneseText text={line.japanese} />}</p>{line.reading && <span className={styles.scriptReading}>{line.reading}</span>}<JapaneseAudioPlayer text={line.japanese} label={`${line.label} sentence`} /><details><summary>বাংলা meaning</summary><p>{line.meaning}</p></details></div>)}
        </div>
        <p role="status" className={styles.hint}>{copied}</p>
        <div className={styles.coachingNote}><b>Example → আপনার সত্য detail</b><p lang="ja"><JapaneseText text="例えば、チームでウェブサイトを作った経験があります。" /></p><p>মানে: যেমন, দল হিসেবে একটি website তৈরির অভিজ্ঞতা আছে। এটি শুধু example—নিজে সত্যিই করলে ব্যবহার করুন। কোনো invented achievement বা automatic translation নেই।</p></div>
      </section>

      <section id="pro-followups" className={styles.practiceBlock} aria-labelledby="followups-title">
        <h3 id="followups-title">07 · পরিচয়ের পরের প্রশ্নের practice</h3>
        <p>প্রথমে model answer না দেখে নিজের উত্তর বলুন। তারপর answer খুলে pattern মিলিয়ে নিজের detail বসান।</p>
        <div className={styles.followupList}>{followUps.map((item) => (
          <article className={styles.phraseCard} key={item.question}><strong lang="ja"><JapaneseText text={item.question} /></strong><small>{item.reading}</small><p className={styles.patternMeaning}>{item.meaning}</p><JapaneseAudioPlayer text={item.question} label="Follow-up question" /><details><summary>Model answer ও coaching</summary><p lang="ja"><JapaneseText text={item.answer} /></p><p>{item.answerReading}</p><JapaneseAudioPlayer text={item.answer} label="Follow-up model answer" /><p><JapaneseText text={item.tip} /></p></details></article>
        ))}</div>
      </section>

      <section id="pro-rehearsal" className={styles.practiceBlock} aria-labelledby="rehearsal-title">
        <h3 id="rehearsal-title">08 · Speaking rehearsal → self-review</h3>
        <p>Round 1: script দেখে ধীরে বলুন। Round 2: script লুকিয়ে বলুন। Round 3: একজন শ্রোতাকে introduce করে একটি follow-up-এর উত্তর দিন।</p>
        <div className={styles.rehearsalControls}>
          <label>Practice time<select value={duration} disabled={running} onChange={(event) => { const seconds = Number(event.target.value); setDuration(seconds); setRemaining(seconds); }}><option value={30}>30 seconds</option><option value={60}>60 seconds</option><option value={90}>90 seconds</option></select></label>
          <span className={styles.timer} aria-label={`${remaining} seconds remaining`} aria-live="off">{String(Math.floor(remaining / 60)).padStart(2, "0")}:{String(remaining % 60).padStart(2, "0")}</span>
          <button type="button" className={styles.primaryButton} disabled={running} onClick={() => { deadline.current = Date.now() + duration * 1000; setRemaining(duration); setRunning(true); }}>Rehearsal শুরু</button>
          <button type="button" className={styles.secondaryButton} onClick={() => { setRunning(false); setRemaining(duration); }}>Timer reset</button>
        </div>
        <p role="status" className={styles.hint}>{running ? "জোরে বলুন; sentence-এর মাঝে pause দিন।" : remaining === 0 ? "সময় শেষ। এখন নিজের delivery review করুন।" : "Timer একটি practice aid—script-এর duration বা fluency automatically মাপা হয় না।"}</p>
        <div className={styles.reviewList}>{checklist.map((item, index) => <label key={item}><input type="checkbox" checked={!!review[index]} onChange={(event) => setReview((previous) => ({ ...previous, [index]: event.target.checked }))} /><span>{item}</span></label>)}</div>
        <div className={styles.checkActions}><span role="status">Self-review: {reviewed}/{checklist.length} checked · এটি proficiency score নয়।</span><button type="button" className={styles.secondaryButton} onClick={() => setReview({})}>Review reset</button></div>
        <p className={styles.hint}>কোনো microphone recording/upload হচ্ছে না। Pronunciation feedback পেতে teacher বা fluent speaker-কে শুনিয়ে practice করুন।</p>
      </section>

      <p className={styles.sourceNote}>Reference guidance: <a href="https://www.irodori.jpf.go.jp/assets/data/starter/pdf/X_L03.pdf" target="_blank" rel="noreferrer">Japan Foundation · Irodori</a> · <a href="https://jsite.mhlw.go.jp/aichi-hellowork/var/rev0/0128/7885/mennsetu.pdf" target="_blank" rel="noreferrer">Hello Work · Interview preparation</a>। উপরের extended examples এই project-এর independent learning templates।</p>
    </div>
  );
}
