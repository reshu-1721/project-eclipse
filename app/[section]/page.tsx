import Link from "next/link";
import { notFound } from "next/navigation";
import { EclipseFooter, EclipseHeader } from "../components/EclipseChrome";
import styles from "../eclipse.module.css";

const sections: Record<string, { title: string; eyebrow: string; description: string }> = {
  mission: { title: "Build a dawn.", eyebrow: "MISSION BRIEFING", description: "Welcome to the Lantern Network. Your mission: design an orbital light network for a world without a star. Mission planning is in development. Explore Lantern 17 while the command deck is prepared." },
  design: { title: "Engineer the light.", eyebrow: "DESIGN STUDIO", description: "Plan the stations, orbits and infrastructure that could illuminate a rogue planet. The interactive design workspace is in development." },
  simulate: { title: "Every orbit matters.", eyebrow: "SIMULATION DECK", description: "The future simulation will let you test orbital coverage and refine your Lantern Network. The simulation deck is in development." },
  about: { title: "A world worth lighting.", eyebrow: "ABOUT PROJECT ECLIPSE", description: "Project Eclipse is a space mission design game about imagining a future for a starless world. Design, plan, build and operate a network of artificial light." },
  "sign-in": { title: "Command access.", eyebrow: "SIGN IN", description: "Accounts are not available yet. You can explore the mission briefing and Lantern 17 without signing in." },
  "lantern-17": { title: "Meet Lantern 17.", eyebrow: "L-17 // ROGUE SYSTEM", description: "A point of warmth in the interstellar dark. Lantern 17 is the starting point for a network designed to bring light to a world without sunrise. Detailed station systems are in development." },
};

export function generateStaticParams() {
  return Object.keys(sections).map((section) => ({ section }));
}

export async function generateMetadata({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  return { title: `${sections[section]?.eyebrow ?? "Not found"} | Project Eclipse` };
}

export default async function SectionPage({ params }: { params: Promise<{ section: string }> }) {
  const { section } = await params;
  const content = sections[section];
  if (!content) notFound();
  return (
    <main className={styles.home}>
      <div className={styles.cosmos} aria-hidden="true" />
      <EclipseHeader />
      <section className={styles.destination}>
        <p className={styles.eyebrow}>{content.eyebrow}</p>
        <h1>{content.title}</h1>
        <p>{content.description}</p>
        <div className={styles.actions}>
          <Link href="/" className={styles.primary}>RETURN HOME <span aria-hidden="true">→</span></Link>
          {section !== "lantern-17" && <Link href="/lantern-17" className={styles.secondary}>EXPLORE LANTERN 17</Link>}
        </div>
      </section>
      <EclipseFooter />
    </main>
  );
}
