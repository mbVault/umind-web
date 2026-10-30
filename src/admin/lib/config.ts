/**
 * Public admin / staff API configuration.
 * apiOrigin is the SuperTokens apiDomain (no /api suffix).
 */
function trimSlash(value: string): string {
  return value.replace(/\/+$/, "");
}

export const API_ORIGIN = trimSlash(
  process.env.NEXT_PUBLIC_API_ORIGIN ?? "http://localhost:4000",
);

export const API_BASE_URL = trimSlash(
  process.env.NEXT_PUBLIC_API_BASE_URL ?? `${API_ORIGIN}/api`,
);

export const STAFF_API_PREFIX = "/v1/staff";

export const SUPERTOKENS_API_BASE_PATH =
  process.env.NEXT_PUBLIC_SUPERTOKENS_API_BASE_PATH ?? "/api/v1/staff/auth";

export const SUPERTOKENS_APP_NAME =
  process.env.NEXT_PUBLIC_SUPERTOKENS_APP_NAME ?? "U Mind Staff";

export const WEBSITE_DOMAIN = trimSlash(
  process.env.NEXT_PUBLIC_WEBSITE_DOMAIN ?? "http://localhost:3000",
);

export const ADMIN_ROUTES = {
  root: "/admin",
  login: "/admin/login",
  applications: "/admin/applications",
  documents: "/admin/documents",
  verification: "/admin/verification",
  actionRequired: "/admin/action-required",
  publication: "/admin/publication",
  psychologists: "/admin/psychologists",
  settingsUsers: "/admin/settings/users",
  settingsAudit: "/admin/settings/audit-logs",
} as const;

export type AdminNavItem = {
  href: string;
  label: string;
  /** Optional permission; if set, link is hidden when missing. */
  permission?: string;
};

export type AdminNavSection = {
  title: string;
  items: AdminNavItem[];
};

export const ADMIN_NAV_SECTIONS: AdminNavSection[] = [
  {
    title: "Main",
    items: [{ href: ADMIN_ROUTES.root, label: "Dashboard" }],
  },
  {
    title: "Psychologist Management",
    items: [
      { href: ADMIN_ROUTES.applications, label: "Applications", permission: "psychologist.read" },
      { href: ADMIN_ROUTES.documents, label: "Documents", permission: "verification_documents.read" },
      { href: ADMIN_ROUTES.verification, label: "Background Verification", permission: "psychologist.verify" },
      { href: ADMIN_ROUTES.actionRequired, label: "Action Required", permission: "psychologist.read" },
      { href: ADMIN_ROUTES.publication, label: "Publication", permission: "psychologist.publish" },
      { href: ADMIN_ROUTES.psychologists, label: "Psychologist Directory", permission: "psychologist.read" },
    ],
  },
  {
    title: "Administration",
    items: [
      { href: ADMIN_ROUTES.settingsUsers, label: "Admin Users & Roles", permission: "admin_memberships.manage" },
      { href: ADMIN_ROUTES.settingsAudit, label: "Audit Logs", permission: "audit_logs.read" },
    ],
  },
];

export function applicationDetailPath(id: string): string {
  return `${ADMIN_ROUTES.applications}/${id}`;
}

export function psychologistDetailPath(id: string): string {
  return `${ADMIN_ROUTES.psychologists}/${id}`;
}
