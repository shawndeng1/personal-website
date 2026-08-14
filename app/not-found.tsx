import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-shell">
      <section className="not-found-window" aria-labelledby="not-found-title">
        <header><span /><span /><span /><p>system/error.log</p></header>
        <div>
          <p className="path-label">~/portfolio/404</p>
          <p className="not-found-code">404</p>
          <h1 id="not-found-title">Window not found.</h1>
          <p>The page you requested is not installed in this workspace.</p>
          <Link className="button-primary" href="/">Return to desktop</Link>
        </div>
      </section>
    </main>
  );
}
