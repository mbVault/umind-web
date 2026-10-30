"use client";

import { useState } from "react";

const QUESTIONS = [
  {
    n: "1",
    title: "What brings you here?",
    detail: "Stress, sleep, relationships, loneliness — we start from what weighs on you.",
  },
  {
    n: "2",
    title: "When should Saathi check in?",
    detail: "Morning, afternoon, evening, before bed — or only when you open the app.",
  },
  {
    n: "3",
    title: "What helps you unwind?",
    detail: "Breathing, walking, talking it out, calm sounds, writing, Ayurveda routines.",
  },
  {
    n: "4",
    title: "Which language should Saathi use?",
    detail: "Hindi, English or Hinglish — plus your city for a local weather tip.",
  },
];

const CITIES = ["Delhi", "Mumbai", "Bengaluru", "Jaipur", "Pune", "Kolkata"] as const;

const FACTS = [
  "Morning sunlight helps set your body clock, which can make it easier to fall asleep at night.",
  "A short walk without your phone often lowers racing thoughts more than another scroll.",
  "Naming a feeling out loud — even once — can soften its grip on your body.",
  "Consistent bedtime cues matter more than perfect sleep duration.",
  "Hinglish is welcome here — say it the way you actually think it.",
];

export function MakeItYoursSection() {
  const [cityIndex, setCityIndex] = useState(2);
  const [factIndex, setFactIndex] = useState(0);
  const city = CITIES[cityIndex];

  return (
    <section id="yours" className="u-section">
      <div className="u-container u-yours-grid">
        <div className="u-inside__copy">
          <p className="u-kicker">Make it yours</p>
          <h2 className="u-h2">Your colours. Your pace. Your city.</h2>
          <p className="u-lead">
            U Mind asks four quiet questions so Saathi, audios and check-ins feel made for you —
            not a generic wellness feed.
          </p>

          <ol className="u-yours-steps">
            {QUESTIONS.map((q) => (
              <li key={q.n} className="u-yours-step">
                <span className="u-yours-step__num">{q.n}</span>
                <div>
                  <p className="u-yours-step__title">{q.title}</p>
                  <p className="u-body">{q.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <aside className="u-yours-mock" aria-label="Personalised app preview">
          <div className="u-row" style={{ gap: 12, marginBottom: 16 }}>
            <span
              className="u-font-serif"
              style={{
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: "var(--color-primary)",
                color: "#fff",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 600,
              }}
            >
              N
            </span>
            <div>
              <p className="u-caption" style={{ margin: 0 }}>
                Good evening,
              </p>
              <p className="u-font-serif" style={{ margin: 0, fontSize: 20, fontWeight: 600 }}>
                Neela
              </p>
            </div>
          </div>

          <div className="u-row" style={{ gap: 8, marginBottom: 16 }}>
            {["Made for you", "Sleep", "Stress & work", "Check-ins: Evening"].map((t, i) => (
              <span key={t} className={`u-pill${i === 0 ? "" : ""}`} style={{ fontSize: 11 }}>
                {t}
              </span>
            ))}
          </div>

          <div className="u-weather-card">
            <div className="u-weather-card__head">
              <span>
                {city.toUpperCase()} · TODAY
              </span>
              <strong>24° · Pleasant</strong>
            </div>
            <div className="u-weather-card__body">
              <p className="u-body" style={{ color: "var(--color-ink)", marginBottom: 14 }}>
                Lovely weather in {city}. A 15-minute walk outside can lift your mood — leave the
                phone in your pocket.
              </p>
              <button type="button" className="u-btn u-btn--primary" style={{ height: 44, fontSize: 14 }}>
                Start a 15-min walk
              </button>
            </div>
          </div>

          <div className="u-fact-card">
            <div className="u-row" style={{ gap: 10, alignItems: "flex-start" }}>
              <span className="u-fact-card__q" aria-hidden>
                ?
              </span>
              <div style={{ flex: 1 }}>
                <p className="u-suggest-card__label" style={{ color: "#8a5a12" }}>
                  Did you know?
                </p>
                <p className="u-caption" style={{ color: "var(--color-ink-soft)", margin: 0 }}>
                  {FACTS[factIndex]}
                </p>
              </div>
              <button
                type="button"
                className="u-fact-card__next"
                aria-label="Next fact"
                onClick={() => setFactIndex((i) => (i + 1) % FACTS.length)}
              >
                ›
              </button>
            </div>
          </div>

          <button
            type="button"
            className="u-btn u-btn--ghost"
            style={{ marginTop: 8, alignSelf: "center", width: "100%" }}
            onClick={() => setCityIndex((i) => (i + 1) % CITIES.length)}
          >
            Try another city
          </button>
        </aside>
      </div>
    </section>
  );
}
