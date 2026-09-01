"use server";

import { createServerSupabaseClient } from "@/lib/supabase/server";
import { createSupabaseAdminClient } from "@/lib/supabase/admin";

export type ScholarshipNavigatorInput = {
  name: string;
  email: string;
  currentCountry: string;
  targetCountry: string;
  degree: string;
  researchInterest: string;
  ieltsStatus: string;
  ieltsScore: string;
  otherInformation: string;
};

export type ScholarshipNavigatorResult = { ok: boolean; message?: string };

const validTargetCountries = new Set(["usa", "canada", "korea", "switzerland", "italy", "japan"]);
const validDegrees = new Set(["masters", "phd"]);
const validIeltsStatus = new Set(["planning", "booked", "completed", "waiver"]);

export async function submitScholarshipNavigatorProfile(
  input: ScholarshipNavigatorInput,
): Promise<ScholarshipNavigatorResult> {
  const name = String(input.name ?? "").trim();
  const email = String(input.email ?? "").trim().toLowerCase();
  const currentCountry = String(input.currentCountry ?? "").trim();
  const targetCountry = String(input.targetCountry ?? "").trim();
  const degree = String(input.degree ?? "").trim();
  const researchInterest = String(input.researchInterest ?? "").trim();
  const ieltsStatus = String(input.ieltsStatus ?? "").trim();
  const ieltsScore = String(input.ieltsScore ?? "").trim();
  const otherInformation = String(input.otherInformation ?? "").trim();

  if (name.length < 2 || name.length > 80) return { ok: false, message: "সঠিক নাম দিন।" };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) return { ok: false, message: "সঠিক email address দিন।" };
  if (currentCountry.length < 2 || currentCountry.length > 80) return { ok: false, message: "বর্তমান দেশ সঠিকভাবে লিখুন।" };
  if (!validTargetCountries.has(targetCountry)) return { ok: false, message: "একটি সঠিক target country বেছে নিন।" };
  if (!validDegrees.has(degree)) return { ok: false, message: "একটি সঠিক degree বেছে নিন।" };
  if (researchInterest.length < 2 || researchInterest.length > 120) return { ok: false, message: "Research interest সঠিকভাবে দিন।" };
  if (!validIeltsStatus.has(ieltsStatus)) return { ok: false, message: "একটি সঠিক IELTS status বেছে নিন।" };

  const supabase = await createServerSupabaseClient();
  if (!supabase) return { ok: false, message: "Service configure করা নেই।" };

  const {
    data: { user: sessionUser },
  } = await supabase.auth.getUser();

  const { data: saved, error } = await supabase
    .from("scholarship_navigator_profiles")
    .insert({
      name,
      email,
      current_country: currentCountry,
      target_country: targetCountry,
      degree,
      research_interest: researchInterest,
      ielts_status: ieltsStatus,
      ielts_score: ieltsScore || null,
      other_information: otherInformation || null,
      user_id: sessionUser?.id ?? null,
    })
    .select("id")
    .single();
  if (error || !saved) return { ok: false, message: "Profile save করা যায়নি।" };

  const adminClient = createSupabaseAdminClient();

  // Best-effort: if the visitor wasn't logged in but this email already
  // belongs to a registered account, link this profile to it too — so the
  // weekly digest (which only looks at linked profiles) still reaches them.
  if (adminClient && !sessionUser) {
    try {
      const { data: existingProfile } = await adminClient
        .from("profiles")
        .select("id")
        .eq("email", email)
        .maybeSingle();
      if (existingProfile) {
        await adminClient
          .from("scholarship_navigator_profiles")
          .update({ user_id: existingProfile.id })
          .eq("id", saved.id);
      }
    } catch (linkException) {
      console.error("Scholarship navigator profile linking failed:", linkException);
    }
  }

  // Best-effort: invite the visitor to complete account registration if this
  // email has no existing account. Requires SUPABASE_SERVICE_ROLE_KEY — if
  // that's not configured, the profile is still saved but no invite goes out.
  if (adminClient && !sessionUser) {
    try {
      const { error: inviteError } = await adminClient.auth.admin.inviteUserByEmail(email, {
        data: { full_name: name },
        redirectTo: "https://halimslife.com/account",
      });
      // An error here usually just means this email already has an account —
      // that's expected and not a failure of this action.
      if (!inviteError) {
        await adminClient
          .from("scholarship_navigator_profiles")
          .update({ invite_sent: true })
          .eq("id", saved.id);
      } else {
        console.error("Scholarship navigator invite skipped:", inviteError.message);
      }
    } catch (inviteException) {
      console.error("Scholarship navigator invite failed:", inviteException);
    }
  }

  return { ok: true };
}
