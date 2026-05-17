const trendCards = [
  {
    title: "Center-wise recommendation pulse",
    body: "A future-ready area for monthly movement, center comparison, and visibility into where recommendation chatter is rising or cooling down.",
  },
  {
    title: "Board and branch context",
    body: "Trends matter more when candidates can separate Army, Air Force, and Navy journeys instead of mixing them into one noisy graph.",
  },
  {
    title: "Submission quality layer",
    body: "The product should distinguish verified submissions, moderated notes, and unverified community chatter before showing any patterns.",
  },
  {
    title: "Story-backed interpretation",
    body: "The best version of trends is not just charts. It is trends connected to journals, location conditions, and candidate context.",
  },
];

const trendSignals = [
  "Useful only when community data is moderated",
  "Safer when branch, center, and date ranges are separated",
  "More trustworthy when charts link back to stories and context",
];

const futureWidgets = [
  "Monthly recommendation timeline",
  "Center comparison cards",
  "Branch-specific filters",
  "Verified vs community-reported toggle",
];

export default function TrendsPage() {
  return (
    <main className="pb-20">
      <section className="mx-auto w-full max-w-7xl px-6 pt-12 sm:px-10 lg:px-12">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.97),rgba(227,242,255,0.94))] px-6 py-8 shadow-[var(--shadow-soft)] sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(15,95,214,0.16),transparent_68%)]" />
          <div className="absolute left-0 bottom-0 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(58,196,255,0.18),transparent_70%)]" />

          <div className="relative grid gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:items-end">
            <div className="max-w-3xl">
              <div className="inline-flex items-center rounded-full border border-white/80 bg-white/84 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-[var(--color-accent-strong)] shadow-sm">
                Trend intelligence
              </div>
              <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.02] tracking-[-0.06em] text-[var(--color-ink-strong)] sm:text-5xl lg:text-[4.3rem]">
                Recommendation trends should guide judgment, not fuel rumors.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
                This section is now framed as a serious interpretation layer for
                aspirants. The goal is to show patterns carefully, with context,
                moderation, and enough product clarity to avoid misleading users.
              </p>

              <div className="mt-8 grid gap-3 sm:max-w-2xl">
                {trendSignals.map((signal) => (
                  <div
                    key={signal}
                    className="flex items-center gap-3 rounded-2xl border border-white/80 bg-white/84 px-4 py-3 shadow-sm"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-sm font-bold text-[var(--color-accent-strong)]">
                      +
                    </span>
                    <p className="text-sm font-medium text-[var(--color-ink)] sm:text-base">
                      {signal}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.6rem] border border-white/80 bg-[#0d1b2f] p-5 text-white shadow-[0_18px_46px_rgba(15,23,42,0.18)] sm:col-span-2">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/58">
                  Current positioning
                </p>
                <p className="mt-3 font-display text-3xl font-semibold tracking-[-0.05em]">
                  Trust first, charts second
                </p>
                <p className="mt-3 text-sm leading-7 text-white/78">
                  Before publishing numbers loudly, this page should teach users
                  what data is reliable, what is community-reported, and what
                  should be treated carefully.
                </p>
              </div>

              {futureWidgets.map((widget) => (
                <div
                  key={widget}
                  className="rounded-[1.4rem] border border-white/80 bg-white/90 p-5 shadow-sm"
                >
                  <p className="text-sm font-semibold leading-7 text-[var(--color-ink-strong)]">
                    {widget}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pt-10 sm:px-10 lg:px-12">
        <div className="mb-6 max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--color-accent-strong)]">
            What this page should do
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.04em] text-[var(--color-ink-strong)] sm:text-4xl">
            Show patterns with enough explanation that students stay grounded.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {trendCards.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.7rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(243,250,255,0.92))] p-6 shadow-[var(--shadow-card)]"
            >
              <h3 className="font-display text-2xl font-semibold tracking-[-0.04em] text-[var(--color-ink-strong)]">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
