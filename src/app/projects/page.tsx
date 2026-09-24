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
    <div className="container">
      <header className="page-intro">
        <p className="eyebrow">
          {site.projects.eyebrow}
          {yearRange && ` / ${yearRange}`}
        </p>
        <h1>
          {site.projects.title}{" "}
          <span className="name-accent">{site.projects.accent}</span>
        </h1>
        <div className="intro-bottom">
          <p>
            <TextLines lines={site.projects.intro} />
          </p>
          <span className="tiny-label">
            {String(projects.length).padStart(2, "0")}{" "}
            {projects.length === 1 ? "PROJECT" : "PROJECTS"} &nbsp; ↙
          </span>
        </div>
      </header>
      <div className="project-list">
        {projects.map((project, index) => (
          <article
            className={`project-row ${index % 2 ? "reverse" : ""}`}
            key={project.id}
            id={project.id}
          >
            <div className="project-details">
              <p className="eyebrow">
                <span className="project-number">
                  {String(index + 1).padStart(2, "0")}
                </span>{" "}
                {project.category}{" "}
                <span className="project-year">/ {project.year}</span>
              </p>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="contribution">
                <h3>{site.projects.contributionLabel}</h3>
                <p>{project.contribution}</p>
              </div>
              <div className="tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="project-links">
                {project.links.map((link) =>
                  link.href.startsWith("/") ? (
                    <Link
                      key={link.href}
                      className="text-link"
                      href={link.href}
                    >
                      {link.label}
                      <Arrow diagonal />
                    </Link>
                  ) : (
                    <a
                      key={link.href}
                      className="text-link"
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {link.label}
                      <Arrow diagonal />
                      <span className="sr-only"> (opens in a new tab)</span>
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
      ) && <p className="content-note">{site.projects.templateNote}</p>}
    </div>
  );
}
