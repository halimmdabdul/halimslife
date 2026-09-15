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
const content = await loadSource("./directions-content.ts", { "./japanese-numbers": numbers });
const readings = await loadSource("./japanese-readings.ts", { "./japanese-numbers": numbers });
const furigana = await loadSource("../../../components/furigana.tsx");
const japaneseText = await loadSource("./japanese-text.tsx", { "@/components/furigana": furigana, "./japanese-readings": readings });
const audio = await loadSource("./japanese-audio.ts");
const audioPlayer = await loadSource("./japanese-audio-player.tsx", { "./japanese-audio": audio });
const overrides = { "./directions-content": content, "./japanese-text": japaneseText, "./japanese-audio-player": audioPlayer };
const practice = await loadSource("./directions-practice.tsx", overrides);

test("every route hint follows roads and reaches its exact map destination", () => {
  for (const place of content.mapPlaces) {
    let position = { ...content.mapStart };
    assert.equal(content.hasArrived(position, place.id), false);
    for (const command of place.commands) {
      const result = content.moveOnMap(position, command);
      assert.equal(result.blocked, false, `${place.id}: ${command}`);
      position = result.position;
      assert.equal(content.isMapRoad(position.x, position.y), true);
    }
    assert.equal(content.hasArrived(position, place.id), true);
    assert.equal(position.x, place.x);
    assert.equal(position.y, place.y);
  }
  assert.deepEqual(content.mapStart, { x: 2, y: 4, heading: 0 });
});

test("turns change heading only; straight follows the traveller's current heading", () => {
  const east = content.moveOnMap({ x: 2, y: 2, heading: 0 }, "right").position;
  assert.deepEqual(east, { x: 2, y: 2, heading: 1 });
  assert.deepEqual(content.moveOnMap(east, "straight").position, { x: 3, y: 2, heading: 1 });
  const west = content.moveOnMap({ x: 2, y: 2, heading: 0 }, "left").position;
  assert.deepEqual(content.moveOnMap(west, "straight").position, { x: 1, y: 2, heading: 3 });
  let position = { ...content.mapStart };
  for (let count = 0; count < 4; count++) position = content.moveOnMap(position, "left").position;
  assert.deepEqual(position, content.mapStart);
});

test("map movement is bounded, blocks non-roads and rejects invalid positions", () => {
  const position = { ...content.mapStart, heading: 3 };
  assert.deepEqual(content.moveOnMap(position, "straight"), { position, blocked: true });
  assert.equal(content.moveOnMap({ x: 2, y: 0, heading: 0 }, "straight").blocked, true);
  assert.equal(content.moveOnMap({ x: 0, y: 0, heading: 0 }, "straight").blocked, true);
  assert.equal(content.moveOnMap({ ...content.mapStart, heading: 9 }, "straight").blocked, true);
  for (const [x, y] of [[-1, 2], [5, 2], [2, 5], [1.5, 2]]) assert.equal(content.isMapRoad(x, y), false);
  assert.equal(content.hasArrived(content.mapStart, "unknown"), false);
});

test("travel builder waits for both choices and keeps all fares/times clearly fictional", () => {
  for (const profile of [content.emptyTravel, { destination: "airport", mode: "" }, { destination: "", mode: "bus" }, { destination: "unknown", mode: "bus" }]) assert.deepEqual(content.buildTravelScript(profile), []);
  for (const destination of content.travelDestinations) for (const mode of content.travelModes) {
    const profile = { destination: destination.id, mode: mode.id };
    const selection = content.travelSelection(profile);
    const script = content.buildTravelScript(profile);
    assert.equal(selection.fare, mode.id === "bus" ? destination.busFare : destination.trainFare);
    assert.equal(selection.minutes, mode.id === "bus" ? destination.busMinutes : destination.trainMinutes);
    assert.equal(script[3].japanese, `${selection.fare}円です。`);
    assert.equal(script[5].japanese, `${selection.minutes}分ぐらいかかります。`);
    assert.match(script[3].meaning, /Sample/u);
    assert.ok(script.every((line) => audio.speechTextIsComplete(line.japanese)));
  }
});

test("all prepared directions and travel lines have correct reading coverage", () => {
  const texts = ["道案内と交通", ...content.directionsPhrases.map((item) => item.japanese), ...content.mapPlaces.map((item) => item.japanese), ...content.compass.map((item) => item.japanese), ...content.directionListening.map((item) => item.japanese), ...content.directionQuestions.flatMap((item) => [...item.options, item.explanation]), ...content.travelDestinations.flatMap((destination) => content.travelModes.flatMap((mode) => content.buildTravelScript({ destination: destination.id, mode: mode.id }).map((line) => line.japanese)))];
  for (const text of texts) {
    assert.doesNotMatch(readings.annotateJapaneseText(text).replace(/[ぁ-んー]+（[^）]+）/gu, ""), /[一-鿿々]/u, text);
    const markup = renderToStaticMarkup(React.createElement(japaneseText.JapaneseText, { text }));
    assert.equal(markup.replace(/<rt>.*?<\/rt>/gu, "").replace(/<[^>]+>/gu, ""), text);
  }
  assert.equal(readings.annotateJapaneseText("行ってください。降ります。"), "い（行）ってください。お（降）ります。");
  assert.equal(readings.annotateJapaneseText("5分、10分、15分、20分、30分"), "ごふん（5分）、じゅっぷん（10分）、じゅうごふん（15分）、にじゅっぷん（20分）、さんじゅっぷん（30分）");
});

