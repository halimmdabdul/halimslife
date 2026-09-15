"use client";

import { useState } from "react";
import { JapaneseText } from "./japanese-text";
import { JapaneseAudioGuide, JapaneseAudioPlayer } from "./japanese-audio-player";
import { buildTravelScript, compass, directionCommands, directionListening, directionQuestions, directionsPhrases, hasArrived, isMapRoad, mapPlaces, mapStart, moveOnMap, travelDestinations, travelModes, travelSelection, type DirectionCommand, type TravelProfile } from "./directions-content";
import styles from "./japanes-101.module.css";

type Props = { profile: TravelProfile; onProfileChange: (profile: TravelProfile) => void };

function PracticeMap() {
  const [destination, setDestination] = useState("station");
  const [position, setPosition] = useState({ ...mapStart });
  const [showRoute, setShowRoute] = useState(false);
  const [message, setMessage] = useState("START-এ আছেন। উত্তরমুখী হয়ে সোজা এগোন।");
  const place = mapPlaces.find((item) => item.id === destination)!;
  const arrived = hasArrived(position, destination);
  function move(command: DirectionCommand) {
    const result = moveOnMap(position, command);
    setPosition(result.position);
    setMessage(result.blocked ? "সামনে রাস্তা নেই। অবস্থান বদলায়নি—ঘুরে সঠিক রাস্তা বাছুন।" : hasArrived(result.position, destination) ? `✓ ${place.meaning}-এ পৌঁছেছেন! অন্য গন্তব্য বেছে আবার practice করুন।` : `${directionCommands[command].meaning}। এখন মুখ ${compass[result.position.heading].meaning} দিকে; column ${result.position.x + 1}, row ${result.position.y + 1}।`);
  }
  return <section id="directions-map" className={styles.practiceBlock} aria-labelledby="directions-map-title">
    <h3 id="directions-map-title">02 · Interactive map-এ পথ খুঁজুন</h3>
    <p>এটি fictional walking map। START থেকে উত্তরমুখী হয়ে শুরু করুন। বাম/ডান বোতাম শুধু মুখের দিক ঘোরায়; সোজা বোতাম সেই দিকে এক ঘর এগোয়। Map-এর উপরে সবসময় উত্তর—কিন্তু আপনার বাম/ডান মুখের দিক অনুযায়ী বদলায়।</p>
    <div className={styles.proFields}><label>কোথায় যাবেন?<select value={destination} onChange={(event) => { setDestination(event.target.value); setPosition({ ...mapStart }); setShowRoute(false); setMessage("নতুন গন্তব্য বাছা হয়েছে। START থেকে উত্তরমুখী হয়ে শুরু করুন।"); }}>{mapPlaces.map((item) => <option value={item.id} key={item.id}>{item.meaning} · {item.reading}</option>)}</select></label></div>
    <div className={styles.coachingNote}><p lang="ja"><JapaneseText text={`すみません。${place.japanese}はどこですか。`} /></p><p>Sumimasen. {place.reading} wa doko desu ka?</p><JapaneseAudioPlayer text={`すみません。${place.japanese}はどこですか。`} label="Ask for the map destination" /></div>
    <figure className={styles.mapFigure}>
      <div className={styles.mapNorth}>↑ <span lang="ja"><JapaneseText text="北" /></span> · NORTH</div>
      <div className={styles.practiceMap} role="img" aria-label={`Fictional 5 by 5 map. Start column 3 row 5, crossroads column 3 row 3. Station column 5 row 3, restaurant column 1 row 3, park column 3 row 1, shop column 5 row 1. Your position column ${position.x + 1} row ${position.y + 1}, facing ${compass[position.heading].meaning}.`}>
        {Array.from({ length: 25 }, (_, index) => {
          const x = index % 5;
          const y = Math.floor(index / 5);
          const landmark = mapPlaces.find((item) => item.x === x && item.y === y);
          const player = position.x === x && position.y === y;
          return <div aria-hidden="true" key={index} className={`${styles.mapCell} ${isMapRoad(x, y) ? styles.mapRoad : styles.mapBlock} ${landmark?.id === destination ? styles.mapTarget : ""} ${player ? styles.mapCurrent : ""}`}>
            {landmark && <><span className={styles.mapIcon}>{landmark.icon}</span><small lang="ja"><JapaneseText text={landmark.japanese} /></small></>}
            {x === 2 && y === 4 && <small>START</small>}
            {x === 2 && y === 2 && <small>＋</small>}
            {player && <span className={styles.mapPlayer} style={{ transform: `rotate(${position.heading * 90}deg)` }}>▲</span>}
          </div>;
        })}
      </div>
      <figcaption>▲ আপনি · outlined ঘর গন্তব্য · কেন্দ্রের ＋ মোড়। Map-টি scale অনুযায়ী নয়; ঘরের সংখ্যা বাস্তব দূরত্ব নয়।</figcaption>
    </figure>
    <p className={styles.readingHint}>আপনার মুখ: <span lang="ja"><JapaneseText text={compass[position.heading].japanese} /></span> ({compass[position.heading].meaning}) · column {position.x + 1}, row {position.y + 1}</p>
    <div className={styles.mapControls}>{(["left", "straight", "right"] as DirectionCommand[]).map((command) => <button type="button" className={styles.secondaryButton} disabled={arrived} onClick={() => move(command)} key={command}><span aria-hidden="true">{directionCommands[command].symbol}</span> <JapaneseText text={command === "straight" ? "まっすぐ" : command === "left" ? "左" : "右"} /><small>{directionCommands[command].meaning}</small></button>)}</div>
    <p className={styles.mapMessage} role="status">{message}</p>
    <div className={styles.checkActions}><button type="button" className={styles.secondaryButton} aria-controls="map-route-hint" aria-expanded={showRoute} onClick={() => setShowRoute(!showRoute)}>{showRoute ? "Route hint লুকান" : "START থেকে route hint দেখুন"}</button><button type="button" className={styles.secondaryButton} onClick={() => { setPosition({ ...mapStart }); setMessage("START-এ ফিরেছেন। আবার উত্তরমুখী হয়ে শুরু করুন।"); }}>Map reset</button></div>
    {showRoute && <div id="map-route-hint" className={styles.coachingNote}><b>শুধু START থেকে এই বোতামের ক্রম অনুসরণ করুন</b><ol className={styles.routeSteps}>{place.commands.map((command, index) => <li key={index}><p lang="ja"><JapaneseText text={directionCommands[command].japanese} /></p><small>{directionCommands[command].reading} · {directionCommands[command].meaning}</small><JapaneseAudioPlayer text={directionCommands[command].japanese} label={`Map route step ${index + 1}`} /></li>)}</ol></div>}
  </section>;
}

