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
    <header className={styles.siteHeader}>
      <div className={`${styles.container} ${styles.navInner}`}>
        <div className={styles.brandGroup}>
          <Link
            href="/"
            className={styles.wordmark}
            aria-label={`${profile.nickname} home`}
            onClick={() => setOpen(false)}
          >
            {profile.nickname.toLowerCase()}
            <span>.</span>
            <span className={styles.wordmarkSlash}>/</span>
          </Link>
          <span className={styles.betaBadge} title={site.release.description}>
            {site.release.label}
            <span className={styles.srOnly}> — {site.release.description}</span>
          </span>
        </div>
        <button
          className={styles.menuToggle}
          aria-expanded={open}
          aria-controls="main-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
          <span aria-hidden="true">{open ? "−" : "+"}</span>
        </button>
        <nav
          id="main-navigation"
          className={`${styles.navigation} ${open ? styles.isOpen : ""}`}
          aria-label="Main navigation"
        >
          {site.navigation.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${styles.navLink} ${pathname === link.href ? styles.active : ""}`}
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
            className={styles.navContact}
          >
            {site.navigation.contact} <Arrow diagonal />
            <span className={styles.srOnly}>
              {" "}
              on LinkedIn (opens in a new tab)
            </span>
          </a>
        </nav>
      </div>
    </header>
  );
}
