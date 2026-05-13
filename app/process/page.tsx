const processDays = [
  {
    day: "Day 1",
    title: "Screening",
    details: "OIR test, PPDT, narration, and group discussion decide whether you move ahead.",
  },
  {
    day: "Day 2",
    title: "Psychology",
    details: "TAT, WAT, SRT, and SD test your natural responses and thought patterns.",
  },
  {
    day: "Day 3 and 4",
    title: "GTO Tasks",
    details: "Outdoor and indoor group tasks reveal leadership, cooperation, and practical thinking.",
  },
  {
    day: "Day 2 to 4",
    title: "Personal Interview",
    details: "The IO evaluates clarity, consistency, personality, and officer-like qualities.",
  },
  {
    day: "Day 5",
    title: "Conference",
    details: "All assessors discuss their observations before the final recommendation decision.",
  },
];

export default function ProcessPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10 lg:px-12">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-strong)]">
          Process
        </p>
        <h1 className="mt-4 font-serif text-5xl leading-tight text-[var(--color-ink-strong)]">
          A simple roadmap for the full 5-day SSB journey.
        </h1>
        <p className="mt-5 text-lg leading-8 text-[var(--color-muted)]">
          This section will become the student-friendly guide for each day,
          including expectations, common mistakes, and preparation tips.
        </p>
      </div>
      <div className="mt-12 grid gap-5">
        {processDays.map((item) => (
          <article
            key={`${item.day}-${item.title}`}
            className="rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-card)] p-6"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-accent-strong)]">
              {item.day}
            </p>
            <h2 className="mt-3 text-2xl font-semibold text-[var(--color-ink-strong)]">
              {item.title}
            </h2>
            <p className="mt-3 max-w-3xl text-base leading-7 text-[var(--color-muted)]">
              {item.details}
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}
