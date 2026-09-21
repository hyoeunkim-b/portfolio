import type { ReactNode } from "react";
import { ProjectOverview, ProjectSectionHeading } from "@/components/project-detail/elements";
import { DabrandGallery, DabrandImage } from "./dabrand-media";
import styles from "./dabrand.module.css";

const dimensions = {
  "introduction1": [
    970,
    546
  ],
  "introduction2": [
    970,
    544
  ],
  "introduction3": [
    970,
    546
  ],
  "introduction4": [
    970,
    546
  ],
  "introduction5": [
    970,
    546
  ],
  "introduction6": [
    970,
    546
  ],
  "product1": [
    2020,
    1137
  ],
  "product2": [
    970,
    546
  ],
  "product3": [
    970,
    546
  ],
  "product4": [
    970,
    546
  ],
  "product5": [
    970,
    546
  ],
  "p_intro1_1": [
    620,
    876
  ],
  "p_intro1_2": [
    388,
    549
  ],
  "p_intro1_3": [
    388,
    550
  ],
  "p_intro1_4": [
    384,
    544
  ],
  "p_intro2_1": [
    620,
    876
  ],
  "p_intro2_2": [
    387,
    548
  ],
  "p_intro2_3": [
    387,
    548
  ],
  "p_intro2_4": [
    387,
    548
  ],
  "proposal": [
    2020,
    1064
  ],
  "manual1": [
    618,
    876
  ],
  "manual2": [
    622,
    883
  ],
  "manual3": [
    622,
    882
  ],
  "template1": [
    2020,
    1137
  ],
  "template2": [
    970,
    546
  ],
  "template3": [
    970,
    546
  ],
  "report1": [
    618,
    875
  ],
  "report2": [
    622,
    880
  ],
  "report3": [
    622,
    880
  ],
  "guides1": [
    338,
    479
  ],
  "guides2": [
    342,
    484
  ],
  "guides3": [
    342,
    484
  ],
  "guides4": [
    338,
    239
  ],
  "guides5": [
    342,
    242
  ],
  "usb_case_1": [
    2020,
    1515
  ],
  "panel": [
    2020,
    1347
  ],
  "bus": [
    2020,
    1137
  ],
  "internalbranding": [
    2020,
    1137
  ]
} as const;
type AssetName = keyof typeof dimensions;

export function DabrandOverview() {
  return <ProjectOverview label="DEEP-AI 편집·브랜드 디자인 프로젝트 개요" metadata={[
    { label: "기업/클라이언트", value: "DEEP-AI" },
    { label: "진행 기간", value: "2024. 7. ~ 2026. 8." },
    { label: "역할", value: "Product Designer" },
    { label: "협업 팀 구성", value: "PD 1명(본인)" },
    { label: "주요 담당 업무", value: "회사·상품소개서 및 제안서 / 문서 템플릿 / 전시회 시각물 / 온·오프라인 홍보물 제작 / 내부 캠페인 및 브랜드 에셋 제작 및 관리", wide: true },
  ]}>
    <p>DEEP-AI의 사업 활동과 내부 운영에 필요한 편집·브랜드 디자인을 담당했습니다. 회사와 제품을 소개하는 문서부터 내부 캠페인, 외부 홍보물, 현장에서 사용하는 브랜드 제작물까지 목적에 맞춰 작업하고 관리했습니다.</p>
    <p>회사 내부에서 반복해서 사용하는 시트, 슬라이드, 한글 문서는 직원 모두가 쓸 수 있도록 템플릿으로 제작하여 상시 배포했습니다.</p>
  </ProjectOverview>;
}

function Gallery({ names, label, layout = "single" }: { names: AssetName[]; label: string; layout?: "single" | "pairs" | "featured" | "triples" | "brochure" | "guides" }) {
  return <DabrandGallery count={names.length} label={label} layout={layout}>
    {names.map((name, index) => <DabrandImage key={name} name={name} width={dimensions[name][0]} height={dimensions[name][1]} alt={names.length > 1 ? `${label} · ${index + 1}` : label} sizes={layout === "single" || (layout === "featured" && index === 0) ? "(min-width: 1480px) 1040px, (min-width: 1200px) 72vw, 100vw" : "(min-width: 1200px) 36vw, (min-width: 768px) 45vw, 100vw"} />)}
  </DabrandGallery>;
}

