import Link from "next/link";

const quickStats = [
  { value: "5 Days", label: "of SSB stages explained simply" },
  { value: "13+", label: "major center locations to map and compare" },
  { value: "1 Place", label: "for journals, trends, boards, and guidance" },
];

const featureCards = [
  {
    title: "Process Clarity",
    description:
      "Understand each day of SSB with clear breakdowns for screening, psychology, GTO, interview, and conference.",
    href: "/process",
  },
  {
    title: "Center Intelligence",
    description:
      "Explore centers, their locations, reporting context, boards, and student-reported observations in one place.",
    href: "/centers",
  },
  {
    title: "Recommendation Trends",
    description:
      "Track center-wise momentum over time and build a more grounded picture from verified or moderated submissions.",
    href: "/trends",
  },
  {
    title: "Student Journals",
    description:
      "Read honest experiences from aspirants and later publish your own journal so others can learn from your journey.",
    href: "/journals",
  },
];

const platformPillars = [
  {
    title: "For first-time aspirants",
    body: "Get a straightforward starting point without jumping between scattered videos, chats, and PDFs.",
  },
  {
    title: "For repeat candidates",
    body: "Compare centers, revise process expectations, and capture lessons from each attempt with more structure.",
  },
  {
    title: "For the community",
    body: "Build a trustworthy knowledge base where aspirants help each other with useful, experience-backed insights.",
  },
];

const buildPhases = [
  "Day-wise SSB process guides",
  "Center and board directory",
  "Community journal feed",
  "Recommendation trend dashboard",
  "Student submission and moderation flow",
];

export default function Home() {
  return (
    <main className="bg-[var(--color-page)] text-[var(--color-ink)]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(58,196,255,0.14),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(15,95,214,0.14),_transparent_30%),radial-gradient(circle_at_bottom_left,_rgba(255,122,89,0.12),_transparent_26%)]" />
        <div className="relative mx-auto flex min-h-[calc(100vh-7rem)] w-full max-w-7xl flex-col justify-center px-6 py-18 sm:px-10 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div className="max-w-3xl">
              <div className="inline-flex items-center rounded-full border border-white/70 bg-white/80 px-4 py-2 text-sm font-semibold text-[var(--color-muted)] shadow-sm backdrop-blur">
                Built for SSB aspirants across India
              </div>
              <h1 className="mt-6 max-w-5xl font-display text-5xl font-semibold leading-[0.95] tracking-[-0.06em] text-[var(--color-ink-strong)] sm:text-6xl lg:text-[5.2rem]">
                The SaaS-style command center for every serious SSB aspirant.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-muted)] sm:text-[1.22rem]">
                SSB Sarthi helps students explore the full 5-day process,
                compare centers and boards, follow recommendation trends, and
                learn from real journals shared by fellow aspirants.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/process"
                  className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_16px_36px_rgba(8,145,178,0.28)] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Explore the Process
                </Link>
                <Link
                  href="/centers"
                  className="inline-flex items-center justify-center rounded-full border border-white/70 bg-white/86 px-6 py-3.5 text-sm font-semibold text-[var(--color-ink-strong)] shadow-sm transition-colors duration-200 hover:bg-[var(--color-surface)]"
                >
                  Browse Centers
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(236,247,255,0.92))] p-6 shadow-[var(--shadow-soft)] sm:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.22em] text-[var(--color-muted)]">
                    MVP Focus
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-semibold tracking-[-0.05em] text-[var(--color-ink-strong)]">
                    Useful, modern, and addictive to explore
                  </h2>
                </div>
                <div className="rounded-full bg-[var(--color-accent-soft)] px-4 py-2 text-sm font-semibold text-[var(--color-accent-strong)] shadow-sm">
                  Phase 1
                </div>
              </div>
              <div className="mt-8 space-y-4">
                {buildPhases.map((phase) => (
                  <div
                    key={phase}
                    className="flex items-start gap-3 rounded-2xl border border-white/80 bg-white/88 px-4 py-4 shadow-sm"
                  >
                    <span className="mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-xs font-bold text-[var(--color-accent-strong)]">
                      +
                    </span>
                    <p className="text-sm leading-7 text-[var(--color-ink)] sm:text-base">
                      {phase}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {quickStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.5rem] border border-white/80 bg-white/88 px-5 py-6 shadow-sm backdrop-blur"
              >
                <p className="font-display text-3xl font-semibold tracking-[-0.05em] text-[var(--color-ink-strong)]">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-strong)]">
            Platform modules
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-[-0.05em] text-[var(--color-ink-strong)]">
            The first version is built around the questions aspirants ask most.
          </h2>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {featureCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group rounded-[1.9rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(245,250,255,0.92))] p-7 shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-1 hover:border-[rgba(8,145,178,0.22)] hover:shadow-[0_28px_72px_rgba(15,23,42,0.12)]"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                {card.href.replace("/", "") || "home"}
              </p>
              <h3 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] text-[var(--color-ink-strong)]">
                {card.title}
              </h3>
              <p className="mt-4 max-w-xl text-base leading-7 text-[var(--color-muted)]">
                {card.description}
              </p>
              <p className="mt-6 text-sm font-semibold text-[var(--color-accent-strong)] transition-transform duration-200 group-hover:translate-x-1">
                Open section
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-white/70 bg-[var(--color-surface)]">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-20 sm:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-strong)]">
              Why it matters
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-[-0.05em] text-[var(--color-ink-strong)]">
              SSB preparation is already intense. Finding reliable guidance
              should not be.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-[var(--color-muted)]">
              Most students currently depend on scattered Telegram groups,
              YouTube clips, and fragmented personal advice. This platform can
              become the calm, structured layer on top of that noise.
            </p>
          </div>
          <div className="grid gap-5">
            {platformPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-[1.6rem] border border-white/80 bg-white/90 p-6 shadow-sm"
              >
                <h3 className="text-xl font-semibold text-[var(--color-ink-strong)]">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-[var(--color-muted)]">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <div className="rounded-[2rem] bg-[linear-gradient(135deg,_#0d1b2f_0%,_#0f5fd6_52%,_#3ac4ff_100%)] px-6 py-10 text-white shadow-[0_30px_80px_rgba(23,37,84,0.22)] sm:px-8 lg:px-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">
                Next steps
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-[-0.05em]">
                The foundation is ready for the next build step.
              </h2>
              <p className="mt-4 text-base leading-8 text-white/82">
                From here, we can expand the `Process`, `Centers`, `Trends`,
                and `Journals` sections one by one with real content, filters,
                and later user submissions.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/journals"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#172554] transition-colors hover:bg-[#fff1d8]"
              >
                View Journals
              </Link>
              <Link
                href="/resources"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Open Resources
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
