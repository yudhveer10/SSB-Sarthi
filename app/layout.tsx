import type { Metadata } from "next";
import NavBar from "./_components/NavBar";
import Footer from "./_components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "SSB Sarthi",
    template: "%s | SSB Sarthi",
  },
  description:
    "A structured SaaS workspace for SSB aspirants to plan, practice, review, and arrive prepared.",
  keywords: [
    "SSB",
    "SSB interview",
    "Service Selection Board",
    "NDA",
    "CDS",
    "AFCAT",
    "Indian Army",
    "Indian Air Force",
    "Indian Navy",
  ],
  openGraph: {
    title: "SSB Sarthi",
    description:
      "Plan SSB preparation, practice screening tasks, track OLQs, and manage centre readiness in one workspace.",
    type: "website",
    siteName: "SSB Sarthi",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="flex min-h-dvh flex-col">
        <NavBar />
        <div className="flex-1 pt-[var(--nav-height)]">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
