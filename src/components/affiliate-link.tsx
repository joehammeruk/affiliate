import { AFFILIATE_LINKS, type AffiliateLinkKey } from "@/config/affiliate-links";

const variants = {
  primary:
    "inline-flex items-center justify-center gap-2 rounded-md bg-[#00E58F] px-8 py-3.5 text-sm font-semibold text-zinc-950 shadow-[0_0_40px_-10px_rgba(0,229,143,0.55)] transition-all duration-300 hover:bg-[#00c97d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00E58F]",
  secondary:
    "inline-flex items-center justify-center gap-2 rounded-full border border-zinc-700/90 bg-zinc-900/60 px-7 py-3.5 text-sm font-semibold text-zinc-100 backdrop-blur-sm transition-all duration-300 hover:border-zinc-500 hover:bg-zinc-800/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400",
  card: "inline-flex w-full items-center justify-center gap-2 rounded-md bg-zinc-100 px-4 py-3 text-sm font-semibold text-zinc-900 transition-all duration-300 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-300",
  compact:
    "inline-flex items-center justify-center gap-1.5 rounded-md bg-[#00E58F] px-5 py-2 text-xs font-bold uppercase tracking-wide text-zinc-950 transition-colors hover:bg-[#00c97d]",
  inline:
    "font-semibold text-white underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-white/80",
  row:
    "flex w-full items-center justify-between gap-4 rounded-2xl border border-white/[0.06] bg-zinc-900/40 px-5 py-4 text-left transition-all duration-300 hover:border-white/12 hover:bg-zinc-900/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-400",
} as const;

type AffiliateLinkProps = {
  link: AffiliateLinkKey;
  variant?: keyof typeof variants;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ComponentProps<"a">, "href" | "rel" | "children">;

export function AffiliateLink({
  link,
  variant = "primary",
  className = "",
  children,
  ...props
}: AffiliateLinkProps) {
  return (
    <a
      href={AFFILIATE_LINKS[link]}
      target="_blank"
      rel="sponsored noopener noreferrer"
      className={`${variants[variant]} ${className}`.trim()}
      {...props}
    >
      {children}
    </a>
  );
}

export function AffiliateArrow() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-0.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0-5 5m5-5H6" />
    </svg>
  );
}
