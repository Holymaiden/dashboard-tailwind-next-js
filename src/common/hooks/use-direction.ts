"use client";

import { atom, useAtom } from "jotai";

// 1. set initial atom for fihdash direction
const fihdashDirectionAtom = atom(
  typeof window !== "undefined" ? localStorage.getItem("iso-direction") : "ltr"
);

const fihdashDirectionAtomWithPersistence = atom(
  (get) => get(fihdashDirectionAtom),
  (get, set, newStorage: any) => {
    set(fihdashDirectionAtom, newStorage);
    localStorage.setItem("iso-direction", newStorage);
  }
);

// 2. useDirection hook to check which direction is available
export function useDirection() {
  const [direction, setDirection] = useAtom(
    fihdashDirectionAtomWithPersistence
  );

  return {
    direction: direction === null ? "ltr" : direction,
    setDirection,
  };
}
