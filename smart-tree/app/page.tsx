"use client";

import { useEffect } from "react";
import "./tree.scss";

export default function Home() {
  useEffect(() => {
    function updateLineWidth() {
      const dpr =
        typeof window !== "undefined" ? window.devicePixelRatio || 1 : 1;
      // Set the raw devicePixelRatio so CSS fallbacks can use it if needed
      document.documentElement.style.setProperty("--dpi", String(dpr));

      // Read the base CSS value for --tree-line-width (e.g. "2px")
      const rootStyles = getComputedStyle(document.documentElement);
      const baseRaw = rootStyles.getPropertyValue("--tree-line-width") || "2px";
      const base = parseFloat(baseRaw) || 2;

      // Compute an effective CSS pixel width that maps to an integer number
      // of device pixels to avoid subpixel hairlines when zooming.
      // Use ceil so we don't accidentally drop a device pixel and create
      // a 1px gap compared to adjacent borders.
      const effective = Math.ceil(base * dpr) / dpr;

      document.documentElement.style.setProperty(
        "--_tree-line-width",
        `${effective}px`,
      );
    }

    updateLineWidth();
    window.addEventListener("resize", updateLineWidth);
    window.addEventListener("orientationchange", updateLineWidth);
    return () => {
      window.removeEventListener("resize", updateLineWidth);
      window.removeEventListener("orientationchange", updateLineWidth);
    };
  }, []);

  return (
    <div className="tree-demo">
      <figure>
        <figcaption>
          Example DOM structure diagram with rounded connectors
        </figcaption>
        <div className="tree">
          <ul>
            <li>
              <code>html</code>
              <ul>
                <li>
                  <code>head</code>
                  <ul>
                    <li>
                      <code>title</code>
                    </li>
                  </ul>
                </li>
                <li>
                  <code>body</code>
                  <ul>
                    <li>
                      <code>header</code>
                      <ul>
                        <li>
                          <code>h1</code>
                        </li>
                        <li>
                          <code>p</code>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <code>nav</code>
                      <ul>
                        <li>
                          <code>a</code>
                        </li>
                        <li>
                          <code>a</code>
                        </li>
                        <li>
                          <code>a</code>
                        </li>
                        <li>
                          <code>a</code>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <code>main</code>
                      <ul>
                        <li>
                          <code>h1</code>
                        </li>
                        <li>
                          <code>article</code>
                          <ul>
                            <li>
                              <code>h2</code>
                            </li>
                            <li>
                              <code>p</code>
                            </li>
                            <li>
                              <code>p</code>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <code>aside</code>
                      <ul>
                        <li>
                          <code>h2</code>
                        </li>
                        <li>
                          <code>p</code>
                        </li>
                        <li>
                          <code>p</code>
                          <ul>
                            <li>
                              <code>a</code>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <code>footer</code>
                      <ul>
                        <li>
                          <code>nav</code>
                          <ul>
                            <li>
                              <code>a</code>
                            </li>
                            <li>
                              <code>a</code>
                              <ol>
                                <li>
                                  <code>bpiojwaegpoijaweg</code>
                                </li>
                              </ol>
                            </li>
                            <li>
                              <code>a</code>

                              <ol>
                                <li>
                                  <code>a</code>
                                </li>
                                <li>
                                  <code>b</code>
                                  <ul>
                                    <li>
                                      <code>a</code>
                                    </li>
                                    <li>
                                      <code>a</code>
                                    </li>
                                    <li>
                                      <code>a</code>
                                    </li>
                                    <li>
                                      <code>a</code>
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <code>c</code>
                                </li>
                              </ol>
                            </li>
                            <li>
                              <code>a</code>
                              <ol>
                                <li>
                                  <code>a</code>
                                </li>
                                <li>
                                  <code>b</code>
                                </li>
                                <li>
                                  <code>c</code>
                                </li>
                              </ol>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </figure>
    </div>
  );
}
