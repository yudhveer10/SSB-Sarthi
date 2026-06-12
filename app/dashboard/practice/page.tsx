import Link from "next/link";

export const metadata = {
  title: "Practice",
};

export default function DashboardPracticePage() {
  return (
    <DashboardModule
      eyebrow="Practice"
      title="Screening practice hub."
      body="Start with OIR and PPDT. We will connect saved attempts and deeper drills here next."
      actions={[
        ["Start OIR test", "/screening/oir"],
        ["Open PPDT sets", "/screening"],
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
