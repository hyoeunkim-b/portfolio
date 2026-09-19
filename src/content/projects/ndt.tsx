import Image from "next/image";
import type { ReactNode } from "react";
import { assetPath } from "@/lib/asset-path";
import styles from "./ndt.module.css";
import NdtAiMobile from "./ndt-ai-mobile";
import NdtProductPreview from "./ndt-product-preview";

function Picture({ name, alt, width = 1920, height = 1080, caption, className = "" }: { name: string; alt: string; width?: number; height?: number; caption?: string; className?: string }) {
  return <figure className={`${styles.figure} ${className}`}><Image src={assetPath(`/images/projects/ndt/${name}.webp`)} alt={alt} width={width} height={height} sizes="(min-width: 1440px) 1360px, 100vw" />{caption && <figcaption>{caption}</figcaption>}</figure>;
}

function Heading({ label, title, children, result = false }: { label: string; title: ReactNode; children: ReactNode; result?: boolean }) {
  return <div className={styles.heading}><p className={result ? styles.resultLabel : styles.label}>{label}</p><div className={styles.copy}><h2>{title}</h2><div>{children}</div></div></div>;
}

function Quote({ role, children }: { role: string; children: ReactNode }) {
  return <blockquote className={styles.quote}><cite>{role} 인터뷰</cite><div>{children}</div></blockquote>;
}

function Flow({ steps, variant = "new" }: { steps: string[]; variant?: "old" | "new" }) {
  return <ol className={`${styles.flow} ${variant === "old" ? styles.oldFlow : ""}`}>{steps.map((step, i) => <li key={step} className={i === 0 ? styles.flowRole : ""}>{step}</li>)}</ol>;
}

export function NdtOverview() {
  return <section className={styles.overview} aria-label="DEEP-NDT 프로젝트 개요"><div className={styles.overviewCopy}><p>DEEP-NDT는 비파괴검사 과정에서 수집한 데이터를 AI로 분석해<br className={styles.desktopBreak} />{" "}대형 산업 설비를 안전하게 유지보수할 수 있도록 지원하는 소프트웨어입니다.</p><p>기술 가능성만 검증된 MVP를 현장에서 사용할 수 있는 제품으로 고도화하기 위해,<br className={styles.desktopBreak} />{" "}제품 구조와 사용 경험을 설계하고 사용자 교육·가이드와 고객 대응을 지원했습니다.</p></div><dl className={styles.metadata}><div><dt>기업/클라이언트</dt><dd>DEEP-AI</dd></div><div><dt>진행 기간</dt><dd>2024. 7. ~ 2026. 8.</dd></div><div><dt>역할</dt><dd>Product Designer<br />PM 겸임(10개월)</dd></div><div><dt>협업 팀 구성</dt><dd>PM 2명(본인 포함), PD 1명(본인),<br />FE 3명, BE 3명, ML 5명</dd></div><div className={styles.duties}><dt>주요 담당 업무</dt><dd>UX/UI 설계, 디자인 시스템 구축, 요구사항 수집 및 일정 관리, 기능·콘텐츠 기획, QA, 커뮤니케이션 지원</dd></div></dl></section>;
}

