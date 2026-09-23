import type { ReactNode } from "react";
import { ProjectProductLink, ProjectOverview, ProjectSectionHeading, ProjectReflections } from "@/components/project-detail/elements";
import { ValrosImage, ValrosPreview, ValrosTutorialGallery } from "./valros-media";
import styles from "./valros.module.css";

export function ValrosOverview() {
  return <>
    <ProjectOverview metadata={[
      { label: "기업/클라이언트", value: "삼우이머션" },
      { label: "진행 기간", value: <>전체 개발 약 6개월<br />담당 작업 총 3주<br />- 1차 1주<br />- 2차 2주</> },
      { label: "역할", value: "디자이너 · 웹 퍼블리셔" },
      { label: "협업 팀 구성", value: <>디자이너·웹 퍼블리셔 1명(본인),<br />개발자 1명</> },
      { label: "주요 담당 업무", value: <>시나리오 탐색·제작 흐름 개선,<br />UI 디자인 및 웹 퍼블리싱</>, wide: true },
    ]}>
      <p>웹에서 VR 시나리오를 제작하고, 제작한 콘텐츠를 VR 헤드셋(HMD)으로 체험하는 에디터의 UX·UI 디자인과 퍼블리싱을 담당했습니다.</p>
      <p>1차에서는 소개 일정에 맞춰 UI를 정비하고, 2차에서는 사용자 피드백을 바탕으로 시나리오 탐색과 제작 흐름을 개선했습니다.</p>
    </ProjectOverview>
    <div className={styles.product}><ProjectProductLink href="https://www.samwooim.com/WebVREditor/?bmode=view&idx=167675025">제품 소개 보기</ProjectProductLink><ValrosPreview /></div>
  </>;
}
function Part({ label, title, children, description }: { label: string; title: string; children: ReactNode; description: ReactNode }) {
  return <section className={styles.part}><ProjectSectionHeading label={label} title={title}>{description}</ProjectSectionHeading>{children}</section>;
}
function Flow({ improved = false }: { improved?: boolean }) {
  const steps = improved ? ["새 시나리오 생성 클릭", "에디터 진입", "사진 추가 및 작업 진행"] : ["새 시나리오 생성 클릭", "사진 추가", "에디터 진입"];
  return <div className={improved ? styles.improved : styles.original}><p><strong>{improved ? "TO-BE" : "AS-IS"}</strong> {improved ? "에디터 진입 후 사진 추가" : "시나리오 목록에서 사진 추가 후에 에디터 진입"}</p><ol className={styles.flow}>{steps.map(step => <li key={step}>{step}</li>)}</ol></div>;
}
export default function ValrosContent() {
  return <div className={styles.content}>
    <div className={`${styles.band} ${styles.gray}`}><Part label="상황" title="고객사에 소개를 앞둔 에디터, 마감 기간은 1주" description={<p>이 자체 솔루션 개발 프로젝트에 합류할 당시에는 시나리오 제작 보드와 three.js 기반 VR 실행 기능이 상당 부분 구현되어 있었습니다.<br />국립과학수사연구원에 소개할 기회가 생기면서, 짧은 기간 안에 화면을 준비해야 했습니다.<br />그래서 주어진 시간 안에 UI만 개선하고, 고객의 피드백을 바탕으로 하여 고도화를 진행하기로 협의하였습니다.</p>}>
      <div className={`${styles.inset} ${styles.pair}`}><div className={styles.card}><h3><span>1차</span> 최소한의 UI 개선</h3><p>일정과 중요도를 판단하여<br />편집 소프트웨어로 인식할 수 있도록 화면 정비</p></div><div className={styles.card}><h3><span>2차</span> 사용성 개선을 위한 고도화</h3><p>고객 피드백을 바탕으로<br />프로그램 사용 플로우 및 기능 개선</p></div></div>
    </Part></div>
    <div className={styles.band}><Part label="1차 개선" title="짧은 일정 안에서 사용성 개선 효과를 높이기 위한 핵심 UI 정비" description={<p>공통적으로 품명과 로고를 공통 헤더에 배치하고, 주요 작업 버튼을 기능에 따라 묶었습니다.<br />에디터에서는 목록과 편집 공간을 넓게 활용하도록 배치를 조정하고, 색상과 버튼 표현을 정리해 화면의 시각적 위계를 명확하게 만들었습니다.</p>}>
      <div className={`${styles.inset} ${styles.phaseOne}`}><div className={styles.stack}><h3 className={styles.caption}>기존 화면</h3><ValrosImage name="phase1_old1" width={854} height={464} alt="개선 전 시나리오 목록" /><ValrosImage name="phase1_old2" width={854} height={464} alt="개선 전 시나리오 제작 보드" /></div><div className={styles.stack}><h3 className={styles.captionStrong}>UI 개선 후</h3>{[1, 2, 3].map((n) => <ValrosImage key={n} name={`phase1_new${n}`} width={1086} height={522} alt={`1차 UI 개선 후 ${["시나리오 목록", "에디터", "VR 실행 화면"][n - 1]}`} />)}</div></div>
    </Part></div>
    <div className={styles.band}>
      <Part label="2차 개선 방향" title="사용자 피드백을 바탕으로 한 제작 흐름과 기능 탐색 개선" description={<p>1차 UI 정비 이후, 사용 방법을 이해하기 어렵고 필요한 도구를 선택하기 어렵다는 피드백을 받았습니다.<br />이를 바탕으로 사용자가 제작을 시작하고 기능을 이해하는 과정을 개선했습니다.</p>}>
        <div className={`${styles.inset} ${styles.reasoning}`}><h3 className={styles.tag}>사용자 피드백 요약</h3><div className={styles.pair}><p className={styles.feedback}>에디터를 어떻게 사용하는지 이해하기 어려워요.</p><p className={styles.feedback}>기능이 분산되어 있어서 도구 선택 시 헷갈려요.</p></div></div>
        <div className={`${styles.inset} ${styles.reasoning}`}><h3 className={styles.tag}>개선 목표</h3><p className={styles.goal}>처음 사용하는 사람도 제작 순서와 기능의 역할을 이해하고, 필요한 작업을 선택할 수 있는 편집 환경 구성</p></div>
        <div className={`${styles.inset} ${styles.reasoning}`}><h3 className={styles.tag}>설계 가설</h3><p className={styles.hypothesis}>사진을 추가하기 전에 에디터와 사용법을 먼저 살펴보면, 제작을 시작할 때의 막막함을 줄일 수 있을 것이다.</p><p className={styles.hypothesis}>기능을 선택하는 위치에 설명을 제공하고 관련 설정을 한곳에 모으면, 도구의 용도와 사용 방법을 파악하기 쉬울 것이다.</p></div>
      </Part>
      <Part label="2차 개선 01" title="시나리오 목록을 더 알아보기 좋고 관리하기 쉽게." description={<p>이미지 카드 보기로 내용을 시각적으로 구분하고, 검색 기능과 정렬 및 즐겨찾기로 필요한 항목에 빠르게 접근하도록 했습니다.<br />시나리오 생성 편집, 실행, 삭제 등의 기능은 개별 메뉴로 묶어 작업 대상과 가까이 배치했습니다.</p>}>
        <div className={`${styles.inset} ${styles.listComparison}`}><div className={styles.stack}><h3 className={styles.caption}>1차 - 목록과 별도로 분리되어 있는 작업 버튼</h3><ValrosImage name="phase2_old1" width={620} height={298} alt="1차 시나리오 목록 상단에 분리된 작업 버튼" /></div><div className={styles.stack}><h3 className={styles.captionStrong}>2차 - 이미지 카드와 항목별 작업 메뉴 묶음</h3><ValrosImage name="phase2_new1" width={1320} height={647} alt="이미지 카드, 검색, 즐겨찾기와 개별 메뉴를 갖춘 시나리오 목록" /></div></div>
      </Part>
      <Part label="2차 개선 02" title="에디터를 쉽게 사용할 수 있게." description={<p>새 시나리오를 만들 때 사진부터 추가하던 순서를, 작업 공간과 사용법을 먼저 살펴본 뒤 에디터 안에서 사진을 추가하도록 구성했습니다.<br />다음 행동을 유도하는 가이드 에셋과 에디터 튜토리얼을 추가하여 빠르게 사용 방법을 익힐 수 있도록 했습니다.</p>}>
        <div className={`${styles.inset} ${styles.mediaGroup}`}><h3 className={styles.tag}>플로우 변경</h3><Flow /><Flow improved /></div>
        <div className={`${styles.inset} ${styles.mediaGroup}`}><h3 className={styles.tag}>가이드 에셋과 튜토리얼 추가</h3><ValrosTutorialGallery /></div>
      </Part>
      <Part label="2차 개선 03" title="기능의 역할과 설정 위치를 명확하게." description={<p>기능의 역할을 인지하기 쉽도록, 주요 도구에 설명 툴팁을 배치했습니다.<br />툴과 레이어는 좌측 패널에, 레이어별 상세 정보와 설정은 우측 패널로 모아 분산되어 있던 기능을 일관된 위치에서 확인할 수 있도록 구성했습니다.<br />미리보기에서는 하단 패널에 음원과 장면 이동 정보를 배치하고, 각 장면별로 공유할 수 있도록 기능을 추가했습니다.</p>}>
        <div className={`${styles.inset} ${styles.mediaGroup}`}><div className={styles.stack}><h3 className={styles.caption}>에디터 화면</h3><div className={styles.pair}>{[1,2].map(n => <ValrosImage key={n} name={`phase2_new3_${n}`} width={970} height={477} alt={n === 1 ? "설명 툴팁과 좌우 패널을 정리한 에디터" : "장면 연결과 레이어 설정 화면"} />)}</div></div><div className={styles.stack}><h3 className={styles.caption}>미리보기 화면</h3><ValrosImage name="phase2_new3_3" width={2020} height={992} alt="음원, 장면 이동과 공유 기능을 갖춘 미리보기" /></div></div>
      </Part>
    </div>
    <div className={`${styles.band} ${styles.gray}`}><Part label="결과" title="납품 계약과 함께 긍정적인 사용자 평가를 받은 제품" description={<p>1차 미팅 전 일정을 고려한 최소한의 UI 변경으로 납품 계약이라는 성과를 얻었습니다.<br />개인 사정상 고도화 진행 후의 정량적인 결과를 확인할 수는 없었지만, 프로토타입 시연 때 내외부 모두 긍정적인 피드백을 확인할 수 있었습니다.</p>}><div className={`${styles.inset} ${styles.pair} ${styles.results}`}><div className={styles.card}><h3>1차 미팅 후 납품 계약 진행</h3><p>제품에 대한 긍정적인 반응이 있었고,<br />계약으로 이어졌습니다.</p></div><div className={styles.card}><h3>내외부 모두 긍정적인 피드백</h3><p>사용하기 쉬워지고, 시각적인 완성도가 높아졌다는<br />정성적 피드백을 사내와 고객 모두에게 얻었습니다.</p></div></div></Part></div>
    <div className={styles.band}><Part label="회고" title="제약에 맞춰 범위를 정하고, 피드백으로 구체화" description={<p>짧은 일정 안에서 무엇을 먼저 해결할지 판단하고, 사용자의 반응을 다음 개선으로 연결한 경험입니다.</p>}><ProjectReflections items={[
      { title: "단계에 맞는 우선순위 정하기", description: "1차에서는 고객과의 미팅을 위해서 일주일 안에 소개 가능한 화면을 준비하고, 2차에서는 사용성 피드백을 바탕으로 흐름을 개선했습니다. 제한된 시간 안에서 먼저 해결할 범위를 판단하는 일이 중요한 것을 다시 한번 느꼈습니다." },
      { title: "사용자가 이해하는 순서 살펴보기", description: "사진을 추가하는 시점을 바꾸면서, 사용자에게 무엇을 요구할지와 함께 그 전에 무엇을 이해해야 하는지 생각했습니다. 기능의 배치뿐 아니라 사용자가 접하는 순서도 설계의 대상이었습니다." },
      { title: "프로토타입 이후의 실제 사용 검증", description: <>고도화 이후 사용 경험까지 살펴보지는 못했습니다.<br />다음에는 튜토리얼이 실제로 도움이 되는지를 검증하는 경험을 만들어보고 싶습니다.</> },
    ]} /></Part></div>
  </div>;
}
