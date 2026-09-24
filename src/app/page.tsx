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
      <section className="container hero">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">
            <span className="status-dot" /> {profile.role.toUpperCase()} ·{" "}
            {profile.location.toUpperCase()}
          </p>
          <h1>
            {site.home.greeting}{" "}
            <span className="name-accent">
              {profile.nickname}
              <span className="blue-period">.</span>
            </span>
            <span className="full-name">{profile.name}</span>
          </h1>
          <p className="hero-statement">
            <TextLines lines={profile.statement} />
          </p>
          <p className="hero-summary">{profile.summary}</p>
          <div className="hero-actions">
            <Link href="/projects" className="button button-primary">
              {site.home.projectsAction} <Arrow />
            </Link>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="quiet-link"
            >
              <LinkedInIcon /> LinkedIn <Arrow diagonal />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </div>
          {currentExperience && (
            <div className="current-role">
              <span className="tiny-label">CURRENTLY AT</span>
              <span className="ttb-inline">{currentExperience.company}</span>
              <span className="current-separator" />
              <span>
                {currentExperience.previewRole ?? currentExperience.role}
              </span>
            </div>
          )}
        </div>
        <div className="portrait-composition">
          <span className="portrait-corner corner-top" />
          <div className="portrait-frame">
            {profile.portrait ? (
              <Image
                src={profile.portrait}
                alt={profile.name}
                fill
                sizes="(max-width: 760px) 90vw, 42vw"
                priority
                className="real-portrait"
              />
            ) : (
              <>
                <div className="portrait-grid" />
                <span className="portrait-watermark" aria-hidden="true">
                  {profile.nickname.charAt(0)}.
                </span>
                <svg
                  className="portrait-silhouette"
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
                <span className="portrait-template-label">
                  PORTRAIT PLACEHOLDER
                </span>
              </>
            )}
            <div className="portrait-caption">
              <span>{site.home.portraitCaption}</span>
              <span>{site.home.portraitSection}</span>
            </div>
          </div>
          <div className="floating-code">
            <span className="code-icon">&lt;/&gt;</span>
            <div>
              {site.home.portraitNote}
              <span>{site.home.portraitSubnote}</span>
            </div>
          </div>
          <span className="portrait-corner corner-bottom" />
        </div>
      </section>
      <div className="container focus-strip">
        <span className="tiny-label">{site.home.focusLabel}</span>
        {profile.focusAreas.map((area, index) => (
          <Fragment key={area}>
            {index > 0 && (
              <span className="strip-star" aria-hidden="true">
                ✳
              </span>
            )}
            <span>{area}</span>
          </Fragment>
        ))}
      </div>
      <section className="container section-block">
        <div className="section-heading">
          <div>
            <p className="eyebrow">{site.home.projectsLabel}</p>
            <h2>
              {site.home.projectsHeading}
              <span className="blue-period">.</span>
            </h2>
          </div>
          <Link className="text-link" href="/projects">
            {site.home.projectsLink} <Arrow />
          </Link>
        </div>
        <div className="project-grid">
          {projects.map((project, index) => (
            <Link
              className="project-card"
              href={`/projects#${project.id}`}
              key={project.id}
            >
              <div className={`card-image card-image-${index}`}>
                {project.images[0] ? (
                  <Image
                    src={project.images[0].src}
                    alt={project.images[0].alt}
                    width={1000}
                    height={700}
                    sizes="(max-width: 760px) 100vw, 33vw"
                  />
                ) : (
                  <div className="empty-media">Project images coming soon</div>
                )}
                {project.images[0]?.isTemplate && (
                  <span className="image-label">IMAGE TEMPLATE</span>
                )}
                <span className="card-arrow">
                  <Arrow diagonal />
                </span>
              </div>
              <div className="card-meta">
                <span>{project.category}</span>
                <span>{project.year}</span>
              </div>
              <h3>{project.title}</h3>
              <div className="tags">
                {project.tags.slice(0, 2).map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section className="container section-block home-experience">
        <div>
          <p className="eyebrow">{site.home.experienceLabel}</p>
          <h2>
            <TextLines lines={site.home.experienceHeading} />
          </h2>
          <p className="section-description">
            {site.home.experienceDescription}
          </p>
          <Link className="text-link" href="/experiences">
            {site.home.experienceLink} <Arrow />
          </Link>
        </div>
        <div className="experience-preview">
          {experiences.slice(0, 3).map((exp) => (
            <Link
              href={`/experiences#${exp.id}`}
              className="experience-preview-row"
              key={exp.id}
            >
              <span
                className={`company-mark ${exp.markStyle === "university" ? "kmutt" : ""}`}
              >
                {exp.mark}
              </span>
              <div>
                <h3>{exp.role}</h3>
                <p>{exp.previewCompany}</p>
              </div>
              <span className="preview-date">
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
