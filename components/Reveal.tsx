'use client';
import { useEffect, useRef } from 'react';
import type { ElementType, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  style?: React.CSSProperties;
};

/** Scroll-triggered reveal using IntersectionObserver (no GSAP dependency, SSR-safe). */
export default function Reveal({ children, as: Tag = 'div', className = '', delay = 0, style }: Props) {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.style.opacity = '1';
      el.style.transform = 'none';
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const target = e.target as HTMLElement;
            target.animate(
              [
                { opacity: 0, transform: 'translateY(34px)' },
                { opacity: 1, transform: 'translateY(0)' },
              ],
              { duration: 900, delay, easing: 'cubic-bezier(.16,1,.3,1)', fill: 'forwards' },
            );
            io.unobserve(target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return (
    <Tag ref={ref as never} className={`reveal ${className}`} style={style}>
      {children}
    </Tag>
  );
}
