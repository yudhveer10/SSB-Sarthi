import Link from "next/link";

const liveHeadlines = [
  {
    tag: "NDA",
    title:
      "UPSC NDA 2 2025 result out with SSB registration now active for shortlisted candidates.",
    date: "Oct 2025",
    href: "https://www.joinindianarmy.nic.in",
  },
  {
    tag: "CDS",
    title:
      "UPSC CDS II 2026 notification released across IMA, INA, AFA and OTA entries.",
    date: "May 2026",
    href: "https://upsconline.nic.in",
  },
  {
    tag: "Reform",
    title:
      "Indian Army is preparing computer-based Stage 1 screening changes for future cycles.",
    date: "Apr 2026",
    href: "https://news.ssbcrack.com",
  },
  {
    tag: "Tech Entry",
    title:
      "CDSTE is expected to replace direct SSB calls for some technical entries from 2027 onward.",
    date: "2027 onward",
    href: "https://upsc.gov.in",
  },
];

const featureCards = [
  {
    title: "Process Clarity",
    description:
      "Understand screening, psychology, GTO, interview, and conference without jumping through scattered sources.",
    href: "/process",
  },
  {
    title: "Centre Discovery",
    description:
      "Start with Army, Air Force, or Navy first, then browse the centres that actually matter to your entry.",
    href: "/centers",
  },
  {
    title: "Trend Context",
    description:
      "Track shifts in the SSB ecosystem carefully, with context instead of rumor-led noise.",
    href: "/trends",
  },
];

const quickStats = [
  { value: "5 Days", label: "mapped into a clear preparation flow" },
  { value: "13+", label: "centre locations ready for structured discovery" },
  { value: "1 Hub", label: "for process, centres, trends, and journals" },
];

const signals = [
  "Branch-first centre discovery",
  "Cleaner guidance for first-time aspirants",
  "Less noise, more practical direction",
];

