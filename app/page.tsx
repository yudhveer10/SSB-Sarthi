import Link from "next/link";

const readinessRows = [
  { label: "OIR performance", value: "76%", tone: "from-emerald-400 to-cyan-300" },
  { label: "PPDT readiness", value: "62%", tone: "from-cyan-300 to-blue-400" },
  { label: "OLQ consistency", value: "68%", tone: "from-blue-400 to-violet-300" },
];

const workflow = [
  ["Assess", "Track your starting point across key areas.", PulseIcon],
  ["Practice", "Sharpen OIR, PPDT, OLQ and personal traits.", TargetIcon],
  ["Reflect", "Write, review and improve with daily journaling.", JournalIcon],
  ["Prepare", "Plan your centre and reporting checklist.", PinIcon],
  ["Perform", "Walk in confident. Execute your best.", CheckCircleIcon],
];

const features = [
  ["OIR practice", "Structured OIR sets with PRT, WAT, SRT and notes.", ChartIcon],
  ["PPDT stories", "Picture stories, group tasks and peer-style practice.", ImageIcon],
  ["OLQ journal", "Daily reflection to build self-awareness.", JournalIcon],
  ["Centre checklist", "Documents, planning and reporting made simple.", ChecklistIcon],
  ["Readiness", "Track progress across all key dimensions.", TrendIcon],
];

const trustBullets = ["Free to start", "No card required", "Built for aspirants"];

const proof = [
  ["50K+", "Aspirants trust SSB Sarthi", UsersIcon],
  ["100K+", "Practice attempts completed", TargetIcon],
  ["4.8/5", "Aspirant rating across platforms", TrendIcon],
  ["Data safe", "Your data is private and secure", ShieldIcon],
];

