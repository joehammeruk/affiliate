import Link from "next/link";

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/cookie-policy", label: "Cookie Policy" },
  { href: "/terms", label: "Terms of Use" },
  { href: "/affiliate-disclosure", label: "Affiliate Disclosure" },
] as const;

export function SiteFooter() {
  return (
    <footer className="mt-4 border-t border-zinc-800/60 px-6 py-8">
      <div className="mx-auto max-w-6xl space-y-6">
        <nav
          aria-label="Legal"
          className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-zinc-500 md:justify-start"
        >
          {legalLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-zinc-300"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col items-center justify-between gap-4 text-[13px] text-zinc-500 md:flex-row">
          <p>© {new Date().getFullYear()} HostAdvance. All rights reserved.</p>
          <p className="max-w-lg text-center md:text-right">
            <strong className="text-zinc-400">Affiliate disclosure:</strong> We are an
            independent SiteGround affiliate partner. We may earn a commission when you sign up
            through our links, at no extra cost to you. We are not SiteGround.{" "}
            <Link href="/affiliate-disclosure" className="text-emerald-400 hover:text-emerald-300">
              Full disclosure
            </Link>
            . Trial terms and pricing are set by SiteGround and may change.
          </p>
        </div>
      </div>
    </footer>
  );
}
