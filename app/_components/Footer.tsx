import Link from "next/link";

const LINK_GROUPS = [
  {
    heading: "Product",
    items: [
      { label: "Process", href: "/process" },
      { label: "Practice", href: "/screening" },
      { label: "Resources", href: "/resources" },
    ],
  },
  {
    heading: "Planning",
    items: [
      { label: "Centers", href: "/centers" },
      { label: "OIR Practice", href: "/screening/oir" },
      { label: "Trends", href: "/trends" },
    ],
  },
  {
    heading: "Company",
    items: [
      { label: "Home", href: "/" },
      { label: "Disclaimer", href: "/" },
      { label: "Contact", href: "/resources" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 lg:px-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,minmax(0,1fr))]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-green)] text-[0.72rem] font-black tracking-[0.12em] text-white">
                SSB
              </span>
              <span className="font-display text-xl font-semibold text-[var(--color-ink-strong)]">
                SSB Sarthi
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-7 text-[var(--color-muted)]">
              A structured SaaS workspace for SSB aspirants to plan, practice,
              review, and arrive prepared.
            </p>
            <p className="mt-4 text-xs font-medium text-[var(--color-muted-soft)]">
              Copyright {new Date().getFullYear()} SSB Sarthi. Independent resource,
              not affiliated with a government body.
            </p>
          </div>

          {LINK_GROUPS.map((group) => (
            <div key={group.heading}>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--color-muted)]">
                {group.heading}
              </p>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm font-medium text-[var(--color-ink)] transition-colors hover:text-[var(--color-blue)]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
