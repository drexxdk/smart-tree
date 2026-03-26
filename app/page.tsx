"use client";

import { useRef, useState } from "react";
import "./tree.scss";
import useDpi from "./hooks/useDpi";
import { getLineWidthFromElement } from "./hooks/getLineWidth";

export default function Home() {
  const [lineWidth, setLineWidth] = useState<number>(() => {
    if (typeof window === "undefined") return 2;
    const maybe = getLineWidthFromElement(
      document.querySelector(".tree") ?? document.documentElement,
    );
    return typeof maybe === "number" ? maybe : 2;
  });
  const treeRef = useRef<HTMLDivElement | null>(null);
  const [, dpiApplied] = useDpi(treeRef);

  // No mount-time setState: CSS remains the initial source-of-truth.

  return (
    <>
      <div className="p-20 text-white grid gap-3 col-span-1">
        <h1 className="text-3xl">
          Example DOM structure diagram with rounded connectors
        </h1>
        <div className="overflow-auto">
          <table>
            <tbody>
              <tr>
                <th className="p-2">
                  <label htmlFor="line-width">Line width:</label>
                </th>
                <td className="p-2">
                  <input
                    type="range"
                    min={1}
                    max={20}
                    value={lineWidth}
                    onChange={(e) => {
                      const v = Number(e.target.value);
                      setLineWidth(v);
                      const el =
                        treeRef.current ?? document.querySelector(".tree");
                      if (el)
                        (el as HTMLElement).style.setProperty(
                          "--tree-line-width",
                          `${v}px`,
                        );
                    }}
                    name="line-width"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="tree" ref={treeRef}>
        {!dpiApplied ? (
          <div className="tree-loading">Loading...</div>
        ) : (
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
                              <ul>
                                <li>
                                  <code>bpiojwaegpoijaweg</code>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <code>a</code>
                              <ul>
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
                                      <ul>
                                        <li>
                                          <code>a</code>
                                        </li>
                                      </ul>
                                    </li>
                                    <li>
                                      <code>a</code>
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <code>c</code>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <code>a</code>
                              <ul>
                                <li>
                                  <code>a</code>
                                </li>
                                <li>
                                  <code>b</code>
                                </li>
                                <li>
                                  <code>c</code>
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
            </li>
          </ul>
        )}
      </div>
    </>
  );
}
