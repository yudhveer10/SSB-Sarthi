import Link from "next/link";

export const metadata = {
  title: "Practice",
};

export default function DashboardPracticePage() {
  return (
    <DashboardModule
      eyebrow="Practice"
      title="Screening practice hub."
      body="Start with your free account allowance: 5 OIR attempts and 10 PPDT picture-story prompts. Saved attempts will continue feeding the dashboard tracker."
      actions={[
        ["PPDT picture stories", "/dashboard/practice"],
        ["OLQ reflection journal", "/dashboard/journals"],
      ]}
    />
  );
}

function DashboardModule({
  eyebrow,
  title,
  body,
  actions,
}: {
  eyebrow: string;
  title: string;
  body: string;
  actions: [string, string][];
}) {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-8">
      <p className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--color-green)]">
        {eyebrow}
      </p>
      <h1 className="mt-3 font-display text-3xl font-extrabold leading-tight text-[var(--color-ink-strong)] sm:text-4xl">
        {title}
      </h1>
      <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--color-muted)]">
        {body}
      </p>
      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {["OIR Attempt 01", "OIR Attempt 02", "OIR Attempt 03", "OIR Attempt 04", "OIR Attempt 05"].map((set) => (
          <Link key={set} href="/dashboard/practice/oir" className="feature-panel">
            <p className="text-lg font-extrabold">{set}</p>
            <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
              Timed screening practice for your free OIR allowance.
            </p>
          </Link>
        ))}
        {actions.map(([label, href]) => (
          <Link key={label} href={href} className="feature-panel">
            <p className="text-lg font-extrabold">{label}</p>
            <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
              Open the current tool while we keep building the connected
              dashboard workflow.
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
