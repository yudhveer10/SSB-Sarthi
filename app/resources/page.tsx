const resources = [
  {
    title: "Reporting checklist",
    body: "A clean pre-departure checklist for documents, dress code essentials, travel timing, and last-minute preparation sanity checks.",
  },
  {
    title: "Travel and packing guidance",
    body: "Center-linked travel notes, stay planning reminders, and practical packing help for candidates traveling alone for the first time.",
  },
  {
    title: "Common interview themes",
    body: "A calmer way to surface recurring self-awareness, family, academics, and motivation questions without turning them into rote scripts.",
  },
  {
    title: "Myths vs reality",
    body: "A trust-building section to reduce bad advice, overconfidence, and panic-driven preparation patterns before reporting day.",
  },
];

const utilityBlocks = [
  "Quick references for travel day",
  "Shortlists students can scan on mobile",
  "Practical help before center reporting",
];

const rolloutAreas = [
  "Checklist cards",
  "Packing essentials",
  "Interview refreshers",
  "Center-specific notes",
];

export default function ResourcesPage() {
  return (
    <main className="pb-20">
      <section className="mx-auto w-full max-w-7xl px-6 pt-12 sm:px-10 lg:px-12">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.97),rgba(255,246,232,0.92))] px-6 py-8 shadow-[var(--shadow-soft)] sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(255,122,89,0.16),transparent_68%)]" />
          <div className="absolute left-0 bottom-0 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(8,145,178,0.14),transparent_70%)]" />

          <div className="relative grid gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:items-end">
            <div className="max-w-3xl">
              <div className="inline-flex items-center rounded-full border border-white/80 bg-white/84 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-[var(--color-accent-strong)] shadow-sm">
                Practical support
              </div>
              <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.02] tracking-[-0.06em] text-[var(--color-ink-strong)] sm:text-5xl lg:text-[4.2rem]">
                The utility layer students open right before they travel and report.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
                Resources should feel fast, grounded, and immediately useful.
                This page now frames that direction more clearly so it can grow
                into the high-frequency support section of the product.
              </p>
            </div>

            <div className="rounded-[1.8rem] border border-white/80 bg-[#0d1b2f] p-6 text-white shadow-[0_18px_46px_rgba(15,23,42,0.18)]">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/58">
                Why this matters next
              </p>
              <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.05em]">
                This is the easiest page to make genuinely useful fast.
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/78">
                A strong resources section can help candidates immediately,
                needs less risky community data than trends, and creates trust
                before journals and submissions go live.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {rolloutAreas.map((area) => (
                  <div
                    key={area}
                    className="rounded-[1.2rem] border border-white/12 bg-white/10 px-4 py-3 text-sm font-semibold text-white/82"
                  >
                    {area}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pt-10 sm:px-10 lg:px-12">
        <div className="mb-6 max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--color-accent-strong)]">
            Core utility
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.04em] text-[var(--color-ink-strong)] sm:text-4xl">
            Built around the material students repeatedly need in a hurry.
          </h2>
        </div>

        <div className="mb-8 grid gap-3 md:grid-cols-3">
          {utilityBlocks.map((block) => (
            <div
              key={block}
              className="rounded-[1.4rem] border border-white/80 bg-white/88 px-5 py-4 shadow-sm"
            >
              <p className="text-sm font-semibold leading-7 text-[var(--color-ink-strong)]">
                {block}
              </p>
            </div>
          ))}
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {resources.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.7rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(255,249,242,0.92))] p-6 shadow-[var(--shadow-card)]"
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
