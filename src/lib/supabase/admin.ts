import "server-only";

import { createClient } from "@supabase/supabase-js";

import { getSupabaseConfig } from "./config";

/**
 * A privileged Supabase client using the service-role key. Bypasses RLS —
 * only ever call this from trusted server code (Server Actions), and only
 * for operations that genuinely need elevated access (e.g. the Auth Admin
 * API for inviting users by email). Never expose this client or its key to
 * the browser.
 */
export function createSupabaseAdminClient() {
  const config = getSupabaseConfig();
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!config || !serviceRoleKey) {
    return null;
  }

  return createClient(config.url, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  });
}