function DirectionsListening() {
  const [index, setIndex] = useState(0);
  const [choice, setChoice] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [results, setResults] = useState<Record<number, boolean>>({});
  const question = directionListening[index];
  return <section id="directions-listening" className={styles.practiceBlock} aria-labelledby="directions-listening-title"><h3 id="directions-listening-title">04 · নির্দেশ শুনে বুঝুন</h3><p>Audio শুনে সঠিক meaning বেছে নিন। Check করার আগে Japanese text ও romaji দেখানো হয় না।</p><div className={styles.listeningCard}><span>LISTEN & UNDERSTAND · {index + 1}/{directionListening.length}</span><JapaneseAudioPlayer key={index} text={question.japanese} label={`Directions listening question ${index + 1}`} /><fieldset className={styles.question}><legend>কী শুনলেন?</legend><div className={styles.options}>{question.options.map((option, optionIndex) => <label key={option} className={choice === optionIndex ? styles.optionSelected : ""}><input type="radio" name={`directions-listening-${index}`} disabled={checked} checked={choice === optionIndex} onChange={() => setChoice(optionIndex)} /><span>{option}</span></label>)}</div></fieldset><div className={styles.checkActions}><button type="button" className={styles.primaryButton} disabled={choice === null || checked} onClick={() => { setChecked(true); setResults((previous) => ({ ...previous, [index]: choice === question.answer })); }}>Meaning যাচাই করুন</button><button type="button" className={styles.secondaryButton} disabled={!checked || index === directionListening.length - 1} onClick={() => { setIndex(index + 1); setChoice(null); setChecked(false); }}>পরের প্রশ্ন →</button><button type="button" className={styles.secondaryButton} onClick={() => { setIndex(0); setChoice(null); setChecked(false); setResults({}); }}>Listening reset</button></div><div className={styles.listeningFeedback} role="status">{checked && <><p>{choice === question.answer ? "✓ সঠিক। " : "↺ আবার শুনুন। "}<span lang="ja"><JapaneseText text={question.japanese} /></span></p><p>{question.reading}</p><p>{question.options[question.answer]}</p>{index === directionListening.length - 1 && <p>Listening complete: {Object.values(results).filter(Boolean).length}/{directionListening.length} সঠিক উত্তর।</p>}</>}</div></div></section>;
}

