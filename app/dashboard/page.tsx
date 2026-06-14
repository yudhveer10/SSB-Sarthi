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

type ActivityItem = {
  title: string;
  meta: string;
};

const fallbackChecklist: ChecklistItem[] = [
  { label: "Call-up letter", done: false },
  { label: "Photo ID and documents", done: false },
  { label: "Travel and reporting buffer", done: false },
  { label: "Final OIR revision", done: false },
];

const freeOirLimit = 5;
const freePpdtLimit = 10;

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: userData, error } = await supabase.auth.getUser();

  if (error || !userData.user) {
    redirect("/signin");
  }

  const userId = userData.user.id;

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
  const latestScore = oirAttempts[0]
    ? `${oirAttempts[0].score}/${oirAttempts[0].total_questions}`
    : "Not started";
  const completedChecklist = checklist.filter((item) => item.done).length;
  const oirUsed = Math.min(oirAttempts.length, freeOirLimit);
  const ppdtUsed = Math.min(ppdtAttempts.length, freePpdtLimit);
  const reportingLabel = plan?.reporting_date ? formatDate(plan.reporting_date) : "Not scheduled";
  const boardLabel = plan?.target_board ?? "Add SSB centre";
  const entryLabel = plan?.target_entry ?? "Set target entry";

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

  const nextActions = [
    {
      title: plan?.target_board ? "Confirm reporting kit" : "Add centre and date",
      body: plan?.target_board
        ? "Review your travel buffer and document stack."
        : "Save your board and reporting date in profile setup.",
      href: "/dashboard/profile",
      tone: "blue",
    },
    {
      title: oirUsed < freeOirLimit ? "Attempt OIR practice" : "Review OIR attempts",
      body:
        oirUsed < freeOirLimit
          ? `${freeOirLimit - oirUsed} free attempts left in this workspace.`
          : "Use recent scores to find weak reasoning areas.",
      href: "/dashboard/practice",
      tone: "green",
    },
    {
      title: ppdtUsed < freePpdtLimit ? "Write a PPDT story" : "Review PPDT stories",
      body:
        ppdtUsed < freePpdtLimit
          ? `${freePpdtLimit - ppdtUsed} picture-story prompts left.`
          : "Re-read themes and tighten story structure.",
      href: "/dashboard/practice",
      tone: "amber",
    },
  ];

  return (
    <section className="mx-auto w-full max-w-7xl px-5 py-6 sm:px-8">
      <div className="grid gap-5 xl:grid-cols-[1.45fr_0.55fr]">
        <section className="overflow-hidden rounded-lg border border-[var(--color-border)] bg-white shadow-[var(--shadow-card)]">
          <div className="grid gap-0 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="p-5 sm:p-6 lg:p-7">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-extrabold uppercase text-[var(--color-green)]">
                    Candidate workspace
                  </p>
                  <h1 className="mt-3 max-w-2xl font-display text-3xl font-extrabold leading-tight text-[var(--color-ink-strong)] sm:text-4xl">
                    Welcome back, {candidateName}.
                  </h1>
                </div>
                <StatusDot label={profile?.onboarding_completed ? "Profile ready" : "Profile pending"} />
              </div>

              <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--color-muted)]">
                A focused command center for free practice, reporting readiness,
                centre planning, and daily SSB preparation momentum.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/dashboard/practice" className="btn-primary">
                  Practice now
                </Link>
                <Link href="/dashboard/profile" className="btn-secondary">
                  Update profile
                </Link>
              </div>
            </div>

            <div className="border-t border-[var(--color-border)] bg-[var(--color-surface)] p-5 sm:p-6 lg:border-l lg:border-t-0">
              <div className="grid gap-3">
                <WorkspaceFact label="Target entry" value={entryLabel} />
                <WorkspaceFact label="Upcoming SSB" value={boardLabel} />
                <WorkspaceFact label="Reporting" value={reportingLabel} />
              </div>
            </div>
          </div>
        </section>

        <section className="rounded-lg border border-[var(--color-border)] bg-[#0d1b2f] p-5 text-white shadow-[var(--shadow-card)] sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase text-white/55">Readiness</p>
              <p className="mt-2 text-5xl font-extrabold leading-none">{readinessScore}%</p>
            </div>
            <Icon name="target" className="text-white/70" />
          </div>
          <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/12">
            <div className="h-full rounded-full bg-[#7bd79b]" style={{ width: `${readinessScore}%` }} />
          </div>
          <p className="mt-4 text-sm leading-6 text-white/68">
            Complete profile, centre details, practice attempts, and reflection logs
            to build a stronger candidate profile.
          </p>
        </section>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        <MetricCard label="Free OIR attempts" value={`${oirUsed}/${freeOirLimit}`} detail={`${freeOirLimit - oirUsed} left`} icon="brain" />
        <MetricCard label="PPDT picture stories" value={`${ppdtUsed}/${freePpdtLimit}`} detail={`${freePpdtLimit - ppdtUsed} left`} icon="image" />
        <MetricCard label="Latest OIR" value={latestScore} detail={oirAttempts[0]?.paper ?? "Start first attempt"} icon="trend" />
        <MetricCard label="Centre checklist" value={`${completedChecklist}/${checklist.length}`} detail="reporting essentials" icon="check" />
      </div>

      <div className="mt-5 grid gap-5 xl:grid-cols-[0.72fr_0.28fr]">
        <section className="rounded-lg border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-card)] sm:p-6">
          <SectionHeader
            title="Next best actions"
            body="A short sequence for what matters most before your next reporting day."
            href="/dashboard/practice"
            action="Open practice"
          />
          <div className="mt-5 grid gap-3 lg:grid-cols-3">
            {nextActions.map((action, index) => (
              <ActionCard key={action.title} index={index + 1} {...action} />
            ))}
          </div>
        </section>

        <section className="rounded-lg border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-card)] sm:p-6">
          <SectionHeader
            title="Upcoming SSB"
            body="Keep reporting details close."
            href="/dashboard/profile"
            action="Manage"
          />
          <div className="mt-5 space-y-3">
            <DataRow label="Board / centre" value={boardLabel} />
            <DataRow label="Entry" value={entryLabel} />
            <DataRow label="Reporting" value={reportingLabel} />
          </div>
        </section>
      </div>

      <div className="mt-5 grid gap-5 xl:grid-cols-[0.38fr_0.62fr]">
        <ChecklistPanel items={checklist} completed={completedChecklist} />

        <section className="rounded-lg border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-card)] sm:p-6">
          <SectionHeader
            title="Recent activity"
            body="Practice and reflection snapshots from your workspace."
            href="/dashboard/practice"
            action="View all"
          />
          <div className="mt-5 grid gap-4 lg:grid-cols-3">
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
              items={ppdtAttempts.slice(0, 3).map((attempt) => ({
                title: attempt.title,
                meta: `${attempt.self_score ?? "Unscored"}/10 - ${formatDate(attempt.completed_at)}`,
              }))}
            />
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
          </div>
        </section>
      </div>

      <section className="mt-5 rounded-lg border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-card)] sm:p-6">
        <SectionHeader
          title="Workspace modules"
          body="Connected areas for the preparation workflow we will keep expanding."
          href="/dashboard/resources"
          action="Resources"
        />
        <div className="mt-5 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
          {[
            ["Practice hub", "OIR, PPDT and screening drills.", "/dashboard/practice", "brain"],
            ["Centre readiness", "Board, travel and checklist planning.", "/dashboard/centers", "map"],
            ["OLQ journal", "Evidence, reflection and examples.", "/dashboard/journals", "journal"],
            ["Upcoming modules", "GTO, medical and mentor review next.", "/dashboard/resources", "spark"],
          ].map(([title, body, href, icon]) => (
            <Link
              key={title}
              href={href}
              className="group rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4 transition hover:border-[var(--color-blue)] hover:bg-white hover:shadow-[var(--shadow-card)]"
            >
              <div className="flex items-start justify-between gap-3">
                <Icon name={icon} className="text-[var(--color-blue)]" />
                <span className="text-sm font-bold text-[var(--color-muted)] transition group-hover:text-[var(--color-blue)]">
                  Open
                </span>
              </div>
              <p className="mt-4 text-base font-extrabold text-[var(--color-ink-strong)]">{title}</p>
              <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{body}</p>
            </Link>
          ))}
        </div>
      </section>
    </section>
  );
}

