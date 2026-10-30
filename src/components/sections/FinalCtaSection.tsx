import { AppLink } from "@/components/ui/AppLink";
import { LANDING_ANCHORS } from "@/lib/routes";

export function FinalCtaSection() {
  return (
    <section className="u-section" style={{ paddingBottom: 40 }}>
      <div className="u-container">
        <div className="u-final-cta">
          <h2 className="u-font-serif u-final-cta__title">Mann mein kuch hai?</h2>
          <p className="u-lead u-text-on-dark" style={{ maxWidth: 480, marginInline: "auto" }}>
            Say it to someone who&apos;ll listen — without saying who you are.
          </p>
          <div className="u-row" style={{ justifyContent: "center", gap: 12, marginTop: 8 }}>
            <AppLink href={LANDING_ANCHORS.pricing} className="u-btn u-btn--sun">
              Try the app demo
            </AppLink>
            <AppLink href={LANDING_ANCHORS.pricing} className="u-btn u-btn--outline-light">
              7 days free
            </AppLink>
          </div>
          <p className="u-caption" style={{ color: "#E6E1FF", marginTop: 16 }}>
            Coming soon on Android &amp; iOS
          </p>
        </div>
      </div>
    </section>
  );
}
