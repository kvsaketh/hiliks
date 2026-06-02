'use client';
import { useEffect } from 'react';

export default function Cursor() {
  useEffect(() => {
    if (!window.matchMedia('(hover:hover) and (pointer:fine)').matches) return;
    const dot = document.createElement('div');
    const ring = document.createElement('div');
    dot.className = 'cur';
    ring.className = 'cur-r';
    document.body.append(dot, ring);

    let rx = 0, ry = 0, x = 0, y = 0;
    const move = (e: MouseEvent) => {
      x = e.clientX; y = e.clientY;
      dot.style.transform = `translate(${x}px,${y}px) translate(-50%,-50%)`;
      const t = e.target as HTMLElement;
      const interactive = t.closest('a,button,[data-c],.icard,.cap,.why,.rail-cap');
      ring.classList.toggle('big', !!interactive);
    };
    const raf = () => {
      rx += (x - rx) * 0.18; ry += (y - ry) * 0.18;
      ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
      frame = requestAnimationFrame(raf);
    };
    let frame = requestAnimationFrame(raf);
    window.addEventListener('mousemove', move);
    return () => {
      window.removeEventListener('mousemove', move);
      cancelAnimationFrame(frame);
      dot.remove(); ring.remove();
    };
  }, []);
  return null;
}
