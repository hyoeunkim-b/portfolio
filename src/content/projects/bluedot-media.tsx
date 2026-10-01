"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { assetPath } from "@/lib/asset-path";
import assets from "./bluedot-assets.json";
import styles from "./bluedot.module.css";

export type BluedotAsset = keyof typeof assets;
const characterAnimations: Partial<Record<BluedotAsset, string>> = {
  "bear-1": "character-SeatBear1.gif",
  "bear-2": "character-SeatBear2.gif",
  "bear-3": "character-SeatBear3.gif",
  "bear-4": "character-SeatBear4.gif",
  "bear-5": "character-SeatBear5.gif",
  "bear-6": "character-SeatBear6.gif",
  "bear-study": "character-StudingHard.gif",
};

export function BluedotImage({ name, alt, className = "" }: { name: BluedotAsset; alt: string; className?: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [opened, setOpened] = useState(false);
  const { width, height } = assets[name];
  const src = assetPath(`/images/projects/bluedot/${name}.webp`);
  const animation = characterAnimations[name];
  if (animation) return <figure className={`${styles.picture} ${className}`}>
    <picture>
      <source media="(prefers-reduced-motion: no-preference)" srcSet={assetPath(`/images/projects/bluedot/${animation}`)} type="image/gif" />
      <Image src={src} alt={alt} width={width} height={height} unoptimized />
    </picture>
  </figure>;
  if (width < 710) return <figure className={`${styles.picture} ${className}`}><Image src={src} alt={alt} width={width} height={height} sizes="(min-width: 1200px) 25vw, 70vw" /></figure>;
  return <figure className={`${styles.picture} ${className}`}>
    <button type="button" className={styles.imageButton} aria-label={`${alt} 확대 보기`} onClick={() => { setOpened(true); dialog.current?.showModal(); }}>
      <Image src={src} alt={alt} width={width} height={height} sizes="(min-width: 1200px) 70vw, 100vw" />
    </button>
    <dialog ref={dialog} className={styles.dialog} aria-label={`${alt} 확대`} data-lenis-prevent onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
      <button className={styles.close} type="button" onClick={() => dialog.current?.close()}>닫기 ×</button>
      {opened && <div className={styles.zoomCanvas}><Image src={src} alt={alt} width={width} height={height} sizes="100vw" /></div>}
    </dialog>
  </figure>;
}

export function BluedotScreenGallery({ items, flow = false, compact = false, proposal = false, label }: {
  items: { name: BluedotAsset; title: string; description?: string }[];
  flow?: boolean;
  compact?: boolean;
  proposal?: boolean;
  label: string;
}) {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  function select(index: number) {
    const element = track.current;
    const slide = element?.children[index] as HTMLElement | undefined;
    if (!element || !slide) return;
    element.scrollTo({ left: slide.offsetLeft, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth" });
  }
  return <div className={`${styles.gallery} ${flow ? styles.flow : ""} ${compact ? styles.compact : ""} ${proposal ? styles.proposal : ""}`}>
    <div ref={track} className={styles.screenTrack} role="group" aria-label={label} data-lenis-prevent-touch onScroll={() => {
      const element = track.current;
      if (!element || element.scrollWidth <= element.clientWidth) return;
      const max = element.scrollWidth - element.clientWidth;
      const distances = Array.from(element.children, child => Math.abs(Math.min((child as HTMLElement).offsetLeft, max) - element.scrollLeft));
      setActive(distances.indexOf(Math.min(...distances)));
    }} onKeyDown={event => {
      if (window.matchMedia("(min-width: 48rem)").matches || !["ArrowLeft", "ArrowRight"].includes(event.key) || (event.target as HTMLElement).closest("dialog")) return;
      event.preventDefault();
      select(Math.max(0, Math.min(items.length - 1, active + (event.key === "ArrowRight" ? 1 : -1))));
    }}>
      {items.map(({ name, title, description }) => <div className={styles.screenItem} key={name}>
        {flow && <h3 className={styles.tag}>{title}</h3>}
        <BluedotImage name={name} alt={title} className={styles.screenImage} />
        {!flow && !proposal && <div className={styles.caption}><h3>{title}</h3>{description && <p>{description}</p>}</div>}
      </div>)}
    </div>
    <div className={styles.pagination} aria-label={`${label} 이미지 선택`}>
      {items.map(({ name, title }, index) => <button key={name} type="button" aria-label={`${items.length}장 중 ${index + 1}번째: ${title}`} aria-current={index === active ? "true" : undefined} onClick={() => select(index)}><span /></button>)}
    </div>
  </div>;
}
