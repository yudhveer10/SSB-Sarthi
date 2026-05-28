// app/journals/page.tsx

const journalCategories = [
  { label: "Recommended", color: "#1d6b40", count: "—" },
  { label: "Screened Out", color: "#b45309", count: "—" },
  { label: "Conferenced Out", color: "#be123c", count: "—" },
  { label: "Repeat Attempt", color: "#7c3aed", count: "—" },
];

const sampleJournals = [
  {
    id: 1,
    title: "How I finally got recommended at SCE Prayagraj — 3rd attempt",
    centre: "SCE Prayagraj",
    branch: "Army",
    outcome: "Recommended",
    outcomeColor: "#1d6b40",
    entry: "CDS",
    excerpt:
      "My first two attempts were full of overthinking. I was trying to be what I thought the board wanted. The third time, I just showed up honestly — and that changed everything.",
    tags: ["CDS", "3rd attempt", "Self-awareness"],
    date: "Jan 2025",
  },
  {
    id: 2,
    title: "AFSB Mysore — screened in but conferenced out. What I learned.",
    centre: "2 AFSB Mysore",
    branch: "Air Force",
    outcome: "Conferenced Out",
    outcomeColor: "#be123c",
    entry: "AFCAT",
    excerpt:
      "GTO went well. IO went well. Psychology felt okay. But the conference didn't go my way. I'm writing this to help anyone going through the same thing process it without losing hope.",
    tags: ["AFCAT", "Conference", "Mental resilience"],
    date: "Mar 2025",
  },
  {
    id: 3,
    title: "NDA entry — fresh perspective from an 18-year-old",
    centre: "SCS Bangalore",
    branch: "Army",
    outcome: "Recommended",
    outcomeColor: "#1d6b40",
    entry: "NDA",
    excerpt:
      "I was one of the youngest in my batch. I didn't try to sound mature — I just spoke about what I genuinely cared about. That authenticity seemed to carry weight.",
    tags: ["NDA", "First attempt", "Bangalore"],
    date: "Feb 2025",
  },
  {
    id: 4,
    title: "Screened out on Day 1 at SCC Bhopal — my honest account",
    centre: "SCC Bhopal",
    branch: "Army",
    outcome: "Screened Out",
    outcomeColor: "#b45309",
    entry: "CDS",
    excerpt:
      "PPDT caught me off guard. My narration was disorganized and the group discussion turned chaotic. This is what I'd do differently — and why I'm going again.",
    tags: ["CDS", "PPDT", "Bhopal"],
    date: "Apr 2025",
  },
];

const guidelines = [
  "Write about your real experience — what happened, what you felt, what you'd do differently.",
  "Centre-tag your journal so other aspirants going to the same location can learn.",
  "Anonymous posting will be available — your identity is always your choice.",
  "Journals are moderated before publishing to maintain quality and respect.",
];