test("directions SSR exposes five sections, the accessible map and hidden listening answers", () => {
  const markup = renderToStaticMarkup(React.createElement(practice.DirectionsPractice, { profile: content.emptyTravel, onProfileChange: () => {} }));
  for (const id of ["directions-phrases", "directions-map", "directions-travel", "travel-dialogue", "directions-listening", "directions-check"]) assert.ok(markup.includes(`id="${id}"`));
  assert.match(markup, /role="img" aria-label="Fictional 5 by 5 map/u);
  assert.match(markup, /column 3, row 5/u);
  assert.match(markup, /fictional sample/u);
  assert.ok((markup.match(/data-japanese-audio="true"/gu) ?? []).length >= 11);
  const listening = markup.slice(markup.indexOf('id="directions-listening"'), markup.indexOf('id="directions-check"'));
  assert.match(listening, /Directions listening question 1 audio/u);
  assert.doesNotMatch(listening, /Hidari ni|<ruby>|✓/u);
  const configured = renderToStaticMarkup(React.createElement(practice.DirectionsPractice, { profile: { destination: "airport", mode: "bus" }, onProfileChange: () => {} }));
  assert.match(configured, /<ruby>600円<rt>ろっぴゃくえん<\/rt><\/ruby>/u);
  assert.match(configured, /<ruby>30分<rt>さんじゅっぷん<\/rt><\/ruby>/u);
});

function elements(tree) {
  if (Array.isArray(tree)) return tree.flatMap(elements);
  return React.isValidElement(tree) ? [tree, ...elements(tree.props.children)] : [];
}
function stateStore() {
  const state = [];
  let cursor = 0;
  return { state, resetCursor: () => { cursor = 0; }, react: { ...React, useState(initial) {
    const key = cursor++;
    if (!(key in state)) state[key] = initial;
    return [state[key], (value) => { state[key] = typeof value === "function" ? value(state[key]) : value; }];
  } } };
}

test("map handlers reach a destination, disable movement there and reset on new target", async () => {
  const store = stateStore();
  const component = await loadSource("./directions-practice.tsx", { ...overrides, react: store.react });
  const tree = component.DirectionsPractice({ profile: content.emptyTravel, onProfileChange: () => {} });
  const map = elements(tree).find((node) => typeof node.type === "function" && node.type.name === "PracticeMap").type;
  store.state.length = 0;
  const render = () => { store.resetCursor(); return elements(map()); };
  for (const command of content.mapPlaces[0].commands) {
    const controls = render().filter((node) => node.type === "button" && Array.isArray(node.props.children));
    controls[["left", "straight", "right"].indexOf(command)].props.onClick();
  }
  assert.equal(content.hasArrived(store.state[1], "station"), true);
  assert.ok(render().filter((node) => node.type === "button" && Array.isArray(node.props.children)).every((node) => node.props.disabled));
  render().find((node) => node.type === "select").props.onChange({ target: { value: "restaurant" } });
  assert.equal(store.state[0], "restaurant");
  assert.deepEqual(store.state[1], content.mapStart);
  assert.equal(store.state[2], false);
  render().find((node) => node.type === "button" && node.props.children === "Map reset").props.onClick();
  assert.deepEqual(store.state[1], content.mapStart);
});

test("directions listening checks answers and clears selection for the next question", async () => {
  const store = stateStore();
  const component = await loadSource("./directions-practice.tsx", { ...overrides, react: store.react });
  const tree = component.DirectionsPractice({ profile: content.emptyTravel, onProfileChange: () => {} });
  const listening = elements(tree).find((node) => typeof node.type === "function" && node.type.name === "DirectionsListening").type;
  store.state.length = 0;
  const render = () => { store.resetCursor(); return elements(listening()); };
  const button = (text) => render().find((node) => node.type === "button" && node.props.children === text);
  assert.equal(button("Meaning যাচাই করুন").props.disabled, true);
  render().find((node) => node.type === "input").props.onChange();
  button("Meaning যাচাই করুন").props.onClick();
  assert.equal(store.state[3][0], true);
  button("পরের প্রশ্ন →").props.onClick();
  assert.equal(store.state[0], 1);
  assert.equal(store.state[1], null);
  button("Listening reset").props.onClick();
  assert.deepEqual(store.state, [0, null, false, {}]);
});
