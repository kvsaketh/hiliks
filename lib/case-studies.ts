export type CaseStudy = {
  slug: string;
  vertical: string; // vertical slug
  title: string;
  challenge: string;
  solution: string;
  result: string;
  overview: string;
  approach: string[];
  outcomes: { v: string; k: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: 'unified-occ',
    vertical: 'railways',
    title: 'Unified OCC across a regional rail network',
    challenge: 'Siloed signaling, telecom and asset systems left controllers without a single operational picture.',
    solution: 'Integrated signals, trackside systems and enterprise data into one OCC fabric with AI-led alerting.',
    result: 'Faster incident response and a single source of operational truth across the corridor.',
    overview:
      'A regional operator ran signaling, railway telecom and asset-management systems independently. Controllers stitched together a picture from multiple screens, slowing response and obscuring root cause during incidents.',
    approach: [
      'Mapped OT/IT data flows across signaling, trackside and enterprise systems.',
      'Built an integration fabric to unify signals, telemetry and asset data in real time.',
      'Layered AI-led alerting and a single operational view into the control centre.',
      'Established managed operations for 24×7 reliability.',
    ],
    outcomes: [
      { v: '1', k: 'Source of operational truth' },
      { v: '↓', k: 'Incident response time' },
      { v: '24×7', k: 'Managed operations' },
      { v: 'OT+IT', k: 'Systems unified' },
    ],
  },
  {
    slug: 'predictive-rolling-stock',
    vertical: 'railways',
    title: 'Predictive maintenance for rolling stock',
    challenge: 'Reactive maintenance drove unplanned downtime and shortened asset life.',
    solution: 'Condition monitoring fused with AI to predict failures before they occurred.',
    result: 'Reduced unplanned downtime and extended asset life.',
    overview:
      'Maintenance was schedule- and failure-driven, leaving the operator exposed to unplanned downtime and premature asset replacement.',
    approach: [
      'Instrumented assets with condition-monitoring telemetry.',
      'Built predictive models fusing sensor data with maintenance history.',
      'Integrated predictions into maintenance workflow and asset systems.',
    ],
    outcomes: [
      { v: '↓', k: 'Unplanned downtime' },
      { v: '↑', k: 'Asset life' },
      { v: 'AI', k: 'Failure prediction' },
    ],
  },
  {
    slug: 'oss-bss-modernization',
    vertical: 'telecom',
    title: 'OSS/BSS modernization for a regional operator',
    challenge: 'Legacy stacks slowed service activation and inflated operating cost.',
    solution: 'Modernized OSS/BSS with intelligent automation across network operations.',
    result: 'Shorter activation cycles and lower operational overhead.',
    overview:
      'Legacy OSS/BSS made service activation slow and costly, and limited the operator’s ability to launch new offers.',
    approach: [
      'Modernized OSS/BSS without a full rip-and-replace.',
      'Automated activation and assurance workflows.',
      'Added analytics across network operations.',
    ],
    outcomes: [
      { v: '↓', k: 'Activation time' },
      { v: '↓', k: 'Operational cost' },
      { v: 'RPA', k: 'Automated workflows' },
    ],
  },
  {
    slug: 'compliant-onboarding',
    vertical: 'bfsi',
    title: 'Automated, compliant customer onboarding',
    challenge: 'Manual onboarding created compliance risk and long turnaround times.',
    solution: 'Workflow automation and ECM with built-in compliance checkpoints.',
    result: 'Faster onboarding with a stronger compliance posture.',
    overview:
      'Manual, document-heavy onboarding created compliance risk and long turnaround times for new customers.',
    approach: [
      'Digitized onboarding with ECM and structured workflow.',
      'Embedded compliance checkpoints into the process.',
      'Added analytics for throughput and risk visibility.',
    ],
    outcomes: [
      { v: '↓', k: 'Turnaround time' },
      { v: '↑', k: 'Compliance posture' },
      { v: 'ECM', k: 'Document automation' },
    ],
  },
  {
    slug: 'records-digitization',
    vertical: 'public-sector',
    title: 'Large-scale records digitization',
    challenge: 'Paper-based records blocked citizen-service delivery at scale.',
    solution: 'ECM-led digitization with smart-governance workflows.',
    result: 'Citizen services delivered faster and more transparently.',
    overview:
      'Paper-based records limited the speed and transparency of citizen services across a large governance program.',
    approach: [
      'Ran ECM-led digitization of records at scale.',
      'Built smart-governance workflows on top of digitized records.',
      'Enabled citizen-service access to the digitized estate.',
    ],
    outcomes: [
      { v: '↑', k: 'Service speed' },
      { v: '↑', k: 'Transparency' },
      { v: 'ECM', k: 'Records digitized' },
    ],
  },
];

export const getCaseStudy = (slug: string) => caseStudies.find((c) => c.slug === slug);
