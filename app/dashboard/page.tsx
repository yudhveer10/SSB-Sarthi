import { redirect } from "next/navigation";
import type { Json } from "../_lib/database.types";
import { createClient } from "../_lib/supabase/server";
import { PendingLink } from "./pending-link";

export const metadata = {
  title: "Dashboard",
};

export const dynamic = "force-dynamic";

type ChecklistItem = {
  label: string;
  done: boolean;
};

type ActivityRow = {
  title: string;
  tag: string;
  detail: string;
  status: string;
  age: string;
  tone: "blue" | "green" | "purple" | "orange";
};

const freeOirLimit = 5;
const freePpdtLimit = 10;

const fallbackChecklist: ChecklistItem[] = [
  { label: "Call-up letter", done: false },
  { label: "Photo ID and documents", done: false },
  { label: "Travel and reporting buffer", done: false },
  { label: "Packing checklist", done: false },
];

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
  const completedChecklist = checklist.filter((item) => item.done).length;
  const oirUsed = Math.min(oirAttempts.length, freeOirLimit);
  const ppdtUsed = Math.min(ppdtAttempts.length, freePpdtLimit);
  const oirLeft = Math.max(freeOirLimit - oirUsed, 0);
  const ppdtLeft = Math.max(freePpdtLimit - ppdtUsed, 0);
  const entryLabel = plan?.target_entry ?? "Not selected";
  const centreLabel = plan?.target_board ?? "Not set yet";
  const reportingLabel = plan?.reporting_date ? formatDate(plan.reporting_date) : "Not set";

  const readinessItems = [
    Boolean(profile?.onboarding_completed || profile?.full_name),
    Boolean(plan?.target_entry),
    Boolean(plan?.target_board || plan?.reporting_date),
    oirAttempts.length > 0,
    ppdtAttempts.length > 0,
    journals.length > 0,
    completedChecklist > 0,
  ];
  const rawReadiness = Math.round(
    (readinessItems.filter(Boolean).length / readinessItems.length) * 100,
  );
  const readinessScore = rawReadiness > 0 ? rawReadiness : 18;

  const activityRows = buildActivityRows(oirAttempts, ppdtAttempts, journals);

  return (
    <section className="mx-auto w-full max-w-[1280px] px-5 py-6 sm:px-7 lg:px-8">
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1fr)_256px_256px]">
        <div className="xl:col-span-1">
          <div className="min-h-[174px]">
            <h1 className="max-w-3xl font-display text-3xl font-extrabold leading-tight text-[var(--color-ink-strong)] sm:text-4xl">
              Welcome back, {candidateName}
            </h1>
            <p className="mt-3 max-w-2xl text-sm font-medium leading-6 text-[var(--color-muted)] sm:text-base">
              Track your readiness, practice smarter, and stay one step ahead of your SSB.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <PendingLink href="/dashboard/practice" className="btn-primary">
                <Icon name="play" className="h-5 w-5" />
                Practice now
              </PendingLink>
              <PendingLink href="/dashboard/profile" className="btn-secondary">
                <Icon name="user" className="h-5 w-5" />
                Update profile
              </PendingLink>
            </div>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <AllowanceCard
              color="blue"
              icon="document"
              label="Free OIR attempts"
              value={freeOirLimit}
              suffix="total"
              progress={(oirUsed / freeOirLimit) * 100}
              footer={`${oirLeft} attempts left`}
              href="/dashboard/practice"
            />
            <AllowanceCard
              color="green"
              icon="image"
              label="PPDT picture stories"
              value={freePpdtLimit}
              suffix="total"
              progress={(ppdtUsed / freePpdtLimit) * 100}
              footer={`${ppdtLeft} stories left`}
              href="/dashboard/practice"
            />
            <AllowanceCard
              color="purple"
              icon="book"
              label="OLQ journal entries"
              value={journals.length}
              suffix="this week"
              progress={journals.length > 0 ? 40 : 0}
              footer={journals.length > 0 ? "Keep reflecting" : "Start reflecting"}
              href="/dashboard/journals"
            />
          </div>
        </div>

        <UpcomingSsbCard
          centreLabel={centreLabel}
          entryLabel={entryLabel}
          reportingLabel={reportingLabel}
          checklist={`${completedChecklist}/${checklist.length} ready`}
        />

        <CandidateTrackingCard readinessScore={readinessScore} />
      </div>

      <div className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,1.15fr)_minmax(360px,0.85fr)]">
        <NextActions />
        <ChecklistCard items={checklist} completed={completedChecklist} />
      </div>

      <div className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,1.15fr)_minmax(360px,0.85fr)]">
        <RecentActivity rows={activityRows} />
        <UpcomingModules />
      </div>
    </section>
  );
}

