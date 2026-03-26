"use client";

import React, { useRef } from "react";
import useDpiLineWidth from "./hooks/useDpiLineWidth";
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
}: SmartTreeProps) {
  const treeRef = useRef<HTMLDivElement | null>(null);
  const { isLoading } = useDpiLineWidth(lineWidth, treeRef);

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
        } as React.CSSProperties
      }
    >
      {isLoading ? (loading ?? null) : (children ?? null)}
    </div>
  );
}
