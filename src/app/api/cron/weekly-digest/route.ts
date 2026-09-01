import { NextResponse } from "next/server";

import { createSupabaseAdminClient } from "@/lib/supabase/admin";
import { scholarshipGuides, type ScholarshipGuide } from "@/lib/scholarships";
import { sendWeeklyDigestEmail } from "@/lib/weekly-digest-email";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

type NavigatorProfileRow = {
  user_id: string;
  name: string;
  email: string;
  target_country: string;
  created_at: string;
};

function priorityFor(guide: ScholarshipGuide, country: string) {
  switch (country) {
    case "canada": return guide.canadaPriority ?? Number.MAX_SAFE_INTEGER;
    case "korea": return guide.koreaPriority ?? Number.MAX_SAFE_INTEGER;
    case "switzerland": return guide.swissPriority ?? Number.MAX_SAFE_INTEGER;
    case "italy": return guide.italyPriority ?? Number.MAX_SAFE_INTEGER;
    case "japan": return guide.bestFitPriority ?? Number.MAX_SAFE_INTEGER;
    default: return Number.MAX_SAFE_INTEGER; // usa guides have no dedicated priority field
  }
}

export async function GET(request: Request) {
  const cronSecret = process.env.CRON_SECRET;
  if (!cronSecret) {
    return NextResponse.json({ ok: false, error: "CRON_SECRET is not configured" }, { status: 500 });
  }
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const supabase = createSupabaseAdminClient();
  if (!supabase) {
    return NextResponse.json({ ok: false, error: "SUPABASE_SERVICE_ROLE_KEY is not configured" }, { status: 500 });
  }

  const { data: profileRows, error: profilesError } = await supabase
    .from("scholarship_navigator_profiles")
    .select("user_id,name,email,target_country,created_at")
    .not("user_id", "is", null)
    .order("created_at", { ascending: false });

  if (profilesError) {
    return NextResponse.json({ ok: false, error: profilesError.message }, { status: 500 });
  }

  // Keep only each user's most recent submission.
  const latestByUser = new Map<string, NavigatorProfileRow>();
  for (const row of (profileRows ?? []) as NavigatorProfileRow[]) {
    if (!latestByUser.has(row.user_id)) latestByUser.set(row.user_id, row);
  }
  const userIds = [...latestByUser.keys()];

  if (userIds.length === 0) {
    return NextResponse.json({ ok: true, sent: 0, skipped: 0, message: "No linked profiles yet." });
  }

  const [{ data: accountRows }, { data: sentRows }] = await Promise.all([
    supabase.from("profiles").select("id,full_name,email,weekly_digest_opt_out").in("id", userIds),
    supabase.from("weekly_digest_log").select("user_id,scholarship_slug").in("user_id", userIds),
  ]);

  const accountById = new Map((accountRows ?? []).map((row) => [row.id, row]));
  const sentSlugsByUser = new Map<string, Set<string>>();
  for (const row of sentRows ?? []) {
    const set = sentSlugsByUser.get(row.user_id) ?? new Set<string>();
    set.add(row.scholarship_slug);
    sentSlugsByUser.set(row.user_id, set);
  }

  let sent = 0;
  let skipped = 0;
  const errors: string[] = [];

  for (const [userId, navigatorProfile] of latestByUser) {
    const account = accountById.get(userId);
    if (account?.weekly_digest_opt_out) { skipped += 1; continue; }

    const alreadySent = sentSlugsByUser.get(userId) ?? new Set<string>();
    const candidates = scholarshipGuides
      .filter((guide) => guide.country === navigatorProfile.target_country && !alreadySent.has(guide.slug))
      .sort((a, b) => priorityFor(a, navigatorProfile.target_country) - priorityFor(b, navigatorProfile.target_country));

    const pick = candidates[0];
    if (!pick) { skipped += 1; continue; }

    const toEmail = account?.email || navigatorProfile.email;
    const toName = account?.full_name || navigatorProfile.name;
    const unsubscribeUrl = `https://halimslife.com/api/weekly-digest/unsubscribe?u=${userId}`;

    const delivery = await sendWeeklyDigestEmail({ toName, toEmail, guide: pick, unsubscribeUrl });
    if (!delivery.ok) {
      errors.push(`${toEmail}: ${delivery.reason}`);
      continue;
    }

    const { error: logError } = await supabase
      .from("weekly_digest_log")
      .insert({ user_id: userId, scholarship_slug: pick.slug });
    if (logError) errors.push(`${toEmail}: sent but log failed (${logError.message})`);
    sent += 1;
  }

  return NextResponse.json({ ok: true, sent, skipped, errors });
}
