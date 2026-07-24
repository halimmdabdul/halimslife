"use client";

import { createBrowserClient } from "@supabase/ssr";

import { requireSupabaseConfig } from "./config";

let browserClient: ReturnType<typeof createBrowserClient> | undefined;

export function createBrowserSupabaseClient() {
  const { url, publishableKey } = requireSupabaseConfig();

  browserClient ??= createBrowserClient(url, publishableKey);

  return browserClient;
}
