const journalIdeas = [
  "Personal SSB experience writeups",
  "Center-tagged stories for better context",
  "Lessons learned after screening out or conference out",
  "Optional anonymous posting later",
];

export default function JournalsPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16 sm:px-10 lg:px-12">
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-strong)]">
          Journals
        </p>
        <h1 className="mt-4 font-serif text-5xl leading-tight text-[var(--color-ink-strong)]">
          A community space for students to document and share their journey.
        </h1>
        <p className="mt-5 text-lg leading-8 text-[var(--color-muted)]">
          This will grow into the experience-sharing side of the platform where
          aspirants can read, write, and learn from each other.
        </p>
      </div>
      <div className="mt-12 grid gap-5">
        {journalIdeas.map((item) => (
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
