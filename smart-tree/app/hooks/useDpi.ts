import { useEffect, useState } from "react";
import type { RefObject } from "react";

export default function useDpi(
  targetRef?: RefObject<HTMLElement | null> | null,
) {
  const [effectiveWidth, setEffectiveWidth] = useState<number>(() => {
    const dpr =
      typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
    const base = 2;
    return Math.ceil(base * dpr) / dpr;
  });

  useEffect(() => {
    function updateLineWidth() {
      const dpr =
        typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
      // keep the raw DPR available as a CSS var for fallbacks
      document.documentElement.style.setProperty("--dpi", String(dpr));

      const rootStyles = getComputedStyle(document.documentElement);
      const baseRaw = rootStyles.getPropertyValue("--tree-line-width") || "2px";
      const base = parseFloat(baseRaw) || 2;

      const effective = Math.ceil(base * dpr) / dpr;
      setEffectiveWidth(effective);

      // If a target element is provided, set the effective width there.
      const el = targetRef?.current ?? null;
      if (el) {
        el.style.setProperty("--_tree-line-width", `${effective}px`);
      }
    }

    updateLineWidth();
    window.addEventListener("resize", updateLineWidth);
    window.addEventListener("orientationchange", updateLineWidth);
    return () => {
      window.removeEventListener("resize", updateLineWidth);
      window.removeEventListener("orientationchange", updateLineWidth);
    };
  }, [targetRef]);

  return effectiveWidth;
}
