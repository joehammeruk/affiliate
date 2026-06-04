import type { AffiliateLinkKey } from "@/config/affiliate-links";

export type ProductTheme = {
  card: string;
  border: string;
  hoverBorder: string;
  label: string;
  labelColor: string;
  trialStrip: string;
  iconWrap: string;
  glow: string;
};

export type Product = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  highlights: string[];
  linkKey: AffiliateLinkKey;
  icon: "code" | "cart" | "wordpress";
  theme: ProductTheme;
  featured?: boolean;
};

export const PRODUCTS: Product[] = [
  {
    id: "coderick-ai",
    name: "Coderick AI",
    tagline: "Chat-to-live-website workflow for developers",
    description:
      "Describe your vision in plain language and watch production-ready pages come to life. Built for developers who want speed without sacrificing control.",
    highlights: ["Live preview", "Export-ready code", "Dev workflows"],
    linkKey: "coderickAi",
    icon: "code",
    theme: {
      card: "bg-[#0D1518]",
      border: "border-[#1A303A]",
      hoverBorder: "hover:border-[#264350]",
      label: "Developer-first",
      labelColor: "text-cyan-600",
      trialStrip: "border-[#1A303A] bg-[#0A0F12]",
      iconWrap: "border-cyan-500/25 bg-cyan-950/30 text-cyan-300",
      glow: "hover:shadow-[0_24px_48px_-12px_rgba(34,211,238,0.15)]",
    },
  },
  {
    id: "ai-ecommerce-builder",
    name: "AI Ecommerce Builder",
    tagline: "Drag-and-drop with native AI image & content generation",
    description:
      "Launch storefronts in hours, not weeks. Generate product copy, hero images, and layouts with AI—then refine everything visually.",
    highlights: ["AI images", "One-click sections", "Payments ready"],
    linkKey: "aiEcommerceBuilder",
    icon: "cart",
    featured: true,
    theme: {
      card: "bg-[#130E1A]",
      border: "border-[#2B1B3D]",
      hoverBorder: "hover:border-[#3D2855]",
      label: "Store-ready",
      labelColor: "text-purple-500",
      trialStrip: "border-[#2B1B3D] bg-[#0E0A13]",
      iconWrap: "border-violet-500/25 bg-violet-950/30 text-violet-300",
      glow: "hover:shadow-[0_28px_56px_-12px_rgba(167,139,250,0.22)]",
    },
  },
  {
    id: "siteground-ai-studio",
    name: "SiteGround AI Studio",
    tagline: "Smart AI agents for automating WordPress management",
    description:
      "Offload updates, security checks, and content workflows to intelligent agents tuned for WordPress—so you can focus on growth.",
    highlights: ["Agent automations", "WP-native", "Managed hosting"],
    linkKey: "sitegroundAiStudio",
    icon: "wordpress",
    theme: {
      card: "bg-[#0E1712]",
      border: "border-[#173A25]",
      hoverBorder: "hover:border-[#235336]",
      label: "WordPress",
      labelColor: "text-emerald-600",
      trialStrip: "border-[#173A25] bg-[#0A110D]",
      iconWrap: "border-emerald-500/25 bg-emerald-950/30 text-emerald-300",
      glow: "hover:shadow-[0_24px_48px_-12px_rgba(52,211,153,0.15)]",
    },
  },
];
