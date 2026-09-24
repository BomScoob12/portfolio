import styles from "./page.module.css";
import type { Metadata } from "next";
import { Arrow, LinkedInIcon } from "@/components/icons";
import { experiences, profile } from "@/data/portfolio";
import site from "@/data/site.json";
import { TextLines } from "@/components/text-lines";

export const metadata: Metadata = {
  title: "Experiences",
  description: site.experiences.description,
};

export default function Experiences() {
  return (
    <div className={styles.container}>
      <header className={styles.pageIntro}>
        <p className={styles.eyebrow}>{site.experiences.eyebrow}</p>
        <h1>
          {site.experiences.title}
          <br />
          <span className={styles.nameAccent}>{site.experiences.accent}</span>
        </h1>
        <div className={styles.introBottom}>
          <p>
            <TextLines lines={site.experiences.intro} />
          </p>
          <a
            className={styles.textLink}
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon /> View LinkedIn <Arrow diagonal />
            <span className={styles.srOnly}> (opens in a new tab)</span>
          </a>
        </div>
      </header>
      <section className={styles.timeline} aria-label="Work experience">
        {experiences.map((exp, index) => (
          <article
            className={`${styles.timelineEntry} ${exp.current ? styles.isCurrent : ""}`}
            key={exp.id}
            id={exp.id}
          >
            <div className={styles.timelineDate}>
              <span className={styles.timelineDot} />
              <p>{exp.period}</p>
              {exp.current && (
                <span className={styles.currentBadge}>
                  <span className={styles.statusDot} /> Current role
                </span>
              )}
              <span className={styles.timelineIndex}>
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <div className={styles.timelineContent}>
              <div className={styles.experienceHeading}>
                <span
                  className={`${styles.companyMark} ${styles.large} ${exp.markStyle === "university" ? styles.kmutt : ""}`}
                >
                  {exp.mark}
                </span>
                <div>
                  <p className={styles.companyName}>{exp.company}</p>
                  <h2>{exp.role}</h2>
                  <p className={styles.roleMeta}>
                    {exp.type}
                    <span>·</span>
                    {exp.location}
                  </p>
                </div>
              </div>
              <p className={styles.experienceDescription}>{exp.description}</p>
              {exp.highlights.length > 0 && (
                <ul className={styles.highlights}>
                  {exp.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              {exp.tags.length > 0 && (
                <div className={styles.tags}>
                  {exp.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              )}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
