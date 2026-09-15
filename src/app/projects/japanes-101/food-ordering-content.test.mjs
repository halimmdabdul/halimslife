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
const readings = await loadSource("./japanese-readings.ts", { "./japanese-numbers": numbers });
const content = await loadSource("./food-ordering-content.ts", { "./japanese-numbers": numbers });
const furigana = await loadSource("../../../components/furigana.tsx");
const japaneseText = await loadSource("./japanese-text.tsx", { "@/components/furigana": furigana, "./japanese-readings": readings });
const audio = await loadSource("./japanese-audio.ts");
const audioPlayer = await loadSource("./japanese-audio-player.tsx", { "./japanese-audio": audio });
const overrides = { "./food-ordering-content": content, "./japanese-numbers": numbers, "./japanese-text": japaneseText, "./japanese-audio-player": audioPlayer };
const practice = await loadSource("./food-ordering-practice.tsx", overrides);
const fullProfile = { food: "udon", foodCount: "2", drink: "tea", drinkCount: "3", service: "takeaway", extra: "spoon", ingredient: "egg" };

test("restaurant quantities distinguish servings from cup/glass counters", () => {
  assert.deepEqual([1, 2, 3].map((count) => numbers.drinkQuantity(count).kana), ["いっぱい", "にはい", "さんばい"]);
  for (const count of [0, 4, -1, 1.5, NaN]) assert.equal(numbers.drinkQuantity(count), undefined);
  assert.equal(readings.annotateJapaneseText("1杯、2杯、3杯"), "いっぱい（1杯）、にはい（2杯）、さんばい（3杯）");
});

test("empty and incomplete restaurant selections never create a partial order", () => {
  assert.deepEqual(content.buildRestaurantScript(content.emptyFoodOrder), []);
  for (const count of ["", "0", "4", "-1", "2.5", "01", "abc"]) {
    const profile = { ...content.emptyFoodOrder, food: "udon", foodCount: count };
    assert.equal(content.restaurantSelection(profile).complete, false);
    assert.equal(content.restaurantSelection(profile).total, undefined);
    assert.deepEqual(content.buildRestaurantScript(profile), []);
  }
  const partial = { ...content.emptyFoodOrder, food: "udon", foodCount: "1", drink: "tea", drinkCount: "" };
  assert.deepEqual(content.buildRestaurantScript(partial), []);
  assert.equal(content.restaurantSelection(partial).total, undefined);
  assert.deepEqual(content.buildRestaurantScript({ ...content.emptyFoodOrder, food: "unknown", foodCount: "1" }), []);
});

test("food-only, drink-only and combined orders compute totals and service correctly", () => {
  assert.equal(content.restaurantSelection(fullProfile).total, 1640);
  const script = content.buildRestaurantScript(fullProfile);
  for (const text of ["うどんをふたつください。", "お茶を3杯お願いします。", "テイクアウトでお願いします。", "スプーンをください。", "全部で1640円です。"]) assert.ok(script.some((line) => line.japanese === text));
  const drinkOnly = content.buildRestaurantScript({ ...content.emptyFoodOrder, drink: "coffee", drinkCount: "1", service: "here" });
  assert.ok(drinkOnly.some((line) => line.japanese === "ここで飲みます。"));
  assert.ok(!drinkOnly.some((line) => line.japanese === "ここで食べます。"));
  for (const food of content.restaurantFoods) for (let count = 1; count <= 3; count++) assert.equal(content.restaurantSelection({ ...content.emptyFoodOrder, food: food.id, foodCount: String(count) }).total, food.price * count);
  for (const drink of content.restaurantDrinks) for (let count = 1; count <= 3; count++) assert.equal(content.restaurantSelection({ ...content.emptyFoodOrder, drink: drink.id, drinkCount: String(count) }).total, drink.price * count);
});

test("ingredient practice stays separate and never confirms absent ingredients or safety", () => {
  const inquiry = content.buildIngredientPractice(fullProfile);
  assert.equal(inquiry[0].japanese, "このうどんに卵は入っていますか。");
  assert.equal(inquiry[1].japanese, "確認します。少々お待ちください。");
  assert.equal(inquiry.length, 2);
  assert.deepEqual(content.buildIngredientPractice({ ...fullProfile, food: "" }), []);
  assert.deepEqual(content.buildIngredientPractice({ ...fullProfile, ingredient: "unknown" }), []);
  assert.deepEqual(content.buildRestaurantScript(fullProfile), content.buildRestaurantScript({ ...fullProfile, ingredient: "" }));
  assert.ok(!inquiry.some((line) => /入っていません|安全|ありません/u.test(line.japanese)));
});

