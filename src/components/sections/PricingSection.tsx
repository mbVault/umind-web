"use client";

import { useState } from "react";
import { AppLink } from "@/components/ui/AppLink";
import { LANDING_ANCHORS } from "@/lib/routes";

type PlanId = "monthly" | "yearly" | "quarterly";

const PLANS: {
  id: PlanId;
  name: string;
  price: string;
  note: string;
  choose: string;
  badge?: { label: string; tone: "sun" | "mint" };
}[] = [
  {
    id: "monthly",
    name: "Monthly",
    price: "₹199 / month",
    note: "Flexible, month to month.",
    choose: "Choose monthly",
  },
  {
    id: "yearly",
    name: "Yearly",
    price: "₹1,399 / year",
    note: "Just ₹117 a month. Best for building a habit.",
    choose: "Selected",
    badge: { label: "Save 41%", tone: "sun" },
  },
  {
    id: "quarterly",
    name: "3 Months",
    price: "₹499 / 3 months",
    note: "₹166 a month.",
    choose: "Choose 3 months",
    badge: { label: "Save 16%", tone: "mint" },
  },
];

const DAY8_LABEL: Record<PlanId, string> = {
  monthly: "₹199 a month begins",
  yearly: "₹1,399 a year begins",
  quarterly: "₹499 for 3 months begins",
};

/**
 * Landing-only pricing display — no checkout / payment.
 * Plan selection only updates the trial timeline copy.
 */
export function PricingSection() {
  const [plan, setPlan] = useState<PlanId>("yearly");

  return (
    <section id="pricing" className="u-section">
      <div className="u-container">
        <div className="u-section-head u-section-head--center" style={{ marginBottom: 36 }}>
          <h2 className="u-h2">
            Try U Mind <span className="u-text-primary">free</span> for 7 days.
          </h2>
          <p className="u-lead" style={{ maxWidth: 640 }}>
            Saathi AI, the full audio library, diary &amp; mood tracking, and sessions picked for
            your life stage. Cancel before day 8 and you pay nothing.
          </p>
        </div>

        <div className="u-price-grid" role="radiogroup" aria-label="Subscription plans">
          {PLANS.map((p) => {
            const selected = p.id === plan;
            return (
              <button
                key={p.id}
                type="button"
                role="radio"
                aria-checked={selected}
                className={`u-price-card${selected ? " u-price-card--selected" : ""}`}
                onClick={() => setPlan(p.id)}
              >
                {p.badge && (
                  <span className={`u-price-card__badge u-price-card__badge--${p.badge.tone}`}>
                    {p.badge.label}
                  </span>
                )}
                <p className="u-price-card__name">{p.name}</p>
                <p className="u-price-card__price">{p.price}</p>
                <p className="u-caption">{p.note}</p>
                <span className="u-price-card__choice">
                  <span className={`u-radio${selected ? " u-radio--on" : ""}`} aria-hidden />
                  {selected ? "Selected" : p.choose}
                </span>
              </button>
            );
          })}
        </div>

        <div className="u-trial-bar">
          <div className="u-trial-bar__timeline">
            <div>
              <p className="u-trial-bar__label">Today · ₹0</p>
              <p className="u-caption">Everything unlocks</p>
            </div>
            <div>
              <p className="u-trial-bar__label">Day 5</p>
              <p className="u-caption">We remind you</p>
            </div>
            <div>
              <p className="u-trial-bar__label">Day 8</p>
              <p className="u-caption">{DAY8_LABEL[plan]}</p>
            </div>
          </div>
          <AppLink href={LANDING_ANCHORS.top} className="u-btn u-btn--primary">
            Start my 7-day free trial
          </AppLink>
        </div>
      </div>
    </section>
  );
}
