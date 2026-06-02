import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import CtaBand from '@/components/CtaBand';
import { verticals, capabilities } from '@/lib/site';

export function generateStaticParams() {
  return verticals.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const v = verticals.find((x) => x.slug === slug);
  if (!v) return {};
  return { title: `${v.unit} — ${v.name}`, description: v.blurb };
}

export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const v = verticals.find((x) => x.slug === slug);
  if (!v) notFound();

  return (
    <>
      <PageHero
        accentVar={v.accentVar}
        glyphSlug={v.slug}
        crumbs={[{ label: 'Industries', href: '/industries' }, { label: v.name }]}
        eyebrow={v.flagship ? 'Flagship Business Unit' : 'Industry Business Unit'}
        title={v.unit}
        tag={v.tagline}
        lead={v.blurb}
      />

      <section className="band" style={{ paddingTop: 0, ['--accent' as string]: `var(${v.accentVar})` }}>
        <div className="wrap">
          <Reveal as="div" className="sec-num">What we deliver</Reveal>
          <Reveal as="h2" className="sec-title">
            {v.flagship ? 'From the track to the operations centre.' : `Engineering-led delivery for ${v.name}.`}
          </Reveal>

          {v.flagship ? (
            <div className="rail-caps" style={{ borderLeft: 'none', marginTop: 30, border: '1px solid var(--line)', borderRadius: 'var(--r-lg)', overflow: 'hidden' }}>
              {v.capabilities.map((c) => (
                <div key={c.n} className="rail-cap" style={{ alignItems: 'flex-start' }}>
                  <span className="n mono">{c.n}</span>
                  <span>
                    <span className="t" style={{ display: 'block', marginBottom: 4 }}>{c.t}</span>
                    {c.d && <span style={{ color: 'var(--muted)', fontSize: 13.5, fontWeight: 300 }}>{c.d}</span>}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="feat-grid">
              {v.capabilities.map((c) => (
                <Reveal key={c.n} className="feat">
                  <span className="n mono">{c.n}</span>
                  <h4>{c.t}</h4>
                  {c.d && <p>{c.d}</p>}
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* horizontal capabilities applied to this vertical */}
      <section className="band light">
        <div className="wrap">
          <Reveal as="div" className="sec-num">Capabilities applied</Reveal>
          <Reveal as="h2" className="sec-title">Horizontal depth, tuned for {v.name}</Reveal>
          <div className="cap-grid">
            {capabilities.map((c) => (
              <Link key={c.slug} href={`/solutions/${c.slug}`} className="cap" data-c>
                <span className="n mono">{c.n}</span>
                <h5>{c.name}</h5>
                <p>{c.blurb}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={v.flagship ? 'Talk to our Rail team.' : `Modernize your ${v.name} operations.`}
        text={`Engineering-led delivery for ${v.name}, across India and the GCC. Tell us where you want to go.`}
        primaryLabel="Talk to Experts"
        secondaryLabel="See Case Studies"
        secondaryHref="/case-studies"
      />
    </>
  );
}
