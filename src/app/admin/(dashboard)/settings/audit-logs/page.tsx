import { ModulePlaceholder } from "@/admin/components/ModulePlaceholder";

export default function AuditLogsPage() {
  return (
    <ModulePlaceholder
      title="Audit logs"
      description="Traceable admin actions from AdminAuditLog."
      phase="Phase A6"
      backendReady={["GET /admin/audit-logs (page, pageSize, action)"]}
    />
  );
}