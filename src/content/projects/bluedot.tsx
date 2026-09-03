import Image from "next/image";
import { assetPath } from "@/lib/asset-path";
import styles from "./bluedot.module.css";

const visuals = [
  { title: "사용자용 웹&앱", description: "사용권을 구매하고 좌석을 이용하는 핵심 흐름을 직관적으로 구성했습니다.", src: assetPath("/images/projects/bluedot/user-app.png"), width: 1920, height: 6840, alt: "Bluedot Lounge 사용자용 웹과 앱 주요 화면" },
  { title: "키오스크", description: "매장 방문자가 필요한 기능을 빠르게 찾고 이용할 수 있도록 키오스크 화면을 설계했습니다.", src: assetPath("/images/projects/bluedot/kiosk.png"), width: 1920, height: 2864, alt: "Bluedot Lounge 키오스크 주요 화면" },
  { title: "출석 체크와 커뮤니티", description: "내부 사용자 사이의 지속적인 참여를 돕기 위해 출석 체크와 게시판 기능을 기획하고 구현했습니다.", src: assetPath("/images/projects/bluedot/attendance.png"), width: 1920, height: 3967, alt: "출석 체크와 커뮤니티 기능 화면" },
  { title: "화면정의서", description: "기획자, 디자이너, 개발자가 같은 흐름을 공유할 수 있도록 화면과 동작을 문서화했습니다.", src: assetPath("/images/projects/bluedot/specification.png"), width: 1920, height: 2037, alt: "Bluedot Lounge 화면정의서" },
];

export default function BluedotContent() {
  return (
    <div className={styles.content}>
      <section className={styles.introduction}>
        <p className={styles.label}>Overview</p>
        <div className={styles.copy}>
          <h2>스터디카페 이용 경험을 하나의 흐름으로 연결했습니다.</h2>
          <p>Bluedot Lounge는 부울경 지역에 체인점을 운영하던 스터디카페입니다. 사용자의 행동과 이용 맥락을 살펴 사용권 결제부터 좌석 이용까지의 과정을 간편하게 정리하고, 사용자용·키오스크용 웹&앱을 디자인하고 퍼블리싱했습니다.</p>
        </div>
      </section>

      {visuals.map((visual) => (
        <section className={styles.visualSection} key={visual.title}>
          <div className={styles.sectionHeading}><p className={styles.label}>Experience</p><div><h2>{visual.title}</h2><p>{visual.description}</p></div></div>
          <figure><Image src={visual.src} alt={visual.alt} width={visual.width} height={visual.height} sizes="(min-width: 1200px) calc(100vw - 80px), 100vw" /></figure>
        </section>
      ))}

      <section className={styles.brandSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.label}>Brand Experience</p>
          <div><h2>가볍게 공부를 시작할 수 있는 브랜드</h2><p>합리적인 가격이라는 차별점을 바탕으로 마음도 지갑도 가볍게 공부를 시작할 수 있는 이미지를 제안했습니다. 기존의 딱딱한 BI를 정리하고 새로운 로고 체계와 친근한 캐릭터, 온·오프라인 홍보물을 제작했습니다.</p></div>
        </div>
        <div className={styles.brandGrid}>
          <figure><Image src={assetPath("/images/projects/bluedot/brand-identity.png")} alt="Bluedot Lounge 브랜드 아이덴티티" width={1920} height={906} sizes="(min-width: 768px) 50vw, 100vw" /></figure>
          <figure><Image src={assetPath("/images/projects/bluedot/posters.png")} alt="Bluedot Lounge 포스터 디자인" width={1920} height={906} sizes="(min-width: 768px) 50vw, 100vw" /></figure>
        </div>
        <figure className={styles.blog}><Image src={assetPath("/images/projects/bluedot/blog.jpg")} alt="Bluedot Lounge 블로그 콘텐츠 디자인" width={3242} height={3778} sizes="(min-width: 1200px) calc(100vw - 80px), 100vw" /></figure>
      </section>
    </div>
  );
}
