const CARDS = [
  {
    title: "Hidden mode & PIN",
    body: "On your home screen, U Mind can look like a calculator, notes or weather app — and open only with your PIN.",
    icon: "calc",
    accent: "sun",
  },
  {
    title: "One-tap quick exit",
    body: "Someone walks in? One tap and your screen becomes a plain calculator. Only your secret code brings you back.",
    icon: "eye",
    accent: "mint",
  },
  {
    title: "A recovery key, not an email",
    body: "12 private words are the only way back in. No OTPs, no contact details.",
    icon: "key",
    accent: "sun",
  },
  {
    title: "Just a name you pick",
    body: "Saathi and psychologists only ever see your alias and avatar — never a phone, email or real name.",
    icon: "user",
    accent: "lavender",
  },
  {
    title: "Camera off by default",
    body: "Video sessions start with your camera off. You choose what a psychologist sees — including an optional Saathi summary.",
    icon: "cam",
    accent: "mint",
  },
  {
    title: "A diary only you can read",
    body: "Entries are encrypted on your device before they sync. Admins never see chat text or diary content.",
    icon: "book",
    accent: "lavender",
  },
] as const;

function PrivacyIcon({ name }: { name: string }) {
  const props = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none" as const };
  switch (name) {
    case "eye":
      return (
        <svg {...props} aria-hidden>
          <path d="M3 12s3.5-6 9-6 9 6 9 6-3.5 6-9 6-9-6-9-6Z" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.6" />
          <path d="M4 20 20 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "key":
      return (
        <svg {...props} aria-hidden>
          <circle cx="8" cy="14" r="3.5" stroke="currentColor" strokeWidth="1.6" />
          <path d="M11 12.5 19 4.5M16 5.5l2.5 2.5M14.5 7l2 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "user":
      return (
        <svg {...props} aria-hidden>
          <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.6" />
          <path d="M5 19c1.5-3.5 4-5 7-5s5.5 1.5 7 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "cam":
      return (
        <svg {...props} aria-hidden>
          <rect x="3" y="7" width="14" height="11" rx="2" stroke="currentColor" strokeWidth="1.6" />
          <path d="m17 10 4-2v9l-4-2" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M5 19 19 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "book":
      return (
        <svg {...props} aria-hidden>
          <path d="M5 5.5A2.5 2.5 0 0 1 7.5 3H19v16H7.5A2.5 2.5 0 0 0 5 21.5V5.5Z" stroke="currentColor" strokeWidth="1.6" />
          <path d="M5 18.5A2.5 2.5 0 0 1 7.5 16H19" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
    default:
      return (
        <svg {...props} aria-hidden>
          <rect x="5" y="3" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="1.6" />
          <path d="M8 8h8M8 12h2M12 12h2M16 12h1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
  }
}

export function PrivacySection() {
  return (
    <section className="u-section u-privacy">
      <div className="u-container">
        <div className="u-privacy__head">
          <div>
            <p className="u-kicker" style={{ color: "var(--color-sun)" }}>
              Privacy, by design
            </p>
            <h2 className="u-h2 u-text-on-dark" style={{ maxWidth: 640 }}>
              We never know who you are. That&apos;s the whole point.
            </h2>
            <p className="u-lead" style={{ color: "#CBC3E3", maxWidth: 560 }}>
              Many people never ask for help because they&apos;re afraid someone will find out. U Mind
              is built so no one can — not your family, not your office, not even us.
            </p>
          </div>
          <div className="u-privacy__rings" aria-hidden />
        </div>

        <div className="u-privacy__grid">
          {CARDS.map((card) => (
            <article key={card.title} className="u-privacy-card">
              <span className={`u-privacy-card__icon u-privacy-card__icon--${card.accent}`}>
                <PrivacyIcon name={card.icon} />
              </span>
              <h3 className="u-privacy-card__title">{card.title}</h3>
              <p className="u-privacy-card__body">{card.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
