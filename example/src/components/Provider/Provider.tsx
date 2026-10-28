"use client";

import { BuenCursorProvider, Cursor } from "@bueno-dev/cursor";
import { ReactNode } from "react";

import "@bueno-dev/cursor/dist/base.css";

type ProviderProps = {
  children: ReactNode;
};

export function Provider({ children }: ProviderProps) {
  return (
    <BuenCursorProvider>
      {children}
      <Cursor className={"buen-cursor-mod"} />
    </BuenCursorProvider>
  );
}
