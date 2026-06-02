import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import CtaBand from '@/components/CtaBand';
import IndustryCard from '@/components/IndustryCard';
import { capabilities, verticals } from '@/lib/site';

// Detail bullets per capability — extends the homepage summary into a real page.
const detail: Record<string, { points: string[] }> = {
  'digital-engineering': { points: ['Embedded & firmware engineering', 'Product & platform engineering', 'Safety-critical systems', 'Hardware-software co-design'] },
  'enterprise-applications': { points: ['ERP implementation & rollout', 'ECM & document management', 'Workflow & process platforms', 'Industry-specific configuration'] },
  'systems-integration': { points: ['OT/IT convergence', 'Legacy system modernization', 'API & middleware fabric', 'Real-time data exchange'] },
  'ai-analytics': { points: ['Predictive & prescriptive analytics', 'Computer vision & sensor fusion', 'Decision-intelligence dashboards', 'Operational AI at the edge'] },
  'intelligent-automation': { points: ['RPA at scale', 'Workflow & process automation', 'Document & data automation', 'Human-in-the-loop orchestration'] },
  'managed-services': { points: ['L1/L2/L3 operations', '24×7 NOC & support', 'SLA-driven delivery', 'Continuous improvement'] },
  'infrastructure-monitoring': { points: ['Cloud & hybrid infrastructure', 'Network operations', 'Observability & monitoring', 'Resilience & DR'] },
  'data-platforms': { points: ['Data engineering & pipelines', 'Lakehouse & warehouse platforms', 'Data governance & quality', 'Self-service analytics'] },
};

export function generateStaticParams() {
  return capabilities.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = capabilities.find((x) => x.slug === slug);
  if (!c) return {};
  return { title: c.name, description: c.blurb };
}

export default async function SolutionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = capabilities.find((x) => x.slug === slug);
  if (!c) notFound();
  const points = detail[c.slug]?.points ?? [];

  return (
    <>
      <PageHero
        crumbs={[{ label: 'Solutions', href: '/solutions' }, { label: c.name }]}
        eyebrow={`Capability ${c.n}`}
        title={c.name}
        lead={c.blurb}
      />

      <section className="band" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal as="div" className="sec-num">What it includes</Reveal>
          <Reveal as="h2" className="sec-title">{c.name}, engineered into operations</Reveal>
          <div className="feat-grid">
            {points.map((p, i) => (
              <Reveal key={p} className="feat" delay={i * 40}>
                <span className="n mono">{String(i + 1).padStart(2, '0')}</span>
                <h4>{p}</h4>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="band light">
        <div className="wrap">
          <Reveal as="div" className="sec-num">Applied across</Reveal>
          <Reveal as="h2" className="sec-title">Where we deploy {c.name}</Reveal>
          <div className="card-grid">
            {verticals.map((v, i) => (
              <IndustryCard key={v.slug} v={v} index={i} showBlurb={false} minHeight={210} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand title={`Bring ${c.name} to your operations.`} primaryLabel="Talk to Experts" secondaryLabel="All Capabilities" secondaryHref="/solutions" />
    </>
  );
}
