# Design Direction

## 1. Concept: Structured Editorial

Structured Editorial은 편집 디자인의 강한 위계, 리듬, 비대칭성과 디지털 인터페이스의 명료한 구조를 결합한다.

- **Structured** — 일관된 그리드, 토큰, 정렬, 의미 구조, 반응형 규칙
- **Editorial** — 대담한 타이포 대비, 의도적인 여백, 이미지와 텍스트의 서사적 배열, 예측 가능한 반복 속의 변주

목표는 잡지처럼 보이는 웹사이트가 아니라, **내용을 선택하고 관계 짓는 편집적 사고가 화면 구조에 드러나는 웹사이트**다.

## 2. Visual Principles

### Typography carries the identity

장식보다 활자 크기, 행 길이, 굵기, 정렬, 언어 간 대비로 개성을 만든다. 큰 제목은 공간을 지배할 수 있지만 정보 구조와 읽기 흐름을 훼손해서는 안 된다.

### Grid creates order; exceptions create energy

기본 정렬은 엄격한 그리드에 두고, 핵심 문장·이미지·번호 등의 일부 요소만 의도적으로 열을 넘거나 비대칭 배치한다. 모든 요소가 예외면 긴장감이 아니라 혼란이 된다.

### Space is an active element

여백을 남는 공간으로 취급하지 않는다. 섹션 간 전환, 시선의 멈춤, 콘텐츠의 관계를 표현하는 수단으로 사용한다.

### Rules before boxes

섹션 구분은 카드 배경보다 여백, 정렬 변화, 얇은 선, 번호, 타이포 위계로 해결한다.

### Accent is punctuation

Accent는 넓은 장식 면이 아니라 링크, 현재 상태, 핵심 표식, 작은 그래픽 등 의미 있는 강조에 제한한다.

## 3. Typography

### Korean

- **Pretendard Variable**을 기본 한글 및 UI 서체로 사용한다.
- 로컬 제공 또는 안정적인 웹폰트 로딩 방식을 선택하고, 시스템 폰트 fallback을 둔다.
- 작은 본문에서 극단적으로 얇은 weight를 사용하지 않는다.
- 한글 제목은 과도한 자간 축소를 피하고 실제 브라우저 렌더링으로 확인한다.

초기 font stack:

```css
--font-sans-ko: "Pretendard Variable", Pretendard, -apple-system,
  BlinkMacSystemFont, "Segoe UI", sans-serif;
```

### English

- 대표 영문 서체는 **TBD / 후보 검토**다.
- 후보 평가 기준: Pretendard와 구별되는 목소리, 큰 display에서의 형태, 본문 가독성, Variable 지원, 웹 사용 라이선스와 로딩 비용.
- 확정 전에는 별도 외부 폰트를 임의 도입하지 않고 Pretendard 또는 시스템 sans를 사용한다.
- 영문 서체는 단순히 “세련돼 보이는” 선택이 아니라 한글과의 역할 분담이 명확해야 한다.

### Initial type scale

아래 값은 구현 시작을 위한 `initial token`이며 브라우저 검수 전 확정값이 아니다. `clamp()`를 활용하되 모바일을 데스크톱의 단순 축소판으로 만들지 않는다.

```css
--text-xs: 0.75rem;
--text-sm: 0.875rem;
--text-body: 1rem;
--text-lead: clamp(1.125rem, 1rem + 0.7vw, 1.5rem);
--text-h3: clamp(1.5rem, 1.15rem + 1.5vw, 2.5rem);
--text-h2: clamp(2rem, 1.25rem + 3.2vw, 4.5rem);
--text-display: clamp(3rem, 1.25rem + 7.5vw, 8.5rem);
```

본문 행 길이는 초기 기준 `55–75ch` 범위에서 시작하되, 한글 본문은 실제 글자 밀도를 보고 더 짧게 조정할 수 있다.

## 4. Color

기본 팔레트는 **Black / White / Neutral Gray + Accent 1색**이다.

```css
:root {
  --color-bg: #ffffff;              /* initial */
  --color-fg: #111111;              /* initial */
  --color-muted: #6b6b6b;           /* initial; contrast 검수 필요 */
  --color-line: #d9d9d9;            /* initial */
  --color-surface: #f4f4f2;         /* initial; 제한적으로 사용 */
  --color-accent: TBD;               /* 실제 CSS에는 검수 전 임시값 명시 */
  --color-on-accent: TBD;
}
```

- Accent 색상 자체와 on-accent 조합은 **TBD**다.
- 임시 구현이 필요하면 코드 주석과 문서에 `initial`임을 남기고, WCAG 대비를 확인한다.
- gray는 분위기보다 정보 위계를 위해 사용한다. 작은 글자를 지나치게 옅게 만들지 않는다.
- 다크 모드는 현재 범위가 아니며 필요성이 확인되기 전 추가하지 않는다.

## 5. Grid and Layout

기본 그리드는 뷰포트에 따라 **4 → 8 → 12 columns**로 발전한다.

