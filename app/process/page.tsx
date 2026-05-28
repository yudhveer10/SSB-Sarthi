// app/process/page.tsx

const processDays = [
  {
    day: "Day 1",
    label: "Screening",
    color: "#0369a1",
    icon: "🔍",
    tests: ["OIR Test (Verbal & Non-Verbal)", "Picture Perception & Discussion Test (PPDT)"],
    details:
      "The first day filters candidates through an intelligence test and a group storytelling exercise. Only those who clear screening proceed to the 4-day assessment.",
    focus: "First impression, observation speed, clear narration",
    tip: "Around 50–60% of candidates are screened out on Day 1. Your story in PPDT should have a positive hero, clear action, and a realistic outcome.",
  },
  {
    day: "Day 2",
    label: "Psychological Tests",
    color: "#7c3aed",
    icon: "🧠",
    tests: [
      "Thematic Apperception Test (TAT) — 11 pictures + 1 blank",
      "Word Association Test (WAT) — 60 words, 15 seconds each",
      "Situation Reaction Test (SRT) — 60 situations in 30 minutes",
      "Self Description Test (SD) — 5 open-ended paragraphs",
    ],
    details:
      "The psychology battery reveals your natural thought patterns, values, and decision-making style under time pressure. Speed and authenticity matter more than crafted answers.",
    focus: "Speed, authenticity, positive yet realistic outlook",
    tip: "Don't overthink. The assessor is looking for Officer Like Qualities (OLQs) in your spontaneous responses — not polished answers.",
  },
  {
    day: "Day 3 & 4",
    label: "GTO Tasks",
    color: "#1d6b40",
    icon: "🏕️",
    tests: [
      "Group Discussion (GD) — 2 rounds",
      "Group Planning Exercise (GPE)",
      "Progressive Group Task (PGT)",
      "Half Group Task (HGT)",
      "Individual Obstacles (IO) — 10 obstacles",
      "Command Task",
      "Final Group Task (FGT)",
      "Lecturette — 3-minute talk",
    ],
    details:
      "GTO tasks assess leadership, teamwork, physical stamina, and practical problem-solving in real outdoor and indoor scenarios. Group tasks are observed carefully for both individual initiative and team cooperation.",
    focus: "Team behavior, initiative without domination, practical execution",
    tip: "In group tasks, contribute ideas early and support teammates physically. The GTO watches who helps, not just who leads.",
  },
  {
    day: "Day 2–4",
    label: "Personal Interview (IO)",
    color: "#b45309",
    icon: "🤝",
    tests: [
      "Structured interview by the Interviewing Officer (IO)",
      "Covers academics, family background, hobbies, current affairs, and motivation",
    ],
    details:
      "The Interviewing Officer builds a full picture of your personality across 45–60 minutes. Consistency with your psychology responses is critical. Self-awareness and calm, clear communication define strong performers.",
    focus: "Consistency, self-awareness, honest communication",
    tip: "Your PIQ (Personal Information Questionnaire) filled on Day 1 is the IO's starting point. Know every detail you write on it.",
  },
  {
    day: "Day 5",
    label: "Conference",
    color: "#be123c",
    icon: "🏛️",
    tests: ["Board Conference — all assessors present", "Candidate called in briefly"],
    details:
      "All three assessors — Psychologist, IO, and GTO — align their observations. The President of the Board presides. A candidate may be called in to address any doubts the board has.",
    focus: "Overall suitability across all testing streams",
    tip: "If called in during conference, be calm and honest. It is not always a negative sign. Answer whatever is asked with the same consistency you showed throughout.",
  },
];

const olqs = [
  { label: "Effective Intelligence", short: "EI" },
  { label: "Reasoning Ability", short: "RA" },
  { label: "Organising Ability", short: "OA" },
  { label: "Power of Expression", short: "PE" },
  { label: "Social Adaptability", short: "SA" },
  { label: "Cooperation", short: "CO" },
  { label: "Sense of Responsibility", short: "SR" },
  { label: "Initiative", short: "IN" },
  { label: "Self Confidence", short: "SC" },
  { label: "Speed of Decision", short: "SD" },
  { label: "Ability to Influence the Group", short: "AI" },
  { label: "Liveliness", short: "LV" },
  { label: "Determination", short: "DM" },
  { label: "Courage", short: "CG" },
  { label: "Stamina", short: "ST" },
];

const assessors = [
  {
    role: "Psychologist",
    scope: "TAT, WAT, SRT, SD responses",
    color: "#7c3aed",
  },
  {
    role: "Interviewing Officer (IO)",
    scope: "Personal interview, PIQ, background",
    color: "#b45309",
  },
  {
    role: "Group Testing Officer (GTO)",
    scope: "All group and individual outdoor tasks",
    color: "#1d6b40",
  },
];

