"use client";

import { useEffect, useState } from "react";

export function useWindowScroll() {
  const [scroll, setScroll] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function onScroll() {
      setScroll({ x: window.scrollX, y: window.scrollY });
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return scroll;
}
