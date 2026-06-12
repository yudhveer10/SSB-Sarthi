"use client";

import { useState } from "react";
import { createClient } from "../../_lib/supabase/client";

export default function UpdatePasswordForm() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function updatePassword(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("");

    if (password.length < 8) {
      setMessage("Password must be at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    setLoading(true);
    const supabase = createClient();
    const { error } = await supabase.auth.updateUser({ password });
    setLoading(false);

    if (error) {
      setMessage(error.message);
      return;
    }

    setMessage("Password updated. Redirecting to your dashboard...");
    window.location.href = "/dashboard";
  }

  return (
    <form
      onSubmit={updatePassword}
      className="rounded-lg border border-[var(--color-border)] bg-white p-5 shadow-[var(--shadow-card)]"
    >
      <label className="block text-sm font-semibold text-[var(--color-ink-strong)]" htmlFor="new-password">
        New password
      </label>
      <input
        id="new-password"
        type="password"
        required
        minLength={8}
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Minimum 8 characters"
        className="mt-2 min-h-12 w-full rounded-lg border border-[var(--color-border-strong)] bg-white px-4 text-sm text-[var(--color-ink-strong)] outline-none transition placeholder:text-[var(--color-muted-soft)] focus:border-[var(--color-blue)]"
      />

      <label className="mt-4 block text-sm font-semibold text-[var(--color-ink-strong)]" htmlFor="confirm-password">
        Confirm password
      </label>
      <input
        id="confirm-password"
        type="password"
        required
        minLength={8}
        value={confirmPassword}
        onChange={(event) => setConfirmPassword(event.target.value)}
        placeholder="Repeat password"
        className="mt-2 min-h-12 w-full rounded-lg border border-[var(--color-border-strong)] bg-white px-4 text-sm text-[var(--color-ink-strong)] outline-none transition placeholder:text-[var(--color-muted-soft)] focus:border-[var(--color-blue)]"
      />

      <button type="submit" disabled={loading} className="btn-primary mt-5 w-full justify-center">
        {loading ? "Updating password..." : "Update password"}
      </button>

      {message ? (
        <p className="mt-4 rounded-lg bg-[var(--color-surface)] px-4 py-3 text-sm text-[var(--color-muted)]">
          {message}
        </p>
      ) : null}
    </form>
  );
}
