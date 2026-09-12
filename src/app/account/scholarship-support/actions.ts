"use server";

import { revalidatePath } from "next/cache";

import { createServerSupabaseClient } from "@/lib/supabase/server";
import { sendContactNotification } from "@/lib/contact-email";
import {
  scholarshipCountryLabels,
  scholarshipDegreeLabels,
} from "@/lib/scholarship-support-options";

export type ScholarshipSupportState = {
  error?: string;
  success?: string;
};

export type ScholarshipFollowUpState = {
  error?: string;
  success?: string;
};

export async function submitScholarshipFollowUpReply(
  _previousState: ScholarshipFollowUpState,
  formData: FormData,
): Promise<ScholarshipFollowUpState> {
  const supabase = await createServerSupabaseClient();
  if (!supabase) {
    return { error: "Service এখন configure করা নেই। সরাসরি reiazbubt@gmail.com-এ email করুন।" };
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return { error: "Reply পাঠাতে হলে আগে login করুন।" };
  }

  const requestId = Number(formData.get("requestId"));
  const message = String(formData.get("message") ?? "").trim();

  if (!Number.isInteger(requestId)) {
    return { error: "Invalid request." };
  }
  if (message.length < 2 || message.length > 4000) {
    return { error: "Reply ২ থেকে ৪০০০ অক্ষরের মধ্যে লিখুন।" };
  }

  const { data: original, error: fetchError } = await supabase
    .from("contact_messages")
    .select("id,name,email,subject")
    .eq("id", requestId)
    .eq("user_id", user.id)
    .single();
  if (fetchError || !original) {
    return { error: "Request খুঁজে পাওয়া যায়নি।" };
  }

  const { error } = await supabase.from("contact_message_replies").insert({
    request_id: requestId,
    sender: "user",
    message,
  });
  if (error) {
    return { error: "Reply পাঠানো যায়নি। একটু পরে আবার চেষ্টা করুন।" };
  }

  // Surface the request as "new" again so it doesn't stay hidden under a
  // stale "replied" status now that the applicant has followed up.
  const { error: reopenError } = await supabase.rpc("reopen_scholarship_request", {
    p_request_id: requestId,
  });
  if (reopenError) console.error("Could not reopen request status after follow-up:", reopenError.message);

  try {
    const delivery = await sendContactNotification({
      name: original.name,
      email: original.email,
      topic: "scholarship-support",
      subject: `Re: ${original.subject}`,
      message,
    });
    if (!delivery.ok) console.error("Follow-up notification email skipped or failed:", delivery.reason);
  } catch (deliveryError) {
    console.error("Follow-up notification email failed:", deliveryError);
  }

  revalidatePath("/account/scholarship-support");
  revalidatePath("/admin/scholarship-support");

  return { success: "আপনার reply পাঠানো হয়েছে।" };
}

export async function submitScholarshipSupportRequest(
  _previousState: ScholarshipSupportState,
  formData: FormData,
): Promise<ScholarshipSupportState> {
  const supabase = await createServerSupabaseClient();
  if (!supabase) {
    return { error: "Service এখন configure করা নেই। সরাসরি reiazbubt@gmail.com-এ email করুন।" };
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { error: "Request পাঠাতে হলে আগে login করুন।" };
  }

  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const country = String(formData.get("country") ?? "undecided");
  const degree = String(formData.get("degree") ?? "undecided");
  const background = String(formData.get("background") ?? "").trim();
  const goals = String(formData.get("goals") ?? "").trim();
  const driveLink = String(formData.get("driveLink") ?? "").trim();
  const website = String(formData.get("website") ?? "").trim();

  // Silently accept bot-filled submissions without storing them.
  if (website) {
    return { success: "আপনার request পাঠানো হয়েছে। ধন্যবাদ!" };
  }

  if (name.length < 2 || name.length > 80) {
    return { error: "নাম ২ থেকে ৮০ অক্ষরের মধ্যে লিখুন।" };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
    return { error: "একটি সঠিক email address দিন।" };
  }
  if (!scholarshipCountryLabels[country]) {
    return { error: "একটি সঠিক target country বেছে নিন।" };
  }
  if (!scholarshipDegreeLabels[degree]) {
    return { error: "একটি সঠিক degree level বেছে নিন।" };
  }
  if (background.length < 5 || background.length > 300) {
    return { error: "বর্তমান শিক্ষাগত পটভূমি ৫ থেকে ৩০০ অক্ষরের মধ্যে লিখুন।" };
  }
  if (goals.length < 10 || goals.length > 2000) {
    return { error: "কী ধরনের সাহায্য চান তা ১০ থেকে ২০০০ অক্ষরের মধ্যে লিখুন।" };
  }
  if (driveLink && (driveLink.length > 500 || !/^https:\/\/(drive|docs)\.google\.com\//.test(driveLink))) {
    return { error: "একটি সঠিক drive.google.com বা docs.google.com link দিন, অথবা field-টি খালি রাখুন।" };
  }

  const subject = `Scholarship support request — ${scholarshipCountryLabels[country]}`;
  const message = [
    `Target country: ${scholarshipCountryLabels[country]}`,
    `Target degree: ${scholarshipDegreeLabels[degree]}`,
    `Current education / background: ${background}`,
    ...(driveLink ? [`CV/Transcript link: ${driveLink}`] : []),
    "",
    "কী সাহায্য দরকার:",
    goals,
  ].join("\n");

  const { error } = await supabase.from("contact_messages").insert({
    user_id: user.id,
    name,
    email,
    topic: "scholarship-support",
    subject,
    message,
    target_country: country,
    target_degree: degree,
    background,
    goals,
    drive_link: driveLink || null,
  });

  if (error) {
    return {
      error: "Request পাঠানো যায়নি। একটু পরে আবার চেষ্টা করুন অথবা সরাসরি email করুন।",
    };
  }

  try {
    const delivery = await sendContactNotification({
      name,
      email,
      topic: "scholarship-support",
      subject,
      message,
    });
    if (!delivery.ok) console.error("Scholarship support email delivery skipped or failed:", delivery.reason);
  } catch (deliveryError) {
    console.error("Scholarship support email delivery failed:", deliveryError);
  }

  return {
    success: "আপনার request পৌঁছে গেছে! সাধারণত ১–২ working day-এর মধ্যে reply করা হবে।",
  };
}
