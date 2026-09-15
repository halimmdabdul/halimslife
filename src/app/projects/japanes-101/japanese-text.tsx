import { Fragment } from "react";
import { renderFuriganaText } from "@/components/furigana";
import { japaneseSegments } from "./japanese-readings";

export function JapaneseText({ text }: { text: string }) {
  return <>{japaneseSegments(text).map((segment, index) => segment.reading ? <Fragment key={index}>{renderFuriganaText(`${segment.reading}（${segment.text}）`)}</Fragment> : segment.text)}</>;
}
