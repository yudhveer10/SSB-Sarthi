import Link from "next/link";

const heroCards = [
  {
    title: "Process clarity",
    detail: "Understand what happens from screening to conference before you start preparing.",
  },
  {
    title: "Dashboard first",
    detail: "Save plans, practice history, OLQ notes, and centre checklists after login.",
  },
  {
    title: "Private prep",
    detail: "Your practice history and reflections stay inside your candidate workspace.",
  },
];

const readinessRows = [
  { label: "OIR reasoning", value: "Planned", width: "76%" },
  { label: "PPDT narration", value: "Reviewing", width: "62%" },
  { label: "OLQ examples", value: "Building", width: "68%" },
];

const dashboardPlan = [
  { day: "Day 1", title: "Screening", state: "OIR + PPDT" },
  { day: "Day 2", title: "Psychology", state: "Stories + SRT" },
  { day: "Days 3-4", title: "GTO", state: "Group tasks" },
  { day: "Day 5", title: "Conference", state: "Final review" },
];

const productSections = [
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
    title: "Understand practice areas",
    body: "See what OIR, PPDT, psychology, GTO, interview, and conference prep should cover.",
    href: "/screening",
    icon: TargetIcon,
  },
  {
    title: "Use resources wisely",
    body: "Read guidance, myths, and prep notes without jumping straight into random tests.",
    href: "/resources",
    icon: JournalIcon,
  },
];

const dashboardAccess = [
  ["Practice sessions", "Timed OIR sets, PPDT drills, review notes, and saved progress."],
  ["Readiness planner", "A 5-day preparation map with daily priorities and centre checklist."],
  ["OLQ journal", "Real examples, reflections, and interview-ready stories in one place."],
  ["Private history", "Attempts, scores, and preparation notes attached to your account."],
];

const flow = [
  ["Explore", "Read public guides and understand the SSB journey."],
  ["Login", "Create your private candidate workspace."],
  ["Practice", "Attempt drills and save review notes inside the dashboard."],
  ["Arrive", "Use your checklist and plan before reporting day."],
];

