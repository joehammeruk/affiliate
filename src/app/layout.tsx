import type { Metadata } from "next";
import { Bricolage_Grotesque, DM_Sans } from "next/font/google";
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
  title: "Best AI Tools for Builders — 14-Day Free Trials",
  description:
    "Coderick AI, AI Ecommerce Builder, and SiteGround AI Studio — compare and start your 14-day free trial. Affiliate partner offers.",
  openGraph: {
    title: "Best AI Tools for Builders — 14-Day Free Trials",
    description:
      "Ship sites, stores, and WordPress faster with AI. Every tool includes a 14-day free trial.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bricolage.variable} ${dmSans.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
