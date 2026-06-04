export function SiteFooter() {
  return (
    <footer className="mt-4 border-t border-zinc-800/60 px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-[13px] text-zinc-500 md:flex-row">
        <p>© {new Date().getFullYear()} HostAdvance. All rights reserved.</p>
        <p className="max-w-lg text-center md:text-right">
          <strong className="text-zinc-400">Affiliate disclosure:</strong> We are
          an independent SiteGround affiliate partner. We may earn a commission when
          you sign up through our links, at no extra cost to you. We are not
          SiteGround. Trial terms and pricing are set by SiteGround and may change.
        </p>
      </div>
    </footer>
  );
}
