import type { CSSProperties } from "react";
import { ProjectOverview, ProjectSectionHeading as Heading, ProjectReflections } from "@/components/project-detail/elements";
import { WebsiteVideo, WebsiteImage, OldWebsite } from "./paia-media";
import styles from "./paia.module.css";

export function PaiaOverview() {
  return <ProjectOverview metadata={[
    { label: "기업/클라이언트", value: "DEEP-AI" },
    { label: "진행 기간", value: "2026. 6. ~ 2026. 7." },
    { label: "역할", value: "PD, PM" },
    { label: "협업 팀 구성", value: <>PD·PM 1명(본인),<br />기획자 1명, FE 2명</> },
    { label: "주요 담당 업무", value: "기획 및 일정 관리, UX/UI 설계, 디자인 시스템 구축, 콘텐츠 제작, 웹 퍼블리싱, QA", wide: true },
  ]}>
    <p>DEEP-AI는 비파괴검사 솔루션을 제공하는 기업입니다. 이번 리뉴얼에서는 방문자가 회사의 기술과 솔루션을 이해한 뒤, 도입 문의나 채용 지원으로 이어질 수 있도록 웹사이트를 재구성했습니다.</p>
    <p>PD이자 PM으로 외부 기획자와 서비스 구조를 기획하고, 콘텐츠 기획·제작, UX/UI 디자인과 웹 퍼블리싱을 담당했습니다. 개발팀과는 문의 및 채용지원 정보를 DB화하여 관리할 수 있도록 기능과 데이터 구조를 조율했습니다.</p>
  </ProjectOverview>;
}

function Flow({ steps }: { steps: [string, string][] }) {
  return <ol className={styles.flow}>{steps.map(([title, body], i) => <li key={title}><h3 className={i === 1 ? styles.accent : undefined}>{title}</h3><p>{body}</p></li>)}</ol>;
}

