import type { ReactNode } from "react";
import { ProjectOverview, ProjectProductLink, ProjectSectionHeading as Heading, ProjectReflections } from "@/components/project-detail/elements";
import { ProjectImageZoom } from "@/components/project-detail/image-zoom";
import { KitWebPreview, KitExperiencePreview } from "./kit-media";
import { DabrandGallery } from "./dabrand-media";
import assets from "./kit-assets.json";
import styles from "./kit.module.css";

type AssetName = keyof typeof assets;
function Picture({ name, alt }: { name: AssetName; alt: string }) {
  const { src, width, height } = assets[name];
  return <ProjectImageZoom src={src} width={width} height={height} alt={alt} sizes="(min-width: 1480px) 1010px, (min-width: 1200px) 70vw, 100vw" />;
}
function Group({ title, children }: { title: string; children: ReactNode }) {
  return <div className={styles.group}><h3 className={styles.tag}>{title}</h3>{children}</div>;
}
function Gallery({ items }: { items: [AssetName, string][] }) {
  const pictures = items.map(([name, alt]) => <Picture key={name} name={name} alt={alt} />);
  return items.length >= 3 ? <DabrandGallery count={items.length} label="프로젝트 화면" layout="pairs">{pictures}</DabrandGallery> : <div className={styles.pair}>{pictures}</div>;
}
export function KitOverview() {
  return <div className={styles.overview}><ProjectOverview metadata={[
    { label: "기업/클라이언트", value: "경남정보대학교" },
    { label: "진행 기간", value: "2023. 2. / 3주간" },
    { label: "역할", value: "UXUI 디자이너 · 웹 퍼블리셔" },
    { label: "협업 팀 구성", value: <>모델러 1명, 메타버스 개발자 2명,<br />웹 개발자 1명, 디자이너 1명(본인)</> },
    { label: "주요 담당 업무", wide: true, value: "메타버스 내 UI 디자인 / 웹 공동 기획 · 디자인 · 퍼블리싱" },
  ]}>
    <p>이 프로젝트는 경남정보대학교의 가상 캠퍼스에서 사용자가 실시간 강의와 퀴즈에 참여할 수 있도록 메타버스 프로그램과 웹사이트를 함께 구축했습니다.</p>
    <p>메타버스 내 메뉴와 인터랙션 UI를 디자인하고, 웹 개발자와 협업하여 사용자 및 관리자 웹을 공동 기획했습니다. 그리고 웹디자인과 퍼블리싱까지 담당했습니다.</p>
  </ProjectOverview>
    <div className={styles.productPreview}>
      <ProjectProductLink href="https://metacamp.kit.ac.kr/">프로젝트 웹사이트 보기</ProjectProductLink>
      <KitExperiencePreview />
    </div>
  </div>;
}
export default function KitContent() {
  return <div className={styles.content}>
    <div className={[styles.band, styles.gray].join(" ")}><section className={styles.section}>
      <Heading label="개요" title="메타버스에서 즐기는 캠퍼스 라이프">
        <p>세계적으로 감염병이 유행하면서, 비대면으로 경남정보대학교 캠퍼스를 탐색하고 강의에 참여할 수 있는 온라인 플랫폼이 필요했습니다.</p>
        <p>이에 메타버스 프로그램과 웹사이트를 구축 및 연동하여 재학생의 학습과 관리자의 운영을 함께 지원했습니다.</p>
        <p>웹사이트는 별도 기획자 없이 웹 개발자와 공동 기획했으며, 약 3주의 제작 일정 안에서 핵심 기능 구현에 집중했습니다.</p>
      </Heading>
      <div className={styles.inset}><div className={styles.flow} aria-label="웹사이트와 메타버스의 역할">
        <div className={styles.flowHeader} aria-hidden="true"><span /><strong>웹사이트</strong><span /><strong>메타버스 프로그램</strong></div>
        {[["재학생", "회원가입 · 다운로드 · 설치 안내", "캠퍼스 탐색 · 실시간 강의 수강 · 퀴즈 참여"], ["관리자", "강의 개설 · 자료 등록 · 사용자 관리", "강의 진행 · 등록한 자료 활용"]].map(([role, web, program]) => <div className={styles.flowRow} key={role}><h3>{role}</h3><p><span className={styles.mobileLabel}>웹사이트</span>{web}</p><span className={styles.arrow} aria-hidden="true">→</span><p><span className={styles.mobileLabel}>메타버스 프로그램</span>{program}</p></div>)}
      </div></div>
    </section></div>
    <div className={styles.band}>
      <section className={styles.section}>
        <Heading label="메타버스 UI" title="공간을 방해하지 않으면서, 필요한 기능은 선명하게">
          <p>3D 그래픽과 다채로운 색상이 함께 놓이는 환경을 고려해 UI의 톤을 낮췄습니다.</p>
          <p>핵심 컴포넌트와 인터랙션에는 경남정보대학교의 브랜드 컬러를 적용해 기능의 강조와 브랜드 정체성이 이어지도록 디자인했습니다.</p>
          <p>그리고 사용자의 탐색을 돕기 위해, 인터렉션 툴바와 사용 가이드 팝업을 배치하였습니다.</p>
        </Heading>
        <div className={styles.inset}>
          <Group title="주요 화면"><Gallery items={[["program-login","메타버스 로그인 화면"],["program-character","캐릭터 커스터마이징 화면"],["program-place","캠퍼스 장소 이동 메뉴"],["program-class","메타버스 원격 강의실"]]} /></Group>
          <Group title="인터렉션 툴바 및 사용 가이드"><Gallery items={[["program-interaction","앉기 등 행동을 선택하는 인터랙션 툴바"],["program-guide-1","캠퍼스 통합 안내 팝업"],["program-guide-2","프로그램 기능 사용 가이드"],["program-seat","강의실 좌석 선택 가이드"]]} /></Group>
        </div>
      </section>
      <section className={styles.section}>
        <Heading label="사용자 페이지" title="가상 캠퍼스에 대한 관심이 실제 이용으로 이어지게">
          <p>랜딩 페이지에 주요 공간을 간략하게 소개하여 가상 캠퍼스에서 경험할 수 있는 활동을 보여주었습니다.</p>
          <p>이후 이탈하지 않고 이용까지 이어질 수 있도록, 설치 및 이용 가이드를 배치하였습니다.</p>
        </Heading>
        <div className={styles.inset}><KitWebPreview /></div>
      </section>
      <section className={styles.section}>
        <Heading label="관리자 페이지" title="필요한 관리 작업을 쉽고 빠르게 사용할 수 있도록">
          <p>관리자의 사용 연령을 고려해 페이지 이동 단계를 줄이고, 작업 목적에 따라 직관적으로 메뉴를 나눴습니다.</p>
          <p>강의와 관련된 자료를 손쉽게 공유하고, 메타버스 강의실 내 시각물도 손수 관리할 수 있도록 구성했습니다.</p>
        </Heading>
        <div className={styles.inset}>
          <Group title="강의 관리"><div className={styles.classManagement}><DabrandGallery count={4} label="강의 관리 화면" layout="">
            <Picture name="admin-list" alt="실시간 강의 목록" /><Picture name="admin-edit" alt="강의 수정 화면" /><Picture name="admin-content" alt="강의실 콘텐츠 관리" /><Picture name="admin-material" alt="강의 자료 업로드" />
          </DabrandGallery><Picture name="admin-new" alt="원격 강의 신규 등록 화면 전체" /></div></Group>
          <Group title="학과 및 계정 관리"><Gallery items={[["admin-major","학과 목록 관리"],["admin-faculty","학과 추가 화면"],["admin-account","사용자 계정 목록"],["admin-request","가입 요청 관리"]]} /></Group>
          <Group title="이용 통계"><div className={styles.statistics}><Gallery items={[["admin-user","사용자별 이용 통계"],["admin-class","강의별 이용 통계"],["admin-date","날짜별 이용 추이와 상세 통계"]]} /></div></Group>
        </div>
      </section>
    </div>
    <div className={[styles.band, styles.gray, styles.reflectionBand].join(" ")}><section className={styles.section}>
      <Heading label="회고" title="서로 다른 환경을 연결하고, 실제 사용까지 바라보기">
        <p>메타버스 프로그램과 웹을 함께 다루며 각 환경의 역할과 사용 목적에 맞춰 화면을 설계했습니다.</p>
        <p>기획부터 퍼블리싱까지 이어간 경험과 함께, 납품 이후 실제 사용을 확인하지 못한 아쉬움도 남았습니다.</p>
      </Heading>
      <ProjectReflections items={[
        { title: "개발자와 공동 기획 경험", description: "별도 기획자가 없는 상황에서 웹 개발자와 사용자·관리자 페이지를 공동 기획하고, 디자인과 퍼블리싱까지 진행했습니다. 짧은 일정 안에서 필요한 기능과 화면 구조를 함께 정리하며, 기획과 구현을 연결하는 협업을 경험했습니다." },
        { title: "같은 서비스, 다른 구축 환경 구현", description: "메타버스에서는 3D 공간과 UI의 시각적 균형을, 사용자 웹에서는 소개와 이용 준비를, 관리자 웹에서는 작업 목적과 이동 단계를 고려했습니다. 하나의 서비스라도 사용 환경과 목적에 따라 강조할 정보와 화면의 구성이 달라져야 함을 배웠습니다." },
        { title: "결과 검증 부재에 대한 아쉬움", description: "납품 이후 사용자 반응을 확인할 창구가 없어, 설계한 화면이 실제 이용에 얼마나 도움이 되었는지 검증하지 못했습니다. 다음에는 제작 단계에서 피드백 수집 방법을 함께 협의하고, 설치·로그인이나 강의·자료 등록 과정에서 겪는 어려움을 확인해 개선으로 연결해보고 싶습니다." },
      ]} />
    </section></div>
  </div>;
}
