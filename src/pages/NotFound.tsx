import { useEffect } from "react";
import { Link } from "wouter";
import SiteLayout from "@/components/SiteLayout";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  useEffect(() => {
    document.title = "পেজ পাওয়া যায়নি — Halim";
  }, []);

  return (
    <SiteLayout>
      <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
        <h1 className="font-display text-3xl font-bold tracking-tight">পেজ পাওয়া যায়নি</h1>
        <p className="mt-3 text-muted-foreground">আপনি যে পেজটি খুঁজছেন সেটা হয়তো মুছে ফেলা হয়েছে বা ঠিকানা ভুল হয়েছে।</p>
        <div className="mt-6">
          <Link href="/">
            <Button>হোমে ফিরে যান</Button>
          </Link>
        </div>
      </div>
    </SiteLayout>
  );
}
