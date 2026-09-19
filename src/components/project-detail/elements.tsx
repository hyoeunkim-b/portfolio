import Image from "next/image";
import type { ReactNode } from "react";
import { assetPath } from "@/lib/asset-path";
import styles from "./elements.module.css";

export type ProjectMetadata = {
  label: string;
  value: ReactNode;
  wide?: boolean;
};

export function ProjectOverview({ children, metadata, label = "프로젝트 개요" }: {
  children: ReactNode;
  metadata: ProjectMetadata[];
  label?: string;
}) {
  return <section className={styles.overview} aria-label={label}>
    <div className={styles.overviewCopy}>{children}</div>
    <dl className={styles.metadata}>
      {metadata.map(({ label, value, wide }) => <div key={label} className={wide ? styles.wideMetadata : undefined}>
        <dt>{label}</dt><dd>{value}</dd>
      </div>)}
    </dl>
  </section>;
}

export function ProjectSectionHeading({ label, title, children, result = false, className = "" }: {
  label: string;
  title: ReactNode;
  children?: ReactNode;
  result?: boolean;
  className?: string;
}) {
  return <div className={`${styles.heading} ${className}`}>
    <p className={result ? styles.resultLabel : styles.label}>{label}</p>
    <div className={styles.copy}><h2>{title}</h2>{children && <div>{children}</div>}</div>
  </div>;
}

export function ProjectFigure({ src, alt, width, height, caption, className = "", captionColumns = "full", shadow = false, sizes = "(min-width: 1440px) 1360px, 100vw" }: {
  /** Public asset path, before assetPath adds the deployment base path. */
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: ReactNode;
  className?: string;
  captionColumns?: "full" | "right-half";
  shadow?: boolean;
  sizes?: string;
}) {
  return <figure className={`${styles.figure} ${shadow ? styles.shadow : ""} ${captionColumns === "right-half" ? styles.halfCaption : ""} ${className}`}>
    <Image src={assetPath(src)} alt={alt} width={width} height={height} sizes={sizes} />
    {caption && <figcaption>{caption}</figcaption>}
  </figure>;
}

export function ProjectReflections({ items, className = "" }: {
  items: { title: string; description: ReactNode }[];
  className?: string;
}) {
  return <dl className={`${styles.reflections} ${className}`}>
    {items.map(({ title, description }) => <div key={title}><dt>{title}</dt><dd>{description}</dd></div>)}
  </dl>;
}
