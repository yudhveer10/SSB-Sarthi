const processDays = [
  {
    day: "Day 1",
    title: "Screening",
    details: "OIR test, PPDT, narration, and group discussion decide whether you move ahead.",
    focus: "First impression, observation, clear narration",
  },
  {
    day: "Day 2",
    title: "Psychology",
    details: "TAT, WAT, SRT, and SD test your natural responses and thought patterns.",
    focus: "Speed, authenticity, clarity of thinking",
  },
  {
    day: "Day 3 and 4",
    title: "GTO Tasks",
    details: "Outdoor and indoor group tasks reveal leadership, cooperation, and practical thinking.",
    focus: "Team behavior, initiative, practical execution",
  },
  {
    day: "Day 2 to 4",
    title: "Personal Interview",
    details: "The IO evaluates clarity, consistency, personality, and officer-like qualities.",
    focus: "Consistency, self-awareness, communication",
  },
  {
    day: "Day 5",
    title: "Conference",
    details: "All assessors discuss their observations before the final recommendation decision.",
    focus: "Overall suitability and final alignment",
  },
];

const processSignals = [
  "Know what happens each day before you report.",
  "Understand what each testing area is really observing.",
  "Prepare with structure instead of random advice.",
];

export default function ProcessPage() {
  return (
    <main className="pb-20">
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
                The full 5-day SSB process, redesigned to feel clear and easy.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
                Instead of dumping notes, this section should guide aspirants
                through each testing stage with the kind of clarity, pacing, and
                confidence a good product experience gives.
              </p>

              <div className="mt-8 grid gap-3 sm:max-w-2xl">
                {processSignals.map((signal) => (
                  <div
                    key={signal}
                    className="flex items-center gap-3 rounded-2xl border border-white/80 bg-white/80 px-4 py-3 shadow-sm"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-sm font-bold text-[var(--color-accent-strong)]">
                      ✓
                    </span>
                    <p className="text-sm font-medium text-[var(--color-ink)] sm:text-base">
                      {signal}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <div className="rounded-[1.6rem] border border-white/80 bg-[var(--color-card-strong)] p-5 shadow-[var(--shadow-card)]">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                  Timeline
                </p>
                <p className="mt-3 font-display text-3xl font-semibold tracking-[-0.05em] text-[var(--color-ink-strong)]">
                  5 Days
                </p>
                <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                  Structured assessment across screening, psychology, GTO,
                  interview, and conference.
                </p>
              </div>
              <div className="rounded-[1.6rem] border border-white/80 bg-[var(--color-card-strong)] p-5 shadow-[var(--shadow-card)]">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                  Goal
                </p>
                <p className="mt-3 font-display text-3xl font-semibold tracking-[-0.05em] text-[var(--color-ink-strong)]">
                  Less guesswork
                </p>
                <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                  Students should know what to expect before they step into the
                  center.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pt-10 sm:px-10 lg:px-12">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--color-accent-strong)]">
              Day-by-day flow
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.04em] text-[var(--color-ink-strong)] sm:text-4xl">
              Scan the full journey in minutes.
            </h2>
          </div>
        </div>

        <div className="grid gap-5">
          {processDays.map((item, index) => (
            <article
              key={`${item.day}-${item.title}`}
              className="group relative overflow-hidden rounded-[1.9rem] border border-white/75 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(247,252,255,0.92))] p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_80px_rgba(15,23,42,0.12)] sm:p-7"
            >
              <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-[radial-gradient(circle,rgba(8,145,178,0.16),transparent_72%)] opacity-80 transition-transform duration-300 group-hover:scale-110" />
              <div className="relative grid gap-5 lg:grid-cols-[auto_1fr_auto] lg:items-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))] text-lg font-bold text-white shadow-[0_14px_32px_rgba(8,145,178,0.26)]">
                  {index + 1}
                </div>

                <div className="max-w-3xl">
                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-accent-strong)]">
                    {item.day}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-semibold tracking-[-0.04em] text-[var(--color-ink-strong)] sm:text-[2rem]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                    {item.details}
                  </p>
                </div>

                <div className="rounded-2xl border border-[var(--color-border)] bg-white/90 px-4 py-4 lg:max-w-[18rem]">
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                    Key focus
                  </p>
                  <p className="mt-2 text-sm font-semibold leading-6 text-[var(--color-ink-strong)]">
                    {item.focus}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
