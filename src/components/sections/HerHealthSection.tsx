"use client";

import { useState } from "react";

const CYCLE_POINTS = [
  "Period tracker with next-period and PMS predictions",
  "Log flow, body symptoms and mood swings in seconds",
  "See how your mood changes through each phase",
  "Phase-wise tips, including Ayurveda for each phase",
];

const MENOPAUSE_POINTS = [
  "Hot-flush counter with a simple 14-day chart",
  "Log sleep, irritability and body changes fast",
  "Mood linked to symptoms — not self-blame",
  "Care-plan tips and language for talking to family",
];

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

function CycleRing() {
  return (
    <div className="u-cycle-ring" aria-hidden>
      <svg viewBox="0 0 200 200" className="u-cycle-ring__svg">
        <circle cx="100" cy="100" r="78" fill="none" stroke="#FF6B57" strokeWidth="14" strokeDasharray="90 400" strokeLinecap="round" transform="rotate(-90 100 100)" />
        <circle cx="100" cy="100" r="78" fill="none" stroke="#7FE0BC" strokeWidth="14" strokeDasharray="100 400" strokeDashoffset="-90" strokeLinecap="round" transform="rotate(-90 100 100)" />
        <circle cx="100" cy="100" r="78" fill="none" stroke="#FFB938" strokeWidth="14" strokeDasharray="50 400" strokeDashoffset="-190" strokeLinecap="round" transform="rotate(-90 100 100)" />
        <circle cx="100" cy="100" r="78" fill="none" stroke="#B4A8FF" strokeWidth="14" strokeDasharray="90 400" strokeDashoffset="-240" strokeLinecap="round" transform="rotate(-90 100 100)" />
        <circle cx="100" cy="100" r="78" fill="none" stroke="#5B45DE" strokeWidth="14" strokeDasharray="70 400" strokeDashoffset="-330" strokeLinecap="round" transform="rotate(-90 100 100)" />
      </svg>
      <div className="u-cycle-ring__center">
        <p className="u-caption" style={{ margin: 0 }}>
          Cycle day
        </p>
        <p className="u-font-serif" style={{ fontSize: 48, fontWeight: 600, margin: 0, lineHeight: 1 }}>
          10
        </p>
        <p style={{ margin: "6px 0 0", fontWeight: 700, color: "var(--color-mint-ink)", fontSize: 14 }}>
          Follicular phase
        </p>
        <p className="u-caption" style={{ marginTop: 4 }}>
          Period in 19 days
        </p>
      </div>
    </div>
  );
}

export function HerHealthSection() {
  const [mode, setMode] = useState<"cycle" | "menopause">("cycle");
  const points = mode === "cycle" ? CYCLE_POINTS : MENOPAUSE_POINTS;

  return (
    <section id="her" className="u-section u-her">
      <div className="u-container u-yours-grid">
        <div className="u-inside__copy">
          <p className="u-kicker" style={{ color: "var(--color-rose-ink)" }}>
            Her Health
          </p>
          <h2 className="u-h2">Made for women — from first period to menopause.</h2>
          <p className="u-lead">
            Hormones change how you feel. U Mind connects your cycle — or your menopause symptoms —
            with your mood, so you can finally see the pattern and get the right support.
          </p>

          <div className="u-segment" role="tablist" aria-label="Her Health mode">
            <button
              type="button"
              role="tab"
              aria-selected={mode === "cycle"}
              className={`u-segment__btn${mode === "cycle" ? " u-segment__btn--active" : ""}`}
              onClick={() => setMode("cycle")}
            >
              My cycle
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={mode === "menopause"}
              className={`u-segment__btn${mode === "menopause" ? " u-segment__btn--active" : ""}`}
              onClick={() => setMode("menopause")}
            >
              Menopause
            </button>
          </div>

          <ul className="u-check-list">
            {points.map((item) => (
              <li key={item} className="u-check-item" style={{ color: "var(--color-ink)" }}>
                <span
                  className="u-check"
                  style={{ background: "var(--color-rose-tint)", color: "var(--color-rose-ink)" }}
                >
                  <CheckIcon />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <aside className="u-her-mock" aria-label="Her Health preview">
          {mode === "cycle" ? (
            <>
              <CycleRing />
              <p style={{ fontWeight: 800, fontSize: 15, margin: "8px 0 12px" }}>
                Your mood through the cycle
              </p>
              <div className="u-row" style={{ alignItems: "flex-end", gap: 10, height: 100 }}>
                {[
                  { label: "Period", h: 48, c: "#FF6B57" },
                  { label: "Follicular", h: 72, c: "#7FE0BC" },
                  { label: "Ovulation", h: 92, c: "#FFB938" },
                  { label: "Luteal", h: 56, c: "#B4A8FF" },
                  { label: "PMS", h: 36, c: "#5B45DE" },
                ].map((b) => (
                  <div key={b.label} style={{ flex: 1, textAlign: "center" }}>
                    <div
                      style={{
                        height: b.h,
                        borderRadius: 10,
                        background: b.c,
                        marginBottom: 6,
                      }}
                    />
                    <span className="u-caption" style={{ fontSize: 10 }}>
                      {b.label}
                    </span>
                  </div>
                ))}
              </div>
              <div className="u-her-insight">
                <strong>Saathi noticed:</strong> your mood dips most in the 4–5 days before your
                period. Next PMS window starts 7 Oct.
              </div>
            </>
          ) : (
            <>
              <p className="u-font-serif" style={{ fontSize: 22, fontWeight: 600, margin: "0 0 8px" }}>
                Hot flushes · last 14 days
              </p>
              <div className="u-row" style={{ alignItems: "flex-end", gap: 6, height: 120, marginBottom: 16 }}>
                {[40, 55, 35, 70, 48, 62, 80, 45, 58, 66, 42, 74, 50, 38].map((h, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      height: h,
                      borderRadius: 6,
                      background: i % 3 === 0 ? "#D9480F" : i % 2 === 0 ? "#FF8A70" : "#FFC2B3",
                    }}
                  />
                ))}
              </div>
              <div className="u-row" style={{ gap: 8, marginBottom: 16 }}>
                {["Sleep broken", "Irritable", "Hot flush"].map((s) => (
                  <span key={s} className="u-chip" style={{ height: 32, fontSize: 12, background: "#FFC9D6", borderColor: "transparent" }}>
                    {s}
                  </span>
                ))}
              </div>
              <div className="u-her-insight">
                <strong>Only you can see this.</strong> Symptoms stay private — never shared with a
                psychologist unless you choose.
              </div>
            </>
          )}
        </aside>
      </div>
    </section>
  );
}
