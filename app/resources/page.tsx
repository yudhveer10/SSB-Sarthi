const resources = [
  "Reporting checklist",
  "Travel and packing guidance",
  "Common interview themes",
  "SSB myths vs reality",
  "Preparation notes and quick references",
];

export default function ResourcesPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10 lg:px-12">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-strong)]">
          Resources
        </p>
        <h1 className="mt-4 font-serif text-5xl leading-tight text-[var(--color-ink-strong)]">
          The practical support section for students preparing step by step.
        </h1>
        <p className="mt-5 text-lg leading-8 text-[var(--color-muted)]">
          This page will collect the quick-access material students usually need
          right before traveling or appearing at the center.
        </p>
      </div>
      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {resources.map((item) => (
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
