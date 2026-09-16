import Link from "next/link";
export default function NotFound() {
  return (
    <div className="container page-intro">
      <p className="eyebrow">404 / NOT FOUND</p>
      <h1>A little off course.</h1>
      <p>This page doesn’t exist. Let’s get you back to the portfolio.</p>
      <Link className="button button-primary" href="/">
        Back to home
      </Link>
    </div>
  );
}