export default function HomePage() {
  return (
    <main className="bg-white text-[var(--color-ink-strong)]">
      <section className="overflow-hidden border-b border-[var(--color-border)]">
        <div className="mx-auto grid w-full max-w-7xl items-start gap-10 px-6 py-10 sm:px-10 lg:grid-cols-[0.88fr_1.12fr] lg:px-12 lg:py-12">
          <div className="max-w-2xl">
            <h1 className="max-w-[13ch] font-display text-4xl font-extrabold leading-[1.05] text-[var(--color-ink-strong)] sm:text-5xl lg:text-[4rem]">
              SSB prep, organized around your real journey.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
              SSB Sarthi is a preparation workspace for aspirants who want a
              clear process map, focused practice plan, OLQ review, and centre
              readiness in one place.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/signin" className="btn-primary">
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
                  <span className="text-sm font-semibold text-[var(--color-ink-strong)]">
                    {card.title}
                  </span>
                  <span className="mt-2 block text-xs leading-5 text-[var(--color-muted)]">
                    {card.detail}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="product-shell">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--color-border)] px-5 py-4">
                <div>
                  <p className="text-sm font-semibold text-[var(--color-ink-strong)]">
                    Candidate dashboard
                  </p>
                  <p className="text-xs text-[var(--color-muted)]">
                    Available after login
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#2f7d57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#2f80c9]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#cad3dc]" />
                </div>
              </div>

              <div className="grid gap-3 p-5 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="space-y-4">
                  <div className="rounded-lg border border-[var(--color-border)] bg-white p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold">5-day prep map</p>
                      <CalendarIcon className="h-4 w-4 text-[var(--color-green)]" />
                    </div>
                    <div className="mt-3 space-y-2">
                      {dashboardPlan.map((item) => (
                        <div
                          key={item.day}
                          className="flex items-center justify-between rounded-md bg-[var(--color-surface)] px-3 py-2"
                        >
                          <div>
                            <p className="text-[11px] font-semibold text-[var(--color-green)]">
                              {item.day}
                            </p>
                            <p className="text-xs font-medium text-[var(--color-ink)]">
                              {item.title}
                            </p>
                          </div>
                          <span className="text-[11px] text-[var(--color-muted)]">
                            {item.state}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-lg border border-[var(--color-border)] bg-[#0d1b2f] p-4 text-white">
                    <p className="text-sm font-semibold">Centre checklist</p>
                    <div className="mt-3 space-y-2.5">
                      {["Call-up letter", "Documents", "Travel plan"].map((item) => (
                        <div key={item} className="flex items-center gap-3">
                          <span className="flex h-5 w-5 items-center justify-center rounded bg-[#2f7d57] text-[10px]">
                            <CheckIcon />
                          </span>
                          <span className="text-xs text-white/82">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-lg border border-[var(--color-border)] bg-white p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold">Readiness areas</p>
                      <TargetIcon className="h-4 w-4 text-[var(--color-blue)]" />
                    </div>
                    <div className="mt-4 space-y-3">
                      {readinessRows.map((row) => (
                        <div key={row.label}>
                          <div className="mb-2 flex justify-between text-xs">
                            <span className="font-medium text-[var(--color-ink)]">
                              {row.label}
                            </span>
                            <span className="text-[var(--color-muted)]">{row.value}</span>
                          </div>
                          <div className="h-2 rounded-full bg-[#e9eef3]">
                            <div
                              className="h-full rounded-full bg-[linear-gradient(90deg,var(--color-green),var(--color-blue))]"
                              style={{ width: row.width }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
                      <p className="text-xs font-semibold text-[var(--color-muted)]">
                        Next focus
                      </p>
                      <p className="mt-2 text-lg font-semibold">PPDT review</p>
                      <p className="mt-1 text-xs text-[var(--color-muted)]">Saved in dashboard</p>
                    </div>
                    <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
                      <p className="text-xs font-semibold text-[var(--color-muted)]">
                        Journal
                      </p>
                      <p className="mt-2 text-lg font-semibold">OLQ notes</p>
                      <p className="mt-1 text-xs text-[var(--color-muted)]">Private workspace</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
              What visitors can explore before login.
            </h2>
            <p className="mt-5 max-w-md text-base leading-8 text-[var(--color-muted)]">
              The public site explains the SSB journey and the product. Actual
              practice history, saved progress, and review notes stay inside the
              dashboard.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {productSections.map((feature) => {
              const Icon = feature.icon;
              return (
                <Link key={feature.title} href={feature.href} className="feature-panel">
                  <Icon className="h-5 w-5 text-[var(--color-green)]" />
                  <h3 className="mt-5 text-lg font-semibold">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                    {feature.body}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>

        <div className="mt-10 grid overflow-hidden rounded-lg border border-[var(--color-border)] md:grid-cols-4">
          {flow.map(([title, body], index) => (
            <div
              key={title}
              className="border-b border-[var(--color-border)] p-5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0"
            >
              <p className="text-xs font-semibold text-[var(--color-green)]">
                0{index + 1}
              </p>
              <h3 className="mt-3 text-base font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--color-border)] bg-[var(--color-surface)]">
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-20 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-12">
          <div>
            <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
              What opens inside the dashboard.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-8 text-[var(--color-muted)]">
              Login is the boundary between browsing and doing. Once signed in,
              a candidate can practice, track preparation, and keep
              private notes.
            </p>
            <Link href="/signin" className="btn-primary mt-7">
              Go to dashboard
              <ArrowIcon />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {dashboardAccess.map(([title, body]) => (
              <div key={title} className="rounded-lg border border-[var(--color-border)] bg-white p-6 shadow-[var(--shadow-card)]">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0d1b2f] text-white">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-16 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div>
            <h2 className="font-display text-4xl font-semibold leading-tight">
              Prepare with structure before reporting day.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/65">
              Start by understanding the process. Login when you are ready to
              save practice notes and your personal readiness plan.
            </p>
          </div>
          <Link href="/signin" className="btn-light">
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