| 범위 | 열 | 의도 |
|---|---:|---|
| Mobile | 4 | 읽기 순서와 핵심 대비 중심 |
| Tablet | 8 | 텍스트와 보조 정보의 병치 시작 |
| Desktop | 12 | 비대칭 편집 구성과 여백의 적극적 사용 |

초기값:

```css
--page-gutter: 1rem;        /* mobile initial */
--grid-gap: 0.75rem;        /* mobile initial */
--section-space: clamp(5rem, 9vw, 10rem);
--content-max: 100rem;       /* initial, 화면 검수 후 결정 */
```

예상 breakpoint는 약 `48rem`과 `75rem`에서 시작할 수 있으나 콘텐츠가 깨지는 지점에 따라 확정한다. 기기 이름보다 레이아웃 필요를 기준으로 한다.

### Responsive = recomposition, not scaling

모바일에서는 다음을 적극적으로 바꾼다.

- 좌우 병치를 의미 순서에 맞춘 상하 흐름으로 재배치
- 큰 메타데이터 블록을 핵심 정보만 남기고 축약
- 이미지 crop, 순서, caption 위치 재설계
- hover 전용 정보를 항상 접근 가능한 형태로 변환
- 장식적 겹침 제거 또는 다른 방식으로 번역
- display 제목의 줄바꿈을 모바일 문맥에 맞게 별도 제어

DOM 순서는 가능하면 모바일과 스크린 리더에 자연스러운 읽기 순서를 따른다. CSS의 시각적 재배치가 의미 순서를 왜곡하지 않게 한다.

## 6. Components and Surfaces

- 공통 Header, Footer, Section heading, Project index item, Figure, Metadata list 등 실제 반복 단위만 컴포넌트화한다.
- 모든 항목에 독립된 배경과 둥근 테두리를 주지 않는다.
- radius 기본값은 `0` 또는 매우 작게 시작한다. 이미지 형태나 특정 기능에 이유가 있을 때만 토큰으로 추가한다.
- shadow 기본값은 `none`이다.
- 버튼은 중요도와 동작을 타이포, 선, 색으로 구분한다. 무조건 pill 형태로 만들지 않는다.
- 리스트와 인덱스는 편집적 번호, 열 정렬, rule, hover/focus 변화로 리듬을 만든다.

## 7. Motion

모션은 관계와 상태 변화를 설명할 때만 사용한다.

- 초기 duration: 빠른 상태 변화 `120–180ms`, 구조적 전환 `240–400ms`
- opacity/transform 중심의 가벼운 변화 우선
- 장시간 자동 재생, 과도한 parallax, scroll hijacking 금지
- 콘텐츠 진입 애니메이션은 없어도 전체 경험이 완성되어야 한다.
- `prefers-reduced-motion: reduce`에서 비필수 모션을 제거하거나 즉시 전환한다.

## 8. Accessibility

- 본문과 UI 텍스트의 색 대비를 실제 색상 확정 시 검증한다.
- 키보드 focus는 숨기지 않고 충분히 구별되게 만든다.
- landmark와 heading 순서를 의미 있게 구성한다.
- 장식 이미지는 빈 alt, 정보 이미지는 맥락을 설명하는 alt를 제공한다.
- 링크 텍스트는 문맥 없이도 목적을 파악할 수 있게 한다.
- hover와 pointer 정밀도에만 의존하는 상호작용을 만들지 않는다.
- 브라우저 확대와 320px 수준의 좁은 폭에서도 핵심 콘텐츠를 사용할 수 있어야 한다.

## 9. Explicit Anti-patterns

- card grid를 기본 레이아웃으로 사용
- 과한 border-radius와 pill 남용
- gradient, glassmorphism, blur 장식
- 분위기용 shadow
- 과한 reveal, marquee, cursor effect, smooth-scroll 효과
- hero의 무의미한 추상 3D 오브젝트
- “badge → 큰 문장 → 두 CTA → 카드 3개”의 SaaS 공식
- 의미 없는 영어 대문자 라벨과 장식용 메트릭
- 모바일에서 모든 요소와 글자 크기를 비례 축소

## 10. Browser Review Protocol

각 주요 화면은 최소 좁은 모바일, 넓은 모바일, 태블릿, 일반 데스크톱, 넓은 데스크톱에서 확인한다. 고정된 기기 수치보다 실제 깨짐과 조형 변화를 기록한다.

검수 질문:

1. 첫 화면에서 브랜드의 관찰·연결·구조화·쓸모 중 무엇이 느껴지는가?
2. 제목과 본문, 메타데이터의 위계가 한눈에 읽히는가?
3. 그리드의 질서와 예외 사이에 긴장감이 있는가?
4. 모바일이 별도로 편집된 화면처럼 보이는가?
5. 장식 없이도 구조가 충분히 강한가?
6. 실제 콘텐츠 길이와 이미지 비율에서 유지되는가?

검수 후 확정된 값에는 `initial` 또는 `TBD` 표시를 제거하고, 변경 이유와 영향을 관련 문서에 반영한다.

