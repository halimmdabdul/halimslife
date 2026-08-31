import Link from "next/link";

import { TranslatedText } from "@/components/site-preferences";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export async function PublicAuthLink() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = (await supabase?.auth.getUser()) ?? { data: { user: null } };

  return (
    <Link className="nav-contact" href={user ? "/account" : "/login"}>
      {user ? (
        <TranslatedText bn="আমার Account" en="My account" ja="マイページ" />
      ) : (
        <TranslatedText bn="Login" en="Login" ja="ログイン" />
      )}
    </Link>
  );
}
