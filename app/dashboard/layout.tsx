import Link from "next/link";
import { redirect } from "next/navigation";
import BrandIcon from "../_components/BrandIcon";
import { createClient } from "../_lib/supabase/server";

const dashboardLinks = [
  { href: "/dashboard", label: "Overview" },
  { href: "/dashboard/profile", label: "Profile setup" },
  { href: "/dashboard/practice", label: "Practice" },
  { href: "/dashboard/centers", label: "Centers" },
  { href: "/dashboard/journals", label: "Journals" },
  { href: "/dashboard/resources", label: "Resources" },
];

export const dynamic = "force-dynamic";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const { data: claimsData, error } = await supabase.auth.getClaims();

  if (error || !claimsData?.claims?.sub) {
    redirect("/signin");
  }

  const userId = claimsData.claims.sub;
  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name,email")
    .eq("id", userId)
    .maybeSingle();
  const displayName = profile?.full_name ?? profile?.email?.split("@")[0] ?? "Candidate";

  return (
    <div className="min-h-dvh bg-[var(--color-surface)] text-[var(--color-ink-strong)]">
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-72 border-r border-[var(--color-border)] bg-white px-4 py-5 lg:flex lg:flex-col">
        <Link href="/dashboard" className="flex items-center gap-3 px-2">
          <BrandIcon className="h-11 w-11" priority />
          <div>
            <p className="text-lg font-extrabold">SSB Sarthi</p>
            <p className="text-xs font-semibold text-[var(--color-muted)]">Candidate workspace</p>
          </div>
        </Link>

        <nav className="mt-8 space-y-1">
          {dashboardLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="flex items-center justify-between rounded-lg px-4 py-3 text-sm font-bold text-[var(--color-muted)] transition hover:bg-[var(--color-surface)] hover:text-[var(--color-ink-strong)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
          <p className="text-xs font-semibold uppercase text-[var(--color-muted)]">Signed in as</p>
          <p className="mt-1 text-sm font-extrabold text-[var(--color-ink-strong)]">{displayName}</p>
          <Link href="/auth/signout" className="mt-4 inline-flex text-sm font-bold text-[var(--color-blue)]">
            Sign out
          </Link>
        </div>
      </aside>

      <div className="lg:pl-72">
        <header className="sticky top-0 z-30 border-b border-[var(--color-border)] bg-white/95 px-5 py-4 backdrop-blur lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <Link href="/dashboard" className="flex items-center gap-3 lg:hidden">
              <BrandIcon className="h-10 w-10" priority />
              <span className="text-lg font-extrabold">SSB Sarthi</span>
            </Link>
            <div className="hidden lg:block">
              <p className="text-sm font-bold text-[var(--color-muted)]">SSB Sarthi</p>
              <p className="text-xl font-extrabold">Dashboard</p>
            </div>
            <div className="flex items-center gap-3">
              <div className="text-right">
                <p className="text-xs font-semibold uppercase text-[var(--color-muted)]">Candidate</p>
                <p className="text-sm font-extrabold">{displayName}</p>
              </div>
              <Link href="/dashboard/profile" className="btn-secondary hidden sm:inline-flex">
                Profile
              </Link>
            </div>
          </div>
        </header>

        <main>{children}</main>
      </div>
    </div>
  );
}
