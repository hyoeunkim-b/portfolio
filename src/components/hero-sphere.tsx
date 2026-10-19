"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./hero-sphere.module.css";

type SphereItem = { id: string; label: string; primary?: boolean; related: string[] };

const items: SphereItem[] = [
  { id: "observe", label: "Observe", related: ["user-flow", "connect", "ai-workflow"] },
  { id: "uxui", label: "UX/UI Design", primary: true, related: ["user-flow", "prototype", "design-system"] },
  { id: "user-flow", label: "User Flow", related: ["observe", "uxui", "web"] },
  { id: "web", label: "Web Design", primary: true, related: ["user-flow", "prototype", "publishing"] },
  { id: "connect", label: "Connect", related: ["observe", "brand", "editorial", "make-useful"] },
  { id: "brand", label: "Brand Design", primary: true, related: ["connect", "editorial", "design-system"] },
  { id: "design-system", label: "Design System", related: ["uxui", "brand", "make-useful"] },
  { id: "editorial", label: "Editorial Design", primary: true, related: ["connect", "brand", "presentation", "ai-workflow"] },
  { id: "prototype", label: "Prototyping", related: ["uxui", "web", "make-useful"] },
  { id: "presentation", label: "Presentation Design", primary: true, related: ["editorial", "connect", "ai-workflow"] },
  { id: "publishing", label: "Publishing", related: ["web", "make-useful"] },
  { id: "ai-workflow", label: "AI Workflow", related: ["observe", "editorial", "presentation", "make-useful"] },
  { id: "make-useful", label: "Make it useful", related: ["connect", "prototype", "design-system", "publishing"] },
];

const points = items.map((_, index) => {
  const y = 1 - (index / (items.length - 1)) * 2;
  const radius = Math.sqrt(1 - y * y);
  const theta = Math.PI * (3 - Math.sqrt(5)) * index;
  return { x: Math.cos(theta) * radius, y, z: Math.sin(theta) * radius };
});

export default function HeroSphere() {
  const rootRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const lineRefs = useRef(new Map<string, SVGLineElement>());
  const projectedPoints = useRef<{ x: number; y: number }[]>([]);
  const selectedRef = useRef<string | null>(null);
  const rotation = useRef({ x: -.15, y: .25 });
  const velocity = useRef({ x: 0, y: .0018 });
  const pointer = useRef({ active: false, x: 0, y: 0, moved: false, id: -1 });
  const reducedMotion = useRef(false);
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => { selectedRef.current = selected; }, [selected]);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotion.current = query.matches;
    const update = () => { reducedMotion.current = query.matches; };
    query.addEventListener("change", update);
    let frame = 0;
    const draw = () => {
      if (!pointer.current.active && !reducedMotion.current) {
        rotation.current.x += velocity.current.x;
        rotation.current.y += velocity.current.y;
        velocity.current.x *= .96;
        velocity.current.y = velocity.current.y * .96 + .0018 * .04;
      }
      const sinX = Math.sin(rotation.current.x), cosX = Math.cos(rotation.current.x);
      const sinY = Math.sin(rotation.current.y), cosY = Math.cos(rotation.current.y);
      const size = rootRef.current?.clientWidth ?? 320;
      const center = size / 2;
      const extent = size * .39;
      points.forEach((point, index) => {
        const x1 = point.x * cosY - point.z * sinY;
        const z1 = point.x * sinY + point.z * cosY;
        const y1 = point.y * cosX - z1 * sinX;
        const z2 = point.y * sinX + z1 * cosX;
        const element = itemRefs.current[index];
        if (!element) return;
        const scale = .68 + (z2 + 1) * .26;
        projectedPoints.current[index] = { x: center + x1 * extent, y: center + y1 * extent };
        element.style.setProperty("--sphere-x", `${x1 * extent}px`);
        element.style.setProperty("--sphere-y", `${y1 * extent}px`);
        element.style.setProperty("--sphere-scale", `${scale}`);
        element.style.setProperty("--sphere-depth", `${Math.max(.32, .48 + (z2 + 1) * .26)}`);
        element.style.zIndex = String(Math.round((z2 + 1) * 100) + 2);
      });
      const activeId = selectedRef.current;
      if (activeId) {
        const sourceIndex = items.findIndex((item) => item.id === activeId);
        const source = projectedPoints.current[sourceIndex];
        items[sourceIndex]?.related.forEach((targetId) => {
          const targetIndex = items.findIndex((item) => item.id === targetId);
          const target = projectedPoints.current[targetIndex];
          const line = lineRefs.current.get(targetId);
          if (line && source && target) {
            line.setAttribute("x1", String(source.x));
            line.setAttribute("y1", String(source.y));
            line.setAttribute("x2", String(target.x));
            line.setAttribute("y2", String(target.y));
          }
        });
      }
      frame = requestAnimationFrame(draw);
    };
    frame = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(frame); query.removeEventListener("change", update); };
  }, []);

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    const canDrag = !(event.target as HTMLElement).closest("button");
    pointer.current = { active: canDrag, x: event.clientX, y: event.clientY, moved: false, id: event.pointerId };
    if (canDrag) event.currentTarget.setPointerCapture(event.pointerId);
  };
  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!pointer.current.active) return;
    const dx = event.clientX - pointer.current.x;
    const dy = event.clientY - pointer.current.y;
    if (Math.hypot(dx, dy) > 3) pointer.current.moved = true;
    rotation.current.y -= dx * .006;
    rotation.current.x += dy * .006;
    velocity.current = { x: dy * .00045, y: -dx * .00045 };
    pointer.current.x = event.clientX;
    pointer.current.y = event.clientY;
  };
  const onPointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    pointer.current.active = false;
    if (event.currentTarget.hasPointerCapture(event.pointerId)) event.currentTarget.releasePointerCapture(event.pointerId);
  };

  const related = selected ? new Set([selected, ...(items.find((item) => item.id === selected)?.related ?? [])]) : null;
  const connectedIds = selected ? items.find((item) => item.id === selected)?.related ?? [] : [];

  return (
    <div
      ref={rootRef}
      className={`${styles.sphere} ${selected ? styles.hasSelection : ""}`}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      onClick={(event) => { if (event.target === event.currentTarget && !pointer.current.moved) setSelected(null); }}
      aria-label="디자인 분야, 역량과 사고 방식의 관계를 탐색하는 인터랙티브 구체"
    >
      <div className={styles.surface} aria-hidden="true" />
      <svg className={styles.connections} aria-hidden="true">
        {connectedIds.map((targetId) => <line key={`${selected}-${targetId}`} ref={(line) => {
          if (line) lineRefs.current.set(targetId, line);
          else lineRefs.current.delete(targetId);
        }} />)}
      </svg>
      {items.map((item, index) => (
        <button
          ref={(element) => { itemRefs.current[index] = element; }}
          type="button"
          key={item.id}
          className={`${styles.item} ${item.primary ? styles.primaryItem : ""} ${related?.has(item.id) && selected !== item.id ? styles.related : ""} ${related && !related.has(item.id) ? styles.muted : ""} ${selected === item.id ? styles.selected : ""}`}
          onClick={(event) => { event.stopPropagation(); setSelected((current) => current === item.id ? null : item.id); }}
          aria-pressed={selected === item.id}
          aria-label={`${item.label} 관계 보기`}
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}
