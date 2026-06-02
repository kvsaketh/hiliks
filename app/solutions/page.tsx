import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';
import { capabilities } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Solutions',
  description:
    'Core technology capabilities — Digital Engineering, Enterprise Applications, Systems Integration, AI & Analytics, Intelligent Automation, Managed Services, Infrastructure & Monitoring, Data & Platforms.',
};

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Solutions' }]}
        eyebrow="Core Technology Capabilities"
        title="Horizontal depth across every vertical"
        lead="The engineering and enterprise-technology capabilities Hiliks brings to each industry."
      />
      <section className="band" style={{ paddingTop: 0 }}>
        <div className="wrap">
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
      <CtaBand title="Find the right solution." primaryLabel="Talk to Experts" secondaryLabel="Explore Industries" secondaryHref="/industries" />
    </>
  );
}
