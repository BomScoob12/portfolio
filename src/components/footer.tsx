import styles from "./footer.module.css";
import { profile } from "@/data/portfolio";
import { Arrow, LinkedInIcon } from "./icons";
import site from "@/data/site.json";

export function Footer() {
  return (
    <footer className={styles.container}>
      <div className={styles.contactStrip}>
        <div>
          <span className={styles.eyebrow}>{site.footer.eyebrow}</span>
          <h2>
            {site.footer.title} <span>{site.footer.accent}</span>
          </h2>
        </div>
        <a
          href={profile.linkedin}
          className={`${styles.button} ${styles.buttonOutline}`}
          target="_blank"
          rel="noreferrer"
        >
          {site.footer.contact} <Arrow diagonal />
          <span className={styles.srOnly}> (opens in a new tab)</span>
        </a>
      </div>
      <div className={styles.footerBottom}>
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span className={styles.footerNote}>{site.footer.credit}</span>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label={`${profile.name} on LinkedIn (opens in a new tab)`}
        >
          <LinkedInIcon />
        </a>
      </div>
    </footer>
  );
}
