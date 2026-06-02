import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import CtaBand from '@/components/CtaBand';
import { partners, ecosystemStats } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Strategic Ecosystem',
  description:
    'Hiliks extends enterprise digital-transformation depth through strategic ecosystem partners — including Aptiva Technologies — across analytics, integration, automation, ECM and managed services.',
};

export default function EcosystemPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Strategic Ecosystem' }]}
        eyebrow="Strategic Ecosystem"
        title="Depth extended through partnership"
        lead="In collaboration with strategic ecosystem partners, Hiliks extends enterprise digital-transformation depth across analytics, integration, automation, ECM and managed services — with GCC-grade enterprise rigor, without diluting the Hiliks brand."
      />

      <section className="band" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal className="flagship">
            <div className="glow" aria-hidden />
            <div className="flagship-inner" style={{ gridTemplateColumns: '1fr' }}>
              <div className="flagship-left">
                <span className="flag-tag mono"><i />Key Strategic Partner</span>
                <h3>Aptiva Technologies</h3>
                <p className="body">
                  A key strategic partner bringing enterprise digital-transformation services and GCC enterprise reach —
                  extending Hiliks’s engineering-led delivery with best-of-breed enterprise capability.
                </p>
              </div>
            </div>
          </Reveal>

          <div className="stats">
            {ecosystemStats.map((s, i) => (
              <Reveal key={s.k} className="stat" delay={i * 50}>
                <div className="v">{s.v}</div>
                <div className="k">{s.k}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="band light">
        <div className="wrap">
          <Reveal as="div" className="sec-num">Technology partners</Reveal>
          <Reveal as="h2" className="sec-title">Best-of-breed platforms, engineering-led integration</Reveal>
          <div className="partners">
            {partners.map((p) => (
              <span key={p} className="p">{p}</span>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Build with our ecosystem." primaryLabel="Discuss a Partnership" secondaryLabel="About Hiliks" secondaryHref="/about" />
    </>
  );
}
