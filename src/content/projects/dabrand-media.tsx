"use client";

import Image from "next/image";
import { useRef, useState, type ReactNode } from "react";
import { assetPath } from "@/lib/asset-path";
import styles from "./dabrand.module.css";

export function DabrandGallery({ children, count, label, layout }: { children: ReactNode; count: number; label: string; layout: string }) {
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

export function DabrandImage({ name, width, height, alt, sizes }: { name: string; width: number; height: number; alt: string; sizes: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [loaded, setLoaded] = useState(false);
  const src = assetPath(`/images/projects/dabrand/${name}.webp`);
  return <figure className={styles.image}>
    <a href={src} aria-label={`${alt} 확대 보기`} onClick={event => { event.preventDefault(); setLoaded(true); dialog.current?.showModal(); }}>
      <Image src={src} width={width} height={height} alt={alt} sizes={sizes} />
    </a>
    <dialog ref={dialog} className={styles.dialog} aria-label={`${alt} 확대 이미지`} data-lenis-prevent onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
      <div className={styles.dialogBar}><span>{alt}</span><button type="button" onClick={() => dialog.current?.close()}>닫기 ×</button></div>
      <div className={styles.zoomScroll} tabIndex={0} aria-label="이미지 스크롤 영역">
        {loaded && <Image src={src} width={width} height={height} alt={alt} sizes="100vw" style={{ width: Math.max(width, 900) }} />}
      </div>
    </dialog>
  </figure>;
}
