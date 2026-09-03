import Image from "next/image";
import { assetPath } from "@/lib/asset-path";
import styles from "./bluedot.module.css";

const adminScreens = [
  ["admin-class.png", 2209, "강의 관리 화면"],
  ["admin-material.png", 1101, "강의 자료 업로드 화면"],
  ["admin-user.png", 1101, "사용자별 강의 정보 화면"],
  ["admin-statistics.png", 1101, "메타버스 플랫폼 이용 통계 화면"],
] as const;

const softwareScreens = [
  ["software-ui-1.png", "메타버스 소프트웨어 UI 컴포넌트 1"],
  ["software-ui-2.jpg", "메타버스 소프트웨어 UI 컴포넌트 2"],
  ["software-ui-3.png", "메타버스 소프트웨어 UI 컴포넌트 3"],
] as const;

export default function KitContent() {
  return (
    <div className={styles.content}>
      <section className={styles.introduction}>
        <p className={styles.label}>Overview</p>
        <div className={styles.copy}>
          <h2>메타버스 수업과 학습관리를 하나의 서비스로 연결했습니다.</h2>
          <p>가상공간에서 학교를 소개하고 원격 강의를 진행할 수 있는 Unity 기반 메타버스 소프트웨어와, 이를 내려받고 강의를 관리하는 웹사이트를 함께 구축한 프로젝트입니다. 웹사이트 전 페이지의 UX/UI 기획, 디자인과 퍼블리싱, 소프트웨어 주요 UI 컴포넌트 디자인을 담당했습니다.</p>
        </div>
      </section>

      <section className={styles.visualSection}>
        <div className={styles.sectionHeading}><p className={styles.label}>Website</p><div><h2>사용자와 운영자의 학습 흐름을 반응형 웹으로 구성했습니다.</h2><p>메인과 로그인 같은 기본 화면부터 강의 관리, 수강 정보, 자료 업로드와 이용 통계까지 서로 다른 사용자의 과업이 자연스럽게 이어지도록 설계했습니다.</p></div></div>
        <div className={styles.gallery}>
          <figure><Image src={assetPath("/images/projects/kit/main.png")} alt="경남정보대학교 메타버스 플랫폼 메인 화면" width={1920} height={3923} sizes="(min-width: 768px) 50vw, 100vw" /></figure>
          <figure><Image src={assetPath("/images/projects/kit/login.png")} alt="경남정보대학교 메타버스 플랫폼 로그인 화면" width={1920} height={950} sizes="(min-width: 768px) 50vw, 100vw" /></figure>
        </div>
      </section>

      <section className={styles.visualSection}>
        <div className={styles.sectionHeading}><p className={styles.label}>Learning Management</p><div><h2>강의 운영에 필요한 정보를 찾고 관리하기 쉽게 정리했습니다.</h2><p>강의와 자료, 사용자별 수강 정보와 이용 현황을 관리자가 한 흐름 안에서 확인할 수 있도록 화면 구조와 정보 위계를 구성했습니다.</p></div></div>
        <div className={styles.gallery}>{adminScreens.map(([file, height, alt]) => <figure key={file}><Image src={assetPath(`/images/projects/kit/${file}`)} alt={alt} width={1920} height={height} sizes="(min-width: 768px) 50vw, 100vw" /></figure>)}</div>
      </section>

      <section className={styles.visualSection}>
        <div className={styles.sectionHeading}><p className={styles.label}>Software UI</p><div><h2>웹사이트와 메타버스 소프트웨어의 경험을 일관되게 맞췄습니다.</h2><p>소프트웨어 안에서 반복적으로 사용하는 주요 UI 요소를 컴포넌트 단위로 정리해 기능과 상태를 명확히 전달하도록 디자인했습니다.</p></div></div>
        <div className={styles.gallery}>{softwareScreens.map(([file, alt]) => <figure key={file}><Image src={assetPath(`/images/projects/kit/${file}`)} alt={alt} width={1920} height={1080} sizes="(min-width: 768px) 50vw, 100vw" /></figure>)}</div>
      </section>
    </div>
  );
}
