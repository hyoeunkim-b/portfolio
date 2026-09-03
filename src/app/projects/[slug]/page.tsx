import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContactSection from "@/components/contact-section";
import SiteHeader from "@/components/site-header";
import { projects } from "@/data/projects";
import BluedotContent from "@/content/projects/bluedot";
import ValrosContent from "@/content/projects/valros";
import KitContent from "@/content/projects/kit";
import PaiaContent from "@/content/projects/paia";
import NdtContent from "@/content/projects/ndt";
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
  const previous = projects[(currentIndex - 1 + projects.length) % projects.length];
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      <a className="skipLink" href="#main">본문으로 건너뛰기</a><div id="top" />
      <SiteHeader />
      <main id="main">
        <article className={styles.detail}>
          <header className={styles.cover}>
            {project.cover ? <Image className={styles.coverImage} src={project.cover} alt="" fill priority sizes="100vw" /> : null}
            <h1>{project.title}</h1>
          </header>
          <section className={styles.overview} aria-label="프로젝트 개요">
            <div className={styles.summaryBlock}>
              <p className={styles.summary}>{project.summary}</p>
              {project.website ? <a className={styles.summaryLink} href={project.website}>사이트 바로가기 ↗</a> : null}
            </div>
            <dl className={styles.metadata}>
              <div><dt>기업/클라이언트</dt><dd>{project.client}</dd></div>
              <div><dt>진행 기간</dt><dd>{project.period}</dd></div>
              <div><dt>역할/기여</dt><dd>{project.roles.map((role) => <span key={role}>{role}</span>)}</dd></div>
              {project.team ? <div><dt>협업 인원</dt><dd>{project.team.map((member) => <span key={member}>{member}</span>)}</dd></div> : null}
            </dl>
          </section>
          <section className={styles.content} aria-label="프로젝트 상세 콘텐츠">
            {project.id === "bluedot" ? <BluedotContent /> : null}
            {project.id === "valros" ? <ValrosContent /> : null}
            {project.id === "kit" ? <KitContent /> : null}
            {project.id === "paia" ? <PaiaContent /> : null}
            {project.id === "ndt" ? <NdtContent /> : null}
          </section>
          <nav className={styles.projectNavigation} aria-label="이전 및 다음 프로젝트">
            <Link href={`/projects/${previous.id}`}>
              {previous.cover ? <Image className={styles.navigationImage} src={previous.listingCover ?? previous.cover} alt="" fill sizes="(min-width: 640px) 50vw, 100vw" /> : null}
              <span>이전 프로젝트</span><strong>{previous.title}</strong>
            </Link>
            <Link href={`/projects/${next.id}`}>
              {next.cover ? <Image className={styles.navigationImage} src={next.listingCover ?? next.cover} alt="" fill sizes="(min-width: 640px) 50vw, 100vw" /> : null}
              <span>다음 프로젝트</span><strong>{next.title}</strong>
            </Link>
          </nav>
        </article>
        <ContactSection />
      </main>
    </>
  );
}
