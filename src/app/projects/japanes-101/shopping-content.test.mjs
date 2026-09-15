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
const content = await loadSource("./shopping-content.ts", { "./japanese-numbers": numbers });
const furigana = await loadSource("../../../components/furigana.tsx");
const japaneseText = await loadSource("./japanese-text.tsx", { "@/components/furigana": furigana, "./japanese-readings": readings });
const audio = await loadSource("./japanese-audio.ts");
const audioPlayer = await loadSource("./japanese-audio-player.tsx", { "./japanese-audio": audio });
const overrides = { "./shopping-content": content, "./japanese-numbers": numbers, "./japanese-text": japaneseText, "./japanese-audio-player": audioPlayer };
const practice = await loadSource("./shopping-practice.tsx", overrides);

test("yen reading handles irregular hundreds, thousands and ten thousands", () => {
  for (const [price, expected] of [[1, "いちえん"], [10, "じゅうえん"], [150, "ひゃくごじゅうえん"], [300, "さんびゃくえん"], [380, "さんびゃくはちじゅうえん"], [600, "ろっぴゃくえん"], [800, "はっぴゃくえん"], [1000, "せんえん"], [1800, "せんはっぴゃくえん"], [3000, "さんぜんえん"], [8000, "はっせんえん"], [10000, "いちまんえん"], [99999, "きゅうまんきゅうせんきゅうひゃくきゅうじゅうきゅうえん"]]) assert.equal(numbers.yenReading(price).kana, expected);
  assert.equal(numbers.yenReading(1800).romaji, "sen happyaku-en");
  for (const price of [0, -1, 1.5, NaN, Infinity, 100000]) assert.equal(numbers.yenReading(price), undefined);
});

test("shopping counters are product-specific with special one-notebook pronunciation", () => {
  assert.deepEqual([1, 2, 3, 4, 5].map((value) => numbers.shoppingQuantity("tsu", value).kana), ["ひとつ", "ふたつ", "みっつ", "よっつ", "いつつ"]);
  assert.equal(numbers.shoppingQuantity("satsu", 1).kana, "いっさつ");
  assert.equal(numbers.shoppingQuantity("satsu", 4).kana, "よんさつ");
  assert.equal(numbers.shoppingQuantity("mai", 4).kana, "よんまい");
  for (const value of [0, 6, -1, 1.5, NaN]) assert.equal(numbers.shoppingQuantity("mai", value), undefined);
  assert.equal(numbers.shoppingQuantity("unknown", 1), undefined);
});

test("empty shopping choices do not create orders or invented preferences", () => {
  assert.deepEqual(content.buildShoppingScript(content.emptyShopping), []);
  assert.equal(content.shoppingSelection({ ...content.emptyShopping, item: "unknown" }), undefined);
  const script = content.buildShoppingScript({ ...content.emptyShopping, item: "apple" });
  assert.equal(script.length, 2);
  assert.match(script[0].japanese, /このりんごはいくらですか/u);
  assert.equal(script[1].japanese, "150円です。");
  for (const quantity of ["", "0", "6", "-1", "2.5", "01", "abc"]) {
    const selection = content.shoppingSelection({ ...content.emptyShopping, item: "notebook", quantity });
    assert.equal(selection.quantity, undefined);
    assert.equal(selection.total, undefined);
  }
});

test("shop totals and dialogue track product, quantity and optional clothing variants", () => {
  for (const product of content.shopProducts) for (let count = 1; count <= 5; count++) {
    const profile = { ...content.emptyShopping, item: product.id, quantity: String(count) };
    const selection = content.shoppingSelection(profile);
    const script = content.buildShoppingScript(profile);
    assert.equal(selection.total, product.price * count);
    assert.ok(script.some((line) => line.japanese === `${product.japanese}を${numbers.shoppingQuantity(product.counter, count).japanese}ください。`));
    assert.ok(script.some((line) => line.japanese === `全部で${product.price * count}円です。`));
    assert.equal(script.at(-1).japanese, "ありがとうございます。");
    assert.ok(script.every((line) => audio.speechTextIsComplete(line.japanese)));
  }
  const clothing = content.buildShoppingScript({ item: "shirt", quantity: "2", colour: "white", size: "m", payment: "card" });
  assert.ok(clothing.some((line) => line.japanese === "白いティーシャツを2枚ください。"));
  assert.ok(clothing.some((line) => line.japanese === "エムサイズはありますか。"));
  assert.ok(clothing.some((line) => line.japanese === "サイズはエムでお願いします。"));
  assert.ok(clothing.some((line) => line.japanese === "カードで払えますか。"));
  const apple = content.buildShoppingScript({ item: "apple", quantity: "2", colour: "white", size: "m", payment: "cash" });
  assert.ok(!apple.some((line) => /白い|サイズ/u.test(line.japanese)));
  assert.ok(apple.some((line) => line.japanese === "りんごをふたつください。"));
});

