import { AppLink } from "@/components/ui/AppLink";
import { ROUTES } from "@/lib/routes";

export default function TermsPage() {
  return (
    <section className="u-section">
      <div className="u-container u-stack">
        <p className="u-kicker">Legal</p>
        <h1 className="u-h2">Terms of use</h1>
        <p className="u-lead">Full terms TBD.</p>
        <AppLink href={ROUTES.home} className="u-btn u-btn--primary">
          Back to home
        </AppLink>
      </div>
    </section>
  );
}
