import Link from 'next/link';
import IndustryGlyph from './IndustryGlyph';

type Crumb = { label: string; href?: string };

export default function PageHero({
  crumbs,
  eyebrow,
  title,
  tag,
  lead,
  accentVar,
  glyphSlug,
}: {
  crumbs: Crumb[];
  eyebrow?: string;
  title: string;
  tag?: string;
  lead?: string;
  accentVar?: string;
  glyphSlug?: string;
}) {
  return (
    <section className="page-hero" style={accentVar ? ({ ['--accent' as string]: `var(${accentVar})` }) : undefined}>
      {glyphSlug && <IndustryGlyph slug={glyphSlug} className="glyph-hero" />}
      <div className="wrap">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          {crumbs.map((c) => (
            <span key={c.label} style={{ display: 'contents' }}>
              <span className="sep">/</span>
              {c.href ? <Link href={c.href}>{c.label}</Link> : <span style={{ color: 'var(--muted)' }}>{c.label}</span>}
            </span>
          ))}
        </nav>
        {eyebrow && <div className="sec-num">{eyebrow}</div>}
        <h1>{title}</h1>
        {tag && <p className="ptag mono">{tag}</p>}
        {lead && <p className="plead">{lead}</p>}
      </div>
    </section>
  );
}
