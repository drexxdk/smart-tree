import { useEffect, useState } from "react";
import type { RefObject } from "react";
import { getLineWidthFromElement } from "./getLineWidth";

export default function useDpi(
  targetRef?: RefObject<HTMLElement | null> | null,
) {
  const [effectiveWidth, setEffectiveWidth] = useState<number>(() => {
    const dpr =
      typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
    const base = 2;
    return Math.ceil(base * dpr) / dpr;
  });
  const [applied, setApplied] = useState<boolean>(false);

  useEffect(() => {
    let lastBaseRaw = "";
    let lastDpr =
      typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;

    function updateLineWidth() {
      const dpr = window.devicePixelRatio || 1;
      const base = getLineWidthFromElement(
        targetRef?.current as Element | null,
      );

      // If the CSS source variable is missing, skip enhancement and warn once.
      if (base === undefined) {
        // Avoid spamming the console on every resize — warn only once per mount.
        if (lastBaseRaw !== "MISSING") {
          console.warn(
            "Required CSS variable --tree-line-width not found on target element or document root. Skipping JS enhancement.",
          );
          lastBaseRaw = "MISSING";
        }
        return;
      }

      // update when either the source value or the DPR changes
      if (String(base) === lastBaseRaw && dpr === lastDpr && lastBaseRaw !== "")
        return;
      lastBaseRaw = String(base);
      lastDpr = dpr;

      const effective = Math.ceil(base * dpr) / dpr;
      setEffectiveWidth(effective);

      const targetEl = targetRef?.current ?? null;
      if (targetEl) {
        targetEl.style.setProperty("--_tree-line-width", `${effective}px`);
        setApplied(true);
      }
    }

    updateLineWidth();

    const onResize = () => updateLineWidth();
    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);

    const observedEl = (targetRef?.current as HTMLElement) ?? null;
    const observer = observedEl
      ? new MutationObserver(() => {
          const currentBase = getLineWidthFromElement(observedEl as Element);
          // If the variable was added/changed and is now defined, re-run update.
          if (currentBase !== undefined && String(currentBase) !== lastBaseRaw)
            updateLineWidth();
        })
      : null;
    if (observer && observedEl)
      observer.observe(observedEl as Node, {
        attributes: true,
        attributeFilter: ["style"],
      });

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
      observer?.disconnect();
    };
  }, [targetRef]);

  return [effectiveWidth, applied] as const;
}
