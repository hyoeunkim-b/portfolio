# Technical Direction

## 1. Goals

기술은 브랜드 경험을 안정적으로 구현하고 사람이 직접 쉽게 수정할 수 있도록 선택한다. 복잡성이나 최신 도구 자체를 성과로 삼지 않는다.

핵심 기준:

- Next.js + React 기반
- 읽기 쉽고 위치를 예측할 수 있는 파일 구조
- 최소한의 외부 의존성
- 정적 콘텐츠 중심의 빠른 로딩
- 디자인 토큰과 전역 기반 위에 필요한 범위만 컴포넌트화
- 접근성, semantic HTML, reduced motion 기본 제공
- GitHub Pages 배포 가능성을 고려한 정적 출력 친화 구조

Next.js의 정확한 버전과 설정은 프로젝트 생성 시점의 안정 버전을 확인해 결정하며 문서에 고정된 최신값을 추정하지 않는다.

## 2. Suggested Structure — Initial

실제 Next.js 프로젝트를 생성할 때 다음처럼 단순한 App Router 구조를 우선 검토한다.

```text
app/
├── layout.tsx
├── page.tsx
├── work/
│   ├── page.tsx
│   └── [slug]/page.tsx
├── observations/
│   ├── page.tsx
│   └── [slug]/page.tsx
├── experiments/
│   ├── page.tsx
│   └── [slug]/page.tsx
├── about/page.tsx
└── globals.css
components/
├── site-header.tsx
├── site-footer.tsx
└── ...actual-repeated-patterns
content/
├── work/
├── observations/
└── experiments/
lib/
├── content.ts
└── ...only-shared-utilities
public/
docs/
```

이 구조는 `initial`이다. 실제 콘텐츠 방식과 배포 조건에 따라 조정하되, 폴더를 역할 없이 늘리지 않는다.

## 3. Rendering and Content

- 정적 생성 가능한 페이지를 기본으로 한다.
- 사용자 계정, 실시간 데이터, 서버 상태가 필요하지 않다면 서버 기능을 추가하지 않는다.
- 콘텐츠는 초기에는 로컬 Markdown/MDX 또는 타입이 명확한 데이터 파일을 우선한다.
- CMS는 편집 빈도, 작성자 수, 미리보기 필요가 확인된 뒤 검토한다.
- 동적 route는 정적 경로 생성과 GitHub Pages 호환성을 고려한다.
- 이미지 크기, 비율, alt, caption을 콘텐츠 모델에 포함한다.

## 4. Styling Architecture

### Global styles

`app/globals.css`에는 다음만 둔다.

- reset/normalization의 최소 기반
- 색상, 타이포, 공간, grid, motion 디자인 토큰
- body와 기본 element 스타일
- 접근성 공통 스타일: focus-visible, visually-hidden, reduced motion
- 사이트 전역 layout utility 중 실제 반복되는 소수

### Component-scoped styles

- 컴포넌트 전용 스타일은 CSS Modules 등 범위가 명확한 단순한 방식을 사용한다.
- 하나의 거대한 전역 클래스 모음이나 유틸리티 프레임워크를 기본 전제로 하지 않는다.
- 스타일 라이브러리는 현재 목표를 CSS로 달성하기 어려운 명확한 이유가 있을 때만 추가한다.

### Tokens

CSS custom properties를 사용한다.

```css
:root {
  /* color */
  --color-bg: #fff;
  --color-fg: #111;
  --color-muted: #6b6b6b;
  --color-line: #d9d9d9;
  --color-accent: #0057ff; /* initial placeholder, final color TBD */

  /* spacing: initial */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --space-16: 4rem;

  /* layout: initial */
  --page-gutter: 1rem;
  --grid-gap: 0.75rem;
  --section-space: clamp(5rem, 9vw, 10rem);

  /* motion: initial */
  --duration-fast: 150ms;
  --duration-base: 300ms;
  --ease-standard: cubic-bezier(0.2, 0, 0, 1);
}
```

위 예시의 Accent 값은 유효한 CSS 값으로 임시 설정하되 코드 주석으로 `TBD`를 남긴다. 토큰은 실제 반복되는 결정을 표현해야 하며, 가능한 모든 CSS 값을 미리 토큰화하지 않는다.

## 5. Responsive Implementation