export default function ProcessPage() {
  return (
    <main className="pb-20">
      {/* ── Hero ── */}
      <section className="mx-auto w-full max-w-7xl px-6 pt-12 sm:px-10 lg:px-12">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(232,246,255,0.9))] px-6 py-8 shadow-[var(--shadow-soft)] sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <div className="absolute -right-16 top-0 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(8,145,178,0.18),transparent_66%)]" />
          <div className="absolute -left-10 bottom-0 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(255,122,89,0.14),transparent_68%)]" />

          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="max-w-3xl">
              <div className="inline-flex items-center rounded-full border border-[var(--color-border)] bg-white/80 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-[var(--color-accent-strong)] shadow-sm">
                SSB Process Guide
              </div>
              <h1 className="mt-6 max-w-4xl font-display text-4xl font-semibold leading-[1.02] tracking-[-0.05em] text-[var(--color-ink-strong)] sm:text-5xl lg:text-[4.25rem]">
                The full 5-day SSB process, explained clearly.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
                Three independent assessors — Psychologist, IO, and GTO — observe
                the same candidate across different testing formats. Consistency,
                not coaching, is what leads to a recommendation.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  { label: "Testing Days", value: "5" },
                  { label: "Assessors", value: "3" },
                  { label: "OLQs Measured", value: "15" },
                  { label: "Tests / Tasks", value: "15+" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center gap-3 rounded-2xl border border-white/80 bg-white/70 px-5 py-3 shadow-sm backdrop-blur-sm"
                  >
                    <span className="text-2xl font-bold text-[var(--color-accent-strong)]">
                      {stat.value}
                    </span>
                    <span className="text-xs font-semibold text-[var(--color-muted)]">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Assessor cards */}
            <div className="grid gap-3">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                Three independent assessors
              </p>
              {assessors.map((a) => (
                <div
                  key={a.role}
                  className="flex items-start gap-4 rounded-2xl border border-white/80 bg-white/90 p-4 shadow-sm"
                >
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-black text-white"
                    style={{ background: a.color }}
                  >
                    {a.role[0]}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-[var(--color-ink-strong)]">
                      {a.role}
                    </p>
                    <p className="mt-0.5 text-xs text-[var(--color-muted)]">
                      {a.scope}
                    </p>
                  </div>
                </div>
              ))}
              <div className="rounded-2xl border border-white/80 bg-[#0d1b2f] p-4 text-white">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/60">
                  Key principle
                </p>
                <p className="mt-2 text-sm font-semibold leading-relaxed">
                  All three assessors work independently and compare notes only at
                  the Day 5 conference.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Day-by-day breakdown ── */}
      <section className="mx-auto w-full max-w-7xl px-6 pt-12 sm:px-10 lg:px-12">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--color-accent-strong)]">
            Day-by-day flow
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.04em] text-[var(--color-ink-strong)] sm:text-4xl">
            Know what happens before you arrive.
          </h2>
        </div>

        <div className="grid gap-5">
          {processDays.map((item, index) => (
            <article
              key={item.day}
              className="group relative overflow-hidden rounded-[1.9rem] border border-white/75 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(247,252,255,0.92))] shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_28px_80px_rgba(15,23,42,0.12)]"
            >
              {/* Left accent bar */}
              <div
                className="absolute left-0 top-0 h-full w-1.5 rounded-l-[1.9rem]"
                style={{ background: item.color }}
              />

              <div className="pl-8 pr-6 py-6 sm:pr-8 sm:py-7">
                <div className="grid gap-6 lg:grid-cols-[auto_1fr_auto] lg:items-start">
                  {/* Step number + emoji */}
                  <div className="flex items-center gap-3 lg:flex-col lg:items-center lg:gap-2">
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-2xl text-xl font-black text-white shadow-md"
                      style={{ background: item.color }}
                    >
                      {index + 1}
                    </div>
                    <span className="text-2xl lg:text-xl">{item.icon}</span>
                  </div>

                  {/* Content */}
                  <div>
                    <p
                      className="text-xs font-bold uppercase tracking-[0.24em]"
                      style={{ color: item.color }}
                    >
                      {item.day}
                    </p>
                    <h3 className="mt-1.5 font-display text-2xl font-semibold tracking-[-0.04em] text-[var(--color-ink-strong)] sm:text-3xl">
                      {item.label}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                      {item.details}
                    </p>

                    {/* Tests list */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tests.map((t) => (
                        <span
                          key={t}
                          className="inline-block rounded-full border px-3 py-1 text-xs font-semibold"
                          style={{
                            borderColor: `color-mix(in srgb, ${item.color} 25%, transparent)`,
                            color: item.color,
                            background: `color-mix(in srgb, ${item.color} 7%, white)`,
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Focus + tip */}
                  <div className="space-y-3 lg:w-64 lg:shrink-0">
                    <div className="rounded-2xl border border-[var(--color-border)] bg-white/90 p-4">
                      <p className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                        Key focus
                      </p>
                      <p className="mt-2 text-sm font-semibold leading-6 text-[var(--color-ink-strong)]">
                        {item.focus}
                      </p>
                    </div>
                    <div
                      className="rounded-2xl p-4"
                      style={{
                        background: `color-mix(in srgb, ${item.color} 8%, white)`,
                        border: `1px solid color-mix(in srgb, ${item.color} 18%, transparent)`,
                      }}
                    >
                      <p
                        className="text-[0.68rem] font-bold uppercase tracking-[0.22em]"
                        style={{ color: item.color }}
                      >
                        Insider tip
                      </p>
                      <p className="mt-2 text-xs leading-relaxed text-[var(--color-ink-strong)]">
                        {item.tip}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ── 15 OLQs ── */}
      <section className="mx-auto w-full max-w-7xl px-6 pt-12 sm:px-10 lg:px-12">
        <div className="mb-6">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--color-accent-strong)]">
            What the board measures
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.04em] text-[var(--color-ink-strong)] sm:text-4xl">
            15 Officer Like Qualities (OLQs)
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--color-muted)] sm:text-base">
            Every test, task, and interview traces back to these 15 qualities.
            Understanding them gives you a clearer framework for honest
            self-preparation.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {olqs.map((olq, i) => (
            <div
              key={olq.short}
              className="flex items-start gap-3 rounded-[1.4rem] border border-white/80 bg-white/90 p-4 shadow-sm"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[var(--color-accent-soft)] text-xs font-black text-[var(--color-accent-strong)]">
                {olq.short}
              </span>
              <p className="text-xs font-semibold leading-snug text-[var(--color-ink-strong)]">
                {olq.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}