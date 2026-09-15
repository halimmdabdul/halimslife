import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { createRequire, Module } from "node:module";
import { fileURLToPath } from "node:url";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import ts from "typescript";

const source = await readFile(new URL("./self-introduction-content.ts", import.meta.url), "utf8");
const output = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } }).outputText;
const content = await import(`data:text/javascript;base64,${Buffer.from(output).toString("base64")}`);
const { buildIntroduction } = content;
const numberContent = await loadTsx("./japanese-numbers.ts");
const readingContent = await loadTsx("./japanese-readings.ts", { "./japanese-numbers": numberContent });
const { annotateJapaneseText } = readingContent;

async function loadTsx(path, overrides = {}) {
  const url = new URL(path, import.meta.url);
  const source = await readFile(url, "utf8");
  const output = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, target: ts.ScriptTarget.ES2022 } }).outputText;
  const loaded = new Module(fileURLToPath(url));
  const nativeRequire = createRequire(url);
  loaded.require = (id) => overrides[id] ?? (id.endsWith(".module.css") ? { default: {} } : nativeRequire(id));
  loaded._compile(output, fileURLToPath(url));
  return loaded.exports;
}

const furigana = await loadTsx("../../../components/furigana.tsx");
const japaneseText = await loadTsx("./japanese-text.tsx", { "@/components/furigana": furigana, "./japanese-readings": readingContent });
const audioSource = await readFile(new URL("./japanese-audio.ts", import.meta.url), "utf8");
const audioOutput = ts.transpileModule(audioSource, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } }).outputText;
const audioContent = await import(`data:text/javascript;base64,${Buffer.from(audioOutput).toString("base64")}`);
const audioPlayer = await loadTsx("./japanese-audio-player.tsx", { "./japanese-audio": audioContent });
const routineSource = await readFile(new URL("./daily-routine-content.ts", import.meta.url), "utf8");
const routineOutput = ts.transpileModule(routineSource, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } }).outputText;
const routineContent = await import(`data:text/javascript;base64,${Buffer.from(routineOutput).toString("base64")}`);
const dailyRoutine = await loadTsx("./daily-routine.tsx", { "./daily-routine-content": routineContent, "./japanese-text": japaneseText, "./japanese-audio-player": audioPlayer });
const shoppingContent = await loadTsx("./shopping-content.ts", { "./japanese-numbers": numberContent });
const shoppingPractice = await loadTsx("./shopping-practice.tsx", { "./shopping-content": shoppingContent, "./japanese-numbers": numberContent, "./japanese-text": japaneseText, "./japanese-audio-player": audioPlayer });
const foodContent = await loadTsx("./food-ordering-content.ts", { "./japanese-numbers": numberContent });
const foodPractice = await loadTsx("./food-ordering-practice.tsx", { "./food-ordering-content": foodContent, "./japanese-numbers": numberContent, "./japanese-text": japaneseText, "./japanese-audio-player": audioPlayer });
const directionsContent = await loadTsx("./directions-content.ts", { "./japanese-numbers": numberContent });
const directionsPractice = await loadTsx("./directions-practice.tsx", { "./directions-content": directionsContent, "./japanese-text": japaneseText, "./japanese-audio-player": audioPlayer });
const plansContent = await loadTsx("./plans-content.ts", { "./japanese-numbers": numberContent, "./daily-routine-content": routineContent });
const plansPractice = await loadTsx("./plans-practice.tsx", { "./plans-content": plansContent, "./japanese-numbers": numberContent, "./daily-routine-content": routineContent, "./japanese-text": japaneseText, "./japanese-audio-player": audioPlayer });
const base = { situation: "workplace", name: "ハリム", country: "バングラデシュ", background: "engineer", years: "", strength: "", evidence: "", goal: "", hobby: "", length: "full" };

test("formal introduction uses a humble name and truthful origin", () => {
  const script = buildIntroduction(base).map((line) => line.japanese).join("\n");
  assert.match(script, /ハリムと申します。/);
  assert.match(script, /バングラデシュ出身です。/);
  assert.doesNotMatch(script, /おっしゃいます|来ました|年の経験/);
});

test("empty optional fields do not invent background or achievements", () => {
  const lines = buildIntroduction({ ...base, name: " ", country: "", background: "" });
  assert.deepEqual(lines.map((line) => line.label), ["Opening", "Name", "Closing"]);
  assert.equal(lines[1].japanese, "［名前］と申します。");
});

