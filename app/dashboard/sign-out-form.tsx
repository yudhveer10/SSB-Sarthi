"use client";

import { useState } from "react";

export function SignOutForm() {
  const [isSigningOut, setIsSigningOut] = useState(false);

  return (
    <>
      <form
        action="/auth/signout"
        method="post"
        onSubmit={() => setIsSigningOut(true)}
        className="rounded-lg border border-[var(--color-border)] bg-white p-4 shadow-[0_1px_2px_rgba(13,27,47,0.04)]"
      >
        <button
          type="submit"
          disabled={isSigningOut}
          className="flex items-center gap-3 text-sm font-semibold text-[var(--color-ink-strong)] disabled:cursor-wait disabled:opacity-70"
        >
          {isSigningOut ? <SpinnerIcon /> : <SignOutIcon />}
          {isSigningOut ? "Logging you out..." : "Sign out"}
        </button>
      </form>

      {isSigningOut ? (
        <div
          role="status"
          aria-live="polite"
          className="fixed inset-0 z-[100] grid place-items-center bg-white/85 px-6 backdrop-blur-sm"
        >
          <div className="w-full max-w-sm rounded-lg border border-[var(--color-border)] bg-white p-6 text-center shadow-[var(--shadow-raised)]">
            <span className="mx-auto grid h-12 w-12 place-items-center rounded-lg bg-[var(--color-blue-soft)] text-[var(--color-blue)]">
              <SpinnerIcon className="h-6 w-6 animate-spin" />
            </span>
            <p className="mt-4 text-lg font-extrabold text-[var(--color-ink-strong)]">
              Logging you out
            </p>
            <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
              Clearing your session and taking you back to sign in.
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}

function SignOutIcon() {
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
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <path d="M16 17l5-5-5-5M21 12H9" />
    </svg>
  );
}

function SpinnerIcon({ className = "h-5 w-5 animate-spin" }: { className?: string }) {
  return (
    <svg aria-hidden="true" className={className} fill="none" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 0 1 8-8v4a4 4 0 0 0-4 4H4Z" />
    </svg>
  );
}
