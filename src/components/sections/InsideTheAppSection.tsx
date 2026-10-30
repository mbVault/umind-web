"use client";

import { useState } from "react";

type TabId = "saathi" | "listen" | "diary" | "psych";

const TABS: { id: TabId; label: string }[] = [
  { id: "saathi", label: "Saathi AI" },
  { id: "listen", label: "Listen" },
  { id: "diary", label: "Diary & mood" },
  { id: "psych", label: "Psychologists" },
];

const TAB_CONTENT: Record<
  TabId,
  {
    kicker: string;
    kickerColor: string;
    title: string;
    body: string;
    bullets: string[];
    panelClass: string;
    checkBg: string;
    checkFg: string;
  }
> = {
  saathi: {
    kicker: "Your AI companion",
    kickerColor: "var(--color-primary)",
    title: "Talk it out — any time, any language.",
    body: "Saathi is there at 3 AM when no one else is. Share what’s on your mind in Hindi, English or Hinglish. It listens without judging and suggests a session that fits how you feel right now.",
    bullets: [
      "Anonymous, 24×7, in Hindi, English or Hinglish",
      "Suggests audio sessions based on how you feel",
      "Never diagnoses — and routes you to real help if you’re in crisis",
    ],
    panelClass: "u-mock-panel--saathi",
    checkBg: "var(--color-primary-tint)",
    checkFg: "var(--color-primary)",
  },
  listen: {
    kicker: "Audio library",
    kickerColor: "var(--color-night)",
    title: "Sessions written for Indian minds.",
    body: "Short guided audios for ghabrahat, exam pressure, sleepless nights and overthinking — written by U Mind and voiced in Hindi and English for your stage of life.",
    bullets: [
      "Hindi and English versions of every session",
      "Matched to life stage, gender and how you feel",
      "Suggested by Saathi or browse the full library",
    ],
    panelClass: "u-mock-panel--listen",
    checkBg: "var(--color-primary-tint)",
    checkFg: "var(--color-primary)",
  },
  diary: {
    kicker: "Private diary",
    kickerColor: "var(--color-mint-ink)",
    title: "See your patterns, gently.",
    body: "Log your mood in one tap and write as much or as little as you like. Over time, Saathi helps you notice what makes your good days good.",
    bullets: [
      "One-tap daily mood check-in",
      "Daily writing prompts and voice notes",
      "Encrypted on your device before it syncs",
    ],
    panelClass: "u-mock-panel--diary",
    checkBg: "var(--color-mint-tint)",
    checkFg: "var(--color-mint-ink)",
  },
  psych: {
    kicker: "Real humans",
    kickerColor: "var(--color-coral-ink)",
    title: "A verified psychologist, on your terms.",
    body: "Book an RCI-verified psychologist for chat, voice or video. Keep your camera off, share only your U Mind name, and decide if they see your Saathi summary.",
    bullets: [
      "Chat, voice or video sessions",
      "₹499 · 40 min · paid separately from your plan",
      "Background-verified before they go live",
    ],
    panelClass: "u-mock-panel--psych",
    checkBg: "var(--color-coral-tint)",
    checkFg: "var(--color-coral-ink)",
  },
};

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
      <path
        d="M2.5 6.2 4.8 8.5 9.5 3.5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SaathiMock() {
  return (
    <>
      <div className="u-bubble u-bubble--ai">Hi Neela. What’s sitting heavy on your mind today?</div>
      <div className="u-bubble u-bubble--user">
        Kal office deadline hai aur neend nahi aa rahi. Dil bahut tez chal raha hai.
      </div>
      <div className="u-bubble u-bubble--ai">
        That sounds exhausting. Let’s calm your body first, then we can plan tomorrow together.
      </div>
      <div className="u-suggest-card">
        <p className="u-suggest-card__label">Suggested for you</p>
        <p className="u-suggest-card__title">4-7-8 breath · 4 min · Hindi</p>
      </div>
    </>
  );
}

function ListenMock() {
  return (
    <div className="u-listen-player">
      <p className="u-caption" style={{ color: "#CFC7FF", fontWeight: 800, letterSpacing: "0.06em" }}>
        Now playing
      </p>
      <div className="u-breath-ring" aria-hidden>
        <span className="u-font-serif u-breath-ring__count">4</span>
        <span className="u-breath-ring__label">Breathe in</span>
      </div>
      <p className="u-font-serif" style={{ fontSize: 20, fontWeight: 600, margin: 0, color: "#FFF8F0" }}>
        4-7-8 breath for a racing heart
      </p>
      <p className="u-caption" style={{ color: "#CFC7FF" }}>
        4 min · For stress &amp; sleep · Hindi / English
      </p>
    </div>
  );
}

