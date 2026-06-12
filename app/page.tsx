import Link from "next/link";

const navCards = [
  {
    href: "/process",
    title: "5-day planner",
    detail: "Map screening, psychology, GTO, interview, and conference prep.",
  },
  {
    href: "/screening",
    title: "Practice studio",
    detail: "Train OIR speed and PPDT structure with focused sessions.",
  },
  {
    href: "/centers",
    title: "Centre readiness",
    detail: "Keep travel details, documents, and board logistics in one place.",
  },
];

const progressRows = [
  { label: "OIR drills", value: "82%", width: "82%" },
  { label: "PPDT narration", value: "64%", width: "64%" },
  { label: "OLQ journal", value: "71%", width: "71%" },
];

const planner = [
  { day: "Day 1", title: "Screening", state: "Practice due" },
  { day: "Day 2", title: "Psychology", state: "Prep ready" },
  { day: "Days 3-4", title: "GTO tasks", state: "Review" },
  { day: "Day 5", title: "Conference", state: "Checklist" },
];

const features = [
  {
    title: "5-Day Process Planner",
    body: "Turn the SSB process into a calm, visible plan with daily priorities and prep notes.",
    href: "/process",
    icon: CalendarIcon,
  },
  {
    title: "Screening Practice",
    body: "Run OIR and PPDT practice with clear review prompts after every attempt.",
    href: "/screening",
    icon: TargetIcon,
  },
  {
    title: "Centre Readiness",
    body: "Browse service centres and keep travel, reporting, and document details organized.",
    href: "/centers",
    icon: MapIcon,
  },
  {
    title: "OLQ Journal",
    body: "Track examples, stories, and reflections against officer-like qualities.",
    href: "/resources",
    icon: JournalIcon,
  },
];

const workflow = [
  ["Plan", "Choose daily focus areas before practice starts."],
  ["Practice", "Work through screening and interview prep blocks."],
  ["Review", "Capture honest notes, mistakes, and OLQ evidence."],
  ["Arrive", "Carry a complete checklist into reporting day."],
];

const plans = [
  {
    name: "Free Starter",
    price: "Free",
    description: "For candidates beginning their SSB prep routine.",
    cta: "Try free",
    href: "/process",
    features: ["5-day process overview", "Centre browser", "Starter resources"],
  },
  {
    name: "Sarthi Pro",
    price: "Rs 499",
    description: "For aspirants who want a structured, accountable workspace.",
    cta: "Go Pro",
    href: "/screening",
    features: ["Practice routines", "OLQ journal system", "Weekly readiness review"],
  },
];

const testimonials = [
  {
    quote:
      "The best part is how it turns SSB prep into a routine instead of panic before reporting.",
    name: "Aarav",
    role: "CDS aspirant",
  },
  {
    quote:
      "I used the centre checklist and process planner together. It made the whole journey feel clear.",
    name: "Meera",
    role: "AFCAT aspirant",
  },
  {
    quote:
      "The journal prompts helped me speak from real examples instead of rehearsed answers.",
    name: "Kabir",
    role: "NDA aspirant",
  },
];

