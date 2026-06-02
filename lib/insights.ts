export type Insight = {
  slug: string;
  tag: string;
  kind: 'Point of view' | 'Whitepaper';
  title: string;
  dek: string;
  body: string[];
};

export const insights: Insight[] = [
  {
    slug: 'ai-led-rail-operations',
    tag: 'Railways',
    kind: 'Point of view',
    title: 'From signals to decisions: AI-led rail operations',
    dek: 'Rail networks already generate the data. The advantage goes to operators who turn it into decisions at the control centre.',
    body: [
      'Modern rail networks are instrumented from the track to the operations centre — signaling, telecom, trackside systems and rolling stock all emit data. The constraint is no longer collection; it is decision-making.',
      'AI-led operations close that gap: fusing signals, telemetry and enterprise data into a single operational view, then surfacing the few decisions that matter in the moment. Done well, it shortens incident response and turns maintenance from reactive to predictive.',
      'The engineering challenge is integration — unifying OT and IT without disrupting safety-critical systems. That is precisely where an engineering-led partner earns its place.',
    ],
  },
  {
    slug: 'condition-monitoring-advantage',
    tag: 'Predictive Ops',
    kind: 'Whitepaper',
    title: 'Condition monitoring as a competitive advantage',
    dek: 'Predictive maintenance is no longer a pilot. It is how reliable operators protect uptime and asset life.',
    body: [
      'Reactive maintenance is expensive twice over: in unplanned downtime and in shortened asset life. Condition monitoring fused with AI changes the economics by predicting failures before they happen.',
      'The payback compounds in asset-intensive industries — rail, energy, utilities and oil & gas — where a single unplanned outage cascades across operations.',
      'Success depends on instrumentation, model quality and integration into the maintenance workflow. The prediction only matters if it reaches the people and systems that act on it.',
    ],
  },
  {
    slug: 'gcc-engineering-led-delivery',
    tag: 'GCC',
    kind: 'Point of view',
    title: 'Engineering-led delivery for Gulf enterprise modernization',
    dek: 'The GCC is modernizing critical infrastructure at pace. Enterprise rigor and engineering depth both matter.',
    body: [
      'Across the UAE and KSA, operators are modernizing rail, telecom, energy and government systems at remarkable pace. The work is enterprise in scale and engineering-led in nature.',
      'A partner needs both: the enterprise tone and governance the region expects, and the engineering depth that critical systems demand. One without the other under-delivers.',
      'That combination — domain focus, engineering-led delivery and enterprise depth — is exactly the Hiliks model, extended through a strong ecosystem.',
    ],
  },
  {
    slug: 'oss-bss-without-rip-replace',
    tag: 'Telecom',
    kind: 'Whitepaper',
    title: 'OSS/BSS modernization without the rip-and-replace',
    dek: 'Operators can modernize operations and economics without betting the business on a full replacement.',
    body: [
      'Full OSS/BSS replacement is high-risk and slow. Yet legacy stacks throttle activation speed and inflate operating cost.',
      'A staged approach — modernizing around the edges, automating activation and assurance, and adding analytics — captures most of the value at a fraction of the risk.',
      'The discipline is integration and automation, applied where the operational and economic return is highest first.',
    ],
  },
  {
    slug: 'ot-it-convergence',
    tag: 'Integration',
    kind: 'Point of view',
    title: 'OT/IT convergence in critical infrastructure',
    dek: 'The hardest and highest-value integration work in critical industries lives at the OT/IT boundary.',
    body: [
      'Operational technology and information technology grew up separately, with different priorities — safety and uptime on one side, agility and data on the other.',
      'Convergence is where operational intelligence becomes possible: real-time telemetry meeting enterprise context. It is also where the risk concentrates, because safety-critical systems cannot be disrupted.',
      'This is engineering work, not just integration tooling — which is why it rewards a partner with real domain depth.',
    ],
  },
  {
    slug: 'automation-payback',
    tag: 'Automation',
    kind: 'Whitepaper',
    title: 'Where intelligent automation pays back fastest',
    dek: 'Not all automation is equal. The fastest payback comes from high-volume, rules-heavy, document-bound processes.',
    body: [
      'Intelligent automation delivers most where work is high-volume, rules-heavy and document-bound — onboarding, compliance, activation, records processing.',
      'The trap is automating the wrong thing first. Sequencing by operational and economic return turns automation from a cost into a compounding advantage.',
      'Human-in-the-loop orchestration keeps judgment where it belongs while removing the repetitive load around it.',
    ],
  },
];

export const getInsight = (slug: string) => insights.find((i) => i.slug === slug);
