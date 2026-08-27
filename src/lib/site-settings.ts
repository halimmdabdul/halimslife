import "server-only";

import { cache } from "react";

import { createServerSupabaseClient } from "@/lib/supabase/server";

export type SiteSettings = {
  googleSiteVerification: string | null;
  bingSiteVerification: string | null;
  facebookPixelId: string | null;
  googleAnalyticsId: string | null;
  googleTagManagerId: string | null;
};

const emptySettings: SiteSettings = {
  googleSiteVerification: null,
  bingSiteVerification: null,
  facebookPixelId: null,
  googleAnalyticsId: null,
  googleTagManagerId: null,
};

export const getSiteSettings = cache(async (): Promise<SiteSettings> => {
  const supabase = await createServerSupabaseClient();
  if (!supabase) return emptySettings;

  const { data } = await supabase
    .from("site_settings")
    .select(
      "google_site_verification,bing_site_verification,facebook_pixel_id,google_analytics_id,google_tag_manager_id",
    )
    .eq("id", true)
    .maybeSingle();

  if (!data) return emptySettings;

  return {
    googleSiteVerification: data.google_site_verification,
    bingSiteVerification: data.bing_site_verification,
    facebookPixelId: data.facebook_pixel_id,
    googleAnalyticsId: data.google_analytics_id,
    googleTagManagerId: data.google_tag_manager_id,
  };
});
