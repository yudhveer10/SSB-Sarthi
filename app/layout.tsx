import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[var(--color-page)] text-[var(--color-ink)]">
        <div className="min-h-screen">
          <header className="sticky top-0 z-50 border-b border-black/8 bg-[color:rgba(255,251,245,0.88)] backdrop-blur">
            <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 py-4 sm:px-10 lg:px-12">
              <Link href="/" className="flex flex-col">
                <span className="font-serif text-2xl leading-none text-[var(--color-ink-strong)]">
                  SSB Sarthi
                </span>
                <span className="mt-1 text-xs font-medium uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  Your guide to the SSB journey
                </span>
              </Link>

              <nav className="hidden items-center gap-6 md:flex">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-sm font-medium text-[var(--color-muted)] transition-colors hover:text-[var(--color-ink-strong)]"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          </header>

          {children}

          <footer className="border-t border-black/8 bg-white">
            <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-6 py-10 sm:px-10 lg:px-12 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-2xl">
                <p className="font-serif text-2xl text-[var(--color-ink-strong)]">
                  SSB Sarthi
                </p>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                  A student-first platform for understanding SSB procedure,
                  centers, trends, and community experiences with more clarity
                  and less confusion.
                </p>
              </div>
              <div className="flex flex-wrap gap-4 text-sm font-medium text-[var(--color-muted)]">
                {navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="transition-colors hover:text-[var(--color-ink-strong)]"
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
