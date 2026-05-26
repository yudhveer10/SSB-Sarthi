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
          <div className="pointer-events-none absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_12%_18%,rgba(26,115,232,0.15),transparent_20%),radial-gradient(circle_at_84%_14%,rgba(26,115,232,0.12),transparent_19%),radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.9),transparent_40%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(20,35,59,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(20,35,59,0.025)_1px,transparent_1px)] bg-[size:88px_88px] [mask-image:linear-gradient(180deg,rgba(255,255,255,0.55),transparent_88%)]" />

          <header className="sticky top-0 z-50">
            <div className="mx-auto w-full max-w-[1440px] px-4 pt-4 sm:px-8 lg:px-10">
              <div className="flex items-center justify-between gap-6 rounded-[1.75rem] border border-white/70 bg-[color:rgba(248,252,255,0.8)] px-5 py-4 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl sm:px-7">
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
                  className="hidden rounded-full border border-[rgba(26,115,232,0.18)] bg-[linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))] px-5 py-2.5 text-sm font-semibold text-white transition-transform duration-200 hover:-translate-y-0.5 md:inline-flex"
                >
                  Explore stories
                </Link>
              </div>
            </div>
          </header>

          <div className="relative">{children}</div>

          <footer className="relative border-t border-white/70 bg-[linear-gradient(180deg,rgba(247,251,255,0.92),rgba(239,246,255,0.95))]">
            <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-6 py-12 sm:px-10 lg:flex-row lg:items-end lg:justify-between lg:px-12">
              <div className="max-w-2xl">
                <p className="font-display text-2xl font-semibold tracking-[-0.04em] text-[var(--color-ink-strong)]">
                  SSB Sarthi
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)] sm:text-[0.98rem]">
                  A student-first platform for understanding the SSB process,
                  centres, trends, boards, and aspirant experiences with more
                  clarity and confidence.
                </p>
                <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)]">
                  Copyright © 2026 SSB Sarthi. Made with love for defense
                  aspirants.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 text-sm font-semibold text-[var(--color-muted)]">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-full border border-white/70 bg-white/88 px-4 py-2 transition-colors hover:text-[var(--color-ink-strong)]"
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