export default function PaiaContent() {
  return <div className={styles.content}>
    <div className={styles.preview}>
      <a className={styles.siteLink} href="https://deep-ai.kr/ko" target="_blank" rel="noreferrer">DEEP-AI 바로가기 <span aria-hidden="true">↗</span><span className={styles.srOnly}> (새 창)</span></a>
      <WebsiteVideo variant="laptop" />
    </div>
    <div className={`${styles.band} ${styles.gray}`}>
      <section className={styles.section}>
        <Heading className={styles.heading} label="상황" title="온라인 문의 경로가 부족했던 기존 웹사이트"><p>기존 웹사이트는 기술과 제품 소개에 집중되어 있어, 관심을 가진 방문자가 상담이나 협업을 요청할 경로가 부족했습니다.</p><p>문의는 주로 전화로 접수됐지만, 고객 응대 체계가 갖춰지지 않아 신속하고 전문적인 대응에 어려움이 있었습니다.</p></Heading>
        <figure className={`${styles.inset} ${styles.chart}`}>
          <figcaption>리뉴얼 전 문의 채널 비중</figcaption>
          <dl>{[["전화", 74], ["이메일", 22], ["웹사이트", 4]].map(([label, value], i) => <div key={label} className={i === 2 ? styles.accent : undefined}><dt>{label}</dt><dd><span className={styles.bar} style={{ "--bar-value": `${value}%`, "--bar-color": ["#8f939f", "#b9bdcd", "var(--project-accent)"][i] } as CSSProperties} /><strong>{value}%</strong></dd></div>)}</dl>
          <p>2024. 8. – 2026. 4. 접수 문의 기준</p>
        </figure>
      </section>
      <section className={styles.section}>
        <Heading className={styles.heading} label="목표" title="기술에 대한 관심을 실제 비즈니스 문의로 연결한다."><p>도입·데모·기술 협업을 검토하는 방문자가 목적에 맞는 문의를 남기도록 설계하고,</p><p>접수된 정보를 담당자가 확인하여 후속 상담으로 이어갈 수 있는 기반을 마련하는 것에 집중했습니다.</p></Heading>
        <div className={`${styles.inset} ${styles.goal}`}><div><h3>AS-IS</h3><p>회사 · 기술 · 제품 소개 중심</p></div><div><h3>TO-BE</h3><p>정보 탐색 <span aria-hidden="true">→</span> <b>목적별 문의</b> <span aria-hidden="true">→</span> <b>담당자 확인·상담</b></p></div></div>
      </section>
    </div>
    <div className={styles.band}>
      <section className={styles.section}>
        <Heading className={styles.heading} label="개선" title="기술과 제품을 쉽게 이해할 수 있도록 콘텐츠·디자인 재구성"><p>원페이지에 모여 있던 정보를 제품·서비스·산업 등 주제별 페이지로 나누고, 방문자가 필요한 정보를 찾아 도입 적합성을 판단할 수 있도록 콘텐츠를 구성했습니다.</p><p>각 페이지의 정보 위계와 시각 디자인을 새롭게 정리해, 회사의 기술과 솔루션을 일관된 방식으로 전달했습니다.</p></Heading>
        <div className={`${styles.inset} ${styles.comparison}`}>
          <div className={styles.oldMockup}><OldWebsite /></div>
          <div className={styles.newMockups}><div className={styles.mobileMockup} aria-hidden="true"><WebsiteImage name="mockup-mobile" width={413} height={794} alt="" /></div><WebsiteVideo /></div>
        </div>
      </section>
      <section className={styles.section}>
        <Heading className={styles.heading} label="" title="어떤 페이지에서든 문의할 수 있도록 CTA 구성"><p>공통 내비게이션과 각 페이지 하단에 문의 버튼을 배치해, 정보를 탐색하는 중에도 내용을 모두 읽은 뒤에도 문의로 이어질 수 있도록 했습니다.</p><p>문의 페이지에서는 도입·데모, 기술 협업, 투자 등 목적에 맞는 유형을 선택하고 필요한 정보를 남기도록 구성했습니다.</p></Heading>
        <div className={`${styles.inset} ${styles.ctaGrid}`}>
          <div className={styles.ctaMain}><WebsiteImage name="cta1" width={2254} height={1220} alt="공통 내비게이션 우측 문의하기 버튼" enlarge /></div>
          <div className={styles.ctaFooter}><WebsiteImage name="cta2" width={1087} height={561} alt="페이지 하단의 도입 문의 버튼" enlarge /></div>
          <WebsiteImage name="cta3" width={1087} height={835} alt="도입·데모, 기술 협업, 투자 문의와 채용 지원을 구분한 문의 폼" enlarge />
        </div>
      </section>
      <section className={styles.section}>
        <Heading className={styles.heading} label="" title="기본 질문은 문의 전에 확인할 수 있도록 FAQ 추가"><p>장비 호환, 기존 데이터 활용, 도입 기간과 비용 등 자주 묻는 내용을 문의 목적별로 정리했습니다.</p><p>방문자가 필요한 정보를 먼저 확인할 수 있도록 하고,<br />담당자는 고객의 구체적인 상황에 맞춘 상담에 집중할 수 있도록 했습니다.</p></Heading>
        <div className={styles.inset}><WebsiteImage name="faq" width={2254} height={1583} alt="도입·데모, 기술 협업, 채용 지원 목적별 자주 묻는 질문" enlarge /></div>
      </section>
      <section className={styles.section}>
        <Heading className={styles.heading} label="" title="빠른 응대와 체계적인 관리를 위한 알림·데이터 관리 기능 구현"><p>문의가 등록되면 담당자에게 알림을 보내 빠르게 확인하고 응대할 수 있도록 했습니다.</p><p>문의와 채용 지원 정보는 데이터베이스에 저장하고 유형별로 구분해, 접수 내역을 체계적으로 관리할 수 있도록 구성했습니다.</p></Heading>
        <div className={`${styles.inset} ${styles.operations}`}>
          <Flow steps={[["문의 등록", "방문자가 문의 목적과\n필요한 정보를 입력"], ["담당자에게 알림", "새 문의가 접수되면\n담당자에게 알림 전송"], ["문의 확인·응대", "담당자가 문의 내용을 확인하고\n후속 상담 진행"]]} />
          <Flow steps={[["문의·채용 지원 접수", "고객 문의와 채용 지원 정보를\n각각 접수"], ["데이터베이스 저장", "접수 정보를 저장해\n누적 내역 관리"], ["유형별 내역 관리", "고객 문의 내역 관리 및\n채용 지원자 인재풀 구축"]]} />
          <div className={styles.fullPages}><WebsiteImage name="contact" width={1088} height={2564} alt="목적별 문의 접수와 FAQ를 연결한 문의 페이지 전체 화면" enlarge /><WebsiteImage name="careers" width={1086} height={4013} alt="회사 소개, 복지, 채용 공고와 지원 절차를 담은 채용 페이지 전체 화면" enlarge /></div>
        </div>
      </section>
    </div>
    <div className={`${styles.band} ${styles.gray}`}>
      <section className={styles.section}>
        <Heading className={styles.heading} label="결과" title="회사 소개 중심의 웹사이트를 비즈니스 문의로 이어지는 채널로"><p>콘텐츠와 디자인을 전면 재구성하고, 정보 탐색부터 문의 접수·관리까지 이어지는 흐름을 마련했습니다.</p><p>배포 이틀 만에 실제 비즈니스 고객의 문의가 접수되며, 새로운 문의 경로가 활용되는 것을 확인했습니다.</p></Heading>
        <div className={`${styles.inset} ${styles.results}`}>{[
          ["정보 탐색", "제품·서비스·산업별 페이지로 구성해 필요한 정보를 찾고 도입 적합성을 판단하도록 지원"],
          ["문의 연결", "공통 문의 CTA와 목적별 문의 폼을 통해 관심을 구체적인 문의로 연결"],
          ["후속 대응", "담당자 알림과 데이터베이스 저장으로 문의 확인과 접수 내역 관리 지원"],
        ].map(([title, body]) => <div key={title}><h3>{title}</h3><p>{body}</p></div>)}</div>
      </section>
    </div>
    <div className={styles.band}>
      <section className={styles.section}>
        <Heading className={styles.heading} label="회고" title="비즈니스 목표를 콘텐츠와 디자인의 판단 기준으로"><p>이번 리뉴얼 프로젝트에서는 회사의 기술을 어떻게 보여줄지와 함께, 방문자가 무엇을 확인하고 어떤 행동으로 이어질지를 고민했습니다.</p><p>콘텐츠와 디자인, 문의 경로와 관리 기능을 함께 다루며 웹사이트의 역할을 후속 대응까지 연결해 보는 관점을 얻었습니다.</p></Heading>
        <ProjectReflections className={styles.inset} items={[
          { title: "방문자의 판단에 필요한 정보부터 구성하기", description: "회사가 전달할 정보와 방문자가 도입을 검토하는 데 필요한 정보를 함께 고려해 페이지를 구성했습니다." },
          { title: "화면과 운영을 하나의 흐름으로 설계하기", description: "정보 탐색과 문의 등록부터 담당자의 확인과 관리까지 이어지도록 설계 범위를 넓혔습니다." },
          { title: "초기 반응을 이후의 검증으로 이어가기", description: "문의 접수는 초기 반응으로 보고, 앞으로 상담 연결 여부와 문의의 적합성까지 확인할 필요가 있습니다." },
        ]} />
      </section>
    </div>
  </div>;
}
