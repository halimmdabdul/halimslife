"use client";

import { useRef, useState } from "react";
import { RichTextContent } from "@/components/rich-text-content";

export function RichTextEditor({
  name,
  label,
  defaultValue = "",
  placeholder,
  rows = 6,
}: {
  name: string;
  label: string;
  defaultValue?: string;
  placeholder?: string;
  rows?: number;
}) {
  const [value, setValue] = useState(defaultValue);
  const [preview, setPreview] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  function replaceSelection(before: string, after = "", fallback = "text") {
    const textarea = textareaRef.current;
    if (!textarea) return;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selected = value.slice(start, end) || fallback;
    const nextValue = `${value.slice(0, start)}${before}${selected}${after}${value.slice(end)}`;
    setValue(nextValue);
    requestAnimationFrame(() => {
      textarea.focus();
      textarea.setSelectionRange(start + before.length, start + before.length + selected.length);
    });
  }

  function prefixSelection(prefix: string) {
    const textarea = textareaRef.current;
    if (!textarea) return;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const lineStart = value.lastIndexOf("\n", start - 1) + 1;
    const selection = value.slice(lineStart, end) || "Text";
    const next = selection.split("\n").map((line) => `${prefix}${line}`).join("\n");
    setValue(`${value.slice(0, lineStart)}${next}${value.slice(end)}`);
    requestAnimationFrame(() => textarea.focus());
  }

  function insertBlock(text: string) {
    const textarea = textareaRef.current;
    if (!textarea) return;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const before = value.slice(0, start);
    const after = value.slice(end);
    const leadingBreak = before.length === 0 || before.endsWith("\n\n") ? "" : before.endsWith("\n") ? "\n" : "\n\n";
    const trailingBreak = after.length === 0 || after.startsWith("\n\n") ? "" : after.startsWith("\n") ? "\n" : "\n\n";
    const block = `${leadingBreak}${text}${trailingBreak}`;
    setValue(`${before}${block}${after}`);
    requestAnimationFrame(() => {
      textarea.focus();
      const cursorPosition = start + leadingBreak.length + text.length;
      textarea.setSelectionRange(cursorPosition, cursorPosition);
    });
  }

  const toolbar = [
    { label: "Heading", title: "Heading", action: "heading" },
    { label: "Subheading", title: "Subheading", action: "subheading" },
    { label: "B", title: "Bold", action: "bold" },
    { label: "I", title: "Italic", action: "italic" },
    { label: "S", title: "Strikethrough", action: "strikethrough" },
    { label: "Code", title: "Inline code", action: "code" },
    { label: "{ }", title: "Code block", action: "codeblock" },
    { label: "• List", title: "Bullet list", action: "bullets" },
    { label: "1. List", title: "Numbered list", action: "numbers" },
    { label: "❝", title: "Quote", action: "quote" },
    { label: "Link", title: "Link", action: "link" },
    { label: "Image", title: "Image", action: "image" },
    { label: "―", title: "Horizontal rule", action: "hr" },
  ] as const;

  function applyTool(action: (typeof toolbar)[number]["action"]) {
    if (action === "heading") prefixSelection("# ");
    if (action === "subheading") prefixSelection("## ");
    if (action === "bold") replaceSelection("**", "**");
    if (action === "italic") replaceSelection("_", "_");
    if (action === "strikethrough") replaceSelection("~~", "~~");
    if (action === "code") replaceSelection("`", "`");
    if (action === "codeblock") insertBlock("```\ncode here\n```");
    if (action === "bullets") prefixSelection("- ");
    if (action === "numbers") prefixSelection("1. ");
    if (action === "quote") prefixSelection("> ");
    if (action === "link") replaceSelection("[", "](https://example.com)", "link text");
    if (action === "image") insertBlock("![alt text](https://example.com/image.jpg)");
    if (action === "hr") insertBlock("---");
  }

  return (
    <div className="admin-rich-editor admin-form-wide">
      <span>{label}</span>
      <div className="rich-editor-shell">
        <div className="rich-editor-toolbar" aria-label={`${label} formatting tools`}>
          {toolbar.map((tool) => (
            <button key={tool.title} type="button" title={tool.title} onClick={() => applyTool(tool.action)}>{tool.label}</button>
          ))}
          <button className={preview ? "active" : ""} type="button" onClick={() => setPreview((shown) => !shown)}>{preview ? "Edit" : "Preview"}</button>
        </div>
        {preview ? (
          <div className="rich-editor-preview"><RichTextContent content={value || "Nothing to preview yet."} /></div>
        ) : (
          <textarea ref={textareaRef} aria-label={label} name={name} rows={rows} value={value} placeholder={placeholder} onChange={(event) => setValue(event.target.value)} />
        )}
        {preview ? <input type="hidden" name={name} value={value} /> : null}
      </div>
    </div>
  );
}
