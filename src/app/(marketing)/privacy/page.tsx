import { AppLink } from "@/components/ui/AppLink";
import { ROUTES } from "@/lib/routes";

export default function PrivacyPage() {
  return (
    <section className="u-section">
      <div className="u-container u-stack">
        <p className="u-kicker">Legal</p>
        <h1 className="u-h2">Privacy policy</h1>
        <p className="u-lead">Full policy TBD — aligned to India’s Digital Personal Data Protection Act, 2023.</p>
        <AppLink href={ROUTES.home} className="u-btn u-btn--primary">
          Back to home
        </AppLink>
      </div>
    </section>
  );
}
