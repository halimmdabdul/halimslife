"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import styles from "./scholarship-profile-modal.module.css";

const storageKey = "halim-scholarship-profile";
const dismissalKey = "halim-scholarship-profile-dismissed";

type ScholarshipProfile = {
  name: string;
  email: string;
  currentCountry: string;
  targetCountry: string;
  ieltsStatus: string;
  ieltsScore: string;
  degree: string;
  researchInterest: string;
  otherInformation: string;
};

const emptyProfile: ScholarshipProfile = {
  name: "",
  email: "",
  currentCountry: "Bangladesh",
  targetCountry: "",
  ieltsStatus: "planning",
  ieltsScore: "",
  degree: "masters",
  researchInterest: "",
  otherInformation: "",
};

const targetCountries = [
  ["usa", "🇺🇸 USA"],
  ["canada", "🇨🇦 Canada"],
  ["korea", "🇰🇷 South Korea"],
  ["switzerland", "🇨🇭 Switzerland"],
  ["italy", "🇮🇹 Italy"],
  ["japan", "🇯🇵 Japan"],
];

const researchInterests = [
  "Computer Science / IT",
  "Artificial Intelligence / Machine Learning",
  "Data Science / Analytics",
  "Cybersecurity",
  "Software Engineering",
  "Robotics / Computer Vision",
  "Business / MBA / Management",
  "Economics / Public Policy",
  "Other",
];

function recommendationUrl(profile: ScholarshipProfile) {
  const params = new URLSearchParams({
    country: profile.targetCountry,
    filter: profile.degree,
  });
  if (profile.researchInterest && profile.researchInterest !== "Other") {
    params.set("interest", profile.researchInterest);
  }
  params.set("personalized", "1");
  return `/scholarships?${params.toString()}#guides`;
}

