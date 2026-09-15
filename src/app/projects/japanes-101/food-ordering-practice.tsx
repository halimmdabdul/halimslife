"use client";

import { useState } from "react";
import { JapaneseText } from "./japanese-text";
import { JapaneseAudioGuide, JapaneseAudioPlayer } from "./japanese-audio-player";
import { drinkQuantity, shoppingQuantity, yenReading } from "./japanese-numbers";
import { buildIngredientPractice, buildRestaurantScript, emptyFoodOrder, foodPreferenceExamples, restaurantDrinks, restaurantExtras, restaurantFoods, restaurantIngredients, restaurantListening, restaurantPhrases, restaurantQuestions, restaurantSelection, restaurantServices, type FoodOrderProfile } from "./food-ordering-content";
import styles from "./japanes-101.module.css";

type Props = { profile: FoodOrderProfile; onProfileChange: (profile: FoodOrderProfile) => void };

function RestaurantListening() {
  const [index, setIndex] = useState(0);
  const [choice, setChoice] = useState<number | null>(null);
  const [checked, setChecked] = useState(false);
  const [results, setResults] = useState<Record<number, boolean>>({});
  const question = restaurantListening[index];
  return <section id="food-listening" className={styles.practiceBlock} aria-labelledby="food-listening-title">
    <h3 id="food-listening-title">04 · Staff-এর কথা শুনে বুঝুন</h3>
    <p>প্রশ্নের audio শুনে বাংলা meaning বেছে নিন। Check করার আগে Japanese text ও reading লুকানো থাকে।</p>
    <div className={styles.listeningCard}>
      <span>LISTEN & UNDERSTAND · {index + 1}/{restaurantListening.length}</span>
      <JapaneseAudioPlayer key={index} text={question.japanese} label={`Restaurant listening question ${index + 1}`} />
      <fieldset className={styles.question}><legend>Staff কী বললেন?</legend><div className={styles.options}>{question.options.map((option, optionIndex) => <label key={option} className={choice === optionIndex ? styles.optionSelected : ""}><input type="radio" name={`restaurant-listening-${index}`} checked={choice === optionIndex} disabled={checked} onChange={() => setChoice(optionIndex)} /><span>{option}</span></label>)}</div></fieldset>
      <div className={styles.checkActions}>
        <button type="button" className={styles.primaryButton} disabled={choice === null || checked} onClick={() => { setChecked(true); setResults((previous) => ({ ...previous, [index]: choice === question.answer })); }}>Meaning যাচাই করুন</button>
        <button type="button" className={styles.secondaryButton} disabled={!checked || index === restaurantListening.length - 1} onClick={() => { setIndex(index + 1); setChoice(null); setChecked(false); }}>পরের প্রশ্ন →</button>
        <button type="button" className={styles.secondaryButton} onClick={() => { setIndex(0); setChoice(null); setChecked(false); setResults({}); }}>Listening reset</button>
      </div>
      <div className={styles.listeningFeedback} role="status">{checked && <><p>{choice === question.answer ? "✓ সঠিক। " : "↺ আবার শুনুন। "}<span lang="ja"><JapaneseText text={question.japanese} /></span></p><p>{question.reading}</p><p><JapaneseText text={question.explanation} /></p>{index === restaurantListening.length - 1 && <p>Listening complete: {Object.values(results).filter(Boolean).length}/{restaurantListening.length} সঠিক উত্তর।</p>}</>}</div>
    </div>
  </section>;
}

