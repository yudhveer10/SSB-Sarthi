import Link from "next/link";
import { redirect } from "next/navigation";
import type { Json } from "../_lib/database.types";
import { createClient } from "../_lib/supabase/server";

export const metadata = {
  title: "Dashboard",
};

export const dynamic = "force-dynamic";

type ChecklistItem = {
  label: string;
  done: boolean;
};

const fallbackChecklist: ChecklistItem[] = [
  { label: "Call-up letter", done: false },
  { label: "Photo ID and documents", done: false },
  { label: "Travel and reporting buffer", done: false },
  { label: "Final OIR revision", done: false },
];

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: claimsData, error } = await supabase.auth.getClaims();

  if (error || !claimsData?.claims?.sub) {
    redirect("/signin");
  }

  const userId = claimsData.claims.sub;

  const [profileResult, planResult, checklistResult, oirResult, ppdtResult, journalResult] =
    await Promise.all([
      supabase.from("profiles").select("*").eq("id", userId).maybeSingle(),
      supabase
        .from("prep_plans")
        .select("*")
        .eq("user_id", userId)
        .order("created_at", { ascending: false })
        .limit(1)
        .maybeSingle(),
      supabase
        .from("centre_checklists")
        .select("*")
        .eq("user_id", userId)
        .order("created_at", { ascending: false })
        .limit(1)
        .maybeSingle(),
      supabase
        .from("oir_attempts")
        .select("*")
        .eq("user_id", userId)
        .order("completed_at", { ascending: false })
        .limit(5),
      supabase
        .from("ppdt_attempts")
        .select("*")
        .eq("user_id", userId)
        .order("completed_at", { ascending: false })
        .limit(10),
      supabase
        .from("olq_journals")
        .select("*")
        .eq("user_id", userId)
        .order("created_at", { ascending: false })
        .limit(3),
    ]);

  const profile = profileResult.data;
  const plan = planResult.data;
  const checklist = parseChecklist(checklistResult.data?.items);
  const oirAttempts = oirResult.data ?? [];
  const ppdtAttempts = ppdtResult.data ?? [];
  const journals = journalResult.data ?? [];
  const candidateName = cleanName(profile?.full_name) ?? "Candidate";
  const firstName = candidateName.split(" ")[0] ?? "Candidate";
  const latestScore = oirAttempts[0]
    ? `${oirAttempts[0].score}/${oirAttempts[0].total_questions}`
    : "Not started";
  const completedChecklist = checklist.filter((item) => item.done).length;
  const freeOirLimit = 5;
  const freePpdtLimit = 10;
  const oirUsed = Math.min(oirAttempts.length, freeOirLimit);
  const ppdtUsed = Math.min(ppdtAttempts.length, freePpdtLimit);
  const readinessItems = [
    Boolean(profile?.onboarding_completed || profile?.full_name),
    Boolean(plan?.target_entry),
    Boolean(plan?.target_board || plan?.reporting_date),
    oirAttempts.length > 0,
    ppdtAttempts.length > 0,
    journals.length > 0,
    completedChecklist > 0,
  ];
  const readinessScore = Math.round(
    (readinessItems.filter(Boolean).length / readinessItems.length) * 100,
  );
  const reportingLabel = plan?.reporting_date
    ? formatDate(plan.reporting_date)
    : "Add reporting date";
  const boardLabel = plan?.target_board ?? "Set SSB centre";

  return (
    <div>
      <section className="mx-auto w-full max-w-7xl px-5 py-8 sm:px-8">
        <div className="grid gap-5 xl:grid-cols-[1.35fr_0.65fr]">
          <div className="rounded-lg border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-card)] sm:p-6">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--color-green)]">
                  Candidate command
                </p>
                <h1 className="mt-3 font-display text-3xl font-extrabold leading-tight text-[var(--color-ink-strong)] sm:text-4xl">
                  Welcome back, {firstName}.
                </h1>
                <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--color-muted)]">
                  Track your SSB readiness, free practice allowance, upcoming
                  reporting details, and daily preparation momentum from one
                  clean workspace.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href="/dashboard/practice" className="btn-primary">
                  Practice now
                </Link>
                <Link href="/dashboard/profile" className="btn-secondary">
                  Update profile
                </Link>
              </div>
            </div>

            <div className="mt-6 grid gap-3 md:grid-cols-3">
              <AllowanceCard
                label="Free OIR attempts"
                used={oirUsed}
                total={freeOirLimit}
                note={`${freeOirLimit - oirUsed} attempts left`}
              />
              <AllowanceCard
                label="PPDT pictures + story"
                used={ppdtUsed}
                total={freePpdtLimit}
                note={`${freePpdtLimit - ppdtUsed} stories left`}
              />
              <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
                <p className="text-xs font-bold uppercase text-[var(--color-muted)]">
                  Candidate tracking
                </p>
                <p className="mt-2 text-3xl font-extrabold text-[var(--color-ink-strong)]">
                  {readinessScore}%
                </p>
                <p className="mt-1 text-sm font-semibold text-[var(--color-muted)]">
                  readiness profile
                </p>
              </div>
            </div>
          </div>

          <section className="rounded-lg border border-[var(--color-border)] bg-[#0d1b2f] p-5 text-white shadow-[var(--shadow-card)] sm:p-6">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/55">
              Upcoming SSB
            </p>
            <h2 className="mt-3 text-2xl font-extrabold">{boardLabel}</h2>
            <p className="mt-2 text-sm leading-6 text-white/68">{reportingLabel}</p>
            <div className="mt-5 grid gap-2">
              {[
                ["Entry", plan?.target_entry ?? "Choose entry"],
                ["Checklist", `${completedChecklist}/${checklist.length} ready`],
                ["Latest OIR", latestScore],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between rounded-lg bg-white/8 px-3 py-2"
                >
                  <span className="text-xs font-semibold text-white/55">{label}</span>
                  <span className="text-sm font-bold text-white">{value}</span>
                </div>
              ))}
            </div>
            <Link href="/dashboard/profile" className="btn-light mt-5">
              Manage SSB details
            </Link>
          </section>
        </div>

        <div className="mt-8 grid gap-3 md:grid-cols-4">
          {[
            ["Workspace", plan?.title ?? "Free starter workspace"],
            ["Target entry", plan?.target_entry ?? "Set in profile"],
            ["Latest OIR", latestScore],
            ["Checklist", `${completedChecklist}/${checklist.length} ready`],
          ].map(([label, value]) => (
            <div key={label} className="mini-panel">
              <p className="text-xs font-semibold uppercase text-[var(--color-muted)]">
                {label}
              </p>
              <p className="mt-2 text-xl font-bold text-[var(--color-ink-strong)]">
                {value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <section className="rounded-lg border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-card)] lg:col-span-2">
            <div className="grid gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-green)]">
                  Readiness command center
                </p>
                <h2 className="mt-3 text-2xl font-extrabold text-[var(--color-ink-strong)]">
                  Your next best actions
                </h2>
                <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                  Built for a free account now, ready to expand into deeper
                  tracking when we add more modules.
                </p>
              </div>
              <div className="grid gap-3 md:grid-cols-3">
                {[
                  ["Plan", plan?.target_board ? "Confirm reporting kit" : "Add centre and date"],
                  ["Practice", `Attempt up to ${freeOirLimit} free OIRs`],
                  ["PPDT", `Write from ${freePpdtLimit} free picture prompts`],
                ].map(([title, body]) => (
                  <div key={title} className="rounded-lg bg-[var(--color-surface)] p-4">
                    <p className="text-sm font-bold text-[var(--color-ink-strong)]">{title}</p>
                    <p className="mt-2 text-xs leading-5 text-[var(--color-muted)]">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="rounded-lg border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-card)]">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-bold">Preparation plan</h2>
                <p className="mt-1 text-sm text-[var(--color-muted)]">
                  Your current SSB routine and reporting target.
                </p>
              </div>
              <Link href="/dashboard/resources" className="text-sm font-bold text-[var(--color-blue)]">
                Resources
              </Link>
            </div>

            <div className="mt-5 grid gap-3">
              {[
                ["Entry", plan?.target_entry ?? "NDA / CDS / AFCAT"],
                ["Status", plan?.status ?? "Ready to start"],
                ["Centre", plan?.target_board ?? "Not selected"],
                ["Reporting", reportingLabel],
                ["Profile", profile?.onboarding_completed ? "Configured" : "Basic account"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between rounded-lg bg-[var(--color-surface)] px-4 py-3"
                >
                  <span className="text-sm font-semibold text-[var(--color-muted)]">
                    {label}
                  </span>
                  <span className="text-sm font-bold text-[var(--color-ink-strong)]">
                    {value}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-lg border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-card)]">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-bold">Centre checklist</h2>
                <p className="mt-1 text-sm text-[var(--color-muted)]">
                  Keep reporting-day essentials in one place.
                </p>
              </div>
              <Link href="/dashboard/centers" className="text-sm font-bold text-[var(--color-blue)]">
                Centers
              </Link>
            </div>

            <div className="mt-5 space-y-2">
              {checklist.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-lg bg-[var(--color-surface)] px-4 py-3"
                >
                  <span
                    className={`flex h-5 w-5 items-center justify-center rounded text-[10px] font-black ${
                      item.done
                        ? "bg-[var(--color-green)] text-white"
                        : "border border-[var(--color-border-strong)] bg-white text-transparent"
                    }`}
                  >
                    ok
                  </span>
                  <span className="text-sm font-semibold text-[var(--color-ink)]">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-3">
          <section className="rounded-lg border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-card)]">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-bold">Candidate tracking</h2>
                <p className="mt-1 text-sm text-[var(--color-muted)]">
                  Quick view of the habits that build SSB consistency.
                </p>
              </div>
              <span className="rounded-full bg-[var(--color-green-soft)] px-3 py-1 text-xs font-bold text-[var(--color-green)]">
                {readinessScore}%
              </span>
            </div>
            <div className="mt-5 space-y-3">
              {[
                ["Profile", profile?.onboarding_completed ? "Complete" : "Needs setup"],
                ["OIR practice", `${oirUsed}/${freeOirLimit} used`],
                ["PPDT stories", `${ppdtUsed}/${freePpdtLimit} written`],
                ["OLQ journal", journals.length > 0 ? `${journals.length} recent` : "Start today"],
              ].map(([label, value]) => (
                <div key={label}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-semibold text-[var(--color-muted)]">{label}</span>
                    <span className="font-bold text-[var(--color-ink-strong)]">{value}</span>
                  </div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-[var(--color-surface-alt)]">
                    <div
                      className="h-full rounded-full bg-[var(--color-blue)]"
                      style={{
                        width:
                          label === "Profile"
                            ? profile?.onboarding_completed
                              ? "100%"
                              : "35%"
                            : label === "OIR practice"
                              ? `${(oirUsed / freeOirLimit) * 100}%`
                              : label === "PPDT stories"
                                ? `${(ppdtUsed / freePpdtLimit) * 100}%`
                                : journals.length > 0
                                  ? "100%"
                                  : "20%",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
          <ActivityPanel
            title="OIR attempts"
            href="/dashboard/practice"
            empty="No OIR attempts yet."
            items={oirAttempts.map((attempt) => ({
              title: attempt.paper,
              meta: `${attempt.score}/${attempt.total_questions} - ${formatDate(attempt.completed_at)}`,
            }))}
          />
          <ActivityPanel
            title="PPDT stories"
            href="/dashboard/practice"
            empty="No PPDT stories saved yet."
            items={ppdtAttempts.map((attempt) => ({
              title: attempt.title,
              meta: `${attempt.self_score ?? "Unscored"}/10 - ${formatDate(attempt.completed_at)}`,
            }))}
          />
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[1fr_1fr]">
          <ActivityPanel
            title="OLQ journal"
            href="/dashboard/journals"
            empty="No journal entries yet."
            items={journals.map((entry) => ({
              title: entry.title,
              meta:
                entry.olq_tags.length > 0
                  ? entry.olq_tags.slice(0, 3).join(", ")
                  : formatDate(entry.created_at),
            }))}
          />
          <section className="rounded-lg border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-card)]">
            <div className="flex items-center justify-between gap-4">
              <div>
                <h2 className="text-lg font-bold">Upcoming modules</h2>
                <p className="mt-1 text-sm text-[var(--color-muted)]">
                  Space reserved for the features we will add next.
                </p>
              </div>
              <span className="text-sm font-bold text-[var(--color-blue)]">Soon</span>
            </div>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {[
                ["Mock SSB calendar", "Reporting reminders and weekly targets."],
                ["GTO tracker", "Lecturette, GD, command task and obstacle logs."],
                ["Medical readiness", "Document and fitness checkpoints."],
                ["Mentor review", "Feedback queue for stories and OLQ examples."],
              ].map(([title, body]) => (
                <div key={title} className="rounded-lg bg-[var(--color-surface)] p-4">
                  <p className="text-sm font-bold text-[var(--color-ink-strong)]">{title}</p>
                  <p className="mt-2 text-xs leading-5 text-[var(--color-muted)]">{body}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}

function AllowanceCard({
  label,
  used,
  total,
  note,
}: {
  label: string;
  used: number;
  total: number;
  note: string;
}) {
  const percent = Math.min(100, Math.round((used / total) * 100));

  return (
    <div className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
      <div className="flex items-start justify-between gap-4">
        <p className="text-xs font-bold uppercase text-[var(--color-muted)]">{label}</p>
        <p className="text-sm font-extrabold text-[var(--color-ink-strong)]">
          {used}/{total}
        </p>
      </div>
      <div className="mt-4 h-2 overflow-hidden rounded-full bg-white">
        <div className="h-full rounded-full bg-[var(--color-green)]" style={{ width: `${percent}%` }} />
      </div>
      <p className="mt-3 text-sm font-semibold text-[var(--color-muted)]">{note}</p>
    </div>
  );
}

function ActivityPanel({
  title,
  href,
  items,
  empty,
}: {
  title: string;
  href: string;
  empty: string;
  items: { title: string; meta: string }[];
}) {
  return (
    <section className="rounded-lg border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-card)]">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <Link href={href} className="text-sm font-bold text-[var(--color-blue)]">
          Open
        </Link>
      </div>
      <div className="mt-5 space-y-3">
        {items.length > 0 ? (
          items.map((item) => (
            <div key={`${item.title}-${item.meta}`} className="rounded-lg bg-[var(--color-surface)] px-4 py-3">
              <p className="text-sm font-bold text-[var(--color-ink-strong)]">{item.title}</p>
              <p className="mt-1 text-xs text-[var(--color-muted)]">{item.meta}</p>
            </div>
          ))
        ) : (
          <p className="rounded-lg bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-muted)]">
            {empty}
          </p>
        )}
      </div>
    </section>
  );
}

function parseChecklist(items: Json | undefined): ChecklistItem[] {
  if (!Array.isArray(items)) {
    return fallbackChecklist;
  }

  const parsed = items
    .map((item) => {
      if (!item || typeof item !== "object" || Array.isArray(item)) {
        return null;
      }

      const label = item.label;
      const done = item.done;

      if (typeof label !== "string" || typeof done !== "boolean") {
        return null;
      }

      return { label, done };
    })
    .filter((item): item is ChecklistItem => item !== null);

  return parsed.length > 0 ? parsed : fallbackChecklist;
}

function cleanName(value: string | null | undefined) {
  const trimmed = value?.trim();

  return trimmed ? trimmed : null;
}

function formatDate(value: string | null | undefined) {
  if (!value) {
    return "Not set";
  }

  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(value));
}
