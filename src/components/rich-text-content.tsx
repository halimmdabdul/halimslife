import type { ReactNode } from "react";

function inlineMarkdown(text: string): ReactNode[] {
  const pattern = /(\*\*[^*]+\*\*|~~[^~]+~~|_[^_]+_|`[^`]+`|\[[^\]]+\]\(https?:\/\/[^)\s]+\))/g;
  return text.split(pattern).filter(Boolean).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    }
    if (part.startsWith("~~") && part.endsWith("~~")) {
      return <s key={index}>{part.slice(2, -2)}</s>;
    }
    if (part.startsWith("_") && part.endsWith("_")) {
      return <em key={index}>{part.slice(1, -1)}</em>;
    }
    if (part.startsWith("`") && part.endsWith("`")) {
      return <code key={index}>{part.slice(1, -1)}</code>;
    }
    const link = part.match(/^\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)$/);
    if (link) {
      return <a href={link[2]} key={index} target="_blank" rel="noreferrer">{link[1]}</a>;
    }
    return part;
  });
}

export function markdownToPlainText(value: string) {
  return value
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/!\[([^\]]*)\]\(https?:\/\/[^)\s]+\)/g, "$1")
    .replace(/\[([^\]]+)\]\(https?:\/\/[^)\s]+\)/g, "$1")
    .replace(/^(#{1,3}|>|[-*]|\d+\.)\s+/gm, "")
    .replace(/^-{3,}$/gm, " ")
    .replace(/\*\*|~~|_|`/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

export function RichTextContent({ content }: { content: string }) {
  const lines = content.replace(/\r\n/g, "\n").split("\n");
  const blocks: ReactNode[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index].trim();
    if (!line) { index += 1; continue; }

    const heading = line.match(/^(#{1,3})\s+(.+)$/);
    if (heading) {
      const children = inlineMarkdown(heading[2]);
      const level = heading[1].length;
      blocks.push(
        level === 1
          ? <h2 key={index}>{children}</h2>
          : level === 2
            ? <h3 key={index}>{children}</h3>
            : <h4 key={index}>{children}</h4>,
      );
      index += 1;
      continue;
    }

    if (/^```/.test(line)) {
      const codeLines: string[] = [];
      index += 1;
      while (index < lines.length && !/^```/.test(lines[index].trim())) {
        codeLines.push(lines[index]);
        index += 1;
      }
      index += 1; // skip the closing ```
      blocks.push(<pre key={`code-${index}`}><code>{codeLines.join("\n")}</code></pre>);
      continue;
    }

    if (/^(-{3,}|\*{3,})$/.test(line)) {
      blocks.push(<hr key={index} />);
      index += 1;
      continue;
    }

    const image = line.match(/^!\[([^\]]*)\]\((https?:\/\/[^)\s]+)\)$/);
    if (image) {
      blocks.push(<img key={index} src={image[2]} alt={image[1]} loading="lazy" />);
      index += 1;
      continue;
    }

    if (/^[-*]\s+/.test(line)) {
      const items: ReactNode[] = [];
      while (index < lines.length && /^[-*]\s+/.test(lines[index].trim())) {
        items.push(<li key={index}>{inlineMarkdown(lines[index].trim().replace(/^[-*]\s+/, ""))}</li>);
        index += 1;
      }
      blocks.push(<ul key={`ul-${index}`}>{items}</ul>);
      continue;
    }

    if (/^\d+\.\s+/.test(line)) {
      const items: ReactNode[] = [];
      while (index < lines.length && /^\d+\.\s+/.test(lines[index].trim())) {
        items.push(<li key={index}>{inlineMarkdown(lines[index].trim().replace(/^\d+\.\s+/, ""))}</li>);
        index += 1;
      }
      blocks.push(<ol key={`ol-${index}`}>{items}</ol>);
      continue;
    }

    if (line.startsWith("> ")) {
      blocks.push(<blockquote key={index}>{inlineMarkdown(line.slice(2))}</blockquote>);
      index += 1;
      continue;
    }

    const paragraph: string[] = [line];
    index += 1;
    while (
      index < lines.length &&
      lines[index].trim() &&
      !/^(#{1,3}|>|[-*]|\d+\.)\s+/.test(lines[index].trim()) &&
      !/^```/.test(lines[index].trim()) &&
      !/^(-{3,}|\*{3,})$/.test(lines[index].trim()) &&
      !/^!\[([^\]]*)\]\((https?:\/\/[^)\s]+)\)$/.test(lines[index].trim())
    ) {
      paragraph.push(lines[index].trim());
      index += 1;
    }
    blocks.push(<p key={`p-${index}`}>{inlineMarkdown(paragraph.join(" "))}</p>);
  }

  return <div className="rich-text-content">{blocks}</div>;
}
