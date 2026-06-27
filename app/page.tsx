import Link from "next/link";

const readinessRows = [
  { label: "OIR practice", value: "76%", tone: "from-emerald-300 via-cyan-300 to-blue-400" },
  { label: "PPDT stories", value: "62%", tone: "from-cyan-300 via-sky-300 to-blue-500" },
  { label: "OLQ journal", value: "68%", tone: "from-blue-400 via-violet-300 to-emerald-300" },
];

const prepPlan = [
  { day: "Day 1", title: "Screening", detail: "OIR + PPDT" },
  { day: "Day 2", title: "Psychology", detail: "Stories + SRT" },
  { day: "Days 3-4", title: "GTO", detail: "Group tasks" },
  { day: "Day 5", title: "Conference", detail: "Final review" },
];

const workflow = [
  ["01", "Understand the process", "Read a clear SSB flow before you start practicing blindly."],
  ["02", "Build a prep rhythm", "Turn OIR, PPDT, OLQ, and centre tasks into a weekly operating system."],
  ["03", "Track readiness", "See what is improving, what is missing, and what needs attention next."],
];

const features = [
  ["OIR practice", "Timed reasoning sets with attempts and dashboard-ready progress."],
  ["PPDT stories", "Picture prompts, narration practice, and review notes that stay organized."],
  ["OLQ journal", "Real examples and reflections shaped into interview-ready material."],
  ["Centre checklist", "Documents, reporting plan, travel buffer, and final revision in one place."],
  ["Private history", "Your attempts and notes stay attached to your account."],
  ["Resource clarity", "Guides and prep notes connected to the real SSB journey."],
];

const metrics = [
  ["5-day", "readiness map"],
  ["4", "centre tasks"],
  ["2", "free OIR attempts"],
  ["10", "PPDT prompts"],
];

