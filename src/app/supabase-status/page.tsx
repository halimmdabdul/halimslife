import { connection } from "next/server";

import { createServerSupabaseClient } from "@/lib/supabase/server";

export const metadata = {
  title: "Supabase status | Halim's Life",
};

export default async function SupabaseStatusPage() {
  await connection();

  const supabase = await createServerSupabaseClient();

  if (!supabase) {
    return (
      <StatusCard
        title="Supabase needs credentials"
        description="Replace the placeholder values in .env.local, restart the development server, and refresh this page."
        tone="warning"
      />
    );
  }

  const { count, error } = await supabase
    .from("posts")
    .select("*", { count: "exact", head: true });

  if (error) {
    return (
      <StatusCard
        title="Supabase is reachable, but the posts table is not ready"
        description={`${error.message} Run the SQL migration in supabase/migrations/20260725000000_create_posts.sql from the Supabase SQL Editor.`}
        tone="warning"
      />
    );
  }

  return (
    <StatusCard
      title="Supabase is connected"
      description={`The posts table is available and currently contains ${count ?? 0} rows.`}
      tone="success"
    />
  );
}

function StatusCard({
  title,
  description,
  tone,
}: {
  title: string;
  description: string;
  tone: "success" | "warning";
}) {
  const indicator = tone === "success" ? "bg-emerald-500" : "bg-amber-500";

  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 px-6 text-zinc-50">
      <section className="w-full max-w-xl rounded-2xl border border-white/10 bg-white/5 p-8 shadow-2xl">
        <div className="mb-5 flex items-center gap-3">
          <span className={`h-3 w-3 rounded-full ${indicator}`} />
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">
            Database status
          </p>
        </div>
        <h1 className="text-3xl font-semibold tracking-tight">{title}</h1>
        <p className="mt-4 leading-7 text-zinc-300">{description}</p>
      </section>
    </main>
  );
}
