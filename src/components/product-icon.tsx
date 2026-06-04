import type { Product } from "@/config/products";

const paths: Record<Product["icon"], React.ReactNode> = {
  code: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    />
  ),
  cart: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 3h2l.4 2M7 13h10l3-8H6.4M7 13L5.4 5M7 13l-2 9m12-9l2 9M10 21h4"
    />
  ),
  wordpress: (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    />
  ),
};

export function ProductIcon({
  icon,
  className = "border-white/10 bg-white/5 text-zinc-200",
}: {
  icon: Product["icon"];
  className?: string;
}) {
  return (
    <span
      className={`flex h-11 w-11 items-center justify-center rounded-xl border ${className}`}
      aria-hidden="true"
    >
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        {paths[icon]}
      </svg>
    </span>
  );
}
