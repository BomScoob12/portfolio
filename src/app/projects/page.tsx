import styles from "./page.module.css";
import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/icons";
import { ProjectCarousel } from "@/components/project-carousel";
import { projects } from "@/data/portfolio";
import site from "@/data/site.json";
import { TextLines } from "@/components/text-lines";

export const metadata: Metadata = {
  title: "Projects",
  description: site.projects.description,
};

export default function Projects() {
  const years = projects.map((project) => project.year).sort();
  const yearRange = years.length
    ? `${years[0]} — ${years[years.length - 1]}`
    : "";
  return (
    <div className={styles.container}>
      <header className={styles.pageIntro}>
        <p className={styles.eyebrow}>
          {site.projects.eyebrow}
          {yearRange && ` / ${yearRange}`}
        </p>
        <h1>
          {site.projects.title}{" "}
          <span className={styles.nameAccent}>{site.projects.accent}</span>
        </h1>
        <div className={styles.introBottom}>
          <p>
            <TextLines lines={site.projects.intro} />
          </p>
          <span className={styles.tinyLabel}>
            {String(projects.length).padStart(2, "0")}{" "}
            {projects.length === 1 ? "PROJECT" : "PROJECTS"} &nbsp; ↙
          </span>
        </div>
      </header>
      <div>
        {projects.map((project, index) => (
          <article
            className={`${styles.projectRow} ${index % 2 ? styles.reverse : ""}`}
            key={project.id}
            id={project.id}
          >
            <div className={styles.projectDetails}>
              <p className={styles.eyebrow}>
                <span className={styles.projectNumber}>
                  {String(index + 1).padStart(2, "0")}
                </span>{" "}
                {project.category}{" "}
                <span className={styles.projectYear}>/ {project.year}</span>
              </p>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className={styles.contribution}>
                <h3>{site.projects.contributionLabel}</h3>
                <p>{project.contribution}</p>
              </div>
              <div className={styles.tags}>
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className={styles.projectLinks}>
                {project.links.map((link) =>
                  link.href.startsWith("/") ? (
                    <Link
                      key={link.href}
                      className={styles.textLink}
                      href={link.href}
                    >
                      {link.label}
                      <Arrow diagonal />
                    </Link>
                  ) : (
                    <a
                      key={link.href}
                      className={styles.textLink}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.label}
                      <Arrow diagonal />
                      <span className={styles.srOnly}>
                        {" "}
                        (opens in a new tab)
                      </span>
                    </a>
                  ),
                )}
              </div>
            </div>
            <ProjectCarousel images={project.images} title={project.category} />
          </article>
        ))}
      </div>
      {projects.some((project) =>
        project.images.some((image) => image.isTemplate),
      ) && <p className={styles.contentNote}>{site.projects.templateNote}</p>}
    </div>
  );
}
