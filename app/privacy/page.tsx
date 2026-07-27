import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Privacy & Data Policy | UrbanEase",
  description:
    "Learn how the UrbanEase website and platform approach account, enquiry, resident, billing, complaint, and operational information.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy and data policy"
      updated="27 July 2026"
      intro="This policy explains the categories of information UrbanEase may process, why that information is needed, and the controls available to users and authorized society teams."
    >
      <h2>1. Scope</h2>
      <p>
        This policy applies to the UrbanEase marketing website, resident
        application, administrator portal, and service-provider experience.
        Final production terms may vary by society configuration and service
        agreement.
      </p>

      <h2>2. Information we may collect</h2>
      <ul>
        <li>Account information such as name, email address, phone number, and password hash.</li>
        <li>Resident and property details submitted for society verification.</li>
        <li>Billing, payment-status, complaint, notice, and service records.</li>
        <li>Community content, emergency requests, and location details provided through a feature.</li>
        <li>Website enquiry information submitted through the demo form.</li>
        <li>Technical information needed for security, diagnostics, and service operation.</li>
      </ul>

      <h2>3. How information is used</h2>
      <p>
        Information is used to provide requested features, verify account
        access, maintain society records, support authorized management work,
        respond to enquiries, improve reliability, and protect the platform
        from misuse.
      </p>

      <h2>4. Role-based access</h2>
      <p>
        Access is intended to follow user roles. Residents, service providers,
        society administrators, and super administrators should only receive
        permissions relevant to their authorized responsibilities.
      </p>

      <h2 id="data-policy">5. Data handling and retention</h2>
      <p>
        Operational information should be retained only for as long as needed
        for the relevant service, legal, security, or society-management
        purpose. Production retention periods should be documented in the
        applicable society agreement and platform configuration.
      </p>

      <h2>6. Security practices</h2>
      <p>
        UrbanEase is designed to use password hashing, authenticated sessions,
        role-based authorization, input validation, protected endpoints,
        rate-limiting controls, and environment-based secret management. No
        internet service can promise absolute security.
      </p>

      <h2>7. Contact</h2>
      <p>
        Questions about privacy or data handling can be directed to{" "}
        <a href="mailto:sasifysolutions2@gmail.com">sasifysolutions2@gmail.com</a>.
      </p>
    </LegalPage>
  );
}
