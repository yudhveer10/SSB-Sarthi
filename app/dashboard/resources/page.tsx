import Link from "next/link";

export const metadata = {
  title: "Resources",
};

export default function DashboardResourcesPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-8">
      <p className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--color-green)]">
        Resources
      </p>
      <h1 className="mt-3 font-display text-3xl font-extrabold leading-tight text-[var(--color-ink-strong)] sm:text-4xl">
        Prep resources.
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--color-muted)]">
        Keep guidance, checklists, and revision material accessible from your
        dashboard. We can turn these into saved resources next.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <Link href="/dashboard/resources" className="feature-panel">
          <p className="text-lg font-extrabold">Open resource library</p>
          <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
            Dashboard resource library is being connected here to keep you inside the workspace.
          </p>
        </Link>
        <Link href="/dashboard/resources" className="feature-panel">
          <p className="text-lg font-extrabold">Review SSB process</p>
          <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
            Process notes will open inside the dashboard instead of the public landing pages.
          </p>
        </Link>
      </div>
    </section>
  );
}