- 모바일 스타일을 기본으로 작성한다.
- 약 4열 → 8열 → 12열을 media query에서 확장한다.
- breakpoint 숫자는 디자인 문서의 초기값으로 시작하고 콘텐츠가 깨지는 지점에서 조정한다.
- Grid를 주요 layout 도구로, Flexbox를 한 축 정렬에 사용한다.
- DOM 순서는 논리적 읽기 순서를 유지한다.
- 컨테이너 너비, gutter, 타이포는 유동값을 사용할 수 있지만 핵심 구성은 breakpoint에서 재조합한다.
- hover media feature와 pointer 특성을 고려하고 터치 환경에 동일한 정보 접근 경로를 둔다.

## 6. Component Rules

- 페이지 컴포넌트는 콘텐츠의 서사와 조합을 소유한다.
- 공통 컴포넌트는 최소 두 곳 이상에서 같은 의미와 변경 이유로 반복될 때 만든다.
- `variant` prop이 계속 늘어나는 범용 컴포넌트보다 목적이 명확한 작은 컴포넌트를 선호한다.
- 한 번 쓰는 얇은 wrapper를 추상화하지 않는다.
- 데이터 fetching, formatting, presentation을 무조건 계층별로 분리하지 않는다. 복잡성이 생길 때 분리한다.
- React client component는 브라우저 API나 상호작용이 필요한 최소 범위에만 사용한다.

## 7. Dependencies

기본 원칙은 **설치하지 않아도 되는 것은 설치하지 않는다**다.

- 아이콘: 소수라면 직접 관리하는 접근 가능한 SVG 우선
- 애니메이션: CSS 우선; 복잡한 상태 기반 모션이 확정될 때만 라이브러리 검토
- 전역 휠 스크롤: Lenis 1.3.11을 사용한다. `duration: 1.05`, `wheelMultiplier: 0.9`로 제한하며 `prefers-reduced-motion: reduce`에서는 생성하지 않는다.
- 상태 관리: React 기본 기능으로 해결할 수 없는 공유 상태가 확인될 때만 검토
- UI kit: Structured Editorial 방향과 충돌하므로 기본적으로 사용하지 않음
- CSS framework: 프로젝트 요구와 팀 선호가 명확해지기 전 도입하지 않음
- analytics, CMS, form service: 실제 요구와 개인정보 정책 확인 후 결정

새 의존성을 추가할 때는 해결하는 문제, 번들/유지보수 비용, 제거 가능성을 기록한다.

## 8. Accessibility Baseline

- semantic landmark: `header`, `nav`, `main`, `article`, `section`, `footer`
- 페이지당 명확한 `h1`, 순차적인 heading hierarchy
- skip link 제공
- 모든 상호작용의 키보드 사용 가능성과 visible focus
- 폼이 생기면 label, 오류 연결, 상태 안내 제공
- 정보 이미지 alt와 장식 이미지 처리 구분
- 색상 외의 상태 단서 제공
- `prefers-reduced-motion` 대응
- 접근 가능한 이름과 충분한 touch target
- 자동 검사와 수동 키보드 검사를 함께 수행

## 9. Performance and SEO

- 가능한 정적 HTML과 서버 컴포넌트를 활용한다.
- 이미지는 표시 크기에 맞추고 불필요한 고해상도 자산을 피한다.
- 폰트 파일의 weight/subset/format을 최소화하고 layout shift를 확인한다.
- 각 페이지에 고유한 title, description, canonical 정책을 둔다.
- Open Graph 이미지와 structured data는 실제 콘텐츠와 공유 요구가 준비된 후 추가한다.
- 기본 공유 이미지는 `public/meta-img.png`(1200×630)를 사용한다. 배포 환경에서는 `NEXT_PUBLIC_SITE_URL`에 공식 사이트 주소를 설정해 Open Graph 이미지의 절대 URL을 생성한다.
- third-party script는 명확한 가치가 있을 때만 로드한다.
- 성능 수치는 대표 페이지와 실제 배포 환경에서 측정한다.

## 10. Quality Checks

각 구현 단계에서 범위에 맞게 확인한다.

```text
format → lint → typecheck → build → browser review → accessibility review
```

- 모바일/태블릿/데스크톱에서 overflow, line break, image crop, focus를 확인한다.
- JavaScript가 불필요한 기본 탐색과 콘텐츠 읽기는 서버 렌더링된 HTML로 가능해야 한다.
- 실제 콘텐츠 길이의 짧음/김, 이미지 없음, 긴 영문 문자열을 시험한다.
- production build와 정적 배포 조건에서 route와 asset path를 확인한다.

정확한 명령은 프로젝트의 `package.json`이 생긴 뒤 기록한다.

## 11. Deployment

