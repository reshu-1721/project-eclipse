import Link from "next/link";
import styles from "../eclipse.module.css";

export function EclipseHeader() {
  return (
    <header className={styles.header}>
      <Link href="/" className={styles.brand} aria-label="Project Eclipse home">
        <span className={styles.emblem} aria-hidden="true" />
        <span>PROJECT <strong>ECLIPSE</strong></span>
      </Link>
      <div className={styles.headerLine} aria-hidden="true" />
      <nav className={styles.nav} aria-label="Main navigation">
        <Link href="/mission">MISSION</Link>
        <Link href="/design">DESIGN</Link>
        <Link href="/simulate">SIMULATE</Link>
        <Link href="/about">ABOUT</Link>
        <Link href="/sign-in" className={styles.signin}><span aria-hidden="true">♙</span> SIGN IN</Link>
      </nav>
    </header>
  );
}

export function EclipseFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.system}><span className={styles.orbit} aria-hidden="true">●</span><p>ROGUE PLANET<br /><span>LANTERN NETWORK</span></p></div>
      <div className={styles.footerLine} aria-hidden="true" />
      <p className={styles.coordinates}>L-17 <span>{"//"}</span> ROGUE SYSTEM <span className={styles.corner} aria-hidden="true" /></p>
    </footer>
  );
}
