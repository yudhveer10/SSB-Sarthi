const trendCards = [
  "Center-wise recommendations by month",
  "Recent community-submitted observations",
  "Board-level filters and comparison views",
  "Verified vs unverified data separation",
];

export default function TrendsPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10 lg:px-12">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-strong)]">
          Trends
        </p>
        <h1 className="mt-4 font-serif text-5xl leading-tight text-[var(--color-ink-strong)]">
          Recommendation trends should be useful, not misleading.
        </h1>
        <p className="mt-5 text-lg leading-8 text-[var(--color-muted)]">
          This section will later show moderated trend data so aspirants can see
          patterns without treating rumors as facts.
        </p>
      </div>
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {trendCards.map((item) => (
          <article
            key={item}
            className="rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-card)] p-6"
          >
            <h2 className="text-xl font-semibold text-[var(--color-ink-strong)]">
              {item}
            </h2>
          </article>
        ))}
      </div>
    </main>
  );
}
