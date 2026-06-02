'use client';
import { useMemo, useState } from 'react';
import Link from 'next/link';
import { verticals } from '@/lib/site';
import type { CaseStudy } from '@/lib/case-studies';

export default function CaseStudyExplorer({ studies }: { studies: CaseStudy[] }) {
  const [active, setActive] = useState<string>('all');
  const filtered = useMemo(
    () => (active === 'all' ? studies : studies.filter((s) => s.vertical === active)),
    [active, studies],
  );
  const filters = [{ slug: 'all', name: 'All', accentVar: '--orange' }, ...verticals.map((v) => ({ slug: v.slug, name: v.name, accentVar: v.accentVar }))];

  return (
    <div>
      <div className="partners" style={{ marginTop: 0, marginBottom: 36 }}>
        {filters.map((f) => (
          <button
            key={f.slug}
            className="p"
            onClick={() => setActive(f.slug)}
            data-c
            style={{
              cursor: 'pointer',
              color: active === f.slug ? 'var(--text)' : 'var(--muted)',
              borderColor: active === f.slug ? `var(${f.accentVar})` : 'var(--line)',
              background: active === f.slug ? 'color-mix(in srgb, var(' + f.accentVar + ') 12%, transparent)' : 'var(--panel)',
            }}
          >
            {f.name}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="sec-lead">Case studies for this vertical are coming soon. <a href="/contact" style={{ color: 'var(--orange)' }}>Request a briefing →</a></p>
      ) : (
        <div className="card-grid">
          {filtered.map((s) => {
            const v = verticals.find((x) => x.slug === s.vertical);
            return (
              <Link
                key={s.slug}
                href={`/case-studies/${s.slug}`}
                className="icard"
                data-c
                style={{ minHeight: 320, ['--ac' as string]: `var(${v?.accentVar ?? '--orange'})` }}
              >
                <span className="lbl">{v?.name ?? 'Industry'}</span>
                <h4>{s.title}</h4>
                <p><b style={{ color: 'var(--text)' }}>Challenge.</b> {s.challenge}</p>
                <p style={{ color: 'var(--ac)' }}><b>Result.</b> {s.result}</p>
                <span className="arrow mono">Read the story →</span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}
