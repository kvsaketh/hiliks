import { marqueeItems } from '@/lib/site';

export default function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];
  return (
    <div className="marquee" aria-hidden>
      <div className="mq-track">
        {items.map((it, i) => (
          <span key={i}>{it}</span>
        ))}
      </div>
    </div>
  );
}