function StatusDot({ label }: { label: string }) {
  return (
    <div className="hidden items-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 text-xs font-bold text-[var(--color-green)] sm:flex">
      <span className="h-2 w-2 rounded-full bg-[var(--color-green)]" />
      {label}
    </div>
  );
}

function WorkspaceFact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-white px-4 py-3">
      <p className="text-xs font-bold uppercase text-[var(--color-muted)]">{label}</p>
      <p className="mt-1 text-base font-extrabold text-[var(--color-ink-strong)]">{value}</p>
    </div>
  );
}

function MetricCard({
  label,
  value,
  detail,
  icon,
}: {
  label: string;
  value: string;
  detail: string;
  icon: string;
}) {
  return (
    <section className="rounded-lg border border-[var(--color-border)] bg-white p-4 shadow-[var(--shadow-card)]">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase text-[var(--color-muted)]">{label}</p>
          <p className="mt-2 text-2xl font-extrabold text-[var(--color-ink-strong)]">{value}</p>
        </div>
        <Icon name={icon} className="text-[var(--color-blue)]" />
      </div>
      <p className="mt-3 text-sm font-semibold text-[var(--color-muted)]">{detail}</p>
    </section>
  );
}

function SectionHeader({
  title,
  body,
  href,
  action,
}: {
  title: string;
  body: string;
  href: string;
  action: string;
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <h2 className="text-xl font-extrabold text-[var(--color-ink-strong)]">{title}</h2>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-[var(--color-muted)]">{body}</p>
      </div>
      <Link href={href} className="text-sm font-bold text-[var(--color-blue)]">
        {action}
      </Link>
    </div>
  );
}

