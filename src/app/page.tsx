import Image from "next/image";
import Link from "next/link";
import { Arrow, LinkedInIcon } from "@/components/icons";
import { experiences, profile, projects } from "@/data/portfolio";

export default function Home() {
  return (
    <>
      <section className="container hero">
        <div className="hero-copy">
          <p className="eyebrow hero-eyebrow">
            <span className="status-dot" /> SOFTWARE ENGINEER · BANGKOK,
            THAILAND
          </p>
          <h1>
            Hi, I’m{" "}
            <span className="name-accent">
              Bom<span className="blue-period">.</span>
            </span>
            <span className="full-name">Sarawit Kraukham</span>
          </h1>
          <p className="hero-statement">
            Thoughtful code.
            <br />
            Useful experiences.
          </p>
          <p className="hero-summary">{profile.summary}</p>
          <div className="hero-actions">
            <Link href="/projects" className="button button-primary">
              Explore my work <Arrow />
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
          <div className="current-role">
            <span className="tiny-label">CURRENTLY AT</span>
            <span className="ttb-inline">
              ttb<span> bank</span>
            </span>
            <span className="current-separator" />
            <span>Software Engineer Intern</span>
          </div>
        </div>
        <div className="portrait-composition">
          <span className="portrait-corner corner-top" />
          <div className="portrait-frame">
            {profile.portrait ? (
              <Image
                src={profile.portrait}
                alt="Sarawit Kraukham"
                fill
                sizes="(max-width: 760px) 90vw, 42vw"
                priority
                className="real-portrait"
              />
            ) : (
              <>
                <div className="portrait-grid" />
                <span className="portrait-watermark" aria-hidden="true">
                  B.
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
              <span>THE PERSON BEHIND THE CODE</span>
              <span>01 / ABOUT ME</span>
            </div>
          </div>
          <div className="floating-code">
            <span className="code-icon">&lt;/&gt;</span>
            <div>
              Ideas into implementation
              <span>Always learning. Always building.</span>
            </div>
          </div>
          <span className="portrait-corner corner-bottom" />
          <span className="portrait-coordinate">
            13.7563° N &nbsp; 100.5018° E
          </span>
        </div>
      </section>
      <div className="container focus-strip">
        <span className="tiny-label">MY WORK SPANS</span>
        <span>Backend & APIs</span>
        <span className="strip-star">✳</span>
        <span>Web Development</span>
        <span className="strip-star">✳</span>
        <span>Creative Coding</span>
        <span className="strip-star">✳</span>
        <span>Knowledge Sharing</span>
      </div>
      <section className="container section-block">
        <div className="section-heading">
          <div>
            <p className="eyebrow">01 / SELECTED WORK</p>
            <h2>
              Some things I’ve helped build
              <span className="blue-period">.</span>
            </h2>
          </div>
          <Link className="text-link" href="/projects">
            All projects <Arrow />
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
                <Image
                  src={project.images[0].src}
                  alt={project.images[0].alt}
                  width={1000}
                  height={700}
                  sizes="(max-width: 760px) 100vw, 33vw"
                />
                <span className="image-label">IMAGE TEMPLATE</span>
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
          <p className="eyebrow">02 / THE JOURNEY SO FAR</p>
          <h2>
            Built through
            <br />
            real experience.
          </h2>
          <p className="section-description">
            From teaching game development to contributing to banking platforms.
            Each chapter adds a new perspective.
          </p>
          <Link className="text-link" href="/experiences">
            Explore my experience <Arrow />
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
                className={`company-mark ${exp.mark === "K" ? "kmutt" : ""}`}
              >
                {exp.mark}
              </span>
              <div>
                <h3>{exp.role}</h3>
                <p>
                  {exp.mark === "K" ? "KMUTT · IT Starter Pack" : exp.company}
                </p>
              </div>
              <span className="preview-date">
                {exp.current
                  ? "2026 — Now"
                  : exp.period.includes("2025")
                    ? "2025"
                    : "2024"}
                <Arrow diagonal />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
