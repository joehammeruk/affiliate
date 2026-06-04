import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
import { DisclosureBar } from "@/components/disclosure-bar";
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
  title: "Best AI Tools for Builders — 14-Day Free Trials",
  description:
    "Coderick AI, AI Ecommerce Builder, and SiteGround AI Studio — compare and start your 14-day free trial. Affiliate partner offers.",
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
        <DisclosureBar />
        {children}
      </body>
    </html>
  );
}
