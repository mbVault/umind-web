import { ModulePlaceholder } from "@/admin/components/ModulePlaceholder";

export default function AdminUsersPage() {
  return (
    <ModulePlaceholder
      title="Admin users & roles"
      description="Memberships, invitations, and role assignment from seeded RBAC."
      phase="Phase A6"
      backendReady={[
        "GET /admin/members",
        "POST /admin/members/invitations",
        "PATCH /admin/members/:id/roles",
        "POST /admin/members/:id/revoke",
      ]}
    />
  );
}
