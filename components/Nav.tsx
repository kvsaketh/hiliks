'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { primaryNav, company } from '@/lib/site';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname.startsWith(href);

  return (
    <>
      <header className={scrolled ? 'scrolled' : ''}>
        <div className="wrap nav">
          <Link href="/" className="brand" data-c>
            <span className="hx" aria-hidden />
            <span><b>Hiliks</b> <small>Technologies</small></span>
          </Link>
          <nav>
            <ul>
              {primaryNav.map((n) => (
                <li key={n.href}>
                  <Link href={n.href} className={isActive(n.href) ? 'active' : ''} data-c>
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Link href="/contact" className="nav-cta" data-c>Talk to Experts</Link>
          <button
            className={`burger ${open ? 'open' : ''}`}
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      <div className={`mmenu ${open ? 'open' : ''}`}>
        {primaryNav.map((n, i) => (
          <Link key={n.href} href={n.href}>
            {n.label}<span>{String(i + 1).padStart(2, '0')}</span>
          </Link>
        ))}
        <Link href="/about">About<span>{String(primaryNav.length + 1).padStart(2, '0')}</span></Link>
        <Link href="/contact" className="mcta">Talk to Experts →</Link>
        <Link href={`tel:${company.phone}`} style={{ marginTop: 18, color: 'var(--muted)', fontSize: '.9rem' }}>
          {company.phone}
        </Link>
      </div>
    </>
  );
}
