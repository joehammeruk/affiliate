import { LEGAL_LAST_UPDATED } from "@/config/legal";

export function LegalLastUpdated() {
  return (
    <p className="mt-2 text-sm text-zinc-500">
      <strong className="text-zinc-400">Last updated:</strong> {LEGAL_LAST_UPDATED}
    </p>
  );
}
