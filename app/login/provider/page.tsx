import type { Metadata } from "next";
import { LoginPlaceholder } from "@/components/auth/login-placeholder";

export const metadata: Metadata = {
  title: "Service Provider Login | UrbanEase",
  robots: { index: false, follow: false },
};

export default function ProviderLoginPage() {
  return (
    <LoginPlaceholder
      role="Service provider"
      accent="violet"
      description="Manage your professional profile, listed services, availability, and enquiries from verified residents."
    />
  );
}
