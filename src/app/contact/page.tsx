import type { Metadata } from "next";
import { ContactPage } from "@/features/contact/contact-page";

export const metadata: Metadata = {
  title: "Contact | RestroScale",
  description:
    "Get in touch with RestroScale to discuss paperwork, tech, marketing, or production for your food & beverage (F&B) brand.",
};

export default function Page() {
  return <ContactPage />;
}
