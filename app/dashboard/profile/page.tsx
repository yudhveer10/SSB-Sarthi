import { redirect } from "next/navigation";
import { createClient } from "../../_lib/supabase/server";
import SetupForm from "../setup-form";

export const metadata = {
  title: "Profile Setup",
};

export const dynamic = "force-dynamic";

export default async function ProfileSetupPage() {
  const supabase = await createClient();
  const { data: claimsData, error } = await supabase.auth.getClaims();

  if (error || !claimsData?.claims?.sub) {
    redirect("/signin");
  }

  const userId = claimsData.claims.sub;
  const [{ data: profile }, { data: plan }] = await Promise.all([
    supabase.from("profiles").select("*").eq("id", userId).maybeSingle(),
    supabase
      .from("prep_plans")
      .select("*")
      .eq("user_id", userId)
      .order("created_at", { ascending: false })
      .limit(1)
      .maybeSingle(),
  ]);

  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-8 sm:px-8">
      <div className="mb-6">
        <p className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--color-green)]">
          Profile setup
        </p>
        <h1 className="mt-3 font-display text-3xl font-extrabold leading-tight text-[var(--color-ink-strong)] sm:text-4xl">
          Candidate details and preferences.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--color-muted)]">
          Keep board, entry, and reporting details here. The dashboard stays clean
          while this page becomes the place for setup changes.
        </p>
      </div>

      <SetupForm
        userId={userId}
        defaultName={profile?.full_name ?? ""}
        defaultEntry={plan?.target_entry ?? "CDS"}
        defaultBoard={plan?.target_board ?? ""}
        defaultReportingDate={plan?.reporting_date ?? ""}
        planId={plan?.id ?? null}
      />
    </section>
  );
}
