import Link from 'next/link';
import IndustryGlyph from './IndustryGlyph';
import type { Vertical } from '@/lib/site';

export default function IndustryCard({
  v,
  index,
  showBlurb = true,
  minHeight,
}: {
  v: Vertical;
  index?: number;
  showBlurb?: boolean;
  minHeight?: number;
}) {
  return (
    <Link
      href={`/industries/${v.slug}`}
      className={`icard ${v.flagship ? 'flag' : ''}`}
      data-c
      style={{
        ['--ac' as string]: `var(${v.accentVar})`,
        ['--accent' as string]: `var(${v.accentVar})`,
        ...(minHeight ? { minHeight } : {}),
      }}
    >
      <IndustryGlyph slug={v.slug} />
      <span className="idx mono">{v.flagship ? 'FLAGSHIP' : String((index ?? 0) + 1).padStart(2, '0')}</span>
      <span className="lbl">{v.unit}</span>
      <h4>{v.name}</h4>
      {showBlurb && <p>{v.blurb}</p>}
      <span className="arrow mono">Explore →</span>
    </Link>
  );
}