export default function Home() {
  return (
    <main className="bg-[var(--color-page)] text-[var(--color-ink)]">
      <div className="relative z-10 border-b border-white/60 bg-[linear-gradient(90deg,#174ea6,#1a73e8)] text-white">
        <div className="mx-auto flex w-full max-w-[1440px] items-center gap-4 px-6 py-2.5 sm:px-10 lg:px-12">
          <span className="hidden shrink-0 items-center gap-2 rounded-full bg-white/12 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-white/85 sm:inline-flex">
            <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            Live updates
          </span>
          <div className="ticker-track flex-1 overflow-hidden">
            <div className="ticker-content flex gap-10 whitespace-nowrap text-sm font-medium">
              {[...liveHeadlines, ...liveHeadlines].map((headline, index) => (
                <a
                  key={`${headline.title}-${index}`}
                  href={headline.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-white/90 transition-colors hover:text-white"
                >
                  <span className="rounded-full bg-white/15 px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white">
                    {headline.tag}
                  </span>
                  <span>{headline.title}</span>
                  <span className="text-white/60">· {headline.date}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(26,115,232,0.1),transparent_24%),radial-gradient(circle_at_top_right,rgba(26,115,232,0.14),transparent_28%),radial-gradient(circle_at_55%_32%,rgba(255,255,255,0.94),transparent_36%)]" />
        <div className="relative mx-auto w-full max-w-[1440px] px-6 pb-18 pt-14 sm:px-10 lg:px-12 lg:pb-22">
          <div className="grid gap-10 xl:grid-cols-[minmax(0,1.2fr)_minmax(420px,0.8fr)] xl:items-start">
            <div className="max-w-5xl pt-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/75 bg-white/88 px-4 py-2 text-sm font-semibold text-[var(--color-muted)] shadow-sm backdrop-blur">
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--color-accent)]" />
                Built for NDA, CDS, AFCAT and TES aspirants across India
              </div>

              <h1 className="mt-6 max-w-5xl font-display text-[3.8rem] font-semibold leading-[0.92] tracking-[-0.07em] text-[var(--color-ink-strong)] sm:text-[5rem] xl:text-[6.4rem]">
                One calm place to plan your SSB, not another cluttered prep
                site.
              </h1>

              <p className="mt-7 max-w-3xl text-[1.14rem] leading-9 text-[var(--color-ink)] sm:text-[1.24rem]">
                SSB Sarthi brings process clarity, selection-centre discovery,
                recommendation context, and real aspirant stories into one
                sharper experience so you can prepare with confidence and skip
                the noise.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/centers"
                  className="inline-flex min-w-[230px] items-center justify-center rounded-full bg-[linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))] px-7 py-4 text-sm font-semibold text-white shadow-[0_20px_45px_rgba(26,115,232,0.28)] transition-transform duration-200 hover:-translate-y-0.5"
                >
                  Explore Selection Centres
                </Link>
                <Link
                  href="/process"
                  className="inline-flex min-w-[210px] items-center justify-center rounded-full border border-white/75 bg-white/94 px-7 py-4 text-sm font-semibold text-[var(--color-ink-strong)] shadow-sm transition-colors duration-200 hover:bg-[var(--color-surface)]"
                >
                  View 5-Day Process
                </Link>
              </div>

              <div className="mt-10 grid gap-3 lg:max-w-4xl lg:grid-cols-3">
                {signals.map((signal) => (
                  <div
                    key={signal}
                    className="rounded-[1.35rem] border border-white/75 bg-white/82 px-4 py-4 shadow-sm backdrop-blur"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-accent-soft)] text-sm font-bold text-[var(--color-accent-strong)]">
                        +
                      </span>
                      <p className="text-sm font-medium leading-6 text-[var(--color-ink)]">
                        {signal}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="xl:pt-10">
              <div className="rounded-[2rem] border border-white/75 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(241,246,255,0.96))] p-6 shadow-[var(--shadow-soft)] sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium uppercase tracking-[0.22em] text-[var(--color-muted)]">
                      Aspirant briefing
                    </p>
                    <h2 className="mt-2 max-w-sm font-display text-3xl font-semibold tracking-[-0.05em] text-[var(--color-ink-strong)]">
                      What changed for SSB candidates this cycle
                    </h2>
                  </div>
                  <span className="rounded-full bg-[var(--color-accent-soft)] px-4 py-2 text-sm font-semibold text-[var(--color-accent-strong)] shadow-sm">
                    Live
                  </span>
                </div>

                <ul className="mt-7 space-y-3">
                  {liveHeadlines.slice(0, 3).map((headline) => (
                    <li
                      key={headline.title}
                      className="rounded-[1.2rem] border border-white/75 bg-white/90 px-4 py-4 shadow-sm"
                    >
                      <div className="flex gap-3">
                        <span className="mt-0.5 inline-flex shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-soft)] px-2.5 py-1 text-[0.6rem] font-bold uppercase tracking-[0.18em] text-[var(--color-accent-strong)]">
                          {headline.tag}
                        </span>
                        <div>
                          <p className="text-sm font-semibold leading-6 text-[var(--color-ink-strong)]">
                            {headline.title}
                          </p>
                          <p className="mt-1 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-muted)]">
                            {headline.date}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 rounded-[1.5rem] border border-[rgba(26,115,232,0.16)] bg-[linear-gradient(135deg,#174ea6,#1a73e8)] p-5 text-white shadow-[0_18px_46px_rgba(26,115,232,0.2)]">
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/72">
                      Best next click
                    </p>
                    <span className="rounded-full bg-white/14 px-3 py-1 text-xs font-semibold text-white/85">
                      live flow
                    </span>
                  </div>
                  <p className="mt-3 font-display text-xl font-semibold tracking-[-0.04em]">
                    Branch-first centre browsing
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/84">
                    Choose Army, Air Force, or Navy first, then explore the
                    centres that fit your reporting route and entry plan.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {quickStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[1.5rem] border border-white/80 bg-white/90 px-6 py-6 shadow-sm backdrop-blur"
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

      <section className="mx-auto w-full max-w-[1440px] px-6 py-18 sm:px-10 lg:px-12">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-strong)]">
              Platform modules
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-[-0.05em] text-[var(--color-ink-strong)]">
              Built around the questions aspirants ask most.
            </h2>
          </div>
          <Link
            href="/trends"
            className="inline-flex w-fit items-center justify-center rounded-full border border-[rgba(26,115,232,0.18)] bg-white px-5 py-3 text-sm font-semibold text-[var(--color-accent-strong)] shadow-sm transition-colors hover:bg-[var(--color-accent-soft)]"
          >
            See all trends →
          </Link>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {featureCards.map((card) => (
            <Link
              key={card.title}
              href={card.href}
              className="group rounded-[1.8rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.97),rgba(245,249,255,0.94))] p-7 shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-1 hover:border-[rgba(26,115,232,0.24)] hover:shadow-[0_28px_72px_rgba(15,23,42,0.12)]"
            >
              <h3 className="font-display text-3xl font-semibold tracking-[-0.04em] text-[var(--color-ink-strong)]">
                {card.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">
                {card.description}
              </p>
              <p className="mt-6 text-sm font-semibold text-[var(--color-accent-strong)] transition-transform duration-200 group-hover:translate-x-1">
                Open section →
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-white/70 bg-[var(--color-surface)]">
        <div className="mx-auto grid w-full max-w-[1440px] gap-10 px-6 py-20 sm:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[var(--color-accent-strong)]">
              Why it matters
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-[-0.05em] text-[var(--color-ink-strong)]">
              SSB preparation is already intense. Finding reliable guidance
              should not be.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-[var(--color-muted)]">
              Aspirants already deal with fragmented advice across Telegram
              groups, YouTube clips, and scattered notes. This platform should
              feel calmer, sharper, and easier to trust.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {liveHeadlines.slice(0, 4).map((headline) => (
              <a
                key={headline.title}
                href={headline.href}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-[1.5rem] border border-white/80 bg-white/90 p-5 shadow-sm transition-colors hover:border-[rgba(26,115,232,0.22)]"
              >
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-accent-strong)]">
                  {headline.tag}
                </p>
                <p className="mt-3 text-base font-semibold leading-7 text-[var(--color-ink-strong)]">
                  {headline.title}
                </p>
                <p className="mt-2 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  {headline.date}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1440px] px-6 py-18 sm:px-10 lg:px-12">
        <div className="overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#174ea6_0%,#1a73e8_58%,#6ea8ff_100%)] px-6 py-10 text-white shadow-[0_30px_80px_rgba(23,37,84,0.18)] sm:px-8 lg:px-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/72">
                Next steps
              </p>
              <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-[-0.05em]">
                The next build priorities are clearer now.
              </h2>
              <p className="mt-4 text-base leading-8 text-white/84">
                The strongest next step is turning resources into genuinely
                useful checklists and reporting help, then deepening trends with
                better structure and context.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/resources"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#174ea6] transition-colors hover:bg-[#eef5ff]"
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
              <div className="rounded-[1.6rem] border border-white/18 bg-white/10 p-5 backdrop-blur">
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.24em] text-white/68">
                  Now shipping
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.04em]">
                  Cleaner landing page
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/82 sm:text-base">
                  Better spacing, stronger blue-led branding, and less visual
                  clutter across the homepage.
                </p>
              </div>
              <div className="rounded-[1.6rem] border border-white/18 bg-white/10 p-5 backdrop-blur">
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.24em] text-white/68">
                  Next build step
                </p>
                <h3 className="mt-3 font-display text-2xl font-semibold tracking-[-0.04em]">
                  Real resource content
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/82 sm:text-base">
                  Replace placeholders with reporting checklists, travel notes,
                  and practical centre-specific guidance..
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
