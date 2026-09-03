import Image from "next/image";
import { assetPath } from "@/lib/asset-path";
import styles from "./bluedot.module.css";

export default function PaiaContent() {
  return (
    <div className={styles.content}>
      <section className={styles.introduction}>
        <p className={styles.label}>Overview</p>
        <div className={styles.copy}>
          <h2>정보를 보여주는 웹사이트를, 비즈니스 기회가 쌓이는 접점으로 바꿨습니다.</h2>
          <p>DEEP-AI의 가장 최근 웹사이트 리뉴얼 프로젝트입니다. 디자이너이자 PM으로 외부 기획자와 함께 서비스 구조를 기획하고, 전체 내용과 콘텐츠 제작부터 UX/UI 디자인, 퍼블리싱까지 진행했습니다. 개발팀과는 문의 및 채용 데이터가 실제 운영으로 이어질 수 있도록 기능과 데이터 구조를 조율했습니다.</p>
        </div>
      </section>

      <section className={styles.visualSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.label}>Challenge</p>
          <div>
            <h2>회사와 제품 소개만으로는 실제 고객 행동을 만들기 어려웠습니다.</h2>
            <p>기존 웹사이트는 기술력과 제품 정보를 전달하는 데 집중되어 있어, 관심을 가진 방문자가 상담이나 협업으로 이어질 수 있는 경로가 충분하지 않았습니다. 리뉴얼의 목표를 단순 정보 전달이 아니라 ‘실질적인 비즈니스 리드 확보’로 다시 정의했습니다.</p>
          </div>
        </div>
      </section>

      <section className={styles.visualSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.label}>Strategy</p>
          <div>
            <h2>기술 정보와 방문자의 목적을 연결하고, 필요한 순간마다 CTA를 배치했습니다.</h2>
            <p>솔루션, 서비스, 적용 산업과 기술 인증을 고객의 탐색 흐름에 맞춰 재구성했습니다. 각 페이지의 콘텐츠를 일괄 제작하고, 도입 검토와 데모 신청, 기술 협업 등 다음 행동으로 자연스럽게 이어지도록 맥락에 맞는 CTA를 설계했습니다.</p>
          </div>
        </div>
        <div className={styles.gallery}>
          <figure className={styles.outlinedFigure}><Image src={assetPath("/images/projects/paia/solutions-full.png")} alt="DEEP-AI 솔루션 소개 전체 화면" width={1440} height={5992} sizes="(min-width: 768px) 50vw, 100vw" /></figure>
          <figure className={styles.outlinedFigure}><Image src={assetPath("/images/projects/paia/industries-full.png")} alt="DEEP-AI 산업별 솔루션 소개 전체 화면" width={1440} height={5973} sizes="(min-width: 768px) 50vw, 100vw" /></figure>
        </div>
      </section>

      <section className={styles.visualSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.label}>Lead System</p>
          <div>
            <h2>고객 문의와 채용 지원을 운영 가능한 데이터로 축적했습니다.</h2>
            <p>도입·데모, 기술 협업, 투자 문의처럼 목적별로 필요한 입력 항목을 달리 설계하고, 접수된 고객 정보를 관리자 페이지와 데이터베이스에 연결했습니다. 자체 채용 페이지와 상시 지원 경로도 구현해 지원자 정보를 지속해서 관리할 수 있는 채용 풀을 만들었습니다.</p>
          </div>
        </div>
        <div className={styles.gallery}>
          <figure className={styles.outlinedFigure}><Image src={assetPath("/images/projects/paia/deepai-3.png")} alt="DEEP-AI 문의 유형과 비즈니스 리드 수집 폼 전체 화면" width={1440} height={3393} sizes="(min-width: 768px) 50vw, 100vw" /></figure>
          <figure className={styles.outlinedFigure}><Image src={assetPath("/images/projects/paia/deepai-4.png")} alt="DEEP-AI 자체 채용 페이지 전체 화면" width={1440} height={5320} sizes="(min-width: 768px) 50vw, 100vw" /></figure>
        </div>
      </section>

      <section className={styles.introduction}>
        <p className={styles.label}>Outcome</p>
        <div className={styles.copy}>
          <h2>배포 이틀 만에 실제 비즈니스 고객의 문의를 확보했습니다.</h2>
          <p>방문자가 기술을 이해하는 데서 멈추지 않고 곧바로 상담을 요청할 수 있도록 정보 구조와 행동 경로를 연결한 결과입니다. 웹사이트가 브랜드 소개 채널을 넘어 영업과 채용을 지원하는 실질적인 비즈니스 도구로 작동하기 시작했습니다.</p>
        </div>
      </section>
    </div>
  );
}
