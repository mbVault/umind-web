const STEPS = [
  {
    num: "01",
    numClass: "u-how-card__num--01",
    title: "Pick any name",
    body: "No phone number, no email. Choose a name and a colour. You get 12 private words to come back to your space — that’s it.",
  },
  {
    num: "02",
    numClass: "u-how-card__num--02",
    title: "Talk to Saathi",
    body: "Tell Saathi about stress, anxiety, ghabrahat or sleepless nights — in Hindi, English or Hinglish. It listens and suggests what to listen to.",
  },
  {
    num: "03",
    numClass: "u-how-card__num--03",
    title: "Listen, write, or meet a human",
    body: "Play a guided session, log your mood in a private diary, or book a verified psychologist who only ever knows your U Mind name.",
  },
] as const;

export function HowItWorksSection() {
  return (
    <section id="how" className="u-section u-how">
      <div className="u-container">
        <div className="u-section-head">
          <p className="u-kicker">How it works</p>
          <h2 className="u-h2">
            From &ldquo;mann bhaari hai&rdquo; to feeling lighter — in three steps.
          </h2>
        </div>

        <div className="u-how__cards">
          {STEPS.map((step) => (
            <article key={step.num} className="u-how-card">
              <p className={`u-how-card__num ${step.numClass}`}>{step.num}</p>
              <h3 className="u-how-card__title">{step.title}</h3>
              <p className="u-body">{step.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
