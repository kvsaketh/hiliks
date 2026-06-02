import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import Reveal from '@/components/Reveal';
import ContactForm from './ContactForm';
import { company } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Talk to Hiliks — inquiry routing by vertical, with offices across India and the GCC.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Contact' }]}
        eyebrow="Contact"
        title="Talk to our experts"
        lead="Tell us which practice you need and where you operate. We route your inquiry to the right team across India and the GCC."
      />
      <section className="band" style={{ paddingTop: 0 }}>
        <div className="wrap split-2">
          <Reveal>
            <ContactForm />
          </Reveal>
          <Reveal delay={120}>
            <div>
              {company.offices.map((o) => (
                <div key={o.region} style={{ marginBottom: 28 }}>
                  <h6 className="mono" style={{ fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--muted-2)', marginBottom: 10 }}>
                    {o.region}
                  </h6>
                  <p style={{ color: 'var(--muted)', fontWeight: 300, lineHeight: 1.7 }}>{o.detail}</p>
                </div>
              ))}
              <div style={{ borderTop: '1px solid var(--line)', paddingTop: 22, marginTop: 8 }}>
                <p style={{ lineHeight: 2 }}>
                  <a href={`tel:${company.phone}`} style={{ color: 'var(--orange)' }}>{company.phone}</a><br />
                  <a href={`mailto:${company.email}`} style={{ color: 'var(--orange)' }}>{company.email}</a>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