test("class uses natural polite wording; interview changes opening and excludes hobbies", () => {
  const classLines = buildIntroduction({ ...base, situation: "class", hobby: "reading" });
  assert.equal(classLines[1].japanese, "ハリムです。");
  assert.ok(classLines.some((line) => line.label === "Personal touch"));
  const interview = buildIntroduction({ ...base, situation: "interview", hobby: "reading" });
  assert.match(interview[0].japanese, /お時間をいただき/);
  assert.equal(interview.at(-1).japanese, "本日はどうぞよろしくお願いいたします。");
  assert.ok(!interview.some((line) => line.label === "Personal touch"));
});

test("brief format excludes all selected extended details", () => {
  const lines = buildIntroduction({ ...base, length: "brief", years: "3", strength: "teamwork", evidence: "実際の例です", goal: "work", hobby: "reading" });
  assert.deepEqual(lines.map((line) => line.label), ["Opening", "Name", "Origin", "Background", "Closing"]);
});

test("work experience requires valid whole years and a working background", () => {
  assert.ok(buildIntroduction({ ...base, years: "3" }).some((line) => line.japanese === "この分野で3年の経験があります。"));
  for (const years of ["", "0", "-2", "2.5", "51", "abc"]) {
    assert.ok(!buildIntroduction({ ...base, years }).some((line) => line.label === "Experience"));
  }
  assert.ok(!buildIntroduction({ ...base, background: "language-student", years: "3" }).some((line) => line.label === "Experience"));
});

test("personal evidence is trimmed, not translated, and marked unverified", () => {
  const line = buildIntroduction({ ...base, evidence: "  自分で作りました  " }).find((line) => line.label === "Your example");
  assert.equal(line.japanese, "自分で作りました。");
  assert.match(line.meaning, /যাচাই করা হয়নি/);
  assert.equal(buildIntroduction({ ...base, evidence: "自分で作りました。" }).find((line) => line.label === "Your example").japanese, "自分で作りました。");
});

test("professional practice renders all coaching steps with a deterministic timer", async () => {
  const component = await loadTsx("./professional-introduction.tsx", { "./self-introduction-content": content, "./japanese-text": japaneseText, "./japanese-audio-player": audioPlayer });
  const markup = renderToStaticMarkup(React.createElement(component.ProfessionalIntroduction, { name: "ハリム", country: "バングラデシュ", onNameChange: () => {} }));
  for (const id of ["pro-introduction", "pro-patterns", "pro-builder", "professional-script", "pro-followups", "pro-rehearsal"]) assert.ok(markup.includes(`id="${id}"`));
  assert.match(markup, /01:00/);
  assert.match(markup, /NEXT LEVEL/);
  assert.match(markup.replace(/<rt>.*?<\/rt>/gu, "").replace(/<[^>]+>/gu, ""), /ハリムと申します。/);
  assert.match(markup, /<ruby>申<rt>もう<\/rt><\/ruby>/);
  assert.match(markup, /Self-review:/);
  assert.match(markup, /Hello Work/);
  assert.ok((markup.match(/data-japanese-audio="true"/gu) ?? []).length >= 20);
  assert.match(markup, /Your professional introduction audio/);
  assert.match(markup, /ধীরে শুনুন/);
});

test("furigana renders hiragana above kanji without changing kana or punctuation", () => {
  const markup = renderToStaticMarkup(React.createElement(japaneseText.JapaneseText, { text: "日本語を勉強しています。" }));
  assert.equal(markup, "<ruby>日本語<rt>にほんご</rt></ruby>を<ruby>勉強<rt>べんきょう</rt></ruby>しています。");
  assert.equal(annotateJapaneseText("はじめまして。ハリムです。"), "はじめまして。ハリムです。");
  assert.equal(annotateJapaneseText("田中"), "田中");
  for (const text of ["私の強みは、新しいことを積極的に学ぶ姿勢です。", "と申します。", "どうぞよろしくお願いいたします。", "大学で情報工学を勉強しています。"]) {
    const rendered = renderToStaticMarkup(React.createElement(japaneseText.JapaneseText, { text }));
    assert.equal(rendered.replace(/<rt>.*?<\/rt>/gu, "").replace(/<[^>]+>/gu, ""), text);
  }
});

test("context-sensitive words and year numbers have correct readings", () => {
  assert.equal(annotateJapaneseText("来ました。来る。"), "き（来）ました。く（来）る。");
  assert.equal(annotateJapaneseText("例えば、実際の例"), "たと（例）えば、実際のれい（例）");
  assert.equal(annotateJapaneseText("何ですか。"), "なん（何）ですか。");
  assert.equal(annotateJapaneseText("1年、3年、4年、14年、20年、50年"), "いちねん（1年）、さんねん（3年）、よねん（4年）、じゅうよねん（14年）、にじゅうねん（20年）、ごじゅうねん（50年）");
});

