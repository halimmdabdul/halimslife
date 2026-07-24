import Link from "next/link";

import { createServerSupabaseClient } from "@/lib/supabase/server";

export async function PublicAuthLink() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = (await supabase?.auth.getUser()) ?? { data: { user: null } };

  return (
    <Link className="nav-contact" href={user ? "/account" : "/login"}>
      {user ? "আমার Account" : "Login"}
    </Link>
  );
}
