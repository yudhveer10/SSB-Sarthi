import ServiceCenterBrowser from "../_components/service-center-browser";

export const metadata = {
  title: "SSB Centres | SSB Sarthi",
  description:
    "Explore all SSB, AFSB, and Naval Selection Board centres across India. Browse by service branch — Army, Air Force, or Navy — and get detailed address, contact, and travel information.",
};

export default function CentersPage() {
  return (
    <main className="pb-20">
      <section className="mx-auto w-full max-w-7xl px-6 pt-12 sm:px-10 lg:px-12">
        {/* ── Hero banner ── */}
        <div className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-[linear-gradient(135deg,rgba(255,255,255,0.96),rgba(228,247,255,0.92))] px-6 py-8 shadow-[var(--shadow-soft)] sm:px-8 sm:py-10 lg:px-10 lg:py-12">
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(8,145,178,0.16),transparent_70%)]" />
          <div className="absolute left-0 bottom-0 h-48 w-48 rounded-full bg-[radial-gradient(circle,rgba(255,122,89,0.14),transparent_70%)]" />
          <div className="relative max-w-4xl">
            <div className="inline-flex items-center rounded-full border border-white/80 bg-white/82 px-4 py-2 text-xs font-bold uppercase tracking-[0.28em] text-[var(--color-accent-strong)] shadow-sm">
              Service-first center discovery
            </div>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.02] tracking-[-0.06em] text-[var(--color-ink-strong)] sm:text-5xl lg:text-[4.4rem]">
              Pick Army, Air Force, or Navy first. Then explore the right
              centers.
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--color-muted)] sm:text-lg">
              This is the better user flow for aspirants. Students usually begin
              with their service branch, not with a random city list. So this
              section now starts with branch selection and then reveals relevant
              center details in a much easier way.
            </p>

            {/* Quick stats */}
            <div className="mt-8 flex flex-wrap gap-4">
              {[
                { label: "Army Centres", value: "4", color: "#1d6b40" },
                { label: "Air Force AFSBs", value: "5", color: "#0369a1" },
                { label: "Naval SSB / NSBs", value: "5", color: "#1e3a8a" },
                { label: "States Covered", value: "12+", color: "#7c3aed" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-3 rounded-2xl border border-white/80 bg-white/70 px-5 py-3 shadow-sm backdrop-blur-sm"
                >
                  <span
                    className="text-2xl font-bold"
                    style={{ color: stat.color }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-xs font-semibold text-[var(--color-muted)]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Interactive browser ── */}
        <ServiceCenterBrowser />
      </section>
    </main>
  );
}