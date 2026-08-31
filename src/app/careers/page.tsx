import type { Metadata } from "next";
import { CareersPage } from "@/features/careers/careers-page";

export const metadata: Metadata = {
  title: "Careers | Restrovate",
  description:
    "Open Delhi-based roles at Restrovate across technology, production, and implementation for food and beverage brands.",
};

export default function Page() {
  return <CareersPage />;
}
