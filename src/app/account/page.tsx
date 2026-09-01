import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { connection } from "next/server";

import Link from "next/link";

import { logoutUser } from "@/app/auth-actions";
import { AccountSidebar } from "@/components/account-sidebar";
import { EditNameForm } from "@/components/edit-name-form";
import { InnerPageShell } from "@/components/inner-page-shell";
import { StudyProgressPanel, type StudyTrack } from "@/components/study-progress-panel";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { japaneseN5Sections } from "@/lib/japanese-n5-curriculum";
import { minnaN4CompanionSections } from "@/lib/minna-n4-companion";
import { minnaN5CompanionSections } from "@/lib/minna-n5-companion";

const countryLabels: Record<string, string> = {
  usa: "🇺🇸 USA",
  canada: "🇨🇦 Canada",
  korea: "🇰🇷 South Korea",
  switzerland: "🇨🇭 Switzerland",
  italy: "🇮🇹 Italy",
  japan: "🇯🇵 Japan",
};

const studyTracks: StudyTrack[] = [
  {
    key: "japanese-n5",
    label: "Japanese Foundations (N5 course)",
    storageKey: "halim-course-progress:japanese-n5",
    total: japaneseN5Sections.reduce((sum, section) => sum + section.lessons.length, 0),
    href: "/academy/japanese-n5",
  },
  {
    key: "minna-n5",
    label: "Minna no Nihongo N5 book",
    storageKey: "minna-n5-book-progress",
    total: minnaN5CompanionSections.length,
    href: "/projects/minna-no-nihongo-n5",
  },
  {
    key: "minna-n4",
    label: "Minna no Nihongo N4 book",
    storageKey: "minna-n4-book-progress",
    total: minnaN4CompanionSections.length,
    href: "/projects/minna-no-nihongo-n4",
  },
];

export const metadata: Metadata = {
  title: "আমার Account",
  robots: { index: false, follow: false },
};

export default async function AccountPage() {
  await connection();
  const supabase = await createServerSupabaseClient();

  if (!supabase) {
    redirect("/login");
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name,email,role,created_at")
    .eq("id", user.id)
    .single();

  const [{ data: navigatorProfile }, { data: supportRequests }] = await Promise.all([
    supabase
      .from("scholarship_navigator_profiles")
      .select("target_country,degree,research_interest,current_country,ielts_status,created_at")
      .eq("user_id", user.id)
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle(),
    supabase
      .from("contact_messages")
      .select("status")
      .eq("topic", "scholarship-support")
      .eq("user_id", user.id),
  ]);

  const supportCount = supportRequests?.length ?? 0;
  const repliedCount = supportRequests?.filter((row) => row.status === "replied").length ?? 0;

  const displayName = profile?.full_name || "Learner";
  const joinedOn = profile?.created_at
    ? new Date(profile.created_at).toLocaleDateString("bn-BD", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "—";

  return (
    <InnerPageShell>
      <section className="account-page container">
        <div className="account-layout">
          <AccountSidebar displayName={displayName} email={profile?.email || user.email || ""} active="account" />

          <div className="account-main">
            <span className="kicker">আমার Account</span>
            <h1>আসসালামু আলাইকুম, {displayName}</h1>
            <div className="profile-card">
              <EditNameForm currentName={displayName} />
              <div className="profile-field-row">
                <span>Email</span>
                <div className="profile-field-value"><strong>{profile?.email || user.email}</strong></div>
              </div>
              <div className="profile-field-row">
                <span>Role</span>
                <div className="profile-field-value"><strong>{profile?.role || "user"}</strong></div>
              </div>
              <div className="profile-field-row">
                <span>যোগদানের তারিখ</span>
                <div className="profile-field-value"><strong>{joinedOn}</strong></div>
              </div>
              <div className="profile-field-row">
                <span>Status</span>
                <div className="profile-field-value"><strong className="profile-status">Active</strong></div>
              </div>
            </div>

            <section className="analytics-section">
              <h2>আপনার Study &amp; Scholarship Overview</h2>
              <div className="analytics-grid">
                <article className="analytics-card">
                  <h3>Scholarship interest</h3>
                  {navigatorProfile ? (
                    <div className="account-card">
                      <div>
                        <span>Target country</span>
                        <strong>{countryLabels[navigatorProfile.target_country] ?? navigatorProfile.target_country}</strong>
                      </div>
                      <div>
                        <span>Degree</span>
                        <strong>{navigatorProfile.degree === "phd" ? "PhD" : "Master's"}</strong>
                      </div>
                      <div>
                        <span>Research interest</span>
                        <strong>{navigatorProfile.research_interest}</strong>
                      </div>
                      <div>
                        <span>IELTS status</span>
                        <strong>{navigatorProfile.ielts_status}</strong>
                      </div>
                    </div>
                  ) : (
                    <div className="analytics-empty">
                      <p>এখনো কোনো scholarship profile তৈরি করেননি।</p>
                      <Link href="/scholarships">Scholarship navigator পূরণ করুন →</Link>
                    </div>
                  )}
                </article>

                <article className="analytics-card">
                  <h3>Scholarship support activity</h3>
                  <div className="account-card">
                    <div>
                      <span>মোট request পাঠিয়েছেন</span>
                      <strong>{supportCount}</strong>
                    </div>
                    <div>
                      <span>Admin reply পেয়েছেন</span>
                      <strong>{repliedCount}</strong>
                    </div>
                  </div>
                  <Link href="/account/scholarship-support">সব request দেখুন →</Link>
                </article>

                <article className="analytics-card analytics-card--wide">
                  <h3>Academy progress</h3>
                  <StudyProgressPanel tracks={studyTracks} />
                </article>
              </div>
            </section>

            <form className="account-logout" action={logoutUser}>
              <button type="submit">Logout করুন</button>
            </form>
          </div>
        </div>
      </section>
    </InnerPageShell>
  );
}