export default function NdtContent() {
  return <div className={styles.content}>
    <div className={styles.preview}><a href="https://deep-ndt.kr" target="_blank" rel="noreferrer" className={styles.productLink}>DEEP-NDT 바로가기 <span aria-hidden="true">↗</span><span className={styles.srOnly}> (새 창)</span></a><NdtProductPreview /></div>

    <div className={`${styles.band} ${styles.gray}`}>
      <section className={styles.part}>
        <Heading label="도메인 이해" title="대형 산업 설비의 상태는 어떻게 확인할까?"><p>원전·정유화학 시설 등에서는 설비를 손상시키지 않고 결함이나 상태를 확인하는 비파괴검사로 설비를 점검합니다.</p></Heading>
        <div className={`${styles.inset} ${styles.domainGrid}`}>
          <div className={styles.domain}><div><h3>익숙한 예: 병원에서의 X-ray 촬영</h3><p>인체를 손상하지 않고 내부 상태를 확인합니다.</p></div><Picture name="domain-xray" width={1555} height={1344} alt="내부 상태를 확인하는 흉부 X-ray 사진" /></div>
          <div className={`${styles.domain} ${styles.industry}`}><div><h3>산업 설비의 비파괴검사</h3><p>설비를 파괴하지 않고 결함의 위치와 크기를 확인합니다.</p></div><Picture name="domain-inspection" width={2560} height={1664} alt="산업 설비의 튜브를 검사하는 비파괴검사 작업자" /></div>
        </div>
      </section>
      <section className={styles.part}>
        <Heading label="상황" title={<>고객이 선택할 이유가 필요했던{" "}<br className={styles.mobileBreak} /><span className={styles.productName}>DEEP-NDT</span></>}><p>합류 당시에는 데이터 업로드, AI 결함 평가, 간이 보고서 내보내기가 가능한 초기 제품(MVP)이 구현되어 있었습니다.</p><p>기술적 가능성은 확인했지만, 고객이 기존 제품에서 DEEP-NDT로 전환하고 비용을 지불할 만큼의 차별점은 부족했습니다.</p></Heading>
        <div className={`${styles.inset} ${styles.mvpGrid}`} tabIndex={0} role="region" aria-label="초기 MVP 화면 — 좌우로 스크롤하여 보기">{[["mvp-login", "로그인 및 프로젝트 관리"], ["mvp-upload", "검사별 데이터 업로드"], ["mvp-viewer", "데이터 판독용 뷰어"]].map(([name, text]) => <Picture key={name} name={name} width={330} height={275} alt={`초기 MVP의 ${text} 화면`} caption={text} />)}</div>
      </section>
      <section className={styles.part}>
        <Heading label="목표와 핵심 과제" title={<>AI 비파괴검사 기술을 검사자의 실제 업무에 적용할 수 있고,<br />고객에게 판매할 수 있는 제품으로 고도화한다.</>}><p>고객사에 MVP를 제공하고, 실제 사용 과정에서 얻은 피드백을 바탕으로 기능을 개발·개선했습니다.</p><p>이 과정에서 마주한 문제를 돌아보면, 핵심 과제는 다음 두 가지로 정리됩니다.</p></Heading>
        <div className={`${styles.inset} ${styles.issues}`}><div><p className={styles.issueNumber}>CORE ISSUE 01</p><h3>사용자별 업무와 요구 구분</h3><p className={styles.feedback}>판독만 하고 싶은데, 거치는 단계가 많아요</p><p className={styles.feedback}>설비 관리에 도움되는 정보는 없어요</p></div><div><p className={styles.issueNumber}>CORE ISSUE 02</p><h3>사용자의 역할을 존중하는 AI 활용</h3><p className={styles.feedback}>AI가 내 직업을 없앨 거 같아서 쓰기 싫어요!</p><p className={styles.feedback}>AI와 직접 비교되는 게 부담스러워요</p></div></div>
      </section>
    </div>

    <div className={`${styles.band} ${styles.caseOne}`}>
      <section className={styles.part}>
        <Heading label="개선 사례 1" title="역할에 맞는 제품으로 구조화"><p>기존 제품에서는 검사자와 관리자가 동일한 흐름을 사용했습니다.</p><p>검사자는 판독 화면까지 여러 단계를 거쳐야 했고, 관리자는 설비 관리에 필요한 정보를 충분히 얻기 어려웠습니다.</p><p>두 사용자의 업무와 요구를 구분하고, 검사자는 판독에 빠르게 접근하며 관리자는 설비 현황과 검사 결과를 확인할 수 있도록 제품 구조를 재설계했습니다.</p></Heading>
        <div className={styles.flowComparison}>
          <div><h3 className={styles.asIs}><strong>AS-IS</strong><span> 서로 다른 업무를 하나의 공통 흐름에서 수행</span></h3><Flow variant="old" steps={["검사자 · 관리자", "로그인", "프로젝트 · 검사 생성", "검사 데이터 업로드", "데이터 조회 / AI 결함 평가", "간이 보고서 내보내기", "간이 보고서 확인"]} /></div>
          <div><h3 className={styles.toBe}><strong>TO-BE</strong><span> 로그인 후 역할별 업무로 진입</span></h3><div className={styles.roleFlows}><Flow steps={["검사자", "발주처 선택", "검사 목록", "데이터 업로드", "판독 · 평가", "검사 결과 보고서 작성"]} /><div className={styles.connections}><span className={styles.createdConnection} aria-label="프로젝트·검사 자동 생성에서 검사 목록으로 연결"><b>생성된 검사 연결</b><i aria-hidden="true" /></span><span className={styles.sharedConnection} aria-label="검사 결과 보고서 작성에서 온라인 검사 결과 보고서 확인으로 연결"><b>검사 완료 후 결과 공유</b><i aria-hidden="true" /></span></div><Flow steps={["관리자", "설비 대시보드", "추천 검사 대상 확인 · 선택", "프로젝트 · 검사 자동 생성", "온라인 검사 결과 보고서 확인"]} /></div></div>
        </div>
      </section>
      <section className={styles.part}>
        <div className={styles.roleHeading}><span>검사자</span><h2>판독에 필요한 데이터와 도구를 한곳에</h2><p>검사 데이터를 선택하고 신호와 단면을 살펴보며 평가 정보를 확인하도록,<br className={styles.desktopBreak} /> 검사 방식에 맞는 판독 작업 공간을 구성했습니다.</p></div>
        <Picture className={`${styles.screenShadow} ${styles.inspectorScreen}`} name="inspector-iris" alt="파일 목록, 검사 이미지, 단면과 평가 정보를 함께 표시하는 IRIS 뷰어" caption="IRIS 뷰어 · 파일 목록, 검사 이미지, 단면과 평가 정보를 함께 확인 가능" />
        <div className={styles.viewerDetail}><Picture name="inspector-ect" alt="여러 채널의 신호와 곡선을 비교하는 ECT 뷰어" caption="ECT 뷰어 · 여러 채널의 신호와 곡선을 함께 비교하는 판독 화면" /><div className={styles.featureCopy}><h3>검사 방식에 맞춘 판독 작업 공간</h3><dl><div><dt>01 데이터 탐색</dt><dd>파일 목록과 선택한 데이터 정보를 가까이 배치했습니다.</dd></div><div><dt>02 판독 영역</dt><dd>IRIS 이미지·단면과 ECT 신호·곡선을 검사 방식에 맞춰 구성했습니다.</dd></div><div><dt>03 작업 도구</dt><dd>보기 설정, 캡처와 평가 정보를 판독 화면 안에 배치했습니다.</dd></div></dl></div></div>
      </section>
      <section className={styles.part}>
        <div className={styles.roleHeading}><span>관리자</span><h2>전체 설비 현황에서 개별 검사 결과까지</h2><p>프로젝트 진행과 설비 상태를 종합적으로 파악하고,<br className={styles.desktopBreak} /> 개별 설비의 검사 이력·결과와 보고서를 확인할 수 있도록 관리 정보를 구성했습니다.</p></div>
        <Picture className={styles.screenShadow} name="manager-dashboard" alt="프로젝트 진행, 데이터 현황, 설비 상태와 수명평가를 종합한 관리자 대시보드" caption="설비 대시보드 · 프로젝트 진행, 데이터 현황, 설비 상태와 수명평가를 한 화면에 확인 가능" />
        <div className={styles.managerGrid}><div><Picture name="manager-facility" alt="설비 탐색 구조와 검사 위치, 회차별 결과를 연결한 설비 상세 화면" /><h3>설비별 상태와 검사 이력 비교</h3><p>설비 탐색 구조와 검사 위치를 연결하고, 회차별 결과와 상세 정보를 함께 확인하도록 구성했습니다.</p></div><div><Picture name="manager-report" alt="검사 보고서와 수명평가 분석 정보를 함께 확인하는 화면" /><h3>검사 보고서와 분석 정보 확인</h3><p>검사 결과 보고서 옆에 수명평가·상태·결함 분석을 배치해, 결과와 관련 정보를 함께 검토하도록 구성했습니다.</p></div></div>
      </section>
      <section className={`${styles.part} ${styles.result}`}>
        <Heading result label="결과" title="판독 화면 진입은 빠르게, 설비 현황은 한눈에"><p>검사자는 판독 화면까지 더 적은 클릭과 짧은 시간으로 진입할 수 있게 되었습니다.</p><p>관리자는 설비 현황과 검사 결과를 한곳에서 확인할 수 있으며, 인터뷰에서도 다음 검사 대상을 파악하기 편해졌다는 반응을 확인했습니다.</p></Heading>
        <div className={`${styles.inset} ${styles.metrics}`}><div><h3>판독 화면 진입까지<br className={styles.mobileBreak} /> 클릭 수</h3><p><span>7회</span><span className={styles.metricArrow} aria-label="에서"> → </span><strong>3회</strong></p><small>4회 감소</small></div><div><h3>판독 화면 진입<br className={styles.mobileBreak} /> 평균 소요 시간</h3><p><span>1분 23초</span><span className={styles.metricArrow} aria-label="에서"> → </span><strong>21초</strong></p><small>평균 62초 단축</small></div></div>
        <div className={`${styles.inset} ${styles.quotes}`}><Quote role="검사자"><p>짧은 시간에 판독을 끝내야 하는데, 번거로운 단계가 확 줄어서 빨라졌어요</p></Quote><Quote role="관리자"><p>설비 상태가 어떤지, 그래서 다음 검사는 언제 어떤 설비를 해야 할지를 한눈에 볼 수 있어 편해요</p></Quote></div>
      </section>
    </div>

    <div className={`${styles.band} ${styles.gray}`}>
      <section className={styles.part}>
        <Heading label="개선 사례 2" title="검사자의 최종 판단을 돕기 위한 AI 경험 설계"><p>검사자들은 AI가 자신의 역할을 대체하거나, 자신의 판독 능력이 AI와 직접 비교되는 상황에 부담을 느꼈습니다.</p><p>그래서 검사자가 필요에 따라 AI를 활용하고, 결과를 확인·수정한 뒤 최종 판단하도록 설계했습니다.</p><p>판독 결과를 기록하고 보고서로 연결해, AI의 도움이 업무를 마무리하는 과정까지 이어지도록 했습니다.</p></Heading>
        <div className={styles.aiVisuals}>
<Picture className={styles.annotated} name="ai-annotated" width={1280} height={939} alt="AI 결함 목록을 별도 탭에서 확인하고, AI 판독 결과를 보거나 숨기며, 검사자가 판정한 결함을 직접 보고서에 추가하는 IRIS 뷰어" />
          <NdtAiMobile />
        </div>
        <div className={styles.reports}><div><h3>검사자가 확정한 판독 결과를 보고서로 연결</h3><p>검사자가 최종 판단한 결과를 보고서와 자동 연동하고, 해당 설비의 종합 진단 결과를 자동으로 작성합니다.</p></div><Picture name="report-diagnosis" width={434} height={614} alt="검사자가 확정한 결함과 검사 정보를 종합한 진단 보고서" /><Picture name="report-maintenance" width={434} height={614} alt="검사 결과에 기반한 예측 및 유지보수 전략 보고서" /></div>
      </section>
      <section className={`${styles.part} ${styles.result}`}>
        <Heading result label="결과" title="현장에서 활용되는 AI, 검사자가 체감한 판독 지원"><p>현장 사용에서 AI 평가 기능 활용률은 97%, 사용 후 설문에서 AI 기능 만족도는 5점 만점에 4.3점으로 나타났습니다.</p><p>검사자 인터뷰에서는 반복 판독의 피로가 줄고, 사용 경험을 통해 AI의 도움을 체감했다는 반응을 확인했습니다.</p></Heading>
        <div className={`${styles.inset} ${styles.metrics} ${styles.aiMetrics}`}><div><h3>AI 평가 기능 활용률<span>(현장 전체 검사 중 사용 비율 기준)</span></h3><strong>97%</strong></div><div><h3>AI 기능 만족도<span>(사용 후 설문 기준)</span></h3><p><strong>4.3</strong><span> / 5점</span></p></div></div>
        <div className={`${styles.inset} ${styles.quotes} ${styles.caseTwoQuotes}`}><Quote role="검사자"><p>하루에 몇 백건의 데이터를 반복 판독하는 시간을 AI가 단축해줘서 피로가 덜합니다.</p><p>처음에는 꺼렸는데, 써보니 판독에 도움이 많이 됩니다.</p></Quote></div>
      </section>
    </div>

    <div className={`${styles.band} ${styles.closingBand}`}>
      <section className={styles.part}>
        <Heading label="결과" title="기술 검증용 MVP에서, 국내외 현장 도입과 수익화까지"><p>2026년, DEEP-NDT는 국내외 원전 및 정유화학 기업에 실제 도입되어 수익화를 실현했습니다.</p><p>고객사의 사용 피드백을 반영한 반복 개선과 팀의 제품화 노력이 사업 성과로 이어졌습니다.</p></Heading>
        <ol className={`${styles.inset} ${styles.journey}`}><li><h3><span className={styles.journeyPrefix}>출발점 | </span><strong>기술 검증용 MVP</strong></h3><p>데이터 조회와 AI 결함 평가,<br />간이 보고서 내보내기</p></li><li><h3><span className={styles.journeyPrefix}>개선 | </span><strong>현장에 맞춘 반복 개선</strong></h3><p>고객사 사용과 피드백을 반복하며<br />역할별 구조와 AI 활용 경험 개선</p></li><li><h3>2026 | 현장 도입과 수익화</h3><p>국내외 원전·정유화학 기업 도입<br />및 수익화 실현</p></li></ol>
      </section>
      <section className={styles.part}>
        <Heading label="회고" title="도메인과 사용자 이해를 설계의 판단 기준으로"><p>비파괴검사에 대한 이해가 깊어질수록 사용자가 겪는 어려움과 필요한 기능을 더 구체적으로 판단할 수 있었습니다.</p><p>사용자의 요구를 이해하는 데서 나아가, 어떤 기능이 실제 도입과 구매로 이어질 수 있는지 살펴보는 시각도 얻었습니다.</p><p>앞으로도 도메인과 사용자에 대한 이해를 설계의 출발점으로 삼겠습니다.</p></Heading>
        <dl className={`${styles.inset} ${styles.reflections}`}><div><dt>데이터로 판단하고, 검증 근거 남기기</dt><dd>데이터를 바탕으로 개선 방향을 정하면서 불필요한 논의를 줄였고, 사용자 설득에 활용했습니다.</dd></div><div><dt>파일럿부터 판매까지 경험 넓히기</dt><dd>제품 라이프 사이클을 경험하며, 화면을 넘어 도입과 운영까지 살피는 관점을 키웠습니다.</dd></div><div><dt>역할의 경계보다 문제 해결에 집중하기</dt><dd>문제 해결에 필요한 일이라면 역할에 한계를 두지 않고 적극적으로 제안하고 실행했습니다.</dd></div></dl>
      </section>
    </div>
  </div>;
}