test("every fixed phrase, quiz and generated shop line has complete furigana coverage", () => {
  const texts = ["買い物", ...content.shoppingPhrases.map((item) => item.japanese), ...content.shoppingQuestions.flatMap((item) => [...item.options, item.explanation]), ...content.priceExamples.map((price) => `${price}円`)];
  for (const product of content.shopProducts) for (let count = 1; count <= 5; count++) for (const colour of content.shopColours) for (const size of content.shopSizes) {
    texts.push(...content.buildShoppingScript({ item: product.id, quantity: String(count), colour: colour.id, size: size.id, payment: "card" }).map((line) => line.japanese));
  }
  for (const text of texts) {
    assert.doesNotMatch(readings.annotateJapaneseText(text).replace(/[ぁ-んー]+（[^）]+）/gu, ""), /[一-鿿々]/u, text);
    const rendered = renderToStaticMarkup(React.createElement(japaneseText.JapaneseText, { text }));
    assert.equal(rendered.replace(/<rt>.*?<\/rt>/gu, "").replace(/<[^>]+>/gu, ""), text);
  }
  assert.equal(readings.annotateJapaneseText("600円、1冊、2枚"), "ろっぴゃくえん（600円）、いっさつ（1冊）、にまい（2枚）");
});

test("price listening validates only the correct answer for each deterministic question", () => {
  for (const [index, challenge] of content.priceChallenges.entries()) {
    assert.equal(challenge.options.filter((price) => price === challenge.price).length, 1);
    for (const choice of challenge.options) assert.equal(content.checkPriceAnswer(index, choice), choice === challenge.price);
  }
  assert.equal(content.checkPriceAnswer(-1, 300), false);
  assert.equal(content.checkPriceAnswer(99, 300), false);
  assert.equal(content.checkPriceAnswer(0, 123), false);
});

test("shopping SSR shows five learning sections, accessible audio and no revealed listening answer", () => {
  const markup = renderToStaticMarkup(React.createElement(practice.ShoppingPractice, { profile: { ...content.emptyShopping }, onProfileChange: () => {} }));
  for (const id of ["shopping-phrases", "shopping-numbers", "shopping-builder", "shopping-dialogue", "shopping-listening", "shopping-check"]) assert.ok(markup.includes(`id="${id}"`));
  assert.ok((markup.match(/data-japanese-audio="true"/gu) ?? []).length >= 33);
  assert.match(markup, /<ruby>買<rt>か<\/rt><\/ruby>い<ruby>物<rt>もの<\/rt><\/ruby>/u);
  assert.match(markup, /কোনো বাস্তব purchase হচ্ছে না/u);
  const listening = markup.slice(markup.indexOf('id="shopping-listening"'), markup.indexOf('id="shopping-check"'));
  assert.match(listening, /Price listening question 1 audio/u);
  assert.match(listening, /¥3000/u);
  assert.doesNotMatch(listening, /さんびゃくえん|sanbyaku|সঠিক!/u);
  assert.match(markup, /একটি পণ্য বেছে conversation শুনুন/u);
});

test("configured shop SSR includes matching quantity, colour, size and total", () => {
  const markup = renderToStaticMarkup(React.createElement(practice.ShoppingPractice, { profile: { item: "shirt", quantity: "2", colour: "white", size: "m", payment: "card" }, onProfileChange: () => {} }));
  assert.match(markup, /<ruby>3600円<rt>さんぜんろっぴゃくえん<\/rt><\/ruby>/u);
  assert.match(markup, /<ruby>2枚<rt>にまい<\/rt><\/ruby>/u);
  assert.match(markup, /エムサイズ/u);
  assert.match(markup, /YOU · CUSTOMER/u);
  assert.match(markup, /SHOP ASSISTANT/u);
});

// Exercise the component's event handlers with an injected state store, not a browser substitute.
function elements(tree) {
  if (Array.isArray(tree)) return tree.flatMap(elements);
  if (!React.isValidElement(tree)) return [];
  return [tree, ...elements(tree.props.children)];
}
test("shop handlers reset stale variants when products change and retain current choices", async () => {
  const component = await loadSource("./shopping-practice.tsx", { ...overrides, react: { ...React, useState: (initial) => [initial, () => {}] } });
  let profile = { ...content.emptyShopping };
  const render = () => elements(component.ShoppingPractice({ profile, onProfileChange: (value) => { profile = value; } }));
  let nodes = render();
  const productButtons = nodes.filter((node) => node.type === "button" && node.props["aria-pressed"] !== undefined);
  productButtons[2].props.onClick();
  assert.equal(profile.item, "shirt");
  nodes = render();
  const selects = nodes.filter((node) => node.type === "select");
  for (const [index, value] of [[0, "2"], [1, "white"], [2, "m"], [3, "card"]]) {
    render().filter((node) => node.type === "select")[index].props.onChange({ target: { value } });
  }
  assert.equal(selects[1].props.disabled, false);
  assert.equal(content.shoppingSelection(profile).total, 3600);
  const apple = render().filter((node) => node.type === "button" && node.props["aria-pressed"] !== undefined)[0];
  apple.props.onClick();
  assert.deepEqual(profile, { ...content.emptyShopping, item: "apple" });
  assert.equal(render().filter((node) => node.type === "select")[1].props.disabled, true);
});
