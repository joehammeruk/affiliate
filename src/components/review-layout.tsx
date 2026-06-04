import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TrialCTA } from "@/components/trial-cta";
import type { AffiliateLinkKey } from "@/config/affiliate-links";

export type RelatedLink = {
  href: string;
  label: string;
};

type ReviewLayoutProps = {
  children: React.ReactNode;
  ctaLink: AffiliateLinkKey;
  ctaHeading?: string;
  ctaBody?: string;
  ctaButtonLabel?: string;
  relatedLinks?: RelatedLink[];
};

export function ReviewLayout({
  children,
  ctaLink,
  ctaHeading,
  ctaBody,
  ctaButtonLabel,
  relatedLinks = [],
}: ReviewLayoutProps) {
  return (
    <>
      <div
        className="noise pointer-events-none fixed inset-0 z-30 opacity-40 mix-blend-overlay"
        aria-hidden="true"
      />
      <SiteHeader ctaLink={ctaLink} />
      <main className="relative pt-32">
        <article className="mx-auto max-w-3xl px-6 pb-12 pt-12 sm:pt-16">
          <div className="review-prose">{children}</div>
        </article>

        {relatedLinks.length > 0 ? (
          <nav
            className="mx-auto max-w-3xl border-t border-white/[0.06] px-6 py-10"
            aria-label="Related pages"
          >
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
              Keep reading
            </p>
            <ul className="mt-4 space-y-3">
              {relatedLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-emerald-400 transition-colors hover:text-emerald-300"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ) : null}

        <div className="mx-auto max-w-3xl px-6 pb-24">
          <TrialCTA
            link={ctaLink}
            heading={ctaHeading}
            body={ctaBody}
            buttonLabel={ctaButtonLabel}
          />
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
