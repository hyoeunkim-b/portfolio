# Content Architecture

## 1. Content Strategy

사이트는 완성 프로젝트만 모아 놓은 진열장이 아니라, **발견한 것에서 쓸모 있는 결과까지 이어지는 사고의 아카이브**다. 주요 콘텐츠 축은 Work, Observations, Experiments, About이다.

```text
Home
├── Work
│   └── Work detail
├── Observations
│   └── Observation detail
├── Experiments
│   └── Experiment detail
└── About
```

Contact는 독립 페이지보다 Header, About, Footer의 명확한 경로로 먼저 제공한다. 별도 Contact 페이지 필요 여부는 실제 연락 방식이 정해진 후 결정한다.

## 2. Home

Home은 네 콘텐츠 영역의 단순 미리보기가 아니라 브랜드의 사고 방식을 압축해 보여주는 편집된 시작점이다.

권장 흐름:

1. **Hero** — 영문 Visual Voice `OBSERVE. CONNECT. MAKE IT USEFUL.`로 시각적 태도와 리듬을 만들고, 공식 한글 슬로건 `관찰하고, 연결하여, 쓸모있게.`와 짧고 친근한 한글 설명으로 의미를 완성한다.
2. **Selected Projects** — 결과물 중심의 대표 작업 6개를 보여주고 전체 프로젝트로 이어지는 링크를 제공한다. 각 항목에는 결과 이미지와 함께 문제, 역할, 변화 중 핵심 한 가지를 짧게 노출한다.
3. **About** — 어떤 문제를 다루는 사람인지 설명하는 짧은 소개와 실제 역량을 나타내는 소수의 키워드를 제공한다. 추상적인 자기 수식어보다 `문제 관찰`, `정보 구조화`, `제품 경험 설계`, `프로토타이핑`처럼 구체적인 표현을 우선한다.
4. **How I Work** — Process와 Benefit을 하나의 흐름으로 합친다. `관찰 → 연결하고 정리하기 → 쓸 수 있는 형태로 만들기` 각 단계에서 **내가 하는 일 → 고객이 얻는 변화**를 함께 보여준다.
5. **Contact** — 아직 정리되지 않은 생각도 편하게 이야기할 수 있다는 짧은 유도 문장과 실제 연락 이메일을 제공한다.

Home에서는 Observations와 Experiments를 독립 섹션으로 미리보기하지 않는다. 두 콘텐츠는 관련 프로젝트나 About, How I Work의 맥락에서 필요한 경우에만 연결하고 각각의 인덱스 페이지에서 충분히 보여준다.

Hero의 영문 문구는 화면 폭과 조형 의도에 따라 `Observe. Connect. / Make it useful.`처럼 대소문자와 줄바꿈을 조정할 수 있다. 단어의 순서와 마침표는 유지한다. 한글 슬로건은 상대적으로 절제된 크기로 배치하되 영문보다 정보적 중요도가 낮게 읽혀서는 안 된다.

### Home section decisions — 2026-08-31

- Selected Projects는 대표 작업 5개를 비대칭으로 큐레이션하고, 각 이미지 전환은 결과의 다른 맥락이나 판단을 보여준다.
- About의 작업 영역은 `Digital Products`, `Websites`, `Brand Identities`, `Editorials`, `AI-Enhanced Workflow` 다섯 가지 역량 키워드로 표현한다. 세부 역량은 보조 문구로 두고, 관련 프로젝트 아카이브의 상위 분야 필터로 연결한다.
- How I Work는 `관찰하기 → 연결하고 구조화하기 → 쓸 수 있게 만들기`의 세 단계로 구성한다. 각 단계는 행동, 방법, 상대가 얻게 되는 구체적인 변화를 함께 제공한다.
- Contact는 공개 연락용 이메일 `hello.hyobee@gmail.com`과 카카오톡 경로, 실제 작업 장면, 페이지 상단으로 돌아가는 링크를 제공한다. 카카오톡 공개 링크는 `TBD`다.

### How I Work — Initial content structure

| 단계 | 내가 하는 일 | 고객이 얻는 변화 |
|---|---|---|
| 관찰합니다 | 사용자 행동, 대화와 현재 상황을 살펴 놓치고 있던 문제를 찾는다. | 막연했던 문제와 먼저 해결해야 할 질문이 명확해진다. |
| 연결하고 정리합니다 | 흩어진 정보와 의견 사이의 관계를 찾고 중요한 것부터 이해할 수 있도록 정리한다. | 팀이 같은 방향을 볼 수 있는 판단 기준과 우선순위가 생긴다. |
| 쓸 수 있는 형태로 만듭니다 | 정리된 생각을 화면, 구조, 프로토타입 또는 실제 결과물로 구체화한다. | 아이디어를 함께 검토하고 개선하며 실제로 사용할 수 있게 된다. |

위 문구는 실제 프로젝트와 고객 맥락에 맞춰 검증할 `initial`이다. 확인되지 않은 성과나 큰 사업적 효과를 약속하지 않는다.

## 3. Work

Work는 대표 프로젝트와 깊이 있는 사례를 담는다. 각 항목은 시각 결과보다 의사결정의 인과관계를 우선한다.

### Index metadata

- Title
- One-line premise
- Year
- Role
- Domain or type
- Representative image
- Optional status: shipped, concept, ongoing

### Project index decisions — 2026-09-03

