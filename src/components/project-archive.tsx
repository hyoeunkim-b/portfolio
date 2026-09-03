"use client";

import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { projects } from "@/data/projects";
import styles from "./project-archive.module.css";

const filters = [
  { id: "all", label: "All" },
  { id: "digital-products", label: "Digital Products" },
  { id: "websites", label: "Websites" },
  { id: "brand-identities", label: "Brand Identities" },
  { id: "editorials", label: "Editorials" },
  { id: "ai-workflow", label: "AI-Enhanced Workflow" },
];

const visibleProjects = projects.filter((project) => project.id !== "deep-ai");

export default function ProjectArchive() {
  const params = useSearchParams();
  const requested = params.get("practice") ?? "all";
  const active = filters.some((filter) => filter.id === requested) ? requested : "all";
  const filteredProjects = active === "all" ? visibleProjects : visibleProjects.filter((project) => project.categories.includes(active));
  const countFor = (filterId: string) => filterId === "all" ? visibleProjects.length : visibleProjects.filter((project) => project.categories.includes(filterId)).length;

  return (
    <div className={styles.archive}>
      <nav className={styles.filters} aria-label="프로젝트 분야 필터">
        {filters.map((filter) => (
          <Link key={filter.id} href={filter.id === "all" ? "/projects" : `/projects?practice=${filter.id}`} aria-current={active === filter.id ? "page" : undefined} scroll={false}>
            <span>{filter.label}</span><sup>{countFor(filter.id)}</sup>
          </Link>
        ))}
      </nav>
      <div className={styles.grid} key={active} aria-live="polite">
        {filteredProjects.map((project) => (
          <article className={styles.project} key={project.id}>
            <Link href={`/projects/${project.id}`} aria-label={project.title}>
              <div className={styles.thumbnail} aria-hidden="true">
                {project.cover ? <Image className={styles.thumbnailImage} src={project.listingCover ?? project.cover} alt="" fill sizes="(min-width: 1200px) 33vw, (min-width: 640px) 50vw, 100vw" /> : null}
              </div>
              <p>{project.keywords}</p><h2>{project.title}</h2>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
