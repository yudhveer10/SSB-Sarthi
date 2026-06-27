"use client";

import { useMemo, useState, useTransition } from "react";
import { createClient } from "../_lib/supabase/client";

const steps = [
  {
    eyebrow: "Dashboard overview",
    title: "Your SSB prep command center",
    body: "Track readiness, upcoming SSB details, recent practice, and the next best actions from one clean overview.",
    accent: "#2f80c9",
    visual: "overview",
  },
  {
    eyebrow: "Practice",
    title: "Attempt OIR and PPDT with saved progress",
    body: "Use the free OIR sets, review your score, and keep practice history attached to your account.",
    accent: "#2f7d57",
    visual: "practice",
  },
  {
    eyebrow: "Profile and checklist",
    title: "Keep reporting details ready",
    body: "Add entry, board, reporting date, and checklist items so your preparation stays practical before reporting day.",
    accent: "#f26b00",
    visual: "profile",
  },
  {
    eyebrow: "Journals",
    title: "Build OLQ evidence quietly",
    body: "Capture reflections and examples you can later use for psychology, interview, and self-awareness work.",
    accent: "#6946e8",
    visual: "journal",
  },
] as const;

export function OnboardingTour({ shouldShow }: { shouldShow: boolean }) {
  const [isOpen, setIsOpen] = useState(shouldShow);
  const [stepIndex, setStepIndex] = useState(0);
  const [isPending, startTransition] = useTransition();
  const step = steps[stepIndex];
  const progress = ((stepIndex + 1) / steps.length) * 100;
  const isLastStep = stepIndex === steps.length - 1;
  const visualItems = useMemo(() => getVisualItems(step.visual), [step.visual]);

  if (!isOpen) {
    return null;
  }

  function closeAndRemember() {
    setIsOpen(false);

    startTransition(async () => {
      const supabase = createClient();
      const { error } = await supabase
        .from("profiles")
        .update({ onboarding_completed: true })
        .eq("id", (await supabase.auth.getUser()).data.user?.id ?? "");

      if (error) {
        console.error("Unable to save onboarding state", error);
      }
    });
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="dashboard-tour-title"
      className="fixed inset-0 z-[90] grid place-items-center bg-[#0d1b2f]/55 px-4 py-6 backdrop-blur-sm animate-fade-in"
    >
      <div className="relative w-full max-w-4xl overflow-hidden rounded-lg border border-white/70 bg-white shadow-[0_28px_80px_rgba(13,27,47,0.28)]">
        <div className="grid min-h-[520px] lg:grid-cols-[0.92fr_1.08fr]">
          <div className="relative overflow-hidden bg-[#0d1b2f] p-6 text-white sm:p-8">
            <div
              className="absolute -right-20 -top-20 h-56 w-56 rounded-full opacity-25"
              style={{ background: step.accent }}
            />
            <div
              className="absolute bottom-10 left-8 h-20 w-20 rounded-full border border-white/25"
              style={{ animation: "pulseRing 2.2s ease-out infinite" }}
            />
            <div className="relative">
              <p className="text-xs font-extrabold uppercase tracking-[0.22em] text-white/65">
                SSB Sarthi quick tour
              </p>
              <h2 className="mt-4 max-w-xs text-3xl font-extrabold leading-tight">
                Know where everything lives before you start.
              </h2>
              <div className="mt-8 space-y-3">
                {steps.map((item, index) => {
                  const isActive = index === stepIndex;

                  return (
                    <button
                      key={item.title}
                      type="button"
                      onClick={() => setStepIndex(index)}
                      className={`flex w-full items-center gap-3 rounded-lg border px-3 py-3 text-left transition ${
                        isActive
                          ? "border-white/55 bg-white/12 text-white"
                          : "border-white/10 bg-white/5 text-white/62 hover:bg-white/10"
                      }`}
                    >
                      <span
                        className="grid h-7 w-7 shrink-0 place-items-center rounded-md text-xs font-black"
                        style={{
                          background: isActive ? item.accent : "rgba(255,255,255,0.12)",
                          color: "white",
                        }}
                      >
                        {index + 1}
                      </span>
                      <span className="min-w-0">
                        <span className="block text-sm font-extrabold">{item.eyebrow}</span>
                        <span className="block truncate text-xs text-white/62">{item.title}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="p-6 sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-[var(--color-surface-alt)]">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: `${progress}%`, background: step.accent }}
                />
              </div>
              <span className="text-xs font-extrabold text-[var(--color-muted)]">
                {stepIndex + 1}/{steps.length}
              </span>
            </div>

            <div key={step.title} className="animate-fade-up">
              <p className="mt-8 text-xs font-extrabold uppercase tracking-[0.22em]" style={{ color: step.accent }}>
                {step.eyebrow}
              </p>
              <h3 id="dashboard-tour-title" className="mt-3 text-3xl font-extrabold leading-tight text-[var(--color-ink-strong)]">
                {step.title}
              </h3>
              <p className="mt-4 text-base leading-8 text-[var(--color-muted)]">{step.body}</p>

              <div className="mt-7 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-extrabold text-[var(--color-ink-strong)]">Feature glance</p>
                  <span className="h-2.5 w-2.5 rounded-full" style={{ background: step.accent }} />
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {visualItems.map((item, index) => (
                    <div
                      key={item.label}
                      className={`rounded-lg border border-[var(--color-border)] bg-white p-3 shadow-[0_1px_2px_rgba(13,27,47,0.04)] animate-fade-up stagger-${index + 1}`}
                    >
                      <span className="grid h-9 w-9 place-items-center rounded-lg text-white" style={{ background: item.color }}>
                        {item.icon}
                      </span>
                      <p className="mt-3 text-sm font-extrabold text-[var(--color-ink-strong)]">{item.label}</p>
                      <p className="mt-1 text-xs leading-5 text-[var(--color-muted)]">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={closeAndRemember}
                disabled={isPending}
                className="rounded-lg px-4 py-3 text-sm font-bold text-[var(--color-muted)] transition hover:bg-[var(--color-surface)] disabled:cursor-wait"
              >
                Skip tour
              </button>
              <div className="flex flex-wrap gap-3">
                {stepIndex > 0 ? (
                  <button
                    type="button"
                    onClick={() => setStepIndex((current) => current - 1)}
                    className="rounded-lg border border-[var(--color-border-strong)] bg-white px-4 py-3 text-sm font-bold text-[var(--color-ink-strong)] transition hover:bg-[var(--color-surface)]"
                  >
                    Back
                  </button>
                ) : null}
                {isLastStep ? (
                  <button
                    type="button"
                    onClick={closeAndRemember}
                    disabled={isPending}
                    className="rounded-lg bg-[var(--color-blue)] px-5 py-3 text-sm font-bold text-white shadow-[0_10px_24px_rgba(47,128,201,0.22)] transition hover:bg-[var(--color-blue-strong)] disabled:cursor-wait disabled:opacity-70"
                  >
                    {isPending ? "Saving..." : "Start using dashboard"}
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => setStepIndex((current) => current + 1)}
                    className="rounded-lg bg-[var(--color-blue)] px-5 py-3 text-sm font-bold text-white shadow-[0_10px_24px_rgba(47,128,201,0.22)] transition hover:bg-[var(--color-blue-strong)]"
                  >
                    Next
                  </button>
                )}
              </div>
            </div>

            <div className="mt-5 flex justify-center gap-2">
              {steps.map((item, index) => (
                <button
                  key={item.title}
                  type="button"
                  aria-label={`Go to tour step ${index + 1}`}
                  onClick={() => setStepIndex(index)}
                  className="h-2.5 rounded-full transition-all"
                  style={{
                    width: index === stepIndex ? 28 : 10,
                    background: index === stepIndex ? item.accent : "var(--color-border-strong)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function getVisualItems(visual: (typeof steps)[number]["visual"]) {
  if (visual === "practice") {
    return [
      { label: "OIR sets", detail: "50-question timed tests", color: "#2f80c9", icon: "01" },
      { label: "Scores", detail: "Paper-wise result view", color: "#2f7d57", icon: "IB" },
      { label: "History", detail: "Saved into tracker", color: "#6946e8", icon: "↗" },
    ];
  }

  if (visual === "profile") {
    return [
      { label: "Entry", detail: "CDS, NDA, AFCAT and more", color: "#f26b00", icon: "E" },
      { label: "Board", detail: "Centre and reporting info", color: "#2f80c9", icon: "B" },
      { label: "Checklist", detail: "Documents and travel prep", color: "#2f7d57", icon: "✓" },
    ];
  }

  if (visual === "journal") {
    return [
      { label: "OLQ notes", detail: "Real examples and reflections", color: "#6946e8", icon: "J" },
      { label: "Patterns", detail: "Spot strengths over time", color: "#2f7d57", icon: "P" },
      { label: "Review", detail: "Prepare cleaner answers", color: "#2f80c9", icon: "R" },
    ];
  }

  return [
    { label: "Readiness", detail: "One percentage snapshot", color: "#2f7d57", icon: "%" },
    { label: "Actions", detail: "Next tasks in sequence", color: "#2f80c9", icon: "→" },
    { label: "Activity", detail: "Recent attempts and notes", color: "#6946e8", icon: "A" },
  ];
}
