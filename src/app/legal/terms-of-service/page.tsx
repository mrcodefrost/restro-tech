import type { Metadata } from "next";
import { TermsOfServicePage } from "@/features/legal/terms-of-service-page";

export const metadata: Metadata = {
  title: "Terms of Service | RestroScale",
};

export default function Page() {
  return <TermsOfServicePage />;
}
