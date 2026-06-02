import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import CtaBand from '@/components/CtaBand';
import { company } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Careers',
  description: 'Join engineering-led teams across India and the GCC.',
};

const tracks = [
  { n: '01', t: 'Rail Systems Engineering', d: 'Signaling, telecom, OCC and smart-rail systems.' },
  { n: '02', t: 'Enterprise & Platforms', d: 'ERP, ECM, integration and data platforms.' },
  { n: '03', t: 'AI & Automation', d: 'Analytics, computer vision and intelligent automation.' },
  { n: '04', t: 'Managed Operations', d: 'L1/L2/L3 operations and 24×7 support.' },
];

export default function CareersPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Careers' }]}
        eyebrow="Careers"
        title="Engineering-led teams across India and the GCC"
        lead="We build technology for critical industries — work that demands real engineering depth and domain fluency."
      />
      <section className="band" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="feat-grid">
            {tracks.map((t, i) => (
              <Reveal key={t.n} className="feat" delay={i * 40}>
                <span className="n mono">{t.n}</span>
                <h4>{t.t}</h4>
                <p>{t.d}</p>
              </Reveal>
            ))}
          </div>
          <p className="sec-lead" style={{ marginTop: 36 }}>
            Interested? Send your profile to <a href={`mailto:${company.email}`} style={{ color: 'var(--orange)' }}>{company.email}</a>.
          </p>
        </div>
      </section>
      <CtaBand title="Build critical-industry technology with us." primaryLabel="Get in Touch" secondaryLabel="About Hiliks" secondaryHref="/about" />
    </>
  );
}
