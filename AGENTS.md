# Personal Brand Website — Codex Working Agreement

이 저장소는 개인 브랜드 홈페이지를 Codex와 브라우저 검수를 중심으로 설계·구현하기 위한 프로젝트다. 이 문서는 모든 작업의 진입점이며, `docs/` 아래 문서는 프로젝트의 Source of Truth다.

## 1. 프로젝트 목표

- 슬로건 **“관찰하고, 연결하여, 쓸모 있게.”**를 경험과 구조로 전달한다.
- 개인 브랜드의 사고 과정인 **관찰 → 연결 → 구조화 → 정제/실용화**를 보여준다.
- 흔한 포트폴리오 템플릿이 아니라, 편집 디자인의 긴장감과 디지털 제품의 명료함이 공존하는 **Structured Editorial** 웹사이트를 만든다.
- 결과뿐 아니라 관찰, 판단, 실험, 정제의 과정을 통해 “어떻게 생각하고 무엇을 쓸모 있게 만드는 사람인지”가 드러나게 한다.

## 2. 작업 전 필독 문서

작업 종류와 무관하게 아래 문서를 먼저 읽고, 충돌 시 다음 우선순위를 따른다.

1. 현재 사용자의 명시적 요청
2. 이 `AGENTS.md`
3. `docs/BRAND.md` — 브랜드 핵심, 포지셔닝, 판단 기준
4. `docs/DESIGN.md` — 시각 언어, 반응형, 토큰, 금지 패턴
5. `docs/CONTENT.md` — 정보 구조와 페이지별 콘텐츠 역할
6. `docs/VOICE.md` — 문체와 마이크로카피
7. `docs/REFERENCES.md` — 레퍼런스별 차용 원칙과 비차용 요소
8. `docs/TECH.md` — 기술 구조와 구현 품질 기준

문서끼리 모순되거나 중요한 결정이 비어 있으면 임의로 확정하지 않는다. 안전한 초기값은 `initial`로 구현하고, 디자인 방향을 바꾸는 선택은 `TBD`로 남겨 사용자 판단을 요청한다.

## 3. 핵심 제작 방식

프로젝트 상세 페이지는 **큰 화면 기준 Figma 설계 → 구현 전 모바일 난점 확인 → 웹 구현 → 실제 모바일 화면에서 조정 → 코드 정리** 순서로 제작한다. 포트폴리오 독자가 노트북 이상의 화면을 주로 사용할 것이라는 현재 가정을 바탕으로, 큰 화면에서 콘텐츠와 시각적 위계를 먼저 완성한다.

1. 문서의 원칙과 프로젝트 콘텐츠를 확인하고, Figma에서 큰 화면의 전체 시안을 구성한다. Figma와 Figma MCP를 설계 확인 및 자산 추출에 사용할 수 있다.
2. 구현 전에 긴 제목, 복잡한 도식, 작은 이미지 주석, 가로로 긴 제품 화면 등 모바일에서 어려울 부분을 확인한다. 해당 부분의 재배치·슬라이드·확대 방식과 필요한 자산을 먼저 정리하고, 중요한 미결정은 사용자와 해결한다. 모바일 전체 시안을 별도로 만드는 것은 필수가 아니다.
3. 확정 시안을 기존 웹 구조에 맞춰 구현한다. 디자인 검토 순서와 별개로 CSS의 기본값과 DOM 읽기 순서는 모바일을 기준으로 하고, 큰 화면은 확장 규칙으로 작성한다.
4. 실제 모바일 브라우저를 보며 사용자와 줄바꿈, 간격, 정렬, 이미지 가독성과 동작을 조정한다. 큰 화면에서도 기존 의도가 유지되는지 함께 확인한다.
5. 디자인이 확정되면 누적된 CSS 덮어쓰기와 중복 규칙을 정리하고, 확정된 값을 토큰과 관련 Markdown 문서에 반영한다. 정리 후 화면 폭별로 다시 검수한다.

Figma는 시각적 의도와 자산의 기준이며, 검수된 반응형 동작과 결정은 코드와 Markdown에 기록한다. 문서는 고정된 최초 명세가 아니라 검증된 결정을 축적하는 기준이다. 시안에서 지정한 값과 브라우저에서 검수한 값을 구분해서 기록한다. 상세 기준은 `docs/DESIGN.md`의 프로젝트 상세 제작 흐름과 `docs/TECH.md`의 디자인 확정 후 코드 정리를 따른다.

