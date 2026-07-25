import Link from "next/link";

export function BrandLogo({ footer = false }: { footer?: boolean }) {
  return (
    <Link
      className={`brand-logo${footer ? " brand-logo-footer" : ""}`}
      href="/"
      aria-label="Halim's Life — homepage"
    >
      <svg
        className="brand-mark"
        viewBox="0 0 48 48"
        role="img"
        aria-hidden="true"
      >
        <rect
          className="brand-mark-background"
          x="1"
          y="1"
          width="46"
          height="46"
          rx="14"
        />
        <path className="brand-mark-stem" d="M15 13v22M33 13v22" />
        <path className="brand-mark-bridge" d="M15 24h18" />
        <circle className="brand-mark-dot" cx="38" cy="10" r="4.5" />
      </svg>
      <span className="brand-wordmark">
        Halim<span>.</span>
      </span>
    </Link>
  );
}
