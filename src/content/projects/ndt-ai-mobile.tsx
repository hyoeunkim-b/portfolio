"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { assetPath } from "@/lib/asset-path";
import styles from "./ndt.module.css";

const features = [
  { title: "AI 자동 평가 결함 목록", description: "AI가 찾은 결함을 별도 탭으로 분리해, 필요한 시점에 결함 후보를 확인할 수 있습니다." },
  { title: "AI 결과 표시 켜기·끄기", description: "AI 표시를 끄고 원본 데이터를 검토하거나, 필요할 때 켜서 판독에 참고할 수 있습니다." },
  { title: "판정한 결함을 보고서에 추가", description: "검사자가 결함 여부를 최종 판단하고, 확정한 결함을 직접 보고서에 추가합니다." },
];

export default function NdtAiMobile() {
  const track = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  function updatePosition() {
    const element = track.current;
    if (!element) return;
    const cards = Array.from(element.children) as HTMLElement[];
    const start = cards[0].offsetLeft;
    const maxScroll = element.scrollWidth - element.clientWidth;
    const distances = cards.map((card) => Math.abs(Math.min(card.offsetLeft - start, maxScroll) - element.scrollLeft));
    setActive(distances.indexOf(Math.min(...distances)));
  }

  function selectSlide(index: number) {
    const element = track.current;
    if (!element) return;
    const cards = element.children;
    element.scrollTo({
      left: (cards[index] as HTMLElement).offsetLeft - (cards[0] as HTMLElement).offsetLeft,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
    });
  }

  return <div className={styles.aiMobile}>
    <figure className={styles.aiOverview}>
      <Image src={assetPath("/images/projects/ndt/case-2-all.png")} width={684} height={380} sizes="(max-width: 767px) calc(100vw - 48px), 342px" alt="IRIS 뷰어의 1번 AI 목록, 2번 AI 표시 전환, 3번 결함 추가 위치" />
      <figcaption>➊ AI 목록&nbsp;&nbsp; ➋ AI 표시&nbsp;&nbsp; ➌ 결함 추가</figcaption>
    </figure>
    <div ref={track} className={styles.aiSlides} onScroll={updatePosition} tabIndex={0} role="region" aria-label="AI 기능 상세 화면 — 좌우로 넘겨 보기">
      {features.map((feature, index) => <figure className={styles.aiSlide} key={feature.title}>
        <Image src={assetPath(`/images/projects/ndt/case-2-${index + 1}.png`)} width={604} height={560} sizes="302px" alt={feature.title + " 확대 화면"} />
        <figcaption>
          <h3><span className={styles.aiNumber}>{index + 1}</span>{feature.title}</h3>
          <p>{feature.description}</p>
        </figcaption>
      </figure>)}
    </div>
    <div className={styles.aiPagination} aria-label="AI 기능 슬라이드 선택">
      {features.map((feature, index) => <button key={feature.title} type="button" onClick={() => selectSlide(index)} aria-label={`${index + 1}. ${feature.title}`} aria-current={active === index ? "true" : undefined}><span /></button>)}
    </div>
  </div>;
}
