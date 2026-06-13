"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import BrandIcon from "./BrandIcon";

const NAV_LINKS = [
  { href: "/process", label: "Process" },
  { href: "/centers", label: "Centers" },
  { href: "/screening", label: "Practice" },
  { href: "/resources", label: "Resources" },
];

export default function NavBar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 h-[var(--nav-height)]"
      aria-label="Primary"
    >
      <nav className="glass mx-auto flex h-full max-w-7xl items-center justify-between gap-5 px-4 shadow-[0_1px_0_rgba(13,27,47,0.08)] sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="SSB Sarthi home">
          <BrandIcon priority />
          <span className="font-display text-lg font-semibold text-[var(--color-ink-strong)]">
            SSB Sarthi
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
            href="/process"
            className="hidden rounded-lg border border-[var(--color-border-strong)] bg-white px-4 py-2.5 text-xs font-bold text-[var(--color-blue)] transition-colors hover:bg-[var(--color-surface)] lg:inline-flex"
          >
            View process
          </Link>
          <Link
            href="/signin"
            className="hidden rounded-lg bg-[var(--color-blue)] px-4 py-2.5 text-xs font-bold text-white shadow-[0_10px_24px_rgba(47,128,201,0.22)] transition-transform duration-200 hover:-translate-y-0.5 sm:inline-flex"
          >
            Create account
          </Link>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-border)] bg-white text-[var(--color-ink-strong)] transition-colors hover:bg-[var(--color-surface)] md:hidden"
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
        className={`glass mx-4 mt-2 overflow-hidden rounded-lg p-3 shadow-[0_18px_50px_rgba(13,27,47,0.14)] transition-all duration-200 md:hidden ${
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
                className={`flex items-center justify-between rounded-lg px-4 py-3 text-sm font-semibold ${
                  isActive
                    ? "bg-[var(--color-blue)] text-white"
                    : "text-[var(--color-ink-strong)] hover:bg-[var(--color-surface)]"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                <span>{link.label}</span>
                <ArrowIcon />
              </Link>
            );
          })}
        </div>

        <div className="mt-3 border-t border-[var(--color-border)] pt-3">
          <Link
            href="/signin"
            className="flex w-full items-center justify-center rounded-lg bg-[var(--color-blue)] px-4 py-3 text-sm font-bold text-white"
            onClick={() => setMenuOpen(false)}
          >
            Create account
          </Link>
        </div>
      </div>
    </header>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  );
}
