const scrollLinkClass =
  "inline-flex w-full items-center justify-center gap-2 rounded-md border border-zinc-700 bg-transparent px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-zinc-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-500 sm:w-auto";

export function ScrollLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a href={href} className={`${scrollLinkClass} ${className}`.trim()}>
      {children}
    </a>
  );
}
