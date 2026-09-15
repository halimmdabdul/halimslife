import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import { createRequire, Module } from "node:module";
import { fileURLToPath } from "node:url";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import ts from "typescript";

async function loadSource(path, overrides = {}) {
  const url = new URL(path, import.meta.url);
  const source = await readFile(url, "utf8");
  const output = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS, jsx: ts.JsxEmit.ReactJSX, target: ts.ScriptTarget.ES2022 } }).outputText;
  const loaded = new Module(fileURLToPath(url));
  const nativeRequire = createRequire(url);
  loaded.require = (id) => overrides[id] ?? (id.endsWith(".module.css") ? { default: {} } : nativeRequire(id));
  loaded._compile(output, fileURLToPath(url));
  return loaded.exports;
}
const numbers = await loadSource("./japanese-numbers.ts");
const routine = await loadSource("./daily-routine-content.ts");
const content = await loadSource("./plans-content.ts", { "./japanese-numbers": numbers, "./daily-routine-content": routine });
const readings = await loadSource("./japanese-readings.ts", { "./japanese-numbers": numbers });
const furigana = await loadSource("../../../components/furigana.tsx");
const japaneseText = await loadSource("./japanese-text.tsx", { "@/components/furigana": furigana, "./japanese-readings": readings });
const audio = await loadSource("./japanese-audio.ts");
const audioPlayer = await loadSource("./japanese-audio-player.tsx", { "./japanese-audio": audio });
const overrides = { "./plans-content": content, "./daily-routine-content": routine, "./japanese-numbers": numbers, "./japanese-text": japaneseText, "./japanese-audio-player": audioPlayer };
const practice = await loadSource("./plans-practice.tsx", overrides);
const base = { ...content.emptyPlan, activity: "coffee", weekday: "sat", time: "15:30", place: "station", response: "accept" };

test("calendar month and day readings include all irregular lesson dates", () => {
  for (const [value, kana] of [[4, "しがつ"], [7, "しちがつ"], [9, "くがつ"], [12, "じゅうにがつ"]]) assert.equal(numbers.calendarMonth(value).kana, kana);
  for (const [value, kana] of [[1, "ついたち"], [4, "よっか"], [10, "とおか"], [14, "じゅうよっか"], [17, "じゅうしちにち"], [19, "じゅうくにち"], [20, "はつか"], [24, "にじゅうよっか"], [27, "にじゅうしちにち"], [29, "にじゅうくにち"], [31, "さんじゅういちにち"]]) assert.equal(numbers.calendarDay(value).kana, kana);
  for (const value of [0, -1, 1.5, NaN, Infinity, 32]) assert.equal(numbers.calendarDay(value), undefined);
  for (const value of [0, -1, 1.5, NaN, 13]) assert.equal(numbers.calendarMonth(value), undefined);
  assert.equal(readings.annotateJapaneseText("4月14日、7月20日、9月24日"), "しがつ（4月）じゅうよっか（14日）、しちがつ（7月）はつか（20日）、くがつ（9月）にじゅうよっか（24日）");
});

test("date mode never mixes a weekday with a date or allows impossible calendar days", () => {
  assert.equal(content.planDate({ ...base, month: "4", day: "14" }).japanese, "土曜日");
  assert.equal(content.planDate({ ...base, dateMode: "date", month: "4", day: "14" }).japanese, "4月14日");
  for (const [month, day] of [["2", "29"], ["4", "31"], ["13", "1"], ["1", "0"], ["1", "1.5"], ["", "1"], ["01", "1"]]) assert.equal(content.planDate({ ...base, dateMode: "date", month, day }), undefined);
  assert.equal(content.daysInPlanMonth("2"), 28);
  assert.equal(content.daysInPlanMonth("4"), 30);
  assert.equal(content.daysInPlanMonth("1"), 31);
});

test("builder waits for all necessary fields instead of inventing a plan", () => {
  assert.deepEqual(content.buildPlanScript(content.emptyPlan), []);
  for (const key of ["activity", "weekday", "time", "place", "response"]) assert.deepEqual(content.buildPlanScript({ ...base, [key]: "" }), [], key);
  for (const key of ["activity", "weekday", "time", "place", "response", "dateMode"]) assert.deepEqual(content.buildPlanScript({ ...base, [key]: "invalid" }), [], key);
  assert.deepEqual(content.buildPlanScript({ ...base, time: "25:00" }), []);
});

