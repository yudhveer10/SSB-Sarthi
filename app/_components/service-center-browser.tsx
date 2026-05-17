"use client";

import { useMemo, useState } from "react";
import { centerData, serviceOptions, type ServiceBranch } from "../_lib/center-data";

export default function ServiceCenterBrowser() {
  const [activeService, setActiveService] = useState<ServiceBranch>("Army");

  const filteredCenters = useMemo(
    () => centerData.filter((center) => center.service === activeService),
    [activeService],
  );

  return (
    <div className="mt-10">
      <div className="rounded-[2rem] border border-white/75 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(239,248,255,0.92))] p-5 shadow-[var(--shadow-soft)] sm:p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-[var(--color-accent-strong)]">
              Step 1
            </p>
            <h2 className="mt-3 font-display text-2xl font-semibold tracking-[-0.05em] text-[var(--color-ink-strong)] sm:text-3xl">
              Choose the service branch first.
            </h2>
            <p className="mt-3 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
              This keeps discovery simple. Once a student selects Army, Air
              Force, or Navy, the platform can immediately show the most
              relevant centers and branch-specific context.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-3">
            {serviceOptions.map((service) => {
              const isActive = activeService === service;

              return (
                <button
                  key={service}
                  type="button"
                  onClick={() => setActiveService(service)}
                  className={`rounded-[1.4rem] px-5 py-4 text-left transition-all duration-200 ${
                    isActive
                      ? "bg-[linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))] text-white shadow-[0_18px_42px_rgba(8,145,178,0.28)]"
                      : "border border-white/80 bg-white/88 text-[var(--color-ink-strong)] shadow-sm hover:-translate-y-0.5"
                  }`}
                >
                  <p className="font-display text-lg font-semibold tracking-[-0.03em]">
                    {service}
                  </p>
                  <p
                    className={`mt-1 text-sm leading-6 ${
                      isActive ? "text-white/84" : "text-[var(--color-muted)]"
                    }`}
                  >
                    View branch-wise center access and quick notes.
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.26em] text-[var(--color-accent-strong)]">
            Step 2
          </p>
          <h3 className="mt-3 font-display text-3xl font-semibold tracking-[-0.05em] text-[var(--color-ink-strong)]">
            {activeService} centers to explore
          </h3>
          <p className="mt-2 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
            Start with the branch you are applying for, then compare locations,
            boards, and reporting support.
          </p>
        </div>

        <div className="hidden rounded-full border border-white/80 bg-white/88 px-4 py-2 text-sm font-semibold text-[var(--color-muted)] md:inline-flex">
          {filteredCenters.length} centers listed
        </div>
      </div>

      <div className="mt-6 grid gap-5 xl:grid-cols-2">
        {filteredCenters.map((center) => (
          <article
            key={center.slug}
            className="rounded-[1.8rem] border border-white/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(247,252,255,0.92))] p-6 shadow-[var(--shadow-card)] transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_28px_72px_rgba(15,23,42,0.11)]"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="max-w-xl">
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-accent-strong)]">
                  {center.type}
                </p>
                <h4 className="mt-3 font-display text-2xl font-semibold tracking-[-0.05em] text-[var(--color-ink-strong)]">
                  {center.name}
                </h4>
                <p className="mt-2 text-sm font-semibold text-[var(--color-muted)]">
                  {center.city}
                </p>
              </div>

              <div className="rounded-full border border-white/80 bg-white/85 px-4 py-2 text-xs font-bold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                {center.service}
              </div>
            </div>

            <p className="mt-5 text-sm leading-7 text-[var(--color-muted)] sm:text-base">
              {center.snapshot}
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-[1.2rem] border border-[var(--color-border)] bg-white/85 p-4">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                  Boards
                </p>
                <p className="mt-2 text-sm font-semibold leading-6 text-[var(--color-ink-strong)]">
                  {center.boards.join(", ")}
                </p>
              </div>
              <div className="rounded-[1.2rem] border border-[var(--color-border)] bg-white/85 p-4">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                  Nearby access
                </p>
                <p className="mt-2 text-sm font-semibold leading-6 text-[var(--color-ink-strong)]">
                  {center.nearbyAccess}
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-4">
              <div className="rounded-[1.2rem] border border-[var(--color-border)] bg-[var(--color-accent-soft)]/50 p-4">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[var(--color-accent-strong)]">
                  Travel note
                </p>
                <p className="mt-2 text-sm leading-7 text-[var(--color-ink)]">
                  {center.travelNote}
                </p>
              </div>
              <div className="rounded-[1.2rem] border border-[var(--color-border)] bg-white/85 p-4">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-[var(--color-accent-strong)]">
                  Reporting note
                </p>
                <p className="mt-2 text-sm leading-7 text-[var(--color-ink)]">
                  {center.reportingNote}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
