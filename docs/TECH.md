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

## 11. Deployment — TBD

목표 배포처는 GitHub Pages로 고려하지만 다음은 저장소 정보가 생긴 후 확정한다.

- custom domain 여부
- user/organization page인지 project page인지
- Next.js static export 설정과 base path
- image optimization 방식
- CI workflow와 배포 브랜치

배포 설정을 추정해 미리 복잡하게 만들지 않는다.

## 12. Decision Log Principle

브라우저 검수로 값이나 구조를 확정하면 다음 세 곳을 함께 확인한다.

1. 코드의 CSS token 또는 컴포넌트
2. 관련 `docs/*.md`
3. 필요하면 변경 이유를 남기는 짧은 decision note 또는 commit message

`TBD`는 누락이 아니라 의도적인 미결정이다. 실제 화면과 콘텐츠 없이 확정하지 말아야 할 항목을 표시한다.
