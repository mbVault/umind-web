import { AppLink } from "@/components/ui/AppLink";
import { LANDING_ANCHORS } from "@/lib/routes";

function LockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
      <rect x="3" y="6" width="8" height="6.5" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M5 6V4.5a2 2 0 0 1 4 0V6"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function TrustIcon({ variant }: { variant: "shield" | "chat" | "badge" }) {
  const bg =
    variant === "shield"
      ? "var(--color-primary-tint)"
      : variant === "chat"
        ? "var(--color-mint-tint)"
        : "var(--color-coral-tint)";
  const fg =
    variant === "shield"
      ? "var(--color-primary)"
      : variant === "chat"
        ? "var(--color-mint-ink)"
        : "var(--color-coral-ink)";

  return (
    <span className="u-icon-tile" style={{ width: 36, height: 36, background: bg, color: fg }}>
      {variant === "shield" && (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
          <path
            d="M9 2.5 14.5 5v4.2c0 3.4-2.3 5.6-5.5 6.8C5.8 14.8 3.5 12.6 3.5 9.2V5L9 2.5Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {variant === "chat" && (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
          <path
            d="M3.5 12.5V5.5A2 2 0 0 1 5.5 3.5h7A2 2 0 0 1 14.5 5.5v5A2 2 0 0 1 12.5 12.5H7l-3.5 2v-2Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      )}
      {variant === "badge" && (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
          <circle cx="9" cy="8" r="4.5" stroke="currentColor" strokeWidth="1.5" />
          <path d="M6.5 15.5 9 13.5l2.5 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      )}
    </span>
  );
}

function PhoneMock() {
  return (
    <div className="u-phone" aria-hidden>
      <div className="u-phone__screen">
        <div className="u-phone__notch" />
        <p className="u-caption" style={{ marginBottom: 4 }}>
          Good evening,
        </p>
        <p className="u-font-serif" style={{ fontSize: 22, fontWeight: 600, margin: "0 0 16px" }}>
          Neela
        </p>
        <div className="u-card" style={{ padding: 14, marginBottom: 12 }}>
          <p className="u-caption" style={{ fontWeight: 700, marginBottom: 10 }}>
            How&apos;s your mind today?
          </p>
          <div className="u-row" style={{ gap: 8, justifyContent: "space-between" }}>
            {["#5B5F99", "#8FB8F5", "#B4A8FF", "#3DD0A0", "#FFB938"].map((c) => (
              <span
                key={c}
                style={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  background: c,
                  border: c === "#3DD0A0" ? "2.5px solid var(--color-ink)" : "none",
                }}
              />
            ))}
          </div>
        </div>
        <div
          className="u-card"
          style={{
            padding: 14,
            background: "var(--color-primary)",
            borderColor: "transparent",
            color: "#fff",
            marginBottom: 12,
          }}
        >
          <p className="u-caption" style={{ color: "#E6E1FF", fontWeight: 800, letterSpacing: "0.06em" }}>
            SAATHI
          </p>
          <p className="u-font-serif" style={{ fontSize: 18, fontWeight: 600, margin: "4px 0 10px" }}>
            Want to talk it out?
          </p>
          <span
            className="u-btn u-btn--sun"
            style={{ height: 36, padding: "0 14px", fontSize: 13, pointerEvents: "none" }}
          >
            Start talking
          </span>
        </div>
        <div className="u-row" style={{ gap: 8 }}>
          <div
            style={{
              flex: 1,
              height: 72,
              borderRadius: 16,
              background: "var(--color-coral-tint)",
            }}
          />
          <div
            style={{
              flex: 1,
              height: 72,
              borderRadius: 16,
              background: "var(--color-mint-tint)",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <section id="top" className="u-hero u-section" style={{ paddingTop: 48 }}>
      <div className="u-container u-hero__grid">
        <div className="u-hero__copy">
          <span className="u-badge">
            <LockIcon />
            100% anonymous · Hindi &amp; English
          </span>

          <h1 className="u-h1">
            A quiet place for your <span className="u-accent-italic">mind.</span>
          </h1>

          <p className="u-lead">
            Talk it out with Saathi, our AI companion. Listen to calming sessions made for your stage
            of life. Or reach a real psychologist — without ever telling anyone who you are.
          </p>

          <div className="u-hero__actions">
            <AppLink href={LANDING_ANCHORS.pricing} className="u-btn u-btn--primary">
              Try the app demo
            </AppLink>
            <AppLink href={LANDING_ANCHORS.pricing} className="u-btn u-btn--secondary">
              7 days free · see plans
            </AppLink>
          </div>

          <ul className="u-trust-list">
            <li className="u-trust-item">
              <TrustIcon variant="shield" />
              No phone, email or real name
            </li>
            <li className="u-trust-item">
              <TrustIcon variant="chat" />
              AI companion 24×7 in Hindi &amp; English
            </li>
            <li className="u-trust-item">
              <TrustIcon variant="badge" />
              RCI-verified psychologists
            </li>
          </ul>
        </div>

        <div className="u-hero__visual">
          <div className="u-hero__glow" />
          <PhoneMock />
          <aside className="u-chat-float">
            <p className="u-chat-float__label u-chat-float__label--you">You</p>
            <p className="u-chat-float__text">Kal deadline hai aur neend nahi aa rahi.</p>
            <p className="u-chat-float__label u-chat-float__label--saathi">Saathi</p>
            <p className="u-chat-float__text">
              That&apos;s a lot to carry. Let&apos;s calm your body first — try this 4-min breath?
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
