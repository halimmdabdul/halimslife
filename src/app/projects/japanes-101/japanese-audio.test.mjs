import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import ts from "typescript";

const source = await readFile(new URL("./japanese-audio.ts", import.meta.url), "utf8");
const output = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } }).outputText;
const { createJapaneseAudio, speechTextIsComplete } = await import(`data:text/javascript;base64,${Buffer.from(output).toString("base64")}`);
const japanese = { lang: "ja-JP", localService: true, default: false };
const english = { lang: "en-US", localService: true, default: true };

function fixture(voices = [english, japanese], waitMs = 0) {
  const handlers = new Map();
  const engine = {
    voices, spoken: [], canceled: 0,
    getVoices() { return this.voices; },
    speak(utterance) { this.spoken.push(utterance); },
    cancel() { this.canceled += 1; },
    resume() {},
    addEventListener(event, listener) { handlers.set(event, listener); },
    removeEventListener(event, listener) { if (handlers.get(event) === listener) handlers.delete(event); },
  };
  const controller = createJapaneseAudio(engine, (text) => ({ text }), waitMs);
  return { engine, controller, handlers };
}

test("normal and slow playback use the Japanese voice, not the default English voice", () => {
  const { engine, controller } = fixture();
  assert.equal(controller.getSnapshot().availability, "ready");
  assert.equal(controller.play("phrase", "日本語を勉強しています。", 1), true);
  assert.equal(engine.spoken[0].voice, japanese);
  assert.equal(engine.spoken[0].lang, "ja-JP");
  assert.equal(engine.spoken[0].rate, 1);
  assert.equal(engine.spoken[0].text, "日本語を勉強しています。");
  controller.play("phrase", "日本語を勉強しています。", .7);
  assert.equal(engine.spoken[1].rate, .7);
  assert.equal(controller.getSnapshot().rate, .7);
  controller.dispose();
});

test("replacement cancels old audio and ignores delayed completion events", () => {
  const { engine, controller } = fixture();
  controller.play("one", "はじめまして。", 1);
  const oldEnd = engine.spoken[0].onend;
  controller.play("two", "よろしくお願いします。", 1);
  oldEnd();
  assert.equal(controller.getSnapshot().activeId, "two");
  controller.stop("one");
  assert.equal(controller.getSnapshot().activeId, "two");
  controller.stop("two");
  assert.equal(controller.getSnapshot().activeId, null);
  assert.ok(engine.canceled >= 2);
  controller.dispose();
});

test("completion and engine errors release the active player", () => {
  const { engine, controller } = fixture();
  controller.play("one", "はじめまして。", 1);
  engine.spoken[0].onend();
  assert.equal(controller.getSnapshot().activeId, null);
  controller.play("two", "はじめまして。", 1);
  engine.spoken[1].onerror({ error: "not-allowed" });
  assert.equal(controller.getSnapshot().activeId, null);
  assert.ok(controller.getSnapshot().error);
  controller.dispose();
});

test("missing voices never fall back to English; late Japanese voices enable playback", async () => {
  const { engine, controller, handlers } = fixture([english]);
  assert.equal(controller.getSnapshot().availability, "checking");
  await new Promise((resolve) => setTimeout(resolve, 10));
  assert.equal(controller.getSnapshot().availability, "missing-voice");
  assert.equal(controller.play("phrase", "はじめまして。", 1), false);
  assert.equal(engine.spoken.length, 0);
  engine.voices = [english, japanese];
  handlers.get("voiceschanged")();
  assert.equal(controller.getSnapshot().availability, "ready");
  assert.equal(controller.play("phrase", "はじめまして。", 1), true);
  controller.dispose();
});

test("unsupported browsers and incomplete scripts fail safely", () => {
  const unsupported = createJapaneseAudio(null, null);
  assert.equal(unsupported.getSnapshot().availability, "unsupported");
  assert.equal(unsupported.play("phrase", "はじめまして。", 1), false);
  unsupported.dispose();
  const { controller, engine } = fixture();
  for (const text of ["", "  ", "［名前］と申します。", "[name]です。", "この分野で［数字］年の経験があります。"]) {
    assert.equal(speechTextIsComplete(text), false);
    assert.equal(controller.play("phrase", text, 1), false);
  }
  assert.equal(engine.spoken.length, 0);
  controller.dispose();
});

test("disposal cancels owned playback and removes the voices listener", () => {
  const { controller, engine, handlers } = fixture();
  controller.play("phrase", "はじめまして。", 1);
  const end = engine.spoken[0].onend;
  controller.dispose();
  const disposedSnapshot = controller.getSnapshot();
  end();
  assert.equal(controller.getSnapshot(), disposedSnapshot);
  assert.equal(handlers.size, 0);
  assert.equal(controller.play("phrase", "はじめまして。", 1), false);
  assert.ok(engine.canceled > 0);
});

test("voice engine failures stop playback and show an unavailable message", () => {
  const { controller, engine } = fixture();
  controller.play("phrase", "はじめまして。", 1);
  engine.getVoices = () => { throw new Error("Voice engine unavailable"); };
  controller.refreshVoices();
  assert.equal(controller.getSnapshot().activeId, null);
  assert.equal(controller.getSnapshot().availability, "unsupported");
  assert.ok(controller.getSnapshot().error);
  controller.dispose();
});
