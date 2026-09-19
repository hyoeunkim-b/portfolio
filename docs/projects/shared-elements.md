# 프로젝트 상세 공통 요소

프로젝트별로 콘텐츠를 조합하되, 요약과 정보 위계·반응형 정렬을 재사용한다. 공통화의 목적은 관찰–판단–결과를 일관된 구조로 전달하고 반복 구현을 줄이는 것이다.

## 색상 지정

`src/data/projects.ts`의 해당 프로젝트에 `theme`을 추가한다. DEEP-NDT의 확정 예:

```tsx
theme: {
  accent: "#2566ff",
  accentText: "#215edc",
  accentSurface: "#e8f0ff",
  onAccent: "#ffffff",
}
```

색상은 상세 article 안에만 적용된다. 작은 글자와 배경의 대비를 검수하고, 새로운 프로젝트 색상은 임의로 확정하지 않는다. 미지정 상태의 공통 요소는 중립색이다. 기존 프로젝트에서 공유하던 본문 태그도 프로젝트 강조색을 참조한다. 나머지 개별 본문 레이아웃은 해당 상세 페이지를 재설계할 때 전환한다.

## 본문 작성

```tsx
import { ProjectSectionHeading, ProjectFigure, ProjectReflections } from "@/components/project-detail/elements";
import styles from "./project.module.css";

<div className={styles.band}>
  <section className={styles.section}>
    <ProjectSectionHeading label="상황" title="실제 프로젝트의 제목">
      <p>상황과 판단의 근거를 설명합니다.</p>
    </ProjectSectionHeading>
    <ProjectFigure
      src="/images/projects/example/screen.webp"
      alt="이미지에 담긴 화면과 의미"
      width={1440}
      height={810}
      caption="이미지를 이해하는 데 필요한 설명"
      captionColumns="right-half"
    />
  </section>
  <section className={styles.section}>
    <ProjectSectionHeading label="회고" title="실제 배운 점" />
    <ProjectReflections items={[
      { title: "회고 항목", description: "실제 경험과 다음에 바꿀 점" },
    ]} />
  </section>
</div>
```

프로젝트 CSS에서는 경로를 맞춰 아래처럼 사용한다.

```css
.band { composes: band from "../../components/project-detail/elements.module.css"; }
.section { composes: section from "../../components/project-detail/elements.module.css"; }
```

- 위 예시의 콘텐츠·이미지 경로는 사용법 설명용이며 실제 프로젝트 자료로 교체한다.
- `ProjectSectionHeading`의 `result` 옵션은 기존 결과 태그의 테두리 스타일이다.
- `ProjectFigure`는 기본적으로 그림자가 없다. 검수된 화면에만 `shadow` 옵션을 사용한다.
- `ProjectReflections`의 제목·설명·구분선은 모바일 우측 3열에 함께 정렬된다. 큰 화면의 추가 들여쓰기는 프로젝트에서 `className`으로 지정한다.
- 요약은 공통 route에서 `ProjectOverview`로 표시한다. 긴 소개 문단 등 별도 콘텐츠가 필요한 경우에도 같은 컴포넌트를 사용한다.
- GIF 목업, 도식, 수치 카드, 슬라이드는 본문의 필요에 맞춰 개별 구성한다.
