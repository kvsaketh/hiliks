import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';
import { insights, getInsight } from '@/lib/insights';

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getInsight(slug);
  if (!p) return {};
  return { title: p.title, description: p.dek };
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const p = getInsight(slug);
  if (!p) notFound();

  return (
    <>
      <PageHero
        crumbs={[{ label: 'Insights', href: '/insights' }, { label: p.tag }]}
        eyebrow={`${p.kind} · ${p.tag}`}
        title={p.title}
        lead={p.dek}
      />
      <section className="band" style={{ paddingTop: 0 }}>
        <article className="wrap" style={{ maxWidth: 760 }}>
          {p.body.map((para, i) => (
            <p
              key={i}
              style={{
                color: 'var(--muted)',
                fontWeight: 300,
                fontSize: '1.08rem',
                lineHeight: 1.8,
                marginBottom: 24,
              }}
            >
              {para}
            </p>
          ))}
        </article>
      </section>
      <CtaBand
        title="Discuss this with our team."
        text="Turn a point of view into an engineered outcome for your operations."
        primaryLabel="Request a Briefing"
        secondaryLabel="More Insights"
        secondaryHref="/insights"
      />
    </>
  );
}
