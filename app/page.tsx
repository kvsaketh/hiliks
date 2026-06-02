import Link from 'next/link';
import Hero3D from '@/components/Hero3D';
import Reveal from '@/components/Reveal';
import Marquee from '@/components/Marquee';
import CtaBand from '@/components/CtaBand';
import IndustryCard from '@/components/IndustryCard';
import { verticals, capabilities, whyHiliks, partners, ecosystemStats } from '@/lib/site';

export default function Home() {
  const railways = verticals.find((v) => v.flagship)!;

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <Hero3D />
        <div className="hero-vig" aria-hidden />
        <div className="wrap">
          <div className="hero-inner">
            <div className="kicker mono">Industry-Focused Digital Engineering &amp; Enterprise Technology</div>
            <h1 className="hero-h">Engineering <em>Intelligent Operations</em> Across Critical Industries</h1>
            <p className="hero-sub">
              Niche technology, systems integration, engineering services and digital transformation —
              for railways, telecom, BFSI, public sector, real estate, oil &amp; gas and energy &amp; utilities,
              across India and the GCC.
            </p>
            <div className="cta-row">
              <Link href="/industries" className="btn btn-primary" data-c>Explore Industries →</Link>
              <Link href="/solutions" className="btn btn-ghost" data-c>Our Capabilities</Link>
            </div>
          </div>
        </div>
        <div className="scroll-cue mono">Scroll<span /></div>
      </section>

      <Marquee />

      {/* FLAGSHIP */}
      <section className="band" id="railways">
        <div className="wrap">
          <Reveal as="div" className="sec-num">Flagship Business Unit</Reveal>
          <Reveal as="h2" className="sec-title">Our deepest practice proves the engineering-led approach.</Reveal>
          <Reveal className="flagship">
            <div className="glow" aria-hidden />
            <div className="flagship-inner">
              <div className="flagship-left">
                <span className="flag-tag mono"><i />{railways.unit}</span>
                <h3>{railways.unit}</h3>
                <p className="tag mono">{railways.tagline}</p>
                <p className="body">{railways.blurb}</p>
                <Link href="/industries/railways" className="flag-cta" data-c>Explore Railways →</Link>
              </div>
              <div className="rail-caps">
                {railways.capabilities.map((c) => (
                  <Link key={c.n} href="/industries/railways" className="rail-cap" data-c>
                    <span className="n mono">{c.n}</span>
                    <span className="t">{c.t}</span>
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="band light" id="industries">
        <div className="wrap">
          <Reveal as="div" className="sec-num">01 — Industries We Serve</Reveal>
          <Reveal as="h2" className="sec-title">Verticalized practices for critical industries</Reveal>
          <Reveal as="p" className="sec-lead">
            Domain-focused business units — each fluent in its industry, all engineering-led.
          </Reveal>
          <div className="card-grid">
            {verticals.map((v, i) => (
              <Reveal key={v.slug} delay={i * 40}>
                <IndustryCard v={v} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="band" id="capabilities">
        <div className="wrap">
          <Reveal as="div" className="sec-num">02 — Core Technology Capabilities</Reveal>
          <Reveal as="h2" className="sec-title">Horizontal depth across every vertical</Reveal>
          <Reveal as="p" className="sec-lead">
            The engineering and enterprise-technology capabilities we bring to each industry.
          </Reveal>
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

      {/* WHY */}
      <section className="band light" id="why">
        <div className="wrap">
          <Reveal as="div" className="sec-num">03 — Why Hiliks</Reveal>
          <Reveal as="h2" className="sec-title">A niche, engineering-led enterprise technology company</Reveal>
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

      {/* ECOSYSTEM */}
      <section className="band" id="ecosystem">
        <div className="wrap">
          <Reveal as="div" className="sec-num">04 — Strategic Ecosystem</Reveal>
          <Reveal as="h2" className="sec-title">Depth extended through partnership</Reveal>
          <Reveal as="p" className="sec-lead">
            In collaboration with strategic ecosystem partners — including <b style={{ color: 'var(--text)' }}>Aptiva Technologies</b> —
            Hiliks extends enterprise digital-transformation depth across analytics, integration, automation, ECM and managed
            services, with GCC-grade enterprise rigor.
          </Reveal>
          <div className="stats">
            {ecosystemStats.map((s, i) => (
              <Reveal key={s.k} className="stat" delay={i * 50}>
                <div className="v">{s.v}</div>
                <div className="k">{s.k}</div>
              </Reveal>
            ))}
          </div>
          <div className="partners">
            {partners.map((p) => (
              <span key={p} className="p">{p}</span>
            ))}
          </div>
          <div style={{ marginTop: 30 }}>
            <Link href="/ecosystem" className="flag-cta" data-c>Explore the ecosystem →</Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
