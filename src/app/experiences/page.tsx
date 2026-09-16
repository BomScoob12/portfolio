import type { Metadata } from "next";
import { Arrow, LinkedInIcon } from "@/components/icons";
import { experiences, profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Experiences",
  description:
    "Sarawit’s engineering journey: ttb bank, ttb spark, and web and game development events at KMUTT.",
};

export default function Experiences() {
  return (
    <div className="container">
      <header className="page-intro">
        <p className="eyebrow">EXPERIENCE / LEARNING BY DOING</p>
        <h1>
          Every chapter.
          <br />
          <span className="name-accent">A new perspective.</span>
        </h1>
        <div className="intro-bottom">
          <p>
            Building software, supporting teams, and sharing what I learn.
            <br />
            Here’s where that journey has taken me.
          </p>
          <a
            className="text-link"
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon /> View LinkedIn <Arrow diagonal />
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </header>
      <section className="timeline" aria-label="Work experience">
        {experiences.map((exp, index) => (
          <article
            className={`timeline-entry ${exp.current ? "is-current" : ""}`}
            key={exp.id}
            id={exp.id}
          >
            <div className="timeline-date">
              <span className="timeline-dot" />
              <p>{exp.period}</p>
              {exp.current && (
                <span className="current-badge">
                  <span className="status-dot" /> Current role
                </span>
              )}
              <span className="timeline-index">0{index + 1}</span>
            </div>
            <div className="timeline-content">
              <div className="experience-heading">
                <span
                  className={`company-mark large ${exp.mark === "K" ? "kmutt" : ""}`}
                >
                  {exp.mark}
                </span>
                <div>
                  <p className="company-name">{exp.company}</p>
                  <h2>{exp.role}</h2>
                  <p className="role-meta">
                    {exp.type}
                    <span>·</span>
                    {exp.location}
                  </p>
                </div>
              </div>
              <p className="experience-description">{exp.description}</p>
              {exp.highlights.length > 0 && (
                <ul className="highlights">
                  {exp.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
              {exp.tags.length > 0 && (
                <div className="tags">
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
