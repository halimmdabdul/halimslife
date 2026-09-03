"use client";

import { useRouter } from "next/navigation";

import {
  SCHOLARSHIP_COUNTRIES,
  SCHOLARSHIP_DEGREES,
} from "@/lib/scholarship-support-options";

export type ScholarshipFilterValues = {
  status: string;
  country: string;
  degree: string;
};

export function ScholarshipFilters({ status, country, degree }: ScholarshipFilterValues) {
  const router = useRouter();

  function updateFilter(key: keyof ScholarshipFilterValues, value: string) {
    const current = { status, country, degree, [key]: value };
    const query = new URLSearchParams();
    if (current.status !== "all") query.set("status", current.status);
    if (current.country !== "all") query.set("country", current.country);
    if (current.degree !== "all") query.set("degree", current.degree);
    // Any filter change moves the list back to page 1.
    router.push(`/admin/scholarship-support${query.toString() ? `?${query}` : ""}`);
  }

  return (
    <div className="admin-filter-bar" aria-label="Filter scholarship support requests">
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
      {status !== "all" || country !== "all" || degree !== "all" ? (
        <a href="/admin/scholarship-support" className="admin-filter-clear">Clear filters</a>
      ) : null}
    </div>
  );
}
