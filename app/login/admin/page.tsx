import type { Metadata } from "next";
import { LoginPlaceholder } from "@/components/auth/login-placeholder";

export const metadata: Metadata = {
  title: "Administrator Login | UrbanEase",
  robots: { index: false, follow: false },
};

export default function AdminLoginPage() {
  return (
    <LoginPlaceholder
      role="Administrator"
      accent="blue"
      description="Manage residents, billing, complaints, notices, emergency alerts, service providers, and society operations."
    />
  );
}
