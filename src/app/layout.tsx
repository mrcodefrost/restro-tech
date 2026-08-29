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
  title: "RestroScale | Paperwork, Tech, Marketing & Production for F&B Brands",
  description:
    "Paperwork, tech, marketing, and production for food & beverage (F&B) brands at every stage of the franchise journey, plus standalone products for queueing, feedback, loyalty, and complaint tracking.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${jakarta.variable}`}>
      <body className="flex min-h-full flex-col bg-white font-sans text-[#1c1c1e]">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
