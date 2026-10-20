import type { ProjectTheme } from "@/lib/project-theme";
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
  homeCover?: string;
  website?: string;
  theme?: ProjectTheme;
};

export const projects: Project[] = [
  { id: "ndt", theme: { accent: "#2566ff", accentText: "#215edc", accentSurface: "#e8f0ff", onAccent: "#ffffff" }, title: "AI 기반 비파괴검사 소프트웨어 DEEP-NDT", categories: ["digital-products", "ai-workflow"], keywords: "UX/UI 디자인 · 디자인 시스템", summary: "기술 검증용 MVP에서 시작한 AI 기반 비파괴검사 소프트웨어를 실제 현장에서 도입하고 판매할 수 있는 제품 경험으로 확장했습니다.", client: "DEEP-AI", period: "2024. 8. – 2026. 8.", roles: ["Product Designer"], team: ["사업총괄 2", "Product Designer 1 (본인)", "개발팀 6", "AI팀 10"], cover: assetPath("/images/projects/ndt/cover-hero.webp"), listingCover: assetPath("/images/projects/ndt/cover-listing.webp") },
  { id: "paia", theme: { accent: "#2566ff", accentText: "#215edc", accentSurface: "#e8f0ff", onAccent: "#ffffff" }, title: "비파괴검사 솔루션 기업 DEEP-AI 웹사이트", categories: ["digital-products", "websites", "ai-workflow"], keywords: "웹 디자인 · 퍼블리싱 · AI 활용", summary: "회사와 제품을 소개하는 웹사이트를 비즈니스 문의와 채용 지원 데이터를 확보하는 리드 중심의 서비스로 전환했습니다.", client: "DEEP-AI", period: "2026. 6. – 2026. 7.", roles: ["Project Manager", "UX/UI 기획 및 디자인", "콘텐츠 기획 및 제작", "웹 퍼블리싱"], team: ["외부 기획자 1", "Designer & PM 1 (본인)", "개발팀 2"], cover: assetPath("/images/projects/paia/cover-hero.webp"), listingCover: assetPath("/images/projects/paia/cover-listing.webp"), website: "https://deep-ai.kr/ko" },
  { id: "deep-ai", title: "DEEP-AI 편집 & 브랜드 디자인", categories: ["brand-identities", "editorials"], keywords: "브랜드 제작물 · 편집 디자인 · AI 활용", summary: "DEEP-AI의 사업 활동과 내부 운영에 필요한 편집·브랜드 디자인을 담당했습니다. 회사와 제품을 소개하는 문서부터 내부 캠페인, 외부 홍보물, 현장에서 사용하는 브랜드 제작물까지 목적에 맞춰 작업하고 관리했습니다.", client: "DEEP-AI", period: "2024. 7. – 2026. 8.", roles: ["Product Designer"], team: ["PD 1명(본인)"], theme: { accent: "#246bfd", accentText: "#215edc", accentSurface: "#e8f0ff", onAccent: "#ffffff" }, cover: assetPath("/images/projects/dabrand/hero_bg.webp"), listingCover: assetPath("/images/projects/dabrand/proj_list_dabrand.webp") },
  { id: "ppt", title: "기업 프레젠테이션 디자인", categories: ["editorials"], keywords: "제안서 디자인 · 발표자료 디자인 · AI 활용", summary: "기업의 사업과 기술을 전달하는 사업 제안서, 회사·제품·솔루션 소개서, 발표자료와 템플릿을 디자인했습니다.", client: "다수 기업", period: "2010. 7. ~ 2026. 8", roles: ["프레젠테이션 디자이너"], theme: { accent: "#246bfd", accentText: "#246bfd", accentSurface: "#e8f0ff", onAccent: "#ffffff" }, cover: assetPath("/images/projects/ppt/ppt-hero-bg.webp"), homeCover: assetPath("/images/projects/ppt/ppt-landing-hero-bg.webp"), listingCover: assetPath("/images/projects/ppt/ppt-list-hero-bg.webp") },
  { id: "valros", title: "VR 콘텐츠 제작 소프트웨어 VARLOS Web VR Editor", categories: ["digital-products", "websites"], keywords: "UX/UI 디자인 · 웹 퍼블리싱", summary: "웹에서 VR 시나리오를 만들고 VR 헤드셋(HMD)으로 체험하는 에디터의 UX·UI 디자인과 퍼블리싱을 담당했습니다.", client: "삼우이머션", period: "전체 개발 약 6개월 · 담당 작업 총 3주", roles: ["디자이너 · 웹 퍼블리셔"], theme: { accent: "#385dd9", accentText: "#385dd9", accentSurface: "#eef1f7", onAccent: "#ffffff" }, cover: assetPath("/images/projects/valros/cover_hero.webp"), listingCover: assetPath("/images/projects/valros/cover-listing.webp") },
  { id: "kit", title: "경남정보대학교 메타버스 플랫폼 구축", categories: ["digital-products", "websites"], keywords: "서비스 기획 · UX/UI 디자인 · 퍼블리싱", summary: "메타버스 내 UI와 사용자·관리자 웹을 설계하고, 웹 공동 기획부터 디자인·퍼블리싱까지 담당했습니다.", client: "경남정보대학교", period: "2023. 2. / 3주간", roles: ["UXUI 디자이너 · 웹 퍼블리셔"], theme: { accent: "#e00826", accentText: "#e00826", accentSurface: "#f5f5f5", onAccent: "#ffffff" }, cover: assetPath("/images/projects/kit/v2/hero.webp"), listingCover: assetPath("/images/projects/kit/v2/listing-optimized.webp") },
  { id: "bluedot", title: "스터디카페 Bluedot Lounge 웹&앱과 브랜드 디자인", categories: ["digital-products", "websites", "brand-identities"], keywords: "UX/UI 디자인 · 웹 퍼블리싱 · 브랜드 디자인", summary: "무인 구매·출입·좌석 이용 흐름을 설계하고, 웹·앱과 키오스크부터 온·오프라인 브랜드 접점까지 디자인했습니다.", client: "크리플레이", period: "2019. 1. – 2020. 12.", roles: ["UX/UI 디자이너·웹 퍼블리셔"], team: ["디자이너·웹 퍼블리셔 1명(본인)", "개발자 1명"], theme: { accent: "#3850d9", accentText: "#3850d9", accentSurface: "#eef1f7", onAccent: "#ffffff" }, cover: assetPath("/images/projects/bluedot/hero.webp"), listingCover: assetPath("/images/projects/bluedot/listing.webp") },
];
