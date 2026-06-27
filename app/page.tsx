import Link from "next/link";

const heroCards = [
  {
    title: "Process clarity",
    detail: "Know screening, psychology, GTO, interview, and conference before the clock starts.",
  },
  {
    title: "Dashboard first",
    detail: "Keep attempts, OLQ notes, centre tasks, and daily focus inside one workspace.",
  },
  {
    title: "Private prep",
    detail: "Your practice history and reflections stay attached to your candidate account.",
  },
];

const readinessRows = [
  { label: "OIR reasoning", value: "76%", tone: "from-emerald-400 to-cyan-300" },
  { label: "PPDT narration", value: "62%", tone: "from-cyan-300 to-blue-400" },
  { label: "OLQ examples", value: "68%", tone: "from-blue-400 to-emerald-300" },
];

const dashboardPlan = [
  { day: "Day 1", title: "Screening", state: "OIR + PPDT" },
  { day: "Day 2", title: "Psychology", state: "Stories + SRT" },
  { day: "Days 3-4", title: "GTO", state: "Group tasks" },
  { day: "Day 5", title: "Conference", state: "Final review" },
];

const commandModules = [
  ["Practice sessions", "Timed OIR sets, PPDT drills, and review notes that do not get lost."],
  ["Readiness planner", "A 5-day preparation map with daily priorities and centre checklist."],
  ["OLQ journal", "Real examples, reflections, and interview-ready stories in one place."],
  ["Private history", "Attempts, scores, and notes attached to your account, not your browser tab."],
];

const publicSections = [
  {
    title: "Learn the SSB flow",
    body: "Use the public process guide to understand each testing stage before creating a plan.",
    href: "/process",
    icon: CalendarIcon,
  },
  {
    title: "Explore centres",
    body: "Browse Army, Air Force, and Navy selection centres with practical reporting context.",
    href: "/centers",
    icon: MapIcon,
  },
  {
    title: "Practice screening",
    body: "See how OIR and PPDT preparation should be structured before you begin attempts.",
    href: "/screening",
    icon: TargetIcon,
  },
  {
    title: "Use resources wisely",
    body: "Read guidance, myths, and prep notes without jumping into random disconnected tests.",
    href: "/resources",
    icon: JournalIcon,
  },
];