function Group({ title, children }: { title: string; children: ReactNode }) {
  return <section className={styles.group}><h3 className={styles.groupTitle}>{title}</h3>{children}</section>;
}

export default function DabrandContent() {
  return <div className={styles.content}>
    <section className={styles.band} aria-label="비즈니스 문서">
      <ProjectSectionHeading label="비즈니스 문서" title="회사와 제품을 이해하고, 제안 검토를 돕는 비즈니스 문서">
        <p>회사소개서, 상품소개서, 제안서 등 사업 활동에 필요한 문서를 디자인했습니다.</p>
        <p>읽는 대상과 전달 목적에 맞춰 정보의 순서와 시각적 위계를 정리했습니다.</p>
      </ProjectSectionHeading>
      <Group title="회사소개서 PPT / PDF, 총 12장"><Gallery names={["introduction1","introduction2","introduction3","introduction4","introduction5","introduction6"]} label="DEEP-AI 회사소개서" layout="pairs" /></Group>
      <Group title="상품소개서 PPT / PDF, 총 30장"><Gallery names={["product1","product2","product3","product4","product5"]} label="DEEP-AI 상품소개서" layout="featured" /></Group>
      <Group title="제품소개서 PDF / 인쇄물, 총 7종">
        <Gallery names={["p_intro1_1","p_intro1_2","p_intro1_3","p_intro1_4"]} label="제품소개서 첫 번째 시리즈" layout="brochure" />
        <Gallery names={["p_intro2_1","p_intro2_2","p_intro2_3","p_intro2_4"]} label="제품소개서 두 번째 시리즈" layout="brochure" />
      </Group>
      <Group title="제안서, 보고서 등 발표자료 PPT / PDF, 총 23개 프로젝트"><Gallery names={["proposal"]} label="제안서와 발표자료 표지 모음" /></Group>
    </section>
    <section className={styles.band} aria-label="업무 템플릿">
      <ProjectSectionHeading label="업무 템플릿" title="반복 사용하는 문서를 일관된 형식으로 만든 문서 템플릿">
        <p>구성원이 내용을 바꿔 활용할 수 있는 문서 템플릿을 제작했습니다.</p>
        <p>내용이 달라져도 기본 구조와 브랜드의 인상이 유지되도록 레이아웃과 서식을 정리했습니다.</p>
      </ProjectSectionHeading>
      <Group title="사용자 매뉴얼 HWP"><Gallery names={["manual1","manual2","manual3"]} label="사용자 매뉴얼" layout="triples" /></Group>
      <Group title="슬라이드 템플릿 PPT"><Gallery names={["template1","template2","template3"]} label="슬라이드 템플릿" layout="featured" /></Group>
      <Group title="검사 결과 보고서, 안내서 템플릿 HWP">
        <Gallery names={["report1","report2","report3"]} label="검사 결과 보고서 템플릿" layout="triples" />
        <Gallery names={["guides1","guides2","guides3","guides4","guides5"]} label="안내서 템플릿" layout="guides" />
      </Group>
    </section>
    <section className={styles.band} aria-label="브랜딩 에셋">
      <ProjectSectionHeading label="브랜딩 에셋" title="패키지부터 광고·전시까지, 브랜드의 시각적 확장">
        <p>다양한 접점에서 브랜드의 인상이 일관되게 이어지도록 매체의 특성과 사용 환경에 맞춰 그래픽과 메시지를 구성했습니다.</p>
      </ProjectSectionHeading>
      <Group title="DEEP-NDT 패키지"><Gallery names={["usb_case_1"]} label="DEEP-NDT 상품 패키지 프로토타입 목업" /></Group>
      <Group title="전시회 부스 패널"><Gallery names={["panel"]} label="전시회 부스 패널 디자인 목업" /></Group>
      <Group title="울산 버스 광고"><Gallery names={["bus"]} label="울산 버스 측면 광고 목업" /></Group>
      <Group title="사내 캠페인"><Gallery names={["internalbranding"]} label="딥코드 캠페인과 딥웨이, CI 공모전 포스터를 배치한 사내 공간 목업" /></Group>
    </section>
  </div>;
}
