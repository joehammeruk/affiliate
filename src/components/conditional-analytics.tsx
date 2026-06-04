"use client";

import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useEffect, useState } from "react";
import { getStoredConsent } from "@/lib/consent";

export function ConditionalAnalytics() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(getStoredConsent() === "accepted");

    const onConsent = () => {
      setEnabled(getStoredConsent() === "accepted");
    };

    window.addEventListener("hostadvance-consent-change", onConsent);
    return () => window.removeEventListener("hostadvance-consent-change", onConsent);
  }, []);

  if (!enabled) return null;

  return (
    <>
      <Analytics />
      <SpeedInsights />
    </>
  );
}
