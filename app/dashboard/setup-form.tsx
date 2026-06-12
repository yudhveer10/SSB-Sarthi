"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { createClient } from "../_lib/supabase/client";

const entries = ["NDA", "CDS", "AFCAT", "TES", "TGC", "INET", "Other"];

export default function SetupForm({
  userId,
  defaultName,
}: {
  userId: string;
  defaultName: string;
}) {
  const router = useRouter();
  const [fullName, setFullName] = useState(defaultName);
  const [targetEntry, setTargetEntry] = useState("CDS");
  const [targetBoard, setTargetBoard] = useState("");
  const [reportingDate, setReportingDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function saveSetup(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    const supabase = createClient();
    const checklistItems = [
      { label: "Call-up letter", done: false },
      { label: "Photo ID and documents", done: false },
      { label: "Travel and reporting buffer", done: false },
      { label: "Final OIR revision", done: false },
      { label: "Two PPDT stories", done: false },
      { label: "Five OLQ examples", done: false },
    ];

    const [profileResult, planResult, checklistResult] = await Promise.all([
      supabase.from("profiles").upsert({
        id: userId,
        full_name: fullName,
        onboarding_completed: true,
      }),
      supabase.from("prep_plans").insert({
        user_id: userId,
        title: `${targetEntry} SSB readiness plan`,
        target_entry: targetEntry,
        target_board: targetBoard || null,
        reporting_date: reportingDate || null,
        status: "active",
      }),
      supabase.from("centre_checklists").insert({
        user_id: userId,
        centre_name: targetBoard || "My SSB centre",
        items: checklistItems,
      }),
    ]);

    const error = profileResult.error ?? planResult.error ?? checklistResult.error;
    setLoading(false);

    if (error) {
      setMessage(error.message);
      return;
    }

    router.refresh();
  }

  return (
    <section className="mb-8 overflow-hidden rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] shadow-[var(--shadow-card)]">
      <div className="grid gap-0 lg:grid-cols-[0.88fr_1.12fr]">
        <div className="bg-[#0d1b2f] p-6 text-white sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-white/55">
            Candidate setup
          </p>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight">
            Build your first SSB workspace.
          </h2>
          <p className="mt-4 text-sm leading-7 text-white/68">
            Add your entry, board, and reporting target once. SSB Sarthi will
            turn it into your plan, checklist, and dashboard overview.
          </p>

          <div className="mt-6 grid gap-3">
            {["Private to your account", "Editable anytime", "Ready for OIR, PPDT, OLQ tracking"].map(
              (item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-semibold text-white/86">
                  <span className="h-2 w-2 rounded-full bg-[var(--color-green)]" />
                  {item}
                </div>
              ),
            )}
          </div>
        </div>

        <form onSubmit={saveSetup} className="grid gap-4 bg-white p-6 sm:p-8">
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Full name">
              <input
                required
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
                className="field-input"
                placeholder="Your name"
              />
            </Field>

            <Field label="Target entry">
              <select
                value={targetEntry}
                onChange={(event) => setTargetEntry(event.target.value)}
                className="field-input"
              >
                {entries.map((entry) => (
                  <option key={entry} value={entry}>
                    {entry}
                  </option>
                ))}
              </select>
            </Field>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <Field label="SSB board / centre">
              <input
                value={targetBoard}
                onChange={(event) => setTargetBoard(event.target.value)}
                className="field-input"
                placeholder="Example: 21 SSB Bhopal"
              />
            </Field>

            <Field label="Reporting date">
              <input
                type="date"
                value={reportingDate}
                onChange={(event) => setReportingDate(event.target.value)}
                className="field-input"
              />
            </Field>
          </div>

          <button type="submit" disabled={loading} className="btn-primary mt-2 justify-center">
            {loading ? "Creating workspace..." : "Create my workspace"}
          </button>

          {message ? (
            <p className="rounded-lg bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-muted)]">
              {message}
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-bold text-[var(--color-ink-strong)]">
        {label}
      </span>
      {children}
    </label>
  );
}
