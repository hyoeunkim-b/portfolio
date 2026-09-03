import { assetPath } from "@/lib/asset-path";

export type Project = {
  id: string;
  title: string;
  categories: string[];
  keywords: string;
  summary: string;
  client: string;
  period: string;
  roles: string[];
  team?: string[];
  cover?: string;
  listingCover?: string;
  website?: string;
};

export const projects: Project[] = [
  { id: "ndt", title: "AI 기반 비파괴검사 소프트웨어 DEEP-NDT", categories: ["digital-products", "ai-workflow"], keywords: "Digital Products · AI-Enhanced Workflow", summary: "기술 검증용 MVP에서 시작한 AI 기반 비파괴검사 소프트웨어를 실제 현장에서 도입하고 판매할 수 있는 제품 경험으로 확장했습니다.", client: "DEEP-AI", period: "2024. 8. – 2026. 8.", roles: ["Product Designer"], team: ["사업총괄 2", "Product Designer 1 (본인)", "개발팀 6", "AI팀 10"], cover: assetPath("/images/projects/ndt/cover-v2.png"), listingCover: assetPath("/images/projects/ndt/cover-v2.png") },
  { id: "paia", title: "비파괴검사 솔루션 기업 DEEP-AI 웹사이트", categories: ["websites", "ai-workflow"], keywords: "Websites · AI-Enhanced Workflow", summary: "회사와 제품을 소개하는 웹사이트를 비즈니스 문의와 채용 지원 데이터를 확보하는 리드 중심의 서비스로 전환했습니다.", client: "DEEP-AI", period: "2026. 6. – 2026. 7.", roles: ["Project Manager", "UX/UI 기획 및 디자인", "콘텐츠 기획 및 제작", "웹 퍼블리싱"], team: ["외부 기획자 1", "Designer & PM 1 (본인)", "개발팀 2"], cover: assetPath("/images/projects/paia/cover2.jpg"), listingCover: assetPath("/images/projects/paia/cover2.jpg"), website: "https://deep-ai.kr/ko" },
  { id: "deep-ai", title: "비파괴검사 솔루션 기업 DEEP-AI 브랜드 에셋", categories: ["brand-identities", "editorials"], keywords: "Brand Identities · Editorials", summary: "기술 기업의 전문성과 방향을 일관된 인상으로 전달할 수 있도록 브랜드의 시각 언어와 활용 체계를 만들었습니다.", client: "DEEP-AI", period: "2024", roles: ["Brand Designer"], cover: assetPath("/images/projects/paia/cover.png") },
  { id: "valros", title: "VR 콘텐츠 제작 소프트웨어 VALROS Web VR Editor", categories: ["digital-products", "websites"], keywords: "Digital Products · Websites", summary: "웹에서 VR 시나리오를 만들고 HMD에서 실행할 수 있는 에디터의 사용 흐름을 개선하고, 고도화 단계의 UX/UI를 설계했습니다.", client: "국립과학수사연구원 본원", period: "2023. 8. – 2024. 4.", roles: ["UX/UI 기획 및 디자인 100%", "웹 퍼블리싱 100%"], cover: assetPath("/images/projects/valros/cover.png"), listingCover: assetPath("/images/projects/valros/cover2.png") },
  { id: "kit", title: "경남정보대학교 메타버스 플랫폼", categories: ["digital-products", "websites"], keywords: "Digital Products · Websites", summary: "메타버스 소프트웨어와 연동되는 학습관리 웹사이트의 UX/UI를 설계하고, 플랫폼에서 사용하는 주요 UI 컴포넌트를 디자인했습니다.", client: "경남정보대학교 에너지신산업사업단", period: "2024. 2.", roles: ["웹 UX/UI 기획 100%", "반응형 웹 디자인 및 퍼블리싱 100%", "플랫폼 UI 컴포넌트 디자인 100%"], cover: assetPath("/images/projects/kit/cover.png") },
  { id: "bluedot", title: "스터디카페 Bluedot Lounge 웹&앱", categories: ["digital-products", "websites"], keywords: "Digital Products · Websites", summary: "사용권 결제부터 좌석 이용까지의 경험을 직관적으로 정리하고, 사용자용·키오스크용 웹&앱을 디자인하고 퍼블리싱했습니다.", client: "크리플레이", period: "2019. 1. – 2020. 12.", roles: ["웹&앱 디자인 100%", "웹 퍼블리싱 100%"], team: ["기획자 1", "UX/UI Designer 1 (본인)", "백엔드 개발자 1"], cover: assetPath("/images/projects/bluedot/cover.png") },
];
