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
            <code>Emma Johnson</code>
            <ul>
              <li>
                <code>Liam A. Carter</code>
                <ul>
                  <li>
                    <code>Olivia Marie Thompson</code>
                  </li>
                </ul>
              </li>
              <li>
                <code>Noah Alexander Smith</code>
                <ul>
                  <li>
                    <code>Sophia Lee Martinez</code>
                    <ul>
                      <li>
                          <code>Isabella Grace Nguyen</code>
                      </li>
                      <li>
                          <code>Mason J. Reynolds</code>
                      </li>
                    </ul>
                  </li>
                  <li>
                      <code>Lucas Benjamin Ortiz</code>
                    <ul>
                      <li>
                          <code>Ava Rose Kim</code>
                      </li>
                      <li>
                          <code>Ethan Michael Brown</code>
                      </li>
                      <li>
                          <code>Mia Isabella Davis</code>
                      </li>
                      <li>
                          <code>Jackson Thomas Wilson</code>
                      </li>
                    </ul>
                  </li>
                  <li>
                      <code>Charlotte Anne Lopez</code>
                    <ul>
                      <li>
                          <code>Henry Oliver Clark</code>
                      </li>
                      <li>
                          <code>Amelia Victoria Wright</code>
                        <ul>
                          <li>
                              <code>Daniel Lee Parker</code>
                          </li>
                          <li>
                              <code>Harper Noelle Moore</code>
                          </li>
                          <li>
                              <code>Benjamin Cole Rivera</code>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                      <code>Evelyn Ruth Hughes</code>
                    <ul>
                      <li>
                          <code>Samuel Patrick Young</code>
                      </li>
                      <li>
                          <code>Chloe Elizabeth Scott</code>
                      </li>
                      <li>
                          <code>Gabriel Isaac Foster</code>
                        <ul>
                          <li>
                              <code>Natalie Joy Bennett</code>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                      <code>Matthew Scott Hall</code>
                    <ul>
                      <li>
                          <code>Victoria Lynn Adams</code>
                        <ul>
                          <li>
                              <code>Joshua David King</code>
                          </li>
                          <li>
                              <code>Olivia Jean Peters</code>
                              <ul>
                                <li>
                                  <code>Margaret L. O'Connor</code>
                                </li>
                              </ul>
                          </li>
                          <li>
                              <code>Ryan Thomas Blake</code>
                              <ul>
                                <li>
                                  <code>Zoe Camille Brooks</code>
                                </li>
                                <li>
                                  <code>Anthony R. Silva</code>
                                  <ul>
                                    <li>
                                      <code>Sophia Lynn Barrett</code>
                                    </li>
                                    <li>
                                      <code>William H. Price</code>
                                    </li>
                                    <li>
                                      <code>Grace Emily Ford</code>
                                      <ul>
                                        <li>
                                          <code>Jacob Aiden Knight</code>
                                        </li>
                                      </ul>
                                    </li>
                                    <li>
                                      <code>Nora Quinn Ellis</code>
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <code>Leah Morgan Ortiz</code>
                                </li>
                              </ul>
                          </li>
                          <li>
                              <code>Eric Daniel Hayes</code>
                              <ul>
                                <li>
                                  <code>Anna K. Reed</code>
                                </li>
                                <li>
                                  <code>Peter James Cole</code>
                                </li>
                                <li>
                                  <code>Ruby Claire Stone</code>
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
