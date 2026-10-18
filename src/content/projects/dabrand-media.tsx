"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { assetPath } from "@/lib/asset-path";
import styles from "./dabrand.module.css";

export { ProjectGallery as DabrandGallery } from "@/components/project-detail/gallery";

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