export default function HomePage() {
  return (
    <main className="overflow-hidden text-[var(--color-ink-strong)]">
      <section className="relative border-b border-[var(--color-border)]">
        <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(90deg,rgba(37,99,235,0.12),rgba(6,182,212,0.08),rgba(5,150,105,0.12))]" />
        <div className="mx-auto grid min-h-[calc(100dvh-var(--nav-height)-48px)] w-full max-w-7xl items-center gap-10 px-6 py-12 sm:px-10 lg:grid-cols-[0.86fr_1.14fr] lg:px-12 lg:py-14">
          <div className="relative z-10 max-w-2xl animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-panel)] px-3 py-2 text-xs font-extrabold uppercase text-[var(--color-green)] shadow-[var(--shadow-subtle)]">
              <span className="h-2 w-2 rounded-full bg-[var(--color-green)]" />
              Free beta workspace
            </span>
            <h1 className="mt-6 max-w-[12ch] font-display text-5xl font-extrabold leading-[1.02] text-[var(--color-ink-strong)] sm:text-6xl lg:text-[5.15rem]">
              SSB prep, organized around your real journey.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
              A focused SaaS workspace for aspirants who want process clarity,
              practice history, OLQ review, and centre readiness in one polished
              command center.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/signin?mode=signup" className="btn-primary">
                Create account
                <ArrowIcon />
              </Link>
              <Link href="/process" className="btn-secondary">
                Explore process
              </Link>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {heroCards.map((card) => (
                <div key={card.title} className="mini-panel">
                  <span className="text-sm font-bold text-[var(--color-ink-strong)]">
                    {card.title}
                  </span>
                  <span className="mt-2 block text-xs leading-5 text-[var(--color-muted)]">
                    {card.detail}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 animate-fade-up stagger-2">
            <div className="absolute -right-2 -top-5 hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-panel)] px-4 py-3 text-xs font-bold text-[var(--color-ink)] shadow-[var(--shadow-soft)] lg:block">
              Live dashboard preview
            </div>
            <div className="overflow-hidden rounded-xl border border-white/10 bg-[#08111f] text-white shadow-[0_32px_90px_rgba(8,17,31,0.38)]">
              <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
                <div>
                  <p className="text-base font-extrabold">Candidate dashboard</p>
                  <p className="mt-1 text-xs font-semibold text-white/48">Available after login</p>
                </div>
                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/60" />
                </div>
              </div>

              <div className="grid gap-4 p-5 lg:grid-cols-[0.92fr_1.08fr]">
                <div className="space-y-4">
                  <div className="rounded-lg border border-white/12 bg-white/[0.04] p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-extrabold">5-day prep map</p>
                      <CalendarIcon className="h-4 w-4 text-emerald-300" />
                    </div>
                    <div className="mt-4 space-y-2">
                      {dashboardPlan.map((item) => (
                        <div
                          key={item.day}
                          className="flex items-center justify-between rounded-md bg-white/[0.05] px-3 py-2"
                        >
                          <div>
                            <p className="text-[11px] font-extrabold text-emerald-300">
                              {item.day}
                            </p>
                            <p className="text-xs font-bold text-white/92">{item.title}</p>
                          </div>
                          <span className="text-[11px] font-semibold text-white/48">
                            {item.state}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-lg border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(18,59,90,0.96),rgba(16,29,48,0.96))] p-4">
                    <p className="text-sm font-extrabold">Centre checklist</p>
                    <div className="mt-3 space-y-2.5">
                      {["Call-up letter", "Documents", "Travel plan"].map((item) => (
                        <div key={item} className="flex items-center gap-3">
                          <span className="grid h-5 w-5 place-items-center rounded bg-emerald-400 text-[10px] text-[#08111f]">
                            <CheckIcon />
                          </span>
                          <span className="text-xs font-semibold text-white/78">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-lg border border-white/12 bg-white/[0.04] p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-extrabold">Readiness areas</p>
                      <TargetIcon className="h-4 w-4 text-cyan-300" />
                    </div>
                    <div className="mt-5 space-y-4">
                      {readinessRows.map((row) => (
                        <div key={row.label}>
                          <div className="mb-2 flex justify-between text-xs">
                            <span className="font-bold text-white/86">{row.label}</span>
                            <span className="font-semibold text-white/48">{row.value}</span>
                          </div>
                          <div className="h-2 overflow-hidden rounded-full bg-white/18">
                            <div
                              className={`h-full rounded-full bg-gradient-to-r ${row.tone} landing-progress`}
                              style={{ width: row.value }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-lg border border-white/12 bg-white/[0.04] p-4">
                      <p className="text-xs font-bold text-white/48">Next focus</p>
                      <p className="mt-2 text-xl font-extrabold">PPDT review</p>
                      <p className="mt-1 text-xs font-semibold text-white/42">Saved in dashboard</p>
                    </div>
                    <div className="rounded-lg border border-white/12 bg-white/[0.04] p-4">
                      <p className="text-xs font-bold text-white/48">Journal</p>
                      <p className="mt-2 text-xl font-extrabold">OLQ notes</p>
                      <p className="mt-1 text-xs font-semibold text-white/42">Private workspace</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr]">
          <div>
            <h2 className="font-display text-4xl font-extrabold leading-tight sm:text-5xl">
              Browse publicly. Prepare privately.
            </h2>
            <p className="mt-5 max-w-md text-base leading-8 text-[var(--color-muted)]">
              The public site explains the journey. The logged-in dashboard is
              where practice, reflection, and readiness become measurable.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {publicSections.map((feature) => {
              const Icon = feature.icon;
              return (
                <Link key={feature.title} href={feature.href} className="feature-panel">
                  <Icon className="h-5 w-5 text-[var(--color-green)]" />
                  <h3 className="mt-5 text-lg font-extrabold">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                    {feature.body}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-20 sm:px-10 lg:grid-cols-[0.88fr_1.12fr] lg:px-12">
          <div>
            <h2 className="font-display text-4xl font-extrabold leading-tight sm:text-5xl">
              What opens inside the command center.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-8 text-[var(--color-muted)]">
              Login is the line between reading and doing. Once signed in, a
              candidate can practice, track preparation, and keep private notes.
            </p>
            <Link href="/signin?mode=signup" className="btn-primary mt-7">
              Open workspace
              <ArrowIcon />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {commandModules.map(([title, body]) => (
              <div
                key={title}
                className="rounded-lg border border-[var(--color-border)] bg-[var(--color-panel)] p-6 shadow-[var(--shadow-card)]"
              >
                <h3 className="text-lg font-extrabold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(135deg,#08111f,#0d2b45_48%,#064e3b)] text-white">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-16 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div>
            <h2 className="font-display text-4xl font-extrabold leading-tight">
              Prepare with structure before reporting day.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/65">
              Start by understanding the process. Create your workspace when you
              are ready to save practice notes and your readiness plan.
            </p>
          </div>
          <Link href="/signin?mode=signup" className="btn-light">
            Create account
            <ArrowIcon />
          </Link>
        </div>
      </section>
    </main>
  );
}

function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  );
}

function CheckIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.4">
      <path strokeLinecap="round" strokeLinejoin="round" d="m5 13 4 4L19 7" />
    </svg>
  );
}

function CalendarIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 3v3m10-3v3M4 9h16M6 5h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

function TargetIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 12h.01" />
    </svg>
  );
}

function MapIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="m9 18-6 3V6l6-3 6 3 6-3v15l-6 3-6-3Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v15m6-12v15" />
    </svg>
  );
}

function JournalIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 4h10a2 2 0 0 1 2 2v14H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 8h6M9 12h6M9 16h4" />
    </svg>
  );
}
