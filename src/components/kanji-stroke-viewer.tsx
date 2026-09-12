"use client";

import { useEffect, useState } from "react";

import styles from "./kanji-stroke-viewer.module.css";

type StrokeDiagram = {
  paths: string[];
  numbers: Array<{ value: string; x: number; y: number }>;
};

function kanjiFileName(character: string) {
  return `${character.codePointAt(0)?.toString(16).padStart(5, "0")}.svg`;
}

function parseNumberPosition(transform: string | null) {
  const values = transform?.match(/-?\d+(?:\.\d+)?/g)?.map(Number) ?? [];
  return values.length >= 6 ? { x: values[4], y: values[5] } : null;
}

function parseKanjiSvg(source: string): StrokeDiagram {
  const cleanSource = source.replace(/<!DOCTYPE[\s\S]*?\]>/i, "");
  const document = new DOMParser().parseFromString(cleanSource, "image/svg+xml");
  if (document.querySelector("parsererror")) throw new Error("Stroke diagram parse failed");

  const paths = Array.from(document.querySelectorAll('[id^="kvg:StrokePaths_"] path'))
    .map((path) => path.getAttribute("d"))
    .filter((path): path is string => Boolean(path));
  const numbers = Array.from(document.querySelectorAll('[id^="kvg:StrokeNumbers_"] text'))
    .map((label) => {
      const position = parseNumberPosition(label.getAttribute("transform"));
      return position ? { value: label.textContent?.trim() ?? "", ...position } : null;
    })
    .filter((label): label is { value: string; x: number; y: number } => Boolean(label));

  if (!paths.length) throw new Error("No stroke paths found");
  return { paths, numbers };
}

export function KanjiStrokeViewer({ character }: { character: string }) {
  const [diagram, setDiagram] = useState<StrokeDiagram | null>(null);
  const [error, setError] = useState(false);
  const [replay, setReplay] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    setDiagram(null);
    setError(false);
    fetch(`/kanji-strokes/${kanjiFileName(character)}`, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error("Stroke diagram not found");
        return response.text();
      })
      .then((source) => setDiagram(parseKanjiSvg(source)))
      .catch((reason: unknown) => {
        if (!(reason instanceof DOMException && reason.name === "AbortError")) setError(true);
      });
    return () => controller.abort();
  }, [character]);

  return (
    <section className={styles.viewer} aria-label={`${character} stroke order visualization`}>
      <header>
        <span><b>{character}</b><span><strong>লেখার stroke order</strong><small>{diagram ? `${diagram.paths.length}টি stroke · নম্বর অনুযায়ী লিখুন` : "Japanese writing guide"}</small></span></span>
        <button type="button" onClick={() => setReplay((value) => value + 1)} disabled={!diagram} aria-label={`${character} stroke animation আবার চালান`}>
          ↻ <span>Replay</span>
        </button>
      </header>

      {!diagram && !error ? <p className={styles.status}>Stroke diagram তৈরি হচ্ছে…</p> : null}
      {error ? <p className={styles.status}>এই stroke diagram এখন দেখানো যাচ্ছে না।</p> : null}
      {diagram ? (
        <div className={styles.board}>
          <svg key={`${character}-${replay}`} viewBox="0 0 109 109" role="img" aria-label={`${character}-এর numbered stroke animation`}>
            <g className={styles.guides} aria-hidden="true">
              <path d="M54.5 4V105M4 54.5H105" />
              <path d="M4 4L105 105M105 4L4 105" />
              <rect x="4" y="4" width="101" height="101" rx="4" />
            </g>
            <g className={styles.trace} aria-hidden="true">
              {diagram.paths.map((path, index) => <path key={`trace-${index}`} d={path} />)}
            </g>
            <g className={styles.animatedStrokes}>
              {diagram.paths.map((path, index) => (
                <path
                  key={`stroke-${index}`}
                  d={path}
                  pathLength="1"
                  style={{ "--stroke-index": index } as React.CSSProperties}
                />
              ))}
            </g>
            <g className={styles.strokeNumbers} aria-hidden="true">
              {diagram.numbers.map((number, index) => <text key={`${number.value}-${index}`} x={number.x} y={number.y}>{number.value}</text>)}
            </g>
          </svg>
          <ol aria-label="Stroke sequence">
            {diagram.paths.map((_, index) => <li key={index}>{index + 1}</li>)}
          </ol>
        </div>
      ) : null}

      <footer>
        Japanese stroke data: <a href="https://kanjivg.tagaini.net/" target="_blank" rel="noreferrer">KanjiVG</a> · CC BY-SA 3.0
      </footer>
    </section>
  );
}
