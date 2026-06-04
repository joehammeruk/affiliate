import Link from "next/link";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function LegalLayout({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <>
      <SiteHeader />
      <main className="pt-32 pb-16">
        <article className="mx-auto max-w-3xl px-6">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
            Legal
          </p>
          <h1 className="legal-prose-h1 mt-3">{title}</h1>
          <div className="legal-prose mt-10">{children}</div>
          <p className="mt-12 text-sm text-zinc-500">
            <Link href="/" className="font-medium text-emerald-400 hover:text-emerald-300">
              ← Back to home
            </Link>
          </p>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
