import { BrandLogo } from "@/components/brand-logo";
import { PublicAuthLink } from "@/components/public-auth-link";
import { SiteNavigation } from "@/components/site-navigation";
import { SiteControls } from "@/components/site-preferences";

export function SiteHeader() {
  return (
    <header className="topbar" id="top">
      <BrandLogo />
      <SiteNavigation />
      <div className="header-actions">
        <SiteControls />
        <PublicAuthLink />
      </div>
    </header>
  );
}
