import { AppLink } from "@/components/ui/AppLink";
import { ROUTES } from "@/lib/routes";

/** Placeholder — workplaces & colleges enquiry (spec: to design). */
export default function WorkplacesPage() {
  return (
    <section className="u-section">
      <div className="u-container u-stack">
        <p className="u-kicker">For workplaces &amp; colleges</p>
        <h1 className="u-h2">Talk to us about a plan</h1>
        <p className="u-lead">Enquiry form coming soon. Organisations see totals only — never names.</p>
        <AppLink href={ROUTES.home} className="u-btn u-btn--primary">
          Back to home
        </AppLink>
      </div>
    </section>
  );
}
