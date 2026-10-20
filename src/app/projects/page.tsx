import { Suspense } from "react";
import ProjectArchive, { ProjectArchiveFallback } from "@/components/project-archive";
import SiteHeader from "@/components/site-header";
import ContactSection from "@/components/contact-section";
import styles from "./projects.module.css";

export const metadata = { title: "Projects — Hyeokun Kim" };

export default function ProjectsPage() {
  return (
    <>
      <a className="skipLink" href="#main">본문으로 건너뛰기</a><div id="top" />
      <SiteHeader />
      <main id="main">
        <section className={styles.projects} aria-labelledby="projects-title">
          <h1 id="projects-title">Projects</h1>
          <Suspense fallback={<ProjectArchiveFallback />}><ProjectArchive /></Suspense>
        </section>
        <ContactSection surface />
      </main>
    </>
  );
}
