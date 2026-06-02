import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import CtaBand from '@/components/CtaBand';
import { whyHiliks, ecosystemStats, company } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About Hiliks',
  description:
    'A niche, engineering-led enterprise technology company for critical industries, delivering across India and the GCC — with a flagship Railways practice.',
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'About' }]}
        eyebrow="About Hiliks"
        title="Engineering-led technology for critical industries"
        lead={`${company.legal} — a niche, engineering-led enterprise technology company for critical industries, delivering across India and the GCC, with a flagship Railways practice. ${company.listing}, with engineering heritage since ${company.est}.`}
      />

      <section className="band" style={{ paddingTop: 0 }}>
        <div className="wrap">
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
          <Reveal as="div" className="sec-num">Our principle</Reveal>
          <Reveal as="h2" className="sec-title">A niche partner, not a generalist</Reveal>
          <Reveal as="p" className="sec-lead">
            “Hiliks is a niche, engineering-led enterprise technology company for critical industries — with a
            particularly strong Railways practice.” Stronger and more believable than a railway company that also does IT.
            Domain focus, plus engineering-led delivery, plus enterprise depth.
          </Reveal>
          <div className="why-grid">
            {whyHiliks.map((w, i) => (
              <Reveal key={w.t} className="why" delay={i * 50}>
                <div className="ico">{w.ico}</div>
                <h5>{w.t}</h5>
                <p>{w.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title="Partner with an engineering-led team." secondaryLabel="Explore Industries" secondaryHref="/industries" />
    </>
  );
}
