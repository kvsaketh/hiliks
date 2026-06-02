'use client';
import { useEffect, useRef } from 'react';
import type * as ThreeNS from 'three';

/**
 * Animated engineering "network" — a slowly rotating field of nodes connected by
 * proximity lines, with signal pulses travelling along them. Evokes signaling,
 * telecom backbones and connected operations. Pure Three.js, cleaned up on unmount.
 */
export default function Hero3D() {
  const ref = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let disposed = false;
    let cleanup = () => {};

    (async () => {
      const THREE = await import('three');
      if (disposed) return;

      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, 1, 0.1, 100);
      camera.position.z = 26;

      const COUNT = 150;
      const RADIUS = 17;
      const pts: { v: ThreeNS.Vector3 }[] = [];
      const positions = new Float32Array(COUNT * 3);
      for (let i = 0; i < COUNT; i++) {
        const v = new THREE.Vector3(
          (Math.random() - 0.5) * RADIUS * 2,
          (Math.random() - 0.5) * RADIUS * 1.2,
          (Math.random() - 0.5) * RADIUS,
        );
        pts.push({ v });
        positions.set([v.x, v.y, v.z], i * 3);
      }

      // nodes
      const nodeGeo = new THREE.BufferGeometry();
      nodeGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const nodeMat = new THREE.PointsMaterial({ color: 0xf2680e, size: 0.16, transparent: true, opacity: 0.9 });
      const nodes = new THREE.Points(nodeGeo, nodeMat);
      scene.add(nodes);

      // proximity lines
      const linePos: number[] = [];
      const MAXD = 6.2;
      for (let i = 0; i < COUNT; i++) {
        for (let j = i + 1; j < COUNT; j++) {
          if (pts[i].v.distanceTo(pts[j].v) < MAXD) {
            linePos.push(pts[i].v.x, pts[i].v.y, pts[i].v.z, pts[j].v.x, pts[j].v.y, pts[j].v.z);
          }
        }
      }
      const lineGeo = new THREE.BufferGeometry();
      lineGeo.setAttribute('position', new THREE.Float32BufferAttribute(linePos, 3));
      const lineMat = new THREE.LineBasicMaterial({ color: 0x3a5a78, transparent: true, opacity: 0.22 });
      const lines = new THREE.LineSegments(lineGeo, lineMat);
      scene.add(lines);

      // travelling signal pulses
      const pulseGeo = new THREE.BufferGeometry();
      const PCOUNT = 26;
      const pPos = new Float32Array(PCOUNT * 3);
      const pulses = Array.from({ length: PCOUNT }, () => {
        const a = pts[(Math.random() * COUNT) | 0].v;
        const b = pts[(Math.random() * COUNT) | 0].v;
        return { a, b, t: Math.random(), speed: 0.0025 + Math.random() * 0.006 };
      });
      pulseGeo.setAttribute('position', new THREE.BufferAttribute(pPos, 3));
      const pulseMat = new THREE.PointsMaterial({ color: 0xff9248, size: 0.34, transparent: true, opacity: 1 });
      const pulsePoints = new THREE.Points(pulseGeo, pulseMat);
      scene.add(pulsePoints);

      const group = new THREE.Group();
      group.add(nodes, lines, pulsePoints);
      scene.add(group);

      let mx = 0, my = 0;
      const onMove = (e: MouseEvent) => {
        mx = (e.clientX / window.innerWidth - 0.5);
        my = (e.clientY / window.innerHeight - 0.5);
      };
      window.addEventListener('mousemove', onMove);

      const resize = () => {
        const w = canvas.clientWidth || window.innerWidth;
        const h = canvas.clientHeight || window.innerHeight;
        renderer.setSize(w, h, false);
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
      };
      resize();
      window.addEventListener('resize', resize);

      let raf = 0;
      const tmp = new THREE.Vector3();
      const animate = () => {
        group.rotation.y += 0.0012;
        group.rotation.x += 0.0004;
        camera.position.x += (mx * 6 - camera.position.x) * 0.04;
        camera.position.y += (-my * 4 - camera.position.y) * 0.04;
        camera.lookAt(0, 0, 0);

        for (let i = 0; i < PCOUNT; i++) {
          const p = pulses[i];
          p.t += p.speed;
          if (p.t >= 1) {
            p.t = 0;
            p.a = pts[(Math.random() * COUNT) | 0].v;
            p.b = pts[(Math.random() * COUNT) | 0].v;
          }
          tmp.copy(p.a).lerp(p.b, p.t);
          pPos.set([tmp.x, tmp.y, tmp.z], i * 3);
        }
        pulseGeo.attributes.position.needsUpdate = true;

        renderer.render(scene, camera);
        raf = requestAnimationFrame(animate);
      };
      animate();

      cleanup = () => {
        cancelAnimationFrame(raf);
        window.removeEventListener('mousemove', onMove);
        window.removeEventListener('resize', resize);
        nodeGeo.dispose(); nodeMat.dispose();
        lineGeo.dispose(); lineMat.dispose();
        pulseGeo.dispose(); pulseMat.dispose();
        renderer.dispose();
      };
    })();

    return () => { disposed = true; cleanup(); };
  }, []);

  return <canvas id="scene" ref={ref} aria-hidden />;
}
