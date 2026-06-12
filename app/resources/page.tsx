// app/resources/page.tsx
"use client";

import Link from "next/link";

const reportingChecklist = [
  {
    category: "Documents",
    color: "#0369a1",
    items: [
      "Call letter / Admit card (printed)",
      "10th & 12th certificates + mark sheets",
      "Graduation degree / provisional certificate",
      "Valid photo ID (Aadhaar / Passport / Driving licence)",
      "Passport-size photographs (10+)",
      "Caste certificate (if applicable, SC/ST/OBC)",
      "NCC certificate (if applicable)",
      "Sports achievement certificates (if applicable)",
    ],
  },
  {
    category: "Clothing",
    color: "#1d6b40",
    items: [
      "Formal clothes for PI (shirt, trousers, shoes)",
      "Sports/PT gear (track pants, t-shirts, sports shoes)",
      "Casual clothes for the evenings",
      "Woollens / warm layer (esp. for Dehradun, Jalandhar, Bhopal winter)",
      "Slippers / sandals for hostel use",
      "Socks (at least 5 pairs)",
    ],
  },
  {
    category: "Essentials",
    color: "#7c3aed",
    items: [
      "Toiletries (toothbrush, paste, soap, shampoo)",
      "Pen and notepad",
      "Small lock for locker / bag",
      "Medicines if on prescription (with prescription copy)",
      "Water bottle",
      "Alarm / watch (phones often not allowed during tests)",
    ],
  },
  {
    category: "Money & Logistics",
    color: "#b45309",
    items: [
      "Cash (₹2,000–₹3,000 minimum — some canteens are cash-only)",
      "UPI and cards for travel expenses",
      "Note down the centre address offline — don't rely on mobile signal",
      "Arrive the evening before reporting if coming from far",
    ],
  },
];

const piThemes = [
  {
    theme: "About yourself",
    questions: [
      "Tell me about yourself.",
      "What are your strengths and weaknesses?",
      "Why do you want to join the Armed Forces?",
      "Where do you see yourself in 10 years?",
    ],
    color: "#0369a1",
  },
  {
    theme: "Family & background",
    questions: [
      "Tell me about your family.",
      "What does your father do? How has that influenced you?",
      "Any family member in the defence forces?",
      "What do your parents think about your decision to join the forces?",
    ],
    color: "#1d6b40",
  },
  {
    theme: "Academics & career",
    questions: [
      "Why did you choose your graduation stream?",
      "What was your rank / percentage?",
      "Have you appeared for any other competitive exams?",
      "What would you do if you are not selected today?",
    ],
    color: "#7c3aed",
  },
  {
    theme: "Current affairs",
    questions: [
      "Name the current Chief of Army / Air Force / Naval Staff.",
      "What is Operation Sindoor / latest defence exercise you know about?",
      "Name India's latest defence acquisition or induction.",
      "What is the strategic importance of the Andaman Islands?",
    ],
    color: "#b45309",
  },
];

const myths = [
  {
    myth: "You need a defence background to get recommended.",
    reality:
      "The board assesses personality, not pedigree. Many recommended candidates are first-generation defence aspirants. Civilian background is never a disadvantage if you demonstrate the right qualities.",
    verdict: "False",
  },
  {
    myth: "Coaching centres teach you how to crack SSB.",
    reality:
      "SSB tests for Officer Like Qualities over 5 days of multiple formats. Scripted answers and coached behaviour are identified and penalised. Authenticity always outperforms polish.",
    verdict: "False",
  },
  {
    myth: "Physical fitness is the most important factor.",
    reality:
      "Physical fitness matters for the CPSS/medicals — but at SSB, psychological consistency, communication, and leadership under pressure carry far more weight than physical performance alone.",
    verdict: "Partial",
  },
  {
    myth: "If you got screened out, you can't improve.",
    reality:
      "Many recommended candidates have previous screening-out records. Screening in PPDT depends heavily on OIR performance and narration clarity — both are improvable with honest practice.",
    verdict: "False",
  },
  {
    myth: "A high OIR score guarantees recommendation.",
    reality:
      "OIR is only used for screening. After Day 1, it plays no role. GTO, psychology, and PI carry equal weight in the final conference.",
    verdict: "False",
  },
  {
    myth: "The IO is trying to trap you with trick questions.",
    reality:
      "The IO is building a personality profile. Questions are stress-tested for consistency, not designed as traps. Stay calm, honest, and consistent with what you wrote in your PIQ.",
    verdict: "False",
  },
];

