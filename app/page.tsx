import Link from 'next/link';
import Marquee from '@/components/Marquee';
import HomeMotion from '@/components/HomeMotion';
import IndustryGlyph from '@/components/IndustryGlyph';
import { verticals, partners } from '@/lib/site';

const industryCards = [
  { slug: 'railways', idx: 'FLAGSHIP', flag: true, ac: 'rgba(242,104,14,.5)', name: 'Railways', desc: 'Signaling, telecom, smart rail, OCC, AI-led ops, predictive maintenance.' },
  { slug: 'telecom', idx: '02', ac: '#2E8FE0', name: 'Telecom', desc: 'OSS/BSS, network operations, automation, managed services, analytics.' },
  { slug: 'bfsi', idx: '03', ac: '#16A085', name: 'BFSI', desc: 'Automation, ECM, onboarding, workflow, compliance and AI.' },
  { slug: 'public-sector', idx: '04', ac: '#5B6CE0', name: 'Public Sector', desc: 'eGovernance, citizen services, smart governance, digitization.' },
  { slug: 'real-estate', idx: '05', ac: '#B98A3E', name: 'Real Estate', desc: 'Smart buildings, ECM, ERP, tenant systems, operations.' },
  { slug: 'oil-gas', idx: '06', ac: '#7E93A6', name: 'Oil & Gas', desc: 'Industrial systems, compliance, operations intelligence, engineering.' },
  { slug: 'energy-utilities', idx: '07', ac: '#4FA63B', name: 'Energy & Utilities', desc: 'Asset monitoring, predictive maintenance, field systems, automation.' },
];

