import Link from "next/link";
import { redirect } from "next/navigation";
import BrandIcon from "../_components/BrandIcon";
import { createClient } from "../_lib/supabase/server";
import { DashboardNav } from "./dashboard-nav";
import { PendingLink } from "./pending-link";
import { SignOutForm } from "./sign-out-form";

export const dynamic = "force-dynamic";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const { data: userData, error } = await supabase.auth.getUser();

  if (error || !userData.user) {
    redirect("/signin");
  }

  const userId = userData.user.id;
  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name,email")
    .eq("id", userId)
    .maybeSingle();
  const displayName = profile?.full_name?.trim() || "Candidate";

  return (
    <div className="min-h-dvh bg-white text-[var(--color-ink-strong)]">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-[260px] border-r border-[var(--color-border)] bg-white px-4 py-6 lg:flex lg:flex-col">
        <Link href="/dashboard" className="flex items-center gap-3 px-2">
          <BrandIcon className="h-12 w-12" priority />
          <div>
            <p className="text-xl font-extrabold leading-tight">SSB Sarthi</p>
            <p className="text-xs font-semibold text-[var(--color-muted)]">Candidate workspace</p>
          </div>
        </Link>

        <DashboardNav />

        <div className="mt-auto space-y-4">
          <div className="rounded-lg border border-[var(--color-border)] bg-white p-4 shadow-[0_1px_2px_rgba(13,27,47,0.04)]">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] text-[var(--color-muted)]">
                <UserIcon />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-medium text-[var(--color-muted)]">Signed in as</p>
                <p className="truncate text-sm font-extrabold text-[var(--color-ink-strong)]">{displayName}</p>
              </div>
            </div>
            <p className="mt-4 text-xs font-extrabold text-[#00964c]">Free account</p>
          </div>
          <SignOutForm />
        </div>
      </aside>

      <div className="lg:pl-[260px]">
        <header className="sticky top-0 z-30 border-b border-[var(--color-border)] bg-white/95 px-5 py-4 backdrop-blur lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link href="/dashboard" className="flex items-center gap-3 lg:hidden">
              <BrandIcon className="h-10 w-10" priority />
              <span className="text-lg font-extrabold">SSB Sarthi</span>
            </Link>
            <div className="hidden lg:block">
              <p className="text-xl font-extrabold">Overview</p>
            </div>
            <div className="flex items-center gap-4">
              <PendingLink
                href="/dashboard/resources"
                ariaLabel="Open preparation updates"
                className="hidden h-10 w-10 place-items-center rounded-lg border border-transparent text-[var(--color-ink-strong)] transition hover:border-[var(--color-border)] sm:grid"
              >
                <BellIcon />
                <span className="absolute right-1.5 top-0.5 grid h-5 w-5 place-items-center rounded-full bg-[#1264ff] text-[10px] font-extrabold text-white">
                  2
                </span>
              </PendingLink>
              <PendingLink
                href="/dashboard/profile"
                ariaLabel="Open profile"
                className="grid h-11 w-11 place-items-center rounded-lg border border-[var(--color-border)] bg-white text-[var(--color-muted)]"
              >
                <UserIcon />
              </PendingLink>
              <PendingLink href="/dashboard/profile" className="hidden rounded-lg px-1 py-1 text-left sm:block">
                <p className="text-sm font-extrabold leading-tight">{displayName}</p>
                <p className="text-xs font-semibold text-[#00964c]">Free account</p>
              </PendingLink>
              <PendingLink href="/dashboard/profile" ariaLabel="Profile menu" className="text-[var(--color-ink-strong)]">
                <ChevronDownIcon />
              </PendingLink>
            </div>
          </div>
        </header>

        <main>{children}</main>
      </div>
    </div>
  );
}

function UserIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-4.42 0-8 2.24-8 5v1h16v-1c0-2.76-3.58-5-8-5Z" />
    </svg>
  );
}

function BellIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  );
}

function ChevronDownIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
