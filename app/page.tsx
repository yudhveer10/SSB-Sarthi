import Link from "next/link";

const quickStats = [
  { value: "5 Days", label: "broken down into clear, confidence-building stages" },
  { value: "13+", label: "high-interest center locations ready for discovery UX" },
  { value: "4 Modules", label: "already framed around the real aspirant journey" },
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

const experienceSignals = [
  "Branch-first center discovery instead of random city dumps",
  "Guided entry points for process, centers, trends, and journals",
  "Calmer product language that reduces overwhelm for first-time users",
];

const homepageSteps = [
  {
    phase: "Now shipping",
    title: "Sharper landing page and navigation",
    detail:
      "A more premium first impression with stronger route hierarchy and clearer calls to action.",
  },
  {
    phase: "Next build step",
    title: "Turn Trends and Resources into real utility pages",
    detail:
      "Replace placeholder cards with useful checklists, trend snapshots, and center-linked help content.",
  },
  {
    phase: "After that",
    title: "Add journals, submissions, and moderation",
    detail:
      "Open up community storytelling carefully once the core information architecture feels trustworthy.",
  },
];

const journeyCards = [
  {
    eyebrow: "Plan",
    title: "Start with the branch and center that actually matter to you.",
    body: "Candidates rarely think in abstract modules. They begin with the service, the city, and what reporting day will feel like.",
  },
  {
    eyebrow: "Prepare",
    title: "Understand each stage before anxiety turns into guesswork.",
    body: "The process experience should feel like a guided prep companion, not a pile of notes copied from old posts.",
  },
  {
    eyebrow: "Reflect",
    title: "Use trends and journals to learn from what others really experienced.",
    body: "The long-term advantage is community memory: better context, fewer myths, and more grounded expectations.",
  },
];

const buildPhases = [
  "Process guides that feel like a guided walkthrough",
  "Center pages with branch-specific travel and reporting context",
  "Moderated trend snapshots instead of rumor-heavy charts",
  "Community journals tied to centers and outcomes",
];

export default function Home() {
  return (
    <main className="bg-[var(--color-page)] text-[var(--color-ink)]">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(58,196,255,0.16),_transparent_24%),radial-gradient(circle_at_top_right,_rgba(15,95,214,0.16),_transparent_28%),radial-gradient(circle_at_50%_30%,_rgba(255,255,255,0.92),_transparent_34%),radial-gradient(circle_at_bottom_left,_rgba(255,122,89,0.12),_transparent_24%)]" />
        <div className="relative mx-auto flex min-h-[calc(100vh-7rem)] w-full max-w-7xl flex-col justify-center px-6 py-16 sm:px-10 lg:px-12 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/75 bg-white/84 px-4 py-2 text-sm font-semibold text-[var(--color-muted)] shadow-sm backdrop-blur">
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]" />
                Designed for serious SSB aspirants across India
              </div>
              <h1 className="mt-6 max-w-5xl font-display text-5xl font-semibold leading-[0.92] tracking-[-0.07em] text-[var(--color-ink-strong)] sm:text-6xl lg:text-[5.4rem]">
                A modern landing page for the SSB journey, not another cluttered prep site.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-muted)] sm:text-[1.18rem]">
                SSB Sarthi brings process clarity, center discovery, trend
                context, and aspirant stories into one sharper product
                experience so students can plan with more confidence and less
                noise.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/centers"
                  className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_42px_rgba(8,145,178,0.3)] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Explore Centers First
                </Link>
                <Link
                  href="/process"
                  className="inline-flex items-center justify-center rounded-full border border-white/70 bg-white/86 px-6 py-3.5 text-sm font-semibold text-[var(--color-ink-strong)] shadow-sm transition-colors duration-200 hover:bg-[var(--color-surface)]"
                >
                  View 5-Day Process
                </Link>
              </div>
              <div className="mt-8 grid gap-3 sm:max-w-2xl">
                {experienceSignals.map((signal) => (
                  <div
                    key={signal}
                    className="flex items-center gap-3 rounded-2xl border border-white/70 bg-white/74 px-4 py-3 shadow-sm backdrop-blur"
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

            <div className="relative">
              <div className="floating-card rounded-[2rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(236,247,255,0.94))] p-6 shadow-[var(--shadow-soft)] sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.22em] text-[var(--color-muted)]">
                      Product snapshot
                    </p>
                    <h2 className="mt-2 max-w-sm font-display text-3xl font-semibold tracking-[-0.05em] text-[var(--color-ink-strong)]">
                      A cleaner, more premium entry point into the platform
                    </h2>
                  </div>
                  <div className="rounded-full bg-[var(--color-accent-soft)] px-4 py-2 text-sm font-semibold text-[var(--color-accent-strong)] shadow-sm">
                    v1 refresh
                  </div>
                </div>

                <div className="mt-8 grid gap-4">
                  <div className="rounded-[1.6rem] border border-white/80 bg-[#0d1b2f] p-5 text-white shadow-[0_18px_46px_rgba(15,23,42,0.2)]">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/60">
                        Best next click
                      </p>
                      <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">
                        live flow
                      </span>
                    </div>
                    <p className="mt-4 font-display text-2xl font-semibold tracking-[-0.05em]">
                      Branch-first center browsing
                    </p>
                    <p className="mt-3 text-sm leading-7 text-white/74">
                      The centers section now follows how aspirants really think:
                      choose Army, Air Force, or Navy first, then explore
                      location details.
                    </p>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[1.5rem] border border-white/80 bg-white/90 p-5 shadow-sm">
                      <p className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                        Process
                      </p>
                      <p className="mt-3 font-display text-2xl font-semibold tracking-[-0.05em] text-[var(--color-ink-strong)]">
                        5-day flow
                      </p>
                      <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                        Students can scan the full assessment arc quickly before
                        going deeper.
                      </p>
                    </div>

                    <div className="rounded-[1.5rem] border border-white/80 bg-white/90 p-5 shadow-sm">
                      <p className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                        Next up
                      </p>
                      <p className="mt-3 font-display text-2xl font-semibold tracking-[-0.05em] text-[var(--color-ink-strong)]">
                        Trends + resources
                      </p>
                      <p className="mt-2 text-sm leading-7 text-[var(--color-muted)]">
                        These are the most logical utility pages to turn into
                        real content next.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-4 hidden w-64 rounded-[1.6rem] border border-white/70 bg-white/88 p-4 shadow-[0_20px_60px_rgba(15,23,42,0.1)] backdrop-blur lg:block">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[var(--color-accent-strong)]">
                  Build focus
                </p>
                <p className="mt-2 text-sm leading-7 text-[var(--color-ink)]">
                  The smartest next product move is turning utility-heavy pages
                  into real content before opening community submissions.
                </p>
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

      <section className="mx-auto w-full max-w-7xl px-6 pb-6 sm:px-10 lg:px-12">
        <div className="grid gap-6 lg:grid-cols-3">
          {journeyCards.map((card) => (
            <article
              key={card.title}
              className="rounded-[1.8rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(240,248,255,0.92))] p-7 shadow-[var(--shadow-card)]"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-accent-strong)]">
                {card.eyebrow}
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold leading-tight tracking-[-0.05em] text-[var(--color-ink-strong)]">
                {card.title}
              </h2>
              <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">
                {card.body}
              </p>
            </article>
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
        <div className="overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,_#081121_0%,_#0f5fd6_50%,_#3ac4ff_100%)] px-6 py-10 text-white shadow-[0_30px_80px_rgba(23,37,84,0.22)] sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/70">
                Next steps
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-[-0.05em]">
                The next build priorities are clearer now.
              </h2>
              <p className="mt-4 text-base leading-8 text-white/82">
                The foundation is strongest when we deepen the utility pages
                first. That means real resources, better trend framing, and only
                then the community-heavy journal and submission flow.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/resources"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#172554] transition-colors hover:bg-[#fff1d8]"
                >
                  Open Resources
                </Link>
                <Link
                  href="/trends"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Review Trends
                </Link>
              </div>
            </div>

            <div className="grid gap-4">
              {homepageSteps.map((step) => (
                <article
                  key={step.title}
                  className="rounded-[1.6rem] border border-white/18 bg-white/10 p-5 backdrop-blur"
                >
                  <p className="text-[0.7rem] font-bold uppercase tracking-[0.24em] text-white/65">
                    {step.phase}
                  </p>
                  <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.04em]">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/78 sm:text-base">
                    {step.detail}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pb-20 sm:px-10 lg:px-12">
        <div className="grid gap-4 lg:grid-cols-4">
          {buildPhases.map((phase) => (
            <div
              key={phase}
              className="rounded-[1.5rem] border border-white/80 bg-white/88 px-5 py-5 shadow-sm"
            >
              <p className="text-sm leading-7 text-[var(--color-ink)]">{phase}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
