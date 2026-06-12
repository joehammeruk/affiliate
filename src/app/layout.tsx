import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import { ConditionalAnalytics } from "@/components/conditional-analytics";
import { CookieConsentBanner } from "@/components/cookie-consent-banner";
import { DisclosureBar } from "@/components/disclosure-bar";
import { SiteJsonLd } from "@/components/site-json-ld";
import { SITE_NAME, SITE_URL } from "@/config/site";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "HostAdvance — SiteGround AI Tool Reviews & Free Trials",
    template: "%s | HostAdvance",
  },
  description:
    "Independent reviews of SiteGround's AI tools — Coderick AI, AI Studio, and the AI Website & Ecommerce Builder — with 14-day free trials.",
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME, url: SITE_URL }],
  publisher: SITE_NAME,
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    siteName: SITE_NAME,
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — SiteGround AI tool reviews`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${dmSans.variable}`}>
      <body className="font-sans">
        <SiteJsonLd />
        <DisclosureBar />
        {children}
        <CookieConsentBanner />
        <ConditionalAnalytics />
      </body>
    </html>
  );
}
