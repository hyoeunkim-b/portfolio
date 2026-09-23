"use client";

import Image from "next/image";
import { useRef, useState, useSyncExternalStore } from "react";
import { assetPath } from "@/lib/asset-path";
import styles from "./valros.module.css";

const media = (name: string) => assetPath(`/images/projects/valros/${name}`);
const motionQuery = "(prefers-reduced-motion: reduce)";
function subscribeMotion(onChange: () => void) {
  const query = window.matchMedia(motionQuery);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

export function ValrosPreview() {
  const reduced = useSyncExternalStore(subscribeMotion, () => window.matchMedia(motionQuery).matches, () => true);
  const [override, setOverride] = useState<boolean | null>(null);
  const playing = override ?? !reduced;
  return <figure className={styles.preview}>
    <div className={styles.laptop}>
      <Image className={styles.frame} src={media("laptop-16-9.webp")} width={1653} height={952} alt="" sizes="(min-width: 1440px) 1280px, 100vw" />
      <div className={styles.screen}><Image src={media(playing ? "product-preview.gif" : "product-preview-poster.webp")} width={1440} height={708} unoptimized alt="VARLOS의 시나리오 목록, 튜토리얼, 장면 편집과 VR 미리보기 화면" /></div>
    </div>
    <figcaption><button type="button" onClick={() => setOverride(!playing)}>{playing ? "자동 재생 끄기" : "자동 재생 켜기"}</button></figcaption>
  </figure>;
}

export function ValrosImage({ name, width, height, alt }: { name: string; width: number; height: number; alt: string }) {
  const dialog = useRef<HTMLDialogElement>(null);
  return <figure className={styles.picture}>
    <button type="button" className={styles.imageButton} aria-label={`${alt} 확대 보기`} onClick={() => dialog.current?.showModal()}>
      <Image src={media(`${name}.webp`)} width={width} height={height} alt={alt} sizes="(min-width: 1200px) 70vw, 100vw" />
    </button>
    <dialog ref={dialog} className={styles.dialog} aria-label={`${alt} 확대`} data-lenis-prevent onClick={e => { if (e.target === e.currentTarget) dialog.current?.close(); }}>
      <button className={styles.close} type="button" onClick={() => dialog.current?.close()}>닫기 ×</button>
      <div className={styles.zoomCanvas}><Image src={media(`${name}.webp`)} width={width} height={height} alt={alt} sizes="100vw" /></div>
    </dialog>
  </figure>;
}

export function ValrosTutorialGallery() {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const labels = ["첫 시나리오 생성을 안내하는 가이드", "에디터 시작 시 표시되는 튜토리얼 소개", "에디터 튜토리얼 1단계", "에디터 튜토리얼 2단계", "에디터 튜토리얼 3단계", "에디터 튜토리얼 4단계"];
  function select(index: number) {
    const element = track.current;
    const slide = element?.children[index] as HTMLElement | undefined;
    if (!element || !slide) return;
    element.scrollTo({ left: index === 0 ? 0 : slide.offsetLeft, behavior: window.matchMedia(motionQuery).matches ? "instant" : "smooth" });
  }
  return <div className={styles.tutorialGallery}>
    <div ref={track} className={styles.tutorialTrack} role="group" aria-label="가이드 에셋과 튜토리얼" data-lenis-prevent-touch onScroll={() => {
      const element = track.current;
      if (!element || element.scrollWidth <= element.clientWidth) return;
      const maxScroll = element.scrollWidth - element.clientWidth;
      const distances = Array.from(element.children, (child, index) => Math.abs(Math.min(index === 0 ? 0 : (child as HTMLElement).offsetLeft, maxScroll) - element.scrollLeft));
      setActive(distances.indexOf(Math.min(...distances)));
    }} onKeyDown={event => {
      if (window.matchMedia("(min-width: 48rem)").matches || !["ArrowLeft", "ArrowRight"].includes(event.key) || (event.target as HTMLElement).closest("dialog")) return;
      event.preventDefault();
      select(Math.max(0, Math.min(labels.length - 1, active + (event.key === "ArrowRight" ? 1 : -1))));
    }}>
      {labels.map((alt, index) => <ValrosImage key={alt} name={`phase2_new2_${index + 1}`} width={index < 2 ? 2020 : 970} height={index === 0 ? 994 : index === 1 ? 995 : 478} alt={alt} />)}
    </div>
    <div className={styles.tutorialPagination} aria-label="가이드와 튜토리얼 이미지 선택">
      {labels.map((alt, index) => <button key={alt} type="button" aria-label={`6장 중 ${index + 1}번째 이미지`} aria-current={active === index ? "true" : undefined} onClick={() => select(index)}><span /></button>)}
    </div>
  </div>;
}
