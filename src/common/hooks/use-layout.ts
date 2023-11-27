"use client";

import { atom, useAtom } from "jotai";
import { LAYOUT_OPTIONS } from "@/config/enums";

// 1. set initial atom for fihdash layout
const fihdashLayoutAtom = atom(
  typeof window !== "undefined"
    ? localStorage.getItem("fihdash-layout")
    : LAYOUT_OPTIONS.HYDROGEN
);

const fihdashLayoutAtomWithPersistence = atom(
  (get) => get(fihdashLayoutAtom),
  (get, set, newStorage: any) => {
    set(fihdashLayoutAtom, newStorage);
    localStorage.setItem("fihdash-layout", newStorage);
  }
);

// 2. useLayout hook to check which layout is available
export function useLayout() {
  const [layout, setLayout] = useAtom(fihdashLayoutAtomWithPersistence);
  return {
    layout: layout === null ? LAYOUT_OPTIONS.HYDROGEN : layout,
    setLayout,
  };
}
