import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://urbanease-community.grapnel-clue2s.chatgpt.site",
  ),
  title: {
    default: "UrbanEase | Smart Society Management Platform",
    template: "%s",
  },
  description:
    "Manage society bills, complaints, notices, emergency alerts, and community services through one secure resident and administrator platform.",
  applicationName: "UrbanEase",
  keywords: [
    "smart society management app",
    "housing society management software Pakistan",
    "resident management system",
    "digital society billing",
    "complaint management for housing societies",
    "society administration software",
    "residential community app",
    "UrbanEase",
  ],
  authors: [{ name: "UrbanEase" }],
  creator: "UrbanEase",
  openGraph: {
    type: "website",
    locale: "en_PK",
    siteName: "UrbanEase",
    title: "UrbanEase | Smarter Societies. Better Communities.",
    description:
      "One connected platform for society billing, complaints, notices, emergency support, and community services.",
    url: "/",
    images: [
      {
        url: "/og.png",
        width: 1680,
        height: 941,
        alt: "UrbanEase smart society platform shown on resident and administrator devices",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UrbanEase | Smarter Societies. Better Communities.",
    description:
      "One connected platform for modern residential society management.",
    images: ["/og.png"],
  },
  icons: {
    icon: "/images/urbanease-logo.png",
    shortcut: "/images/urbanease-logo.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0d2b40",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} antialiased`}>
        <a
          href="#main-content"
          className="fixed left-4 top-3 z-[100] -translate-y-24 rounded-lg bg-slate-950 px-4 py-2 text-sm font-bold text-white transition focus:translate-y-0"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
