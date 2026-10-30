"use client";

import { UmindLogo } from "@/components/brand/UmindLogo";
import { AppLink } from "@/components/ui/AppLink";
import { LANDING_ANCHORS, NAV_LINKS } from "@/lib/routes";

export function SiteHeader() {
  return (
    <header className="u-header">
      <div
        className="u-container u-row"
        style={{ justifyContent: "space-between", minHeight: 72, gap: 20 }}
      >
        <AppLink href={LANDING_ANCHORS.top} className="u-row" style={{ gap: 10 }}>
          <UmindLogo size={28} />
          <span className="u-font-serif" style={{ fontSize: 20, fontWeight: 600, color: "var(--color-ink)" }}>
            U Mind
          </span>
        </AppLink>

        <nav className="u-nav-desktop u-row" aria-label="Primary" style={{ gap: 18 }}>
          {NAV_LINKS.map((item) => (
            <AppLink key={item.href} href={item.href} className="u-nav-link">
              {item.label}
            </AppLink>
          ))}
        </nav>

        <AppLink href={LANDING_ANCHORS.pricing} className="u-btn u-btn--primary">
          Try the app
        </AppLink>
      </div>
    </header>
  );
}
