"use client";

import Image from "next/image";
import Link from "next/link";
import { assetPath } from "@/lib/asset-path";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./site-header.module.css";

type SiteHeaderProps = {
  transparentOverHero?: boolean;
};

export default function SiteHeader({ transparentOverHero = false }: SiteHeaderProps) {
  const [hidden, setHidden] = useState(false);
  const [inverted, setInverted] = useState(false);
  const [overHero, setOverHero] = useState(transparentOverHero);
  const [menuOpen, setMenuOpen] = useState(false);
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuPanelRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    lastScrollY.current = window.scrollY;

    const updateHeader = () => {
      const currentScrollY = window.scrollY;
      const difference = currentScrollY - lastScrollY.current;
      const firstContentSection = transparentOverHero
        ? document.getElementById("selected-projects-title")?.closest("section")
        : null;
      setOverHero(Boolean(firstContentSection && firstContentSection.getBoundingClientRect().top > 0));
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
  }, [transparentOverHero]);

  useLayoutEffect(() => {
    const root = document.documentElement;
    const header = headerRef.current;

    const syncHeaderOffset = () => {
      const height = header?.getBoundingClientRect().height ?? 0;
      root.style.setProperty("--site-header-offset", hidden && !menuOpen ? "0px" : `${height}px`);
    };

    syncHeaderOffset();
    const observer = header ? new ResizeObserver(syncHeaderOffset) : null;
    if (header) observer?.observe(header);

    return () => {
      observer?.disconnect();
      root.style.removeProperty("--site-header-offset");
    };
  }, [hidden, menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const main = document.querySelector("main");
    document.body.style.overflow = "hidden";
    main?.setAttribute("inert", "");
    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key === "Tab") {
        const focusable = menuPanelRef.current?.querySelectorAll<HTMLElement>("button:not([disabled]), a[href]");
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      main?.removeAttribute("inert");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  const closeMenu = (restoreFocus = false) => {
    setMenuOpen(false);
    if (restoreFocus) window.requestAnimationFrame(() => menuButtonRef.current?.focus());
  };

  return (
    <header ref={headerRef} className={`${styles.header} ${hidden && !menuOpen ? styles.hidden : ""} ${inverted && !menuOpen ? styles.inverted : ""} ${overHero && !menuOpen ? styles.transparent : ""}`}>
      <Link className={styles.identity} href="/" aria-label="홈으로 이동">
        <Image className={styles.logo} src={assetPath("/images/brand/logo.svg")} alt="" width={28} height={28} priority />
        <span>Designer <strong>HYOEUN KIM</strong></span>
      </Link>
      <nav className={styles.nav} aria-label="주요 메뉴">
        <Link href="/projects">Projects</Link>
        <a href="#contact">Contact</a>
      </nav>
      <button
        ref={menuButtonRef}
        className={styles.menuButton}
        type="button"
        aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
        aria-controls="mobile-menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <Image src={assetPath("/ham-menu.svg")} alt="" width={32} height={32} />
      </button>
      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ""}`} aria-hidden={!menuOpen}>
        <button className={styles.menuBackdrop} type="button" aria-label="메뉴 닫기" tabIndex={-1} onClick={() => closeMenu(true)} />
        <div ref={menuPanelRef} className={styles.menuPanel} id="mobile-menu" role="dialog" aria-modal="true" aria-label="모바일 메뉴">
          <div className={styles.menuTop}>
            <Link className={styles.menuIdentity} href="/" tabIndex={menuOpen ? 0 : -1} aria-label="홈으로 이동" onClick={() => closeMenu()}>
              <Image className={styles.logo} src={assetPath("/images/brand/logo.svg")} alt="" width={28} height={28} />
              <span>Designer <strong>HYOEUN KIM</strong></span>
            </Link>
            <button
              ref={closeButtonRef}
              className={styles.closeButton}
              type="button"
              aria-label="메뉴 닫기"
              tabIndex={menuOpen ? 0 : -1}
              onClick={() => closeMenu(true)}
            >
              <span aria-hidden="true" />
            </button>
          </div>
          <nav className={styles.mobileNav} aria-label="모바일 주요 메뉴">
            <Link href="/" tabIndex={menuOpen ? 0 : -1} onClick={() => closeMenu()}>Home</Link>
            <Link href="/projects" tabIndex={menuOpen ? 0 : -1} onClick={() => closeMenu()}>Projects</Link>
            <Link href="/#contact" tabIndex={menuOpen ? 0 : -1} onClick={() => closeMenu()}>Contact</Link>
          </nav>
          <div className={styles.menuContact}>
            <div className={styles.menuContactIdentity}>
              <strong>김효은</strong>
              <span>Product Designer</span>
            </div>
            <div className={styles.menuContactMethods}>
              <a href="mailto:hello.hyobee@gmail.com" tabIndex={menuOpen ? 0 : -1}>hello.hyobee@gmail.com</a>
              <span aria-label="카카오톡 링크 준비 중">KakaoTalk</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
