"use client";

import { useState } from "react";
import { JapaneseText } from "./japanese-text";
import { JapaneseAudioGuide, JapaneseAudioPlayer } from "./japanese-audio-player";
import { shoppingQuantity, yenReading } from "./japanese-numbers";
import { buildShoppingScript, checkPriceAnswer, emptyShopping, priceChallenges, priceExamples, shopColours, shopPayments, shopProducts, shopSizes, shoppingPhrases, shoppingQuestions, shoppingSelection, type ShoppingProfile } from "./shopping-content";
import styles from "./japanes-101.module.css";

type Props = { profile: ShoppingProfile; onProfileChange: (profile: ShoppingProfile) => void };

function PriceListening() {
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [checked, setChecked] = useState(false);
  const challenge = priceChallenges[index];
  const selected = answers[index];
  const score = Object.entries(answers).filter(([key, answer]) => checkPriceAnswer(Number(key), answer)).length;
  const price = yenReading(challenge.price)!;

  return <section id="shopping-listening" className={styles.practiceBlock} aria-labelledby="shopping-listening-title">
    <h3 id="shopping-listening-title">04 · দাম শুনে বুঝুন</h3>
    <p>Audio শুনে সঠিক yen-এর দাম বেছে নিন। উত্তর check করার আগে reading দেখানো হয় না। Japanese voice না পাওয়া গেলে উপরের audio message দেখুন।</p>
    <div className={styles.listeningCard}>
      <span>LISTEN & CHOOSE · {index + 1}/{priceChallenges.length}</span>
      <JapaneseAudioPlayer key={index} text={`${price.kana}です。`} label={`Price listening question ${index + 1}`} />
      <fieldset className={styles.question}>
        <legend>কত yen শুনলেন?</legend>
        <div className={styles.options}>{challenge.options.map((value) => <label key={value} className={selected === value ? styles.optionSelected : ""}>
          <input type="radio" name={`price-listening-${index}`} checked={selected === value} disabled={checked} onChange={() => setAnswers((previous) => ({ ...previous, [index]: value }))} /><span>¥{value}</span>
        </label>)}</div>
      </fieldset>
      <div className={styles.checkActions}>
        <button type="button" className={styles.primaryButton} disabled={selected === undefined || checked} onClick={() => setChecked(true)}>দাম যাচাই করুন</button>
        <button type="button" className={styles.secondaryButton} disabled={!checked || index === priceChallenges.length - 1} onClick={() => { setIndex(index + 1); setChecked(false); }}>পরের প্রশ্ন →</button>
        <button type="button" className={styles.secondaryButton} onClick={() => { setIndex(0); setAnswers({}); setChecked(false); }}>Listening reset</button>
      </div>
      <div className={styles.listeningFeedback} role="status">{checked && <>
        <p>{checkPriceAnswer(index, selected) ? "✓ সঠিক! " : "↺ এবার reading দেখে আবার শুনুন। "}<span lang="ja"><JapaneseText text={`${challenge.price}円です。`} /></span></p>
        <p>{price.romaji} desu. · {challenge.price} yen</p>
        {index === priceChallenges.length - 1 && <p>Listening complete: {score}/{priceChallenges.length} সঠিক উত্তর। চাইলে reset করে আবার শুনুন।</p>}
      </>}</div>
    </div>
  </section>;
}

