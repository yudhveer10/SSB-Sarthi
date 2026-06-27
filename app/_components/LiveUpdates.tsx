const liveUpdates = [
  {
    tag: "UPSC",
    title: "CDS II 2026 exam notification is live on the UPSC What's New page.",
    date: "May 29, 2026",
    href: "https://www.upsc.gov.in/whats-new/Combined%20Defence%20Services%20Examination%20%28II%29%2C%202026/Exam%20Notification",
  },
  {
    tag: "UPSC",
    title: "NDA & NA II 2026 exam notification is now available officially.",
    date: "May 29, 2026",
    href: "https://www.upsc.gov.in/whats-new/National%20Defence%20Academy%20and%20Naval%20Academy%20Examination%20%28II%29%2C%202026/Exam%20Notification",
  },
  {
    tag: "UPSC",
    title: "Written results for CDS I 2026 and NDA/NA I 2026 are listed on the live updates page.",
    date: "May 29, 2026",
    href: "https://www.upsc.gov.in",
  },
  {
    tag: "UPSC",
    title: "Track official defence exam updates directly from UPSC's What's New feed.",
    date: "May 29, 2026",
    href: "https://www.upsc.gov.in/whats-new",
  },
];

const tickerItems = [...liveUpdates, ...liveUpdates];

export default function LiveUpdates() {
  return (
    <section
      aria-label="Latest defence exam updates"
      className="border-b border-[var(--color-border)] bg-[linear-gradient(90deg,var(--color-green),var(--color-blue))] text-white"
    >
      <div className="mx-auto flex h-12 w-full max-w-7xl items-center gap-3 px-4 py-2 sm:px-6 lg:px-8">
        <span className="hidden shrink-0 items-center gap-2 rounded-md bg-white/12 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-white/95 sm:inline-flex">
          <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
          Live updates
        </span>
        <div className="ticker-track min-w-0 flex-1 py-0.5">
          <div className="ticker-content gap-2">
            {tickerItems.map((item, index) => (
              <a
                key={`${item.title}-${index}`}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-hidden={index >= liveUpdates.length ? true : undefined}
                tabIndex={index >= liveUpdates.length ? -1 : undefined}
                className="inline-flex shrink-0 items-center gap-2 rounded-md bg-white/12 px-3 py-1.5 text-xs font-bold text-white/94 transition hover:bg-white/18"
              >
                <span className="rounded bg-white/16 px-2 py-0.5 text-[0.62rem] uppercase tracking-[0.12em]">
                  {item.tag}
                </span>
                <span className="whitespace-nowrap">{item.title}</span>
                <span className="whitespace-nowrap text-white/65">{item.date}</span>
              </a>
            ))}
          </div>
        </div>
        <a
          href="https://www.upsc.gov.in/whats-new"
          target="_blank"
          rel="noreferrer"
          className="shrink-0 rounded-md border border-white/24 px-3 py-1.5 text-xs font-extrabold transition hover:bg-white/12"
        >
          Official UPSC
        </a>
      </div>
    </section>
  );
}
