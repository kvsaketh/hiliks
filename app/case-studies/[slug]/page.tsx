import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import CtaBand from '@/components/CtaBand';
import { caseStudies, getCaseStudy } from '@/lib/case-studies';
import { verticals } from '@/lib/site';

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = getCaseStudy(slug);
  if (!c) return {};
  return { title: c.title, description: c.result };
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCaseStudy(slug);
  if (!c) notFound();
  const v = verticals.find((x) => x.slug === c.vertical);

  return (
    <>
      <PageHero
        accentVar={v?.accentVar}
        crumbs={[{ label: 'Case Studies', href: '/case-studies' }, { label: v?.name ?? 'Story' }]}
        eyebrow={`Case Study · ${v?.name ?? ''}`}
        title={c.title}
        lead={c.overview}
      />

      <section className="band" style={{ paddingTop: 0, ['--accent' as string]: `var(${v?.accentVar ?? '--orange'})` }}>
        <div className="wrap">
          <div className="feat-grid" style={{ gridTemplateColumns: '1fr 1fr 1fr', marginTop: 0 }}>
            <div className="feat"><span className="n mono">Challenge</span><p style={{ marginTop: 14 }}>{c.challenge}</p></div>
            <div className="feat"><span className="n mono">Solution</span><p style={{ marginTop: 14 }}>{c.solution}</p></div>
            <div className="feat"><span className="n mono">Result</span><p style={{ marginTop: 14, color: 'var(--accent)' }}>{c.result}</p></div>
          </div>

          <Reveal as="div" className="sec-num" style={{ marginTop: 64 }}>How we did it</Reveal>
          <Reveal as="h2" className="sec-title">The engineered approach</Reveal>
          <div className="rail-caps" style={{ borderLeft: 'none', marginTop: 30, border: '1px solid var(--line)', borderRadius: 'var(--r-lg)', overflow: 'hidden' }}>
            {c.approach.map((a, i) => (
              <div key={i} className="rail-cap" style={{ alignItems: 'flex-start' }}>
                <span className="n mono">{String(i + 1).padStart(2, '0')}</span>
                <span className="t" style={{ fontWeight: 400, color: 'var(--muted)' }}>{a}</span>
              </div>
            ))}
          </div>

          <div className="stats">
            {c.outcomes.map((o, i) => (
              <Reveal key={i} className="stat" delay={i * 50}>
                <div className="v">{o.v}</div>
                <div className="k">{o.k}</div>
              </Reveal>
            ))}
          </div>

          <div style={{ marginTop: 36 }}>
            <Link href={`/industries/${c.vertical}`} className="flag-cta" data-c>
              Explore {v?.unit ?? 'this practice'} →
            </Link>
          </div>
        </div>
      </section>

      <CtaBand title="Want a similar outcome?" primaryLabel="Request a Briefing" secondaryLabel="More Case Studies" secondaryHref="/case-studies" />
    </>
  );
}
