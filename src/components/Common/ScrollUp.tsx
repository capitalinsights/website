"use client";

import { useEffect } from "react";

export default function ScrollUp() {
  useEffect(() => {
    try {
      window.document.scrollingElement?.scrollTo(0, 0);
    } catch {
      // Safe fallback for browsers/environments where scrollTo is restricted
    }
  }, []);

  return null;
}
