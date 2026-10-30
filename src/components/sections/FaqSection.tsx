"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "Is U Mind really anonymous?",
    a: "Yes. We never ask for a phone number, email or real name. You pick an alias and keep a 12-word recovery key. That’s your account.",
  },
  {
    q: "Is Saathi a doctor or therapist?",
    a: "No. Saathi is an AI companion, not a doctor or medical service. It listens, calms and suggests — and can help you reach a verified psychologist or crisis line when needed.",
  },
  {
    q: "Which languages does it support?",
    a: "Hindi, English and Hinglish for Saathi and the core experience. Guided audios ship in Hindi and English. More regional languages come later.",
  },
  {
    q: "How does the free trial work?",
    a: "You get 7 days free. Today costs ₹0. We remind you on day 5. If you cancel before day 8, you pay nothing.",
  },
  {
    q: "Are psychologist sessions included in my plan?",
    a: "No. Subscription covers Saathi, audio, diary and mood. Psychologist sessions are ₹499 for 40 minutes and paid separately.",
  },
  {
    q: "Is my personal and anonymous data private?",
    a: "Mood and diary are encrypted on your device before sync. Admins see aliases and totals only — never chat text or diary content. Built for India’s DPDP Act, 2023.",
  },
  {
    q: "Is my period and menopause data private?",
    a: "Yes. Her Health logs stay in your private space. They are never shown to a psychologist unless you explicitly choose to share context.",
  },
  {
    q: "What is hidden mode?",
    a: "U Mind can look like a calculator, notes or weather app on your home screen, open only with a PIN, and exit to a blank calculator in one tap — built for shared phones.",
  },
  {
    q: "Is the Ayurveda guidance medical advice?",
    a: "No. Ayurveda mind-type tips are wellness guidance, not a diagnosis or medical advice.",
  },
  {
    q: "Is U Mind only for women?",
    a: "No. U Mind is for everyone. Her Health is an optional space for people who chose Woman during onboarding.",
  },
  {
    q: "Can my employer or college see what I do?",
    a: "No. Organisations only ever see anonymous group totals for 10+ people — never names, chats, diaries or individual sessions.",
  },
  {
    q: "What if I am in crisis?",
    a: "U Mind is not an emergency service. Call Tele-MANAS 14416 or Emergency 112 immediately. You’ll also find those numbers on every page.",
  },
];

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="u-section u-faq">
      <div className="u-container" style={{ maxWidth: 860 }}>
        <div className="u-section-head u-section-head--center" style={{ marginBottom: 32 }}>
          <p className="u-kicker">Questions</p>
          <h2 className="u-h2">Things people ask us</h2>
        </div>

        <div className="u-faq-list">
          {FAQS.map((item, index) => {
            const isOpen = open === index;
            return (
              <div key={item.q} className="u-faq-item">
                <button
                  type="button"
                  className="u-faq-item__btn"
                  aria-expanded={isOpen}
                  onClick={() => setOpen(isOpen ? null : index)}
                >
                  <span>{item.q}</span>
                  <span className="u-faq-item__icon" aria-hidden>
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && <p className="u-faq-item__answer">{item.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