## 4. 구현 순서

전체 사이트를 한 번에 완성하지 않는다. 다음 순서를 기본으로 한다.

1. **Foundation** — Next.js 구조, 폰트, 디자인 토큰, 전역 스타일, 접근성 기반, 4→8→12 그리드
2. **Home exploration** — 데스크톱에서 시각 방향을 충분히 탐색하되 모바일 우선 CSS 구조로 Hero와 핵심 섹션 구현
3. **Direction review** — 브라우저에서 화면 폭별 조합, 타이포, 여백, 콘텐츠 밀도 검수
4. **Content pages** — Work, Observations, Experiments, About 확장
5. **Content system** — 반복 가능한 데이터 구조와 최소한의 공통 컴포넌트 정리
6. **Polish** — 접근성, reduced motion, 성능, SEO, 오탈자, 실제 기기 검수

## 5. 작업 원칙

- **Desktop-led visual exploration + Mobile-first implementation**을 따른다. 시각적 콘셉트는 넓은 화면에서 충분히 탐색하지만 CSS와 컴포넌트는 작은 화면을 기본값으로 작성한다.
- 반응형은 축소가 아니라 **재구성(recomposition)**이다. 화면이 좁아지면 순서, 그룹, 정렬, 정보 밀도, 강조 방식을 다시 설계한다.
- 레이아웃은 대략 모바일 4열, 태블릿 8열, 데스크톱 12열을 사용한다. 정확한 gutter, margin, breakpoint는 초기 토큰으로 시작해 브라우저 검수 후 확정한다.
- HTML은 의미론적으로 작성하고 키보드 탐색, 초점 표시, 색 대비, 이미지 대체 텍스트, 모션 감소 설정을 기본 품질로 취급한다.
- Next.js + React의 단순한 구조를 유지한다. 사람이 쉽게 찾고 수정할 수 있는 코드가 재사용성보다 우선이다.
- CSS variables/design tokens, global styles, component-scoped styles를 사용한다.
- 외부 의존성, 상태 관리, 애니메이션 도구는 명확한 필요가 있을 때만 추가한다.
- 한 번만 쓰이는 패턴을 성급히 추상화하지 않는다. 실제 반복과 변경 이유가 확인된 뒤 공통화한다.
- 완성된 구현에는 필요한 범위의 타입 검사, 린트, 빌드, 화면 폭별 브라우저 검수를 수행한다.

## 6. 시각적 금지사항

다음 패턴은 명시적 승인 없이 사용하지 않는다.

- 모든 콘텐츠를 카드에 넣는 구성
- 과도한 둥근 모서리와 pill UI
- 장식적 gradient
- glassmorphism, blur 기반 유리 효과
- 깊거나 상시 노출되는 shadow
- 읽기를 방해하는 과한 animation, parallax, scroll hijacking
- “대시보드 + 카드 + 배지 + CTA” 중심의 흔한 SaaS 랜딩 페이지 문법
- 의미 없이 반복되는 아이콘, 장식선, 라벨
- 모바일에서 데스크톱을 단순 축소한 구성

필요한 경계는 공간, 타이포 위계, 정렬, 얇은 rule로 먼저 만든다.

## 7. 완료 조건

작업 완료를 보고하기 전에 다음을 확인한다.

- 브랜드의 네 단계 사고 흐름 중 무엇을 표현하는지 설명할 수 있는가?
- `docs/`의 원칙과 구현이 일치하는가?
- 작은 화면과 큰 화면에서 각각 의도적인 구성을 갖는가?
- 카드, radius, shadow 등 익숙한 UI 관성에 기대지 않았는가?
- 콘텐츠가 실제 데이터로 교체되어도 구조가 유지되는가?
- 키보드, focus, semantic HTML, reduced motion이 고려되었는가?
- 새로 확정된 디자인 결정이 토큰과 문서에 반영되었는가?
- 프로젝트 상세 디자인 확정 후 중복 CSS와 임시 덮어쓰기를 정리하고 화면을 재검수했는가?

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
