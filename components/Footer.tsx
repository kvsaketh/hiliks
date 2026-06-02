import Link from 'next/link';
import { company, verticals, capabilities } from '@/lib/site';

export default function Footer() {
  return (
    <footer>
      <div className="wrap foot">
        <div className="meta">
          <Link href="/" className="brand" data-c style={{ marginBottom: 16 }}>
            <span className="hx" aria-hidden />
            <span><b>Hiliks</b> <small>Technologies</small></span>
          </Link>
          <div style={{ marginTop: 16 }}>
            <b>{company.corporateLine}</b><br />
            Engineering-led enterprise technology for critical industries — India &amp; the GCC.
          </div>
          <div style={{ marginTop: 14 }}>
            <a href={`tel:${company.phone}`}>{company.phone}</a> · <a href={`mailto:${company.email}`}>{company.email}</a>
          </div>
        </div>

        <div className="foot-cols">
          <div className="foot-col">
            <h6>Industries</h6>
            {verticals.map((v) => (
              <Link key={v.slug} href={`/industries/${v.slug}`}>{v.name}{v.flagship ? ' ★' : ''}</Link>
            ))}
          </div>
          <div className="foot-col">
            <h6>Solutions</h6>
            {capabilities.slice(0, 6).map((c) => (
              <Link key={c.slug} href={`/solutions/${c.slug}`}>{c.name}</Link>
            ))}
          </div>
          <div className="foot-col">
            <h6>Company</h6>
            <Link href="/about">About Hiliks</Link>
            <Link href="/case-studies">Case Studies</Link>
            <Link href="/ecosystem">Strategic Ecosystem</Link>
            <Link href="/insights">Insights</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
      <div className="wrap copy">
        <span>© {company.est}–2026 {company.legal}. {company.listing}. All rights reserved.</span>
        <span>Engineering + Intelligence · India + GCC</span>
      </div>
    </footer>
  );
}
