"use client";

import { useRef, useState, useTransition } from "react";
import { useRouter } from "next/navigation";

import {
  SCHOLARSHIP_COUNTRIES,
  SCHOLARSHIP_DEGREES,
} from "@/lib/scholarship-support-options";

export type ScholarshipFilterValues = {
  status: string;
  country: string;
  degree: string;
  q: string;
};

export function ScholarshipFilters({ status, country, degree, q }: ScholarshipFilterValues) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [searchValue, setSearchValue] = useState(q);
  const [syncedQ, setSyncedQ] = useState(q);
  const debounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  if (q !== syncedQ) {
    setSyncedQ(q);
    setSearchValue(q);
  }

  function navigate(next: ScholarshipFilterValues) {
    const query = new URLSearchParams();
    if (next.status !== "all") query.set("status", next.status);
    if (next.country !== "all") query.set("country", next.country);
    if (next.degree !== "all") query.set("degree", next.degree);
    if (next.q.trim()) query.set("q", next.q.trim());
    startTransition(() => {
      router.push(`/admin/scholarship-support${query.toString() ? `?${query}` : ""}`);
    });
  }

  function updateFilter(key: keyof ScholarshipFilterValues, value: string) {
    navigate({ status, country, degree, q, [key]: value });
  }

  function handleSearchChange(value: string) {
    setSearchValue(value);
    if (debounceRef.current) clearTimeout(debounceRef.current);
    debounceRef.current = setTimeout(() => {
      navigate({ status, country, degree, q: value });
    }, 400);
  }

  const hasActiveFilters = status !== "all" || country !== "all" || degree !== "all" || q.trim() !== "";

  return (
    <div className={`admin-filter-bar${isPending ? " is-pending" : ""}`} aria-label="Filter scholarship support requests" aria-busy={isPending}>
      <label className="admin-filter-search">
        <span>Search</span>
        <input
          type="search"
          value={searchValue}
          placeholder="Name, email, or subject…"
          onChange={(event) => handleSearchChange(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              event.preventDefault();
              if (debounceRef.current) clearTimeout(debounceRef.current);
              navigate({ status, country, degree, q: searchValue });
            }
          }}
        />
      </label>
      <label>
        <span>Status</span>
        <select value={status} onChange={(event) => updateFilter("status", event.target.value)}>
          <option value="all">All statuses</option>
          <option value="new">New</option>
          <option value="read">Read</option>
          <option value="replied">Replied</option>
        </select>
      </label>
      <label>
        <span>Country</span>
        <select value={country} onChange={(event) => updateFilter("country", event.target.value)}>
          <option value="all">All countries</option>
          {SCHOLARSHIP_COUNTRIES.map((option) => (
            <option value={option.value} key={option.value}>{option.label}</option>
          ))}
        </select>
      </label>
      <label>
        <span>Degree</span>
        <select value={degree} onChange={(event) => updateFilter("degree", event.target.value)}>
          <option value="all">All degrees</option>
          {SCHOLARSHIP_DEGREES.map((option) => (
            <option value={option.value} key={option.value}>{option.label}</option>
          ))}
        </select>
      </label>
      {isPending ? <span className="admin-filter-pending">Loading…</span> : null}
      {hasActiveFilters ? (
        <a href="/admin/scholarship-support" className="admin-filter-clear">Clear filters</a>
      ) : null}
    </div>
  );
}
