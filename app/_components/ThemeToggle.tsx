"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const themeKey = "ssb-sarthi-theme";
function getTheme(): Theme {
  if (typeof document === "undefined") {
    return "light";
  }

  const activeTheme = document.documentElement.dataset.theme;

  if (activeTheme === "dark" || activeTheme === "light") {
    return activeTheme;
  }

  let savedTheme: string | null = null;

  try {
    savedTheme = window.localStorage?.getItem(themeKey) ?? null;
  } catch {
    savedTheme = null;
  }

  if (savedTheme === "dark" || savedTheme === "light") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const [theme, setTheme] = useState<Theme>("light");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setTheme(getTheme());
      setIsMounted(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  const isDark = theme === "dark";

  function toggleTheme() {
    const nextTheme: Theme = isDark ? "light" : "dark";

    document.documentElement.dataset.theme = nextTheme;
    setTheme(nextTheme);
    setIsMounted(true);

    try {
      window.localStorage?.setItem(themeKey, nextTheme);
    } catch {
      // The theme still changes when storage is unavailable.
    }
  }

  const label = isMounted
    ? `Switch to ${isDark ? "light" : "dark"} theme`
    : "Toggle theme";

  return (
    <button
      type="button"
      suppressHydrationWarning
      aria-label={label}
      onClick={toggleTheme}
      className={`inline-flex min-h-10 items-center justify-center gap-2 rounded-lg border border-[var(--color-border-strong)] bg-[var(--color-panel)] px-3 text-xs font-bold text-[var(--color-ink-strong)] shadow-[var(--shadow-subtle)] transition hover:-translate-y-0.5 hover:bg-[var(--color-surface)] ${
        compact ? "w-10 px-0" : ""
      }`}
    >
      {isMounted && isDark ? <SunIcon /> : <MoonIcon />}
      {compact ? null : <span>{isMounted && isDark ? "Light" : "Dark"}</span>}
    </button>
  );
}

function MoonIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.8A8.5 8.5 0 1 1 11.2 3 6.5 6.5 0 0 0 21 12.8Z" />
    </svg>
  );
}

function SunIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="4" />
      <path strokeLinecap="round" d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
    </svg>
  );
}