export default function ResourcesPage() {
  return (
    <main className="pb-20">
      {/* ── Hero ── */}
      <section className="mx-auto w-full max-w-7xl px-6 pt-12 sm:px-10 lg:px-12">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.97),rgba(255,246,232,0.92))] px-6 py-8 shadow-[var(--shadow-soft)] sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(255,122,89,0.16),transparent_68%)]" />
          <div className="absolute left-0 bottom-0 h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(8,145,178,0.14),transparent_70%)]" />

          <div className="relative grid gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:items-end">
            <div className="max-w-3xl">
              <div className="inline-flex items-center rounded-full border border-white/80 bg-white/84 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-[var(--color-accent-strong)] shadow-sm">
                Practical support
              </div>
              <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.02] tracking-[-0.06em] text-[var(--color-ink-strong)] sm:text-5xl lg:text-[4.2rem]">
                Everything you need before you pack and leave.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
                From reporting checklists to PI refreshers and myth-busting
                — this section is built for the 48 hours before you show up.
                Scan it on your phone the night before travel.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  { label: "Document checklist", anchor: "#checklist" },
                  { label: "PI question themes", anchor: "#pi-themes" },
                  { label: "Myths vs reality", anchor: "#myths" },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.anchor}
                    className="rounded-full border border-white/80 bg-white/70 px-4 py-2 text-sm font-semibold text-[var(--color-ink-strong)] shadow-sm backdrop-blur-sm transition-all hover:shadow-md hover:-translate-y-0.5"
                  >
                    {link.label} ↓
                  </a>
                ))}
              </div>
            </div>

            {/* Quick tips panel */}
            <div className="rounded-[1.8rem] border border-white/80 bg-[#0d1b2f] p-6 text-white shadow-[0_18px_46px_rgba(15,23,42,0.18)]">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/58">
                Day-before tips
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  "Arrive the evening before — never morning-of.",
                  "Keep call letter + ID in your hand bag, not checked luggage.",
                  "Phones are usually collected at reception — download offline maps.",
                  "Sleep well. Tests start early and continue through the day.",
                  "Eat a proper meal before reporting. Centre food takes time on Day 1.",
                  "Don't discuss your PIQ answers with others the night before.",
                ].map((tip) => (
                  <li
                    key={tip}
                    className="flex items-start gap-2.5 text-sm text-white/80"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-white/40" />
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Practice Screening Banner ── */}
      <section className="mx-auto w-full max-w-7xl px-6 pt-10 sm:px-10 lg:px-12">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-[linear-gradient(135deg,rgba(3,105,161,0.07),rgba(29,107,64,0.06))] px-6 py-7 shadow-[var(--shadow-card)] sm:px-8">
          <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(3,105,161,0.18),transparent_70%)]" />
          <div className="absolute left-1/2 bottom-0 h-32 w-64 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(29,107,64,0.12),transparent_70%)]" />
          <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center rounded-full bg-[#0369a1]/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-[#0369a1]">
                  Day 1 Prep
                </span>
                <span className="inline-flex items-center rounded-full bg-[#1d6b40]/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.22em] text-[#1d6b40]">
                  Interactive
                </span>
              </div>
              <h2 className="font-display text-2xl font-semibold tracking-[-0.04em] text-[var(--color-ink-strong)] sm:text-3xl">
                Practice the Screening Process
              </h2>
              <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                Timed OIR practice tests and PPDT picture narration sets — built to simulate the real Day 1 experience.
              </p>
            </div>
            <Link
              href="/screening"
              className="shrink-0 rounded-2xl bg-[linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))] px-7 py-3.5 text-sm font-bold text-white shadow-[0_10px_28px_rgba(26,115,232,0.28)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(26,115,232,0.36)] whitespace-nowrap"
            >
              Start Practising →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Reporting checklist ── */}
      <section
        id="checklist"
        className="mx-auto w-full max-w-7xl px-6 pt-12 sm:px-10 lg:px-12"
      >
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--color-accent-strong)]">
            Before you leave home
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.04em] text-[var(--color-ink-strong)] sm:text-4xl">
            Reporting checklist — don&apos;t forget these.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {reportingChecklist.map((section) => (
            <div
              key={section.category}
              className="rounded-[1.7rem] border border-white/80 bg-white/92 p-6 shadow-[var(--shadow-card)]"
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="h-1.5 w-8 rounded-full"
                  style={{ background: section.color }}
                />
                <h3
                  className="font-display text-xl font-semibold"
                  style={{ color: section.color }}
                >
                  {section.category}
                </h3>
              </div>
              <ul className="space-y-2.5">
                {section.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm text-[var(--color-ink-strong)]"
                  >
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2"
                      style={{ borderColor: `color-mix(in srgb, ${section.color} 35%, transparent)` }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── PI Themes ── */}
      <section
        id="pi-themes"
        className="mx-auto w-full max-w-7xl px-6 pt-12 sm:px-10 lg:px-12"
      >
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--color-accent-strong)]">
            Personal interview
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.04em] text-[var(--color-ink-strong)] sm:text-4xl">
            Common PI question themes — reflect, don&apos;t memorise.
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-[var(--color-muted)]">
            These aren&apos;t scripts. Use these themes to reflect honestly on your
            own answers before the interview — not to craft coached responses.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {piThemes.map((theme) => (
            <div
              key={theme.theme}
              className="rounded-[1.7rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.95),rgba(247,252,255,0.92))] p-6 shadow-[var(--shadow-card)]"
            >
              <div
                className="inline-flex items-center rounded-full px-3 py-1.5 text-xs font-bold uppercase tracking-wider mb-4"
                style={{
                  background: `color-mix(in srgb, ${theme.color} 10%, white)`,
                  color: theme.color,
                }}
              >
                {theme.theme}
              </div>
              <ul className="space-y-2.5">
                {theme.questions.map((q) => (
                  <li key={q} className="flex items-start gap-2.5 text-sm text-[var(--color-ink-strong)]">
                    <span
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full"
                      style={{ background: theme.color }}
                    />
                    {q}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* ── Myths vs Reality ── */}
      <section
        id="myths"
        className="mx-auto w-full max-w-7xl px-6 pt-12 sm:px-10 lg:px-12"
      >
        <div className="mb-8">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--color-accent-strong)]">
            Common misconceptions
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-[-0.04em] text-[var(--color-ink-strong)] sm:text-4xl">
            Myths vs reality — cleared plainly.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {myths.map((item) => (
            <div
              key={item.myth}
              className="rounded-[1.6rem] border border-white/80 bg-white/92 p-5 shadow-sm"
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <p className="text-sm font-bold text-[var(--color-ink-strong)] leading-snug">
                  &ldquo;{item.myth}&rdquo;
                </p>
                <span
                  className={`shrink-0 rounded-full px-2.5 py-1 text-[10px] font-black uppercase tracking-widest ${
                    item.verdict === "False"
                      ? "bg-red-50 text-red-600"
                      : "bg-amber-50 text-amber-700"
                  }`}
                >
                  {item.verdict}
                </span>
              </div>
              <p className="text-sm leading-relaxed text-[var(--color-muted)]">
                {item.reality}
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
