const placeholderProjectUrl = "https://your-project-id.supabase.co";
const placeholderPublishableKey = "sb_publishable_your-key";

export function getSupabaseConfig() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const publishableKey =
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

  if (
    !url ||
    !publishableKey ||
    url === placeholderProjectUrl ||
    publishableKey === placeholderPublishableKey
  ) {
    return null;
  }

  return { url, publishableKey };
}

export function requireSupabaseConfig() {
  const config = getSupabaseConfig();

  if (!config) {
    throw new Error(
      "Supabase is not configured. Add NEXT_PUBLIC_SUPABASE_URL and " +
        "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY to .env.local.",
    );
  }

  return config;
}
