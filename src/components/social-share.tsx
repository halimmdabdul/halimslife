"use client";

import { useState } from "react";

export function SocialShare({ title }: { title: string }) {
  const [copied, setCopied] = useState(false);

  function shareUrl(network: "facebook" | "x" | "linkedin" | "whatsapp") {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(title);
    const targets = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      x: `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
      whatsapp: `https://wa.me/?text=${text}%20${url}`,
    };

    window.open(targets[network], "_blank", "noopener,noreferrer");
  }

  async function copyLink() {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1800);
  }

  return (
    <div className="social-share">
      <span>Share করুন</span>
      <button type="button" onClick={() => shareUrl("facebook")}>
        Facebook
      </button>
      <button type="button" onClick={() => shareUrl("x")}>
        X
      </button>
      <button type="button" onClick={() => shareUrl("linkedin")}>
        LinkedIn
      </button>
      <button type="button" onClick={() => shareUrl("whatsapp")}>
        WhatsApp
      </button>
      <button type="button" onClick={copyLink}>
        {copied ? "Copied!" : "Copy link"}
      </button>
    </div>
  );
}
