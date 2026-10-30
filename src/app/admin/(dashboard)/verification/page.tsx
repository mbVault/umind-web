import { ModulePlaceholder } from "@/admin/components/ModulePlaceholder";

export default function VerificationPage() {
  return (
    <ModulePlaceholder
      title="Background verification"
      description="IDENTITY, RCI, DEGREE, YEARS_OF_EXPERIENCE checks — distinct from final BGV rejection."
      phase="Phase A4"
      backendReady={[
        "Verification start / decide routes",
        "POST .../final-bgv-reject { applicantSafeReason }",
        "NEEDS_ATTENTION is clarification, not final failure",
      ]}
      backendGaps={["No cross-applicant verification queue endpoint."]}
    />
  );
}
