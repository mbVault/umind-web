import { ModulePlaceholder } from "@/admin/components/ModulePlaceholder";

export default function PsychologistsDirectoryPage() {
  return (
    <ModulePlaceholder
      title="Psychologist directory"
      description="Operational directory across HR, verification, and publication states."
      phase="Phase A6"
      backendReady={[
        "GET /admin/psychologists (search, publicationStatus, pagination)",
        "Detail + documents + checks on same workspace as applications",
      ]}
    />
  );
}