test("all prepared food text and every generated order have full reading coverage", () => {
  const texts = ["食べ物と注文", ...content.restaurantPhrases.flatMap((item) => [item.japanese, item.meaning]), ...content.foodPreferenceExamples.map((item) => item.japanese), ...content.restaurantListening.flatMap((item) => [item.japanese, item.explanation]), ...content.restaurantQuestions.flatMap((item) => [...item.options, item.prompt, item.explanation]), ...content.buildIngredientPractice(fullProfile).map((item) => item.japanese), ...content.buildRestaurantScript({ ...content.emptyFoodOrder, drink: "coffee", drinkCount: "1", service: "here" }).map((item) => item.japanese)];
  for (const food of content.restaurantFoods) for (const drink of content.restaurantDrinks) for (const count of ["1", "2", "3"]) {
    texts.push(...content.buildRestaurantScript({ ...fullProfile, food: food.id, drink: drink.id, foodCount: count, drinkCount: count }).map((line) => line.japanese));
  }
  for (const text of texts) {
    assert.doesNotMatch(readings.annotateJapaneseText(text).replace(/[ぁ-んー]+（[^）]+）/gu, ""), /[一-鿿々]/u, text);
    const markup = renderToStaticMarkup(React.createElement(japaneseText.JapaneseText, { text }));
    assert.equal(markup.replace(/<rt>.*?<\/rt>/gu, "").replace(/<[^>]+>/gu, ""), text);
  }
  assert.equal(readings.annotateJapaneseText("何が入っていますか。"), "なに（何）がはい（入）っていますか。");
  assert.equal(readings.annotateJapaneseText("辛い料理"), "から（辛）いりょうり（料理）");
});

test("food ordering SSR renders all practice sections without revealing listening text", () => {
  const markup = renderToStaticMarkup(React.createElement(practice.FoodOrderingPractice, { profile: content.emptyFoodOrder, onProfileChange: () => {} }));
  for (const id of ["food-phrases", "food-menu", "food-dialogue", "food-preferences", "food-listening", "food-check"]) assert.ok(markup.includes(`id="${id}"`));
  assert.ok((markup.match(/data-japanese-audio="true"/gu) ?? []).length >= 21);
  assert.match(markup, /<ruby>注文<rt>ちゅうもん<\/rt><\/ruby>/u);
  assert.match(markup, /allergy-safe/u);
  const listening = markup.slice(markup.indexOf('id="food-listening"'), markup.indexOf('id="food-check"'));
  assert.match(listening, /Restaurant listening question 1 audio/u);
  assert.doesNotMatch(listening, /こちらでおめしあがり|Kochira de|✓/u);
  const configured = renderToStaticMarkup(React.createElement(practice.FoodOrderingPractice, { profile: fullProfile, onProfileChange: () => {} }));
  assert.match(configured, /<ruby>1640円<rt>せんろっぴゃくよんじゅうえん<\/rt><\/ruby>/u);
  assert.match(configured, /<ruby>3杯<rt>さんばい<\/rt><\/ruby>/u);
  assert.match(configured, /RESTAURANT STAFF/u);
  assert.ok(content.buildRestaurantScript(fullProfile).every((line) => audio.speechTextIsComplete(line.japanese)));
});

function elements(tree) {
  if (Array.isArray(tree)) return tree.flatMap(elements);
  return React.isValidElement(tree) ? [tree, ...elements(tree.props.children)] : [];
}
test("menu event handlers keep food/drink separate and reset changed-item quantities", async () => {
  const component = await loadSource("./food-ordering-practice.tsx", { ...overrides, react: { ...React, useState: (initial) => [initial, () => {}] } });
  let profile = { ...fullProfile };
  const render = () => elements(component.FoodOrderingPractice({ profile, onProfileChange: (value) => { profile = value; } }));
  const menuButtons = () => render().filter((node) => node.type === "button" && node.props["aria-pressed"] !== undefined);
  menuButtons()[0].props.onClick();
  assert.equal(profile.food, "burger");
  assert.equal(profile.foodCount, "");
  assert.equal(profile.ingredient, "");
  assert.equal(profile.drinkCount, "3");
  render().filter((node) => node.type === "select")[0].props.onChange({ target: { value: "1" } });
  assert.equal(content.restaurantSelection(profile).total, 1020);
  menuButtons()[0].props.onClick();
  assert.equal(profile.food, "");
  assert.equal(profile.foodCount, "");
  assert.equal(profile.drink, "tea");
  assert.equal(content.restaurantSelection(profile).total, 540);
});

test("listening handlers check answers, reveal feedback and reset before the next question", async () => {
  const state = [];
  let cursor = 0;
  const fakeReact = { ...React, useState(initial) {
    const key = cursor++;
    if (!(key in state)) state[key] = initial;
    return [state[key], (value) => { state[key] = typeof value === "function" ? value(state[key]) : value; }];
  } };
  const component = await loadSource("./food-ordering-practice.tsx", { ...overrides, react: fakeReact });
  const initialTree = component.FoodOrderingPractice({ profile: content.emptyFoodOrder, onProfileChange: () => {} });
  const listening = elements(initialTree).find((node) => typeof node.type === "function" && node.type.name === "RestaurantListening").type;
  state.length = 0;
  const render = () => { cursor = 0; return elements(listening()); };
  const button = (name) => render().find((node) => node.type === "button" && node.props.children === name);
  assert.equal(button("Meaning যাচাই করুন").props.disabled, true);
  render().filter((node) => node.type === "input")[0].props.onChange();
  button("Meaning যাচাই করুন").props.onClick();
  assert.equal(state[2], true);
  assert.equal(state[3][0], true);
  assert.equal(button("পরের প্রশ্ন →").props.disabled, false);
  button("পরের প্রশ্ন →").props.onClick();
  assert.equal(state[0], 1);
  assert.equal(state[1], null);
  assert.equal(state[2], false);
  button("Listening reset").props.onClick();
  assert.deepEqual(state, [0, null, false, {}]);
});