export default function JournalsPage() {
  return (
    <main className="pb-20">
      {/* ── Hero ── */}
      <section className="mx-auto w-full max-w-7xl px-6 pt-12 sm:px-10 lg:px-12">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(255,249,240,0.92))] px-6 py-8 shadow-[var(--shadow-soft)] sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(180,83,9,0.12),transparent_68%)]" />
          <div className="absolute left-0 bottom-0 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(8,145,178,0.12),transparent_70%)]" />

          <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="max-w-3xl">
              <div className="inline-flex items-center rounded-full border border-white/80 bg-white/84 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-[var(--color-accent-strong)] shadow-sm">
                Aspirant journals
              </div>
              <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.02] tracking-[-0.06em] text-[var(--color-ink-strong)] sm:text-5xl lg:text-[4.2rem]">
                Real stories from real candidates. No coaching scripts.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
                Journals are centre-tagged, outcome-labelled, and moderated.
                Whether you got recommended, screened out, or are going again
                — your story helps the next aspirant prepare with more clarity.
              </p>

              {/* Outcome pills */}
              <div className="mt-6 flex flex-wrap gap-2">
                {journalCategories.map((cat) => (
                  <span
                    key={cat.label}
                    className="inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-bold"
                    style={{
                      borderColor: `color-mix(in srgb, ${cat.color} 28%, transparent)`,
                      color: cat.color,
                      background: `color-mix(in srgb, ${cat.color} 8%, white)`,
                    }}
                  >
                    <span
                      className="h-2 w-2 rounded-full"
                      style={{ background: cat.color }}
                    />
                    {cat.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Submission CTA */}
            <div className="rounded-[1.8rem] border border-white/80 bg-[#0d1b2f] p-6 text-white shadow-[0_18px_46px_rgba(15,23,42,0.18)]">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/58">
                Share your story
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.05em]">
                Your experience helps thousands of students prepare better.
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/78">
                Submissions are reviewed before publishing. You can write
                anonymously or with your name — your choice, always.
              </p>
              <div className="mt-6 space-y-2.5">
                {guidelines.map((g) => (
                  <div
                    key={g}
                    className="flex items-start gap-2.5 text-xs leading-relaxed text-white/78"
                  >
                    <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/50" />
                    {g}
                  </div>
                ))}
              </div>
              <button className="mt-6 w-full rounded-2xl bg-white/14 border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/22">
                Submit your journal →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── Journal cards ── */}
      <section className="mx-auto w-full max-w-7xl px-6 pt-10 sm:px-10 lg:px-12">
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--color-accent-strong)]">
              Recent journals
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.04em] text-[var(--color-ink-strong)] sm:text-4xl">
              Browse by experience and centre.
            </h2>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {sampleJournals.map((journal) => (
            <article
              key={journal.id}
              className="group relative overflow-hidden rounded-[1.8rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(250,252,255,0.92))] p-6 shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_28px_70px_rgba(15,23,42,0.11)] cursor-pointer"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-wrap gap-1.5">
                  <span
                    className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide"
                    style={{
                      borderColor: `color-mix(in srgb, ${journal.outcomeColor} 28%, transparent)`,
                      color: journal.outcomeColor,
                      background: `color-mix(in srgb, ${journal.outcomeColor} 9%, white)`,
                    }}
                  >
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{ background: journal.outcomeColor }}
                    />
                    {journal.outcome}
                  </span>
                  <span className="inline-block rounded-full border border-[var(--color-border)] bg-white/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-[var(--color-muted)]">
                    {journal.branch}
                  </span>
                </div>
                <span className="text-xs text-[var(--color-muted)] shrink-0">
                  {journal.date}
                </span>
              </div>

              <h3 className="mt-4 font-display text-xl font-semibold leading-snug tracking-[-0.03em] text-[var(--color-ink-strong)] group-hover:text-[var(--color-accent-strong)] transition-colors">
                {journal.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                {journal.excerpt}
              </p>

              <div className="mt-4 flex items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {journal.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-[var(--color-surface)] px-2.5 py-0.5 text-[10px] font-semibold text-[var(--color-muted)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-xs font-semibold text-[var(--color-accent-strong)] shrink-0 group-hover:underline underline-offset-2">
                  Read →
                </span>
              </div>

              {/* Centre label at bottom */}
              <div className="mt-4 flex items-center gap-2 border-t border-slate-100 pt-4">
                <svg
                  className="h-3.5 w-3.5 text-[var(--color-muted)]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-xs font-semibold text-[var(--color-muted)]">
                  {journal.centre}
                </span>
                <span className="text-[10px] text-[var(--color-muted)] opacity-60">
                  · {journal.entry} entry
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Load more placeholder */}
        <div className="mt-8 flex justify-center">
          <button className="rounded-full border border-[var(--color-border-strong)] bg-white/80 px-6 py-3 text-sm font-semibold text-[var(--color-ink-strong)] shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
            Load more journals
          </button>
        </div>
      </section>
    </main>
  );
}