- 배포처: GitHub Pages
- 공식 주소: `https://hyoeunkim-b.github.io/portfolio/`
- 배포 방식: `main` 브랜치 push 시 GitHub Actions 자동 배포
- Next.js는 `output: "export"`, `trailingSlash: true`, 이미지 최적화 비활성화로 정적 출력한다.
- 배포 빌드에서만 `NEXT_PUBLIC_BASE_PATH=/portfolio`를 주입한다.
- `public/` 자산은 `assetPath()`를 통해 로컬과 `/portfolio` 하위 경로에서 모두 접근 가능하게 한다.
- 공유 메타데이터의 기준 주소는 `NEXT_PUBLIC_SITE_URL=https://hyoeunkim-b.github.io/portfolio`로 설정한다.

## 12. Decision Log Principle

브라우저 검수로 값이나 구조를 확정하면 다음 세 곳을 함께 확인한다.

1. 코드의 CSS token 또는 컴포넌트
2. 관련 `docs/*.md`
3. 필요하면 변경 이유를 남기는 짧은 decision note 또는 commit message

`TBD`는 누락이 아니라 의도적인 미결정이다. 실제 화면과 콘텐츠 없이 확정하지 말아야 할 항목을 표시한다.

## 디자인 확정 후 코드 정리 — 2026-09-19

대화와 브라우저 검수로 디자인을 확정한 뒤, 프로젝트 상세 페이지의 마무리 단계에서 다음을 수행한다.

- 같은 요소를 반복해서 덮어쓰는 선택자와 분산된 미디어 쿼리를 정리한다. 사용하지 않는 규칙과 임시 구현을 제거하되, 검수된 외형과 동작을 보존한다.
- 모바일을 기본값으로 두고 태블릿·큰 화면의 변경점만 확장 규칙으로 남긴다. 사용자 승인된 데스크톱 화면에 회귀가 없는지 확인한다.
- 사용자에게 받은 px 값은 기본 글자 크기 16px 기준의 rem으로 변환한다. 유동 크기가 필요한 경우에만 clamp를 사용하고, 이미 확정된 크기에 불필요한 유동 규칙을 추가하지 않는다.
- 반복되는 의미 있는 값만 토큰으로 묶는다. 프로젝트 전용 스타일은 해당 프로젝트 범위에 유지하며, 실제 재사용 근거 없이 공통 컴포넌트나 전역 스타일로 확대하지 않는다.
- 참조 이미지와 실제 서비스 자산을 구분하고, 제공·추출한 로컬 자산의 경로와 용도를 프로젝트 문서에 기록한다. 만료되는 Figma URL을 서비스 코드에 남기지 않는다.
- 정리 후 변경 범위에 맞는 린트·타입 검사·빌드와 모바일·태블릿·데스크톱 검수를 수행한다. 줄바꿈, 이미지 비율, 가로 넘침, 슬라이드 시작·끝 여백 및 키보드 동작을 확인한다.
- 문서에는 최종 규칙과 검수 상태를 기록한다. 계획된 코드 정리를 이미 완료한 작업처럼 기록하지 않는다.

## 프로젝트 상세 공통화 — 2026-09-19

- `src/components/project-detail/elements.tsx`에 서버 컴포넌트 `ProjectOverview`, `ProjectSectionHeading`, `ProjectFigure`, `ProjectReflections`를 둔다.
- `src/components/project-detail/elements.module.css`의 `band`, `section`은 프로젝트 CSS에서 `composes`로 재사용한다. 모바일을 기본으로 48rem·75rem 확장 규칙을 둔다.
- 프로젝트별 색상은 `src/data/projects.ts`의 `theme`에 지정한다. `src/lib/project-theme.ts`가 상세 article에 `--project-accent`, `--project-accent-text`, `--project-accent-surface`, `--project-on-accent`를 적용한다. 전역 브랜드 토큰은 덮어쓰지 않는다.
- `ProjectFigure.src`에는 `/images/...`처럼 base path를 붙이지 않은 경로를 전달한다. 내부에서 `assetPath()`를 적용한다. 크기와 alt는 필수이며, 캡션·그림자·모바일 캡션 정렬은 선택 사항이다.
- `ProjectOverview.metadata`는 `{ label, value, wide? }` 배열이다. 본문과 value는 ReactNode로 받아 프로젝트별 문단·줄바꿈을 보존한다.
- DEEP-NDT 공통 요소와 프로젝트 전용 CSS의 중복 정의를 정리했다. 모바일 기본값과 48rem·75rem 확장 규칙으로 묶고, 사용하지 않는 스타일과 불필요한 !important를 제거했다.
- 다음 프로젝트 작성 예시와 적용 범위는 `docs/projects/shared-elements.md`를 참고한다.
