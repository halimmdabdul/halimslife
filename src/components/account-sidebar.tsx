import Link from "next/link";

type AccountSidebarProps = {
  displayName: string;
  email: string;
  active: "account" | "scholarship-support";
};

export function AccountSidebar({ displayName, email, active }: AccountSidebarProps) {
  return (
    <aside className="account-sidebar">
      <div className="account-avatar">
        <span>{displayName.charAt(0).toUpperCase()}</span>
        <div>
          <strong>{displayName}</strong>
          <small>{email}</small>
        </div>
      </div>
      <nav>
        <Link href="/account" aria-current={active === "account" ? "page" : undefined}>
          আমার Account
        </Link>
        <Link
          href="/account/scholarship-support"
          aria-current={active === "scholarship-support" ? "page" : undefined}
        >
          Scholarship Support
        </Link>
      </nav>
    </aside>
  );
}
