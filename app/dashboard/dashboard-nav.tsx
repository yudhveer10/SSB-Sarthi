"use client";

import { usePathname } from "next/navigation";
import { PendingLink } from "./pending-link";

type NavItem = {
  href: string | null;
  label: string;
  icon: string;
  chevron?: boolean;
  soon?: boolean;
};

const navItems: NavItem[] = [
  { href: "/dashboard", label: "Overview", icon: "home" },
  { href: "/dashboard/profile", label: "Profile setup", icon: "user" },
  { href: "/dashboard/practice", label: "Practice", icon: "tool", chevron: true },
  { href: "/dashboard/centers", label: "Centers", icon: "pin" },
  { href: "/dashboard/journals", label: "Journals", icon: "file" },
  { href: "/dashboard/resources", label: "Resources", icon: "book", chevron: true },
  { href: null, label: "Planner", icon: "calendar", soon: true },
  { href: null, label: "Tests & Analysis", icon: "chart", soon: true },
  { href: null, label: "Achievements", icon: "star", soon: true },
];

export function DashboardNav() {
  const pathname = usePathname();

  return (
    <nav className="mt-8 space-y-2">
      {navItems.map((item, index) => {
        const isActive =
          item.href === null
            ? false
            : item.href === "/dashboard"
              ? pathname === item.href
              : pathname === item.href || pathname.startsWith(`${item.href}/`);

        if (item.href === null) {
          return (
            <div
              key={`${item.label}-${index}`}
              className="relative flex min-h-11 cursor-not-allowed items-center gap-4 rounded-lg px-3 text-sm font-semibold text-[var(--color-muted-soft)]"
              aria-disabled="true"
              title={`${item.label} is coming soon`}
            >
              <NavIcon name={item.icon} className="h-5 w-5 shrink-0" />
              <span className="min-w-0 flex-1 truncate">{item.label}</span>
              {item.soon ? (
                <span className="rounded-md bg-[var(--color-surface)] px-2 py-1 text-[10px] font-extrabold uppercase text-[var(--color-muted)]">
                  Soon
                </span>
              ) : null}
            </div>
          );
        }

        return (
          <PendingLink
            key={`${item.label}-${index}`}
            href={item.href}
            className={`group relative flex min-h-11 items-center gap-4 rounded-lg px-3 text-sm font-semibold transition ${
              isActive
                ? "bg-[#eef5ff] text-[#1264ff]"
                : "text-[var(--color-ink-strong)] hover:bg-[var(--color-surface)] hover:text-[#1264ff]"
            }`}
          >
            {isActive ? (
              <span className="absolute left-0 top-2 h-7 w-1 rounded-full bg-[#1264ff]" />
            ) : null}
            <NavIcon name={item.icon} className="h-5 w-5 shrink-0" />
            <span className="min-w-0 flex-1 truncate">{item.label}</span>
            {item.chevron ? <NavIcon name="chevron" className="h-4 w-4 shrink-0" /> : null}
          </PendingLink>
        );
      })}
    </nav>
  );
}

function NavIcon({ name, className }: { name: string; className: string }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      {name === "home" ? (
        <>
          <path d="m3 11 9-8 9 8" />
          <path d="M5 10v10h14V10M10 20v-6h4v6" />
        </>
      ) : name === "user" ? (
        <>
          <path d="M20 21a8 8 0 0 0-16 0" />
          <circle cx="12" cy="7" r="4" />
        </>
      ) : name === "tool" ? (
        <path d="m14.7 6.3 3 3M4 20l7.5-7.5M11.5 12.5 17 7l-3-3-5.5 5.5M7 17l-3 3" />
      ) : name === "pin" ? (
        <>
          <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </>
      ) : name === "file" ? (
        <>
          <path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7Z" />
          <path d="M14 2v5h5M9 13h6M9 17h4" />
        </>
      ) : name === "book" ? (
        <>
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15Z" />
        </>
      ) : name === "calendar" ? (
        <>
          <rect x="3" y="5" width="18" height="16" rx="2" />
          <path d="M16 3v4M8 3v4M3 11h18" />
        </>
      ) : name === "chart" ? (
        <>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M8 17V9M12 17v-5M16 17V7" />
        </>
      ) : name === "star" ? (
        <path d="m12 3 2.7 5.5 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.8 1-6.1-4.4-4.3 6.1-.9L12 3Z" />
      ) : name === "chevron" ? (
        <path d="m9 18 6-6-6-6" />
      ) : (
        <circle cx="12" cy="12" r="8" />
      )}
    </svg>
  );
}