function ActionCard({
  index,
  title,
  body,
  href,
  tone,
}: {
  index: number;
  title: string;
  body: string;
  href: string;
  tone: string;
}) {
  const toneClass =
    tone === "green"
      ? "bg-[var(--color-green-soft)] text-[var(--color-green)]"
      : tone === "amber"
        ? "bg-[#fff7e6] text-[#9a6500]"
        : "bg-[var(--color-blue-soft)] text-[var(--color-blue)]";

  return (
    <Link href={href} className="rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4 transition hover:border-[var(--color-blue)] hover:bg-white hover:shadow-[var(--shadow-card)]">
      <span className={`inline-flex h-8 w-8 items-center justify-center rounded-lg text-sm font-extrabold ${toneClass}`}>
        {index}
      </span>
      <p className="mt-4 text-base font-extrabold text-[var(--color-ink-strong)]">{title}</p>
      <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{body}</p>
    </Link>
  );
}

function DataRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-lg bg-[var(--color-surface)] px-4 py-3">
      <span className="text-sm font-semibold text-[var(--color-muted)]">{label}</span>
      <span className="text-right text-sm font-extrabold text-[var(--color-ink-strong)]">{value}</span>
    </div>
  );
}

function ChecklistPanel({
  items,
  completed,
}: {
  items: ChecklistItem[];
  completed: number;
}) {
  return (
    <section className="rounded-lg border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-card)] sm:p-6">
      <SectionHeader
        title="Centre checklist"
        body={`${completed}/${items.length} essentials ready for reporting day.`}
        href="/dashboard/centers"
        action="Centers"
      />
      <div className="mt-5 space-y-2">
        {items.map((item) => (
          <div key={item.label} className="flex items-center gap-3 rounded-lg bg-[var(--color-surface)] px-4 py-3">
            <span
              className={`flex h-5 w-5 items-center justify-center rounded text-[10px] font-black ${
                item.done
                  ? "bg-[var(--color-green)] text-white"
                  : "border border-[var(--color-border-strong)] bg-white text-transparent"
              }`}
            >
              ok
            </span>
            <span className="text-sm font-semibold text-[var(--color-ink)]">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
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
  items: ActivityItem[];
}) {
  return (
    <div className="rounded-lg bg-[var(--color-surface)] p-4">
      <div className="flex items-center justify-between gap-3">
        <h3 className="text-base font-extrabold text-[var(--color-ink-strong)]">{title}</h3>
        <Link href={href} className="text-sm font-bold text-[var(--color-blue)]">
          Open
        </Link>
      </div>
      <div className="mt-4 space-y-2">
        {items.length > 0 ? (
          items.map((item) => (
            <div key={`${item.title}-${item.meta}`} className="rounded-lg bg-white px-3 py-3">
              <p className="text-sm font-bold text-[var(--color-ink-strong)]">{item.title}</p>
              <p className="mt-1 text-xs text-[var(--color-muted)]">{item.meta}</p>
            </div>
          ))
        ) : (
          <p className="rounded-lg bg-white px-3 py-3 text-sm text-[var(--color-muted)]">
            {empty}
          </p>
        )}
      </div>
    </div>
  );
}

function Icon({ name, className = "" }: { name: string; className?: string }) {
  const common = "h-6 w-6";

  return (
    <svg
      aria-hidden="true"
      className={`${common} ${className}`}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      {name === "target" ? (
        <>
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
        </>
      ) : name === "brain" ? (
        <path d="M8 7a3 3 0 0 1 6-1 3 3 0 0 1 4 4 3 3 0 0 1-1 6 4 4 0 0 1-7 2 4 4 0 0 1-7-3 3 3 0 0 1 2-5 3 3 0 0 1 3-3Z" />
      ) : name === "image" ? (
        <>
          <rect x="4" y="5" width="16" height="14" rx="2" />
          <path d="m7 16 4-4 3 3 2-2 3 3" />
          <circle cx="9" cy="9" r="1" />
        </>
      ) : name === "trend" ? (
        <path d="m4 16 5-5 4 4 7-8M15 7h5v5" />
      ) : name === "check" ? (
        <>
          <rect x="4" y="4" width="16" height="16" rx="3" />
          <path d="m8 12 3 3 5-6" />
        </>
      ) : name === "map" ? (
        <>
          <path d="m9 18-5 2V6l5-2 6 2 5-2v14l-5 2-6-2Z" />
          <path d="M9 4v14M15 6v14" />
        </>
      ) : name === "journal" ? (
        <>
          <path d="M6 4h10a2 2 0 0 1 2 2v14H8a2 2 0 0 1-2-2V4Z" />
          <path d="M9 8h6M9 12h5" />
        </>
      ) : name === "spark" ? (
        <path d="M12 3 9.8 8.8 4 11l5.8 2.2L12 19l2.2-5.8L20 11l-5.8-2.2L12 3Z" />
      ) : (
        <circle cx="12" cy="12" r="8" />
      )}
    </svg>
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
