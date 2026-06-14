import Link from "next/link";
import { cookies, headers } from "next/headers";
import { createClient } from "../_lib/supabase/server";

export const metadata = {
  title: "Auth debug",
};

export const dynamic = "force-dynamic";

export default async function AuthDebugPage() {
  const cookieStore = await cookies();
  const headerStore = await headers();
  const supabase = await createClient();
  const { data: userData, error: userError } = await supabase.auth.getUser();

  const user = userData.user;
  const profileResult = user
    ? await supabase
        .from("profiles")
        .select("id,email,full_name,onboarding_completed,updated_at")
        .eq("id", user.id)
        .maybeSingle()
    : null;

  const supabaseCookies = cookieStore
    .getAll()
    .filter((cookie) => cookie.name.startsWith("sb-") || cookie.name.includes("supabase"))
    .map((cookie) => ({
      name: cookie.name,
      present: Boolean(cookie.value),
      length: cookie.value.length,
    }));

  const checks = [
    {
      label: "Supabase URL configured",
      ok: Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL),
      detail: redactUrl(process.env.NEXT_PUBLIC_SUPABASE_URL),
    },
    {
      label: "Supabase public key configured",
      ok: Boolean(process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY),
      detail: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
        ? "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY"
        : process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
          ? "NEXT_PUBLIC_SUPABASE_ANON_KEY"
          : "Missing",
    },
    {
      label: "Server can read auth cookies",
      ok: supabaseCookies.length > 0,
      detail: `${supabaseCookies.length} Supabase cookie(s) detected`,
    },
    {
      label: "Supabase getUser succeeds",
      ok: Boolean(user) && !userError,
      detail: userError?.message ?? (user ? "Authenticated user found" : "No server session found"),
    },
    {
      label: "Profile table access",
      ok: Boolean(profileResult?.data) && !profileResult?.error,
      detail:
        profileResult?.error?.message ??
        (profileResult?.data ? "Profile row is readable" : user ? "No profile row found" : "Skipped without user"),
    },
  ];

  return (
    <main className="min-h-dvh bg-[var(--color-surface)] px-5 py-8 text-[var(--color-ink-strong)] sm:px-8">
      <section className="mx-auto max-w-5xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm font-extrabold uppercase text-[var(--color-blue)]">SSB Sarthi</p>
            <h1 className="mt-2 text-3xl font-extrabold">Auth debug</h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--color-muted)]">
              This page checks session cookies, Supabase environment variables, server auth, and profile access without exposing token values.
            </p>
          </div>
          <div className="flex gap-3">
            <Link href="/signin" className="btn-secondary">
              Sign in
            </Link>
            <Link href="/dashboard" className="btn-primary">
              Dashboard
            </Link>
          </div>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {checks.map((check) => (
            <section key={check.label} className="rounded-lg border border-[var(--color-border)] bg-white p-4 shadow-[var(--shadow-card)]">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-extrabold">{check.label}</p>
                  <p className="mt-1 text-sm leading-6 text-[var(--color-muted)]">{check.detail}</p>
                </div>
                <span
                  className={`rounded-md px-2 py-1 text-xs font-extrabold ${
                    check.ok ? "bg-[#dff7e8] text-[#0b8b49]" : "bg-[#fff1dd] text-[#c45d00]"
                  }`}
                >
                  {check.ok ? "OK" : "Check"}
                </span>
              </div>
            </section>
          ))}
        </div>

        <div className="mt-6 grid gap-4 lg:grid-cols-[1fr_1fr]">
          <section className="rounded-lg border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-card)]">
            <h2 className="text-lg font-extrabold">Server user</h2>
            <dl className="mt-4 space-y-3 text-sm">
              <DebugRow label="User id" value={user?.id ?? "Not authenticated"} />
              <DebugRow label="Email" value={user?.email ?? "Not available"} />
              <DebugRow label="Provider" value={user?.app_metadata?.provider?.toString() ?? "Not available"} />
              <DebugRow label="Request host" value={headerStore.get("host") ?? "Unknown"} />
            </dl>
          </section>

          <section className="rounded-lg border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-card)]">
            <h2 className="text-lg font-extrabold">Profile row</h2>
            <dl className="mt-4 space-y-3 text-sm">
              <DebugRow label="Full name" value={profileResult?.data?.full_name ?? "Not set"} />
              <DebugRow label="Profile email" value={profileResult?.data?.email ?? "Not set"} />
              <DebugRow
                label="Onboarding"
                value={profileResult?.data?.onboarding_completed ? "Completed" : "Not completed"}
              />
              <DebugRow label="Updated" value={formatDate(profileResult?.data?.updated_at)} />
            </dl>
          </section>
        </div>

        <section className="mt-6 rounded-lg border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-card)]">
          <h2 className="text-lg font-extrabold">Supabase cookies</h2>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[560px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-[var(--color-border)] text-xs uppercase text-[var(--color-muted)]">
                  <th className="py-2 pr-4">Cookie name</th>
                  <th className="py-2 pr-4">Present</th>
                  <th className="py-2 pr-4">Value length</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--color-border)]">
                {supabaseCookies.length > 0 ? (
                  supabaseCookies.map((cookie) => (
                    <tr key={cookie.name}>
                      <td className="py-3 pr-4 font-semibold">{cookie.name}</td>
                      <td className="py-3 pr-4">{cookie.present ? "Yes" : "No"}</td>
                      <td className="py-3 pr-4">{cookie.length}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td className="py-3 pr-4 text-[var(--color-muted)]" colSpan={3}>
                      No Supabase auth cookies were included with this request.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </section>
      </section>
    </main>
  );
}

function DebugRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-[var(--color-border)] pb-3">
      <dt className="font-medium text-[var(--color-muted)]">{label}</dt>
      <dd className="max-w-[60%] truncate text-right font-extrabold">{value}</dd>
    </div>
  );
}

function redactUrl(value: string | undefined) {
  if (!value) {
    return "Missing";
  }

  try {
    return new URL(value).host;
  } catch {
    return "Configured, but not a valid URL";
  }
}

function formatDate(value: string | null | undefined) {
  if (!value) {
    return "Not available";
  }

  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(new Date(value));
}
