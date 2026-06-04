export type ConsentChoice = "accepted" | "rejected";

export const CONSENT_COOKIE_NAME = "hostadvance_consent";
export const CONSENT_STORAGE_KEY = "hostadvance-cookie-consent";
const CONSENT_MAX_AGE_SECONDS = 60 * 60 * 24 * 365;

export function parseConsentCookie(cookieHeader: string | null): ConsentChoice | null {
  if (!cookieHeader) return null;
  const match = cookieHeader.match(
    new RegExp(`(?:^|;\\s*)${CONSENT_COOKIE_NAME}=(accepted|rejected)(?:;|$)`),
  );
  const value = match?.[1];
  if (value === "accepted" || value === "rejected") return value;
  return null;
}

export function getStoredConsent(): ConsentChoice | null {
  if (typeof window === "undefined") return null;
  const stored = localStorage.getItem(CONSENT_STORAGE_KEY);
  if (stored === "accepted" || stored === "rejected") return stored;
  return parseConsentCookie(document.cookie);
}

export function setStoredConsent(choice: ConsentChoice): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(CONSENT_STORAGE_KEY, choice);
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${CONSENT_COOKIE_NAME}=${choice}; Path=/; Max-Age=${CONSENT_MAX_AGE_SECONDS}; SameSite=Lax${secure}`;
}

export function hasAnalyticsConsent(): boolean {
  return getStoredConsent() === "accepted";
}
