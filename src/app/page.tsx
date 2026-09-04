import Link from "next/link";
import Image from "next/image";
import HeroSphere from "@/components/hero-sphere";
import SiteHeader from "@/components/site-header";
import ContactSection from "@/components/contact-section";
import { projects as projectData } from "@/data/projects";
import { assetPath } from "@/lib/asset-path";
import styles from "./page.module.css";

const projects = projectData.filter((project) => project.id !== "deep-ai").map((project, index) => ({
  ...project,
  no: String(index + 1).padStart(2, "0"),
  category: project.keywords,
}));

const practices = [
  { no: "01", title: "Digital Products", detail: "UX 리서치 · 정보구조 설계 · UX/UI 디자인 · 프로토타이핑 · 디자인 시스템 제작", filter: "digital-products" },
  { no: "02", title: "Websites", detail: "웹 디자인 · 반응형 디자인 · 인터랙션 디자인 · 웹 퍼블리싱", filter: "websites" },
  { no: "03", title: "Brand Identities", detail: "브랜드 전략 · 비주얼 아이덴티티 · 로고 디자인 · 브랜드 가이드라인", filter: "brand-identities" },
  { no: "04", title: "Editorials", detail: "편집 디자인 · 인쇄물 디자인 · 프레젠테이션 디자인", filter: "editorials" },
  { no: "05", title: "AI-Enhanced Workflow", detail: "리서치부터 디자인 탐색, 콘텐츠 제작, 프로토타이핑 및 구현까지 AI 도구 활용", filter: "ai-workflow" },
];

const process = [
  { no: "01", title: "관찰하기.", subtitle: "Observe", description: <>사용자 행동과 현재 상황을 살펴 <br className={styles.mobileBreak} />문제의 단서와 질문을 발견합니다.</>, tags: ["인터뷰", "사용 흐름 관찰", "자료 조사"], image: assetPath("/illust-observe.svg") },
  { no: "02", title: "연결하기.", subtitle: "Connect", description: <>흩어진 정보와 의견 사이의 관계를 찾고 <br className={styles.mobileBreak} />중요한 것부터 정리합니다.</>, tags: ["인사이트 분류", "정보 구조", "우선순위"], image: assetPath("/illust-connect.svg") },
  { no: "03", title: "쓸모있게 만들기.", subtitle: "Make it useful", description: <>정리된 생각을 화면과 프로토타입, <br className={styles.mobileBreak} />실제 결과물로 구체화합니다.</>, tags: ["콘셉트", "UI 디자인", "프로토타이핑"], image: assetPath("/illust-makeituseful.svg") },
];

export default function Home() {
  return (
    <>
      <a className="skipLink" href="#main">본문으로 건너뛰기</a>
      <div id="top" />
      <SiteHeader />

      <main id="main">
        <div className={styles.heroStage}>
          <section className={styles.hero} aria-labelledby="hero-title">
            <div className={styles.heroGrid}>
              <h1 id="hero-title" className={styles.heroTitle}><span>Observe.</span><span>Connect.</span><span>Make it useful.</span></h1>
              <div className={styles.sphereWrap}><HeroSphere /></div>
              <div className={styles.heroIntro}><strong>관찰하고, 연결하여, 쓸모있게.</strong><p>익숙한 일상 속 작은 불편을 세심하게 살펴봅니다.<br />흩어진 생각과 정보를 연결해, 이해하기 쉽고 유용한 경험으로 만듭니다.</p></div>
            </div>
            <span className={styles.scrollCue} aria-hidden="true">Scroll to explore ↓</span>
          </section>
        </div>

        <section className={styles.projects} aria-labelledby="selected-projects-title">
          <div className={styles.sectionTop}><p id="selected-projects-title" className={styles.eyebrow}>Selected Projects</p></div>
          <div className={styles.projectGrid}>
            {projects.map((project) => (
              <Link className={`${styles.project} ${styles[`project${project.no}`]}`} href={`/projects/${project.id}`} key={project.id}>
                <div className={styles.projectVisual}>
                  {project.cover ? <Image className={styles.projectCover} src={project.listingCover ?? project.cover} alt="" fill sizes="(min-width: 1200px) 50vw, (min-width: 768px) 50vw, 100vw" /> : null}
                </div>
                <p className={styles.projectCategory}>{project.category}</p><h3>{project.title}</h3>
              </Link>
            ))}
          </div>
          <div className={styles.allProjectsGrid}><Link className={styles.allProjects} href="/projects"><span>모든 프로젝트 보기</span><Image className={styles.arrowImage} src={assetPath("/images/arrow-right.svg")} alt="" width={32} height={32} /></Link></div>
        </section>

        <section className={styles.about} aria-labelledby="about-title">
          <p className={styles.eyebrow}>About</p>
          <div className={styles.aboutContent}>
            <figure className={styles.aboutPortrait}><Image className={styles.aboutImage} src={assetPath("/images/about-img.png")} alt="바닥에 글씨를 쓰며 관찰하는 어린 시절 모습" width={3572} height={1974} sizes="(min-width: 1200px) 65vw, (min-width: 768px) 75vw, 100vw" /></figure>
            <div className={styles.aboutCopy}>
              <p id="about-title">안녕하세요, 디자이너 김효은입니다.</p>
              <p>사람은 적응의 동물이라는 말이 있듯, 익숙해지면 작은 불편함들은 쉽게 지나칩니다.</p>
              <p>하지만 이 작은 불편함들이 개선되었을 때 느끼는 편리함은 그 제품의 가치를 크게 향상시키기도 합니다.</p>
              <p>그래서 제 디자인의 초점은 불편함이 어디서 오는지 관찰하고 해결의 실마리를 찾아 연결하는 것에 있습니다.</p>
              <p>누군가에게 도움이 되는 기쁨을 동력 삼아, 재미와 의미가 있는 일을 계속하고 싶습니다.</p>
            </div>
            <div className={styles.practiceList}>
              {practices.map((practice) => <Link href={`/projects?practice=${practice.filter}`} key={practice.no}><span><strong>{practice.title}</strong><small>{practice.detail}</small></span><Image className={styles.practiceArrow} src={assetPath("/images/arrow-right-top.svg")} alt="" width={48} height={48} /></Link>)}
            </div>
          </div>
        </section>

        <section id="how-i-work" className={styles.how} aria-labelledby="how-title">
          <div className={styles.howHeading}><p id="how-title" className={styles.eyebrow}>How I Work</p></div>
          <div className={styles.processGrid}>
            {process.map((step) => <article className={styles.processItem} key={step.no}>
              <div className={styles.processVisual}><Image src={step.image} alt="" width={120} height={120} /></div>
              <div className={styles.stepHeading}><h3>{step.title}</h3><span>{step.subtitle}</span></div>
              <p className={styles.stepDescription}>{step.description}</p>
              <ul className={styles.processTags}>{step.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
            </article>)}
          </div>
        </section>

        <ContactSection />
      </main>
    </>
  );
}