export function ShoppingPractice({ profile, onProfileChange }: Props) {
  const [showCustomer, setShowCustomer] = useState(true);
  const [copyStatus, setCopyStatus] = useState("");
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [checked, setChecked] = useState(false);
  const selection = shoppingSelection(profile);
  const lines = buildShoppingScript(profile);
  const script = lines.map((line) => line.japanese).join("\n");
  const allAnswered = shoppingQuestions.every((_, index) => answers[index] !== undefined);
  const score = shoppingQuestions.filter((question, index) => answers[index] === question.answer).length;

  function update(field: keyof ShoppingProfile, value: string) {
    onProfileChange(field === "item" ? { ...emptyShopping, item: value } : { ...profile, [field]: value });
    setCopyStatus("");
  }
  async function copyScript() {
    try { await navigator.clipboard.writeText(script); setCopyStatus("Conversation copy হয়েছে।"); }
    catch { setShowCustomer(true); setCopyStatus("Copy হয়নি। নিচের conversation select করে copy করুন।"); }
  }

  return <>
    <header className={styles.topicHeader}>
      <span>TOPIC 03 · YOUR FIRST JAPANESE SHOP</span>
      <h2>Shopping & Prices</h2>
      <p><span lang="ja"><JapaneseText text="買い物" /></span> / kaimono</p>
      <small>দাম জিজ্ঞেস করুন, পণ্য ও পরিমাণ বলুন, পছন্দের রং/size চান—ছোট conversation দিয়ে practice করুন।</small>
    </header>
    <nav className={`${styles.proNav} ${styles.routineNav}`} aria-label="Shopping practice sections"><a href="#shopping-phrases">বাক্য</a><a href="#shopping-numbers">Yen & quantity</a><a href="#shopping-builder">Practice shop</a><a href="#shopping-listening">Listening</a><a href="#shopping-check">Quiz</a></nav>
    <p className={styles.readingHint}>Kanji-এর উপরে hiragana, নিচে romaji ও বাংলা meaning আছে। Audio শুনুন → repeat করুন → তারপর না দেখে নিজের উত্তর বলুন।</p>
    <JapaneseAudioGuide />

    <section id="shopping-phrases" className={styles.practiceBlock} aria-labelledby="shopping-phrases-title">
      <h3 id="shopping-phrases-title">01 · দোকানের প্রয়োজনীয় বাক্য</h3>
      <div className={styles.phraseGrid}>{shoppingPhrases.map((phrase) => <article className={styles.phraseCard} key={phrase.japanese}>
        <strong lang="ja"><JapaneseText text={phrase.japanese} /></strong><small>{phrase.reading}</small>
        <JapaneseAudioPlayer text={phrase.japanese} label={`Shopping phrase: ${phrase.reading}`} />
        <details><summary>বাংলা meaning দেখুন</summary><p>{phrase.meaning}</p></details>
      </article>)}</div>
      <div className={styles.coachingNote}><b>দুটি ছোট pattern</b><p><JapaneseText text="このノートはいくらですか。 = এই খাতার দাম কত? এই pattern-এ は উচ্চারণ ‘wa’। ノートを2冊ください。 = দুটি খাতা দিন; を উচ্চারণ ‘o’।" /></p><p>দাম বুঝতে না পারলে লজ্জা না পেয়ে আবার বলতে বলুন। Card payment সব দোকানে আছে ধরে নেবেন না—আগে জিজ্ঞেস করুন।</p></div>
    </section>

    <section id="shopping-numbers" className={styles.practiceBlock} aria-labelledby="shopping-numbers-title">
      <h3 id="shopping-numbers-title">02 · Yen-এর দাম ও পণ্যের সংখ্যা</h3>
      <p><JapaneseText text="এই lesson-এ 円-এর reading えん (en)। নিচের sample দাম শুনে শত, হাজার ও দশ হাজার আলাদা করুন।" /></p>
      <div className={styles.phraseGrid}>{priceExamples.map((value) => <article className={styles.phraseCard} key={value}>
        <strong lang="ja"><JapaneseText text={`${value}円`} /></strong><small>{yenReading(value)!.romaji} · {value} yen</small>
        <JapaneseAudioPlayer text={`${yenReading(value)!.kana}です。`} label={`Yen example ${value}`} />
      </article>)}</div>
      <div className={styles.coachingNote}><b>সব পণ্য একইভাবে গুনবেন না</b><p><JapaneseText text="আপেল: ひとつ、ふたつ、みっつ、よっつ、いつつ। খাতা: 1冊、2冊、3冊। পোশাক: 1枚、2枚、3枚।" /></p><p>এখানে ১–৫ পর্যন্ত practice আছে। Counter অনুযায়ী pronunciation বদলায়; ‘এক খাতা’ হলো いっさつ, いちさつ নয়।</p></div>
      <div className={`${styles.phraseGrid} ${styles.routinePatterns}`}>{shopProducts.map((product) => <article className={styles.phraseCard} key={product.id}>
        <strong lang="ja">{product.japanese}</strong><small>{product.meaning} · <JapaneseText text={product.counter === "tsu" ? "つ" : product.counter === "satsu" ? "冊" : "枚"} /></small>
        <div className={styles.counterList}>{[1, 2, 3, 4, 5].map((value) => {
          const quantity = shoppingQuantity(product.counter, value)!;
          return <div key={value}><span lang="ja"><JapaneseText text={quantity.japanese} /></span><small>{value}টি · {quantity.romaji}</small><JapaneseAudioPlayer text={quantity.kana} label={`${product.meaning} quantity ${value}`} /></div>;
        })}</div>
      </article>)}</div>
    </section>

    <section id="shopping-builder" className={styles.practiceBlock} aria-labelledby="shopping-builder-title">
      <h3 id="shopping-builder-title">03 · Interactive practice shop</h3>
      <p>প্রথমে পণ্য বাছুন। এরপর quantity, আর টি-শার্ট হলে colour/size বেছে conversation তৈরি করুন। এগুলো শেখার sample price; tax/discount আলাদা করে গণনা করা হচ্ছে না। কোনো বাস্তব purchase হচ্ছে না।</p>
      <div className={styles.shopGrid}>{shopProducts.map((product) => <button type="button" key={product.id} className={`${styles.shopProduct} ${profile.item === product.id ? styles.shopProductActive : ""}`} aria-pressed={profile.item === product.id} onClick={() => update("item", product.id)}>
        <span className={styles.productIcon} aria-hidden="true">{product.icon}</span><b lang="ja">{product.japanese}</b><small>{product.meaning}</small><span lang="ja"><JapaneseText text={`${product.price}円`} /></span><small>একটির sample price</small>
      </button>)}</div>
      <div className={`${styles.proFields} ${styles.shopFields}`}>
        <label>কয়টি নেবেন?<select value={profile.quantity} disabled={!selection} onChange={(event) => update("quantity", event.target.value)}><option value="">Quantity বেছে নিন</option>{selection && [1, 2, 3, 4, 5].map((value) => <option value={value} key={value}>{value}টি · {shoppingQuantity(selection.product.counter, value)!.kana}</option>)}</select></label>
        <label>রং (শুধু টি-শার্ট)<select value={profile.colour} disabled={selection?.product.id !== "shirt"} onChange={(event) => update("colour", event.target.value)}><option value="">রং উল্লেখ করব না</option>{shopColours.map((colour) => <option value={colour.id} key={colour.id}>{colour.meaning} · {colour.reading}</option>)}</select></label>
        <label>Size (শুধু টি-শার্ট)<select value={profile.size} disabled={selection?.product.id !== "shirt"} onChange={(event) => update("size", event.target.value)}><option value="">Size উল্লেখ করব না</option>{shopSizes.map((size) => <option value={size.id} key={size.id}>{size.label}</option>)}</select></label>
        <label>Payment practice<select value={profile.payment} disabled={!selection?.quantity} onChange={(event) => update("payment", event.target.value)}><option value="">এখন যোগ করব না</option>{shopPayments.map((payment) => <option value={payment.id} key={payment.id}>{payment.meaning}</option>)}</select></label>
      </div>
      <div className={styles.shopReceipt} role="status">{selection?.total !== undefined ? <><span>SAMPLE TOTAL · {profile.quantity}টি × ¥{selection.product.price}</span><strong lang="ja"><JapaneseText text={`${selection.total}円`} /></strong><small>{yenReading(selection.total)!.romaji}</small></> : <p>পণ্য ও quantity বেছে নিলে মোট sample দাম দেখাবে।</p>}</div>
      <div className={styles.scriptTools}><button type="button" className={styles.secondaryButton} disabled={!lines.length} aria-controls="shopping-dialogue" aria-expanded={showCustomer} onClick={() => setShowCustomer(!showCustomer)}>{showCustomer ? "নিজের উত্তর লুকিয়ে practice" : "সব উত্তর দেখুন"}</button><button type="button" className={styles.secondaryButton} disabled={!lines.length} onClick={copyScript}>Conversation copy</button><button type="button" className={styles.secondaryButton} onClick={() => { onProfileChange({ ...emptyShopping }); setCopyStatus(""); setShowCustomer(true); }}>Shop reset</button></div>
      <p role="status">{copyStatus}</p>
      <JapaneseAudioPlayer text={script} label="Your shopping conversation" disabledReason={!lines.length ? "একটি পণ্য বেছে conversation শুনুন।" : ""} />
      <div id="shopping-dialogue" className={styles.shopDialogue}>
        {!lines.length ? <p className={styles.readingHint}>পণ্য বাছলে এখানে customer ও দোকানদারের conversation দেখাবে।</p> : lines.map((line, index) => <article className={`${styles.phraseCard} ${line.role === "customer" ? styles.customerLine : styles.clerkLine}`} key={`${index}-${line.japanese}`}>
          <span className={styles.speakerLabel}>{line.role === "customer" ? "YOU · CUSTOMER" : "SHOP ASSISTANT"}</span>
          {line.role === "customer" && !showCustomer && <p className={styles.patternMeaning}>আপনার turn—না দেখে Japanese-এ বলুন।</p>}
          <div hidden={line.role === "customer" && !showCustomer}>
            <p className={styles.dialogueJapanese} lang="ja"><JapaneseText text={line.japanese} /></p><small className={styles.scriptReading}>{line.reading}</small>
            <JapaneseAudioPlayer text={line.japanese} label={`Shopping ${line.role} line ${index + 1}`} />
            <details><summary>বাংলা meaning দেখুন</summary><p>{line.meaning}</p></details>
          </div>
        </article>)}
      </div>
      <p className={styles.hint}>সকল colour/size আছে—এটি sample shop-এর assumption। তথ্য শুধু এই খোলা page-এ থাকে; refresh করলে reset হয়। কোনো microphone recording বা pronunciation scoring নেই।</p>
    </section>

    <PriceListening />

    <section id="shopping-check" className={styles.practiceBlock} aria-labelledby="shopping-check-title">
      <h3 id="shopping-check-title">05 · ছোট self-check</h3>
      {shoppingQuestions.map((question, index) => <fieldset className={styles.question} key={question.prompt}><legend>{index + 1}. <JapaneseText text={question.prompt} /></legend><div className={styles.options}>{question.options.map((option, optionIndex) => <label className={answers[index] === optionIndex ? styles.optionSelected : ""} key={option}><input type="radio" name={`shopping-question-${index}`} checked={answers[index] === optionIndex} onChange={() => { setAnswers((previous) => ({ ...previous, [index]: optionIndex })); setChecked(false); }} /><span lang="ja"><JapaneseText text={option} /></span></label>)}</div>{checked && <p>{answers[index] === question.answer ? "✓ সঠিক। " : "↺ আবার চেষ্টা করুন। "}<JapaneseText text={question.explanation} /></p>}</fieldset>)}
      <div className={styles.checkActions}><button type="button" className={styles.primaryButton} disabled={!allAnswered} onClick={() => setChecked(true)}>উত্তর যাচাই করুন</button><button type="button" className={styles.secondaryButton} onClick={() => { setAnswers({}); setChecked(false); }}>Quiz reset</button><span role="status">{checked ? `${score}/${shoppingQuestions.length} সঠিক উত্তর` : "সব প্রশ্নে একটি করে উত্তর বেছে নিন।"}</span></div>
    </section>
    <p className={styles.sourceNote}>আরও শিখুন: <a href="https://www.irodori.jpf.go.jp/bn/starter/audio/lesson16.html" target="_blank" rel="noreferrer">Japan Foundation · Irodori Lesson 16 (বাংলা ও official audio)</a>। এখানকার shop, দাম ও exercises আমাদের নিজস্ব practice content।</p>
  </>;
}
