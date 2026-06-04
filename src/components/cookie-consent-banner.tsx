"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getStoredConsent, setStoredConsent, type ConsentChoice } from "@/lib/consent";

function notifyConsentChange() {
  window.dispatchEvent(new Event("hostadvance-consent-change"));
}

export function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(getStoredConsent() === null);
  }, []);

  const choose = (choice: ConsentChoice) => {
    setStoredConsent(choice);
    setVisible(false);
    notifyConsentChange();
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie preferences"
      aria-live="polite"
      className="fixed inset-x-0 bottom-0 z-[44] border-t border-white/[0.08] bg-zinc-950/95 px-4 py-4 backdrop-blur-xl sm:px-6"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-zinc-400">
          We use a small first-party cookie to remember your choice. Optional, cookieless
          Vercel Analytics and Speed Insights load only if you accept.{" "}
          <Link href="/cookie-policy" className="font-medium text-emerald-400 hover:text-emerald-300">
            Cookie Policy
          </Link>
          .
        </p>
        <div className="flex shrink-0 flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => choose("rejected")}
            className="min-w-[5.5rem] rounded-md border border-zinc-600 bg-zinc-900 px-5 py-2.5 text-sm font-semibold text-zinc-100 transition-colors hover:border-zinc-500 hover:bg-zinc-800"
          >
            Reject
          </button>
          <button
            type="button"
            onClick={() => choose("accepted")}
            className="min-w-[5.5rem] rounded-md bg-[#00E58F] px-5 py-2.5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-[#00c97d]"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
