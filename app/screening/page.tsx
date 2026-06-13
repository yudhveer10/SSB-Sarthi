import Link from "next/link";

export const metadata = {
  title: "Practice Approach | SSB Sarthi",
  description:
    "Understand the SSB Sarthi practice approach for OIR, PPDT, psychology, GTO, interview, and conference preparation.",
};

const practiceAreas = [
  {
    title: "OIR reasoning",
    body: "Build speed and accuracy across verbal and non-verbal reasoning without treating practice as random guessing.",
    points: ["Timed sets", "Accuracy review", "Pattern awareness"],
  },
  {
    title: "PPDT narration",
    body: "Practice observation, story structure, narration clarity, and group-discussion readiness.",
    points: ["Hero-problem-action flow", "Narration notes", "Theme review"],
  },
  {
    title: "Psychology tests",
    body: "Prepare for TAT, WAT, SRT, and self-description with honest, consistent examples.",
    points: ["Natural responses", "OLQ mapping", "Reflection prompts"],
  },
  {
    title: "GTO tasks",
    body: "Understand group task behavior, communication, planning, cooperation, and initiative.",
    points: ["Task briefing", "Group conduct", "After-action review"],
  },
  {
    title: "Interview readiness",
    body: "Organize PIQ details, personal examples, academics, family, hobbies, and service motivation.",
    points: ["PIQ review", "Story bank", "Confidence building"],
  },
  {
    title: "Conference prep",
    body: "Keep final-day clarity with checklist status, common weak areas, and last review notes.",
    points: ["Final checklist", "Open gaps", "Reporting day calm"],
  },
];

const approach = [
  ["Understand", "Know what the task is testing before attempting it."],
  ["Practice", "Attempt drills only inside the logged-in dashboard so progress is saved."],
  ["Review", "Capture mistakes, themes, timing issues, and OLQ evidence after each session."],
  ["Repeat", "Use the dashboard to turn review into the next focused practice block."],
];

const dashboardItems = [
  "Timed OIR attempts with saved history",
  "PPDT picture sets and narration notes",
  "OLQ journal linked to real personal examples",
  "Readiness plan across screening, psychology, GTO, interview, and conference",
  "Centre checklist for documents, travel, and reporting details",
];

export default function ScreeningPage() {
  return (
    <main className="bg-white pb-20 text-[var(--color-ink-strong)]">
      <section className="mx-auto w-full max-w-7xl px-6 pt-12 sm:px-10 lg:px-12">
        <div className="grid gap-10 rounded-lg border border-[var(--color-border)] bg-[linear-gradient(135deg,#ffffff,#eef8ff)] p-6 shadow-[var(--shadow-card)] sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
          <div>
            <h1 className="font-display text-4xl font-extrabold leading-tight sm:text-5xl">
              Practice with structure, not scattered attempts.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--color-muted)]">
              This page explains what SSB Sarthi helps you practice and how the
              preparation flow works. Actual tests and saved attempts are
              available only after login inside your dashboard.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/signin" className="btn-primary">
                Login to practice
                <ArrowIcon />
              </Link>
              <Link href="/process" className="btn-secondary">
                View SSB process
              </Link>
            </div>
          </div>

          <div className="rounded-lg border border-[var(--color-border)] bg-white p-5">
            <p className="text-sm font-semibold text-[var(--color-ink-strong)]">
              Practice boundary
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                ["Public pages", "Learn the process, centres, resources, and practice approach."],
                ["Dashboard", "Attempt tests, save notes, track progress, and continue where you left off."],
                ["Why login", "Your results and reflections should belong to your private workspace."],
                ["Next build", "More practice modules can plug into the same dashboard flow later."],
              ].map(([title, body]) => (
                <div key={title} className="rounded-lg bg-[var(--color-surface)] p-4">
                  <h2 className="text-sm font-semibold">{title}</h2>
                  <p className="mt-2 text-xs leading-5 text-[var(--color-muted)]">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pt-14 sm:px-10 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
              What we need to practice.
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
              SSB preparation is not one quiz. It is a mix of reasoning,
              expression, psychology, group behavior, interview clarity, and
              reporting-day readiness.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {practiceAreas.map((area) => (
              <article key={area.title} className="rounded-lg border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-card)]">
                <h3 className="text-lg font-semibold">{area.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">{area.body}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {area.points.map((point) => (
                    <span
                      key={point}
                      className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-xs font-semibold text-[var(--color-ink)]"
                    >
                      {point}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 pt-14 sm:px-10 lg:px-12">
        <div className="grid overflow-hidden rounded-lg border border-[var(--color-border)] bg-white md:grid-cols-4">
          {approach.map(([title, body], index) => (
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

      <section className="mx-auto w-full max-w-7xl px-6 pt-14 sm:px-10 lg:px-12">
        <div className="grid gap-8 rounded-lg border border-[var(--color-border)] bg-[#0d1b2f] p-6 text-white shadow-[var(--shadow-card)] sm:p-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="font-display text-3xl font-bold leading-tight sm:text-4xl">
              How this connects to the dashboard.
            </h2>
            <p className="mt-4 text-sm leading-7 text-white/65">
              The public practice page sets expectations. The dashboard is the
              actual workspace where candidates attempt, save, review, and
              continue practice over time.
            </p>
            <Link href="/signin" className="btn-light mt-7">
              Open dashboard
              <ArrowIcon />
            </Link>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2">
            {dashboardItems.map((item) => (
              <li key={item} className="flex gap-3 rounded-lg bg-white/8 p-4 text-sm leading-6 text-white/78">
                <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-[#2f7d57] text-white">
                  <CheckIcon />
                </span>
                {item}
              </li>
            ))}
          </ul>
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
