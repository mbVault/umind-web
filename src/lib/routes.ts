/**
 * Central route + in-page anchor map.
 * Always navigate with next/link `Link` or `useRouter` — never raw <a href> for app routes.
 * External tel:/mailto: links may use <a> (or Link with absolute URL).
 */

export const ROUTES = {
  home: "/",
  partner: "/partner",
  workplaces: "/workplaces",
  privacy: "/privacy",
  terms: "/terms",
  admin: "/admin",
  adminLogin: "/admin/login",
  adminApplications: "/admin/applications",
  adminDocuments: "/admin/documents",
  adminVerification: "/admin/verification",
  adminActionRequired: "/admin/action-required",
  adminPublication: "/admin/publication",
  adminPsychologists: "/admin/psychologists",
  adminSettingsUsers: "/admin/settings/users",
  adminSettingsAudit: "/admin/settings/audit-logs",
} as const;

/** Landing-page section anchors (SPA-style smooth scroll via Link href="/#id") */
export const LANDING_ANCHORS = {
  top: "/#top",
  how: "/#how",
  features: "/#features",
  unique: "/#unique",
  yours: "/#yours",
  her: "/#her",
  stages: "/#stages",
  experts: "/#experts",
  pricing: "/#pricing",
  faq: "/#faq",
} as const;

export const NAV_LINKS = [
  { label: "Inside the app", href: LANDING_ANCHORS.features },
  { label: "Only on U Mind", href: LANDING_ANCHORS.unique },
  { label: "Make it yours", href: LANDING_ANCHORS.yours },
  { label: "Her Health", href: LANDING_ANCHORS.her },
  { label: "For every age", href: LANDING_ANCHORS.stages },
  { label: "Psychologists", href: LANDING_ANCHORS.experts },
  { label: "Pricing", href: LANDING_ANCHORS.pricing },
  { label: "FAQ", href: LANDING_ANCHORS.faq },
] as const;

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];
