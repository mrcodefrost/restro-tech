import type { Metadata } from "next";
import { ServicesPage } from "@/features/services/services-page";

export const metadata: Metadata = {
  title: "Services | RestroScale",
  description:
    "Paperwork, tech, marketing, and production for food & beverage (F&B) brands at every stage of the franchise journey.",
};

export default function Page() {
  return <ServicesPage />;
}
