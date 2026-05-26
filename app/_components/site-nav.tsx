"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  href: string;
  label: string;
};

export default function SiteNav({ items }: { items: NavItem[] }) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isItemActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <div className="relative">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="primary-mobile-nav"
        aria-label={isOpen ? "Close navigation" : "Open navigation"}
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/70 bg-white/82 text-[var(--color-ink-strong)] shadow-sm backdrop-blur transition-colors hover:bg-white xl:hidden"
      >
        <span className="flex flex-col gap-1.5" aria-hidden="true">
          <span
            className={`h-0.5 w-5 rounded-full bg-current transition-transform duration-200 ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-5 rounded-full bg-current transition-opacity duration-200 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-0.5 w-5 rounded-full bg-current transition-transform duration-200 ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </span>
      </button>

      <nav
        aria-label="Primary"
        className="hidden items-center gap-1 rounded-full border border-white/60 bg-white/72 p-1.5 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur xl:flex"
      >
        {items.map((item) => {
          const isActive = isItemActive(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isActive ? "page" : undefined}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                isActive
                  ? "bg-[linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))] text-white shadow-[0_12px_24px_rgba(26,115,232,0.22)]"
                  : "text-[var(--color-muted)] hover:bg-white hover:text-[var(--color-ink-strong)]"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      {isOpen ? (
        <div
          aria-hidden="true"
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-40 bg-[rgba(8,17,33,0.32)] backdrop-blur-sm xl:hidden"
        />
      ) : null}

      <nav
        id="primary-mobile-nav"
        aria-label="Primary mobile"
        aria-hidden={!isOpen}
        className={`absolute right-0 top-[calc(100%+0.85rem)] z-50 flex min-w-[16rem] origin-top-right flex-col gap-1.5 rounded-[1.6rem] border border-white/75 bg-[rgba(248,252,255,0.97)] p-3 shadow-[0_28px_80px_rgba(15,23,42,0.18)] backdrop-blur-xl transition-all duration-200 xl:hidden ${
          isOpen
            ? "pointer-events-auto scale-100 opacity-100"
            : "pointer-events-none scale-95 opacity-0"
        }`}
      >
        <p className="px-2 pb-1 pt-1 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-[var(--color-muted)]">
          Navigate
        </p>

        {items.map((item) => {
          const isActive = isItemActive(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              aria-current={isActive ? "page" : undefined}
              className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-semibold transition-colors ${
                isActive
                  ? "bg-[linear-gradient(135deg,var(--color-accent),var(--color-accent-strong))] text-white shadow-[0_10px_24px_rgba(26,115,232,0.18)]"
                  : "bg-white/75 text-[var(--color-ink-strong)] hover:bg-[var(--color-surface)]"
              }`}
            >
              <span>{item.label}</span>
              <span
                aria-hidden="true"
                className={isActive ? "text-white/75" : "text-[var(--color-muted)]"}
              >
                →
              </span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
