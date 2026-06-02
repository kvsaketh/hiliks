'use client';
import { useEffect } from 'react';

export default function ScrollProgress() {
  useEffect(() => {
    const bar = document.createElement('div');
    bar.className = 'prog';
    document.body.appendChild(bar);
    const onScroll = () => {
      const h = document.documentElement;
      const p = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
      bar.style.transform = `scaleX(${p})`;
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      bar.remove();
    };
  }, []);
  return null;
}