test("acceptance agrees a meeting; refusal closes without confirming any meeting", () => {
  for (const activity of content.planActivities) for (const weekday of content.planWeekdays) for (const place of content.planPlaces) {
    const selected = { ...base, activity: activity.id, weekday: weekday.id, place: place.id };
    const accepted = content.buildPlanScript(selected);
    assert.equal(accepted.length, 7);
    assert.equal(accepted[0].japanese, activity.japanese);
    assert.match(accepted[5].japanese, new RegExp(place.japanese));
    const declined = content.buildPlanScript({ ...selected, response: "decline" });
    assert.equal(declined.length, 5);
    assert.match(declined[3].japanese, /ちょっと/u);
    assert.match(declined.at(-1).japanese, /また今度/u);
    assert.doesNotMatch(declined.map((line) => line.japanese).join(""), /会いましょう|大丈夫/u);
    for (const line of [...accepted, ...declined]) assert.ok(audio.speechTextIsComplete(line.japanese));
  }
});

test("all fixed and generated plan sentences have furigana without swallowing particles", () => {
  const texts = ["予定と誘い", ...content.planPhrases.map((item) => item.japanese), ...content.planWeekdays.map((item) => item.japanese), ...content.planListening.map((item) => item.japanese), ...content.planQuestions.flatMap((item) => [item.prompt, item.explanation, ...item.options])];
  for (let month = 1; month <= 12; month++) for (let day = 1; day <= content.daysInPlanMonth(String(month)); day++) {
    for (const response of ["accept", "decline"]) texts.push(...content.buildPlanScript({ ...base, dateMode: "date", month: String(month), day: String(day), response }).map((line) => line.japanese));
  }
  for (const time of routine.routineTimeOptions) texts.push(...content.buildPlanScript({ ...base, time: time.value }).map((line) => line.japanese));
  for (const text of new Set(texts)) {
    assert.doesNotMatch(readings.annotateJapaneseText(text).replace(/[ぁ-んー]+（[^）]+）/gu, ""), /[一-鿿々]/u, text);
    const markup = renderToStaticMarkup(React.createElement(japaneseText.JapaneseText, { text }));
    assert.equal(markup.replace(/<rt>.*?<\/rt>/gu, "").replace(/<[^>]+>/gu, ""), text);
  }
});

test("SSR exposes all practice sections and hides listening transcript until checking", () => {
  const markup = renderToStaticMarkup(React.createElement(practice.PlansPractice, { profile: content.emptyPlan, onProfileChange: () => {} }));
  for (const id of ["plans-phrases", "plans-dates", "plans-builder", "plans-dialogue", "plans-listening", "plans-check"]) assert.ok(markup.includes(`id="${id}"`));
  assert.ok((markup.match(/data-japanese-audio="true"/gu) ?? []).length >= 30);
  const listening = markup.slice(markup.indexOf('<section id="plans-listening"'), markup.indexOf('<section id="plans-check"'));
  assert.doesNotMatch(listening, /<ruby>|土曜日/u);
  const declined = renderToStaticMarkup(React.createElement(practice.PlansPractice, { profile: { ...base, response: "decline" }, onProfileChange: () => {} }));
  assert.match(declined, /DECLINED, NOT CONFIRMED/u);
  assert.doesNotMatch(declined, /Invitation you line 6/u);
});

function elements(tree) {
  if (Array.isArray(tree)) return tree.flatMap(elements);
  if (!React.isValidElement(tree)) return [];
  return [tree, ...elements(tree.props.children)];
}
async function harness() {
  let cursor = 0;
  const states = [];
  const hookedReact = { ...React, useState(initial) {
    const index = cursor++;
    if (!(index in states)) states[index] = typeof initial === "function" ? initial() : initial;
    return [states[index], (value) => { states[index] = typeof value === "function" ? value(states[index]) : value; }];
  } };
  const component = await loadSource("./plans-practice.tsx", { ...overrides, react: hookedReact });
  return { render(fn, props) { cursor = 0; return fn(props); }, reset() { states.length = 0; cursor = 0; }, component };
}

