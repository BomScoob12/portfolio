import styles from "@/styles/shared.module.css";
import Link from "next/link";
export default function NotFound() {
  return (
    <div className={`${styles.container} ${styles.pageIntro}`}>
      <p className={styles.eyebrow}>404 / NOT FOUND</p>
      <h1>A little off course.</h1>
      <p>This page doesn’t exist. Let’s get you back to the portfolio.</p>
      <Link className={`${styles.button} ${styles.buttonPrimary}`} href="/">
        Back to home
      </Link>
    </div>
  );
}
