import type { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import CtaBand from '@/components/CtaBand';
import { insights } from '@/lib/insights';

export const metadata: Metadata = {
  title: 'Insights',
  description: 'Points of view and whitepapers on industry modernization, predictive operations and enterprise transformation.',
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Insights' }]}
        eyebrow="Insights"
        title="Engineering-led points of view"
        lead="Perspectives and whitepapers on industry modernization, predictive operations and enterprise transformation — positioning Hiliks as an engineering-led innovator."
      />
      <section className="band" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="card-grid">
            {insights.map((p, i) => (
              <Reveal key={p.slug} delay={i * 40}>
                <Link href={`/insights/${p.slug}`} className="icard" data-c style={{ minHeight: 280 }}>
                  <span className="lbl">{p.kind} · {p.tag}</span>
                  <h4>{p.title}</h4>
                  <p>{p.dek}</p>
                  <span className="arrow mono">Read →</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <CtaBand title="Talk through what these mean for you." primaryLabel="Request a Briefing" secondaryLabel="About Hiliks" secondaryHref="/about" />
    </>
  );
}
