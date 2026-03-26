"use client";

import React, { useRef } from "react";
import useDpiLineWidth from "./hooks/useDpiLineWidth";
import "./tree.scss";

type SmartTreeProps = {
  children?: React.ReactNode;
  loading?: React.ReactNode;
  lineWidth: number;
};

export default function SmartTree({
  children,
  loading,
  lineWidth,
}: SmartTreeProps) {
  const treeRef = useRef<HTMLDivElement | null>(null);
  const { isLoading } = useDpiLineWidth(lineWidth, treeRef);

  return (
    <div className="tree" ref={treeRef}>
      {isLoading ? (loading ?? null) : (children ?? null)}
    </div>
  );
}
