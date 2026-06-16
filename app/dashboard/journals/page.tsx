import Link from "next/link";

export const metadata = {
  title: "Journals",
};

export default function DashboardJournalsPage() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-8">
      <p className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--color-green)]">
        Journals
      </p>
      <h1 className="mt-3 font-display text-3xl font-extrabold leading-tight text-[var(--color-ink-strong)] sm:text-4xl">
        OLQ journal workspace.
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--color-muted)]">
        This will become the private home for examples, reflections, and officer
        like quality evidence. For now, open the current journal tools.
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <Link href="/dashboard/journals" className="feature-panel">
          <p className="text-lg font-extrabold">Open journal tools</p>
          <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
            Dashboard-native journal tools are being connected here so you do not leave the workspace.
          </p>
        </Link>
        <Link href="/dashboard/practice" className="feature-panel">
          <p className="text-lg font-extrabold">Review practice</p>
          <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
            Move from drills into reflection without leaving the dashboard shell.
          </p>
        </Link>
      </div>
    </section>
  );
}
