import type { ScholarshipGuide } from "@/lib/scholarships";

type WeeklyDigestInput = {
  toName: string;
  toEmail: string;
  guide: ScholarshipGuide;
  unsubscribeUrl: string;
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

function weeklyDigestHtml(input: WeeklyDigestInput) {
  const name = escapeHtml(input.toName);
  const university = escapeHtml(input.guide.university);
  const title = escapeHtml(input.guide.title);
  const summary = escapeHtml(input.guide.summary);
  const funding = escapeHtml(input.guide.funding);
  const url = `https://halimslife.com/scholarships/${input.guide.slug}`;

  return `<!doctype html>
<html lang="en">
  <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"></head>
  <body style="margin:0;background:#f5f1e8;color:#102a43;font-family:Arial,'Noto Sans Bengali',sans-serif;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;">This week's scholarship pick: ${university}</div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f5f1e8;padding:32px 14px;">
      <tr><td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;overflow:hidden;border:1px solid #d9e1dc;border-radius:18px;background:#fffdf8;box-shadow:0 18px 45px rgba(16,42,67,.08);">
          <tr><td style="padding:28px 32px;background:#082f54;color:#fff;">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0"><tr>
              <td><span style="display:inline-block;width:42px;height:42px;border:1px solid #4d718b;border-radius:10px;color:#fff;font:700 28px/42px Georgia,serif;text-align:center;">H</span></td>
              <td style="padding-left:12px;"><strong style="display:block;font:700 27px Georgia,serif;">Halim<span style="color:#f28c28;">.</span></strong><span style="color:#a9c1cf;font-size:12px;">Weekly scholarship pick</span></td>
            </tr></table>
          </td></tr>
          <tr><td style="padding:32px;">
            <p style="margin:0 0 6px;color:#294353;font-size:15px;">Hi ${name},</p>
            <p style="margin:0 0 22px;color:#637785;font-size:13px;line-height:1.7;">এই সপ্তাহে আপনার profile অনুযায়ী একটা scholarship guide বেছে দিলাম:</p>
            <span style="color:#087255;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;">${university}</span>
            <h1 style="margin:8px 0 14px;color:#082f54;font:700 26px/1.3 Georgia,'Noto Serif Bengali',serif;">${title}</h1>
            <p style="margin:0 0 18px;color:#294353;font-size:14px;line-height:1.75;">${summary}</p>
            <div style="padding:16px 18px;margin-bottom:22px;border-left:4px solid #087255;border-radius:8px;background:#f4f8f5;color:#294353;font-size:13px;">Funding: ${funding}</div>
            <p style="margin:0;"><a href="${url}" style="display:inline-block;padding:13px 20px;border-radius:8px;background:#087255;color:#fff;font-size:14px;font-weight:700;text-decoration:none;">সম্পূর্ণ guide দেখুন →</a></p>
          </td></tr>
          <tr><td style="padding:18px 32px;border-top:1px solid #e1e7e3;color:#738590;font-size:11px;line-height:1.6;">প্রতি সপ্তাহে একটি করে personalized pick পাঠানো হয়। Guidance আর দরকার না হলে <a href="${input.unsubscribeUrl}" style="color:#087255;">এখান থেকে unsubscribe করুন</a>।</td></tr>
        </table>
      </td></tr>
    </table>
  </body>
</html>`;
}

export async function sendWeeklyDigestEmail(input: WeeklyDigestInput) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { ok: false, reason: "RESEND_API_KEY is not configured" };

  const from = process.env.CONTACT_EMAIL_FROM || "Halim. <onboarding@resend.dev>";
  const replyTo = process.env.CONTACT_EMAIL_TO || "reiazbubt@gmail.com";
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "User-Agent": "halimslife-weekly-digest/1.0",
    },
    body: JSON.stringify({
      from,
      to: [input.toEmail],
      reply_to: replyTo,
      subject: `This week's scholarship pick: ${input.guide.university}`,
      html: weeklyDigestHtml(input),
      text: `Hi ${input.toName},\n\nThis week's pick: ${input.guide.title}\n${input.guide.summary}\n\nFunding: ${input.guide.funding}\n\nFull guide: https://halimslife.com/scholarships/${input.guide.slug}\n\nUnsubscribe: ${input.unsubscribeUrl}`,
      tags: [{ name: "source", value: "weekly-digest" }],
    }),
  });

  if (!response.ok) {
    const details = await response.text();
    return { ok: false, reason: `Resend ${response.status}: ${details.slice(0, 300)}` };
  }

  return { ok: true };
}
