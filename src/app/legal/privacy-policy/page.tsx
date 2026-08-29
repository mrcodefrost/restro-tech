import type { Metadata } from "next";
import { PrivacyPolicyPage } from "@/features/legal/privacy-policy-page";

export const metadata: Metadata = {
  title: "Privacy Policy | RestroScale",
};

export default function Page() {
  return <PrivacyPolicyPage />;
}
