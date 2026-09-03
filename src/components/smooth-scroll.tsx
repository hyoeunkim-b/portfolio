"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export function SmoothScroll() {
  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lenis: Lenis | null = null;
    let animationFrame = 0;

    const stop = () => {
      window.cancelAnimationFrame(animationFrame);
      lenis?.destroy();
      lenis = null;
    };

    const start = () => {
      stop();
      if (motionQuery.matches) return;

      lenis = new Lenis({
        duration: 1.05,
        smoothWheel: true,
        wheelMultiplier: 0.9,
      });

      const update = (time: number) => {
        lenis?.raf(time);
        animationFrame = window.requestAnimationFrame(update);
      };

      animationFrame = window.requestAnimationFrame(update);
    };

    start();
    motionQuery.addEventListener("change", start);

    return () => {
      motionQuery.removeEventListener("change", start);
      stop();
    };
  }, []);

  return null;
}
