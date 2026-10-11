"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "@/lib/use-reduced-motion";
import { assetPath } from "@/lib/asset-path";
import assets from "./kit-assets.json";
import styles from "./kit.module.css";

// Keep scrollable content accessible; auto-scroll runs only while the preview is visible
// and the visitor is not interacting with it. Reduced motion always uses manual scrolling.
function DevicePreview({ mobile = false }: { mobile?: boolean }) {
  const viewport = useRef<HTMLDivElement>(null);
  const screen = assets[mobile ? "user-web-mobile" : "user-web-pc"];
  const frame = assets[mobile ? "mobile-device" : "desktop-device"];
  useEffect(() => {
    const element = viewport.current;
    if (!element) return;
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    let visible = false;
    let interacting = false;
    let frameId = 0;
    let previous = 0;
    let hold = 2500;
    let position: number | null = null;
    const tick = (time: number) => {
      const elapsed = previous ? Math.min(time - previous, 80) : 0;
      previous = time;
      if (visible && !interacting && !motion.matches && !document.hidden) {
        if (hold > 0) hold -= elapsed;
        else {
          const bottom = element.scrollHeight - element.clientHeight;
          if (bottom > 0 && element.scrollTop >= bottom - 1) {
            element.scrollTop = 0;
            position = 0;
            hold = 3500;
          } else {
            position = (position ?? element.scrollTop) + elapsed * 0.018;
            element.scrollTop = position;
          }
        }
      } else position = null;
      frameId = requestAnimationFrame(tick);
    };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; previous = 0; }, { threshold: 0.15 });
    observer.observe(element);
    const enter = () => { interacting = true; };
    const leave = () => { interacting = element.matches(":focus-within"); previous = 0; };
    const blur = () => { interacting = element.matches(":hover"); };
    element.addEventListener("pointerenter", enter);
    element.addEventListener("pointerleave", leave);
    element.addEventListener("focusin", enter);
    element.addEventListener("focusout", blur);
    frameId = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(frameId);
      observer.disconnect();
      element.removeEventListener("pointerenter", enter);
      element.removeEventListener("pointerleave", leave);
      element.removeEventListener("focusin", enter);
      element.removeEventListener("focusout", blur);
    };
  }, []);
  return <div className={[styles.device, mobile ? styles.phone : ""].join(" ")}>
    <Image className={styles.deviceFrame} src={assetPath(frame.src)} width={frame.width} height={frame.height} alt="" sizes={mobile ? "193px" : "(min-width: 1200px) 777px, 90vw"} />
    <div ref={viewport} className={[styles.viewport, mobile ? styles.mobileViewport : styles.desktopViewport].join(" ")} tabIndex={0} role="region" aria-label={mobile ? "모바일 사용자 웹 화면, 스크롤하여 탐색" : "데스크톱 사용자 웹 화면, 스크롤하여 탐색"} data-lenis-prevent data-kit-preview={mobile ? "mobile" : "desktop"}>
      <Image className={styles.webImage} src={assetPath(screen.src)} alt={mobile ? "모바일 가상 캠퍼스 소개와 다운로드 안내" : "데스크톱 가상 캠퍼스 공간 소개, 월드맵, 다운로드 안내"} width={screen.width} height={screen.height} sizes={mobile ? "177px" : "(min-width: 1200px) 750px, 90vw"} />
    </div>
  </div>;
}
export function KitWebPreview() {
  return <div className={styles.devices}><DevicePreview /><DevicePreview mobile /></div>;
}

export function KitExperiencePreview() {
  const video = useRef<HTMLVideoElement>(null);
  const reduced = useReducedMotion();
  const [override, setOverride] = useState<boolean | null>(null);
  const playing = override ?? !reduced;
  useEffect(() => {
    const element = video.current;
    if (!element) return;
    let visible = false;
    const sync = () => {
      if (playing && visible && !document.hidden) void element.play().catch(() => {});
      else element.pause();
    };
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; sync(); }, { threshold: 0.15 });
    observer.observe(element);
    document.addEventListener("visibilitychange", sync);
    return () => { observer.disconnect(); document.removeEventListener("visibilitychange", sync); element.pause(); };
  }, [playing]);
  return <figure className={styles.experiencePreview}>
    <div className={styles.experienceLaptop}>
      <Image className={styles.deviceFrame} src={assetPath("/images/shared/laptop-16-9.webp")} width={1653} height={952} alt="" sizes="(min-width: 1440px) 1280px, 100vw" />
      <div className={styles.experienceScreen}>
        <video ref={video} src={assetPath("/images/projects/kit/v2/experience-preview.mp4?v=3")} poster={assetPath("/images/projects/kit/v2/experience-preview-poster.webp?v=3")} muted loop playsInline preload="metadata" aria-label="웹 랜딩 스크롤, 관리자 웹 3개 화면, 로그인, 캐릭터 선택, 캠퍼스 탐색, 캐릭터 인터랙션, 강의실 이용, 인터랙션 UI와 조작 방법 가이드 미리보기" />
      </div>
    </div>
    <figcaption className={styles.experienceCaption}>
      <button type="button" onClick={() => setOverride(!playing)}>{playing ? "자동 재생 끄기" : "자동 재생 켜기"}</button>
    </figcaption>
  </figure>;
}
