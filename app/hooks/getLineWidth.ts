export function getLineWidthFromElement(
  el?: Element | null,
): number | undefined {
  if (typeof window === "undefined") return undefined;
  const readEl = el ?? document.documentElement;
  const raw = getComputedStyle(readEl as Element).getPropertyValue(
    "--tree-line-width",
  );
  if (!raw || !raw.trim()) return undefined;
  const parsed = parseFloat(raw);
  return Number.isFinite(parsed) ? parsed : undefined;
}
