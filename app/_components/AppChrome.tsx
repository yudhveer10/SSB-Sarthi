"use client";

import { usePathname } from "next/navigation";
import Footer from "./Footer";
import LiveUpdates from "./LiveUpdates";
import NavBar from "./NavBar";

export default function AppChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");

  if (isDashboard) {
    return <>{children}</>;
  }

  return (
    <>
      <NavBar />
      <div className="flex-1 pt-[var(--nav-height)]">
        <LiveUpdates />
        {children}
      </div>
      <Footer />
    </>
  );
}
