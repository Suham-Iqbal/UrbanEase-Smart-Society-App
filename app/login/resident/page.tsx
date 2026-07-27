import type { Metadata } from "next";
import { LoginPlaceholder } from "@/components/auth/login-placeholder";

export const metadata: Metadata = {
  title: "Resident Login | UrbanEase",
  robots: { index: false, follow: false },
};

export default function ResidentLoginPage() {
  return (
    <LoginPlaceholder
      role="Resident"
      accent="green"
      description="Access bills, complaints, notices, emergency support, community chat, local services, and your resident profile."
    />
  );
}
