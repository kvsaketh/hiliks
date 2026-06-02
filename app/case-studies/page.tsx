import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import CtaBand from '@/components/CtaBand';
import CaseStudyExplorer from './CaseStudyExplorer';
import { caseStudies } from '@/lib/case-studies';

export const metadata: Metadata = {
  title: 'Case Studies',
  description: 'Outcome-led stories filterable by vertical — the challenge, the engineered solution, the measurable result.',
};

export default function CaseStudiesPage() {
  return (
    <>
      <PageHero
        crumbs={[{ label: 'Case Studies' }]}
        eyebrow="Case Studies"
        title="Outcome-led stories, by vertical"
        lead="The challenge, the engineered solution, the measurable result — filterable across every industry we serve."
      />
      <section className="band" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <CaseStudyExplorer studies={caseStudies} />
        </div>
      </section>
      <CtaBand title="Want results like these?" primaryLabel="Request a Briefing" secondaryLabel="Explore Industries" secondaryHref="/industries" />
    </>
  );
}
