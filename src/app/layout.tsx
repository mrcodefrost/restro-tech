import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { SiteShell } from "@/features/shared/components/site-shell";
import "./globals.css";

export const metadata: Metadata = {
  title: "Restro Tech | Restaurant Chain Digital Commerce Agency",
  description:
    "Custom ordering, menu, rewards, and integration systems for restaurant and cafe franchise brands scaling across regions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const textureImage = `url("${basePath}/assets/restaurant-sketch-texture.png")`;

  return (
    <html lang="en" className="h-full antialiased">
      <body
        className="flex min-h-full flex-col"
        style={
          {
            "--sketch-texture-image": textureImage,
          } as CSSProperties
        }
      >
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
