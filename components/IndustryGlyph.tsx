// Animated white line-art glyph per vertical — ported verbatim from the
// original index.html (.igfx). Pure SVG + CSS, server-rendered.

type Props = { slug: string; className?: string };

export default function IndustryGlyph({ slug, className = '' }: Props) {
  const inner = (() => {
    switch (slug) {
      case 'railways':
        return (
          <>
            <line x1="12" y1="50" x2="108" y2="50" /><line x1="12" y1="74" x2="108" y2="74" />
            <line x1="24" y1="50" x2="24" y2="74" /><line x1="44" y1="50" x2="44" y2="74" /><line x1="64" y1="50" x2="64" y2="74" /><line x1="84" y1="50" x2="84" y2="74" /><line x1="104" y1="50" x2="104" y2="74" />
            <circle className="blinkg" cx="98" cy="32" r="5" />
            <circle className="rail-dot" cx="16" cy="50" r="4" fill="#fff" stroke="none" />
          </>
        );
      case 'telecom':
        return (
          <>
            <circle className="ring r1" cx="60" cy="62" r="14" /><circle className="ring r2" cx="60" cy="62" r="14" /><circle className="ring r3" cx="60" cy="62" r="14" />
            <circle cx="60" cy="62" r="5" fill="#fff" stroke="none" />
            <path d="M60 62 V30" /><path d="M52 30 h16" />
          </>
        );
      case 'bfsi':
        return (
          <>
            <path d="M60 20 L92 32 V62 C92 84 60 100 60 100 C60 100 28 84 28 62 V32 Z" />
            <path className="check" d="M44 60 l11 11 l22 -24" />
          </>
        );
      case 'public-sector':
        return (
          <>
            <path d="M30 54 L60 36 L90 54" /><line x1="26" y1="92" x2="94" y2="92" />
            <line x1="38" y1="54" x2="38" y2="86" /><line x1="52" y1="54" x2="52" y2="86" /><line x1="68" y1="54" x2="68" y2="86" /><line x1="82" y1="54" x2="82" y2="86" />
            <circle className="blinkg b1" cx="60" cy="24" r="4" /><circle className="blinkg b2" cx="40" cy="30" r="3" /><circle className="blinkg b3" cx="80" cy="30" r="3" />
          </>
        );
      case 'real-estate':
        return (
          <>
            <rect x="34" y="30" width="52" height="64" rx="2" />
            <rect className="win w1" x="42" y="40" width="11" height="11" /><rect className="win w2" x="67" y="40" width="11" height="11" />
            <rect className="win w3" x="42" y="58" width="11" height="11" /><rect className="win w4" x="67" y="58" width="11" height="11" />
            <rect className="win w5" x="42" y="76" width="11" height="11" /><rect className="win w6" x="67" y="76" width="11" height="11" />
          </>
        );
      case 'oil-gas':
        return (
          <>
            <path d="M26 80 A34 34 0 0 1 94 80" />
            <line x1="30" y1="68" x2="34" y2="70" /><line x1="60" y1="46" x2="60" y2="50" /><line x1="90" y1="68" x2="86" y2="70" />
            <line className="needle" x1="60" y1="80" x2="60" y2="50" strokeWidth="3" />
            <circle cx="60" cy="80" r="4" fill="#fff" stroke="none" />
          </>
        );
      case 'energy-utilities':
        return (
          <>
            <path className="wave" d="M14 78 Q29 56 44 78 T74 78 T104 78" />
            <path className="bolt" d="M64 26 L48 60 H60 L54 92 L78 52 H64 L72 26 Z" />
          </>
        );
      default:
        return <circle cx="60" cy="60" r="34" strokeDasharray="40 14" />;
    }
  })();

  return (
    <div className={`igfx ${className}`.trim()}>
      <svg viewBox="0 0 120 120" role="img" aria-hidden>{inner}</svg>
    </div>
  );
}
