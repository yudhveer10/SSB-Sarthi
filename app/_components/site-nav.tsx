"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavItem = {
  href: string;
  label: string;
};

export default function SiteNav({ items }: { items: NavItem[] }) {
  const pathname = usePathname();

  return (
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
  );
}
