import Link from "next/link";
import CinematicSpace from "./components/CinematicSpace";
import { EclipseFooter, EclipseHeader } from "./components/EclipseChrome";
import styles from "./eclipse.module.css";

export default function Home() {
  return (
    <main className={styles.home}>
      <CinematicSpace />
      <a href="#hero-quote" className={styles.skipLink}>Skip to content</a>
      <EclipseHeader />
      <section className={styles.hero} aria-labelledby="hero-quote">
        <p className={styles.eyebrow}><span />A SPACE MISSION DESIGN GAME</p>
        <h1 id="hero-quote" className={styles.quote}>
          <span>There was no sunrise</span>
          <span>on this world.</span>
          <em>So they built one.</em>
        </h1>
        <div className={styles.rule} />
        <p className={styles.manifesto}>DESIGN · PLAN · BUILD · OPERATE<br />A MISSION FOR A STARLESS WORLD.</p>
        <div className={styles.actions}>
          <Link href="/mission" className={styles.primary}>BEGIN MISSION <span aria-hidden="true">→</span></Link>
          <Link href="/lantern-17" className={styles.secondary}>EXPLORE LANTERN 17</Link>
        </div>
      </section>
      <EclipseFooter />
    </main>
  );
}
