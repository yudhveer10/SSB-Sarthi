import Link from "next/link";

const features = [
  {
    href: "/process",
    emoji: "🗓️",
    tag: "5-Day Guide",
    title: "The SSB Process",
    desc: "A complete day-by-day breakdown of everything that happens inside the board — from screening to the Day 5 conference.",
    accent: "#5b8fc9",
  },
  {
    href: "/centers",
    emoji: "🏛️",
    tag: "14 Centres",
    title: "Service Centre Browser",
    desc: "Find every Army, Air Force, and Navy SSB centre with address, board numbers, transport details, and travel tips.",
    accent: "#6f8f4d",
  },
  {
    href: "/resources",
    emoji: "📋",
    tag: "Prep Material",
    title: "Resources",
    desc: "Document checklist, PI theme guides with real question examples, psychology tips, and myths vs reality cards.",
    accent: "#4f6f8c",
  },
  {
    href: "/screening",
    emoji: "🧩",
    tag: "Interactive",
    title: "Screening Practice",
    desc: "An OIR quiz and PPDT picture viewer to sharpen your Day 1 performance before you reach the board.",
    accent: "#5b8fc9",
  },
];

const stats = [
  { value: "14", label: "Selection Centres", sub: "Army · Air Force · Navy" },
  { value: "5", label: "Testing Days", sub: "Screening to Conference" },
  { value: "15", label: "OLQs Assessed", sub: "Officer Like Qualities" },
  { value: "3", label: "Assessors", sub: "Psych · IO · GTO" },
];

const steps = [
  { day: "Day 1", label: "Screening", color: "#5b8fc9", note: "OIR + PPDT" },
  { day: "Day 2", label: "Psychology", color: "#4f6f8c", note: "TAT · WAT · SRT · SD" },
  { day: "Days 3–4", label: "GTO Tasks", color: "#6f8f4d", note: "Outdoor + indoor tasks" },
  { day: "Days 2–4", label: "Personal Interview", color: "#7b8d9a", note: "IO interview" },
  { day: "Day 5", label: "Conference", color: "#102033", note: "Board alignment" },
];

const myths = [
  {
    myth: "Coaching centres guarantee selection.",
    reality: "Coaching can sharpen presentation, but it cannot replace genuine Officer Like Qualities.",
  },
  {
    myth: "You need a military family background.",
    reality: "The board looks for qualities and consistency, not lineage.",
  },
  {
    myth: "Tall, athletic candidates are always preferred.",
    reality: "Fitness helps, but intelligence, responsibility, and leadership matter more.",
  },
];