- 프로젝트 인덱스는 데스크톱 12열에서 항목 하나가 4열을 차지하는 3열 구성을 사용한다. 태블릿은 2열, 모바일은 1열로 재구성한다.
- 상단 필터는 `Digital Products`, `Websites`, `Brand Identities`, `Editorials`, `AI-Enhanced Workflow`를 사용하고 각 숫자는 실제 연결된 프로젝트 수에서 계산한다.
- 실제 정보가 확인된 프로젝트만 노출하며, 아직 없는 항목을 와이어프레임의 개수에 맞추기 위해 임의로 생성하지 않는다.
- Home, 프로젝트 인덱스와 상세 페이지는 같은 Header와 Contact 컴포넌트를 사용한다.

### Detail structure

1. **Premise** — 무엇을 왜 다뤘는지 한 문단
2. **Context** — 상황, 대상, 팀, 기간, 역할, 제약
3. **Observation** — 발견한 문제나 신호
4. **Connection** — 어떤 정보와 관점을 연결했는지
5. **Structure** — 시스템, 흐름, 정보 구조 또는 전략으로 바꾼 과정
6. **Refinement / Utility** — 핵심을 정제하고 실제 쓰임으로 만든 방법
7. **Outcome** — 결과, 영향, 검증 가능한 지표 또는 정성적 변화
8. **Reflection** — 배운 점, 한계, 다음에 바꿀 점

모든 프로젝트가 같은 소제목을 기계적으로 사용하지 않아도 된다. 다만 독자가 맥락 → 판단 → 결과를 추적할 수 있어야 한다. 비공개 정보와 과장된 성과 수치를 넣지 않는다.

## 4. Observations

Observations는 일상, 디자인, 기술, 문화, 사람의 행동에서 발견한 신호를 짧고 명료하게 기록한다. “전문가 칼럼”보다 생각의 출발점을 보여주는 공간이다.

### Possible formats

- 짧은 노트
- 이미지 + 캡션
- 하나의 질문과 관찰 근거
- 서로 다른 두 사례의 연결
- 읽은 것/본 것에서 추출한 패턴

### Metadata

- Title or opening sentence
- Published date
- Topic tags: 필요할 때만 소수 사용
- Source/credit: 외부 자료가 있을 때 필수
- Related work/experiment: 실제 관계가 있을 때만 연결

태그와 필터는 콘텐츠 양이 적을 때 미리 만들지 않는다.

## 5. Experiments

Experiments는 완성된 포트폴리오에 들어가기 전의 탐구와 프로토타입을 담는다. 시각 실험뿐 아니라 코드, 글쓰기, 도구, 인터랙션, 정보 구조 실험을 포함할 수 있다.

각 실험은 다음 질문에 답하는 것이 좋다.

- 무엇이 궁금했는가?
- 무엇을 만들거나 시도했는가?
- 무엇을 관찰했는가?
- 무엇이 작동하거나 작동하지 않았는가?
- 다음에는 어디로 연결할 수 있는가?

실패를 성공처럼 포장하지 않는다. 미완성과 한계를 분명히 쓰되, 독자가 얻을 수 있는 쓸모를 남긴다.

## 6. About

About은 경력 요약만 제공하는 페이지가 아니라 브랜드의 관점과 협업 방식을 설명한다.

권장 내용:

- 짧은 소개와 현재의 관심
- 슬로건을 실제 작업 방식으로 풀어낸 설명
- 할 수 있는 일 / 함께하고 싶은 문제
- 경력 또는 주요 이력: 실제 정보 확정 후 추가
- 사용하는 방식과 도구: 브랜드 이해에 필요할 만큼만
- 연락 및 외부 프로필
- 선택적으로 개인적 관찰 습관이나 관심사

자기소개는 거창한 선언보다 구체적인 행동과 경험을 사용한다.

## 7. Content Model — Initial

콘텐츠 저장 방식은 구현 단계에서 선택하되, 초기에는 사람이 직접 수정 가능한 로컬 Markdown/MDX 또는 단순한 typed data를 우선 검토한다.

공통 필드 후보:

```yaml
title: string
slug: string
summary: string
publishedAt: date
updatedAt: date | optional
status: published | draft
featured: boolean | optional
cover: image | optional
coverAlt: string | optional
```

콘텐츠 유형별 필드는 실제 항목 2–3개를 입력한 뒤 확정한다. 비어 있는 필드를 위해 CMS나 복잡한 스키마를 먼저 도입하지 않는다.

## 8. Editorial Rules

- 한 화면에서 무엇을 가장 먼저 읽어야 하는지 하나로 정한다.
- 제목, 요약, 메타데이터가 같은 내용을 반복하지 않게 한다.
- 이미지에는 역할이 있어야 한다: 증거, 맥락, 과정, 결과, 또는 리듬.
- 썸네일 비율을 무조건 통일하지 않는다. 편집 목적이 있으면 비율의 차이를 활용한다.
- 날짜, 역할, 출처 표기 방식을 사이트 전체에서 일관되게 유지한다.
- 빈 상태와 콘텐츠가 적은 초기 상태도 의도적으로 설계한다.
- `Lorem ipsum` 대신 짧더라도 실제에 가까운 한국어 콘텐츠로 검수한다.

## 9. Content Readiness

아직 확정되지 않은 사항:

- 대표 Work 목록과 공개 범위: **TBD**
- 실제 Observations/Experiments 초기 항목: **TBD**
- 프로필, 이력, 연락처, 외부 링크: **TBD**
- 콘텐츠 언어 정책(한국어 단일 / 한영 병기 / 다국어): **TBD**
- CMS 필요 여부: **TBD, 초기에는 도입하지 않음**

실제 콘텐츠가 준비되기 전에는 구조를 과도하게 고정하지 않는다. 샘플 콘텐츠로 브라우저를 검수한 후 필드와 페이지 구조를 업데이트한다.