function DiaryMock() {
  const bars = [
    { h: 48, c: "#8FB8F5", d: "Th" },
    { h: 72, c: "#5B45DE", d: "F" },
    { h: 56, c: "#B4A8FF", d: "Sa" },
    { h: 88, c: "#3DD0A0", d: "Su" },
  ];
  return (
    <div className="u-card" style={{ background: "var(--color-surface)", padding: 20 }}>
      <p style={{ margin: "0 0 16px", fontWeight: 800, fontSize: 16 }}>Last 7 days</p>
      <div className="u-row" style={{ alignItems: "flex-end", gap: 12, height: 110 }}>
        {bars.map((b) => (
          <div key={b.d} style={{ flex: 1, textAlign: "center" }}>
            <div
              style={{
                height: b.h,
                borderRadius: "10px 10px 6px 6px",
                background: b.c,
                marginBottom: 8,
              }}
            />
            <span className="u-caption">{b.d}</span>
          </div>
        ))}
      </div>
      <div
        style={{
          marginTop: 16,
          background: "var(--color-primary-tint)",
          borderRadius: 14,
          padding: "12px 14px",
        }}
      >
        <p style={{ margin: 0, fontSize: 13, fontWeight: 700, color: "var(--color-primary-hover)" }}>
          Saathi noticed
        </p>
        <p className="u-caption" style={{ marginTop: 4, color: "var(--color-ink-soft)" }}>
          Days with a breathing session ended calmer.
        </p>
      </div>
    </div>
  );
}

function PsychMock() {
  const people = [
    { initials: "AR", name: "Dr. Ananya Rao", meta: "Stress, burnout · Hindi, English", bg: "#FFE1DB" },
    { initials: "KM", name: "Kabir Mehta", meta: "Anxiety, sleep · English", bg: "#D9F5EA" },
    { initials: "FS", name: "Dr. Fatima Sheikh", meta: "Teens, relationships · Hindi", bg: "#DCEBFF" },
  ];
  return (
    <div className="u-stack" style={{ gap: 12 }}>
      {people.map((p) => (
        <div
          key={p.name}
          className="u-card"
          style={{
            background: "var(--color-surface)",
            padding: "14px 16px",
            display: "flex",
            alignItems: "center",
            gap: 12,
          }}
        >
          <span
            className="u-font-serif"
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              background: p.bg,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 600,
              fontSize: 14,
              color: "var(--color-ink)",
              flexShrink: 0,
            }}
          >
            {p.initials}
          </span>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p style={{ margin: 0, fontWeight: 700, fontSize: 14 }}>{p.name}</p>
            <p className="u-caption" style={{ margin: "2px 0 0" }}>
              {p.meta}
            </p>
          </div>
          <span
            className="u-btn u-btn--primary"
            style={{ height: 36, padding: "0 16px", fontSize: 13, pointerEvents: "none", flexShrink: 0 }}
          >
            Book
          </span>
        </div>
      ))}
    </div>
  );
}

function TabMock({ tab }: { tab: TabId }) {
  if (tab === "listen") return <ListenMock />;
  if (tab === "diary") return <DiaryMock />;
  if (tab === "psych") return <PsychMock />;
  return <SaathiMock />;
}

export function InsideTheAppSection() {
  const [active, setActive] = useState<TabId>("saathi");
  const content = TAB_CONTENT[active];

  return (
    <section id="features" className="u-section u-inside">
      <div className="u-container">
        <div className="u-section-head u-section-head--center">
          <p className="u-kicker">Inside the app</p>
          <h2 className="u-h2">Everything your mind needs, in one quiet app.</h2>
        </div>

        <ul className="u-inside__tabs" role="tablist" aria-label="App features">
          {TABS.map((tab) => {
            const isActive = tab.id === active;
            return (
              <li key={tab.id}>
                <button
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`u-tab${isActive ? " u-tab--active" : ""}`}
                  onClick={() => setActive(tab.id)}
                >
                  {tab.label}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="u-inside__panel" role="tabpanel">
          <div className="u-inside__copy">
            <p className="u-kicker" style={{ color: content.kickerColor }}>
              {content.kicker}
            </p>
            <h3 className="u-h2" style={{ fontSize: 34 }}>
              {content.title}
            </h3>
            <p className="u-lead" style={{ fontSize: 16 }}>
              {content.body}
            </p>
            <ul className="u-check-list">
              {content.bullets.map((item) => (
                <li key={item} className="u-check-item">
                  <span className="u-check" style={{ background: content.checkBg, color: content.checkFg }}>
                    <CheckIcon />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className={`u-mock-panel ${content.panelClass}`}>
            <TabMock tab={active} />
          </div>
        </div>
      </div>
    </section>
  );
}
