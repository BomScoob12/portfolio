import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/icons";
import { ProjectCarousel } from "@/components/project-carousel";
import { projects } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Sarawit’s contributions to internal web tools, real-time event experiences, and game development.",
};

export default function Projects() {
  return (
    <div className="container">
      <header className="page-intro">
        <p className="eyebrow">SELECTED WORK / 2023 — 2025</p>
        <h1>
          Ideas, made <span className="name-accent">real.</span>
        </h1>
        <div className="intro-bottom">
          <p>
            A selection of projects I’ve contributed to.
            <br />
            Different challenges. One curiosity for how things work.
          </p>
          <span className="tiny-label">03 PROJECTS &nbsp; ↙</span>
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
                <span className="project-number">0{index + 1}</span>{" "}
                {project.category}{" "}
                <span className="project-year">/ {project.year}</span>
              </p>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <div className="contribution">
                <h3>MY CONTRIBUTION</h3>
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
      <p className="content-note">
        Project visuals are illustrative templates. Original screenshots and
        public repository links will be added when available.
      </p>
    </div>
  );
}
