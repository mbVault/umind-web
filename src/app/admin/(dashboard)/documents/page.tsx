import { ModulePlaceholder } from "@/admin/components/ModulePlaceholder";

export default function DocumentsPage() {
  return (
    <ModulePlaceholder
      title="Documents"
      description="Review professional documents after HR approval."
      phase="Phase A3"
      backendReady={[
        "GET /admin/psychologists/:id/documents",
        "POST .../documents/:documentId/view-url",
        "POST .../documents/:id/reject { applicantSafeReason }",
      ]}
      backendGaps={[
        "No global document review queue API — must aggregate per psychologist or add a backend queue.",
      ]}
    />
  );
}