export default function HomePage() {
  return (
    <main className="landing-page overflow-hidden text-[var(--color-ink-strong)]">
      <section className="landing-hero relative border-b border-[var(--color-border)]">
        <div className="mx-auto grid min-h-[calc(100dvh-var(--nav-height)-48px)] w-full max-w-7xl items-center gap-12 px-6 py-12 sm:px-10 lg:grid-cols-[0.96fr_1.04fr] lg:px-12 lg:py-12">
          <div className="relative z-10 max-w-2xl animate-fade-up">
            <h1 className="max-w-[16ch] font-display text-5xl font-extrabold leading-[0.98] text-[var(--color-ink-strong)] sm:text-6xl lg:text-[3.45rem] xl:text-[4.45rem]">
              Turn SSB preparation into a daily command system.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
              SSB Sarthi gives aspirants one polished workspace for process clarity,
              OIR practice, PPDT storytelling, OLQ reflection, and reporting-day readiness.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/signin?mode=signup" className="btn-primary landing-cta">
                Start free
                <ArrowIcon />
              </Link>
              <Link href="/process" className="btn-secondary">
                Explore process
              </Link>
            </div>

            <div className="mt-8 grid max-w-xl grid-cols-3 gap-3">
              {metrics.map(([value, label]) => (
                <div key={label} className="landing-metric">
                  <span className="block text-2xl font-extrabold text-[var(--color-ink-strong)]">
                    {value}
                  </span>
                  <span className="mt-1 block text-xs font-bold uppercase text-[var(--color-muted)]">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 animate-fade-up stagger-2">
            <div className="landing-orbit landing-orbit-one" />
            <div className="landing-orbit landing-orbit-two" />
            <DashboardPreview />
          </div>
        </div>
      </section>

      <section className="landing-band reveal-on-scroll border-b border-[var(--color-border)]">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 py-20 sm:px-10 lg:grid-cols-[0.74fr_1.26fr] lg:px-12">
          <div>
            <h2 className="max-w-[10ch] font-display text-4xl font-extrabold leading-tight sm:text-5xl">
              From scattered prep to one clear flow.
            </h2>
            <p className="mt-5 max-w-md text-base leading-8 text-[var(--color-muted)]">
              The public pages explain the SSB path. The workspace turns that path into
              a repeatable preparation loop you can follow every day.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {workflow.map(([step, title, body], index) => (
              <div key={title} className={`workflow-card reveal-on-scroll stagger-${index + 1}`}>
                <span className="text-sm font-extrabold text-[var(--color-blue)]">{step}</span>
                <h3 className="mt-6 text-xl font-extrabold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="reveal-on-scroll mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="landing-product-panel">
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div>
                <p className="text-sm font-extrabold text-white">Readiness operating view</p>
                <p className="text-xs font-semibold text-white/46">Private dashboard after login</p>
              </div>
              <div className="flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-cyan-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/40" />
              </div>
            </div>
            <div className="grid gap-4 p-5 md:grid-cols-[0.9fr_1.1fr]">
              <div className="space-y-3">
                {prepPlan.map((item) => (
                  <div key={item.day} className="landing-plan-row">
                    <div>
                      <p className="text-[11px] font-extrabold text-emerald-300">{item.day}</p>
                      <p className="text-sm font-bold text-white">{item.title}</p>
                    </div>
                    <span className="text-xs font-semibold text-white/48">{item.detail}</span>
                  </div>
                ))}
              </div>
              <div className="rounded-lg border border-white/12 bg-white/[0.04] p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-extrabold text-white">Readiness</p>
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
            </div>
          </div>

          <div>
            <h2 className="font-display text-4xl font-extrabold leading-tight sm:text-5xl">
              Show progress, not just effort.
            </h2>
            <p className="mt-5 text-base leading-8 text-[var(--color-muted)]">
              Candidates do not need another pile of notes. They need a calm cockpit
              that shows what to practice, what to reflect on, and what to finish before reporting.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Daily focus", "Attempt history", "Saved reflections", "Reporting checklist"].map((item) => (
                <div key={item} className="landing-check">
                  <CheckIcon />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="landing-band reveal-on-scroll border-y border-[var(--color-border)]">
        <div className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <h2 className="max-w-2xl font-display text-4xl font-extrabold leading-tight sm:text-5xl">
                Everything a serious aspirant expects from a SaaS workspace.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--color-muted)]">
                Practical modules, private progress, and guided preparation stitched into one interface.
              </p>
            </div>
            <Link href="/signin?mode=signup" className="btn-secondary w-fit">
              Build my workspace
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(([title, body], index) => (
              <div key={title} className={`feature-panel reveal-on-scroll stagger-${(index % 5) + 1}`}>
                <div className="landing-feature-icon">
                  {index + 1}
                </div>
                <h3 className="mt-5 text-xl font-extrabold">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="reveal-on-scroll mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <div className="landing-final grid gap-8 px-6 py-12 sm:px-10 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="max-w-3xl font-display text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              Make your next SSB attempt feel planned, measured, and reviewable.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/68">
              Start free, understand the process, and move into the dashboard when you are ready to practice seriously.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/signin?mode=signup" className="btn-light">
              Start free
              <ArrowIcon />
            </Link>
            <Link href="/screening" className="landing-dark-link">
              See screening prep
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function DashboardPreview() {
  return (
    <div className="landing-dashboard-preview">
      <div className="flex items-center justify-between border-b border-white/10 px-6 py-5">
        <div>
          <p className="text-base font-extrabold text-white">Candidate dashboard</p>
          <p className="mt-1 text-xs font-semibold text-white/48">Live workspace preview</p>
        </div>
        <div className="rounded-md border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-extrabold text-emerald-200">
          29% ready
        </div>
      </div>

      <div className="grid gap-4 p-5 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="space-y-4">
          <div className="rounded-lg border border-white/12 bg-white/[0.04] p-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-extrabold text-white">5-day prep map</p>
              <CalendarIcon className="h-4 w-4 text-emerald-300" />
            </div>
            <div className="mt-4 space-y-2">
              {prepPlan.map((item) => (
                <div key={item.day} className="landing-plan-row">
                  <div>
                    <p className="text-[11px] font-extrabold text-emerald-300">{item.day}</p>
                    <p className="text-xs font-bold text-white/92">{item.title}</p>
                  </div>
                  <span className="text-[11px] font-semibold text-white/48">{item.detail}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-cyan-300/20 bg-[linear-gradient(135deg,rgba(18,59,90,0.96),rgba(16,29,48,0.96))] p-4">
            <p className="text-sm font-extrabold text-white">Centre checklist</p>
            <div className="mt-3 space-y-2.5">
              {["Call-up letter", "Photo ID", "Travel buffer"].map((item) => (
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
              <p className="text-sm font-extrabold text-white">Readiness</p>
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
            <div className="landing-mini-dark">
              <p className="text-xs font-bold text-white/48">Next focus</p>
              <p className="mt-2 text-xl font-extrabold text-white">PPDT review</p>
              <p className="mt-1 text-xs font-semibold text-white/42">Saved in dashboard</p>
            </div>
            <div className="landing-mini-dark">
              <p className="text-xs font-bold text-white/48">Journal</p>
              <p className="mt-2 text-xl font-extrabold text-white">OLQ notes</p>
              <p className="mt-1 text-xs font-semibold text-white/42">Private workspace</p>
            </div>
          </div>
        </div>
      </div>
    </div>
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