export function DirectionsPractice({ profile, onProfileChange }: Props) {
  const [showTraveller, setShowTraveller] = useState(true);
  const [copyStatus, setCopyStatus] = useState("");
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [checked, setChecked] = useState(false);
  const selection = travelSelection(profile);
  const lines = buildTravelScript(profile);
  const script = lines.map((line) => line.japanese).join("\n");
  const allAnswered = directionQuestions.every((_, index) => answers[index] !== undefined);
  const score = directionQuestions.filter((question, index) => answers[index] === question.answer).length;
  async function copyScript() {
    try { await navigator.clipboard.writeText(script); setCopyStatus("Travel conversation copy হয়েছে।"); }
    catch { setShowTraveller(true); setCopyStatus("Copy হয়নি। নিচের conversation select করে copy করুন।"); }
  }
  return <>
    <header className={styles.topicHeader}><span>TOPIC 05 · FIND YOUR WAY</span><h2>Directions & Transportation</h2><p><span lang="ja"><JapaneseText text="道案内と交通" /></span> / michi-annai to koutsuu</p><small>পথ খুঁজুন, নির্দেশ বুঝুন, বাস/ট্রেনের গন্তব্য, ভাড়া ও সময় জিজ্ঞেস করুন।</small></header>
    <nav className={`${styles.proNav} ${styles.routineNav}`} aria-label="Directions practice sections"><a href="#directions-phrases">বাক্য</a><a href="#directions-map">Practice map</a><a href="#directions-travel">Travel conversation</a><a href="#directions-listening">Listening</a><a href="#directions-check">Quiz</a></nav>
    <p className={styles.readingHint}>Kanji-এর উপরে hiragana আছে। Audio শুনে repeat করুন; না বুঝলে ধীরে বা আবার বলতে চাইতে শিখুন।</p><JapaneseAudioGuide />
    <section id="directions-phrases" className={styles.practiceBlock} aria-labelledby="directions-phrases-title"><h3 id="directions-phrases-title">01 · পথ ও যাতায়াতের প্রয়োজনীয় বাক্য</h3><div className={styles.phraseGrid}>{directionsPhrases.map((phrase) => <article className={styles.phraseCard} key={phrase.japanese}><strong lang="ja"><JapaneseText text={phrase.japanese} /></strong><small>{phrase.reading}</small><JapaneseAudioPlayer text={phrase.japanese} label={`Directions phrase: ${phrase.reading}`} /><details><summary>বাংলা meaning দেখুন</summary><p>{phrase.meaning}</p></details></article>)}</div><div className={styles.coachingNote}><b>তিনটি সহজ pattern</b><p><JapaneseText text="駅はどこですか。 = স্টেশন কোথায়? 公園まで = পার্ক পর্যন্ত। バスで行きます。 = বাসে যাই; 空港に行きます。 = বিমানবন্দরে যাই।" /></p><p>Map-এ বাম/ডান মানে আপনার মুখের দিকের বাম/ডান; সবসময় পশ্চিম/পূর্ব নয়।</p></div></section>
    <PracticeMap />
    <section id="directions-travel" className={styles.practiceBlock} aria-labelledby="directions-travel-title"><h3 id="directions-travel-title">03 · নিজের travel conversation তৈরি করুন</h3><p>গন্তব্য ও যানবাহন বেছে নিন। Route, fare ও সময় সবই fictional sample—live timetable, ticket price বা বাস্তব journey planner নয়। Walking map-এর সঙ্গে এই transport scenario যুক্ত নয়।</p><div className={styles.proFields}><label>গন্তব্য<select value={profile.destination} onChange={(event) => { onProfileChange({ ...profile, destination: event.target.value }); setCopyStatus(""); }}><option value="">একটি গন্তব্য বেছে নিন</option>{travelDestinations.map((item) => <option value={item.id} key={item.id}>{item.meaning} · {item.reading}</option>)}</select></label><label>যানবাহন<select value={profile.mode} onChange={(event) => { onProfileChange({ ...profile, mode: event.target.value }); setCopyStatus(""); }}><option value="">একটি বেছে নিন</option>{travelModes.map((item) => <option value={item.id} key={item.id}>{item.meaning} · {item.reading}</option>)}</select></label></div>{selection && <div className={styles.shopReceipt}><span>FICTIONAL TRIP · {selection.destination.meaning} · {selection.mode.meaning}</span><strong lang="ja"><JapaneseText text={`${selection.fare}円`} /></strong><small>Sample সময়: {selection.minutes} মিনিট</small></div>}<div className={styles.scriptTools}><button type="button" className={styles.secondaryButton} disabled={!lines.length} aria-controls="travel-dialogue" aria-expanded={showTraveller} onClick={() => setShowTraveller(!showTraveller)}>{showTraveller ? "নিজের উত্তর লুকিয়ে practice" : "সব উত্তর দেখুন"}</button><button type="button" className={styles.secondaryButton} disabled={!lines.length} onClick={copyScript}>Conversation copy</button><button type="button" className={styles.secondaryButton} onClick={() => { onProfileChange({ destination: "", mode: "" }); setCopyStatus(""); setShowTraveller(true); }}>Travel reset</button></div><p role="status">{copyStatus}</p><JapaneseAudioPlayer text={script} label="Your travel conversation" disabledReason={!lines.length ? "গন্তব্য ও যানবাহন বেছে conversation শুনুন।" : ""} /><div id="travel-dialogue" className={styles.shopDialogue}>{lines.map((line, index) => <article className={`${styles.phraseCard} ${line.role === "traveller" ? styles.customerLine : styles.clerkLine}`} key={`${index}-${line.japanese}`}><span className={styles.speakerLabel}>{line.role === "traveller" ? "YOU · TRAVELLER" : "LOCAL HELPER"}</span>{line.role === "traveller" && !showTraveller ? <p className={styles.patternMeaning}>আপনার turn—না দেখে Japanese-এ বলুন।</p> : <><p className={styles.dialogueJapanese} lang="ja"><JapaneseText text={line.japanese} /></p><small className={styles.scriptReading}>{line.reading}</small><JapaneseAudioPlayer text={line.japanese} label={`Travel ${line.role} line ${index + 1}`} /><details><summary>বাংলা meaning</summary><p>{line.meaning}</p></details></>}</article>)}</div><p className={styles.hint}>তথ্য এই খোলা page-এ থাকে; refresh করলে reset হয়। বাস্তবে destination, stop/platform, fare ও timetable operator-এর তথ্য দেখে নিশ্চিত করুন।</p></section>
    <DirectionsListening />
    <section id="directions-check" className={styles.practiceBlock} aria-labelledby="directions-check-title"><h3 id="directions-check-title">05 · ছোট self-check</h3>{directionQuestions.map((question, index) => <fieldset className={styles.question} key={question.prompt}><legend>{index + 1}. <JapaneseText text={question.prompt} /></legend><div className={styles.options}>{question.options.map((option, optionIndex) => <label className={answers[index] === optionIndex ? styles.optionSelected : ""} key={option}><input type="radio" name={`directions-question-${index}`} checked={answers[index] === optionIndex} onChange={() => { setAnswers((previous) => ({ ...previous, [index]: optionIndex })); setChecked(false); }} /><span lang="ja"><JapaneseText text={option} /></span></label>)}</div>{checked && <p>{answers[index] === question.answer ? "✓ সঠিক। " : "↺ আবার চেষ্টা করুন। "}<JapaneseText text={question.explanation} /></p>}</fieldset>)}<div className={styles.checkActions}><button type="button" className={styles.primaryButton} disabled={!allAnswered} onClick={() => setChecked(true)}>উত্তর যাচাই করুন</button><button type="button" className={styles.secondaryButton} onClick={() => { setAnswers({}); setChecked(false); }}>Quiz reset</button><span role="status">{checked ? `${score}/${directionQuestions.length} সঠিক উত্তর` : "সব প্রশ্নে একটি করে উত্তর বেছে নিন।"}</span></div></section>
    <p className={styles.sourceNote}>আরও শিখুন: <a href="https://www.irodori.jpf.go.jp/bn/starter/" target="_blank" rel="noreferrer">Japan Foundation · Irodori বাংলা, Lesson 13</a>। Map ও transport exercises নিজস্ব fictional content। Audio browser-generated; pronunciation-এর automatic score নেই।</p>
  </>;
}