test("all prepared advanced patterns, scripts and coaching have kanji reading coverage", () => {
  const texts = [
    ...content.professionalPatterns.flatMap((item) => [item.japanese, item.audioExample, item.note]),
    ...content.followUps.flatMap((item) => [item.question, item.answer, item.tip]),
    ...Object.values(content.situations).map((item) => item.advice),
    ...content.backgrounds.map((item) => item.japanese),
    ...content.strengths.map((item) => item.japanese),
    ...content.goals.map((item) => item.japanese),
    ...content.hobbies.map((item) => item.japanese),
    ...buildIntroduction({ ...base, situation: "interview", years: "3" }).map((item) => item.japanese),
    "自己紹介 ≠ 長い自己PR",
  ];
  for (const text of texts) {
    const unannotated = annotateJapaneseText(text).replace(/[ぁ-んー]+（[^）]+）/gu, "");
    assert.doesNotMatch(unannotated, /[一-鿿々]/u, text);
  }
});

test("a user's kanji name is never assigned a guessed reading", async () => {
  const component = await loadTsx("./professional-introduction.tsx", { "./self-introduction-content": content, "./japanese-text": japaneseText, "./japanese-audio-player": audioPlayer });
  const markup = renderToStaticMarkup(React.createElement(component.ProfessionalIntroduction, { name: "日本", country: "バングラデシュ", onNameChange: () => {} }));
  assert.match(markup, /<p lang="ja">日本と<ruby>申<rt>もう<\/rt><\/ruby>します。<\/p>/);
});

test("every professional audio example is a complete model, not a bracket template", () => {
  for (const pattern of content.professionalPatterns) assert.ok(audioContent.speechTextIsComplete(pattern.audioExample));
});

test("daily routine stays empty until the learner adds their own information", () => {
  assert.deepEqual(routineContent.buildRoutine("weekday", routineContent.emptyRoutine), []);
  assert.deepEqual(routineContent.buildRoutine("weekend", routineContent.emptyRoutine), []);
  const lines = routineContent.buildRoutine("weekday", { ...routineContent.emptyRoutine, wake: "07:00" });
  assert.deepEqual(lines.map((line) => line.label), ["Wake up"]);
  assert.equal(lines[0].japanese, "平日は、午前7時に起きます。");
});

test("routine clocks use AM/PM, noon, midnight and correct half hours", () => {
  for (const [time, expected] of [["00:00", "夜の12時"], ["04:30", "午前4時半"], ["07:00", "午前7時"], ["09:00", "午前9時"], ["12:00", "昼の12時"], ["13:30", "午後1時半"], ["23:30", "午後11時半"]]) {
    assert.equal(routineContent.routineTime(time).japanese, expected);
  }
  assert.match(routineContent.routineTime("04:00").reading, /yo-ji/u);
  assert.match(routineContent.routineTime("07:00").reading, /shichi-ji/u);
  assert.match(routineContent.routineTime("09:00").reading, /ku-ji/u);
  for (const value of ["", "24:00", "-1:00", "07:15", "7:00", "noon", "12:60"]) assert.equal(routineContent.routineTime(value), undefined);
  assert.equal(routineContent.routineTimeOptions.length, 48);
  assert.equal(new Set(routineContent.routineTimeOptions.map((item) => item.value)).size, 48);
});

test("routine contexts and travel grammar do not mix weekdays, home or walking", () => {
  const profiles = { weekday: { ...routineContent.exampleRoutine }, weekend: { ...routineContent.emptyRoutine, destination: "home" } };
  assert.match(routineContent.buildRoutine("weekday", profiles.weekday)[0].japanese, /^平日は/u);
  const weekend = routineContent.buildRoutine("weekend", profiles.weekend);
  assert.equal(weekend[0].japanese, "週末は、家で過ごします。");
  const walking = routineContent.buildRoutine("weekday", { ...routineContent.emptyRoutine, destination: "school", transport: "walk", departure: "08:30" });
  assert.equal(walking[0].japanese, "平日は、午前8時半に歩いて学校に行きます。");
  assert.doesNotMatch(walking[0].japanese, /歩いてで/u);
  const home = routineContent.buildRoutine("weekend", { ...routineContent.exampleRoutine, destination: "home" }).find((line) => line.label === "Daytime");
  assert.equal(home.japanese, "家で過ごします。");
  assert.equal(profiles.weekday.destination, "work");
  assert.deepEqual(routineContent.buildRoutine("weekday", { ...routineContent.emptyRoutine, departure: "08:00", transport: "train" }), []);
  const invalid = routineContent.buildRoutine("weekday", { ...routineContent.emptyRoutine, wake: "24:00", destination: "invalid", transport: "invalid" });
  assert.deepEqual(invalid, []);
});

