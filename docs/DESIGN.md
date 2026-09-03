# Design Direction

## 1. Concept: Structured Editorial

Structured Editorial은 편집 디자인의 강한 위계, 리듬, 비대칭성과 디지털 인터페이스의 명료한 구조를 결합한다.

- **Structured** — 일관된 그리드, 토큰, 정렬, 의미 구조, 반응형 규칙
- **Editorial** — 대담한 타이포 대비, 의도적인 여백, 이미지와 텍스트의 서사적 배열, 예측 가능한 반복 속의 변주

목표는 잡지처럼 보이는 웹사이트가 아니라, **내용을 선택하고 관계 짓는 편집적 사고가 화면 구조에 드러나는 웹사이트**다.

## 2. Visual Principles

### Typography carries the identity

장식보다 활자 크기, 행 길이, 굵기, 정렬, 언어 간 대비로 개성을 만든다. 큰 제목은 공간을 지배할 수 있지만 정보 구조와 읽기 흐름을 훼손해서는 안 된다.

영문과 한글은 동일한 내용을 반복하기보다 역할을 나눈다.

- **Visual Voice — English:** 인상, 리듬, 장면 전환을 담당한다. 큰 그래픽 요소로 제한적으로 사용한다.
- **Information Voice — Korean:** 의미, 맥락, 근거와 행동 안내를 담당한다. 사이트의 기본 정보 언어로 사용한다.

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

- 대표 영문 서체는 **Inter**를 사용한다.
- 한글과 영문이 섞인 문장에서는 영문 글리프에 Inter를 사용하고, 한글 글리프는 Pretendard로 폴백한다.
- Inter는 Visual Voice, 영문 UI, 메타데이터 등 사이트의 모든 영문 표기에 일관되게 사용한다.
- 한글 정보 문구와 한글 UI는 Pretendard를 사용한다.

### Visual Voice usage

확정된 대표 문구는 다음과 같다.

```text
OBSERVE. CONNECT.
MAKE IT USEFUL.
```

- 한글 공식 슬로건과 함께 브랜드 과정을 압축해 보여주는 공식 Visual Voice다.
- Hero, 주요 페이지의 시작 장면, 긴 상세 페이지의 중요한 서사 전환 등 제한된 위치에서 사용한다.
- 단어의 순서와 마침표는 유지한다.
- 모두 대문자로 표기해야 한다는 규칙은 두지 않는다. 서체, 화면의 조형과 원하는 어조에 따라 title case 또는 sentence case를 사용할 수 있다.
- 데스크톱에서는 위의 두 줄 조합을 기본으로 검수한다.
- 모바일에서는 다음처럼 재구성할 수 있다.

```text
Observe.
Connect.
Make it useful.
```

- 같은 화면에서 한글 슬로건 또는 한글 설명을 함께 제공해 의미가 조형에 가려지지 않게 한다.
- 모든 섹션에 대형 영문을 반복하지 않는다. 영문이 등장하는 장면 사이에 충분한 위계 차와 호흡을 둔다.

### How I Work composition

- Process와 Benefit을 별도 섹션으로 분리하지 않고 하나의 대응 구조로 보여준다.
- 데스크톱에서는 `내가 하는 일 → 고객이 얻는 변화`를 같은 행의 좌우 열에 배치해 관계를 바로 읽게 한다.
- 모바일에서는 의미 순서에 따라 각 단계의 행동 다음에 고객이 얻는 변화를 배치한다.
- 복잡한 프로세스 다이어그램이나 추상 아이콘보다 번호, 정렬, 여백과 얇은 rule을 우선한다.
- Benefit을 배지나 강조 카드로 분리하지 않는다. 과정과 결과가 같은 정보 위계 안에서 읽히게 한다.
- 홈의 How I Work는 Accent 배경 위에 `illust-observe.svg`, `illust-connect.svg`, `illust-makeituseful.svg`를 사용해 세 단계를 표현한다.
- 단계 타이포그래피는 한글 제목 25px, 영문 보조 제목 16px, 한글 설명 17px, 태그 12px을 기준으로 한다.

### Initial type scale

아래 값은 구현 시작을 위한 `initial token`이며 브라우저 검수 전 확정값이 아니다. `clamp()`를 활용하되 모바일을 데스크톱의 단순 축소판으로 만들지 않는다.

