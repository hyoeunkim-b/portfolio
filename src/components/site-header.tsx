"use client";

import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/asset-path";
import { useEffect, useRef, useState } from "react";
import styles from "./site-header.module.css";

export default function SiteHeader() {
  const [hidden, setHidden] = useState(false);
  const [inverted, setInverted] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const updateHeader = () => {
      const currentScrollY = window.scrollY;
      const difference = currentScrollY - lastScrollY.current;
      const howSection = document.getElementById("how-i-work");
      if (howSection) {
        const sectionRect = howSection.getBoundingClientRect();
        setInverted(sectionRect.top <= 72 && sectionRect.bottom > 0);
      }

      if (currentScrollY <= 24) setHidden(false);
      else if (difference > 6) setHidden(true);
      else if (difference < -6) setHidden(false);

      lastScrollY.current = currentScrollY;
      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        window.requestAnimationFrame(updateHeader);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    updateHeader();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.header} ${hidden ? styles.hidden : ""} ${inverted ? styles.inverted : ""}`}>
      <Link className={styles.identity} href="/" aria-label="홈으로 이동">
        <Image className={styles.logo} src={assetPath("/images/brand/logo.svg")} alt="" width={28} height={28} priority />
        <span>Designer <strong>HYOEUN KIM</strong></span>
      </Link>
      <nav className={styles.nav} aria-label="주요 메뉴">
        <Link href="/projects">Projects</Link>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
