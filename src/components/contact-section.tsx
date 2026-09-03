import Image from "next/image";
import { assetPath } from "@/lib/asset-path";
import styles from "./contact-section.module.css";

type ContactSectionProps = {
  surface?: boolean;
};

export default function ContactSection({ surface = false }: ContactSectionProps) {
  return (
    <section id="contact" className={`${styles.contact} ${surface ? styles.surface : ""}`} aria-labelledby="contact-title">
      <div className={styles.contactTop}>
        <div className={styles.contactMessage}>
          <p id="contact-title" className={styles.eyebrow}>Contact</p>
          <div className={styles.contactCopy}>
            <p>소통과 협업으로 더 나은 경험을 만들어 나가고 싶습니다.</p>
            <p>함께 문제를 풀 동료가 필요하시다면</p>
            <p>언제든지 편하게 연락주세요.</p>
          </div>
        </div>
        <div className={styles.contactDetails}>
          <div className={styles.contactIdentity}><strong>김효은</strong><span>Product Designer</span></div>
          <div className={styles.contactMethods}>
            <a className={styles.contactMethod} href="mailto:hello.hyobee@gmail.com"><span>hello.hyobee@gmail.com</span><Image className={styles.contactArrow} src={assetPath("/images/arrow-right-top.svg")} alt="" width={16} height={16} /></a>
            <span className={styles.contactMethod} aria-label="카카오톡 링크 준비 중"><span>KakaoTalk</span><Image className={styles.contactArrow} src={assetPath("/images/arrow-right-top.svg")} alt="" width={16} height={16} /></span>
          </div>
        </div>
      </div>
      <div className={styles.contactMedia}>
        <Image className={styles.contactBackground} src={assetPath("/contact-bg.png")} alt="" fill sizes="100vw" />
        <footer className={styles.footer}><small>Hyoeun Kim Portfolio © 2026</small><a className={styles.topLink} href="#top"><Image className={styles.topIcon} src={assetPath("/images/gototop.svg")} alt="" width={16} height={16} /><span>Top</span></a></footer>
      </div>
    </section>
  );
}