export function FoodOrderingPractice({ profile, onProfileChange }: Props) {
  const [showCustomer, setShowCustomer] = useState(true);
  const [copyStatus, setCopyStatus] = useState("");
  const [preference, setPreference] = useState("");
  const [preferenceKind, setPreferenceKind] = useState("like");
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [checked, setChecked] = useState(false);
  const selection = restaurantSelection(profile);
  const lines = buildRestaurantScript(profile);
  const script = lines.map((line) => line.japanese).join("\n");
  const ingredientLines = buildIngredientPractice(profile);
  const favourite = [...restaurantFoods, ...restaurantDrinks].find((item) => item.id === preference);
  const preferenceText = favourite ? `${favourite.japanese}${preferenceKind === "like" ? "が好きです。" : "は苦手です。"}` : "";
  const score = restaurantQuestions.filter((question, index) => answers[index] === question.answer).length;
  const allAnswered = restaurantQuestions.every((_, index) => answers[index] !== undefined);

  function update(field: keyof FoodOrderProfile, value: string) {
    onProfileChange({ ...profile, [field]: value, ...(field === "food" ? { foodCount: "", ingredient: "" } : field === "drink" ? { drinkCount: "" } : {}) });
    setCopyStatus("");
  }
  async function copyScript() {
    try { await navigator.clipboard.writeText(script); setCopyStatus("Restaurant conversation copy হয়েছে।"); }
    catch { setShowCustomer(true); setCopyStatus("Copy হয়নি। নিচের conversation select করে copy করুন।"); }
  }

  return <>
    <header className={styles.topicHeader}><span>TOPIC 04 · ORDER WITH CONFIDENCE</span><h2>Food & Ordering</h2><p><span lang="ja"><JapaneseText text="食べ物と注文" /></span> / tabemono to chuumon</p><small>Menu পড়ুন, খাবার ও পানীয় order করুন, dine-in/takeaway বলুন এবং staff-এর প্রশ্ন বুঝে উত্তর দিন।</small></header>
    <nav className={`${styles.proNav} ${styles.routineNav}`} aria-label="Food ordering sections"><a href="#food-phrases">বাক্য</a><a href="#food-menu">Menu & order</a><a href="#food-preferences">পছন্দ ও উপাদান</a><a href="#food-listening">Listening</a><a href="#food-check">Quiz</a></nav>
    <p className={styles.readingHint}>Kanji-এর উপরে hiragana দেওয়া আছে। আগে normal/slow audio শুনে repeat করুন, তারপর নিজের উত্তর না দেখে বলুন।</p>
    <JapaneseAudioGuide />

    <section id="food-phrases" className={styles.practiceBlock} aria-labelledby="food-phrases-title">
      <h3 id="food-phrases-title">01 · Restaurant-এর প্রয়োজনীয় বাক্য</h3>
      <div className={styles.phraseGrid}>{restaurantPhrases.map((phrase) => <article className={styles.phraseCard} key={phrase.japanese}><strong lang="ja"><JapaneseText text={phrase.japanese} /></strong><small>{phrase.reading}</small><JapaneseAudioPlayer text={phrase.japanese} label={`Restaurant phrase: ${phrase.reading}`} /><details><summary>বাংলা meaning দেখুন</summary><p><JapaneseText text={phrase.meaning} /></p></details></article>)}</div>
      <div className={styles.coachingNote}><b>Serving আর cup-এর সংখ্যা আলাদা</b><p><JapaneseText text="Serving: ひとつ、ふたつ、みっつ। Cup/glass: 1杯、2杯、3杯। এই menu-তে খাবারের serving-এ つ, পানীয়ের cup/glass-এ 杯 ব্যবহার করা হচ্ছে; অন্য পণ্যে counter আলাদা হতে পারে।" /></p><p>খাবার/পানীয় + をください বা をお願いします দিয়ে ভদ্রভাবে চাইতে পারেন।</p></div>
      <div className={`${styles.phraseGrid} ${styles.routinePatterns}`}>{[1, 2, 3].map((value) => <article className={styles.phraseCard} key={value}><strong lang="ja"><JapaneseText text={drinkQuantity(value)!.japanese} /></strong><small>{value} কাপ/গ্লাস · {drinkQuantity(value)!.romaji}</small><JapaneseAudioPlayer text={drinkQuantity(value)!.kana} label={`Cup quantity ${value}`} /></article>)}</div>
    </section>

    <section id="food-menu" className={styles.practiceBlock} aria-labelledby="food-menu-title">
      <h3 id="food-menu-title">02 · নিজের restaurant order তৈরি করুন</h3>
      <p>এটি শেখার sample menu ও price—বাস্তব order নয়। খাবার, পানীয় অথবা দুটোই বাছতে পারেন। প্রতিটি বাছা item-এর quantity পূরণ করলে conversation ও মোট দাম তৈরি হবে।</p>
      <h4 className={styles.menuCategory}>FOOD · প্রতি serving-এর sample দাম</h4>
      <div className={styles.shopGrid}>{restaurantFoods.map((item) => <button type="button" key={item.id} className={`${styles.shopProduct} ${profile.food === item.id ? styles.shopProductActive : ""}`} aria-pressed={profile.food === item.id} onClick={() => update("food", profile.food === item.id ? "" : item.id)}><span className={styles.productIcon} aria-hidden="true">{item.icon}</span><b lang="ja">{item.japanese}</b><small>{item.meaning} · {item.reading}</small><span lang="ja"><JapaneseText text={`${item.price}円`} /></span></button>)}</div>
      <h4 className={styles.menuCategory}>DRINKS · প্রতি cup/glass-এর sample দাম</h4>
      <div className={styles.shopGrid}>{restaurantDrinks.map((item) => <button type="button" key={item.id} className={`${styles.shopProduct} ${profile.drink === item.id ? styles.shopProductActive : ""}`} aria-pressed={profile.drink === item.id} onClick={() => update("drink", profile.drink === item.id ? "" : item.id)}><span className={styles.productIcon} aria-hidden="true">{item.icon}</span><b lang="ja"><JapaneseText text={item.japanese} /></b><small>{item.meaning} · {item.reading}</small><span lang="ja"><JapaneseText text={`${item.price}円`} /></span></button>)}</div>
      <p>বাছা item আবার চাপলে বাদ যাবে। Item বদলালে তার quantity নতুন করে বাছুন।</p>
      <div className={`${styles.proFields} ${styles.shopFields}`}>
        <label>খাবার কত serving?<select value={profile.foodCount} disabled={!selection.food} onChange={(event) => update("foodCount", event.target.value)}><option value="">Quantity বেছে নিন</option>{[1, 2, 3].map((value) => <option value={value} key={value}>{value} serving · {shoppingQuantity("tsu", value)!.kana}</option>)}</select></label>
        <label>পানীয় কত cup/glass?<select value={profile.drinkCount} disabled={!selection.drink} onChange={(event) => update("drinkCount", event.target.value)}><option value="">Quantity বেছে নিন</option>{[1, 2, 3].map((value) => <option value={value} key={value}>{value} cup/glass · {drinkQuantity(value)!.kana}</option>)}</select></label>
        <label>কোথায় খাবেন?<select value={profile.service} onChange={(event) => update("service", event.target.value)}><option value="">এখন উল্লেখ করব না</option>{restaurantServices.map((service) => <option value={service.id} key={service.id}>{service.label}</option>)}</select></label>
        <label>অতিরিক্ত কিছু চাইবেন?<select value={profile.extra} onChange={(event) => update("extra", event.target.value)}><option value="">এখন যোগ করব না</option>{restaurantExtras.map((extra) => <option value={extra.id} key={extra.id}>{extra.meaning}</option>)}</select></label>
      </div>
      <div className={styles.shopReceipt} role="status">{selection.total === undefined ? <p>একটি item এবং তার quantity বাছুন। একাধিক item বাছলে সবগুলোর quantity প্রয়োজন।</p> : <><span>SAMPLE TOTAL · খাবার + পানীয়</span><strong lang="ja"><JapaneseText text={`${selection.total}円`} /></strong><small>{yenReading(selection.total)!.romaji}</small></>}</div>
      <div className={styles.scriptTools}><button type="button" className={styles.secondaryButton} disabled={!lines.length} aria-controls="food-dialogue" aria-expanded={showCustomer} onClick={() => setShowCustomer(!showCustomer)}>{showCustomer ? "নিজের উত্তর লুকিয়ে practice" : "সব উত্তর দেখুন"}</button><button type="button" className={styles.secondaryButton} disabled={!lines.length} onClick={copyScript}>Conversation copy</button><button type="button" className={styles.secondaryButton} onClick={() => { onProfileChange({ ...emptyFoodOrder }); setShowCustomer(true); setCopyStatus(""); }}>Order reset</button></div>
      <p role="status">{copyStatus}</p>
      <JapaneseAudioPlayer text={script} label="Your restaurant order" disabledReason={!lines.length ? "বাছা প্রতিটি item-এর quantity পূরণ করে conversation শুনুন।" : ""} />
      <div id="food-dialogue" className={styles.shopDialogue}>{lines.map((line, index) => <article className={`${styles.phraseCard} ${line.role === "customer" ? styles.customerLine : styles.clerkLine}`} key={`${index}-${line.japanese}`}><span className={styles.speakerLabel}>{line.role === "customer" ? "YOU · CUSTOMER" : "RESTAURANT STAFF"}</span>{line.role === "customer" && !showCustomer ? <p className={styles.patternMeaning}>আপনার turn—না দেখে Japanese-এ বলুন।</p> : <><p className={styles.dialogueJapanese} lang="ja"><JapaneseText text={line.japanese} /></p><small className={styles.scriptReading}>{line.reading}</small><JapaneseAudioPlayer text={line.japanese} label={`Restaurant ${line.role} line ${index + 1}`} /><details><summary>বাংলা meaning দেখুন</summary><p>{line.meaning}</p></details></>}</article>)}</div>
      <p className={styles.hint}>Sample-এ tax/discount বা takeaway charge আলাদা করা হয়নি। পানি/চামচের request-ও ভাষা practice; availability বা free service নিশ্চিত নয়। তথ্য এই খোলা page-এ থাকে, refresh করলে reset হয়।</p>
    </section>

    <section id="food-preferences" className={styles.practiceBlock} aria-labelledby="food-preferences-title">
      <h3 id="food-preferences-title">03 · পছন্দ ও উপাদান নিয়ে কথা বলুন</h3>
      <div className={styles.phraseGrid}>{foodPreferenceExamples.map((phrase) => <article className={styles.phraseCard} key={phrase.japanese}><strong lang="ja"><JapaneseText text={phrase.japanese} /></strong><small>{phrase.reading}</small><JapaneseAudioPlayer text={phrase.japanese} label={`Food conversation: ${phrase.reading}`} /><details><summary>বাংলা meaning দেখুন</summary><p>{phrase.meaning}</p></details></article>)}</div>
      <h4 className={styles.menuCategory}>নিজের পছন্দের বাক্য</h4>
      <div className={styles.proFields}><label>খাবার / পানীয়<select value={preference} onChange={(event) => setPreference(event.target.value)}><option value="">একটি বেছে নিন</option>{[...restaurantFoods, ...restaurantDrinks].map((item) => <option key={item.id} value={item.id}>{item.meaning} · {item.reading}</option>)}</select></label><label>আপনার পছন্দ<select value={preferenceKind} onChange={(event) => setPreferenceKind(event.target.value)}><option value="like">পছন্দ করি</option><option value="dislike">তেমন পছন্দ নয় / নিতে অসুবিধা হয়</option></select></label></div>
      {favourite && <div className={styles.coachingNote}><p lang="ja"><JapaneseText text={preferenceText} /></p><p>{favourite.reading} {preferenceKind === "like" ? "ga suki desu." : "wa nigate desu."}</p><JapaneseAudioPlayer text={preferenceText} label="Your food preference" /></div>}
      <h4 className={styles.menuCategory}>উপাদান জিজ্ঞেস করার আলাদা practice</h4>
      <p>Menu থেকে একটি খাবার বাছুন, তারপর কোন উপাদান জানতে চান বেছে নিন। এই প্রশ্নের practice order conversation থেকে আলাদা; কোনো ingredient answer নিশ্চিত করা হয় না।</p>
      <div className={styles.proFields}><label>কোন উপাদান?<select value={profile.ingredient} disabled={!selection.food} onChange={(event) => update("ingredient", event.target.value)}><option value="">এখন যোগ করব না</option>{restaurantIngredients.map((ingredient) => <option key={ingredient.id} value={ingredient.id}>{ingredient.meaning} · {ingredient.reading}</option>)}</select></label></div>
      <div className={styles.shopDialogue}>{ingredientLines.map((line) => <article className={styles.phraseCard} key={line.japanese}><strong lang="ja"><JapaneseText text={line.japanese} /></strong><small>{line.reading}</small><JapaneseAudioPlayer text={line.japanese} label="Ingredient question practice" /><p className={styles.patternMeaning}>{line.meaning}</p></article>)}</div>
      <div className={styles.coachingNote}><b>পছন্দ, উপাদান ও নিরাপত্তা এক জিনিস নয়</b><p><JapaneseText text="苦手 মানে পছন্দ নয় / স্বাচ্ছন্দ্য নেই; এটি allergy বোঝায় না। এখানে খাবার allergy-safe, vegetarian বা halal হিসেবে classify করা হয়নি। বাস্তবে প্রয়োজনীয় উপাদান ও প্রস্তুতি staff-এর সঙ্গে যাচাই করুন—এই exercise খাবারের নিরাপত্তা নিশ্চিত করে না।" /></p></div>
    </section>

    <RestaurantListening />
    <section id="food-check" className={styles.practiceBlock} aria-labelledby="food-check-title"><h3 id="food-check-title">05 · ছোট self-check</h3>{restaurantQuestions.map((question, index) => <fieldset className={styles.question} key={question.prompt}><legend>{index + 1}. <JapaneseText text={question.prompt} /></legend><div className={styles.options}>{question.options.map((option, optionIndex) => <label className={answers[index] === optionIndex ? styles.optionSelected : ""} key={option}><input type="radio" name={`food-question-${index}`} checked={answers[index] === optionIndex} onChange={() => { setAnswers((previous) => ({ ...previous, [index]: optionIndex })); setChecked(false); }} /><span lang="ja"><JapaneseText text={option} /></span></label>)}</div>{checked && <p>{answers[index] === question.answer ? "✓ সঠিক। " : "↺ আবার চেষ্টা করুন। "}<JapaneseText text={question.explanation} /></p>}</fieldset>)}<div className={styles.checkActions}><button type="button" className={styles.primaryButton} disabled={!allAnswered} onClick={() => setChecked(true)}>উত্তর যাচাই করুন</button><button type="button" className={styles.secondaryButton} onClick={() => { setAnswers({}); setChecked(false); }}>Quiz reset</button><span role="status">{checked ? `${score}/${restaurantQuestions.length} সঠিক উত্তর` : "সব প্রশ্নে একটি করে উত্তর বেছে নিন।"}</span></div></section>
    <p className={styles.sourceNote}>আরও শিখুন: <a href="https://www.irodori.jpf.go.jp/assets/data/bn/pdf/X_L06_Bengali.pdf" target="_blank" rel="noreferrer">Japan Foundation · Irodori Lesson 6 (বাংলা)</a>। এখানকার menu ও interactive exercises নিজস্ব sample content। Browser speech teacher recording নয়; pronunciation-এর automatic score দেওয়া হয় না।</p>
  </>;
}
