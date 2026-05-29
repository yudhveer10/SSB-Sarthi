"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/process", label: "Process" },
  { href: "/centers", label: "Centres" },
  { href: "/resources", label: "Resources" },
  { href: "/screening", label: "Screening" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 h-[var(--nav-height)]"
      aria-label="Primary"
    >
      <nav className="glass mx-auto flex h-full max-w-7xl items-center justify-between gap-5 px-4 shadow-[0_1px_0_rgba(14,36,64,0.08),0_8px_30px_rgba(16,32,51,0.08)] sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="SSB Sarthi home">
          <span className="flex h-9 w-9 items-center justify-center rounded-[0.7rem] bg-[linear-gradient(135deg,var(--color-accent-strong),var(--color-accent))] text-[0.72rem] font-black tracking-[0.18em] text-white shadow-[0_8px_18px_rgba(91,143,201,0.28)]">
            SSB
          </span>
          <span className="font-display text-lg font-semibold tracking-[-0.04em] text-[var(--color-ink-strong)]">
            Sarthi
          </span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive =
              pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`nav-link ${isActive ? "active" : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="/centers"
            className="hidden rounded-full bg-[linear-gradient(135deg,var(--color-accent-strong),var(--color-accent))] px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-[0_10px_24px_rgba(91,143,201,0.24)] transition-transform duration-200 hover:-translate-y-0.5 sm:inline-flex"
          >
            Find My Centre
          </Link>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-[var(--color-border)] bg-white/80 text-[var(--color-ink-strong)] transition-colors hover:bg-white md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="relative flex h-4 w-5 items-center justify-center">
              <span
                className={`absolute h-0.5 w-5 rounded-full bg-current transition-all duration-200 ${
                  menuOpen ? "translate-y-0 rotate-45" : "-translate-y-1.5"
                }`}
              />
              <span
                className={`absolute h-0.5 w-5 rounded-full bg-current transition-all duration-200 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute h-0.5 w-5 rounded-full bg-current transition-all duration-200 ${
                  menuOpen ? "translate-y-0 -rotate-45" : "translate-y-1.5"
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      <div
        id="mobile-navigation"
        className={`glass mx-4 mt-2 overflow-hidden rounded-[1.4rem] p-3 shadow-[0_18px_50px_rgba(13,27,47,0.14)] transition-all duration-200 md:hidden ${
          menuOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1.5">
          {NAV_LINKS.map((link) => {
            const isActive =
              pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold ${
                  isActive
                    ? "bg-[linear-gradient(135deg,var(--color-accent-strong),var(--color-accent))] text-white"
                    : "text-[var(--color-ink-strong)] hover:bg-white"
                }`}
              >
                <span>{link.label}</span>
                <span aria-hidden="true">→</span>
              </Link>
            );
          })}
        </div>

        <div className="mt-3 border-t border-[var(--color-border)] pt-3">
          <Link
            href="/centers"
            className="flex w-full items-center justify-center rounded-2xl bg-[linear-gradient(135deg,var(--color-accent-strong),var(--color-accent))] px-4 py-3 text-sm font-bold text-white"
          >
            Find My Centre
          </Link>
        </div>
      </div>
    </header>
  );
}
