# UrbanEase marketing website

Production-oriented marketing website for UrbanEase, a mobile and web-based
smart residential society management platform for communities in Pakistan.

## Included

- Conversion-focused home page with resident and administrator product previews
- Detailed feature catalogue for all UrbanEase modules
- B2B page for society administrators with onboarding, permissions, FAQ, and demo form
- About, contact, portal gateway, privacy, and terms pages
- Resident, administrator, and service-provider login placeholders
- Responsive navigation, custom loading/error/404 states, sitemap, robots, and structured data
- Validated demo form with a Next.js API route
- Open Graph and X social preview metadata

## Stack

- Next.js 16 with the App Router and strict TypeScript
- Vinext/Vite for the Cloudflare-compatible Sites build
- Tailwind CSS 4
- Lucide React icons
- Framer Motion for restrained entrance and screen transitions
- React Hook Form and Zod for form state and validation

## Local setup

Requirements:

- Node.js 22.13 or newer
- npm

Install and start the development server:

```bash
npm install
npm run dev
```

Open the local URL printed by the development server.

## Validation

Run the production build:

```bash
npm run build
```

Run lint separately:

```bash
npm run lint
```

## Demo form

`POST /api/demo` validates all submitted fields and returns a success response
with a demo reference. Before commercial launch, connect this route to the
chosen CRM or email provider (for example Resend) and add server-side rate
limiting and spam controls. No credentials are required for the current demo
behavior.

## Deployment

The project is configured for the Codex Sites hosting workflow and uses the
Cloudflare-compatible Vinext output. It can also be adapted for Vercel by using
the standard Next.js build/runtime and removing the Sites-specific Vite worker
configuration.

For a commercial deployment:

1. Replace placeholder phone and social links.
2. Confirm the public production domain in metadata, sitemap, and robots.
3. Connect the demo route to the selected CRM/email service.
4. Connect portal login screens to the production UrbanEase authentication API.
5. Review the privacy policy, terms, retention periods, and society agreements with appropriate counsel.

## Project structure

```text
app/                  Routes, metadata, API, and global states
components/           Layout, sections, forms, previews, and reusable UI
lib/                  Content, utilities, and Zod validation
public/               Static brand and social assets
```
