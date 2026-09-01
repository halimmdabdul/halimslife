import { createSupabaseAdminClient } from "@/lib/supabase/admin";

export const dynamic = "force-dynamic";

function page(title: string, message: string) {
  return `<!doctype html>
<html lang="bn">
  <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>${title}</title></head>
  <body style="margin:0;min-height:100vh;display:flex;align-items:center;justify-content:center;background:#f5f1e8;color:#102a43;font-family:Arial,'Noto Sans Bengali',sans-serif;text-align:center;padding:24px;">
    <div style="max-width:420px;">
      <h1 style="font-size:22px;margin:0 0 12px;">${title}</h1>
      <p style="color:#637785;font-size:14px;line-height:1.7;margin:0 0 20px;">${message}</p>
      <a href="https://halimslife.com/" style="display:inline-block;padding:12px 20px;border-radius:8px;background:#087255;color:#fff;font-size:13px;font-weight:700;text-decoration:none;">Halim's Life-এ ফিরে যান</a>
    </div>
  </body>
</html>`;
}

export async function GET(request: Request) {
  const userId = new URL(request.url).searchParams.get("u");
  const uuidPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

  if (!userId || !uuidPattern.test(userId)) {
    return new Response(page("Link সঠিক নয়", "এই unsubscribe link-টি সঠিক নয় বা মেয়াদোত্তীর্ণ।"), {
      status: 400,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }

  const supabase = createSupabaseAdminClient();
  if (!supabase) {
    return new Response(page("সাময়িক সমস্যা", "এখন unsubscribe করা যাচ্ছে না। একটু পরে আবার চেষ্টা করুন।"), {
      status: 500,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }

  const { error } = await supabase
    .from("profiles")
    .update({ weekly_digest_opt_out: true })
    .eq("id", userId);

  if (error) {
    return new Response(page("সাময়িক সমস্যা", "Unsubscribe করা যায়নি। একটু পরে আবার চেষ্টা করুন।"), {
      status: 500,
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }

  return new Response(
    page("Unsubscribe সম্পন্ন", "আপনি আর weekly scholarship pick email পাবেন না। যেকোনো সময় আবার চাইলে আমাদের জানাতে পারেন।"),
    { status: 200, headers: { "Content-Type": "text/html; charset=utf-8" } },
  );
}