function UpcomingSsbCard({
  centreLabel,
  entryLabel,
  reportingLabel,
  checklist,
}: {
  centreLabel: string;
  entryLabel: string;
  reportingLabel: string;
  checklist: string;
}) {
  return (
    <section className="rounded-lg border border-[var(--color-border)] bg-white p-4 shadow-[var(--shadow-card)] sm:p-5">
      <PanelTitle icon="calendar" title="Upcoming SSB" />
      <h2 className="mt-7 text-xl font-extrabold text-[var(--color-ink-strong)]">{centreLabel}</h2>
      <p className="mt-1 text-sm font-medium text-[var(--color-muted)]">Add your SSB entry and centre</p>
      <PendingLink
        href="/dashboard/profile"
        className="mt-4 flex min-h-9 items-center justify-center rounded-lg border border-[#1264ff] px-3 text-sm font-extrabold text-[#1264ff] transition hover:bg-[#eef4ff]"
      >
        Set SSB details
      </PendingLink>
      <div className="mt-4 divide-y divide-[var(--color-border)] border-t border-[var(--color-border)]">
        <DetailLine label="Entry" value={entryLabel} />
        <DetailLine label="Checklist" value={checklist} valueClass="text-[#f26b00]" />
        <DetailLine label="Reporting date" value={reportingLabel} />
      </div>
      <PendingLink href="/dashboard/profile" className="mt-4 flex items-center justify-between text-sm font-bold text-[#005eea]">
        Manage SSB details
        <Icon name="chevron" className="h-4 w-4" />
      </PendingLink>
    </section>
  );
}

function CandidateTrackingCard({ readinessScore }: { readinessScore: number }) {
  return (
    <section className="rounded-lg border border-[var(--color-border)] bg-white p-4 shadow-[var(--shadow-card)] sm:p-5">
      <PanelTitle icon="trend" title="Candidate tracking" />
      <p className="mt-3 text-xs font-medium text-[var(--color-muted)]">Overall readiness</p>
      <div className="mt-4 flex justify-center">
        <div
          className="relative grid h-32 w-32 place-items-center rounded-full"
          style={{
            background: `conic-gradient(#16a052 ${readinessScore * 3.6}deg, #e5e8ee 0deg)`,
          }}
        >
          <div className="grid h-[102px] w-[102px] place-items-center rounded-full bg-white text-center">
            <div>
              <p className="text-3xl font-extrabold leading-none text-[var(--color-ink-strong)]">
                {readinessScore}%
              </p>
              <p className="mt-1 text-xs font-medium text-[var(--color-muted)]">Getting started</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 divide-y divide-[var(--color-border)] border-t border-[var(--color-border)] text-xs">
        {["OIR performance", "PPDT readiness", "OLQ consistency", "Self awareness"].map((item) => (
          <div key={item} className="flex items-center justify-between py-2">
            <span className="font-medium text-[var(--color-muted)]">{item}</span>
            <span className="font-bold text-[var(--color-blue)]">-</span>
          </div>
        ))}
      </div>
      <PendingLink href="/dashboard/profile" className="mt-3 flex items-center justify-between text-sm font-bold text-[#005eea]">
        View full tracking
        <Icon name="chevron" className="h-4 w-4" />
      </PendingLink>
    </section>
  );
}

