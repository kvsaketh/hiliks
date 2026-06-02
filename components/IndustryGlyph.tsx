// Animated line-art glyph per vertical. Pure SVG + CSS (server component).
// Placement/size comes from the parent class (.icard .iglyph or .glyph-hero).

type Props = { slug: string; className?: string };

function Svg({ children }: { children: React.ReactNode }) {
  return (
    <svg viewBox="0 0 120 120" role="img" aria-hidden>
      {children}
    </svg>
  );
}

export default function IndustryGlyph({ slug, className = '' }: Props) {
  const inner = (() => {
    switch (slug) {
      case 'railways':
        return (
          <>
            {/* rails + ties */}
            <path d="M8 80H112M8 96H112" />
            <path d="M24 80V96M44 80V96M64 80V96M84 80V96M104 80V96" strokeWidth={1.4} opacity={0.5} />
            {/* signal mast */}
            <path d="M96 80V40" />
            <circle className="acc g-blink" cx={96} cy={34} r={5} />
            {/* running train dot */}
            <circle className="accf g-runx" cx={60} cy={88} r={5} />
          </>
        );
      case 'telecom':
        return (
          <>
            {/* tower */}
            <path d="M60 96L50 54M60 96L70 54M53 74H67M51 64H69" />
            <path d="M40 96H80" />
            <circle className="accf" cx={60} cy={48} r={3.5} />
            {/* ping rings */}
            <circle className="acc g-ping" cx={60} cy={48} r={6} />
            <circle className="acc g-ping d2" cx={60} cy={48} r={6} />
            <circle className="acc g-ping d3" cx={60} cy={48} r={6} />
          </>
        );
      case 'bfsi':
        return (
          <>
            <path d="M60 16L98 30V58C98 84 80 100 60 106C40 100 22 84 22 58V30L60 16Z" />
            <path className="acc g-draw" d="M42 60L55 73L80 44" />
          </>
        );
      case 'public-sector':
        return (
          <>
            <path d="M28 46L60 26L92 46" />
            <path d="M24 92H96" />
            <path d="M30 50V88M44 50V88M60 50V88M76 50V88M90 50V88" />
            <path d="M26 50H94" strokeWidth={1.6} />
            <circle className="accf g-blink" cx={60} cy={32} r={3.5} />
          </>
        );
      case 'real-estate':
        return (
          <>
            <path d="M44 38H88V100H44Z" />
            <path d="M20 64H44V100H20Z" />
            <path d="M44 38L66 26L88 38" />
            <rect className="accf g-lit" x={52} y={50} width={8} height={8} />
            <rect className="accf g-lit d2" x={72} y={50} width={8} height={8} />
            <rect className="accf g-lit d3" x={52} y={68} width={8} height={8} />
            <rect className="accf g-lit d4" x={72} y={68} width={8} height={8} />
            <rect className="accf g-lit d5" x={28} y={74} width={8} height={8} />
          </>
        );
      case 'oil-gas':
        return (
          <>
            <path d="M24 86A36 36 0 0 1 96 86" />
            <path d="M30 80L36 76M60 50V58M90 80L84 76" strokeWidth={1.6} opacity={0.7} />
            <line className="acc g-sweep" x1={60} y1={86} x2={60} y2={54} />
            <circle className="accf" cx={60} cy={86} r={5} />
            <path d="M24 94H96" strokeWidth={1.6} />
          </>
        );
      case 'energy-utilities':
        return (
          <>
            <path className="acc g-flow" d="M14 78Q32 58 50 78T86 78T122 78" />
            <path d="M14 94H106" strokeWidth={1.6} opacity={0.6} />
            <polygon className="accf g-blink" points="64,28 50,60 60,60 54,86 78,50 66,50 74,28" />
          </>
        );
      default:
        return <circle className="acc g-spin" cx={60} cy={60} r={36} strokeDasharray="40 14" />;
    }
  })();

  return <span className={`iglyph ${className}`}>{<Svg>{inner}</Svg>}</span>;
}
