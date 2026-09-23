import { ProjectOverview } from "@/components/project-detail/elements";
import { projectThemeStyle } from "@/lib/project-theme";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContactSection from "@/components/contact-section";
import SiteHeader from "@/components/site-header";
import { projects } from "@/data/projects";
import BluedotContent from "@/content/projects/bluedot";
import ValrosContent, { ValrosOverview } from "@/content/projects/valros";
import KitContent from "@/content/projects/kit";
import PaiaContent, { PaiaOverview } from "@/content/projects/paia";
import DabrandContent, { DabrandOverview } from "@/content/projects/dabrand";
import NdtContent, { NdtOverview } from "@/content/projects/ndt";
import styles from "./project-detail.module.css";

type ProjectDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.id }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.id === slug);
  return { title: project ? `${project.title} — Hyoeun Kim` : "Project — Hyoeun Kim" };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const currentIndex = projects.findIndex((project) => project.id === slug);
  if (currentIndex === -1) notFound();

  const project = projects[currentIndex];
  const navigationProjects = projects;
  const navigationIndex = navigationProjects.findIndex((item) => item.id === project.id);
  const previous = navigationProjects[(navigationIndex - 1 + navigationProjects.length) % navigationProjects.length];
  const next = navigationProjects[(navigationIndex + 1) % navigationProjects.length];

  return (
    <>
      <a className="skipLink" href="#main">본문으로 건너뛰기</a><div id="top" />
      <SiteHeader />
      <main id="main">
        <article className={styles.detail} style={projectThemeStyle(project.theme)}>
          <header className={`${styles.cover} ${project.id === "deep-ai" ? styles.brandCover : project.id === "valros" ? styles.valrosCover : ""}`}>
            {project.cover ? <Image className={styles.coverImage} src={project.cover} alt="" fill priority sizes="100vw" /> : null}
            <h1>{project.id === "valros" ? <>VR 콘텐츠 제작 소프트웨어<br />VARLOS Web VR Editor</> : project.title}</h1>
          </header>
          {project.id === "ndt" ? <NdtOverview /> : project.id === "paia" ? <PaiaOverview /> : project.id === "deep-ai" ? <DabrandOverview /> : project.id === "valros" ? <ValrosOverview /> : <ProjectOverview metadata={[
            { label: "기업/클라이언트", value: project.client },
            { label: "진행 기간", value: project.period },
            { label: "역할/기여", value: project.roles.map((role) => <span key={role}>{role}</span>) },
            ...(project.team ? [{ label: "협업 인원", value: project.team.map((member) => <span key={member}>{member}</span>) }] : []),
          ]}>
            <p>{project.summary}</p>
            {project.website ? <a href={project.website}>사이트 바로가기 ↗</a> : null}
          </ProjectOverview>}
          <section className={styles.content} aria-label="프로젝트 상세 콘텐츠">
            {project.id === "bluedot" ? <BluedotContent /> : null}
            {project.id === "valros" ? <ValrosContent /> : null}
            {project.id === "kit" ? <KitContent /> : null}
            {project.id === "paia" ? <PaiaContent /> : null}
            {project.id === "ndt" ? <NdtContent /> : null}
            {project.id === "deep-ai" ? <DabrandContent /> : null}
          </section>
          <nav className={styles.projectNavigation} aria-label="이전 및 다음 프로젝트">
            <Link href={`/projects/${previous.id}`}>
              {previous.cover ? <Image className={styles.navigationImage} src={previous.cover} alt="" fill sizes="(min-width: 640px) 50vw, 100vw" /> : null}
              <span>이전 프로젝트</span><strong>{previous.title}</strong>
            </Link>
            <Link href={`/projects/${next.id}`}>
              {next.cover ? <Image className={styles.navigationImage} src={next.cover} alt="" fill sizes="(min-width: 640px) 50vw, 100vw" /> : null}
              <span>다음 프로젝트</span><strong>{next.title}</strong>
            </Link>
          </nav>
        </article>
        <ContactSection surface />
      </main>
    </>
  );
}
