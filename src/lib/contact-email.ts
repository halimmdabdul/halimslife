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
