type ContactEmailInput = {
  name: string;
  email: string;
  topic: string;
  subject: string;
  message: string;
};

const topicLabels: Record<string, string> = {
  general: "General question",
  academy: "Academy / Course",
  engineering: "Engineering project",
  research: "Research",
  career: "Career guidance",
  collaboration: "Collaboration",
  "scholarship-support": "Scholarship Support",
};

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;",
  })[character] ?? character);
}

// Renders the same lightweight markdown dialect as components/rich-text-content.tsx,
// as a plain HTML string. Kept separate (not reusing the React component) because
// react-dom/server cannot be imported from a module Server Actions pull in.
function inlineMarkdownHtml(text: string) {
  const pattern = /(\*\*[^*]+\*\*|~~[^~]+~~|_[^_]+_|`[^`]+`|\[[^\]]+\]\(https?:\/\/[^)\s]+\))/g;
  return text.split(pattern).filter(Boolean).map((part) => {
    if (part.startsWith("**") && part.endsWith("**")) return `<strong>${escapeHtml(part.slice(2, -2))}</strong>`;
    if (part.startsWith("~~") && part.endsWith("~~")) return `<s>${escapeHtml(part.slice(2, -2))}</s>`;
    if (part.startsWith("_") && part.endsWith("_")) return `<em>${escapeHtml(part.slice(1, -1))}</em>`;
    if (part.startsWith("`") && part.endsWith("`")) return `<code style="padding:2px 5px;border-radius:4px;background:#eef1ef;color:#c8611f;">${escapeHtml(part.slice(1, -1))}</code>`;
    const link = part.match(/^\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)$/);
    if (link) return `<a href="${link[2]}" style="color:#087255;">${escapeHtml(link[1])}</a>`;
    return escapeHtml(part);
  }).join("");
}

function markdownToEmailHtml(content: string) {
  const lines = content.replace(/\r\n/g, "\n").split("\n");
  const blocks: string[] = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index].trim();
    if (!line) { index += 1; continue; }

    const heading = line.match(/^(#{1,3})\s+(.+)$/);
    if (heading) {
      const size = heading[1].length === 1 ? "21px" : heading[1].length === 2 ? "17px" : "15px";
      blocks.push(`<p style="margin:16px 0 8px;color:#082f54;font-weight:800;font-size:${size};">${inlineMarkdownHtml(heading[2])}</p>`);
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
      index += 1;
      blocks.push(`<pre style="margin:14px 0;padding:14px 16px;overflow-x:auto;border-radius:8px;background:#0b1e2c;color:#eef6f8;font-size:12px;line-height:1.6;"><code>${escapeHtml(codeLines.join("\n"))}</code></pre>`);
      continue;
    }

    if (/^(-{3,}|\*{3,})$/.test(line)) {
      blocks.push(`<hr style="margin:20px 0;border:0;border-top:1px solid #dce7e2;" />`);
      index += 1;
      continue;
    }

    const image = line.match(/^!\[([^\]]*)\]\((https?:\/\/[^)\s]+)\)$/);
    if (image) {
      blocks.push(`<img src="${image[2]}" alt="${escapeHtml(image[1])}" style="display:block;width:100%;height:auto;margin:14px 0;border-radius:8px;" />`);
      index += 1;
      continue;
    }

    if (/^[-*]\s+/.test(line)) {
      const items: string[] = [];
      while (index < lines.length && /^[-*]\s+/.test(lines[index].trim())) {
        items.push(`<li style="margin:4px 0;">${inlineMarkdownHtml(lines[index].trim().replace(/^[-*]\s+/, ""))}</li>`);
        index += 1;
      }
      blocks.push(`<ul style="margin:10px 0;padding-left:20px;">${items.join("")}</ul>`);
      continue;
    }

    if (/^\d+\.\s+/.test(line)) {
      const items: string[] = [];
      while (index < lines.length && /^\d+\.\s+/.test(lines[index].trim())) {
        items.push(`<li style="margin:4px 0;">${inlineMarkdownHtml(lines[index].trim().replace(/^\d+\.\s+/, ""))}</li>`);
        index += 1;
      }
      blocks.push(`<ol style="margin:10px 0;padding-left:20px;">${items.join("")}</ol>`);
      continue;
    }

    if (line.startsWith("> ")) {
      blocks.push(`<div style="margin:14px 0;padding:10px 14px;border-left:3px solid #087255;background:#f4f8f5;">${inlineMarkdownHtml(line.slice(2))}</div>`);
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
    blocks.push(`<p style="margin:0 0 12px;">${inlineMarkdownHtml(paragraph.join(" "))}</p>`);
  }

  return blocks.join("");
}

function contactEmailHtml(input: ContactEmailInput) {
  const name = escapeHtml(input.name);
  const email = escapeHtml(input.email);
  const subject = escapeHtml(input.subject);
  const topic = escapeHtml(topicLabels[input.topic] ?? input.topic);
  const message = escapeHtml(input.message)
    .replace(/\r?\n/g, "<br />")
    .replace(/(https?:\/\/[^\s<]+)/g, (url) => `<a href="${url}" style="color:#087255;">${url}</a>`);

  return `<!doctype html>
<html lang="en">
  <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"></head>
  <body style="margin:0;background:#f5f1e8;color:#102a43;font-family:Arial,'Noto Sans Bengali',sans-serif;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;">New ${topic} message from ${name}</div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f5f1e8;padding:32px 14px;">
      <tr><td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;overflow:hidden;border:1px solid #d9e1dc;border-radius:18px;background:#fffdf8;box-shadow:0 18px 45px rgba(16,42,67,.08);">
          <tr><td style="padding:28px 32px;background:#082f54;color:#fff;">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0"><tr>
              <td><span style="display:inline-block;width:42px;height:42px;border:1px solid #4d718b;border-radius:10px;color:#fff;font:700 28px/42px Georgia,serif;text-align:center;">H</span></td>
              <td style="padding-left:12px;"><strong style="display:block;font:700 27px Georgia,serif;">Halim<span style="color:#f28c28;">.</span></strong><span style="color:#a9c1cf;font-size:12px;">Engineer · Researcher · Lifelong learner</span></td>
              <td align="right"><span style="display:inline-block;padding:7px 11px;border:1px solid #39705e;border-radius:999px;color:#8fe4c5;font-size:11px;">New message</span></td>
            </tr></table>
          </td></tr>
          <tr><td style="padding:32px;">
            <span style="color:#087255;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;">${topic}</span>
            <h1 style="margin:10px 0 22px;color:#082f54;font:700 30px/1.25 Georgia,'Noto Serif Bengali',serif;">${subject}</h1>
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom:24px;border:1px solid #dce7e2;border-radius:10px;background:#f4f8f5;">
              <tr><td style="padding:16px 18px;border-bottom:1px solid #dce7e2;"><span style="display:block;color:#637785;font-size:10px;text-transform:uppercase;letter-spacing:.08em;">From</span><strong style="display:block;margin-top:5px;color:#102a43;font-size:15px;">${name}</strong></td></tr>
              <tr><td style="padding:16px 18px;"><span style="display:block;color:#637785;font-size:10px;text-transform:uppercase;letter-spacing:.08em;">Email</span><a href="mailto:${email}" style="display:block;margin-top:5px;color:#087255;font-size:14px;text-decoration:none;">${email}</a></td></tr>
            </table>
            <div style="padding:22px;border-left:4px solid #087255;border-radius:8px;background:#fffaf1;color:#294353;font-size:15px;line-height:1.75;">${message}</div>
            <p style="margin:26px 0 0;"><a href="mailto:${email}?subject=${encodeURIComponent(`Re: ${input.subject}`)}" style="display:inline-block;padding:13px 20px;border-radius:8px;background:#087255;color:#fff;font-size:14px;font-weight:700;text-decoration:none;">Reply to ${name} →</a></p>
          </td></tr>
          <tr><td style="padding:18px 32px;border-top:1px solid #e1e7e3;color:#738590;font-size:11px;line-height:1.6;">Sent from the contact form at <a href="https://halimslife.com/contact" style="color:#087255;">halimslife.com</a>. The original message is also saved in your admin dashboard.</td></tr>
        </table>
      </td></tr>
    </table>
  </body>
</html>`;
}

type ContactReplyInput = {
  toName: string;
  toEmail: string;
  subject: string;
  originalMessage: string;
  replyMessage: string;
};

function contactReplyHtml(input: ContactReplyInput) {
  const name = escapeHtml(input.toName);
  const subject = escapeHtml(input.subject);
  const original = escapeHtml(input.originalMessage).replace(/\r?\n/g, "<br />");
  const reply = markdownToEmailHtml(input.replyMessage);

  return `<!doctype html>
<html lang="en">
  <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"></head>
  <body style="margin:0;background:#f5f1e8;color:#102a43;font-family:Arial,'Noto Sans Bengali',sans-serif;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;">Reply to your message: ${subject}</div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f5f1e8;padding:32px 14px;">
      <tr><td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;overflow:hidden;border:1px solid #d9e1dc;border-radius:18px;background:#fffdf8;box-shadow:0 18px 45px rgba(16,42,67,.08);">
          <tr><td style="padding:28px 32px;background:#082f54;color:#fff;">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0"><tr>
              <td><span style="display:inline-block;width:42px;height:42px;border:1px solid #4d718b;border-radius:10px;color:#fff;font:700 28px/42px Georgia,serif;text-align:center;">H</span></td>
              <td style="padding-left:12px;"><strong style="display:block;font:700 27px Georgia,serif;">Halim<span style="color:#f28c28;">.</span></strong><span style="color:#a9c1cf;font-size:12px;">Engineer · Researcher · Lifelong learner</span></td>
              <td align="right"><span style="display:inline-block;padding:7px 11px;border:1px solid #39705e;border-radius:999px;color:#8fe4c5;font-size:11px;">Reply</span></td>
            </tr></table>
          </td></tr>
          <tr><td style="padding:32px;">
            <span style="color:#087255;font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;">Re: ${subject}</span>
            <p style="margin:16px 0 0;color:#294353;font-size:15px;">Hi ${name},</p>
            <div style="margin:14px 0 24px;padding:22px;border-left:4px solid #087255;border-radius:8px;background:#fffaf1;color:#294353;font-size:15px;line-height:1.75;">${reply}</div>
            <details style="margin-top:8px;">
              <summary style="cursor:pointer;color:#637785;font-size:11px;text-transform:uppercase;letter-spacing:.08em;">Your original message</summary>
              <div style="margin-top:10px;padding:16px 18px;border:1px solid #dce7e2;border-radius:8px;background:#f4f8f5;color:#4a5c66;font-size:13px;line-height:1.65;">${original}</div>
            </details>
          </td></tr>
          <tr><td style="padding:18px 32px;border-top:1px solid #e1e7e3;color:#738590;font-size:11px;line-height:1.6;">Sent in reply to a message submitted at <a href="https://halimslife.com/contact" style="color:#087255;">halimslife.com</a>. Just hit reply to continue the conversation.</td></tr>
        </table>
      </td></tr>
    </table>
  </body>
</html>`;
}

export async function sendContactReply(input: ContactReplyInput) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { ok: false, reason: "RESEND_API_KEY is not configured" };

  const from = process.env.CONTACT_EMAIL_FROM || "Halim. <onboarding@resend.dev>";
  const replyTo = process.env.CONTACT_EMAIL_TO || "reiazbubt@gmail.com";
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "User-Agent": "halimslife-contact/1.0",
    },
    body: JSON.stringify({
      from,
      to: [input.toEmail],
      reply_to: replyTo,
      subject: `Re: ${input.subject}`,
      html: contactReplyHtml(input),
      text: `Hi ${input.toName},\n\n${input.replyMessage}\n\n---\nYour original message:\n${input.originalMessage}`,
      tags: [{ name: "source", value: "admin-reply" }],
    }),
  });

  if (!response.ok) {
    const details = await response.text();
    return { ok: false, reason: `Resend ${response.status}: ${details.slice(0, 300)}` };
  }

  return { ok: true };
}

export async function sendContactNotification(input: ContactEmailInput) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { ok: false, reason: "RESEND_API_KEY is not configured" };

  const from = process.env.CONTACT_EMAIL_FROM || "Halim. <onboarding@resend.dev>";
  const to = process.env.CONTACT_EMAIL_TO || "reiazbubt@gmail.com";
  const topic = topicLabels[input.topic] ?? input.topic;
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "User-Agent": "halimslife-contact/1.0",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: input.email,
      subject: `[Halim.] ${topic}: ${input.subject}`,
      html: contactEmailHtml(input),
      text: `New ${topic} message\n\nFrom: ${input.name} <${input.email}>\nSubject: ${input.subject}\n\n${input.message}`,
      tags: [{ name: "source", value: "contact-form" }],
    }),
  });

  if (!response.ok) {
    const details = await response.text();
    return { ok: false, reason: `Resend ${response.status}: ${details.slice(0, 300)}` };
  }

  return { ok: true };
}
