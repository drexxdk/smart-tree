import { useEffect, useState } from "react";
import type { RefObject } from "react";

export default function useLineWidthDpi(
  lineWidth: number,
  targetRef?: RefObject<HTMLElement | null> | null,
) {
  // Initialize to the provided `lineWidth` so SSR and client initial HTML match.
  const [lineWidthDpi, setDpiOptimizedLineWidth] = useState<number>(() => lineWidth);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (typeof window === "undefined") return;

    function update() {
      const dpr = window.devicePixelRatio || 1;
      const effective = Math.ceil(lineWidth * dpr) / dpr;
      setDpiOptimizedLineWidth(effective);

      // mark as loaded when the target element is present; the caller
      // will set the CSS variables via inline `style` using the returned value.
      const targetEl = (targetRef?.current as HTMLElement) ?? null;
      if (targetEl) setIsLoading(false);
      else setIsLoading(true);
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

  // Return a small object: whether the hook has loaded styles (isLoading)
  // and the DPI-optimized line width to be used in inline styles.
  return { isLoading, lineWidthDpi };
}
