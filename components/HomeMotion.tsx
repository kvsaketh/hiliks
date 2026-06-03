'use client';
import { useEffect } from 'react';

/**
 * Homepage motion engine — ported from the original index.html <script>.
 * DNA-helix Three.js hero + GSAP ScrollTrigger choreography + interactions.
 * Renders nothing; drives DOM that app/page.tsx puts on the screen.
 */
export default function HomeMotion() {
  useEffect(() => {
    const reduce = matchMedia('(prefers-reduced-motion:reduce)').matches;
    let cleanup = () => {};

    (async () => {
      const THREE = await import('three');
      const gsapMod = await import('gsap');
      const stMod = await import('gsap/ScrollTrigger');
      const gsap = gsapMod.gsap ?? gsapMod.default;
      const ScrollTrigger = stMod.ScrollTrigger ?? stMod.default;
      gsap.registerPlugin(ScrollTrigger);

      const disposers: Array<() => void> = [];
      let scrollT = 0;

      /* ===== 3D HELIX HERO ===== */
      const canvas = document.getElementById('scene') as HTMLCanvasElement | null;
      let rafId = 0;
      if (canvas) {
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x0b0d11, 0.028);
        const cam = new THREE.PerspectiveCamera(55, 1, 0.1, 120);
        cam.position.set(0, 0, 22);
        let baseZ = 22;

        scene.add(new THREE.AmbientLight(0x556070, 0.7));
        const d = new THREE.DirectionalLight(0xffffff, 0.8); d.position.set(4, 8, 6); scene.add(d);
        const pO = new THREE.PointLight(0xf2680e, 2.4, 60); pO.position.set(7, 3, 10); scene.add(pO);
        const pB = new THREE.PointLight(0x2e8fe0, 1.2, 50); pB.position.set(-9, -4, 4); scene.add(pB);

        const helix = new THREE.Group();
        const count = 58, radius = 3.4, spacing = 0.46, step = 0.34;
        const ballGeo = new THREE.SphereGeometry(0.17, 16, 16);
        const matA = new THREE.MeshStandardMaterial({ color: 0xf2680e, metalness: 0.65, roughness: 0.28, emissive: 0xc24409, emissiveIntensity: 0.35 });
        const matB = new THREE.MeshStandardMaterial({ color: 0xff9248, metalness: 0.55, roughness: 0.32, emissive: 0x6e2e08, emissiveIntensity: 0.3 });
        const rungMat = new THREE.MeshStandardMaterial({ color: 0x8a98a8, metalness: 0.7, roughness: 0.4, emissive: 0x14181e, emissiveIntensity: 0.2 });
        const rungGeo = new THREE.CylinderGeometry(0.045, 0.045, radius * 2, 10);
        const up = new THREE.Vector3(0, 1, 0);
        for (let i = 0; i < count; i++) {
          const a = i * step, y = i * spacing - (count * spacing) / 2;
          const ax = Math.cos(a) * radius, az = Math.sin(a) * radius;
          const sA = new THREE.Mesh(ballGeo, matA); sA.position.set(ax, y, az); helix.add(sA);
          const sB = new THREE.Mesh(ballGeo, matB); sB.position.set(-ax, y, -az); helix.add(sB);
          if (i % 2 === 0) {
            const r = new THREE.Mesh(rungGeo, rungMat);
            r.position.set(0, y, 0);
            const dir = new THREE.Vector3(ax * 2, 0, az * 2).normalize();
            r.quaternion.setFromUnitVectors(up, dir);
            helix.add(r);
          }
        }
        scene.add(helix);

        const grid = new THREE.GridHelper(150, 72, 0xf2680e, 0x223040);
        grid.position.y = -9; (grid.material as any).transparent = true; (grid.material as any).opacity = 0.42;
        scene.add(grid);
        const grid2 = new THREE.GridHelper(150, 72, 0x2e3a49, 0x16202b);
        grid2.position.y = 10; (grid2.material as any).transparent = true; (grid2.material as any).opacity = 0.14;
        scene.add(grid2);

        function glow(color: string, x: number, y: number, s: number) {
          const c = document.createElement('canvas'); c.width = c.height = 128;
          const g = c.getContext('2d')!;
          const grd = g.createRadialGradient(64, 64, 0, 64, 64, 64);
          grd.addColorStop(0, color); grd.addColorStop(1, 'rgba(0,0,0,0)');
          g.fillStyle = grd; g.fillRect(0, 0, 128, 128);
          const tex = new THREE.CanvasTexture(c);
          const sp = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
          sp.scale.set(s, s, 1); sp.position.set(x, y, -4); scene.add(sp);
        }
        glow('rgba(242,104,14,.6)', 2, 1, 18); glow('rgba(46,143,224,.35)', -6, -3, 14);

        const PN = innerWidth < 760 ? 150 : 350, pp: number[] = [];
        for (let i = 0; i < PN; i++) pp.push((Math.random() - 0.5) * 46, (Math.random() - 0.5) * 30, (Math.random() - 0.5) * 24);
        const pg = new THREE.BufferGeometry(); pg.setAttribute('position', new THREE.Float32BufferAttribute(pp, 3));
        const pts = new THREE.Points(pg, new THREE.PointsMaterial({ color: 0xf2680e, size: 0.06, transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending }));
        scene.add(pts);

        let mx = 0, my = 0;
        const onMove = (e: MouseEvent) => { mx = e.clientX / innerWidth - 0.5; my = e.clientY / innerHeight - 0.5; };
        if (!reduce) window.addEventListener('mousemove', onMove);
        function resize() {
          const w = innerWidth, h = innerHeight; renderer.setSize(w, h, false);
          renderer.setPixelRatio(Math.min(window.devicePixelRatio, w < 760 ? 1.5 : 2));
          cam.aspect = w / h; cam.updateProjectionMatrix();
          helix.scale.setScalar(Math.min(1, w / 820));
          baseZ = w < 560 ? 27 : w < 900 ? 24 : 22;
        }
        window.addEventListener('resize', resize); resize();

        let t = 0;
        const loop = () => {
          t += 0.01;
          helix.rotation.y += reduce ? 0 : 0.0035;
          helix.rotation.y += scrollT * 0.5;
          helix.position.y = scrollT * 6;
          pts.rotation.y = t * 0.04;
          grid.position.z = ((t * 3) % 4) - 2; grid2.position.z = ((t * 2) % 4) - 2;
          grid.position.y = -9 + scrollT * 5;
          (pO as any).emissiveIntensity = 2 + Math.sin(t * 2) * 0.6;
          cam.position.x += (mx * 5 - cam.position.x) * 0.04;
          cam.position.y += (-my * 3 - cam.position.y) * 0.04;
          cam.position.z = baseZ - scrollT * 6;
          cam.lookAt(0, helix.position.y * 0.4, 0);
          renderer.render(scene, cam);
          rafId = requestAnimationFrame(loop);
        };
        loop();

        disposers.push(() => {
          cancelAnimationFrame(rafId);
          window.removeEventListener('mousemove', onMove);
          window.removeEventListener('resize', resize);
          ballGeo.dispose(); rungGeo.dispose(); pg.dispose();
          matA.dispose(); matB.dispose(); rungMat.dispose();
          renderer.dispose();
        });
      }

      /* ===== GSAP scroll ===== */
      ScrollTrigger.create({ trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true, onUpdate: (s: any) => (scrollT = s.progress) });
      gsap.to('.hero-inner', { yPercent: 24, opacity: 0.25, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });

      gsap.utils.toArray<HTMLElement>('.reveal').forEach((el) =>
        gsap.to(el, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 88%' } }),
      );

      gsap.utils.toArray<HTMLElement>('.v[data-count]').forEach((el) => {
        const end = +(el.dataset.count || 0), suf = el.dataset.suffix || '';
        const obj = { v: 0 };
        ScrollTrigger.create({
          trigger: el, start: 'top 90%', once: true,
          onEnter: () => gsap.to(obj, { v: end, duration: 1.6, ease: 'power2.out', onUpdate: () => { el.textContent = Math.round(obj.v) + suf; } }),
        });
      });

      const mm = gsap.matchMedia();
      mm.add('(min-width:901px)', () => {
        const track = document.getElementById('htrack');
        if (!track) return;
        const dist = () => track.scrollWidth - innerWidth + 72;
        gsap.to(track, { x: () => -dist(), ease: 'none', scrollTrigger: { trigger: '#industries', start: 'top top', end: () => '+=' + dist(), pin: true, scrub: 0.6, invalidateOnRefresh: true } });
      });

      /* ===== Interactivity ===== */
      const magHandlers: Array<{ el: Element; move: any; leave: any }> = [];
      document.querySelectorAll<HTMLElement>('[data-mag]').forEach((b) => {
        const move = (e: MouseEvent) => { const r = b.getBoundingClientRect(); gsap.to(b, { x: (e.clientX - r.left - r.width / 2) * 0.35, y: (e.clientY - r.top - r.height / 2) * 0.45, duration: 0.3 }); };
        const leave = () => gsap.to(b, { x: 0, y: 0, duration: 0.4, ease: 'elastic.out(1,.4)' });
        b.addEventListener('mousemove', move); b.addEventListener('mouseleave', leave);
        magHandlers.push({ el: b, move, leave });
      });

      const tiltHandlers: Array<{ el: HTMLElement; move: any; leave: any }> = [];
      document.querySelectorAll<HTMLElement>('.tilt').forEach((c) => {
        const move = (e: MouseEvent) => { const r = c.getBoundingClientRect(); const px = (e.clientX - r.left) / r.width - 0.5, py = (e.clientY - r.top) / r.height - 0.5; c.style.transform = `perspective(700px) rotateY(${px * 10}deg) rotateX(${-py * 10}deg) translateZ(6px)`; };
        const leave = () => { c.style.transform = 'perspective(700px) rotateY(0) rotateX(0)'; };
        c.addEventListener('mousemove', move); c.addEventListener('mouseleave', leave);
        tiltHandlers.push({ el: c, move, leave });
      });

      const fc = document.getElementById('flagCard');
      const fcMove = (e: MouseEvent) => { const r = fc!.getBoundingClientRect(); const px = (e.clientX - r.left) / r.width - 0.5; gsap.to(fc, { rotateY: px * 3, duration: 0.4, transformPerspective: 1000 }); };
      const fcLeave = () => gsap.to(fc, { rotateY: 0, duration: 0.5 });
      if (fc) { fc.addEventListener('mousemove', fcMove); fc.addEventListener('mouseleave', fcLeave); }

      const spotHandlers: Array<{ el: HTMLElement; move: any; spot: HTMLElement }> = [];
      document.querySelectorAll<HTMLElement>('.cap,.why,.flagship').forEach((c) => {
        c.classList.add('spotlight');
        const s = document.createElement('span'); s.className = 'spot'; c.insertBefore(s, c.firstChild);
        const move = (e: MouseEvent) => { const r = c.getBoundingClientRect(); c.style.setProperty('--mx', e.clientX - r.left + 'px'); c.style.setProperty('--my', e.clientY - r.top + 'px'); };
        c.addEventListener('mousemove', move);
        spotHandlers.push({ el: c, move, spot: s });
      });

      const CH = 'ABCDEFGHJKLMNPQRSTUVWXYZ0123456789/·—';
      function scramble(el: HTMLElement) {
        const txt = el.dataset.txt || el.textContent || ''; el.dataset.txt = txt; let f = 0; const total = txt.length * 3;
        const id = setInterval(() => {
          f++;
          el.textContent = txt.split('').map((c, i) => (c === ' ' ? ' ' : i < f / 3 ? c : CH[Math.floor(Math.random() * CH.length)])).join('');
          if (f >= total) { clearInterval(id); el.textContent = txt; }
        }, 22);
      }
      document.querySelectorAll<HTMLElement>('.sec-num').forEach((el) => ScrollTrigger.create({ trigger: el, start: 'top 90%', once: true, onEnter: () => scramble(el) }));
      const kick = document.querySelector<HTMLElement>('.kicker');
      let kickTimer: any;
      if (kick && !reduce) kickTimer = setTimeout(() => scramble(kick), 350);

      const hud = [...document.querySelectorAll<HTMLElement>('.hud a')];
      hud.forEach((a) => {
        const sec = document.querySelector(a.getAttribute('href') || '');
        if (!sec) return;
        ScrollTrigger.create({ trigger: sec, start: 'top center', end: 'bottom center', onToggle: (s: any) => { if (s.isActive) { hud.forEach((h) => h.classList.remove('on')); a.classList.add('on'); } } });
      });

      const onLoad = () => ScrollTrigger.refresh();
      window.addEventListener('load', onLoad);
      let rt: any;
      const onResize = () => { clearTimeout(rt); rt = setTimeout(() => ScrollTrigger.refresh(), 200); };
      window.addEventListener('resize', onResize);

      function showAll() { document.querySelectorAll<HTMLElement>('.reveal').forEach((el) => { if (getComputedStyle(el).opacity === '0') { el.style.opacity = '1'; el.style.transform = 'none'; } }); }
      const safety = setTimeout(showAll, 1200);
      if (reduce) showAll();

      ScrollTrigger.refresh();

      cleanup = () => {
        clearTimeout(kickTimer); clearTimeout(safety);
        window.removeEventListener('load', onLoad);
        window.removeEventListener('resize', onResize);
        magHandlers.forEach(({ el, move, leave }) => { el.removeEventListener('mousemove', move); el.removeEventListener('mouseleave', leave); });
        tiltHandlers.forEach(({ el, move, leave }) => { el.removeEventListener('mousemove', move); el.removeEventListener('mouseleave', leave); el.style.transform = ''; });
        if (fc) { fc.removeEventListener('mousemove', fcMove); fc.removeEventListener('mouseleave', fcLeave); }
        spotHandlers.forEach(({ el, move, spot }) => { el.removeEventListener('mousemove', move); spot.remove(); el.classList.remove('spotlight'); });
        mm.revert();
        ScrollTrigger.getAll().forEach((s: any) => s.kill());
        disposers.forEach((d) => d());
      };
    })();

    return () => cleanup();
  }, []);

  return null;
}
