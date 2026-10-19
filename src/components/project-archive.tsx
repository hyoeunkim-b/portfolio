"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { projects } from "@/data/projects";
import styles from "./project-archive.module.css";

const filters = [
  { id: "all", label: "전체" },
  { id: "digital-products", label: "UX/UI" },
  { id: "websites", label: "웹 디자인" },
  { id: "brand-identities", label: "브랜드 디자인" },
  { id: "editorials", label: "편집·제안서" },
];

const visibleProjects = projects;

export default function ProjectArchive({ home = false }: { home?: boolean }) {
  const ProjectHeading = home ? "h3" : "h2";
  const params = useSearchParams();
  const requested = params.get("practice") ?? "all";
  const active = (requested === "ai-workflow" || filters.some((filter) => filter.id === requested)) ? requested : "all";
  const filteredProjects = active === "all" ? visibleProjects : visibleProjects.filter((project) => project.categories.includes(active));
  const countFor = (filterId: string) => filterId === "all" ? visibleProjects.length : visibleProjects.filter((project) => project.categories.includes(filterId)).length;

  return (
    <div className={styles.archive}>
      <nav className={styles.filters} aria-label="프로젝트 분야 필터">
        {filters.map((filter) => (
          <Link key={filter.id} href={`${home ? "/" : "/projects"}${filter.id === "all" ? "" : `?practice=${filter.id}`}${home ? "#projects" : ""}`} aria-current={active === filter.id ? "page" : undefined} scroll={false}>
            <span>{filter.label}</span><sup>{countFor(filter.id)}</sup>
          </Link>
        ))}
      </nav>
      {active === "ai-workflow" ? <p role="status">AI 활용 프로젝트 · {filteredProjects.length}개</p> : null}
      <div className={styles.grid} key={active} aria-live="polite">
        {filteredProjects.map((project) => (
          <article className={styles.project} key={project.id}>
            <Link href={`/projects/${project.id}`} aria-label={project.title}>
              <div className={styles.thumbnail} aria-hidden="true">
                {project.cover ? <Image className={styles.thumbnailImage} src={project.listingCover ?? project.cover} alt="" fill sizes="(min-width: 1200px) 33vw, (min-width: 640px) 50vw, 100vw" /> : null}
              </div>
              <p>{project.keywords}</p><ProjectHeading className={styles.projectTitle}>{project.title}</ProjectHeading>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
