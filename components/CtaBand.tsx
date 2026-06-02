import Link from 'next/link';
import Reveal from './Reveal';

type Props = {
  title?: string;
  text?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export default function CtaBand({
  title = 'Engineering-led technology for your industry.',
  text = 'A niche, engineering-led enterprise technology partner for critical industries — with a particularly strong Railways practice. Let’s talk.',
  primaryLabel = 'Request a Briefing',
  primaryHref = '/contact',
  secondaryLabel = 'Explore Capabilities',
  secondaryHref = '/solutions',
}: Props) {
  return (
    <section className="band">
      <div className="wrap">
        <Reveal className="cta-band">
          <div className="glow" aria-hidden />
          <h3>{title}</h3>
          <p>{text}</p>
          <div className="cta-row" style={{ marginTop: 30 }}>
            <Link href={primaryHref} className="btn btn-primary" data-c>{primaryLabel} →</Link>
            <Link href={secondaryHref} className="btn btn-ghost" data-c>{secondaryLabel}</Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