function NextActions() {
  const actions = [
    {
      title: "Set your SSB details",
      body: "Add entry, centre and date",
      icon: "target",
      href: "/dashboard/profile",
    },
    {
      title: "Attempt OIR practice",
      body: "Use 1 of your free OIR attempts",
      icon: "document",
      href: "/dashboard/practice",
    },
    {
      title: "Write PPDT story",
      body: "Pick a picture and practice storytelling",
      icon: "image",
      href: "/dashboard/practice",
    },
    {
      title: "Reflect in OLQ journal",
      body: "Build self awareness with daily reflection",
      icon: "book",
      href: "/dashboard/journals",
    },
  ];

  return (
    <section className="rounded-lg border border-[var(--color-border)] bg-white p-4 shadow-[var(--shadow-card)] sm:p-5">
      <PanelTitle icon="bolt" title="Next best actions" />
      <div className="mt-6 grid gap-4 md:grid-cols-[1fr_auto_1fr] lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr]">
        {actions.map((action, index) => (
          <ActionStep key={action.title} index={index + 1} action={action} isLast={index === actions.length - 1} />
        ))}
      </div>
    </section>
  );
}

function ActionStep({
  index,
  action,
  isLast,
}: {
  index: number;
  action: { title: string; body: string; icon: string; href: string };
  isLast: boolean;
}) {
  return (
    <>
      <PendingLink
        href={action.href}
        className="relative block min-h-[116px] rounded-lg border border-[var(--color-border)] bg-white px-3 py-4 transition hover:border-[#1264ff] hover:shadow-[var(--shadow-card)]"
      >
        <span className="absolute -top-3 left-3 grid h-6 w-6 place-items-center rounded-full bg-[#1264ff] text-xs font-extrabold text-white">
          {index}
        </span>
        <Icon name={action.icon} className="h-6 w-6 text-[#6946e8]" />
        <p className="mt-3 text-sm font-extrabold leading-5 text-[var(--color-ink-strong)]">{action.title}</p>
        <p className="mt-2 text-xs font-medium leading-5 text-[var(--color-muted)]">{action.body}</p>
      </PendingLink>
      {!isLast ? (
        <div className="hidden items-center justify-center text-[var(--color-muted-soft)] md:flex">
          <Icon name="arrowRight" className="h-5 w-5" />
        </div>
      ) : null}
    </>
  );
}

function ChecklistCard({ items, completed }: { items: ChecklistItem[]; completed: number }) {
  const actions = ["Upload", "Upload", "Plan", "Review"];

  return (
    <section className="rounded-lg border border-[var(--color-border)] bg-white p-4 shadow-[var(--shadow-card)] sm:p-5">
      <div className="flex items-center justify-between gap-3">
        <PanelTitle icon="clipboard" title="Centre checklist" />
        <span className="text-sm font-extrabold text-[#f26b00]">
          {completed}/{items.length} ready
        </span>
      </div>
      <div className="mt-4 divide-y divide-[var(--color-border)] rounded-lg border border-[var(--color-border)]">
        {items.map((item, index) => (
          <div key={item.label} className="flex min-h-10 items-center justify-between gap-3 px-3 py-2">
            <div className="flex items-center gap-3">
              <span
                className={`grid h-4 w-4 place-items-center rounded border text-[8px] font-black ${
                  item.done
                    ? "border-[#16a052] bg-[#16a052] text-white"
                    : "border-[var(--color-border-strong)] bg-white text-transparent"
                }`}
              >
                ok
              </span>
              <span className="text-sm font-semibold text-[var(--color-ink-strong)]">{item.label}</span>
            </div>
            <PendingLink href="/dashboard/centers" className="text-xs font-bold text-[#005eea]">
              {actions[index] ?? "Review"}
            </PendingLink>
          </div>
        ))}
      </div>
      <PendingLink href="/dashboard/centers" className="mt-3 flex items-center justify-between text-sm font-bold text-[#005eea]">
        View full checklist
        <Icon name="chevron" className="h-4 w-4" />
      </PendingLink>
    </section>
  );
}

