export type SuccessStory = {
  name: string;
  outcome: string;
  quote: string;
  country: string;
};

/**
 * Real testimonials only — add an entry here once a student who actually
 * used this site's guidance confirms their outcome and gives permission to
 * publish their name/quote. The section on /scholarships renders nothing
 * when this list is empty, so it never shows placeholder or fabricated
 * social proof.
 */
export const successStories: SuccessStory[] = [];
