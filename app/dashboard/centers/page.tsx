import Link from "next/link";

export const metadata = {
  title: "Centers",
};

export default function DashboardCentersPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-8">
      <p className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--color-green)]">
        Centers
      </p>
      <h1 className="mt-3 font-display text-3xl font-extrabold leading-tight text-[var(--color-ink-strong)] sm:text-4xl">
        Centre readiness.
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--color-muted)]">
        Keep your centre details and checklist organized here. The full centre
        browser remains available while we connect saved centre preferences.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <Link href="/centers" className="feature-panel">
          <p className="text-lg font-extrabold">Browse SSB centers</p>
          <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
            Open the existing centre browser and logistics guide.
          </p>
        </Link>
        <Link href="/dashboard/profile" className="feature-panel">
          <p className="text-lg font-extrabold">Update board details</p>
          <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
            Add your SSB board and reporting date only when you are ready.
          </p>
        </Link>
      </div>
    </section>
  );
}
