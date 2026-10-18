import { ProjectOverview } from "@/components/project-detail/elements";
import { ProjectGallery } from "@/components/project-detail/gallery";
import { ProjectImageZoom } from "@/components/project-detail/image-zoom";
import assets from "../../../public/images/projects/ppt/assets.json";
import styles from "./ppt.module.css";

const categories = [
  { title: "사업제안서", works: [
    { prefix: "01", title: "2차전지 관련 사업 제안", pages: 40, contribution: "디자인 100%", featured: true },
    { prefix: "02", title: "배관 부식관리 관련 사업 제안", pages: 61, contribution: "디자인 100%", featured: true },
    { prefix: "03", title: "한국기계연구원 대상 사업 제안", pages: 58, contribution: "디자인 100%", featured: true },
    { prefix: "04", title: "부산남항 대상 사업 제안", pages: 58, contribution: "디자인 100%", featured: true },
    { prefix: "05", title: "연구과제 제안서 템플릿", pages: 5, contribution: "디자인 100%", featured: true },
  ] },
  { title: "회사·상품소개서", works: [
    { prefix: "06", title: "(주)딥아이 회사소개서", pages: 12, contribution: "기획 100%, 디자인 100%", featured: false },
    { prefix: "07", title: "(주)딥아이 상품소개서", pages: 30, contribution: "기획 50%, 디자인 100%", featured: true },
    { prefix: "08", title: "(주)지씨 솔루션 영문 소개서", pages: 32, contribution: "기획 100%, 디자인 100%", featured: false },
    { prefix: "09", title: "블루닷라운지 스터디카페 소개서", pages: 26, contribution: "기획 100%, 디자인 100%", featured: false },
  ] },
  { title: "발표자료", works: [
    { prefix: "10", title: "딥테크 성과교류회 발표자료", pages: 17, contribution: "디자인 100%", featured: false },
    { prefix: "11", title: "비파괴검사 세미나 발표자료", pages: 30, contribution: "기획 50%, 디자인 100%", featured: false },
  ] },
];

export function PptOverview() {
  return <ProjectOverview className={styles.overview} label="기업 프레젠테이션 디자인 개요" metadata={[
    { label: "기업/클라이언트", value: "다수 기업" },
    { label: "진행 기간", value: "2010. 7. ~ 2026. 8" },
    { label: "역할", value: "프레젠테이션 디자이너" },
    { label: "주요 담당 업무", value: "슬라이드 디자인 · 도표 및 다이어그램 구성 · 템플릿 제작 · 일부 자료 콘텐츠 기획", wide: true },
  ]}>
    <p>인하우스 디자이너로 근무하면서, 기업의 사업과 기술을 전달하는 프레젠테이션을 다수 디자인했습니다. 사업 제안서, 회사·제품·솔루션 소개서, 세미나 발표자료 등 지금까지 작업한 대표 PPT 작업을 모았습니다.</p>
    <p>자료의 핵심 메시지와 정보 위계가 드러나도록 텍스트, 도표와 이미지를 구성했습니다. 작업에 따라 콘텐츠 기획부터 참여하거나 제공된 원고를 바탕으로 디자인했으며, 반복해서 활용할 수 있는 제안서 템플릿도 제작했습니다.</p>
  </ProjectOverview>;
}

export default function PptContent() {
  return <div className={styles.content}><div className={styles.band}>
    {categories.map(category => <section className={styles.category} key={category.title} aria-label={category.title}>
      {category.works.map((work, index) => {
        const slides = assets.filter(asset => asset.name.startsWith(`${work.prefix}-`));
        return <section className={styles.work} key={work.prefix} aria-labelledby={`ppt-${work.prefix}`}>
          {index === 0 && <h2 className={styles.categoryTitle}>{category.title}</h2>}
          <div className={styles.workBody}>
            <header className={styles.workHeader}>
              <h3 className={styles.workTitle} id={`ppt-${work.prefix}`}>{work.title}</h3>
              <dl className={styles.workMeta}>
                <div><dt>형식</dt><dd>PPT</dd></div>
                <div><dt>분량</dt><dd>{work.pages}장</dd></div>
                <div><dt>기여</dt><dd>{work.contribution}</dd></div>
              </dl>
            </header>
            <ProjectGallery label={work.title} count={slides.length} layout={work.featured ? "featured" : "pairs"}>
              {slides.map((slide, slideIndex) => <ProjectImageZoom key={slide.name} className={styles.slide}
                src={`/images/projects/ppt/${slide.name}.webp`} width={slide.width} height={slide.height}
                alt={`${work.title} · 대표 슬라이드 ${slideIndex + 1}`}
                sizes={work.featured && slideIndex === 0 ? "(min-width: 1480px) 1040px, (min-width: 1200px) 72vw, 100vw" : "(min-width: 1200px) 36vw, (min-width: 768px) 45vw, 100vw"} />)}
            </ProjectGallery>
          </div>
        </section>;
      })}
    </section>)}
  </div></div>;
}
