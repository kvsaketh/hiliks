'use client';
import { useState } from 'react';
import { verticals, company } from '@/lib/site';

const routes = [...verticals.map((v) => v.name), 'Partnerships'];

export default function ContactForm() {
  const [route, setRoute] = useState(routes[0]);
  const [sent, setSent] = useState(false);

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = encodeURIComponent(`[${route}] Inquiry — ${data.get('name')}`);
    const body = encodeURIComponent(
      `Inquiry routing: ${route}\nName: ${data.get('name')}\nCompany: ${data.get('company')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`,
    );
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  const field: React.CSSProperties = {
    width: '100%', padding: '13px 15px', background: 'var(--ink-2)', border: '1px solid var(--line)',
    borderRadius: 'var(--r-sm)', color: 'var(--text)', font: 'inherit', fontSize: 14,
  };
  const label: React.CSSProperties = {
    fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase',
    color: 'var(--muted-2)', display: 'block', marginBottom: 8,
  };

  return (
    <form onSubmit={onSubmit} style={{ display: 'grid', gap: 20, maxWidth: 560 }}>
      <div>
        <label style={label} htmlFor="route">Inquiry routing</label>
        <select id="route" value={route} onChange={(e) => setRoute(e.target.value)} style={field} data-c>
          {routes.map((r) => <option key={r}>{r}</option>)}
        </select>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <div>
          <label style={label} htmlFor="name">Name</label>
          <input id="name" name="name" required style={field} />
        </div>
        <div>
          <label style={label} htmlFor="company">Company</label>
          <input id="company" name="company" style={field} />
        </div>
      </div>
      <div>
        <label style={label} htmlFor="email">Work email</label>
        <input id="email" name="email" type="email" required style={field} />
      </div>
      <div>
        <label style={label} htmlFor="message">How can we help?</label>
        <textarea id="message" name="message" rows={4} style={{ ...field, resize: 'vertical' }} />
      </div>
      <button type="submit" className="btn btn-primary" data-c style={{ justifySelf: 'start' }}>
        Send Inquiry →
      </button>
      {sent && <p className="mono" style={{ color: 'var(--orange)', fontSize: 13 }}>Opening your email client…</p>}
    </form>
  );
}
