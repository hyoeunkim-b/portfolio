"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { assetPath } from "@/lib/asset-path";
import styles from "./image-zoom.module.css";

export function ProjectImageZoom({ src, alt, width, height, sizes, className = "" }: {
  src: string; alt: string; width: number; height: number; sizes?: string; className?: string;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [opened, setOpened] = useState(false);
  return <figure className={className}>
    <button ref={trigger} type="button" className={styles.trigger} aria-label={`${alt} 확대 보기`} onClick={() => { setOpened(true); dialog.current?.showModal(); }}>
      <Image src={assetPath(src)} alt={alt} width={width} height={height} sizes={sizes} />
    </button>
    <dialog ref={dialog} className={styles.dialog} aria-label={`${alt} 확대`} data-lenis-prevent onClose={() => trigger.current?.focus({ preventScroll: true })} onClick={event => { if (event.target === event.currentTarget) dialog.current?.close(); }}>
      <button className={styles.close} type="button" onClick={() => dialog.current?.close()}>닫기 ×</button>
      {opened && <div className={styles.canvas}><Image src={assetPath(src)} alt={alt} width={width} height={height} sizes="100vw" /></div>}
    </dialog>
  </figure>;
}
