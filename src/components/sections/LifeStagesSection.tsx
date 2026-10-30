"use client";

import { useState } from "react";

type StageId = "12-19" | "20-30" | "30-45" | "45-60" | "60";

const STAGES: {
  id: StageId;
  range: string;
  name: string;
  color: string;
  title: string;
  body: string;
  sessions: { title: string; meta: string; audience: "her" | "him" }[];
}[] = [
  {
    id: "12-19",
    range: "12–19",
    name: "Growing up",
    color: "var(--stage-12-19)",
    title: "Growing up, 12–19",
    body: "Exams, friends, body changes and the fear of being judged. Tools that speak like a peer — never like a lecture.",
    sessions: [
      { title: "Exam night calm", meta: "6 min · For everyone", audience: "her" },
      { title: "When friends feel far", meta: "7 min · For him", audience: "him" },
    ],
  },
  {
    id: "20-30",
    range: "20–30",
    name: "Starting out",
    color: "var(--stage-20-30)",
    title: "Starting out, 20–30",
    body: "First jobs, big-city loneliness, relationships and the pressure to have it all figured out. Tools for overthinking at 2 AM and soft landings after hard days.",
    sessions: [
      { title: "Periods, PMS & mood", meta: "8 min · For her", audience: "her" },
      { title: "Sunday scaries at work", meta: "7 min · For him", audience: "him" },
    ],
  },
  {
    id: "30-45",
    range: "30–45",
    name: "Building",
    color: "var(--stage-30-45)",
    title: "Building, 30–45",
    body: "Work stress, parenting, burnout and the quiet guilt of never doing enough. Space to put yourself back on the list.",
    sessions: [
      { title: "Burnout boundary breath", meta: "5 min · For everyone", audience: "her" },
      { title: "After the kids sleep", meta: "8 min · For him", audience: "him" },
    ],
  },
  {
    id: "45-60",
    range: "45–60",
    name: "Shifting",
    color: "var(--stage-45-60)",
    title: "Shifting, 45–60",
    body: "Health changes, menopause, empty nest and career plateaus. Support that names what’s shifting without drama.",
    sessions: [
      { title: "Hot flush cool-down", meta: "6 min · For her", audience: "her" },
      { title: "Sleep when the house is quiet", meta: "9 min · For him", audience: "him" },
    ],
  },
  {
    id: "60",
    range: "60+",
    name: "Wisdom years",
    color: "var(--stage-60)",
    title: "Wisdom years, 60+",
    body: "Loneliness, sleep, meaning and staying connected. Gentle sessions — and a path to a human when you want company.",
    sessions: [
      { title: "Morning light & mood", meta: "5 min · For everyone", audience: "her" },
      { title: "When the house feels large", meta: "8 min · For him", audience: "him" },
    ],
  },
];

export function LifeStagesSection() {
  const [active, setActive] = useState<StageId>("20-30");
  const [audience, setAudience] = useState<"her" | "him">("her");
  const stage = STAGES.find((s) => s.id === active)!;
  const sessions = stage.sessions.filter((s) => s.audience === audience);

  return (
    <section id="stages" className="u-section">
      <div className="u-container">
        <div className="u-section-head" style={{ maxWidth: 780, marginBottom: 28 }}>
          <p className="u-kicker">For every stage of life</p>
          <h2 className="u-h2">
            A 16-year-old&apos;s stress isn&apos;t a 60-year-old&apos;s. Your app knows the difference.
          </h2>
        </div>

        <div className="u-stage-tabs" role="tablist" aria-label="Life stages">
          {STAGES.map((s) => {
            const selected = s.id === active;
            return (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={selected}
                className={`u-stage-tab${selected ? " u-stage-tab--active" : ""}`}
                style={{ ["--stage-color" as string]: s.color }}
                onClick={() => setActive(s.id)}
              >
                <span className="u-stage-tab__range">{s.range}</span>
                <span className="u-stage-tab__name">{s.name}</span>
              </button>
            );
          })}
        </div>

        <div className="u-stage-panel">
          <div>
            <h3 className="u-font-serif" style={{ fontSize: 28, fontWeight: 600, color: stage.color, margin: "0 0 12px" }}>
              {stage.title}
            </h3>
            <p className="u-lead" style={{ fontSize: 16 }}>
              {stage.body}
            </p>
          </div>

          <div>
            <div className="u-row" style={{ justifyContent: "space-between", marginBottom: 12 }}>
              <p className="u-caption" style={{ fontWeight: 800, letterSpacing: "0.06em", textTransform: "uppercase" }}>
                Sessions picked for {audience} at this stage
              </p>
              <div className="u-segment" style={{ background: "var(--color-primary-tint)" }}>
                <button
                  type="button"
                  className={`u-segment__btn${audience === "her" ? " u-segment__btn--active" : ""}`}
                  onClick={() => setAudience("her")}
                >
                  For her
                </button>
                <button
                  type="button"
                  className={`u-segment__btn${audience === "him" ? " u-segment__btn--active" : ""}`}
                  onClick={() => setAudience("him")}
                >
                  For him
                </button>
              </div>
            </div>

            <div className="u-stack" style={{ gap: 10 }}>
              {(sessions.length ? sessions : stage.sessions).map((item) => (
                <div key={item.title} className="u-session-row">
                  <span
                    className="u-session-row__dot"
                    style={{
                      background: audience === "her" ? "var(--color-rose-tint)" : "var(--color-sky-tint)",
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <p style={{ margin: 0, fontWeight: 700, fontSize: 15 }}>{item.title}</p>
                    <p className="u-caption" style={{ margin: "2px 0 0" }}>
                      {item.meta}
                    </p>
                  </div>
                  <span
                    className="u-pill"
                    style={{
                      background: audience === "her" ? "var(--color-rose-tint)" : "var(--color-sky-tint)",
                      color: audience === "her" ? "var(--color-rose-ink)" : "var(--color-sky-ink)",
                    }}
                  >
                    For {audience}
                  </span>
                  <span className="u-session-row__play" aria-hidden>
                    ▶
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
