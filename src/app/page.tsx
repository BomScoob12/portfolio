import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";
import { Arrow, LinkedInIcon } from "@/components/icons";
import {
  currentExperience,
  experiences,
  profile,
  projects,
} from "@/data/portfolio";
import site from "@/data/site.json";
import { TextLines } from "@/components/text-lines";
import { Fragment } from "react";

export default function Home() {
  return (
    <>
      <section className={`${styles.container} ${styles.hero}`}>
        <div>
          <p className={`${styles.eyebrow} ${styles.heroEyebrow}`}>
            <span className={styles.statusDot} /> {profile.role.toUpperCase()} ·{" "}
            {profile.location.toUpperCase()}
          </p>
          <h1>
            {site.home.greeting}{" "}
            <span className={styles.nameAccent}>
              {profile.nickname}
              <span className={styles.bluePeriod}>.</span>
            </span>
            <span className={styles.fullName}>{profile.name}</span>
          </h1>
          <p className={styles.heroStatement}>
            <TextLines lines={profile.statement} />
          </p>
          <p className={styles.heroSummary}>{profile.summary}</p>
          <div className={styles.heroActions}>
            <Link
              href="/projects"
              className={`${styles.button} ${styles.buttonPrimary}`}
            >
              {site.home.projectsAction} <Arrow />
            </Link>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className={styles.quietLink}
            >
              <LinkedInIcon /> LinkedIn <Arrow diagonal />
              <span className={styles.srOnly}> (opens in a new tab)</span>
            </a>
          </div>
          {currentExperience && (
            <div className={styles.currentRole}>
              <span className={styles.tinyLabel}>CURRENTLY AT</span>
              <span className={styles.ttbInline}>
                {currentExperience.company}
              </span>
              <span className={styles.currentSeparator} />
              <span>
                {currentExperience.previewRole ?? currentExperience.role}
              </span>
            </div>
          )}
        </div>
        <div className={styles.portraitComposition}>
          <span className={`${styles.portraitCorner} ${styles.cornerTop}`} />
          <div className={styles.portraitFrame}>
            {profile.portrait ? (
              <Image
                src={profile.portrait}
                alt={profile.name}
                fill
                sizes="(max-width: 760px) 90vw, 42vw"
                priority
                className={styles.realPortrait}
              />
            ) : (
              <>
                <div className={styles.portraitGrid} />
                <span className={styles.portraitWatermark} aria-hidden="true">
                  {profile.nickname.charAt(0)}.
                </span>
                <svg
                  className={styles.portraitSilhouette}
                  viewBox="0 0 440 510"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="person" x1="0" y1="0" x2="1" y2="1">
                      <stop stopColor="#6b8dbb" />
                      <stop offset="1" stopColor="#15294a" />
                    </linearGradient>
                  </defs>
                  <ellipse
                    cx="225"
                    cy="196"
                    rx="76"
                    ry="90"
                    fill="url(#person)"
                  />
                  <path
                    d="M58 510v-58c0-83 56-148 129-158l37 37 38-37c73 10 124 75 124 158v58Z"
                    fill="url(#person)"
                  />
                  <path
                    d="m188 294 36 37-31 74-36-99m106-12-39 37 34 74 32-99"
                    fill="#153459"
                  />
                </svg>
                <span className={styles.portraitTemplateLabel}>
                  PORTRAIT PLACEHOLDER
                </span>
              </>
            )}
            <div className={styles.portraitCaption}>
              <span>{site.home.portraitCaption}</span>
              <span>{site.home.portraitSection}</span>
            </div>
          </div>
          <div className={styles.floatingCode}>
            <span className={styles.codeIcon}>&lt;/&gt;</span>
            <div>
              {site.home.portraitNote}
              <span>{site.home.portraitSubnote}</span>
            </div>
          </div>
          <span className={`${styles.portraitCorner} ${styles.cornerBottom}`} />
        </div>
      </section>
      <div className={`${styles.container} ${styles.focusStrip}`}>
        <span className={styles.tinyLabel}>{site.home.focusLabel}</span>
        {profile.focusAreas.map((area, index) => (
          <Fragment key={area}>
            {index > 0 && (
              <span className={styles.stripStar} aria-hidden="true">
                ✳
              </span>
            )}
            <span>{area}</span>
          </Fragment>
        ))}
      </div>
      <section className={`${styles.container} ${styles.sectionBlock}`}>
        <div className={styles.sectionHeading}>
          <div>
            <p className={styles.eyebrow}>{site.home.projectsLabel}</p>
            <h2>
              {site.home.projectsHeading}
              <span className={styles.bluePeriod}>.</span>
            </h2>
          </div>
          <Link className={styles.textLink} href="/projects">
            {site.home.projectsLink} <Arrow />
          </Link>
        </div>
        <div className={styles.projectGrid}>
          {projects.map((project) => (
            <Link
              className={styles.projectCard}
              href={`/projects#${project.id}`}
              key={project.id}
            >
              <div className={styles.cardImage}>
                {project.images[0] ? (
                  <Image
                    src={project.images[0].src}
                    alt={project.images[0].alt}
                    width={1000}
                    height={700}
                    sizes="(max-width: 760px) 100vw, 33vw"
                  />
                ) : (
                  <div className={styles.emptyMedia}>
                    Project images coming soon
                  </div>
                )}
                {project.images[0]?.isTemplate && (
                  <span className={styles.imageLabel}>IMAGE TEMPLATE</span>
                )}
                <span className={styles.cardArrow}>
                  <Arrow diagonal />
                </span>
              </div>
              <div className={styles.cardMeta}>
                <span>{project.category}</span>
                <span>{project.year}</span>
              </div>
              <h3>{project.title}</h3>
              <div className={styles.tags}>
                {project.tags.slice(0, 2).map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section
        className={`${styles.container} ${styles.sectionBlock} ${styles.homeExperience}`}
      >
        <div>
          <p className={styles.eyebrow}>{site.home.experienceLabel}</p>
          <h2>
            <TextLines lines={site.home.experienceHeading} />
          </h2>
          <p className={styles.sectionDescription}>
            {site.home.experienceDescription}
          </p>
          <Link className={styles.textLink} href="/experiences">
            {site.home.experienceLink} <Arrow />
          </Link>
        </div>
        <div>
          {experiences.slice(0, 3).map((exp) => (
            <Link
              href={`/experiences#${exp.id}`}
              className={styles.experiencePreviewRow}
              key={exp.id}
            >
              <span
                className={`${styles.companyMark} ${exp.markStyle === "university" ? styles.kmutt : ""}`}
              >
                {exp.mark}
              </span>
              <div>
                <h3>{exp.role}</h3>
                <p>{exp.previewCompany}</p>
              </div>
              <span className={styles.previewDate}>
                {exp.previewPeriod}
                <Arrow diagonal />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
