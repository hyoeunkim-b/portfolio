import type { Metadata } from "next";
import Script from "next/script";
import "lenis/dist/lenis.css";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { assetPath } from "@/lib/asset-path";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "디자이너 김효은 포트폴리오 | 관찰하고, 연결하여, 쓸모있게.",
  description: "익숙한 일상 속 작은 불편을 관찰하고, 흩어진 생각과 정보를 연결해 이해하기 쉽고 유용한 경험으로 만듭니다.",
  icons: {
    icon: assetPath("/images/brand/logo.svg"),
  },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    title: "디자이너 김효은 포트폴리오",
    description: "익숙한 일상 속 작은 불편을 관찰하고, 흩어진 생각과 정보를 연결해 이해하기 쉽고 유용한 경험으로 만듭니다.",
    images: [{
      url: `${siteUrl}/meta-img.png`,
      width: 1200,
      height: 630,
      alt: "디자이너 김효은 포트폴리오 — 관찰하고, 연결하여, 쓸모있게.",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "디자이너 김효은 포트폴리오",
    description: "익숙한 일상 속 작은 불편을 관찰하고, 흩어진 생각과 정보를 연결해 이해하기 쉽고 유용한 경험으로 만듭니다.",
    images: [`${siteUrl}/meta-img.png`],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>
    <SmoothScroll />{children}
    {process.env.NODE_ENV === "production" && (
      <Script id="google-analytics" strategy="afterInteractive">{`
        (function () {
          // Also exclude locally served production builds and preview hosts.
          if (window.location.origin !== 'https://hyoeunkim-b.github.io' ||
              (window.location.pathname !== '/portfolio' &&
               !window.location.pathname.startsWith('/portfolio/'))) return;

          window.dataLayer = window.dataLayer || [];
          window.gtag = function () { window.dataLayer.push(arguments); };
          window.gtag('js', new Date());
          window.gtag('config', 'G-DFVMF44LKQ');

          var script = document.createElement('script');
          script.async = true;
          script.src = 'https://www.googletagmanager.com/gtag/js?id=G-DFVMF44LKQ';
          document.head.appendChild(script);
        })();
      `}</Script>
    )}
  </body></html>;
}
