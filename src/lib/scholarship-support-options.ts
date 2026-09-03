// Single source of truth for the Scholarship Support request form
// (src/components/scholarship-support-form.tsx) and the admin
// /admin/scholarship-support list, so both stay in sync when a
// country or degree option changes.

export const SCHOLARSHIP_COUNTRIES = [
  { value: "usa", label: "USA" },
  { value: "canada", label: "Canada" },
  { value: "korea", label: "South Korea" },
  { value: "switzerland", label: "Switzerland" },
  { value: "italy", label: "Italy" },
  { value: "japan", label: "Japan" },
  { value: "undecided", label: "এখনও ঠিক করিনি" },
] as const;

export const SCHOLARSHIP_DEGREES = [
  { value: "bachelors", label: "Bachelor's" },
  { value: "masters", label: "Master's" },
  { value: "phd", label: "PhD" },
  { value: "undecided", label: "এখনও ঠিক করিনি" },
] as const;

export type ScholarshipCountry = (typeof SCHOLARSHIP_COUNTRIES)[number]["value"];
export type ScholarshipDegree = (typeof SCHOLARSHIP_DEGREES)[number]["value"];

export const scholarshipCountryLabels: Record<string, string> = Object.fromEntries(
  SCHOLARSHIP_COUNTRIES.map((option) => [option.value, option.label]),
);

export const scholarshipDegreeLabels: Record<string, string> = Object.fromEntries(
  SCHOLARSHIP_DEGREES.map((option) => [option.value, option.label]),
);