export default function HomePage() {
  return (
    <main className="pb-24">
      <section className="mx-auto w-full max-w-7xl px-6 pt-10 sm:px-10 lg:px-12">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/75 bg-[linear-gradient(140deg,rgba(255,255,255,0.97)_0%,rgba(224,246,255,0.93)_55%,rgba(230,250,245,0.9)_100%)] px-6 py-12 shadow-[var(--shadow-soft)] sm:px-10 sm:py-16 lg:px-14 lg:py-20">
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(127,179,227,0.16)_0%,transparent_65%)]" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(111,143,77,0.12)_0%,transparent_65%)]" />
          <div className="pointer-events-none absolute right-1/3 bottom-0 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(91,143,201,0.08)_0%,transparent_70%)]" />

          <div className="relative">
            <div className="badge animate-fade-up">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent-strong)]" />
              India&apos;s SSB Preparation Guide
            </div>

            <h1 className="animate-fade-up stagger-1 mt-6 max-w-4xl text-[clamp(2.4rem,6vw,4.5rem)] font-display font-semibold leading-[1.01] tracking-[-0.05em] text-[var(--color-ink-strong)]">
              Prepare for your <span className="text-gradient">SSB interview</span> the right way.
            </h1>

            <p className="animate-fade-up stagger-2 mt-6 max-w-2xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
              SSB Sarthi gives you a clear, honest map of the entire Service Selection Board
              process — day-by-day breakdowns, centre details, practice tools, and preparation
              resources. No coaching gimmicks.
            </p>

            <div className="animate-fade-up stagger-3 mt-8 flex flex-wrap gap-3">
              <Link
                href="/process"
                className="inline-flex items-center gap-2 rounded-2xl px-6 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:opacity-90 active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #5b8fc9 0%, #7fb3e3 100%)",
                  boxShadow: "0 4px 20px rgba(91,143,201,0.28)",
                }}
              >
                Understand the Process
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/centers"
                className="inline-flex items-center gap-2 rounded-2xl border px-6 py-3.5 text-sm font-bold transition-all duration-200 hover:bg-white/70 active:scale-95"
                style={{
                  borderColor: "var(--color-border-strong)",
                  color: "var(--color-ink-strong)",
                }}
              >
                Find My Centre
              </Link>
            </div>

            <div className="animate-fade-up stagger-4 mt-10 flex flex-wrap gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-3 rounded-2xl border border-white/90 bg-white/75 px-5 py-3 shadow-[var(--shadow-card)]"
                >
                  <span className="font-display text-2xl font-bold text-[var(--color-accent-strong)]">
                    {stat.value}
                  </span>
                  <div>
                    <p className="text-xs font-bold text-[var(--color-ink-strong)]">{stat.label}</p>
                    <p className="mt-0.5 text-[11px] text-[var(--color-muted)]">{stat.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pt-10 sm:px-10 lg:px-12">
        <div className="overflow-hidden rounded-[1.75rem] bg-[#0d1b2f] p-6 shadow-[var(--shadow-raised)] sm:p-7">
          <div className="mb-5 flex items-center gap-3">
            <span className="text-[11px] font-bold uppercase tracking-[0.24em] text-white/50">
              At a glance
            </span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {steps.map((step, index) => (
              <div
                key={step.day}
                className="relative rounded-2xl border p-4"
                style={{
                  background: `color-mix(in srgb, ${step.color} 15%, rgba(255,255,255,0.04))`,
                  borderColor: `color-mix(in srgb, ${step.color} 35%, transparent)`,
                }}
              >
                {index < steps.length - 1 ? (
                  <span className="pointer-events-none absolute -right-1.5 top-1/2 hidden h-px w-3 bg-white/12 lg:block" />
                ) : null}
                <p className="text-[10px] font-black uppercase tracking-[0.22em]" style={{ color: step.color }}>
                  {step.day}
                </p>
                <p className="mt-1.5 text-sm font-bold leading-snug text-white/92">{step.label}</p>
                <p className="mt-1 text-[11px] leading-relaxed text-white/45">{step.note}</p>
              </div>
            ))}
          </div>

          <div className="mt-5 flex justify-end">
            <Link
              href="/process"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-accent)] transition-opacity hover:opacity-80"
            >
              Full 5-day breakdown
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pt-12 sm:px-10 lg:px-12">
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--color-accent-strong)]">
            What&apos;s inside
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.04em] text-[var(--color-ink-strong)] sm:text-4xl">
            Everything you need in one place.
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <Link
              key={feature.href}
              href={feature.href}
              className="card-lift group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.97)_0%,rgba(247,253,255,0.94)_100%)] p-6 shadow-[var(--shadow-card)]"
            >
              <div
                className="absolute left-0 right-0 top-0 h-0.5 rounded-t-[1.75rem]"
                style={{ background: feature.accent }}
              />
              <div
                className="flex h-12 w-12 items-center justify-center rounded-2xl text-2xl"
                style={{ background: `color-mix(in srgb, ${feature.accent} 10%, rgba(255,255,255,0.6))` }}
                aria-hidden="true"
              >
                {feature.emoji}
              </div>
              <span className="mt-4 inline-block text-[10px] font-black uppercase tracking-[0.22em]" style={{ color: feature.accent }}>
                {feature.tag}
              </span>
              <h3 className="mt-1.5 font-display text-xl font-semibold leading-snug tracking-[-0.03em] text-[var(--color-ink-strong)]">
                {feature.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-7 text-[var(--color-muted)]">
                {feature.desc}
              </p>
              <div className="mt-5 flex items-center justify-end">
                <span
                  className="flex h-8 w-8 items-center justify-center rounded-xl transition-all duration-200 group-hover:translate-x-0.5"
                  style={{ background: `color-mix(in srgb, ${feature.accent} 12%, transparent)`, color: feature.accent }}
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pt-12 sm:px-10 lg:px-12">
        <div className="mb-7">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--color-warm-strong)]">
            Clear the noise
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.04em] text-[var(--color-ink-strong)] sm:text-4xl">
            Common SSB myths, debunked.
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {myths.map((item) => (
            <div
              key={item.myth}
              className="overflow-hidden rounded-[1.5rem] border border-[var(--color-border)] shadow-[var(--shadow-card)]"
            >
              <div className="bg-[rgba(239,68,68,0.06)] px-5 py-4">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#ef4444]">
                  ✗ Myth
                </p>
                <p className="text-sm font-semibold leading-relaxed text-[var(--color-ink-strong)]">
                  {item.myth}
                </p>
              </div>
              <div className="bg-[rgba(111,143,77,0.06)] px-5 py-4">
                <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#6f8f4d]">
                  ✓ Reality
                </p>
                <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                  {item.reality}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pt-12 sm:px-10 lg:px-12">
        <div className="relative overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#0d1b2f_0%,#0e3352_50%,#0d2a4a_100%)] px-8 py-12 text-center text-white sm:px-12 sm:py-14">
          <div className="pointer-events-none absolute inset-0 rounded-[2rem] bg-[radial-gradient(ellipse_70%_70%_at_50%_-10%,rgba(127,179,227,0.22),transparent)]" />
          <div className="relative">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[rgba(91,143,201,0.9)]">
              You&apos;re here for a reason
            </p>
            <h2 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] text-white/95 sm:text-4xl">
              The board is looking for who you really are.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm leading-8 text-white/55">
              The only candidate the SSB recommends is one who is consistently
              themselves across five days. Start understanding what that means before
              you walk through the gate.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/process"
                className="inline-flex items-center gap-2 rounded-2xl px-7 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:opacity-90 active:scale-95"
                style={{
                  background: "linear-gradient(135deg, #0891b2 0%, #0e7490 100%)",
                  boxShadow: "0 4px 24px rgba(91,143,201,0.35)",
                }}
              >
                Start with the Process
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center gap-2 rounded-2xl border px-7 py-3.5 text-sm font-bold text-white transition-all duration-200 hover:bg-white/10 active:scale-95"
                style={{
                  borderColor: "rgba(255,255,255,0.18)",
                  color: "rgba(255,255,255,0.85)",
                }}
              >
                Browse Resources
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
