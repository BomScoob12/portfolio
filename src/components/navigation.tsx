"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Arrow } from "./icons";
import profile from "@/data/profile.json";
import site from "@/data/site.json";

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="container nav-inner">
        <div className="brand-group">
          <Link
            href="/"
            className="wordmark"
            aria-label={`${profile.nickname} home`}
            onClick={() => setOpen(false)}
          >
            {profile.nickname.toLowerCase()}
            <span>.</span>
            <span className="wordmark-slash">/</span>
          </Link>
          <span className="beta-badge" title={site.release.description}>
            {site.release.label}
            <span className="sr-only"> — {site.release.description}</span>
          </span>
        </div>
        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
          <span aria-hidden="true">{open ? "−" : "+"}</span>
        </button>
        <nav
          id="main-navigation"
          className={open ? "navigation is-open" : "navigation"}
          aria-label="Main navigation"
        >
          {site.navigation.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={
                pathname === link.href ? "nav-link active" : "nav-link"
              }
              aria-current={pathname === link.href ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="nav-contact"
          >
            {site.navigation.contact} <Arrow diagonal />
            <span className="sr-only"> on LinkedIn (opens in a new tab)</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
