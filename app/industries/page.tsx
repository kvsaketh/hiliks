import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import CtaBand from '@/components/CtaBand';
import IndustryCard from '@/components/IndustryCard';
import { verticals } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Industries',
  description:
    'Verticalized, engineering-led practices for critical industries — Railways (flagship), Telecom, BFSI, Public Sector, Real Estate, Oil & Gas and Energy & Utilities.',
};

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Industries' }]}
        eyebrow="Industries We Serve"
        title="Verticalized practices for critical industries"
        lead="Domain-focused business units — each fluent in its industry, all engineering-led. Verticals are not equal: Railways leads as our flagship."
      />
      <section className="band" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="card-grid">
            {verticals.map((v, i) => (
              <Reveal key={v.slug} delay={i * 40}>
                <IndustryCard v={v} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand title="Find the practice that speaks your industry." secondaryLabel="View Capabilities" />
    </>
  );
}