test("builder events reset an invalid date, preserve other choices and hide own audio", async () => {
  const h = await harness();
  let profile = { ...base, dateMode: "date", month: "1", day: "31" };
  const render = () => h.render(h.component.PlansPractice, { profile, onProfileChange: (value) => { profile = value; } });
  let tree = render();
  const select = elements(tree).find((node) => node.type === "select" && node.props.value === "1");
  select.props.onChange({ target: { value: "2" } });
  assert.equal(profile.month, "2"); assert.equal(profile.day, ""); assert.equal(profile.time, "15:30");
  tree = render();
  elements(tree).find((node) => node.type === "select" && node.props.value === "").props.onChange({ target: { value: "14" } });
  tree = render();
  elements(tree).find((node) => node.type === "button" && node.props["aria-controls"] === "plans-dialogue").props.onClick();
  tree = render();
  assert.equal(elements(tree).filter((node) => node.type === audioPlayer.JapaneseAudioPlayer && /Your invitation conversation|Invitation you line/u.test(node.props.label)).length, 0);
  assert.ok(elements(tree).some((node) => node.type === audioPlayer.JapaneseAudioPlayer && /Invitation friend/u.test(node.props.label)));
  elements(tree).find((node) => node.type === "button" && node.props.children === "Plan reset").props.onClick();
  assert.deepEqual(profile, content.emptyPlan);
});

test("listening gates checking and resets both selection and transcript between exercises", async () => {
  const h = await harness();
  const parentTree = h.render(h.component.PlansPractice, { profile: base, onProfileChange: () => {} });
  const listening = elements(parentTree).find((node) => typeof node.type === "function" && node.type.name === "PlansListening");
  h.reset();
  const render = () => h.render(listening.type, {});
  let tree = render();
  const check = (tree) => elements(tree).find((node) => node.type === "button" && node.props.children === "Listening যাচাই");
  assert.equal(check(tree).props.disabled, true);
  elements(tree).find((node) => node.type === "input" && node.props.type === "radio").props.onChange();
  tree = render(); assert.equal(check(tree).props.disabled, false);
  check(tree).props.onClick(); tree = render();
  assert.ok(elements(tree).some((node) => node.type === japaneseText.JapaneseText && node.props.text === content.planListening[0].japanese));
  elements(tree).find((node) => node.type === "button" && node.props.children === "পরের listening").props.onClick();
  tree = render(); assert.equal(check(tree).props.disabled, true);
  assert.ok(elements(tree).filter((node) => node.type === "input").every((node) => !node.props.checked));
  assert.equal(elements(tree).filter((node) => node.type === japaneseText.JapaneseText).length, 0);
  assert.ok(elements(tree).some((node) => node.type === audioPlayer.JapaneseAudioPlayer && node.props.text === content.planListening[1].japanese));
});

test("quiz requires all answers, scores correctly and clears on reset", async () => {
  const h = await harness();
  const render = () => h.render(h.component.PlansPractice, { profile: base, onProfileChange: () => {} });
  const check = (tree) => elements(tree).find((node) => node.type === "button" && node.props.children === "উত্তর যাচাই করুন");
  let tree = render(); assert.equal(check(tree).props.disabled, true);
  content.planQuestions.forEach((question, index) => {
    const inputs = elements(tree).filter((node) => node.type === "input" && node.props.name === `plans-question-${index}`);
    inputs[question.answer].props.onChange(); tree = render();
  });
  assert.equal(check(tree).props.disabled, false); check(tree).props.onClick(); tree = render();
  assert.ok(elements(tree).some((node) => node.props.role === "status" && node.props.children === "4/4 সঠিক উত্তর"));
  elements(tree).find((node) => node.type === "button" && node.props.children === "Quiz reset").props.onClick();
  tree = render(); assert.equal(check(tree).props.disabled, true);
  assert.ok(elements(tree).filter((node) => node.type === "input").every((node) => !node.props.checked));
});
