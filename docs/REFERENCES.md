# Reference Principles

## 1. How to Use References

레퍼런스는 화면을 복제하기 위한 목록이 아니라, 서로 다른 문제를 해결하는 **역할별 원칙**으로 사용한다. ORGNZM, YNL, Px8, SORO의 개별 스타일을 한 화면에 모두 섞지 않는다.

레퍼런스를 적용할 때는 다음을 기록한다.

1. 어떤 디자인 문제를 해결하려는가?
2. 어느 레퍼런스의 어떤 원칙을 참고하는가?
3. 브랜드의 관찰 → 연결 → 구조화 → 쓸모와 어떻게 연결되는가?
4. 표면적 스타일이 아니라 구조적 이유를 설명할 수 있는가?

원본 URL, 캡처, 정확한 페이지는 현재 문서에 제공되지 않았으므로 **TBD**다. 구현 전에 링크가 추가되면 최신 화면을 직접 검토하고 아래 해석을 보정한다.

## 2. ORGNZM — Structural Backbone

### Role

전체 사이트의 **질서, 그리드, 정보 체계, 절제된 기반**을 판단하는 레퍼런스.

### Principles to borrow

- 명확한 열 구조와 정렬
- 충분한 여백 속에서도 정보 관계가 흐려지지 않는 구성
- 제한된 색과 재료
- 콘텐츠를 장식보다 앞에 두는 태도
- 페이지 전체에 이어지는 일관된 시스템

### Do not copy

- 특정 로고, 타이포 조합, 메뉴 형태, 화면 구성을 그대로 모사
- 절제를 이유로 브랜드의 인간적 온도와 실험성을 제거

### Use when deciding

- 전역 그리드, navigation, project index, metadata, section rhythm
- 정보가 많을 때 무엇을 정렬하고 무엇을 생략할지

## 3. YNL — Typographic Attitude

### Role

**대담한 타이포 위계, 편집적 긴장감, 화면의 목소리**를 판단하는 레퍼런스.

### Principles to borrow

- 큰 제목과 작은 메타 정보 사이의 분명한 대비
- 활자를 이미지처럼 다루는 구성
- 비대칭 배치와 의도적인 줄바꿈
- 제한된 요소로 강한 첫인상을 만드는 방식

### Do not copy

- 가독성을 희생하는 실험적 조판
- 모든 섹션에 초대형 타이포를 반복해 위계를 평평하게 만드는 구성
- 특정 서체의 인상만으로 유사성을 만드는 방식

### Use when deciding

- Hero, section title, project title, statement, 숫자/인덱스 처리
- Structured 기반이 지나치게 얌전해졌을 때 필요한 시각적 긴장

## 4. Px8 — System and Digital Precision

### Role

**디지털 인터페이스의 정밀함, 간격 시스템, 반응형 논리, 반복 가능한 규칙**을 판단하는 레퍼런스.

### Principles to borrow

- 예측 가능한 spacing과 baseline 리듬
- 컴포넌트가 시스템 안에서 변형되는 방식
- 화면 폭에 따라 콘텐츠가 논리적으로 재배치되는 구조
- 세부 상호작용과 상태의 명료함

### Do not copy

- 숫자 체계를 목적처럼 드러내는 경직된 화면
- 불필요한 UI 컴포넌트화와 개발자 도구 같은 인상
- 모든 간격을 기계적으로 같게 만들어 편집 리듬을 잃는 것

### Use when deciding

- design tokens, grid, spacing, breakpoints, interactive states
- Work/Observations/Experiments 사이의 공통 시스템과 변주 범위

## 5. SORO — Human Rhythm and Narrative

### Role

**콘텐츠의 호흡, 이미지와 글의 서사, 사람다운 온도, 예상 밖의 편집 순간**을 판단하는 레퍼런스.

### Principles to borrow

- 긴 페이지에서 속도와 밀도를 바꾸는 리듬
- 이미지, 캡션, 본문의 관계를 통한 이야기 전개
- 완벽히 균일하지 않은 구성에서 생기는 인간적 감각
- 과정과 관찰을 결과만큼 의미 있게 보이게 하는 방식

### Do not copy

- 내용과 무관한 감성 이미지
- 탐색을 어렵게 하는 모호한 내비게이션
- 서사를 이유로 핵심 정보와 프로젝트 역할을 숨기는 방식

### Use when deciding

- Work detail, Observations, Experiments, About
- 구조적 화면이 지나치게 차갑거나 반복적으로 느껴질 때

## 6. Combined Reference Model

| 디자인 질문 | 우선 레퍼런스 | 보조 레퍼런스 |
|---|---|---|
| 전체 질서와 정보 구조는 명료한가? | ORGNZM | Px8 |
| 첫인상과 타이포에 충분한 개성이 있는가? | YNL | ORGNZM |
| 반복 규칙과 반응형 동작이 견고한가? | Px8 | ORGNZM |
| 콘텐츠가 사람의 사고와 과정으로 읽히는가? | SORO | YNL |

기본 조합은 다음과 같다.

- **ORGNZM을 뼈대**로 사용한다.
- **YNL로 타이포의 목소리와 긴장**을 더한다.
- **Px8로 시스템과 반응형 정밀도**를 검증한다.
- **SORO로 서사와 인간적 리듬**을 보완한다.

레퍼런스 사이에 충돌이 생기면 브랜드의 명료함과 실제 사용성을 우선한다.

## 7. Reference Review Checklist

- 캡처 한 장의 외형이 아니라 여러 페이지에서 반복되는 원칙을 보았는가?
- 모바일과 데스크톱의 차이를 함께 확인했는가?
- 타이포와 이미지의 라이선스를 모방하지 않았는가?
- 레퍼런스의 선택이 현재 콘텐츠에도 적합한가?
- 결과가 네 사이트를 섞은 콜라주가 아니라 하나의 브랜드 시스템으로 보이는가?

## 8. TBD

- ORGNZM 공식 URL 및 참고 페이지
- YNL 공식 URL 및 참고 페이지
- Px8 공식 URL 및 참고 페이지
- SORO 공식 URL 및 참고 페이지
- 각 레퍼런스의 모바일 캡처와 핵심 패턴 기록

링크가 확정되면 출처, 접근일, 차용할 원칙, 피할 요소를 업데이트한다.