test("every prepared routine sentence and selectable clock has full reading coverage", () => {
  const texts = [
    "毎日の生活", "午前 = AM, 午後 = PM。 半 = サンプル。昼の12時; 夜の12時。",
    ...routineContent.routinePhrases.map((item) => item.japanese),
    ...routineContent.routinePatterns.flatMap((item) => [item.japanese, item.meaning]),
    ...routineContent.routineConversations.flatMap((item) => [item.question, item.answer]),
    ...routineContent.routineQuestions.flatMap((item) => [item.prompt, item.explanation]),
    ...routineContent.routineTimeOptions.map((item) => routineContent.routineTime(item.value).japanese),
    ...["weekday", "weekend"].flatMap((day) => routineContent.destinations.flatMap((destination) => routineContent.transports.flatMap((transport) => routineContent.buildRoutine(day, { ...routineContent.exampleRoutine, destination: destination.id, transport: transport.id }).map((line) => line.japanese)))),
  ];
  for (const text of texts) {
    assert.doesNotMatch(annotateJapaneseText(text).replace(/[ぁ-んー]+（[^）]+）/gu, ""), /[一-鿿々]/u, text);
    const markup = renderToStaticMarkup(React.createElement(japaneseText.JapaneseText, { text }));
    assert.equal(markup.replace(/<rt>.*?<\/rt>/gu, "").replace(/<[^>]+>/gu, ""), text);
  }
  assert.equal(annotateJapaneseText("4時、7時、9時、11時半"), "よじ（4時）、しちじ（7時）、くじ（9時）、じゅういちじ（11時）はん（半）");
  assert.equal(annotateJapaneseText("何をしますか。"), "なに（何）をしますか。");
});

test("daily routine renders all six practice steps, audio and an empty personal builder", () => {
  const markup = renderToStaticMarkup(React.createElement(dailyRoutine.DailyRoutine, { profiles: { weekday: { ...routineContent.emptyRoutine }, weekend: { ...routineContent.emptyRoutine } }, onProfileChange: () => {} }));
  for (const id of ["routine-phrases", "routine-patterns", "routine-builder", "routine-script", "routine-conversation", "routine-check", "routine-review-title"]) assert.ok(markup.includes(`id="${id}"`));
  assert.match(markup, /Daily Routine/u);
  assert.match(markup, /0 SENTENCES/u);
  assert.match(markup, /Self-review: 0\/5/u);
  assert.ok((markup.match(/data-japanese-audio="true"/gu) ?? []).length >= 25);
  assert.match(markup, /<ruby>7時<rt>しちじ<\/rt><\/ruby>/u);
  assert.match(markup, /Your daily routine audio/u);
  assert.match(markup, /কমপক্ষে একটি সময়/u);
});

test("the workspace exposes all selectable topics without breaking introduction practice", async () => {
  const professional = await loadTsx("./professional-introduction.tsx", { "./self-introduction-content": content, "./japanese-text": japaneseText, "./japanese-audio-player": audioPlayer });
  const workspace = await loadTsx("./topic-practice.tsx", { "./professional-introduction": professional, "./daily-routine": dailyRoutine, "./daily-routine-content": routineContent, "./shopping-practice": shoppingPractice, "./shopping-content": shoppingContent, "./food-ordering-practice": foodPractice, "./food-ordering-content": foodContent, "./directions-practice": directionsPractice, "./directions-content": directionsContent, "./plans-practice": plansPractice, "./plans-content": plansContent, "./japanese-text": japaneseText, "./japanese-audio-player": audioPlayer });
  const markup = renderToStaticMarkup(React.createElement(workspace.TopicPractice));
  assert.match(markup, /<b>Self-introduction<\/b>/u);
  assert.match(markup, /<b>Daily Routine<\/b>/u);
  assert.match(markup, /<ruby>自己紹介<rt>じこしょうかい<\/rt><\/ruby>/u);
  assert.match(markup, /<ruby>生活<rt>せいかつ<\/rt><\/ruby>/u);
  assert.match(markup, /<b>Shopping &amp; Prices<\/b>/u);
  assert.match(markup, /<b>Food &amp; Ordering<\/b>/u);
  assert.match(markup, /<b>Directions &amp; Transportation<\/b>/u);
  assert.match(markup, /<b>Making Plans &amp; Invitations<\/b>/u);
  assert.equal((markup.match(/aria-controls="topic-practice"/gu) ?? []).length, 6);
});
