import { ModulePlaceholder } from "@/admin/components/ModulePlaceholder";

export default async function ApplicationDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <ModulePlaceholder
      title="Application workspace"
      description={`Reusable detail for psychologist ${id}. Overview, documents, verification, HR decision, and audit.`}
      phase="Phase A2"
      backendReady={[
        "GET /admin/psychologists/:id",
        "GET /admin/psychologists/:id/documents",
        "Verification check routes",
        "HR approve / reject / final-bgv-reject",
      ]}
    />
  );
}
