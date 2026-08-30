import type { ReactNode } from "react";

// Matches "reading（kanji）" pairs used throughout the vocabulary-bank strings,
// e.g. "ほん（本） — বই" or "～ねん（～年） — ～বছর".
const FURIGANA_PATTERN = /([ぁ-んー～]+)（([^）]+)）/g;

// Only treat the parenthesised part as a kanji reading if it actually
// contains a kanji character. Some vocabulary entries use full-width
// parens for a plain-hiragana synonym (e.g. "あのひと（あのかた）"),
// which is not a reading and must never be turned into ruby text.
const CONTAINS_KANJI = /[一-鿿々〇〻]/;

/**
 * Scans a vocabulary-bank string such as "たべます（食べます） — খাই · tabemasu"
 * for "reading（kanji）" pairs and renders each pair as
 * <ruby>kanji<rt>reading</rt></ruby>, leaving everything else
 * (translation, romaji, separators) untouched.
 *
 * Only pairs where the parenthesised text contains at least one kanji
 * character are converted — this avoids mislabeling hiragana synonyms
 * that happen to share the same "reading（alt）" shape.
 */
export function renderFuriganaText(text: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;

  const pattern = new RegExp(FURIGANA_PATTERN);
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    const [full, reading, kanji] = match;

    if (match.index > lastIndex) {
      nodes.push(text.slice(lastIndex, match.index));
    }

    if (CONTAINS_KANJI.test(kanji)) {
      nodes.push(
        <ruby key={`furigana-${key++}`}>
          {kanji}
          <rt>{reading}</rt>
        </ruby>,
      );
    } else {
      nodes.push(full);
    }

    lastIndex = match.index + full.length;
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex));
  }

  return nodes;
}

/**
 * Renders a UnitKanji `example` field such as
 * "会社 · かいしゃ／社員 · しゃいん" as ruby-annotated words, keeping the
 * "／" separator (used between multiple example words) visible.
 * Each "word · reading" segment becomes <ruby>word<rt>reading</rt></ruby>.
 */
export function renderFuriganaExample(example: string): ReactNode[] {
  const parts = example.split("／");

  return parts.map((part, index) => {
    const [rawWord, rawReading] = part.split(" · ");
    const word = rawWord?.trim();
    const reading = rawReading?.trim();
    const isLast = index === parts.length - 1;

    return (
      <span key={`furigana-example-${index}`}>
        {word && reading ? (
          <ruby>
            {word}
            <rt>{reading}</rt>
          </ruby>
        ) : (
          part
        )}
        {isLast ? "" : "／"}
      </span>
    );
  });
}
