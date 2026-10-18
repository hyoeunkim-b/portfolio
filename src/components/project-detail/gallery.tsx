"use client";

import { useRef, useState, type ReactNode } from "react";
import styles from "./gallery.module.css";

export function ProjectGallery({ children, count, label, layout }: { children: ReactNode; count: number; label: string; layout: string }) {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  function select(index: number) {
    const element = track.current;
    const slide = element?.children[index] as HTMLElement | undefined;
    if (!element || !slide) return;
    element.scrollTo({ left: index === 0 ? 0 : slide.offsetLeft, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }
  return <div className={styles.galleryWrap}>
    <div ref={track} className={`${styles.gallery} ${styles[layout] ?? ""} ${count > 1 ? styles.slides : ""}`} role="group" aria-label={label} data-lenis-prevent-touch onScroll={() => {
      const element = track.current;
      if (!element || element.scrollWidth <= element.clientWidth) return;
      const maxScroll = element.scrollWidth - element.clientWidth;
      const distances = Array.from(element.children, (child, index) => Math.abs(Math.min(index === 0 ? 0 : (child as HTMLElement).offsetLeft, maxScroll) - element.scrollLeft));
      const index = distances.indexOf(Math.min(...distances));
      setActive(index);
    }} onKeyDown={event => {
      if (window.innerWidth >= 768 || !["ArrowLeft", "ArrowRight"].includes(event.key) || (event.target as HTMLElement).closest("dialog")) return;
      event.preventDefault();
      select(Math.max(0, Math.min(count - 1, active + (event.key === "ArrowRight" ? 1 : -1))));
    }}>{children}</div>
    {count > 1 && <div className={styles.pagination} aria-label={`${label} 이미지 선택`}>
      {Array.from({ length: count }, (_, index) => <button key={index} type="button" aria-label={`${count}장 중 ${index + 1}번째 이미지`} aria-current={active === index ? "true" : undefined} onClick={() => select(index)}><span /></button>)}
    </div>}
  </div>;
}
