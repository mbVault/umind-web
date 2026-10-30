import { ModulePlaceholder } from "@/admin/components/ModulePlaceholder";

export default function PublicationPage() {
  return (
    <ModulePlaceholder
      title="Publication"
      description="Publish VERIFIED_UNPUBLISHED psychologists to LIVE (bookable / Main tabs)."
      phase="Phase A5"
      backendReady={[
        "GET /admin/psychologists?publicationStatus=VERIFIED_UNPUBLISHED",
        "POST .../publish",
        "suspend / reactivate",
      ]}
    />
  );
}
