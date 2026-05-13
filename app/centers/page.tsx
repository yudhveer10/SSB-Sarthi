const centers = [
  "Allahabad",
  "Bhopal",
  "Bengaluru",
  "Kapurthala",
  "Coimbatore",
  "Varanasi",
];

export default function CentersPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10 lg:px-12">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-strong)]">
          Centers
        </p>
        <h1 className="mt-4 font-serif text-5xl leading-tight text-[var(--color-ink-strong)]">
          Explore SSB center locations, boards, and reporting context.
        </h1>
        <p className="mt-5 text-lg leading-8 text-[var(--color-muted)]">
          We will expand this into a full directory with center-specific pages,
          travel help, reporting notes, and board details.
        </p>
      </div>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {centers.map((center) => (
          <article
            key={center}
            className="rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-card)] p-6"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
              SSB center
            </p>
            <h2 className="mt-3 font-serif text-3xl text-[var(--color-ink-strong)]">
              {center}
            </h2>
            <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
              Future page: location, access, boards, student notes, and recent
              trend references.
            </p>
          </article>
        ))}
      </div>
    </main>
  );
}
