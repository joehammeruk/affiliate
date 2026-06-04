export function DisclosureBar() {
  return (
    <aside
      role="note"
      aria-label="Affiliate disclosure"
      className="relative z-50 border-b border-zinc-800/60 bg-zinc-900/95 px-4 py-2 text-center text-[11px] leading-snug text-zinc-400 backdrop-blur-sm sm:text-xs"
    >
      <strong className="font-semibold text-zinc-300">Affiliate disclosure:</strong>{" "}
      We are an independent SiteGround affiliate partner and may earn a commission
      if you sign up through our links, at no extra cost to you. We are not
      SiteGround.
    </aside>
  );
}
