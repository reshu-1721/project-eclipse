import Image from "next/image";
import styles from "../eclipse.module.css";

/** Supplied galaxy and masked artist's concept; the Eclipse world is fictional. */
export default function CinematicSpace() {
  return (
    <div className={styles.scene} aria-hidden="true">
      <div className={styles.galaxy}>
        <Image src="/images/purplegalaxy.png" alt="" fill sizes="100vw" preload unoptimized />
      </div>
      <div className={styles.planet}>
        <Image src="/images/kepler-452b-cutout.png" alt="" fill sizes="(max-width: 760px) 110vw, 62vw" preload unoptimized />
      </div>
      <div className={styles.orbitalPath} />
      <div className={styles.lantern}><i /><span>LANTERN 17<small>ORBITAL LIGHT NETWORK</small></span></div>
      <div className={styles.stars} />
    </div>
  );
}