function RecentActivity({ rows }: { rows: ActivityRow[] }) {
  return (
    <section className="rounded-lg border border-[var(--color-border)] bg-white p-4 shadow-[var(--shadow-card)] sm:p-5">
      <div className="flex items-center justify-between gap-3">
        <PanelTitle icon="clock" title="Recent activity" />
        <PendingLink href="/dashboard/practice" className="text-xs font-bold text-[#005eea]">
          View all activity
        </PendingLink>
      </div>
      <div className="mt-4 flex gap-6 border-b border-[var(--color-border)] text-xs font-bold">
        {[
          ["All", "/dashboard/practice"],
          ["OIR", "/dashboard/practice"],
          ["PPDT", "/dashboard/practice"],
          ["OLQ", "/dashboard/journals"],
        ].map(([tab, href], index) => (
          <PendingLink
            key={tab}
            href={href}
            className={`pb-2 ${index === 0 ? "border-b-2 border-[#1264ff] text-[#1264ff]" : "text-[var(--color-muted)]"}`}
          >
            {tab}
          </PendingLink>
        ))}
      </div>
      <div className="divide-y divide-[var(--color-border)]">
        {rows.map((row) => (
          <div key={`${row.title}-${row.detail}`} className="grid gap-2 py-3 text-sm sm:grid-cols-[1.7fr_70px_1fr_1fr_80px] sm:items-center">
            <p className="font-semibold text-[var(--color-ink-strong)]">{row.title}</p>
            <span className={`w-fit rounded-md px-2 py-1 text-[11px] font-extrabold ${tagClass(row.tone)}`}>
              {row.tag}
            </span>
            <p className="font-medium text-[var(--color-ink)]">{row.detail}</p>
            <p className={`font-semibold ${row.status === "Pending review" ? "text-[#f26b00]" : "text-[#16a052]"}`}>
              <span className="mr-2 inline-block h-2 w-2 rounded-full bg-current" />
              {row.status}
            </p>
            <p className="text-right text-xs font-medium text-[var(--color-muted)] sm:text-left">{row.age}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function UpcomingModules() {
  const modules = [
    {
      title: "OIR Full Sets",
      body: "Timed practice sets with IB-style review",
      icon: "document",
      color: "blue",
      action: "Start",
      href: "/dashboard/practice",
    },
    {
      title: "PPDT Picture Stories",
      body: "Practice storytelling with 10 free prompts",
      icon: "image",
      color: "green",
      action: "Start",
      href: "/dashboard/practice",
    },
    {
      title: "OLQ Journal",
      body: "Build self awareness with guided prompts",
      icon: "book",
      color: "purple",
      action: "Start",
      href: "/dashboard/journals",
    },
    {
      title: "Mock Interviews",
      body: "Prepare for TAT, GTO and interview",
      icon: "users",
      color: "orange",
      action: "Coming soon",
      href: "/dashboard/resources",
    },
  ];

  return (
    <section className="rounded-lg border border-[var(--color-border)] bg-white p-4 shadow-[var(--shadow-card)] sm:p-5">
      <div className="flex items-center justify-between gap-3">
        <PanelTitle icon="calendar" title="Upcoming modules" />
        <PendingLink href="/dashboard/resources" className="text-xs font-bold text-[#005eea]">
          View all
        </PendingLink>
      </div>
      <div className="mt-4 space-y-2">
        {modules.map((module) => (
          <div key={module.title} className="flex items-center gap-3 rounded-lg border border-[var(--color-border)] p-2">
            <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg text-white ${moduleIconClass(module.color)}`}>
              <Icon name={module.icon} className="h-5 w-5" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-extrabold text-[var(--color-ink-strong)]">{module.title}</p>
              <p className="truncate text-xs font-medium text-[var(--color-muted)]">{module.body}</p>
            </div>
            {module.action === "Coming soon" ? (
              <span className="rounded-md border border-[var(--color-border)] px-3 py-1.5 text-xs font-extrabold text-[var(--color-muted)]">
                Coming soon
              </span>
            ) : (
              <PendingLink
                href={module.href}
                className="rounded-md border border-[#1264ff] px-3 py-1.5 text-xs font-extrabold text-[#1264ff]"
              >
                {module.action}
              </PendingLink>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

function AllowanceCard({
  label,
  value,
  suffix,
  progress,
  footer,
  icon,
  color,
  href,
}: {
  label: string;
  value: number;
  suffix: string;
  progress: number;
  footer: string;
  icon: string;
  color: "blue" | "green" | "purple";
  href: string;
}) {
  return (
    <PendingLink
      href={href}
      className="block rounded-lg border border-[var(--color-border)] bg-white p-4 shadow-[var(--shadow-card)] transition hover:border-[#1264ff] hover:shadow-[var(--shadow-raised)]"
    >
      <div className="flex items-center gap-4">
        <span className={`grid h-14 w-14 shrink-0 place-items-center rounded-full ${softIconClass(color)}`}>
          <Icon name={icon} className="h-7 w-7" />
        </span>
        <div className="min-w-0">
          <p className="truncate text-xs font-bold text-[var(--color-muted)]">{label}</p>
          <p className="mt-1 flex items-end gap-2">
            <span className="text-3xl font-extrabold leading-none text-[var(--color-ink-strong)]">{value}</span>
            <span className="pb-1 text-sm font-medium text-[var(--color-muted)]">{suffix}</span>
          </p>
        </div>
      </div>
      <div className="mt-7 h-1.5 overflow-hidden rounded-full bg-[#edf0f4]">
        <div className={`h-full rounded-full ${progressClass(color)}`} style={{ width: `${Math.max(progress, 0)}%` }} />
      </div>
      <p className={`mt-3 text-sm font-extrabold ${footerClass(color)}`}>{footer}</p>
    </PendingLink>
  );
}

function PanelTitle({ icon, title }: { icon: string; title: string }) {
  return (
    <div className="flex items-center gap-3">
      <Icon name={icon} className="h-5 w-5 text-[var(--color-ink-strong)]" />
      <p className="text-base font-extrabold text-[var(--color-ink-strong)]">{title}</p>
    </div>
  );
}

function DetailLine({
  label,
  value,
  valueClass = "text-[var(--color-ink-strong)]",
}: {
  label: string;
  value: string;
  valueClass?: string;
}) {
  return (
    <div className="flex items-center justify-between gap-4 py-3 text-xs">
      <span className="font-medium text-[var(--color-muted)]">{label}</span>
      <span className={`text-right font-extrabold ${valueClass}`}>{value}</span>
    </div>
  );
}

function Icon({ name, className = "" }: { name: string; className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      {name === "play" ? (
        <path d="M8 5v14l11-7-11-7Z" fill="currentColor" stroke="none" />
      ) : name === "user" ? (
        <>
          <path d="M20 21a8 8 0 0 0-16 0" />
          <circle cx="12" cy="7" r="4" />
        </>
      ) : name === "document" ? (
        <>
          <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7Z" />
          <path d="M14 2v5h5M9 13h6M9 17h4" />
        </>
      ) : name === "image" ? (
        <>
          <rect x="4" y="5" width="16" height="14" rx="2" />
          <path d="m7 16 4-4 3 3 2-2 3 3" />
          <circle cx="9" cy="9" r="1" />
        </>
      ) : name === "book" ? (
        <>
          <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5Z" />
          <path d="M4 5.5v16M8 7h8" />
        </>
      ) : name === "calendar" ? (
        <>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M16 3v4M8 3v4M3 11h18" />
        </>
      ) : name === "trend" ? (
        <path d="m4 16 5-5 4 4 7-8M15 7h5v5" />
      ) : name === "chevron" ? (
        <path d="m9 18 6-6-6-6" />
      ) : name === "bolt" ? (
        <path d="m13 2-9 13h7l-1 7 9-13h-7l1-7Z" />
      ) : name === "target" ? (
        <>
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
        </>
      ) : name === "arrowRight" ? (
        <path d="M5 12h14M13 6l6 6-6 6" />
      ) : name === "clipboard" ? (
        <>
          <rect x="5" y="4" width="14" height="17" rx="2" />
          <path d="M9 4a3 3 0 0 1 6 0M9 9h6" />
        </>
      ) : name === "clock" ? (
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </>
      ) : name === "users" ? (
        <>
          <path d="M16 21v-2a4 4 0 0 0-8 0v2M12 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
        </>
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

  return parsed.length > 0 ? parsed.slice(0, 4) : fallbackChecklist;
}

function buildActivityRows(
  oirAttempts: Array<{ paper: string; score: number; total_questions: number; completed_at: string }>,
  ppdtAttempts: Array<{ title: string; completed_at: string }>,
  journals: Array<{ title: string; created_at: string }>,
): ActivityRow[] {
  const rows: ActivityRow[] = [
    ...oirAttempts.slice(0, 2).map((attempt, index) => ({
      title: attempt.paper || `OIR Set ${index + 1} - Attempt 1`,
      tag: "OIR",
      detail: `Score: ${attempt.score}/${attempt.total_questions}`,
      status: "Reviewed",
      age: relativeDate(attempt.completed_at),
      tone: "blue" as const,
    })),
    ...ppdtAttempts.slice(0, 1).map((attempt) => ({
      title: attempt.title,
      tag: "PPDT",
      detail: "Practice story",
      status: "Completed",
      age: relativeDate(attempt.completed_at),
      tone: "green" as const,
    })),
    ...journals.slice(0, 1).map((journal) => ({
      title: journal.title,
      tag: "OLQ",
      detail: "Reflection",
      status: "Saved",
      age: relativeDate(journal.created_at),
      tone: "purple" as const,
    })),
  ];

  if (rows.length > 0) {
    return rows.slice(0, 4);
  }

  return [
    {
      title: "OIR Set 1 - Attempt 1",
      tag: "OIR",
      detail: "Ready to start",
      status: "Reviewed",
      age: "New",
      tone: "blue",
    },
    {
      title: "PPDT Picture 3 - The Bridge",
      tag: "PPDT",
      detail: "Practice story",
      status: "Completed",
      age: "Starter",
      tone: "green",
    },
    {
      title: "OLQ - Strengths & Weaknesses",
      tag: "OLQ",
      detail: "Reflection",
      status: "Saved",
      age: "Starter",
      tone: "purple",
    },
    {
      title: "OIR Set 2 - Attempt 1",
      tag: "OIR",
      detail: "Score pending",
      status: "Pending review",
      age: "Next",
      tone: "orange",
    },
  ];
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

function relativeDate(value: string) {
  const date = new Date(value);
  const diffMs = Date.now() - date.getTime();
  const day = 24 * 60 * 60 * 1000;
  const days = Math.max(Math.round(diffMs / day), 0);

  if (days === 0) {
    return "Today";
  }

  if (days === 1) {
    return "1 day ago";
  }

  if (days < 7) {
    return `${days} days ago`;
  }

  return "1 week ago";
}

function softIconClass(color: "blue" | "green" | "purple") {
  if (color === "green") {
    return "bg-[#e5f8e8] text-[#16a052]";
  }

  if (color === "purple") {
    return "bg-[#efe8ff] text-[#6946e8]";
  }

  return "bg-[#e7f4ff] text-[#1264ff]";
}

function progressClass(color: "blue" | "green" | "purple") {
  if (color === "green") {
    return "bg-[#16a052]";
  }

  if (color === "purple") {
    return "bg-[#6946e8]";
  }

  return "bg-[#1264ff]";
}

function footerClass(color: "blue" | "green" | "purple") {
  if (color === "green") {
    return "text-[#00964c]";
  }

  if (color === "purple") {
    return "text-[#6946e8]";
  }

  return "text-[#005eea]";
}

function tagClass(tone: ActivityRow["tone"]) {
  if (tone === "green") {
    return "bg-[#dff7e8] text-[#0b8b49]";
  }

  if (tone === "purple") {
    return "bg-[#efe8ff] text-[#6946e8]";
  }

  if (tone === "orange") {
    return "bg-[#fff1dd] text-[#c45d00]";
  }

  return "bg-[#e7f1ff] text-[#1264ff]";
}

function moduleIconClass(color: string) {
  if (color === "green") {
    return "bg-[#16a052]";
  }

  if (color === "purple") {
    return "bg-[#6946e8]";
  }

  if (color === "orange") {
    return "bg-[#ff8a00]";
  }

  return "bg-[#1264ff]";
}
