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
      const dpr = window.devicePixelRatio || 1;
      const el = targetRef?.current ?? null;
      const base = el
        ? parseFloat(
            getComputedStyle(el).getPropertyValue("--tree-line-width"),
          ) || 2
        : 2;

      const effective = Math.ceil(base * dpr) / dpr;
      setEffectiveWidth(effective);

      if (el) el.style.setProperty("--_tree-line-width", `${effective}px`);
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