export default function HomePage() {
  return (
    <main className="landing-page landing-reference overflow-hidden text-[var(--color-ink-strong)]">
      <section className="landing-hero-reference border-b border-[var(--color-border)]">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 pb-10 pt-12 sm:px-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:px-12 lg:pb-12 lg:pt-10">
          <div className="animate-fade-up">
            <h1 className="max-w-[11ch] font-display text-5xl font-extrabold leading-[0.98] text-[var(--color-ink-strong)] sm:text-6xl lg:text-[4.6rem]">
              Turn SSB preparation into a daily command system.
            </h1>
            <p className="mt-6 max-w-lg text-base leading-8 text-[var(--color-muted)]">
              Plan smarter, practice better, track every step and stay ready,
              all in one calm workspace.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/signin?mode=signup" className="btn-primary landing-cta">
                Start free
                <ArrowIcon />
              </Link>
              <Link href="/process" className="btn-secondary landing-outline-cta">
                Explore process
                <ArrowIcon />
              </Link>
            </div>

            <div className="landing-trust-row mt-8">
              {trustBullets.map((item) => (
                <span key={item}>
                  <CheckCircleIcon className="h-4 w-4" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-up stagger-2">
            <DashboardPreview />
            <div className="landing-preview-note">
              <span>Live dashboard preview</span>
              <span className="flex gap-2">
                <i />
                <i />
                <i className="muted" />
                <i className="muted" />
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="landing-workflow-section reveal-on-scroll border-b border-[var(--color-border)]">
        <div className="mx-auto w-full max-w-7xl px-6 py-8 sm:px-10 lg:px-12">
          <div className="mb-5 flex items-center gap-6">
            <span className="h-px flex-1 bg-[var(--color-border)]" />
            <h2 className="text-center text-xl font-extrabold">Your SSB readiness workflow</h2>
            <span className="h-px flex-1 bg-[var(--color-border)]" />
          </div>

          <div className="landing-workflow-rail">
            {workflow.map(([title, body, Icon], index) => (
              <div key={title as string} className="landing-workflow-step">
                <div className={`landing-workflow-icon tone-${index + 1}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-extrabold">{index + 1}. {title as string}</p>
                  <p className="mt-1 text-xs leading-5 text-[var(--color-muted)]">{body as string}</p>
                </div>
                {index < workflow.length - 1 ? <ArrowIcon className="landing-flow-arrow" /> : null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="reveal-on-scroll border-b border-[var(--color-border)] bg-[var(--color-bg)]">
        <div className="mx-auto grid w-full max-w-7xl gap-4 px-6 py-10 sm:px-10 md:grid-cols-2 lg:grid-cols-5 lg:px-12">
          {features.map(([title, body, Icon], index) => (
            <Link
              key={title as string}
              href={index === 0 ? "/screening" : index === 3 ? "/centers" : "/signin?mode=signup"}
              className="landing-feature-card"
            >
              <span className={`landing-feature-badge tone-${index + 1}`}>
                <Icon className="h-6 w-6" />
              </span>
              <span>
                <strong>{title as string}</strong>
                <small>{body as string}</small>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section id="pricing" className="reveal-on-scroll mx-auto grid w-full max-w-7xl gap-8 px-6 py-12 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:px-12">
        <div className="landing-proof-panel">
          {proof.map(([value, label, Icon]) => (
            <div key={value as string} className="landing-proof-item">
              <span>
                <Icon className="h-6 w-6" />
              </span>
              <div>
                <strong>{value as string}</strong>
                <small>{label as string}</small>
              </div>
            </div>
          ))}
        </div>

        <div className="landing-final-reference">
          <h2>Ready to take command of your SSB journey?</h2>
          <p>Join aspirants building consistency and confidence with SSB Sarthi.</p>
          <div>
            <Link href="/signin?mode=signup">Start free</Link>
            <Link href="/process">Explore process</Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function DashboardPreview() {
  return (
    <div className="landing-dashboard-window">
      <aside>
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded-full bg-[linear-gradient(135deg,#0d1b2f,#2563eb)]" />
          <div>
            <p>SSB Sarthi</p>
            <small>Candidate workspace</small>
          </div>
        </div>
        <div className="landing-sidebar-active" />
        {["Profile setup", "Practice", "Centers", "Journals", "Resources", "Planner", "Achievements"].map((item) => (
          <span key={item}>{item}</span>
        ))}
      </aside>

      <section>
        <div className="landing-dashboard-top">
          <div>
            <p className="text-sm font-extrabold text-white/70">Overview</p>
            <h3>Welcome back, Yudhveer Panwar</h3>
            <p>Track your readiness, practice smarter, and stay one step ahead of your SSB.</p>
          </div>
          <div className="landing-dashboard-controls">
            <span />
            <span />
            <span />
          </div>
        </div>

        <div className="landing-dashboard-grid">
          <div className="landing-dashboard-main">
            <div className="landing-dashboard-actions">
              <button>Practice now</button>
              <button>Update profile</button>
            </div>

            <div className="landing-stat-row">
              <DashboardStat title="OIR practice" value="2" label="attempts left" tone="blue" />
              <DashboardStat title="PPDT stories" value="10" label="stories left" tone="green" />
              <DashboardStat title="OLQ journal" value="0" label="this week" tone="violet" />
            </div>

            <div className="landing-actions-panel">
              <p>Next best actions</p>
              <div>
                {["Set your SSB details", "Attempt OIR practice", "Write PPDT story", "Reflect in OLQ journal"].map((item, index) => (
                  <span key={item}>
                    <i>{index + 1}</i>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="landing-dashboard-side">
            <div className="landing-side-card">
              <p>Upcoming SSB</p>
              <strong>Not set yet</strong>
              <small>Add your SSB entry and centre</small>
              <button>Set SSB details</button>
            </div>
            <div className="landing-side-card">
              <p>Readiness</p>
              <div className="landing-ring">29%</div>
              {readinessRows.map((row) => (
                <span key={row.label}>
                  {row.label}
                  <small>{row.value}</small>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function DashboardStat({ title, value, label, tone }: { title: string; value: string; label: string; tone: string }) {
  return (
    <div className={`landing-stat-card ${tone}`}>
      <p>{title}</p>
      <strong>{value}</strong>
      <small>{label}</small>
      <span />
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

function CheckCircleIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.5 11 14.5 15.5 9.5" />
      <circle cx="12" cy="12" r="9" />
    </svg>
  );
}

function PulseIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h4l2-5 4 10 2-5h6" />
    </svg>
  );
}

function TargetIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="3" />
      <path strokeLinecap="round" d="M12 2v3m0 14v3M2 12h3m14 0h3" />
    </svg>
  );
}

function JournalIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M7 4h10a2 2 0 0 1 2 2v14H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
      <path strokeLinecap="round" d="M9 9h6M9 13h6M9 17h4" />
    </svg>
  );
}

function PinIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-6.2 7-12A7 7 0 0 0 5 9c0 5.8 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  );
}

function ChartIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 19V5m0 14h16M8 15l3-4 3 2 4-7" />
    </svg>
  );
}

function ImageIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <rect x="4" y="5" width="16" height="14" rx="2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m8 15 3-3 2 2 3-4 4 5" />
      <circle cx="9" cy="9" r="1" />
    </svg>
  );
}

function ChecklistIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 6h11M8 12h11M8 18h11M4 6l1 1 2-2M4 12l1 1 2-2M4 18l1 1 2-2" />
    </svg>
  );
}

function TrendIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 17 9 12l4 4 7-8" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 8h5v5" />
    </svg>
  );
}

function UsersIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16 19a4 4 0 0 0-8 0M12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM20 19a3.5 3.5 0 0 0-4-3.45M4 19a3.5 3.5 0 0 1 4-3.45" />
    </svg>
  );
}

function ShieldIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s7-3.5 7-10V5l-7-3-7 3v6c0 6.5 7 10 7 10Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="m9 12 2 2 4-5" />
    </svg>
  );
}
