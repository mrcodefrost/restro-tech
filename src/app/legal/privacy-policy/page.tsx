import type { Metadata } from "next";
import { PrivacyPolicyPage } from "@/features/legal/privacy-policy-page";

export const metadata: Metadata = {
  title: "Privacy Policy | Restrovate",
};

export default function Page() {
  return <PrivacyPolicyPage />;
}
