import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { SiteShell } from "@/features/shared/components/site-shell";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: "Restrovate | Paperwork, Tech, Marketing & Production for F&B Brands",
  description:
    "Paperwork, tech, marketing, and production for food & beverage (F&B) brands at every stage of the franchise journey, plus standalone products for queueing, feedback, loyalty, and complaint tracking.",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full scroll-smooth antialiased ${jakarta.variable}`}>
      <body className="flex min-h-full flex-col bg-white font-sans text-[#1c1c1e]">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
