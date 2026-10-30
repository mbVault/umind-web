const FEATURES = [
  {
    tone: "mint" as const,
    title: "Know your mind type",
    body: "A 1-minute Ayurvedic Prakriti check — Vata, Pitta or Kapha — then daily practices like Anulom-Vilom, Sheetali and Bhramari, chosen for you.",
    icon: "leaf",
  },
  {
    tone: "lavender" as const,
    title: "Hidden mode & quick exit",
    body: "Disguise U Mind as a calculator, notes or weather app, add a PIN, and hide it in one tap. Made for shared phones.",
    icon: "calc",
  },
  {
    tone: "sun" as const,
    title: "Check-ins at life’s big moments",
    body: "Saathi reaches out before board results, in appraisal season, around festivals and on long evenings — matched to your stage of life.",
    icon: "bell",
  },
  {
    tone: "peach" as const,
    title: "Help me say it",
    body: "Words for hard talks with parents, partner, in-laws or your boss — gentle or direct. Practise with Saathi before the real conversation.",
    icon: "chat",
  },
  {
    tone: "dashed" as const,
    title: "A letter you’ll never send",
    body: "Write what you can’t say out loud. Keep it private, burn it digitally, or share a softened version with Saathi.",
    icon: "mail",
  },
  {
    tone: "rose" as const,
    title: "Worried about someone?",
    body: "Tools to support a friend or family member without taking over — check-in scripts, boundaries and when to escalate.",
    icon: "heart",
  },
  {
    tone: "sky" as const,
    title: "Session prep & after-care",
    body: "Before a psychologist session, gather what matters. Afterward, get recommended audios, a follow-up nudge and a short note.",
    icon: "list",
  },
  {
    tone: "night" as const,
    title: "U Mind on call",
    body: "When you need a human fast, jump to the earliest verified psychologist slot — still anonymous, still on your terms.",
    icon: "phone",
  },
];

function FeatureIcon({ name }: { name: string }) {
  const common = { width: 22, height: 22, viewBox: "0 0 24 24", fill: "none" as const };
  switch (name) {
    case "leaf":
      return (
        <svg {...common} aria-hidden>
          <path d="M5 19c8 0 14-6 14-14-8 0-14 6-14 14Z" stroke="currentColor" strokeWidth="1.6" />
          <path d="M5 19c2-6 8-12 14-14" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
    case "calc":
      return (
        <svg {...common} aria-hidden>
          <rect x="5" y="3" width="14" height="18" rx="2" stroke="currentColor" strokeWidth="1.6" />
          <path d="M8 8h8M8 12h2M12 12h2M16 12h1M8 16h2M12 16h2M16 16h1" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "bell":
      return (
        <svg {...common} aria-hidden>
          <path d="M6 16V11a6 6 0 1 1 12 0v5l1.5 2H4.5L6 16Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          <path d="M10 20a2 2 0 0 0 4 0" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "chat":
      return (
        <svg {...common} aria-hidden>
          <path d="M5 16V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H9l-4 3v-3Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        </svg>
      );
    case "mail":
      return (
        <svg {...common} aria-hidden>
          <rect x="3" y="6" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
          <path d="m4 8 8 5 8-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "heart":
      return (
        <svg {...common} aria-hidden>
          <path
            d="M12 19s-7-4.2-7-9a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 4.8-7 9-7 9Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "list":
      return (
        <svg {...common} aria-hidden>
          <path d="M9 7h11M9 12h11M9 17h11M5 7h.01M5 12h.01M5 17h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    default:
      return (
        <svg {...common} aria-hidden>
          <path d="M7 4h10v16l-5-3-5 3V4Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          <circle cx="12" cy="10" r="2" stroke="currentColor" strokeWidth="1.6" />
        </svg>
      );
  }
}

export function OnlyOnUmindSection() {
  return (
    <section id="unique" className="u-section">
      <div className="u-container">
        <div className="u-section-head" style={{ maxWidth: 760, marginBottom: 40 }}>
          <h2 className="u-h2">Things you won&apos;t find in other mental-health apps.</h2>
          <p className="u-lead">
            Built for Indian homes, shared phones, joint families and every stage of life — with the
            wisdom of Ayurveda alongside modern psychology.
          </p>
        </div>

        <div className="u-unique-grid">
          {FEATURES.map((f) => (
            <article key={f.title} className={`u-unique-card u-unique-card--${f.tone}`}>
              <span className="u-unique-card__icon">
                <FeatureIcon name={f.icon} />
              </span>
              <h3 className="u-unique-card__title">{f.title}</h3>
              <p className="u-unique-card__body">{f.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
