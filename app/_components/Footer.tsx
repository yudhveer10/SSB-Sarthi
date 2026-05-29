import Link from "next/link";

const LINK_GROUPS = [
  {
    heading: "Prepare",
    items: [
      { label: "Process", href: "/process" },
      { label: "Resources", href: "/resources" },
      { label: "Screening", href: "/screening" },
    ],
  },
  {
    heading: "Centres",
    items: [
      { label: "Army", href: "/centers" },
      { label: "Air Force", href: "/centers" },
      { label: "Navy", href: "/centers" },
    ],
  },
  {
    heading: "About",
    items: [
      { label: "Home", href: "/" },
      { label: "Disclaimer", href: "/" },
      { label: "Contact", href: "/resources" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-[var(--color-border)] bg-[linear-gradient(180deg,rgba(247,250,254,0.95),rgba(240,245,251,0.98))]">
      <div className="mx-auto max-w-7xl px-6 py-12 sm:px-10 lg:px-12">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(3,minmax(0,1fr))]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-[0.7rem] bg-[linear-gradient(135deg,var(--color-accent-strong),var(--color-accent))] text-[0.72rem] font-black tracking-[0.18em] text-white">
                SSB
              </span>
              <span className="font-display text-xl font-semibold tracking-[-0.04em] text-[var(--color-ink-strong)]">
                Sarthi
              </span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-7 text-[var(--color-muted)]">
              An independent preparation guide for SSB aspirants. Not affiliated with
              any government body. Centre data should always be verified before travel.
            </p>
            <p className="mt-3 text-sm font-semibold text-[var(--color-ink-strong)]">
              Made with love for Defense Aspirants 🇮🇳 ❤️
            </p>
            <p className="mt-4 text-xs font-medium uppercase tracking-[0.18em] text-[var(--color-muted-soft)]">
              © {new Date().getFullYear()} SSB Sarthi
            </p>
          </div>

          {LINK_GROUPS.map((group) => (
            <div key={group.heading}>
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.24em] text-[var(--color-muted)]">
                {group.heading}
              </p>
              <ul className="space-y-3">
                {group.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-sm font-medium text-[var(--color-ink)] transition-colors hover:text-[var(--color-accent-strong)]"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-[1.35rem] border border-[var(--color-border)] bg-[rgba(127,179,227,0.08)] p-4 text-xs leading-relaxed text-[var(--color-muted)]">
          <strong className="text-[var(--color-ink-strong)]">Disclaimer: </strong>
          SSB Sarthi is an independent resource created to help candidates understand
          the SSB process. Centre details, contact information, and board numbers are
          compiled from publicly available sources and can change. Always verify the
          latest information from official call-up letters and service channels before
          travel.
        </div>
      </div>
    </footer>
  );
}
