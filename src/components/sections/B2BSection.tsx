import { AppLink } from "@/components/ui/AppLink";
import { ROUTES } from "@/lib/routes";

export function B2BSection() {
  return (
    <section className="u-section" style={{ paddingTop: 0 }}>
      <div className="u-container">
        <div className="u-b2b">
          <div className="u-inside__copy">
            <p className="u-kicker" style={{ color: "var(--color-sun)" }}>
              For workplaces &amp; colleges
            </p>
            <h2 className="u-h2 u-text-on-dark">Care for your people — without ever knowing who.</h2>
            <p className="u-lead" style={{ color: "#E6E1FF" }}>
              Give every employee or student U Mind. They join with an access code and stay
              completely anonymous. You only see group totals, so you know where to help.
            </p>
            <ul className="u-check-list">
              {[
                "Only totals, only for groups of 10 or more",
                "Never names, chats, diaries or sessions",
                "Psychologist sessions at [ORG SESSION RATE]",
              ].map((t) => (
                <li key={t} className="u-check-item" style={{ color: "#E6E1FF" }}>
                  <span className="u-check" style={{ background: "var(--color-mint-tint)", color: "var(--color-mint-ink)" }}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                      <path d="M2.5 6.2 4.8 8.5 9.5 3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  {t}
                </li>
              ))}
            </ul>
            <AppLink href={ROUTES.workplaces} className="u-btn u-btn--sun">
              Talk to us about a plan
            </AppLink>
          </div>

          <aside className="u-b2b-mock" aria-label="Sample HR dashboard">
            <div className="u-row" style={{ justifyContent: "space-between", marginBottom: 16 }}>
              <p style={{ margin: 0, fontWeight: 800, fontSize: 13, letterSpacing: "0.04em" }}>
                WHAT HR SEES · SAMPLE
              </p>
              <p className="u-caption" style={{ margin: 0 }}>
                312 members
              </p>
            </div>
            <p className="u-caption" style={{ fontWeight: 700, marginBottom: 8 }}>
              Team mood
            </p>
            <div className="u-mood-bar" aria-hidden>
              <span style={{ flex: 1.2, background: "#5B5F99" }} />
              <span style={{ flex: 1.6, background: "#8FB8F5" }} />
              <span style={{ flex: 2, background: "#B4A8FF" }} />
              <span style={{ flex: 2.4, background: "#3DD0A0" }} />
              <span style={{ flex: 1.4, background: "#FFB938" }} />
            </div>
            <div className="u-row" style={{ gap: 8, marginTop: 8, marginBottom: 16, flexWrap: "wrap" }}>
              {["Heavy", "Low", "Okay", "Calm", "Bright"].map((m) => (
                <span key={m} className="u-caption">
                  {m}
                </span>
              ))}
            </div>
            <div className="u-row" style={{ gap: 12 }}>
              <div className="u-b2b-stat">
                <p className="u-caption" style={{ margin: 0 }}>
                  Top themes
                </p>
                <p style={{ margin: "4px 0 0", fontWeight: 700 }}>Workload, sleep</p>
              </div>
              <div className="u-b2b-stat">
                <p className="u-caption" style={{ margin: 0 }}>
                  Sessions used
                </p>
                <p style={{ margin: "4px 0 0", fontWeight: 700 }}>38 this month</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
