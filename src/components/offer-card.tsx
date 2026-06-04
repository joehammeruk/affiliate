import Link from "next/link";
import { AffiliateArrow, AffiliateLink } from "@/components/affiliate-link";
import { ProductIcon } from "@/components/product-icon";
import type { Product } from "@/config/products";

export function OfferCard({ product }: { product: Product }) {
  const { theme } = product;

  return (
    <article
      className={`group relative flex h-full flex-col rounded-xl border p-8 transition-all duration-300 ${theme.card} ${theme.border} ${theme.hoverBorder} ${theme.glow}`}
    >
      {product.featured ? (
        <p className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full border border-[#00E58F]/50 bg-[#00E58F] px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-zinc-950">
          Most popular
        </p>
      ) : null}

      <p className={`text-[10px] font-bold uppercase tracking-widest ${theme.labelColor}`}>
        {theme.label}
      </p>

      <div className="mt-4 flex items-start justify-between gap-4">
        <ProductIcon icon={product.icon} className={theme.iconWrap} />
      </div>

      <h3 className="font-display mt-5 text-[22px] font-bold text-white">
        {product.name}
      </h3>
      <p className="mt-2 text-sm font-medium text-zinc-300">{product.tagline}</p>
      <p className="mt-4 grow text-sm leading-relaxed text-zinc-400">
        {product.description}
      </p>

      <ul
        className="mt-6 flex flex-wrap gap-2"
        aria-label={`${product.name} highlights`}
      >
        {product.highlights.map((item) => (
          <li
            key={item}
            className={`rounded-md border px-2.5 py-1 text-xs text-zinc-400 ${theme.trialStrip}`}
          >
            {item}
          </li>
        ))}
      </ul>

      <Link
        href={product.reviewPath}
        className="mt-6 text-sm font-medium text-emerald-400 transition-colors hover:text-emerald-300"
      >
        Read our review →
      </Link>

      <div className="mt-6 flex flex-col gap-3">
        <p
          className={`rounded-md border py-2.5 text-center text-[10px] font-bold uppercase tracking-widest text-emerald-500/90 ${theme.trialStrip}`}
        >
          14-Day Free Trial
        </p>
        <AffiliateLink
          link={product.linkKey}
          variant="card"
          className="group"
          aria-label={`Try ${product.name} free — 14-day trial`}
        >
          Try {product.name} free
          <AffiliateArrow />
        </AffiliateLink>
      </div>
    </article>
  );
}
