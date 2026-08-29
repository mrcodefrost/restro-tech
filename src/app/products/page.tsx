import type { Metadata } from "next";
import { ProductsPage } from "@/features/products/products-page";

export const metadata: Metadata = {
  title: "Products | RestroScale",
  description:
    "Queue and reservations, feedback and analytics, loyalty, and franchise complaint tracking, standalone SaaS products built from real franchise work.",
};

export default function Page() {
  return <ProductsPage />;
}