export function ScholarshipProfileModal() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [hasProfile, setHasProfile] = useState(false);
  const [profile, setProfile] = useState<ScholarshipProfile>(emptyProfile);

  useEffect(() => {
    let savedProfile: ScholarshipProfile | null = null;
    try {
      const stored = window.localStorage.getItem(storageKey);
      if (stored) savedProfile = JSON.parse(stored) as ScholarshipProfile;
    } catch {
      window.localStorage.removeItem(storageKey);
    }

    if (savedProfile) {
      const profileTimer = window.setTimeout(() => {
        setProfile({ ...emptyProfile, ...savedProfile });
        setHasProfile(true);
      }, 0);
      const currentSearchParams = new URLSearchParams(window.location.search);
      if (!currentSearchParams.has("country") && savedProfile.targetCountry) {
        router.replace(recommendationUrl(savedProfile));
      }
      return () => window.clearTimeout(profileTimer);
    }

    if (window.sessionStorage.getItem(dismissalKey)) return;
    const timer = window.setTimeout(() => setIsOpen(true), 2000);
    return () => window.clearTimeout(timer);
  }, [router]);

  useEffect(() => {
    if (!isOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  function updateField(field: keyof ScholarshipProfile, value: string) {
    setProfile((current) => ({ ...current, [field]: value }));
  }

  function closeModal() {
    setIsOpen(false);
    window.sessionStorage.setItem(dismissalKey, "1");
  }

  function openModal() {
    window.sessionStorage.removeItem(dismissalKey);
    setIsOpen(true);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    window.localStorage.setItem(storageKey, JSON.stringify(profile));
    window.sessionStorage.removeItem(dismissalKey);
    setHasProfile(true);
    setIsOpen(false);
    router.push(recommendationUrl(profile));
  }

  return (
    <>
      <div className={styles.profileBar}>
        <div>
          <span>{hasProfile ? "আপনার saved study profile" : "Personalized scholarship match"}</span>
          <p>{hasProfile ? `${profile.targetCountry.toUpperCase()} · ${profile.degree === "phd" ? "PhD" : "Master’s"} · ${profile.researchInterest || "All fields"}` : "কয়েকটি তথ্য দিলে আপনার প্রয়োজন অনুযায়ী university list সাজানো হবে।"}</p>
        </div>
        <button type="button" onClick={openModal}>{hasProfile ? "Profile update করুন" : "আমার জন্য list সাজান"}</button>
      </div>

      {isOpen && (
        <div className={styles.backdrop} role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) closeModal(); }}>
          <section className={styles.modal} role="dialog" aria-modal="true" aria-labelledby="scholarship-profile-title">
            <button className={styles.close} type="button" aria-label="Close profile form" onClick={closeModal}>×</button>
            <header>
              <span>Personalized scholarship navigator</span>
              <h2 id="scholarship-profile-title">আপনার জন্য সঠিক university shortlist করি</h2>
              <p>তথ্যগুলো শুধু এই browser-এ save থাকবে। আপনার পছন্দ অনুযায়ী guide filter ও sort করা হবে।</p>
            </header>

            <form onSubmit={handleSubmit}>
              <label>
                <span>আপনার নাম *</span>
                <input required autoFocus autoComplete="name" value={profile.name} onChange={(event) => updateField("name", event.target.value)} placeholder="আপনার নাম" />
              </label>
              <label>
                <span>Email address *</span>
                <input required type="email" autoComplete="email" value={profile.email} onChange={(event) => updateField("email", event.target.value)} placeholder="you@example.com" />
              </label>
              <label>
                <span>আপনি এখন কোন দেশে আছেন? *</span>
                <input required value={profile.currentCountry} onChange={(event) => updateField("currentCountry", event.target.value)} placeholder="Bangladesh" />
              </label>
              <label>
                <span>কোন দেশে study করতে চান? *</span>
                <select required value={profile.targetCountry} onChange={(event) => updateField("targetCountry", event.target.value)}>
                  <option value="">দেশ নির্বাচন করুন</option>
                  {targetCountries.map(([value, label]) => <option value={value} key={value}>{label}</option>)}
                </select>
              </label>
              <label>
                <span>Study level *</span>
                <select required value={profile.degree} onChange={(event) => updateField("degree", event.target.value)}>
                  <option value="masters">Master’s / MSc</option>
                  <option value="phd">PhD / Doctoral</option>
                </select>
              </label>
              <label>
                <span>Research interest *</span>
                <select required value={profile.researchInterest} onChange={(event) => updateField("researchInterest", event.target.value)}>
                  <option value="">Interest নির্বাচন করুন</option>
                  {researchInterests.map((interest) => <option value={interest} key={interest}>{interest}</option>)}
                </select>
              </label>
              <label>
                <span>IELTS status</span>
                <select value={profile.ieltsStatus} onChange={(event) => updateField("ieltsStatus", event.target.value)}>
                  <option value="planning">Planning / Not taken</option>
                  <option value="booked">Test booked</option>
                  <option value="completed">Completed</option>
                  <option value="waiver">Waiver প্রয়োজন</option>
                </select>
              </label>
              <label>
                <span>IELTS score</span>
                <input type="number" inputMode="decimal" min="0" max="9" step="0.5" value={profile.ieltsScore} onChange={(event) => updateField("ieltsScore", event.target.value)} placeholder="যেমন 7.0" disabled={profile.ieltsStatus !== "completed"} />
              </label>
              <label className={styles.fullWidth}>
                <span>Other information</span>
                <textarea value={profile.otherInformation} onChange={(event) => updateField("otherInformation", event.target.value)} placeholder="CGPA, work experience, budget, scholarship need বা অন্য প্রয়োজন লিখুন…" rows={3} />
              </label>
              <footer>
                <small>🔒 এই তথ্য server-এ পাঠানো হয় না; আপনার browser-এই থাকে।</small>
                <button type="submit">আমার university list দেখুন →</button>
              </footer>
            </form>
          </section>
        </div>
      )}
    </>
  );
}
