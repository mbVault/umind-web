import { ModulePlaceholder } from "@/admin/components/ModulePlaceholder";

export default function ApplicationsPage() {
  return (
    <ModulePlaceholder
      title="Applications"
      description="Central psychologist application queue with HR decisions."
      phase="Phase A2"
      backendReady={[
        "GET /admin/psychologists/hr-queue",
        "GET /admin/psychologists",
        "POST .../hr-approve",
        "POST .../hr-reject { reason, allowResubmission }",
      ]}
      backendGaps={[
        "No single list filter for all HR statuses in one query — combine directory + hr-queue or extend list filters.",
      ]}
    />
  );
}
