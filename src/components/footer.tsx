import { profile } from "@/data/portfolio";
import { Arrow, LinkedInIcon } from "./icons";
import site from "@/data/site.json";

export function Footer() {
  return (
    <footer className="container">
      <div className="contact-strip">
        <div>
          <span className="eyebrow">{site.footer.eyebrow}</span>
          <h2>
            {site.footer.title} <span>{site.footer.accent}</span>
          </h2>
        </div>
        <a
          href={profile.linkedin}
          className="button button-outline"
          target="_blank"
          rel="noreferrer"
        >
          {site.footer.contact} <Arrow diagonal />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span className="footer-note">{site.footer.credit}</span>
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
