import Link from "next/link";
import SignInForm from "./sign-in-form";

export const metadata = {
  title: "Sign in",
};

export default function SignInPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto grid w-full max-w-7xl gap-8 px-6 py-12 sm:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:px-12 lg:py-16">
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-[var(--color-green)]">
            SSB Sarthi account
          </p>
          <h1 className="mt-4 font-display text-4xl font-extrabold leading-tight text-[var(--color-ink-strong)] sm:text-5xl">
            Sign in to your preparation workspace.
          </h1>
          <p className="mt-5 max-w-xl text-base leading-8 text-[var(--color-muted)]">
            Create an account with email and password, continue with Google, or
            use a secure email link. Your dashboard keeps plans, OIR attempts,
            PPDT stories, centre checklists, and OLQ journal entries private to
            your account.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              ["Private data", "Protected by Supabase row-level security."],
              ["Fast login", "Password, Google OAuth, and email magic links."],
              ["Same workspace", "One place for practice and review."],
            ].map(([title, body]) => (
              <div key={title} className="mini-panel">
                <p className="text-sm font-semibold text-[var(--color-ink-strong)]">
                  {title}
                </p>
                <p className="mt-2 text-xs leading-5 text-[var(--color-muted)]">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:pt-8">
          <SignInForm />
          <p className="mt-5 text-center text-sm text-[var(--color-muted)]">
            New here?{" "}
            <Link href="/process" className="font-semibold text-[var(--color-blue)]">
              View the SSB process
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
