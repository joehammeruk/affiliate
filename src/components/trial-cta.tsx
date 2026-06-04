import { AffiliateArrow, AffiliateLink } from "@/components/affiliate-link";
import type { AffiliateLinkKey } from "@/config/affiliate-links";

type TrialCTAProps = {
  link: AffiliateLinkKey;
  heading?: string;
  body?: string;
  buttonLabel?: string;
  className?: string;
};

export function TrialCTA({
  link,
  heading = "Try it free for 14 days",
  body = "Start on SiteGround's official signup page. Trial terms and pricing are set by SiteGround.",
  buttonLabel = "Start 14-day free trial",
  className = "",
}: TrialCTAProps) {
  return (
    <section
      className={`rounded-2xl border border-emerald-500/25 bg-gradient-to-b from-emerald-500/10 to-zinc-900/40 px-6 py-10 text-center sm:px-10 ${className}`.trim()}
      aria-label="Free trial offer"
    >
      <h2 className="font-display text-2xl font-bold text-white">{heading}</h2>
      <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-zinc-400">
        {body}
      </p>
      <div className="mt-8">
        <AffiliateLink link={link} variant="primary" className="group w-full sm:w-auto">
          {buttonLabel}
          <AffiliateArrow />
        </AffiliateLink>
      </div>
    </section>
  );
}
