"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { UmindLogo } from "@/components/brand/UmindLogo";
import { useAdminAuth } from "../auth/AdminAuthProvider";
import { ADMIN_NAV_SECTIONS, ADMIN_ROUTES } from "../lib/config";

function pageTitle(pathname: string): string {
  if (pathname === ADMIN_ROUTES.root) return "Dashboard";
  for (const section of ADMIN_NAV_SECTIONS) {
    for (const item of section.items) {
      if (item.href === ADMIN_ROUTES.root) continue;
      if (pathname === item.href || pathname.startsWith(`${item.href}/`)) {
        return item.label;
      }
    }
  }
  return "Admin";
}

export function AdminShell({ children }: { children: React.ReactNode }) {
  const { me, permissions, signOut } = useAdminAuth();
  const pathname = usePathname();
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="admin-app">
      <aside className={`admin-sidebar${navOpen ? " admin-sidebar--open" : ""}`}>
        <Link href={ADMIN_ROUTES.root} className="admin-sidebar__brand" onClick={() => setNavOpen(false)}>
          <UmindLogo size={28} />
          <span>U Mind Admin</span>
        </Link>

        <nav className="admin-sidebar__nav" aria-label="Admin">
          {ADMIN_NAV_SECTIONS.map((section) => {
            const items = section.items.filter(
              (item) => !item.permission || permissions.includes(item.permission),
            );
            if (items.length === 0) return null;
            return (
              <div key={section.title} className="admin-sidebar__section">
                <p className="admin-sidebar__section-title">{section.title}</p>
                {items.map((item) => {
                  const active =
                    item.href === ADMIN_ROUTES.root
                      ? pathname === ADMIN_ROUTES.root
                      : pathname === item.href || pathname.startsWith(`${item.href}/`);
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={
                        active ? "admin-nav-link admin-nav-link--active" : "admin-nav-link"
                      }
                      onClick={() => setNavOpen(false)}
                    >
                      {item.label}
                    </Link>
                  );
                })}
              </div>
            );
          })}
        </nav>

        <div className="admin-sidebar__foot">
          <p className="admin-sidebar__email">{me?.email ?? "Admin"}</p>
          <button
            type="button"
            className="u-btn u-btn--ghost admin-sidebar__signout"
            onClick={() => void signOut()}
          >
            Sign out
          </button>
        </div>
      </aside>

      {navOpen ? (
        <button
          type="button"
          className="admin-sidebar__backdrop"
          aria-label="Close menu"
          onClick={() => setNavOpen(false)}
        />
      ) : null}

      <div className="admin-app__main">
        <header className="admin-topbar">
          <button
            type="button"
            className="admin-topbar__menu u-btn u-btn--ghost"
            onClick={() => setNavOpen((v) => !v)}
            aria-label="Open navigation"
          >
            Menu
          </button>
          <div className="admin-topbar__title">
            <p className="admin-topbar__eyebrow">Admin</p>
            <h1 className="admin-topbar__heading">{pageTitle(pathname)}</h1>
          </div>
          <div className="admin-topbar__profile">
            <span className="admin-topbar__email">{me?.email ?? ""}</span>
          </div>
        </header>
        <div className="admin-app__content">{children}</div>
      </div>
    </div>
  );
}
