import Link from "next/link";

// Real-time SSB & defence headlines curated for aspirants
// Update this list periodically (or wire to a CMS / RSS later).
const liveHeadlines = [
  {
    tag: "NDA",
    title: "UPSC NDA 2 2025 result out — 406 vacancies, SSB registration open on joinindianarmy.nic.in",
    date: "Oct 2025",
    href: "https://www.joinindianarmy.nic.in",
  },
  {
    tag: "CDS",
    title: "UPSC CDS II 2026 notification released — 451 vacancies across IMA, INA, AFA & OTA",
    date: "May 2026",
    href: "https://upsconline.nic.in",
  },
  {
    tag: "Reform",
    title: "Indian Army to roll out computer-based SSB Stage-1 screening by end of 2026",
    date: "Apr 2026",
    href: "https://news.ssbcrack.com",
  },
  {
    tag: "TES / TGC",
    title: "New UPSC CDSTE exam to replace direct SSB calls for TGC & SSC (Tech) from 2027",
    date: "2027 onward",
    href: "https://upsc.gov.in",
  },
  {
    tag: "NCC Entry",
    title: "Bonus marks now factored in for NCC ‘C’ certificate holders to reduce SSB crowding",
    date: "2026",
    href: "https://indianarmy.nic.in",
  },
  {
    tag: "Women in NDA",
    title: "121 women cadets currently training at NDA — 17 graduated in the 2025 batch",
    date: "2025",
    href: "https://nda.nic.in",
  },
];

const quickStats = [
  { value: "5 Days", label: "broken down into clear, confidence-building stages" },
  { value: "13+", label: "high-interest selection centres ready for discovery UX" },
  { value: "4 Modules", label: "framed around the real aspirant journey" },
  { value: "0.2–0.3%", label: "final SSB selection rate — preparation has to be sharp" },
];

const featureCards = [
  {
    title: "Process Clarity",
    description:
      "Understand each day of SSB with clear breakdowns for screening, psychology, GTO, interview, and conference.",
    href: "/process",
    eyebrow: "process",
  },
  {
    title: "Centre Intelligence",
    description:
      "Explore selection centres, their locations, reporting context, boards, and student-reported observations in one place.",
    href: "/centers",
    eyebrow: "centres",
  },
  {
    title: "Recommendation Trends",
    description:
      "Track centre-wise momentum over time and build a more grounded picture from verified or moderated submissions.",
    href: "/trends",
    eyebrow: "trends",
  },
  {
    title: "Student Journals",
    description:
      "Read honest experiences from aspirants and later publish your own journal so others can learn from your journey.",
    href: "/journals",
    eyebrow: "journals",
  },
];

const platformPillars = [
  {
    title: "For first-time aspirants",
    body: "Get a straightforward starting point without jumping between scattered Telegram groups, YouTube clips and PDFs.",
  },
  {
    title: "For repeat candidates",
    body: "Compare centres, revise process expectations, and capture lessons from each attempt with more structure.",
  },
  {
    title: "For the community",
    body: "Build a trustworthy knowledge base where aspirants help each other with useful, experience-backed insights.",
  },
];

const experienceSignals = [
  "Branch-first centre discovery instead of random city dumps",
  "Guided entry points for process, centres, trends, and journals",
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
      "Replace placeholder cards with checklists, trend snapshots, and centre-linked help content.",
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
    title: "Start with the branch and centre that actually matter to you.",
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
    body: "The long-term advantage is community memory: better context, fewer myths, and grounded expectations.",
  },
];

const buildPhases = [
  "Process guides that feel like a guided walkthrough",
  "Centre pages with branch-specific travel and reporting context",
  "Moderated trend snapshots instead of rumor-heavy charts",
  "Community journals tied to centres and outcomes",
];

