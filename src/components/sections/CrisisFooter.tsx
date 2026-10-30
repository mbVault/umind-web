import { AppLink } from "@/components/ui/AppLink";
import { LANDING_ANCHORS, ROUTES } from "@/lib/routes";

export function CrisisFooter() {
  return (
    <>
      <section className="u-crisis-strip" aria-label="Crisis help">
        <div className="u-container u-crisis-strip__inner">
          <div className="u-row" style={{ gap: 12, alignItems: "flex-start" }}>
            <span className="u-crisis-strip__icon" aria-hidden>
              ◯
            </span>
            <p style={{ margin: 0, fontSize: 14, lineHeight: 1.5, color: "var(--color-ink)" }}>
              <strong>In crisis or feeling unsafe right now?</strong> U Mind is not an emergency
              service. Please call someone who can help immediately.
            </p>
          </div>
          <div className="u-row" style={{ gap: 10, marginTop: 12 }}>
            <a href="tel:14416" className="u-btn u-btn--crisis">
              Tele-MANAS 14416
            </a>
            <a href="tel:112" className="u-btn u-btn--crisis-outline">
              Emergency 112
            </a>
          </div>
        </div>
      </section>

      <footer className="u-footer">
        <div className="u-container u-footer__grid">
          <div>
            <p className="u-font-serif" style={{ fontSize: 20, fontWeight: 600, margin: "0 0 8px" }}>
              U Mind
            </p>
            <p className="u-caption">
              Saathi is an AI companion, not a doctor or a medical service.
            </p>
          </div>
          <div>
            <p className="u-footer__label">Product</p>
            <AppLink href={LANDING_ANCHORS.features} className="u-footer__link">
              Inside the app
            </AppLink>
            <AppLink href={LANDING_ANCHORS.pricing} className="u-footer__link">
              Pricing
            </AppLink>
            <AppLink href={LANDING_ANCHORS.faq} className="u-footer__link">
              FAQ
            </AppLink>
          </div>
          <div>
            <p className="u-footer__label">Company</p>
            <AppLink href={ROUTES.partner} className="u-footer__link">
              Partner with us
            </AppLink>
            <AppLink href={ROUTES.workplaces} className="u-footer__link">
              Workplaces &amp; colleges
            </AppLink>
            <AppLink href={ROUTES.privacy} className="u-footer__link">
              Privacy policy
            </AppLink>
            <AppLink href={ROUTES.terms} className="u-footer__link">
              Terms of use
            </AppLink>
          </div>
        </div>
        <div className="u-container">
          <p className="u-caption" style={{ marginTop: 24 }}>
            © 2026 U Mind
          </p>
        </div>
      </footer>
    </>
  );
}
