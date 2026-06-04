import Link from "next/link";
import { AffiliateArrow, AffiliateLink } from "@/components/affiliate-link";
import type { AffiliateLinkKey } from "@/config/affiliate-links";
import { SITE_NAME } from "@/config/site";

export function SiteHeader({
  ctaLink = "primary",
}: {
  ctaLink?: AffiliateLinkKey;
}) {
  return (
    <header className="fixed inset-x-0 top-9 z-40 border-b border-zinc-800/60 bg-[#09090B]/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link
          href="/"
          className="font-display text-sm font-semibold tracking-tight text-white hover:text-zinc-200"
        >
          {SITE_NAME}
        </Link>
        <nav aria-label="Primary" className="flex items-center gap-4">
          <Link
            href="/#offers"
            className="hidden text-sm font-medium text-zinc-400 transition-colors hover:text-white sm:inline"
          >
            Tools
          </Link>
          <AffiliateLink link={ctaLink} variant="compact" className="hidden sm:inline-flex">
            Free trial
            <AffiliateArrow />
          </AffiliateLink>
        </nav>
      </div>
    </header>
  );
}
