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
      <section className="relative overflow-hidden border-b border-black/8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(194,65,12,0.16),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(23,37,84,0.14),_transparent_32%),linear-gradient(180deg,_#fffaf2_0%,_#fffdf8_52%,_#ffffff_100%)]" />
        <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-7xl flex-col justify-center px-6 py-16 sm:px-10 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div className="max-w-3xl">
              <div className="inline-flex items-center rounded-full border border-[var(--color-border)] bg-white/85 px-4 py-2 text-sm font-medium text-[var(--color-muted)] shadow-sm backdrop-blur">
                Built for SSB aspirants across India
              </div>
              <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-none tracking-[-0.04em] text-[var(--color-ink-strong)] sm:text-6xl lg:text-7xl">
                One platform to understand the SSB journey with confidence.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-muted)] sm:text-xl">
                SSB Sarthi helps students explore the full 5-day process,
                compare centers and boards, follow recommendation trends, and
                learn from real journals shared by fellow aspirants.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/process"
                  className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-6 py-3 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[var(--color-accent-strong)]"
                >
                  Explore the Process
                </Link>
                <Link
                  href="/centers"
                  className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] bg-white px-6 py-3 text-sm font-semibold text-[var(--color-ink-strong)] transition-colors duration-200 hover:bg-[var(--color-surface)]"
                >
                  Browse Centers
                </Link>
              </div>
            </div>

            <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-card)] p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.22em] text-[var(--color-muted)]">
                    MVP Focus
                  </p>
                  <h2 className="mt-2 font-serif text-3xl text-[var(--color-ink-strong)]">
                    Student-first and easy to trust
                  </h2>
                </div>
                <div className="rounded-full bg-[var(--color-accent-soft)] px-4 py-2 text-sm font-semibold text-[var(--color-accent-strong)]">
                  Phase 1
                </div>
              </div>
              <div className="mt-8 space-y-4">
                {buildPhases.map((phase) => (
                  <div
                    key={phase}
                    className="flex items-start gap-3 rounded-2xl bg-white px-4 py-4"
                  >
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]" />
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
                className="rounded-[1.5rem] border border-[var(--color-border)] bg-white/92 px-5 py-6 shadow-sm backdrop-blur"
              >
                <p className="font-serif text-3xl text-[var(--color-ink-strong)]">
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
          <h2 className="mt-4 font-serif text-4xl leading-tight text-[var(--color-ink-strong)]">
            The first version is built around the questions aspirants ask most.
          </h2>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {featureCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-card)] p-7 transition-all duration-200 hover:-translate-y-1 hover:border-[var(--color-accent)] hover:shadow-[0_24px_50px_rgba(15,23,42,0.08)]"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                {card.href.replace("/", "") || "home"}
              </p>
              <h3 className="mt-4 font-serif text-3xl text-[var(--color-ink-strong)]">
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

      <section className="border-y border-black/8 bg-[var(--color-surface)]">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-20 sm:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-strong)]">
              Why it matters
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-[var(--color-ink-strong)]">
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
                className="rounded-[1.5rem] border border-[var(--color-border)] bg-white p-6 shadow-sm"
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
        <div className="rounded-[2rem] bg-[linear-gradient(135deg,_#172554_0%,_#1e3a8a_45%,_#c2410c_100%)] px-6 py-10 text-white shadow-[0_30px_80px_rgba(23,37,84,0.22)] sm:px-8 lg:px-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">
                Next steps
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-tight">
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
