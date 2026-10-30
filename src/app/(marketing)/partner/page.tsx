import { AppLink } from "@/components/ui/AppLink";
import { ROUTES } from "@/lib/routes";

/** Placeholder — Partner with us supporting page (spec: to design). */
export default function PartnerPage() {
  return (
    <section className="u-section">
      <div className="u-container u-stack">
        <p className="u-kicker">For psychologists</p>
        <h1 className="u-h2">Partner with us</h1>
        <p className="u-lead">Page content TBD from the website supporting-pages design.</p>
        <AppLink href={ROUTES.home} className="u-btn u-btn--primary">
          Back to home
        </AppLink>
      </div>
    </section>
  );
}
