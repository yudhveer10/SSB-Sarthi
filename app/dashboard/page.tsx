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
        .limit(3),
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
  const name = profile?.full_name?.split(" ")[0] ?? profile?.email?.split("@")[0] ?? "Candidate";
  const latestScore = oirAttempts[0]
    ? `${oirAttempts[0].score}/${oirAttempts[0].total_questions}`
    : "Not started";
  const completedChecklist = checklist.filter((item) => item.done).length;

  return (
    <div>
      <section className="mx-auto w-full max-w-7xl px-5 py-8 sm:px-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--color-green)]">
              Overview
            </p>
            <h1 className="mt-3 font-display text-3xl font-extrabold leading-tight text-[var(--color-ink-strong)] sm:text-4xl">
              Welcome, {name}.
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--color-muted)]">
              Your candidate dashboard for practice, review, checklist progress,
              and future SSB preparation tools.
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

        <div className="mt-8 grid gap-3 md:grid-cols-4">
          {[
            ["Workspace", plan?.title ?? "Starter workspace"],
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
          <section className="rounded-lg border border-[var(--color-border)] bg-[#0d1b2f] p-5 text-white shadow-[var(--shadow-card)] lg:col-span-2">
            <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr] lg:items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/55">
                  Readiness command
                </p>
                <h2 className="mt-3 text-2xl font-extrabold">
                  Your next best actions
                </h2>
              </div>
              <div className="grid gap-3 md:grid-cols-3">
                {[
                  ["Plan", "Update profile when ready"],
                  ["Practice", "Attempt one of 2 free OIR sets"],
                  ["Reflect", "Write one OLQ example"],
                ].map(([title, body]) => (
                  <div key={title} className="rounded-lg bg-white/8 p-4">
                    <p className="text-sm font-bold text-white">{title}</p>
                    <p className="mt-2 text-xs leading-5 text-white/62">{body}</p>
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
              <Link href="/process" className="text-sm font-bold text-[var(--color-blue)]">
                Process
              </Link>
            </div>

            <div className="mt-5 grid gap-3">
              {[
                ["Entry", plan?.target_entry ?? "NDA / CDS / AFCAT"],
                ["Status", plan?.status ?? "Ready to start"],
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
              <Link href="/centers" className="text-sm font-bold text-[var(--color-blue)]">
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
                    className={`flex h-5 w-5 items-center justify-center rounded text-xs font-black ${
                      item.done
                        ? "bg-[var(--color-green)] text-white"
                        : "border border-[var(--color-border-strong)] bg-white text-transparent"
                    }`}
                  >
                    ✓
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
          <ActivityPanel
            title="OIR attempts"
            href="/screening/oir"
            empty="No OIR attempts yet."
            items={oirAttempts.map((attempt) => ({
              title: attempt.paper,
              meta: `${attempt.score}/${attempt.total_questions} • ${formatDate(attempt.completed_at)}`,
            }))}
          />
          <ActivityPanel
            title="PPDT stories"
            href="/screening"
            empty="No PPDT stories saved yet."
            items={ppdtAttempts.map((attempt) => ({
              title: attempt.title,
              meta: `${attempt.self_score ?? "Unscored"}/10 • ${formatDate(attempt.completed_at)}`,
            }))}
          />
          <ActivityPanel
            title="OLQ journal"
            href="/journals"
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
