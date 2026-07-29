"use client";

import { useState } from "react";

export function SocialShare({ title }: { title: string }) {
  const [copyStatus, setCopyStatus] = useState<"idle" | "copied" | "error">("idle");

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
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(window.location.href);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = window.location.href;
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.select();
        const copied = document.execCommand("copy");
        textArea.remove();
        if (!copied) throw new Error("Copy failed");
      }
      setCopyStatus("copied");
    } catch {
      setCopyStatus("error");
    }
    window.setTimeout(() => setCopyStatus("idle"), 2200);
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
        {copyStatus === "copied"
          ? "Copied!"
          : copyStatus === "error"
            ? "Copy failed"
            : "Copy link"}
      </button>
      <div className="sr-only" aria-live="polite">
        {copyStatus === "copied"
          ? "Link copied to clipboard."
          : copyStatus === "error"
            ? "The link could not be copied."
            : ""}
      </div>
    </div>
  );
}
