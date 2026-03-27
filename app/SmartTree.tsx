"use client";

import React, { useRef } from "react";
import useLineWidthDpi from "./hooks/useLineWidthDpi";
import "./tree.scss";

type SmartTreeProps = {
  children?: React.ReactNode;
  loading?: React.ReactNode;
  lineWidth?: number;
  lineColor?: string;
  cardColor?: string;
  cardBorderRadius?: number;
  lineBorderRadius?: number;
  seperator?: number;
  padding?: number;
  lineBorderStyle?: "solid" | "dashed" | "dotted";
};

export default function SmartTree({
  children,
  loading,
  lineWidth = 2,
  lineColor = "#fff",
  cardColor = "#fff",
  cardBorderRadius = 8,
  lineBorderRadius = 8,
  seperator = 20,
  padding = 20,
  lineBorderStyle = "solid",
}: SmartTreeProps) {
  const treeRef = useRef<HTMLDivElement | null>(null);
  const { isLoading, lineWidthDpi } = useLineWidthDpi(lineWidth, treeRef);

  return (
    <div
      className="tree"
      ref={treeRef}
      style={
        {
          "--tree-line-color": lineColor,
          "--tree-card-color": cardColor,
          "--tree-card-border-radius": `${cardBorderRadius}px`,
          "--tree-line-border-radius": `${lineBorderRadius}px`,
          "--tree-seperator": `${seperator}px`,
          "--tree-padding": `${padding}px`,
          "--tree-line-width": `${lineWidthDpi}px`,
          "--tree-line-border-style": lineBorderStyle,
        } as React.CSSProperties
      }
    >
      {isLoading ? (loading ?? null) : (children ?? null)}
    </div>
  );
}
