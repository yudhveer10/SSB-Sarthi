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

  return (
    <div className="relative">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-label="Toggle navigation"
        onClick={() => setIsOpen((open) => !open)}
        className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/70 bg-white/78 text-[var(--color-ink-strong)] shadow-sm backdrop-blur xl:hidden"
      >
        <span className="flex flex-col gap-1.5">
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

      <nav className="hidden items-center gap-2 rounded-full border border-white/60 bg-white/65 p-2 shadow-[0_18px_50px_rgba(15,23,42,0.08)] backdrop-blur xl:flex">
        {items.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/" && pathname.startsWith(item.href));

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                isActive
                  ? "bg-[var(--color-ink-strong)] text-white shadow-[0_12px_24px_rgba(15,23,42,0.22)]"
                  : "text-[var(--color-muted)] hover:bg-white hover:text-[var(--color-ink-strong)]"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      {isOpen ? (
        <nav className="absolute right-0 top-[calc(100%+0.85rem)] z-50 flex min-w-[15rem] flex-col gap-2 rounded-[1.6rem] border border-white/75 bg-[rgba(248,252,255,0.96)] p-3 shadow-[0_28px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl xl:hidden">
          {items.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`rounded-2xl px-4 py-3 text-sm font-semibold transition-colors ${
                  isActive
                    ? "bg-[var(--color-ink-strong)] text-white"
                    : "bg-white/75 text-[var(--color-ink-strong)] hover:bg-[var(--color-surface)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      ) : null}
    </div>
  );
}
