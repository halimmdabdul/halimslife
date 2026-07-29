"use server";

import { createServerSupabaseClient } from "@/lib/supabase/server";

export type ContactFormState = {
  error?: string;
  success?: string;
};

const topics = new Set([
  "general",
  "academy",
  "engineering",
  "research",
  "career",
  "collaboration",
]);

export async function submitContactMessage(
  _previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim().toLowerCase();
  const topic = String(formData.get("topic") ?? "general");
  const subject = String(formData.get("subject") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const website = String(formData.get("website") ?? "").trim();

  // Silently accept bot-filled submissions without storing them.
  if (website) {
    return { success: "আপনার message পাঠানো হয়েছে। ধন্যবাদ!" };
  }

  if (name.length < 2 || name.length > 80) {
    return { error: "নাম ২ থেকে ৮০ অক্ষরের মধ্যে লিখুন।" };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
    return { error: "একটি সঠিক email address দিন।" };
  }
  if (!topics.has(topic)) {
    return { error: "একটি সঠিক message topic বেছে নিন।" };
  }
  if (subject.length < 3 || subject.length > 120) {
    return { error: "Subject ৩ থেকে ১২০ অক্ষরের মধ্যে লিখুন।" };
  }
  if (message.length < 10 || message.length > 2000) {
    return { error: "Message ১০ থেকে ২০০০ অক্ষরের মধ্যে লিখুন।" };
  }

  const supabase = await createServerSupabaseClient();
  if (!supabase) {
    return {
      error: "Contact service এখন configure করা নেই। সরাসরি reiazbubt@gmail.com-এ email করুন।",
    };
  }

  const { error } = await supabase.from("contact_messages").insert({
    name,
    email,
    topic,
    subject,
    message,
  });

  if (error) {
    return {
      error: "Message পাঠানো যায়নি। একটু পরে আবার চেষ্টা করুন অথবা সরাসরি email করুন।",
    };
  }

  return {
    success: "Message পৌঁছে গেছে! সাধারণত ১–২ working day-এর মধ্যে reply করা হবে।",
  };
}
