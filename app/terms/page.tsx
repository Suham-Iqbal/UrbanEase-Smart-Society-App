import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/legal-page";

export const metadata: Metadata = {
  title: "Terms of Service | UrbanEase",
  description:
    "Review the general terms governing use of the UrbanEase website, resident application, and society management portal.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Terms of service"
      updated="27 July 2026"
      intro="These general terms describe acceptable use of UrbanEase. A production deployment should also include the signed agreement and policies applicable to each participating society."
    >
      <h2>1. Platform purpose</h2>
      <p>
        UrbanEase provides digital tools for residential society communication,
        billing records, complaints, notices, emergency alerts, services, and
        related administration. Availability may vary by society and user role.
      </p>

      <h2>2. Account responsibilities</h2>
      <ul>
        <li>Provide accurate registration and profile information.</li>
        <li>Keep login credentials private and use the account only for authorized purposes.</li>
        <li>Notify the relevant society team if access appears incorrect or compromised.</li>
        <li>Follow society rules and applicable laws when using community features.</li>
      </ul>

      <h2>3. Acceptable use</h2>
      <p>
        Users must not misuse emergency features, impersonate another person,
        attempt unauthorized access, interfere with platform operation, upload
        unlawful content, or use community tools to harass other users.
      </p>

      <h2>4. Society administration</h2>
      <p>
        Authorized society teams are responsible for the accuracy of published
        notices, bills, resident verification decisions, complaint updates, and
        configured service information within their workspace.
      </p>

      <h2>5. Emergency and service information</h2>
      <p>
        UrbanEase can help transmit alerts and display service information, but
        it does not replace official emergency services or guarantee the
        availability, quality, or outcome of a third-party service.
      </p>

      <h2>6. Availability and changes</h2>
      <p>
        Features may be updated to improve security, reliability, usability, or
        legal compliance. Planned maintenance and material service changes
        should be communicated through appropriate channels.
      </p>

      <h2>7. Contact</h2>
      <p>
        Questions about these terms can be directed to{" "}
        <a href="mailto:sasifysolutions2@gmail.com">sasifysolutions2@gmail.com</a>.
      </p>
    </LegalPage>
  );
}
