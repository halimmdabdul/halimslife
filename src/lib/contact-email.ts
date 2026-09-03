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

function emailHeaderHtml() {
  return `<tr><td style="padding:26px 36px;border-bottom:1px solid #111111;">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0"><tr>
              <td width="34" valign="middle"><svg width="34" height="34" viewBox="0 0 48 48" role="img" aria-hidden="true"><rect x="1" y="1" width="46" height="46" rx="12" fill="#102a43" stroke="#2d4c57" stroke-width="1.5" /><path d="M15 13v22M33 13v22" fill="none" stroke="#f4f8f9" stroke-width="3.6" stroke-linecap="round" /><path d="M15 24h18" fill="none" stroke="#52d3a4" stroke-width="3.6" stroke-linecap="round" /><circle cx="38" cy="10" r="4.5" fill="#f28c28" stroke="#102a43" stroke-width="1.5" /></svg></td>
              <td style="padding-left:11px;"><strong style="display:block;font:700 19px -apple-system,'Segoe UI',Arial,sans-serif;letter-spacing:-.2px;color:#111111;">Halim<span style="color:#f28c28;">.</span></strong></td>
            </tr></table>
          </td></tr>`;
}

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
    if (part.startsWith("`") && part.endsWith("`")) return `<code style="padding:2px 5px;border-radius:4px;background:#f0f0f0;color:#111111;">${escapeHtml(part.slice(1, -1))}</code>`;
    const link = part.match(/^\[([^\]]+)\]\((https?:\/\/[^)\s]+)\)$/);
    if (link) return `<a href="${link[2]}" style="color:#111111;text-decoration:underline;">${escapeHtml(link[1])}</a>`;
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
      blocks.push(`<p style="margin:20px 0 8px;color:#111111;font-weight:700;font-size:${size};">${inlineMarkdownHtml(heading[2])}</p>`);
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
      blocks.push(`<pre style="margin:14px 0;padding:14px 16px;overflow-x:auto;border-radius:6px;background:#111111;color:#f5f5f5;font-size:12px;line-height:1.6;"><code>${escapeHtml(codeLines.join("\n"))}</code></pre>`);
      continue;
    }

    if (/^(-{3,}|\*{3,})$/.test(line)) {
      blocks.push(`<hr style="margin:22px 0;border:0;border-top:1px solid #e5e5e5;" />`);
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
      blocks.push(`<div style="margin:16px 0;padding:10px 16px;border-left:3px solid #111111;background:#fafafa;color:#111111;">${inlineMarkdownHtml(line.slice(2))}</div>`);
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
    .replace(/(https?:\/\/[^\s<]+)/g, (url) => `<a href="${url}" style="color:#111111;text-decoration:underline;">${url}</a>`);

  return `<!doctype html>
<html lang="en">
  <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"></head>
  <body style="margin:0;background:#f2f2f2;color:#111111;font-family:-apple-system,'Segoe UI',Arial,'Noto Sans Bengali',sans-serif;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;">New ${topic} message from ${name}</div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f2f2f2;padding:40px 14px;">
      <tr><td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:600px;background:#ffffff;border:2px solid #111111;">
          ${emailHeaderHtml()}
          <tr><td style="padding:40px 36px 8px;">
            <span style="display:block;color:#111111;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;">${topic}</span>
            <h1 style="margin:12px 0 28px;color:#111111;font:700 26px/1.3 -apple-system,'Segoe UI',Arial,'Noto Serif Bengali',sans-serif;letter-spacing:-.3px;">${subject}</h1>
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom:24px;border:1px solid #e5e5e5;">
              <tr><td style="padding:14px 18px;border-bottom:1px solid #e5e5e5;"><span style="display:block;color:#111111;font-size:10px;text-transform:uppercase;letter-spacing:.08em;">From</span><strong style="display:block;margin-top:4px;color:#111111;font-size:14px;">${name}</strong></td></tr>
              <tr><td style="padding:14px 18px;"><span style="display:block;color:#111111;font-size:10px;text-transform:uppercase;letter-spacing:.08em;">Email</span><a href="mailto:${email}" style="display:block;margin-top:4px;color:#111111;font-size:14px;text-decoration:underline;">${email}</a></td></tr>
            </table>
            <div style="padding:20px;border-left:2px solid #111111;background:#fafafa;color:#111111;font-size:15px;line-height:1.75;">${message}</div>
            <p style="margin:28px 0 0;"><a href="mailto:${email}?subject=${encodeURIComponent(`Re: ${input.subject}`)}" style="display:inline-block;padding:13px 22px;background:#111111;color:#ffffff;font-size:13px;font-weight:700;letter-spacing:.02em;text-decoration:none;">Reply to ${name} →</a></p>
          </td></tr>
          <tr><td style="padding:20px 36px 32px;color:#111111;font-size:11px;line-height:1.6;">Sent from the contact form at <a href="https://halimslife.com/contact" style="color:#111111;">halimslife.com</a>. The original message is also saved in your admin dashboard.</td></tr>
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
  <body style="margin:0;background:#f2f2f2;color:#111111;font-family:-apple-system,'Segoe UI',Arial,'Noto Sans Bengali',sans-serif;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;">Reply to your message: ${subject}</div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f2f2f2;padding:40px 14px;">
      <tr><td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:600px;background:#ffffff;border:2px solid #111111;">
          ${emailHeaderHtml()}
          <tr><td style="padding:40px 36px;">
            <span style="display:block;color:#111111;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;">Re: ${subject}</span>
            <p style="margin:16px 0 0;color:#111111;font-size:15px;">Hi ${name},</p>
            <div style="margin:16px 0 24px;padding:20px;border-left:2px solid #111111;background:#fafafa;color:#111111;font-size:15px;line-height:1.75;">${reply}</div>
            <details style="margin-top:8px;">
              <summary style="cursor:pointer;color:#111111;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;">Your original message</summary>
              <div style="margin-top:10px;padding:16px 18px;border:1px solid #e5e5e5;color:#111111;font-size:13px;line-height:1.65;">${original}</div>
            </details>
          </td></tr>
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

type ScholarshipRecommendationInput = {
  toName: string;
  toEmail: string;
  scholarshipName: string;
  university: string;
};

function scholarshipRecommendationHtml(input: ScholarshipRecommendationInput) {
  const name = escapeHtml(input.toName);
  const scholarshipName = escapeHtml(input.scholarshipName);
  const university = escapeHtml(input.university);

  return `<!doctype html>
<html lang="en">
  <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"></head>
  <body style="margin:0;background:#f2f2f2;color:#111111;font-family:-apple-system,'Segoe UI',Arial,'Noto Sans Bengali',sans-serif;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;">New scholarship recommendation: ${scholarshipName}</div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f2f2f2;padding:40px 14px;">
      <tr><td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:600px;background:#ffffff;border:2px solid #111111;">
          ${emailHeaderHtml()}
          <tr><td style="padding:40px 36px;">
            <span style="display:block;color:#111111;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;">Scholarship recommendation</span>
            <p style="margin:16px 0 0;color:#111111;font-size:15px;">Hi ${name},</p>
            <p style="margin:14px 0 0;color:#111111;font-size:15px;line-height:1.75;">আপনার Scholarship Support request-এর জন্য একটি নতুন recommendation যোগ করা হয়েছে:</p>
            <div style="margin:18px 0 8px;padding:20px;border-left:2px solid #111111;background:#fafafa;">
              <strong style="display:block;color:#111111;font-size:17px;">${scholarshipName}</strong>
              <span style="display:block;margin-top:4px;color:#111111;font-size:14px;">${university}</span>
            </div>
            <p style="margin:20px 0 0;color:#111111;font-size:13px;line-height:1.7;">বিস্তারিত (degree level, deadline, link, notes) দেখতে <a href="https://halimslife.com/account/scholarship-support" style="color:#111111;text-decoration:underline;">আপনার account-এ</a> গিয়ে দেখুন।</p>
          </td></tr>
        </table>
      </td></tr>
    </table>
  </body>
</html>`;
}

export async function sendScholarshipRecommendationEmail(input: ScholarshipRecommendationInput) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { ok: false, reason: "RESEND_API_KEY is not configured" };

  const from = process.env.CONTACT_EMAIL_FROM || "Halim. <onboarding@resend.dev>";
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
      subject: `New scholarship recommendation: ${input.scholarshipName}`,
      html: scholarshipRecommendationHtml(input),
      text: `Hi ${input.toName},\n\nA new scholarship recommendation was added to your Scholarship Support request:\n\n${input.scholarshipName}\n${input.university}\n\nSee full details at https://halimslife.com/account/scholarship-support`,
      tags: [{ name: "source", value: "scholarship-recommendation" }],
    }),
  });

  if (!response.ok) {
    const details = await response.text();
    return { ok: false, reason: `Resend ${response.status}: ${details.slice(0, 300)}` };
  }

  return { ok: true };
}
