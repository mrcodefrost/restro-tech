import { Suspense } from "react";
import type { Metadata } from "next";
import { ContactPage } from "@/features/contact/contact-page";

export const metadata: Metadata = {
  title: "Contact | Restrovate",
  description:
    "Get in touch with Restrovate to discuss paperwork, tech, marketing, or production for your food & beverage (F&B) brand.",
};

export default function Page() {
  return (
    <Suspense fallback={null}>
      <ContactPage />
    </Suspense>
  );
}
