"use client";

import { useEffect } from "react";
import Lenis from "lenis";

let activeScroller: Lenis | null = null;

export function scrollToSection(section: HTMLElement) {
  if (activeScroller) {
    // Refresh the page height before the first navigation (fonts/content may just have loaded).
    activeScroller.resize();
    activeScroller.scrollTo(section, { duration: 1.05 });
  } else {
    section.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
      block: "start",
    });
  }
}

export function SmoothScroll() {
  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lenis: Lenis | null = null;
    let animationFrame = 0;

    const stop = () => {
      window.cancelAnimationFrame(animationFrame);
      activeScroller = null;
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

      activeScroller = lenis;

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
