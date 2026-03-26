"use client";

import { useState } from "react";
import SmartTree from "./SmartTree";

export default function Home() {
  const [lineWidth, setLineWidth] = useState<number>(2);
  const [lineColor, setLineColor] = useState<string>("#fff");
  const [cardColor, setCardColor] = useState<string>("#fff");
  const [cardBorderRadius, setCardBorderRadius] = useState<number>(8);
  const [lineBorderRadius, setLineBorderRadius] = useState<number>(8);
  const [seperator, setSeperator] = useState<number>(20);
  const [padding, setPadding] = useState<number>(20);

  return (
    <>
      <div className="text-white grid gap-8 col-span-1 justify-center">
        <h1 className="text-3xl text-center">
          Example DOM structure diagram with rounded connectors
        </h1>
        <div className="flex gap-5 flex-wrap justify-center">
          <div className="overflow-auto bg-white/10 p-2 rounded-3xl">
            <table>
              <thead>
                <tr>
                  <th className="p-2 text-3xl" colSpan={2}>
                    Card
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="p-2">
                    <label htmlFor="card-color">color:</label>
                  </th>
                  <td className="p-2">
                    <input
                      type="color"
                      value={cardColor}
                      onChange={(e) => setCardColor(e.target.value)}
                      name="card-color"
                    />
                  </td>
                </tr>
                <tr>
                  <th className="p-2">
                    <label htmlFor="card-border-radius">Border radius:</label>
                  </th>
                  <td className="p-2">
                    <input
                      type="range"
                      min={0}
                      max={50}
                      value={cardBorderRadius}
                      onChange={(e) =>
                        setCardBorderRadius(Number(e.target.value))
                      }
                      name="card-border-radius"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="overflow-auto bg-white/10 p-2 rounded-3xl">
            <table>
              <thead>
                <tr>
                  <th className="p-2 text-3xl" colSpan={2}>
                    Line
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="p-2">
                    <label htmlFor="line-color">Line color:</label>
                  </th>
                  <td className="p-2">
                    <input
                      type="color"
                      value={lineColor}
                      onChange={(e) => setLineColor(e.target.value)}
                      name="line-color"
                    />
                  </td>
                </tr>
                <tr>
                  <th className="p-2">
                    <label htmlFor="line-width">Width:</label>
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
                      }}
                      name="line-width"
                    />
                  </td>
                </tr>
                <tr>
                  <th className="p-2">
                    <label htmlFor="line-border-radius">Border radius:</label>
                  </th>
                  <td className="p-2">
                    <input
                      type="range"
                      min={0}
                      max={50}
                      value={lineBorderRadius}
                      onChange={(e) =>
                        setLineBorderRadius(Number(e.target.value))
                      }
                      name="line-border-radius"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="overflow-auto bg-white/10 p-2 rounded-3xl">
            <table>
              <thead>
                <tr>
                  <th className="p-2 text-3xl" colSpan={2}>
                    Tree
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="p-2">
                    <label htmlFor="tree-padding">Padding:</label>
                  </th>
                  <td className="p-2">
                    <input
                      type="range"
                      min={0}
                      max={100}
                      value={padding}
                      onChange={(e) => setPadding(Number(e.target.value))}
                      name="tree-padding"
                    />
                  </td>
                </tr>
                <tr>
                  <th className="p-2">
                    <label htmlFor="tree-seperator">Seperator:</label>
                  </th>
                  <td className="p-2">
                    <input
                      type="range"
                      min={0}
                      max={100}
                      value={seperator}
                      onChange={(e) => setSeperator(Number(e.target.value))}
                      name="tree-seperator"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <SmartTree
        lineWidth={lineWidth}
        lineColor={lineColor}
        loading={<div className="tree-loading">Loading...</div>}
        cardColor={cardColor}
        cardBorderRadius={cardBorderRadius}
        lineBorderRadius={lineBorderRadius}
        seperator={seperator}
        padding={padding}
      >
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
      </SmartTree>
    </>
  );
}
