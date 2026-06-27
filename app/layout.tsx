import type { Metadata } from "next";
import Script from "next/script";
import AppChrome from "./_components/AppChrome";
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
  icons: {
    icon: [{ url: "/icon.png", type: "image/png" }],
    shortcut: [{ url: "/icon.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="flex min-h-dvh flex-col">
        <Script
          id="ssb-sarthi-theme"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `try{var t=null;try{t=localStorage.getItem("ssb-sarthi-theme")}catch(e){}if(!t){t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}document.documentElement.dataset.theme=t}catch(e){}`,
          }}
        />
        <AppChrome>
          {children}
        </AppChrome>
      </body>
    </html>
  );
}
