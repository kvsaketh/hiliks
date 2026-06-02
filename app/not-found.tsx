import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="page-hero" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
      <div className="wrap">
        <div className="sec-num">404</div>
        <h1 style={{ fontSize: 'clamp(2rem,5vw,3.4rem)', fontWeight: 700, letterSpacing: 'var(--ls-tight)', marginTop: 12 }}>
          This page is off the track.
        </h1>
        <p className="plead">The page you’re looking for doesn’t exist or has moved.</p>
        <div className="cta-row" style={{ marginTop: 30 }}>
          <Link href="/" className="btn btn-primary" data-c>Back to Home →</Link>
          <Link href="/industries" className="btn btn-ghost" data-c>Explore Industries</Link>
        </div>
      </div>
    </section>
  );
}
