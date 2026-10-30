import { AppLink } from "@/components/ui/AppLink";
import { ROUTES } from "@/lib/routes";

const PROMISES = [
  { icon: "shield", text: "Verified with the Rehabilitation Council of India." },
  { icon: "chat", text: "Hindi, English and regional languages." },
  { icon: "clock", text: "Evening and weekend slots · ₹499 per 40-minute session." },
  { icon: "people", text: "Choose a woman or a man psychologist." },
  { icon: "list", text: "Prep notes before, practice tasks after." },
];

const PROFILES = [
  {
    initials: "AR",
    name: "Dr. Ananya Rao",
    role: "Clinical Psychologist · Stress, burnout",
    langs: "Hindi, English",
    years: "9 years experience",
    slot: "Today, 7:30 PM",
    bg: "#FFE1DB",
  },
  {
    initials: "KM",
    name: "Kabir Mehta",
    role: "Counselling Psychologist · Anxiety, sleep",
    langs: "English",
    years: "6 years experience",
    slot: "Tomorrow, 8:00 PM",
    bg: "#D9F5EA",
  },
  {
    initials: "FS",
    name: "Dr. Fatima Sheikh",
    role: "Clinical Psychologist · Teens, relationships",
    langs: "Hindi, English",
    years: "11 years experience",
    slot: "Sat, 11:00 AM",
    bg: "#DCEBFF",
  },
];

function PromiseIcon({ name }: { name: string }) {
  const p = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none" as const };
  if (name === "shield") {
    return (
      <svg {...p} aria-hidden>
        <path d="M12 3 19 6v5c0 5-3.2 8.2-7 9.8C8.2 19.2 5 16 5 11V6l7-3Z" stroke="currentColor" strokeWidth="1.6" />
      </svg>
    );
  }
  if (name === "clock") {
    return (
      <svg {...p} aria-hidden>
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
        <path d="M12 8v5l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }
  if (name === "people") {
    return (
      <svg {...p} aria-hidden>
        <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="16" cy="10" r="2.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M4 18c1.2-3 3.2-4.5 5-4.5S12.8 15 14 18M14 18c.6-2 1.8-3 3.2-3 1.2 0 2.3.8 2.8 3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }
  if (name === "list") {
    return (
      <svg {...p} aria-hidden>
        <path d="M9 7h10M9 12h10M9 17h10M5 7h.01M5 12h.01M5 17h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg {...p} aria-hidden>
      <path d="M5 15V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H9l-4 3v-3Z" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function ExpertsSection() {
  return (
    <section id="experts" className="u-section">
      <div className="u-container u-yours-grid">
        <div className="u-inside__copy">
          <p className="u-kicker" style={{ color: "var(--color-coral-ink)" }}>
            When you want a human
          </p>
          <h2 className="u-h2">
            Real psychologists. Still just &lsquo;Neela&rsquo; to them.
          </h2>
          <p className="u-lead">
            Every expert is RCI-verified. Book a 40-minute chat, voice or video session — paid
            separately, no packages. Sample profiles shown for illustration.
          </p>

          <ul className="u-check-list">
            {PROMISES.map((p) => (
              <li key={p.text} className="u-check-item" style={{ color: "var(--color-ink)" }}>
                <span
                  className="u-check"
                  style={{ background: "var(--color-coral-tint)", color: "var(--color-coral-ink)" }}
                >
                  <PromiseIcon name={p.icon} />
                </span>
                {p.text}
              </li>
            ))}
          </ul>

          <div className="u-partner-card">
            <p className="u-font-serif" style={{ fontSize: 22, fontWeight: 600, color: "#fff", margin: "0 0 8px" }}>
              Are you a psychologist?
            </p>
            <p className="u-body" style={{ color: "#CFC7FF", marginBottom: 16 }}>
              Reach people who would never walk into a clinic. You keep 70% of every session.
            </p>
            <AppLink href={ROUTES.partner} className="u-btn u-btn--sun">
              Partner with us
            </AppLink>
          </div>
        </div>

        <div className="u-stack" style={{ gap: 14 }}>
          {PROFILES.map((p) => (
            <article key={p.name} className="u-expert-card">
              <div className="u-row" style={{ gap: 14, alignItems: "flex-start" }}>
                <span
                  className="u-font-serif"
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: "50%",
                    background: p.bg,
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: 600,
                    flexShrink: 0,
                  }}
                >
                  {p.initials}
                </span>
                <div style={{ flex: 1 }}>
                  <p style={{ margin: 0, fontWeight: 800, fontSize: 16 }}>{p.name}</p>
                  <p className="u-caption" style={{ margin: "2px 0" }}>
                    {p.role}
                  </p>
                  <p className="u-caption">{p.langs}</p>
                  <span className="u-pill" style={{ marginTop: 8, background: "var(--color-sun-tint)", color: "#8a5a12" }}>
                    {p.years}
                  </span>
                </div>
              </div>
              <div className="u-row" style={{ justifyContent: "space-between", marginTop: 14 }}>
                <p style={{ margin: 0, fontWeight: 700, fontSize: 13, color: "var(--color-primary)" }}>
                  {p.slot}
                </p>
                <p className="u-caption" style={{ margin: 0 }}>
                  ₹499 · 40 min · Chat / Voice / Video
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