사용자가 px로 목표 크기를 전달하더라도, 화면 폭과 브라우저 글자 설정에 대응해야 하는 타이포그래피는 해당 px 값을 기준 화면의 목표값으로 해석하고 `rem + clamp()` 조합으로 구현한다. 정밀한 고정 치수가 필요한 경우에만 px을 유지한다.

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
  --color-fg: #101010;
  --color-muted: #6b6b6b;           /* initial; contrast 검수 필요 */
  --color-line: #d9d9d9;            /* initial */
  --color-surface: #f3f0ef;         /* Hero, About */
  --color-accent: #ed1c1e;
  --color-on-accent: TBD;
}
```

- Accent 색상은 `#ED1C1E`로 사용한다. on-accent 조합은 실제 사용 크기와 배경 대비를 계속 검수한다.
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

1440px 데스크톱 기준 그리드는 12열, 좌우 마진 40px, 열 간격 40px을 사용한다. 데스크톱 진입 구간에서는 마진과 간격이 각각 최대 `2.5rem`까지 유동적으로 확장된다.

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
- 마우스 휠의 급격한 이동만 완화하도록 Lenis를 제한적으로 사용하며, 콘텐츠 위치를 강제하거나 섹션에 스냅하지 않는다.
- 콘텐츠 진입 애니메이션은 없어도 전체 경험이 완성되어야 한다.
- 프로젝트 인덱스 진입 시 제목, 필터, 프로젝트 순서로 opacity와 수직 이동을 조합한 짧은 stagger 전환을 한 번 실행한다. 필터 변경 시에는 결과 항목에만 다시 적용한다.
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
- Visual Voice를 모든 섹션에 반복해 화면의 강조 위계를 평평하게 만드는 구성
- 모바일에서 모든 요소와 글자 크기를 비례 축소

## 10. Browser Review Protocol

### Home interaction decisions — 2026-08-31

- Hero 중앙에는 키워드와 프로젝트 조각이 구체를 이루는 DOM 기반 인터랙션을 둔다. 자동 회전, 포인터/터치 드래그, 관성, 개별 요소 선택을 지원하며, 선택한 요소와 직접 관련된 키워드는 Accent Red 선으로 연결하고 함께 강조한다.
- Hero에서 Selected Projects로 이동할 때 스크롤을 가로채지 않고 `sticky` Hero 위로 다음 섹션이 일반 문서 흐름을 따라 올라온다.
- Selected Projects의 이미지 영역은 hover/focus에서 프로젝트의 다른 맥락을 보여주는 두 번째 장면으로 전환한다. 모바일에서는 첫 장면만으로도 정보가 완결되어야 한다.
- About의 역량 링크는 세 개의 상위 영역으로 묶고 프로젝트 아카이브의 복수 태그 필터로 연결한다.
- How I Work의 세 기하학 장면은 서로 다른 장식이 아니라 `흩어진 단서 → 관계와 구조 → 쓸 수 있는 형태`라는 연속된 변화를 보여준다.
- Contact 마지막 비주얼은 실제 작업 장면으로 교체하며, Top 링크는 페이지 끝에서만 제공한다.
- Accent 색상, 실제 이미지/영상, 연락처는 아직 `TBD`다.

각 주요 화면은 최소 좁은 모바일, 넓은 모바일, 태블릿, 일반 데스크톱, 넓은 데스크톱에서 확인한다. 고정된 기기 수치보다 실제 깨짐과 조형 변화를 기록한다.

검수 질문:

1. 첫 화면에서 브랜드의 관찰·연결·구조화·쓸모 중 무엇이 느껴지는가?
2. 제목과 본문, 메타데이터의 위계가 한눈에 읽히는가?
3. 그리드의 질서와 예외 사이에 긴장감이 있는가?
4. 모바일이 별도로 편집된 화면처럼 보이는가?
5. 장식 없이도 구조가 충분히 강한가?
6. 실제 콘텐츠 길이와 이미지 비율에서 유지되는가?

검수 후 확정된 값에는 `initial` 또는 `TBD` 표시를 제거하고, 변경 이유와 영향을 관련 문서에 반영한다.
