import Image from "next/image";
import { assetPath } from "@/lib/asset-path";
import styles from "./bluedot.module.css";

const managementScreens = [
  ["mgt1.png", 1440, 800, "전체 설비 현황과 수명 현황 대시보드"],
  ["mgt2.png", 3840, 2160, "설비별 검사 결과 비교 화면"],
  ["mgt3.png", 1440, 800, "검사 결과 보고서 작성 화면"],
  ["mgt4.png", 3840, 2160, "검사 결과와 수명평가 분석 화면"],
] as const;

export default function NdtContent() {
  return (
    <div className={styles.content}>
      <section className={styles.introduction}>
        <p className={styles.label}>Overview</p>
        <div className={styles.copy}>
          <h2>기술 검증용 MVP를 실제 검사 현장에서 쓰고 판매할 수 있는 제품으로 발전시켰습니다.</h2>
          <p>DEEP-NDT는 AI로 비파괴검사 데이터를 판독하고 검사 결과와 설비 상태를 관리하는 소프트웨어입니다. 경쟁 환경과 실제 검사 업무를 관찰하고, 제품·운영·판매에 흩어진 접점을 연결해 약 2년간 제품 경험과 디자인 체계를 고도화했습니다.</p>
        </div>
      </section>

      <section className={styles.visualSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.label}>Starting Point</p>
          <div>
            <h2>기술은 작동했지만, 현장 운영을 위한 제품 구조는 준비되지 않았습니다.</h2>
            <p>합류 당시에는 로그인, 데이터 업로드, AI 판독과 결과 내보내기 등 최소 기능만 존재했습니다. 실제 조직에서 사용하려면 운영자와 검사자의 역할·권한, 계정 수명주기, 프로젝트와 설비 관리, 일관된 UI 패턴까지 제품의 범위를 다시 정의해야 했습니다.</p>
          </div>
        </div>
      </section>

      <section className={styles.visualSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.label}>Inspection Viewer</p>
          <div>
            <h2>검사자가 판독의 맥락을 벗어나지 않고 판단과 기록을 끝내도록 재구성했습니다.</h2>
            <p>검사자 6명의 실제 작업을 관찰하고 경쟁 제품과 판독·보고서 작성 시간을 비교했습니다. 판독 영역을 잠식하던 메뉴를 정리하고, AI 자동 판독 결과의 확인과 편집을 같은 화면 안에서 이어갈 수 있도록 ECT와 IRIS 뷰어를 개선했습니다.</p>
          </div>
        </div>
        <div className={styles.gallery}>
          <figure className={styles.outlinedFigure}><Image src={assetPath("/images/projects/ndt/viewer-ect.jpg")} alt="DEEP-NDT ECT 판독 뷰어" width={3840} height={2160} sizes="(min-width: 768px) 50vw, 100vw" /></figure>
          <figure className={styles.outlinedFigure}><Image src={assetPath("/images/projects/ndt/viewer-iris.png")} alt="DEEP-NDT IRIS 판독 뷰어" width={2880} height={1600} sizes="(min-width: 768px) 50vw, 100vw" /></figure>
        </div>
      </section>

      <section className={styles.visualSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.label}>Management</p>
          <div>
            <h2>하나의 공통 흐름을 역할별 제품 구조와 설비 관리 경험으로 확장했습니다.</h2>
            <p>플랜트 운영자에게는 프로젝트와 설비 상태, 수명 추이와 보고서가 우선 보이도록 하고, 검사자에게는 데이터 업로드와 판독, 결과 기록이 자연스럽게 이어지도록 구성했습니다. 사이트·유닛·설비·검사 프로젝트의 관계와 접근 권한도 함께 구조화했습니다.</p>
          </div>
        </div>
        <div className={styles.gallery}>
          {managementScreens.map(([file, width, height, alt]) => (
            <figure className={styles.outlinedFigure} key={file}><Image src={assetPath(`/images/projects/ndt/${file}`)} alt={alt} width={width} height={height} sizes="(min-width: 768px) 50vw, 100vw" /></figure>
          ))}
        </div>
      </section>

      <section className={styles.introduction}>
        <p className={styles.label}>Outcome</p>
        <div className={styles.copy}>
          <h2>판독 결과를 설비 운영과 판매 가능한 보고서까지 이어지는 제품 경험으로 만들었습니다.</h2>
          <p>PoC의 기능 중심 구조를 역할 기반 제품 구조로 확장하고, 프로젝트·설비·결과·데이터 관리 기능을 구축했습니다. 제품 밖에서 따로 진행되던 보고 업무도 판독 데이터와 연결해 검사 용역과 소프트웨어 판매에 활용할 수 있는 운영 제품으로 정리했습니다.</p>
        </div>
      </section>
    </div>
  );
}
