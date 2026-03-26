import { useEffect, useState } from "react";
import type { RefObject } from "react";

export default function useDpiLineWidth(
  lineWidth: number,
  targetRef?: RefObject<HTMLElement | null> | null,
) {
  const [applied, setApplied] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    function update() {
      const dpr = window.devicePixelRatio || 1;
      const effective = Math.ceil(lineWidth * dpr) / dpr;

      const targetEl = (targetRef?.current as HTMLElement) ?? null;
      if (targetEl) {
        targetEl.style.setProperty("--tree-line-width", `${effective}px`);
        // Also set internal variable used by SCSS calculations
        targetEl.style.setProperty("--_tree-line-width", `${effective}px`);
        setApplied(true);
      }
    }

    update();

    const onResize = () => update();
    window.addEventListener("resize", onResize);
    window.addEventListener("orientationchange", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("orientationchange", onResize);
    };
  }, [lineWidth, targetRef]);

  // Expose only a small public surface: whether the DPI-optimized value
  // has been applied to the target element yet. The hook itself writes
  // the CSS variables on the element; callers don't need the raw value.
  return { isLoading: !applied };
}
