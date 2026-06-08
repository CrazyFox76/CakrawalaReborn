"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="group fixed bottom-6 left-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-900/10 ring-1 ring-zinc-200 transition-all hover:bg-primary hover:text-white hover:shadow-lg hover:ring-primary sm:bottom-8 sm:left-8"
      aria-label="Back to top"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
