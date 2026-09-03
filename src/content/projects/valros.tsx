import Image from "next/image";
import { assetPath } from "@/lib/asset-path";
import styles from "./bluedot.module.css";

const phaseOne = [
  ["phase1-list.png", "시나리오 목록"],
  ["phase1-create.png", "시나리오 생성"],
  ["phase1-scenario.png", "시나리오 제작"],
  ["phase1-scene.png", "씬 제작"],
] as const;

const phaseTwo = [
  ["phase2-grid.png", "시나리오 목록 이미지형 보기"],
  ["phase2-list.png", "시나리오 목록 리스트형 보기"],
  ["phase2-export.png", "시나리오 내보내기"],
  ["phase2-tutorial-1.png", "초기 튜토리얼"],
  ["phase2-tutorial-2.png", "에디터 튜토리얼"],
  ["phase2-editor-1.png", "VR 에디터 화면 1"],
  ["phase2-editor-2.png", "VR 에디터 화면 2"],
  ["phase2-editor-3.png", "VR 에디터 화면 3"],
  ["phase2-viewer.png", "VR 콘텐츠 뷰어"],
] as const;

function Gallery({ images }: { images: ReadonlyArray<readonly [string, string]> }) {
  return <div className={styles.gallery}>{images.map(([file, alt]) => <figure key={file}><Image src={assetPath(`/images/projects/valros/${file}`)} alt={alt} width={1920} height={file.startsWith("phase1") ? 922 : 945} sizes="(min-width: 768px) 50vw, 100vw" /></figure>)}</div>;
}

export default function ValrosContent() {
  return (
    <div className={styles.content}>
      <section className={styles.introduction}>
        <p className={styles.label}>Overview</p>
        <div className={styles.copy}>
          <h2>VR 시나리오 제작 과정을 웹에서 이해할 수 있게 만들었습니다.</h2>
          <p>VALROS Web VR Editor는 사용자가 웹에서 VR 시나리오를 작성하고, HMD를 통해 VR 환경에서 실행할 수 있도록 만든 에디터입니다. 연구과제 단계의 사용성 개선과 이후 고도화 프로젝트의 UX/UI 기획 및 디자인, 퍼블리싱을 담당했습니다.</p>
        </div>
      </section>

      <section className={styles.visualSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.label}>Phase 01</p>
          <div><h2>진행 중인 개발 구조 안에서 사용성을 개선했습니다.</h2><p>세부 개발이 상당 부분 진행된 시점에 내부 사용이 어렵다는 피드백을 받았습니다. 정해진 기한 안에 실제 적용할 수 있는 범위를 먼저 판단하고, 주요 과업을 직관적으로 수행할 수 있도록 UX와 UI를 개선해 납품했습니다.</p></div>
        </div>
        <Gallery images={phaseOne} />
      </section>

      <section className={styles.visualSection}>
        <div className={styles.sectionHeading}>
          <p className={styles.label}>Phase 02</p>
          <div><h2>범용적인 VR 콘텐츠 제작 도구로 확장했습니다.</h2><p>고도화 단계에서는 1단계에서 충분히 다루지 못했던 사용성을 다시 살펴봤습니다. 목록 탐색 방식, 시나리오 내보내기, 튜토리얼, 에디터와 뷰어의 흐름을 연결해 다양한 시나리오에 활용할 수 있는 제품으로 정리했습니다.</p></div>
        </div>
        <Gallery images={phaseTwo} />
      </section>
    </div>
  );
}
