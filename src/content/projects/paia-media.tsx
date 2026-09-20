"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { assetPath } from "@/lib/asset-path";
import styles from "./paia.module.css";

const media = (name: string) => assetPath(`/images/projects/paia/website/${name}`);

export function WebsiteImage({ name, width, height, alt, enlarge = false }: { name: string; width: number; height: number; alt: string; enlarge?: boolean }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const picture = <Image src={media(`${name}.webp`)} width={width} height={height} alt={alt} sizes="(min-width: 1200px) 78vw, 100vw" />;
  return <figure className={styles.picture}>
    {enlarge ? <><button type="button" className={styles.imageButton} aria-label={`${alt} 확대 보기`} onClick={() => dialog.current?.showModal()}>{picture}</button><dialog data-lenis-prevent ref={dialog} className={styles.imageDialog} onClick={e => { if (e.target === e.currentTarget) dialog.current?.close(); }}><button type="button" className={styles.closeDialog} onClick={() => dialog.current?.close()}>닫기 ×</button><Image src={media(`${name}.webp`)} width={width} height={height} alt={alt} sizes="100vw" /></dialog></> : picture}
  </figure>;
}

export function WebsiteVideo({ variant = "desktop" }: { variant?: "desktop" | "laptop" }) {
  const video = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);
  const manuallyPaused = useRef(false);
  useEffect(() => {
    const player = video.current;
    if (!player) return;
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    const update = () => {
      if (visible && !motion.matches && !manuallyPaused.current && !document.hidden) void player.play().catch(() => {});
      else player.pause();
    };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; update(); }, { threshold: .35 });
    observer.observe(player);
    motion.addEventListener("change", update);
    document.addEventListener("visibilitychange", update);
    return () => { observer.disconnect(); motion.removeEventListener("change", update); document.removeEventListener("visibilitychange", update); player.pause(); };
  }, []);
  return <figure className={styles.videoFigure}>
    <div className={variant === "laptop" ? styles.laptop : styles.monitor}>
      <Image src={media(variant === "laptop" ? "laptop.webp" : "mockup-pc.webp")} width={variant === "laptop" ? 1653 : 1786} height={variant === "laptop" ? 952 : 1078} alt="" sizes="100vw" />
      <video ref={video} className={styles.screenVideo} src={media("mockup-pc-new-video.mp4")} poster={media("video-poster.webp")} muted playsInline loop preload="metadata" aria-label="리뉴얼된 DEEP-AI 웹사이트의 페이지 탐색 영상" onPlay={() => setPlaying(true)} onPause={() => setPlaying(false)} />
    </div>
    <figcaption><span>{variant === "desktop" ? "리뉴얼 웹사이트" : "DEEP-AI 웹사이트"}</span><button type="button" onClick={() => { const p = video.current; if (!p) return; if (p.paused) { manuallyPaused.current = false; void p.play().catch(() => {}); } else { manuallyPaused.current = true; p.pause(); } }}>{playing ? "일시정지" : "재생"}</button><button type="button" onClick={() => { const p = video.current; if (p) { p.currentTime = 0; manuallyPaused.current = false; void p.play().catch(() => {}); } }}>다시 보기</button></figcaption>
  </figure>;
}

export function OldWebsite() {
  return <figure className={styles.videoFigure}>
    <div className={styles.monitor}>
      <Image src={media("mockup-pc.webp")} width={1786} height={1078} alt="" sizes="80vw" />
      <div className={styles.oldScreen} tabIndex={0} role="region" aria-label="기존 웹사이트 전체 화면 — 스크롤하여 보기" data-lenis-prevent>
        <Image src={media("mockup-pc-old.webp")} width={620} height={3242} alt="회사, 기술, 제품 정보를 하나의 페이지에서 소개하던 기존 DEEP-AI 웹사이트" sizes="80vw" />
      </div>
    </div>
    <figcaption>기존 웹사이트 · 화면 안에서 스크롤하여 보기</figcaption>
  </figure>;
}
