// app/trends/page.tsx

const trendPrinciples = [
  {
    title: "Branch-separated data only",
    body: "Army, Air Force, and Navy selection processes are fundamentally different. Mixing their numbers into one graph misleads more than it helps.",
    icon: "⚖️",
    color: "#0369a1",
  },
  {
    title: "Centre-tagged, not vague",
    body: "Recommendation rates mean nothing without the centre name, board number, and entry type. Context turns a number into useful guidance.",
    icon: "📍",
    color: "#1d6b40",
  },
  {
    title: "Verified submissions first",
    body: "Community-reported data is labelled separately from verified submissions. You'll always know which category you're reading from.",
    icon: "✅",
    color: "#7c3aed",
  },
  {
    title: "Stories connect to patterns",
    body: "The best trends page links data spikes back to aspirant journals — so you can read what actually happened during a high-recommendation month.",
    icon: "🔗",
    color: "#b45309",
  },
];

const comingSoonWidgets = [
  {
    title: "Monthly recommendation timeline",
    desc: "Centre-wise monthly trend lines with branch filters and date range selection.",
    color: "#0369a1",
  },
  {
    title: "Centre comparison cards",
    desc: "Side-by-side comparison of recommendation patterns across Army Selection Centres.",
    color: "#1d6b40",
  },
  {
    title: "Entry-type breakdown",
    desc: "How NDA, CDS, TES, ACC, and other entries compare across the same centre.",
    color: "#7c3aed",
  },
  {
    title: "Verified vs community toggle",
    desc: "One-tap filter to see only verified data, only community-reported, or both together.",
    color: "#b45309",
  },
  {
    title: "Journal-linked data points",
    desc: "Click any high or low data point and surface the aspirant journals written from that period.",
    color: "#be123c",
  },
  {
    title: "Board-specific signal cards",
    desc: "Individual signal cards for each board (11 SSB, 14 SSB, 1 AFSB, etc.) within a centre.",
    color: "#0f766e",
  },
];

const dataQualityLevels = [
  {
    level: "Verified",
    description: "Submitted by aspirants with corroborating details, reviewed by the SSB Sarthi team.",
    badge: "🟢",
  },
  {
    level: "Community-reported",
    description: "Submitted by community members without full verification. Useful directionally.",
    badge: "🟡",
  },
  {
    level: "Unverified signal",
    description: "Aggregated from public sources. Treat as context only, not conclusion.",
    badge: "🔴",
  },
];

export default function TrendsPage() {
  return (
    <main className="pb-20">
      {/* ── Hero ── */}
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
                Patterns matter — but only when they come with the right context.
                This section will show centre-wise and board-wise trends with
                verified data, proper labelling, and stories behind the numbers.
              </p>

              {/* Data quality legend */}
              <div className="mt-8 space-y-3">
                {dataQualityLevels.map((level) => (
                  <div
                    key={level.level}
                    className="flex items-start gap-3 rounded-2xl border border-white/80 bg-white/80 px-4 py-3 shadow-sm"
                  >
                    <span className="text-lg leading-none">{level.badge}</span>
                    <div>
                      <p className="text-sm font-bold text-[var(--color-ink-strong)]">
                        {level.level}
                      </p>
                      <p className="mt-0.5 text-xs text-[var(--color-muted)]">
                        {level.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right panel */}
            <div className="space-y-4">
              <div className="rounded-[1.6rem] border border-white/80 bg-[#0d1b2f] p-5 text-white shadow-[0_18px_46px_rgba(15,23,42,0.18)]">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/58">
                  Current positioning
                </p>
                <p className="mt-3 font-display text-3xl font-semibold tracking-[-0.05em]">
                  Trust first, charts second.
                </p>
                <p className="mt-3 text-sm leading-7 text-white/78">
                  Before showing numbers, this page teaches users what data is
                  reliable, what is community-reported, and what should be
                  treated cautiously. That distinction is the product.
                </p>
              </div>
              <div className="rounded-[1.6rem] border border-white/80 bg-white/92 p-5 shadow-sm">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                  Coming next
                </p>
                <p className="mt-2 text-sm font-semibold leading-7 text-[var(--color-ink-strong)]">
                  Live centre-wise charts will go live once we have a strong
                  base of verified aspirant submissions.
                </p>
                <p className="mt-2 text-xs text-[var(--color-muted)]">
                  If you've recently appeared at an SSB, your journal submission
                  directly contributes to this data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Principles ── */}
      <section className="mx-auto w-full max-w-7xl px-6 pt-12 sm:px-10 lg:px-12">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--color-accent-strong)]">
            How we think about trends
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.04em] text-[var(--color-ink-strong)] sm:text-4xl">
            Four principles that keep this honest.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {trendPrinciples.map((item) => (
            <article
              key={item.title}
              className="relative overflow-hidden rounded-[1.7rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(243,250,255,0.92))] p-6 shadow-[var(--shadow-card)]"
            >
              <div
                className="absolute right-0 top-0 h-32 w-32 rounded-full opacity-10"
                style={{
                  background: `radial-gradient(circle, ${item.color}, transparent 70%)`,
                }}
              />
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl text-lg"
                style={{ background: `color-mix(in srgb, ${item.color} 10%, white)` }}
              >
                {item.icon}
              </div>
              <h3
                className="mt-4 font-display text-2xl font-semibold tracking-[-0.04em]"
                style={{ color: item.color }}
              >
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      {/* ── Coming soon widgets ── */}
      <section className="mx-auto w-full max-w-7xl px-6 pt-12 sm:px-10 lg:px-12">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--color-accent-strong)]">
            What's being built
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.04em] text-[var(--color-ink-strong)] sm:text-4xl">
            The full trends dashboard, planned.
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {comingSoonWidgets.map((widget) => (
            <div
              key={widget.title}
              className="rounded-[1.5rem] border border-white/80 bg-white/90 p-5 shadow-sm"
            >
              <div
                className="mb-3 inline-block h-1.5 w-8 rounded-full"
                style={{ background: widget.color }}
              />
              <h3 className="font-display text-lg font-semibold text-[var(--color-ink-strong)]">
                {widget.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-muted)]">
                {widget.desc}
              </p>
              <p
                className="mt-3 text-[11px] font-bold uppercase tracking-widest"
                style={{ color: widget.color }}
              >
                Coming soon
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}