export default function Home() {
  return (
    <main className="bg-[var(--color-page)] text-[var(--color-ink)]">
      {/* ─────────────────────────── LIVE TICKER ─────────────────────────── */}
      <div className="relative z-10 border-b border-white/60 bg-[linear-gradient(90deg,rgba(8,17,33,0.96),rgba(15,95,214,0.96))] text-white">
        <div className="mx-auto flex w-full max-w-7xl items-center gap-4 px-6 py-2.5 sm:px-10 lg:px-12">
          <span className="hidden shrink-0 items-center gap-2 rounded-full bg-white/12 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-white/85 sm:inline-flex">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-accent)]" />
            </span>
            Live updates
          </span>
          <div className="ticker-track flex-1 overflow-hidden">
            <div className="ticker-content flex gap-10 whitespace-nowrap text-sm font-medium">
              {[...liveHeadlines, ...liveHeadlines].map((h, i) => (
                <a
                  key={`${h.title}-${i}`}
                  href={h.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-white/90 transition-colors hover:text-white"
                >
                  <span className="rounded-full bg-white/15 px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white">
                    {h.tag}
                  </span>
                  <span>{h.title}</span>
                  <span className="text-white/55">· {h.date}</span>
                  <span aria-hidden="true" className="text-white/40">•</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ─────────────────────────── HERO ─────────────────────────── */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(58,196,255,0.16),_transparent_24%),radial-gradient(circle_at_top_right,_rgba(15,95,214,0.16),_transparent_28%),radial-gradient(circle_at_50%_30%,_rgba(255,255,255,0.92),_transparent_34%),radial-gradient(circle_at_bottom_left,_rgba(255,122,89,0.12),_transparent_24%)]" />
        <div className="relative mx-auto flex min-h-[calc(100vh-9rem)] w-full max-w-7xl flex-col justify-center px-6 py-16 sm:px-10 lg:px-12 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/75 bg-white/84 px-4 py-2 text-sm font-semibold text-[var(--color-muted)] shadow-sm backdrop-blur">
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]" />
                Built for NDA, CDS, AFCAT & TES aspirants across India
              </div>
              <h1 className="mt-6 max-w-5xl font-display text-5xl font-semibold leading-[0.92] tracking-[-0.07em] text-[var(--color-ink-strong)] sm:text-6xl lg:text-[5.4rem]">
                One calm place to plan your SSB &mdash; not another cluttered prep site.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-muted)] sm:text-[1.18rem]">
                SSB Sarthi brings process clarity, selection-centre discovery,
                recommendation trends, and real aspirant stories into one
                sharper product experience &mdash; so you can prepare with
                confidence and skip the noise.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/centers"
                  className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_42px_rgba(8,145,178,0.3)] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Explore Selection Centres
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

            {/* RIGHT-SIDE LIVE BRIEFING CARD */}
            <div className="relative">
              <div className="floating-card rounded-[2rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(236,247,255,0.94))] p-6 shadow-[var(--shadow-soft)] sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.22em] text-[var(--color-muted)]">
                      Aspirant briefing
                    </p>
                    <h2 className="mt-2 max-w-sm font-display text-3xl font-semibold tracking-[-0.05em] text-[var(--color-ink-strong)]">
                      What changed for SSB candidates this cycle
                    </h2>
                  </div>
                  <div className="rounded-full bg-[var(--color-accent-soft)] px-4 py-2 text-sm font-semibold text-[var(--color-accent-strong)] shadow-sm">
                    Live
                  </div>
                </div>

                <ul className="mt-6 space-y-3">
                  {liveHeadlines.slice(0, 4).map((h) => (
                    <li
                      key={h.title}
                      className="group flex gap-3 rounded-[1.2rem] border border-white/70 bg-white/85 px-4 py-3 shadow-sm transition-colors hover:border-[rgba(8,145,178,0.25)]"
                    >
                      <span className="mt-0.5 inline-flex shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-soft)] px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-[0.18em] text-[var(--color-accent-strong)]">
                        {h.tag}
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold leading-6 text-[var(--color-ink-strong)]">
                          {h.title}
                        </p>
                        <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-muted)]">
                          {h.date}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 rounded-[1.4rem] border border-white/80 bg-[#0d1b2f] p-5 text-white shadow-[0_18px_46px_rgba(15,23,42,0.2)]">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/60">
                      Best next click
                    </p>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/80">
                      live flow
                    </span>
                  </div>
                  <p className="mt-3 font-display text-xl font-semibold tracking-[-0.04em]">
                    Branch-first centre browsing
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/74">
                    Choose Army, Air Force or Navy first &mdash; then explore
                    Allahabad, Bhopal, Bangalore, Mysuru, Varanasi, Kapurthala,
                    Dehradun, Gandhinagar and more.
                  </p>
                </div>
              </div>

              <div className="absolute -bottom-6 -left-4 hidden w-64 rounded-[1.6rem] border border-white/70 bg-white/88 p-4 shadow-[0_20px_60px_rgba(15,23,42,0.1)] backdrop-blur lg:block">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[var(--color-accent-strong)]">
                  Heads up
                </p>
                <p className="mt-2 text-sm leading-7 text-[var(--color-ink)]">
                  Stage-1 screening goes computer-based by end of 2026. We&apos;ll
                  track every change so you don&apos;t have to.
                </p>
              </div>
            </div>
          </div>

          {/* QUICK STATS */}
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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

      {/* ─────────────────────────── NEWS / HEADLINES SECTION ─────────────────────────── */}
      <section className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-strong)]">
              SSB pulse
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-[-0.05em] text-[var(--color-ink-strong)]">
              The headlines every defence aspirant should know this season.
            </h2>
            <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">
              From UPSC notifications to selection-process reforms &mdash;
              curated so you spend less time scrolling and more time preparing.
            </p>
          </div>
          <Link
            href="/trends"
            className="inline-flex w-fit items-center justify-center rounded-full border border-[rgba(8,145,178,0.22)] bg-white px-5 py-3 text-sm font-semibold text-[var(--color-accent-strong)] shadow-sm transition-colors hover:bg-[var(--color-accent-soft)]"
          >
            See all trends →
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {liveHeadlines.map((h) => (
            <a
              key={h.title}
              href={h.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col rounded-[1.7rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(245,250,255,0.92))] p-6 shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-1 hover:border-[rgba(8,145,178,0.25)] hover:shadow-[0_28px_72px_rgba(15,23,42,0.12)]"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-accent-soft)] px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-accent-strong)]">
                  {h.tag}
                </span>
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  {h.date}
                </span>
              </div>
              <p className="mt-5 font-display text-xl font-semibold leading-snug tracking-[-0.03em] text-[var(--color-ink-strong)]">
                {h.title}
              </p>
              <p className="mt-auto pt-6 text-sm font-semibold text-[var(--color-accent-strong)] transition-transform duration-200 group-hover:translate-x-1">
                Read context →
              </p>
            </a>
          ))}
        </div>
      </section>

      {/* ─────────────────────────── PLATFORM MODULES ─────────────────────────── */}
      <section className="mx-auto w-full max-w-7xl px-6 pb-20 sm:px-10 lg:px-12">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-strong)]">
            Platform modules
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-[-0.05em] text-[var(--color-ink-strong)]">
            Built around the questions aspirants ask most.
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
                {card.eyebrow}
              </p>
              <h3 className="mt-4 font-display text-3xl font-semibold tracking-[-0.04em] text-[var(--color-ink-strong)]">
                {card.title}
              </h3>
              <p className="mt-4 max-w-xl text-base leading-7 text-[var(--color-muted)]">
                {card.description}
              </p>
              <p className="mt-6 text-sm font-semibold text-[var(--color-accent-strong)] transition-transform duration-200 group-hover:translate-x-1">
                Open section →
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* ─────────────────────────── JOURNEY ─────────────────────────── */}
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

      {/* ─────────────────────────── WHY IT MATTERS ─────────────────────────── */}
      <section className="mt-20 border-y border-white/70 bg-[var(--color-surface)]">
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
              Of the 5&ndash;6 lakh candidates who apply for NDA each cycle,
              only a few hundred are finally selected. With that kind of
              competition, aspirants deserve a calm, structured layer on top of
              the scattered Telegram groups, YouTube clips, and fragmented
              advice they currently rely on.
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

      {/* ─────────────────────────── NEXT BUILD STEPS ─────────────────────────── */}
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
                first. That means real resources, better trend framing, and
                only then the community-heavy journal and submission flow.
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

      {/* ─────────────────────────── BUILD PHASES STRIP ─────────────────────────── */}
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

      {/* ─────────────────────────── FINAL CTA ─────────────────────────── */}
      <section className="mx-auto w-full max-w-7xl px-6 pb-24 sm:px-10 lg:px-12">
        <div className="overflow-hidden rounded-[2rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(236,247,255,0.92))] px-6 py-12 text-center shadow-[var(--shadow-soft)] sm:px-10">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-strong)]">
            Ready when you are
          </p>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-[-0.05em] text-[var(--color-ink-strong)] sm:text-5xl">
            Walk into your SSB centre informed, not overwhelmed.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[var(--color-muted)]">
            Start with the centre you&apos;re reporting to, scan the five-day
            flow, and bookmark the journals you find useful.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/centers"
              className="inline-flex items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_42px_rgba(8,145,178,0.3)] transition-transform duration-200 hover:-translate-y-0.5"
            >
              Find Your Centre
            </Link>
            <Link
              href="/process"
              className="inline-flex items-center justify-center rounded-full border border-white/70 bg-white px-6 py-3.5 text-sm font-semibold text-[var(--color-ink-strong)] shadow-sm transition-colors duration-200 hover:bg-[var(--color-surface)]"
            >
              Read the 5-Day Process
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}