export default function HomePage() {
  return (
    <main className="bg-white text-[var(--color-ink-strong)]">
      <section className="overflow-hidden border-b border-[var(--color-border)]">
        <div className="mx-auto grid min-h-[calc(100dvh-var(--nav-height))] w-full max-w-7xl items-center gap-12 px-6 py-16 sm:px-10 lg:grid-cols-[0.92fr_1.08fr] lg:px-12 lg:py-20">
          <div className="max-w-2xl">
            <h1 className="max-w-[11ch] font-display text-5xl font-semibold leading-[1.02] text-[var(--color-ink-strong)] sm:text-6xl lg:text-7xl">
              Your command center for SSB readiness.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--color-muted)]">
              Plan every testing day, practice screening tasks, track OLQs, and
              arrive at the board with clarity.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/screening" className="btn-primary">
                Start preparation
                <ArrowIcon />
              </Link>
              <Link href="/process" className="btn-secondary">
                View demo
              </Link>
            </div>

            <div className="mt-12 grid gap-3 sm:grid-cols-3">
              {navCards.map((card) => (
                <Link key={card.title} href={card.href} className="mini-panel">
                  <span className="text-sm font-semibold text-[var(--color-ink-strong)]">
                    {card.title}
                  </span>
                  <span className="mt-2 block text-xs leading-5 text-[var(--color-muted)]">
                    {card.detail}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="product-shell">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-[var(--color-border)] px-5 py-4">
                <div>
                  <p className="text-sm font-semibold text-[var(--color-ink-strong)]">
                    SSB Sarthi workspace
                  </p>
                  <p className="text-xs text-[var(--color-muted)]">
                    Weekly readiness overview
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#2f7d57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#2f80c9]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#cad3dc]" />
                </div>
              </div>

              <div className="grid gap-4 p-5 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="space-y-4">
                  <div className="rounded-lg border border-[var(--color-border)] bg-white p-4">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-semibold">5-day plan</p>
                      <CalendarIcon className="h-4 w-4 text-[var(--color-green)]" />
                    </div>
                    <div className="mt-4 space-y-2">
                      {planner.map((item) => (
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
                    <div className="mt-4 space-y-3">
                      {["Call-up letter", "Documents", "Travel buffer"].map((item) => (
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
                      <p className="text-sm font-semibold">OLQ progress</p>
                      <TargetIcon className="h-4 w-4 text-[var(--color-blue)]" />
                    </div>
                    <div className="mt-5 space-y-4">
                      {progressRows.map((row) => (
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
                        Next drill
                      </p>
                      <p className="mt-2 text-lg font-semibold">OIR set 04</p>
                      <p className="mt-1 text-xs text-[var(--color-muted)]">18 min focus</p>
                    </div>
                    <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
                      <p className="text-xs font-semibold text-[var(--color-muted)]">
                        Review
                      </p>
                      <p className="mt-2 text-lg font-semibold">PPDT story</p>
                      <p className="mt-1 text-xs text-[var(--color-muted)]">Narration notes</p>
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
              Everything you need for SSB success.
            </h2>
            <p className="mt-5 max-w-md text-base leading-8 text-[var(--color-muted)]">
              One workspace for process clarity, practice discipline, centre
              planning, and honest self-review.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {features.map((feature) => {
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
          {workflow.map(([title, body], index) => (
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
        <div className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-20 sm:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-12">
          <div>
            <h2 className="font-display text-4xl font-semibold leading-tight sm:text-5xl">
              Start structured SSB prep today.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-8 text-[var(--color-muted)]">
              Choose a plan, build your routine, and keep every practice session
              accountable.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {plans.map((plan, index) => (
              <div
                key={plan.name}
                className={`rounded-lg border bg-white p-6 shadow-[var(--shadow-card)] ${
                  index === 1 ? "border-[var(--color-green)]" : "border-[var(--color-border)]"
                }`}
              >
                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                  {plan.description}
                </p>
                <p className="mt-6 text-3xl font-semibold">{plan.price}</p>
                <Link
                  href={plan.href}
                  className={index === 1 ? "btn-primary mt-6 w-full justify-center" : "btn-secondary mt-6 w-full justify-center"}
                >
                  {plan.cta}
                </Link>
                <ul className="mt-6 space-y-3">
                  {plan.features.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[var(--color-ink)]">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-[rgba(47,125,87,0.1)] text-[var(--color-green)]">
                        <CheckIcon />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-20 sm:px-10 lg:px-12">
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure key={item.name} className="rounded-lg border border-[var(--color-border)] p-6">
              <blockquote className="text-base leading-8 text-[var(--color-ink)]">
                &quot;{item.quote}&quot;
              </blockquote>
              <figcaption className="mt-5 text-sm font-semibold">
                {item.name}
                <span className="block text-xs font-medium text-[var(--color-muted)]">
                  {item.role}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="bg-[#0d1b2f] text-white">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-16 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-12">
          <div>
            <h2 className="font-display text-4xl font-semibold leading-tight">
              Build confidence before reporting day.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/65">
              Start with the process map, add practice blocks, and keep your
              preparation visible from the first drill to the final checklist.
            </p>
          </div>
          <Link href="/screening" className="btn-light">
            Start preparation
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
