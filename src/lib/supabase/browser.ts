"use client";

import { createClient } from "@supabase/supabase-js";

import { requireSupabaseConfig } from "./config";

let browserClient: ReturnType<typeof createClient> | undefined;

export function createBrowserSupabaseClient() {
  const { url, publishableKey } = requireSupabaseConfig();

  browserClient ??= createClient(url, publishableKey);

  return browserClient;
}
