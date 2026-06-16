"use client";

import Link from "next/link";
import { useLinkStatus } from "next/link";

export function PendingLink({
  href,
  className = "",
  children,
  ariaLabel,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
  ariaLabel?: string;
}) {
  return (
    <Link href={href} aria-label={ariaLabel} className={`relative ${className}`}>
      {children}
      <PendingDot />
    </Link>
  );
}

function PendingDot() {
  const { pending } = useLinkStatus();

  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute right-3 top-3 h-2.5 w-2.5 rounded-full bg-current transition ${
        pending ? "opacity-70 animate-pulse" : "opacity-0"
      }`}
    />
  );
}
