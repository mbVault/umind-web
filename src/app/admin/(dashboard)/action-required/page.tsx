import { ModulePlaceholder } from "@/admin/components/ModulePlaceholder";

export default function ActionRequiredPage() {
  return (
    <ModulePlaceholder
      title="Action required"
      description="Operational view of applicants needing admin attention (RESUBMIT, UPLOAD_DOC, CLARIFY, etc.)."
      phase="Phase A5"
      backendReady={[
        "applicantNextAction + applicantMessage on profiles",
        "POST .../applicant-action",
      ]}
      backendGaps={[
        "No dedicated action-required list API — filter psychologist profiles by applicantNextAction when implementing.",
        "Structured clarification response submission is incomplete on backend.",
      ]}
    />
  );
}
