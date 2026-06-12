"use client";

import { useState } from "react";
import { createClient } from "../_lib/supabase/client";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState<"google" | "email" | null>(null);

  async function signInWithGoogle() {
    setLoading("google");
    setMessage("");

    const supabase = createClient();
    const origin = window.location.origin;
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${origin}/auth/callback?next=/dashboard`,
      },
    });

    if (error) {
      setMessage(error.message);
      setLoading(null);
    }
  }

  async function signInWithEmail(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading("email");
    setMessage("");

    const supabase = createClient();
    const origin = window.location.origin;
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${origin}/auth/callback?next=/dashboard`,
      },
    });

    setLoading(null);
    setMessage(error ? error.message : "Check your inbox for the secure sign-in link.");
  }

  return (
    <div className="rounded-lg border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-card)]">
      <button
        type="button"
        onClick={signInWithGoogle}
        disabled={loading !== null}
        className="flex min-h-12 w-full items-center justify-center gap-3 rounded-lg border border-[var(--color-border-strong)] bg-white px-4 text-sm font-bold text-[var(--color-ink-strong)] transition hover:bg-[var(--color-surface)] disabled:cursor-wait disabled:opacity-70"
      >
        <GoogleIcon />
        {loading === "google" ? "Opening Google..." : "Continue with Google"}
      </button>

      <div className="my-5 flex items-center gap-3 text-xs font-semibold uppercase text-[var(--color-muted)]">
        <span className="h-px flex-1 bg-[var(--color-border)]" />
        or
        <span className="h-px flex-1 bg-[var(--color-border)]" />
      </div>

      <form onSubmit={signInWithEmail} className="space-y-3">
        <label className="block text-sm font-semibold text-[var(--color-ink-strong)]" htmlFor="email">
          Email address
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          className="min-h-12 w-full rounded-lg border border-[var(--color-border-strong)] bg-white px-4 text-sm text-[var(--color-ink-strong)] outline-none transition placeholder:text-[var(--color-muted-soft)] focus:border-[var(--color-blue)]"
        />
        <button
          type="submit"
          disabled={loading !== null}
          className="btn-primary w-full justify-center"
        >
          {loading === "email" ? "Sending link..." : "Send magic link"}
        </button>
      </form>

      {message ? (
        <p className="mt-4 rounded-lg bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-muted)]">
          {message}
        </p>
      ) : null}
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09Z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23Z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.1A6.6 6.6 0 0 1 5.5 12c0-.73.12-1.43.34-2.1V7.06H2.18A10.96 10.96 0 0 0 1 12c0 1.78.43 3.47 1.18 4.94l3.66-2.84Z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06L5.84 9.9C6.71 7.31 9.14 5.38 12 5.38Z"
      />
    </svg>
  );
}
