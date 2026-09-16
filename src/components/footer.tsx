import { profile } from "@/data/portfolio";
import { Arrow, LinkedInIcon } from "./icons";

export function Footer() {
  return (
    <footer className="container">
      <div className="contact-strip">
        <div>
          <span className="eyebrow">
            GOOD SOFTWARE STARTS WITH A CONVERSATION
          </span>
          <h2>
            Let’s build something <span>meaningful.</span>
          </h2>
        </div>
        <a
          href={profile.linkedin}
          className="button button-outline"
          target="_blank"
          rel="noreferrer"
        >
          Connect on LinkedIn <Arrow diagonal />
          <span className="sr-only"> (opens in a new tab)</span>
        </a>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Sarawit Kraukham</span>
        <span className="footer-note">Made with care. Built with Next.js.</span>
        <a
          href={profile.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label="Sarawit on LinkedIn (opens in a new tab)"
        >
          <LinkedInIcon />
        </a>
      </div>
    </footer>
  );
}
