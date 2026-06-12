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

export default function LiveUpdates() {
  return (
    <section className="border-b border-[var(--color-border)] bg-[linear-gradient(90deg,var(--color-green),var(--color-blue))] text-white">
      <div className="mx-auto flex w-full max-w-7xl items-center gap-4 px-4 py-2 sm:px-6 lg:px-8">
        <span className="hidden shrink-0 items-center gap-2 rounded-md bg-white/12 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-white/95 sm:inline-flex">
          <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
          Live updates
        </span>
        <div className="ticker-track flex-1 overflow-hidden">
          <div className="ticker-content flex gap-10 whitespace-nowrap text-sm font-medium">
            {[...liveUpdates, ...liveUpdates].map((item, index) => (
              <a
                key={`${item.title}-${index}`}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 text-white/92 transition-colors hover:text-white"
              >
                <span className="rounded-md bg-white/14 px-2.5 py-0.5 text-[0.65rem] font-bold uppercase tracking-[0.12em] text-white">
                  {item.tag}
                </span>
                <span>{item.title}</span>
                <span className="text-white/65">- {item.date}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
