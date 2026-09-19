"use client";

import Image from "next/image";
import { useState, useSyncExternalStore } from "react";
import { assetPath } from "@/lib/asset-path";
import styles from "./ndt.module.css";

const motionQuery = "(prefers-reduced-motion: reduce)";
function subscribeMotion(onChange: () => void) {
  const query = window.matchMedia(motionQuery);
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}

export default function NdtProductPreview() {
  const reducedMotion = useSyncExternalStore(subscribeMotion, () => window.matchMedia(motionQuery).matches, () => true);
  const [playback, setPlayback] = useState<boolean | null>(null);
  const playing = playback ?? !reducedMotion;

  return <div className={styles.productPreview}>
    <div className={styles.productMockup}>
      <Image className={styles.laptopFrame} src={assetPath("/images/projects/ndt/laptop-16-9.webp")} width={1653} height={952} alt="" sizes="(min-width: 1440px) 1280px, 100vw" />
      <div className={styles.productScreen}>
        <Image src={assetPath(`/images/projects/ndt/product-preview${playing ? ".gif" : "-poster.webp"}?v=4c9e6886c5`)} width={1440} height={810} unoptimized alt="DEEP-NDT의 검사 데이터 판독과 설비 관리 화면" />
      </div>
    </div>
    <button type="button" className={styles.previewPlayback} onClick={() => setPlayback(!playing)}>{playing ? "자동 재생 끄기" : "자동 재생 켜기"}</button>
  </div>;
}
