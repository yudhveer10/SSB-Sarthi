"use client";

import { useState } from "react";
import { createClient } from "../_lib/supabase/client";

export default function SignInForm() {
  const [mode, setMode] = useState<"signup" | "signin">("signup");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState<"email" | "password" | null>(null);

  async function signInWithPassword(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading("password");
    setMessage("");

    const supabase = createClient();
    const { data, error } =
      mode === "signup"
        ? await supabase.auth.signUp({
            email,
            password,
            options: {
              emailRedirectTo: `${window.location.origin}/auth/callback?next=/dashboard`,
              data: {
                full_name: fullName,
              },
            },
          })
        : await supabase.auth.signInWithPassword({
            email,
            password,
          });

    setLoading(null);
    if (error) {
      setMessage(
        error.message.includes("Invalid login credentials")
          ? "Invalid credentials. If you previously used magic link or Google, use Set or reset password below once."
          : error.message,
      );
      return;
    }

    if (mode === "signup") {
      if (data.session) {
        window.location.href = "/dashboard";
        return;
      }

      setMessage("Account created. Check your email to confirm it, then sign in here.");
      return;
    }

    window.location.href = "/dashboard";
  }

  async function signInWithMagicLink() {
    if (!email) {
      setMessage("Enter your email first, then request a magic link.");
      return;
    }

    setLoading("email");
    setMessage("");

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback?next=/dashboard`,
      },
    });

    setLoading(null);
    setMessage(error ? error.message : "Check your inbox for the secure sign-in link.");
  }

  async function sendPasswordReset() {
    if (!email) {
      setMessage("Enter your email first, then request a password setup link.");
      return;
    }

    setLoading("email");
    setMessage("");

    const supabase = createClient();
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/callback?next=/auth/update-password`,
    });

    setLoading(null);
    setMessage(
      error
        ? error.message
        : "Password setup link sent. Open it from your email, then set a new password.",
    );
  }

  return (
    <div className="rounded-lg border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-card)]">
      <div className="mb-5 grid grid-cols-2 rounded-lg bg-[var(--color-surface)] p-1">
        {[
          ["signup", "Create account"],
          ["signin", "Sign in"],
        ].map(([value, label]) => (
          <button
            key={value}
            type="button"
            onClick={() => {
              setMode(value as "signup" | "signin");
              setMessage("");
            }}
            className={`min-h-10 rounded-md text-sm font-bold transition ${
              mode === value
                ? "bg-white text-[var(--color-ink-strong)] shadow-sm"
                : "text-[var(--color-muted)] hover:text-[var(--color-ink-strong)]"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      <p className="mb-4 rounded-lg bg-[var(--color-blue-soft)] px-4 py-3 text-sm font-medium leading-6 text-[var(--color-ink)]">
        Free beta access is open. Create an account with your email and password to start using the dashboard.
      </p>

      <form onSubmit={signInWithPassword} className="space-y-3">
        {mode === "signup" ? (
          <>
            <label className="block text-sm font-semibold text-[var(--color-ink-strong)]" htmlFor="full-name">
              Full name
            </label>
            <input
              id="full-name"
              type="text"
              required
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              placeholder="Yudhveer Panwar"
              className="min-h-12 w-full rounded-lg border border-[var(--color-border-strong)] bg-white px-4 text-sm text-[var(--color-ink-strong)] outline-none transition placeholder:text-[var(--color-muted-soft)] focus:border-[var(--color-blue)]"
            />
          </>
        ) : null}

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

        <label className="block text-sm font-semibold text-[var(--color-ink-strong)]" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          type="password"
          required
          minLength={8}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Minimum 8 characters"
          className="min-h-12 w-full rounded-lg border border-[var(--color-border-strong)] bg-white px-4 text-sm text-[var(--color-ink-strong)] outline-none transition placeholder:text-[var(--color-muted-soft)] focus:border-[var(--color-blue)]"
        />

        <button
          type="submit"
          disabled={loading !== null}
          className="btn-primary w-full justify-center"
        >
          {loading === "password"
            ? mode === "signup"
              ? "Creating account..."
              : "Signing in..."
            : mode === "signup"
              ? "Create account"
              : "Sign in"}
        </button>
      </form>

      <button
        type="button"
        disabled={loading !== null}
        onClick={signInWithMagicLink}
        className="mt-3 w-full rounded-lg px-4 py-3 text-sm font-bold text-[var(--color-blue)] transition hover:bg-[var(--color-blue-soft)] disabled:cursor-wait disabled:opacity-70"
      >
        {loading === "email" ? "Sending magic link..." : "Email me a magic link instead"}
      </button>

      <button
        type="button"
        disabled={loading !== null}
        onClick={sendPasswordReset}
        className="w-full rounded-lg px-4 py-3 text-sm font-bold text-[var(--color-green)] transition hover:bg-[var(--color-green-soft)] disabled:cursor-wait disabled:opacity-70"
      >
        Set or reset password
      </button>

      {message ? (
        <p className="mt-4 rounded-lg bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-muted)]">
          {message}
        </p>
      ) : null}
    </div>
  );
}