const caps = [
  { slug: 'digital-engineering', n: '01', name: 'Digital Engineering', blurb: 'Embedded, product and platform engineering for critical systems.', icon: <><rect x="6" y="6" width="12" height="12" rx="1" /><path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3" /></> },
  { slug: 'enterprise-applications', n: '02', name: 'Enterprise Applications', blurb: 'ERP, ECM and core enterprise platforms.', icon: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 9h18M9 9v11" /></> },
  { slug: 'systems-integration', n: '03', name: 'Systems Integration', blurb: 'Connecting OT/IT, legacy and enterprise systems.', icon: <><circle cx="5" cy="6" r="2" /><circle cx="19" cy="6" r="2" /><circle cx="12" cy="18" r="2" /><path d="M6.5 7.6 10.6 16M17.5 7.6 13.4 16M7 6h10" /></> },
  { slug: 'ai-analytics', n: '04', name: 'AI & Analytics', blurb: 'Predictive insight, analytics and decision intelligence.', icon: <><path d="M4 19V5M4 19h16" /><path d="M8 15l3-4 3 2 4-6" /></> },
  { slug: 'intelligent-automation', n: '05', name: 'Intelligent Automation', blurb: 'RPA and workflow automation at scale.', icon: <><circle cx="12" cy="12" r="3.2" /><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6 7.7 7.7M16.3 16.3 18.4 18.4M18.4 5.6 16.3 7.7M7.7 16.3 5.6 18.4" /></> },
  { slug: 'managed-services', n: '06', name: 'Managed Services', blurb: 'L1/L2/L3 operations and 24×7 support.', icon: <><path d="M4 13v-1a8 8 0 0 1 16 0v1" /><rect x="3" y="13" width="4" height="6" rx="1.5" /><rect x="17" y="13" width="4" height="6" rx="1.5" /><path d="M20 19a4 3 0 0 1-4 3h-2" /></> },
  { slug: 'infrastructure-monitoring', n: '07', name: 'Infrastructure & Monitoring', blurb: 'Cloud, network and operations monitoring.', icon: <><rect x="3" y="4" width="18" height="6" rx="1" /><rect x="3" y="14" width="18" height="6" rx="1" /><path d="M7 7h.01M7 17h.01" /></> },
  { slug: 'data-platforms', n: '08', name: 'Data & Platforms', blurb: 'Data engineering, platforms and governance.', icon: <><ellipse cx="12" cy="6" rx="7" ry="3" /><path d="M5 6v12c0 1.7 3.1 3 7 3s7-1.3 7-3V6M5 12c0 1.7 3.1 3 7 3s7-1.3 7-3" /></> },
];

const whys = [
  { t: 'Domain-Focused Expertise', d: "Verticalized practices that speak each industry's language.", icon: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3.4" /><path d="M12 1v3M12 20v3M1 12h3M20 12h3" /></> },
  { t: 'Engineering-Led Delivery', d: 'Real engineering depth — not just IT services.', icon: <><circle cx="12" cy="12" r="3.2" /><path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6 7.7 7.7M16.3 16.3 18.4 18.4M18.4 5.6 16.3 7.7M7.7 16.3 5.6 18.4" /></> },
  { t: 'Enterprise Technology Depth', d: 'Full-stack: apps, integration, AI, automation, data and cloud.', icon: <path d="M12 3 3 8l9 5 9-5-9-5zM4 12l8 4.5L20 12M4 16l8 4.5L20 16" /> },
  { t: 'Strategic Ecosystem', d: 'Best-of-breed partners extend our reach and depth.', icon: <><circle cx="6" cy="12" r="2.4" /><circle cx="18" cy="6" r="2.4" /><circle cx="18" cy="18" r="2.4" /><path d="M8.1 11 15.9 7M8.1 13l7.8 4" /></> },
  { t: 'GCC Expansion Readiness', d: 'Enterprise tone and delivery for the UAE, KSA and India.', icon: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18" /></> },
  { t: 'Niche by Design', d: 'Engineering-led DNA, with a flagship Railways practice.', icon: <><path d="M6 4h12l3 5-9 11L3 9z" /><path d="M3 9h18M9 4 7 9l5 11M15 4l2 5-5 11" /></> },
];

const railways = verticals.find((v) => v.flagship)!;

export default function Home() {
  return (
    <>
      {/* SIDE HUD */}
      <div className="hud">
        <a href="#railways" data-c><span className="nm">Railways</span><span className="d" /></a>
        <a href="#industries" data-c><span className="nm">Industries</span><span className="d" /></a>
        <a href="#capabilities" data-c><span className="nm">Solutions</span><span className="d" /></a>
        <a href="#why" data-c><span className="nm">Why Hiliks</span><span className="d" /></a>
        <a href="#ecosystem" data-c><span className="nm">Ecosystem</span><span className="d" /></a>
        <a href="#contact" data-c><span className="nm">Contact</span><span className="d" /></a>
      </div>

      {/* HERO */}
      <section className="hero">
        <canvas id="scene" />
        <div className="hero-vig" />
        <div className="wrap"><div className="hero-inner">
          <div className="kicker mono">Industry-Focused Digital Engineering &amp; Enterprise Technology</div>
          <h1 className="hero-h">Engineering <em>Intelligent Operations</em> Across Critical Industries</h1>
          <p className="hero-sub">Niche technology, systems integration, engineering services and digital transformation — for railways, telecom, BFSI, public sector, real estate, oil &amp; gas and energy &amp; utilities, across India and the GCC.</p>
          <div className="cta-row">
            <a href="#industries" className="btn btn-primary" data-mag data-c>Explore Industries →</a>
            <a href="#capabilities" className="btn btn-ghost" data-mag data-c>Our Capabilities</a>
          </div>
        </div></div>
        <div className="scroll-cue mono">Scroll<span /></div>
      </section>

      <Marquee />

      {/* FLAGSHIP */}
      <section className="band" id="railways">
        <div className="wrap">
          <div className="sec-num reveal">Flagship Business Unit</div>
          <h2 className="sec-title reveal">Our deepest practice proves the engineering-led approach.</h2>
          <div className="flagship reveal" id="flagCard">
            <div className="glow" />
            <div className="flagship-inner">
              <div className="flagship-left">
                <span className="flag-tag mono"><i />Hiliks Railways</span>
                <h3>Hiliks Railways</h3>
                <p className="tag mono">Rail Technology, Engineering, Signaling &amp; Digital Transformation</p>
                <p className="body">From the track to the operations centre — signaling and safety, railway telecom, smart rail, OCC integration and AI-led operations for Indian Railways, Etihad Rail and GCC operators.</p>
                <Link href="/industries/railways" className="flag-cta" data-c>Explore Railways →</Link>
              </div>
              <div className="rail-caps">
                {railways.capabilities.map((c) => (
                  <Link key={c.n} href="/industries/railways" className="rail-cap" data-c>
                    <span className="n mono">{c.n}</span><span className="t">{c.t}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES — horizontal */}
      <section className="h-section light" id="industries">
        <div className="wrap h-head">
          <div className="sec-num reveal">01 — Industries We Serve</div>
          <h2 className="sec-title reveal">Verticalized practices for critical industries</h2>
          <p className="sec-lead reveal">Domain-focused business units — each fluent in its industry, all engineering-led. <span className="h-hint">→ scroll to traverse</span></p>
        </div>
        <div className="h-track" id="htrack">
          {industryCards.map((c) => (
            <Link key={c.slug} href={`/industries/${c.slug}`} className={`icard ${c.flag ? 'flag' : ''}`} data-c style={{ ['--ac' as string]: c.ac }}>
              <span className="idx mono">{c.idx}</span>
              <IndustryGlyph slug={c.slug} />
              <div className="lbl mono">{c.name}</div>
              <h4>{c.name}</h4>
              <p>{c.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="band" id="capabilities">
        <div className="wrap">
          <div className="sec-num reveal">02 — Core Technology Capabilities</div>
          <h2 className="sec-title reveal">Horizontal depth across every vertical</h2>
          <p className="sec-lead reveal">The engineering and enterprise-technology capabilities we bring to each industry.</p>
          <div className="cap-grid">
            {caps.map((c) => (
              <Link key={c.slug} href={`/solutions/${c.slug}`} className="cap reveal" data-c>
                <span className="n mono">{c.n}</span>
                <span className="cico"><svg viewBox="0 0 24 24">{c.icon}</svg></span>
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
          <div className="sec-num reveal">03 — Why Hiliks</div>
          <h2 className="sec-title reveal">A niche, engineering-led enterprise technology company</h2>
          <div className="why-grid">
            {whys.map((w) => (
              <div key={w.t} className="why tilt reveal">
                <div className="ico"><svg viewBox="0 0 24 24">{w.icon}</svg></div>
                <h5>{w.t}</h5>
                <p>{w.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ECOSYSTEM */}
      <section className="band" id="ecosystem">
        <div className="wrap">
          <div className="sec-num reveal">04 — Strategic Ecosystem</div>
          <h2 className="sec-title reveal">Depth extended through partnership</h2>
          <p className="sec-lead reveal">In collaboration with strategic ecosystem partners — including <b style={{ color: 'var(--text)' }}>Aptiva Technologies</b> — Hiliks extends enterprise digital-transformation depth with GCC-grade rigor.</p>
          <div className="stats">
            <div className="stat reveal"><div className="v" data-count="20" data-suffix="+ yrs">0</div><div className="k">Ecosystem experience</div></div>
            <div className="stat reveal"><div className="v" data-count="15" data-suffix="">0</div><div className="k">Countries served</div></div>
            <div className="stat reveal"><div className="v" data-count="11" data-suffix="+">0</div><div className="k">Technology partners</div></div>
            <div className="stat reveal"><div className="v" style={{ fontSize: '1.9rem' }}>GCC + India</div><div className="k">Delivery footprint</div></div>
          </div>
          <div className="partners">
            {partners.map((p) => (
              <Link key={p} href="/ecosystem" className="p reveal" data-c>{p}</Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="band light" id="contact" style={{ paddingBottom: 40 }}>
        <div className="wrap">
          <div className="cta-band reveal">
            <div className="glow" />
            <h3>Engineering-led technology for your industry — with a particularly strong Railways practice.</h3>
            <p>Request a briefing or route your inquiry by vertical: Railways, Telecom, BFSI, Public Sector, Real Estate, Oil &amp; Gas, Energy &amp; Utilities, or Partnerships.</p>
            <div className="cta-row">
              <Link href="/contact" className="btn btn-primary" data-mag data-c>Request a Briefing →</Link>
              <Link href="/contact" className="btn btn-ghost" data-mag data-c>Send Inquiry</Link>
            </div>
          </div>
        </div>
      </section>

      <HomeMotion />
    </>
  );
}
