"use client";

import { useEffect, useState } from "react";

export type StudyTrack = {
  key: string;
  label: string;
  storageKey: string;
  /** How to read the saved value: "array-length" counts a JSON array's
   * items (course lesson ids or book section ids); total is provided
   * alongside so a percentage can be computed. */
  total: number;
  href: string;
};

function readCompletedCount(storageKey: string): number {
  try {
    const raw = window.localStorage.getItem(storageKey);
    if (!raw) return 0;
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) return parsed.length;
    if (parsed && Array.isArray(parsed.completed)) return parsed.completed.length;
    return 0;
  } catch {
    return 0;
  }
}

export function StudyProgressPanel({ tracks }: { tracks: StudyTrack[] }) {
  const [counts, setCounts] = useState<Record<string, number> | null>(null);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const next: Record<string, number> = {};
      for (const track of tracks) next[track.key] = readCompletedCount(track.storageKey);
      setCounts(next);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [tracks]);

  if (!counts) return null;

  const started = tracks.filter((track) => (counts[track.key] ?? 0) > 0);

  if (started.length === 0) {
    return (
      <div className="analytics-empty">
        <p>এই browser-এ এখনো কোনো course বা book শুরু করেননি।</p>
      </div>
    );
  }

  return (
    <div className="progress-list">
      {started.map((track) => {
        const completed = Math.min(counts[track.key] ?? 0, track.total);
        const percent = track.total > 0 ? Math.round((completed / track.total) * 100) : 0;
        return (
          <a className="progress-item" href={track.href} key={track.key}>
            <div>
              <span>{track.label}</span>
              <b>{percent}%</b>
            </div>
            <div className="progress-track">
              <div className="progress-bar" style={{ width: `${percent}%` }} />
            </div>
            <small>{completed}/{track.total} সম্পন্ন</small>
          </a>
        );
      })}
      <p className="analytics-note">এই progress এই browser-এ সংরক্ষিত—অন্য device থেকে দেখলে ভিন্ন হতে পারে।</p>
    </div>
  );
}
