import type { Metadata } from "next";
import Link from "next/link";
import SiteNav from "./_components/site-nav";
import "./globals.css";

const navigation = [
  { href: "/process", label: "Process" },
  { href: "/centers", label: "Centers" },
  { href: "/trends", label: "Trends" },
  { href: "/journals", label: "Journals" },
  { href: "/resources", label: "Resources" },
];

export const metadata: Metadata = {
  title: "SSB Sarthi | Your guide to the SSB journey",
  description:
    "SSB Sarthi is a student-first platform for understanding the SSB process, centers, boards, recommendation trends, and real aspirant journals.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className="h-full antialiased">
      <body className="min-h-full bg-[var(--color-page)] text-[var(--color-ink)]">
        <div className="relative min-h-screen overflow-hidden">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_12%_18%,rgba(58,196,255,0.18),transparent_20%),radial-gradient(circle_at_84%_14%,rgba(8,145,178,0.16),transparent_19%),radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.9),transparent_40%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:linear-gradient(180deg,rgba(255,255,255,0.55),transparent_88%)]" />

          <header className="sticky top-0 z-50">
            <div className="mx-auto w-full max-w-7xl px-4 pt-4 sm:px-8 lg:px-10">
              <div className="flex items-center justify-between gap-6 rounded-[1.75rem] border border-white/70 bg-[color:rgba(248,252,255,0.76)] px-5 py-4 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:px-7">
                <Link href="/" className="flex min-w-0 flex-col">
                  <span className="font-display text-[1.35rem] font-semibold leading-none tracking-[-0.04em] text-[var(--color-ink-strong)] sm:text-[1.55rem]">
                    SSB Sarthi
                  </span>
                  <span className="mt-1 text-[0.68rem] font-bold uppercase tracking-[0.28em] text-[var(--color-muted)] sm:text-[0.72rem]">
                    Student intelligence for the SSB journey
                  </span>
                </Link>

                <SiteNav items={navigation} />

                <Link
                  href="/journals"
                  className="hidden rounded-full border border-[var(--color-border-strong)] bg-[var(--color-ink-strong)] px-4 py-2.5 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 md:inline-flex"
                >
                  Explore stories
                </Link>
              </div>
            </div>
          </header>

          <div className="relative">{children}</div>

          <footer className="relative border-t border-white/70 bg-[linear-gradient(180deg,rgba(247,251,255,0.85),rgba(239,246,255,0.92))]">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-6 py-12 sm:px-10 lg:flex-row lg:items-end lg:justify-between lg:px-12">
              <div className="max-w-2xl">
                <p className="font-display text-2xl font-semibold tracking-[-0.04em] text-[var(--color-ink-strong)]">
                  SSB Sarthi
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)] sm:text-[0.98rem]">
                  A student-first SaaS-style platform for understanding SSB
                  procedure, centers, trends, boards, and aspirant experiences
                  with more clarity and energy.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 text-sm font-semibold text-[var(--color-muted)]">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-full border border-white/70 bg-white/80 px-4 py-2 transition-colors hover:text-[var(--color-ink-strong)]"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
