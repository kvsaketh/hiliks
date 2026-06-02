// ── Hiliks — single source of truth for site content & navigation ──
// Drives the homepage, industry/solution templates, nav, and footer.

export const company = {
  name: 'Hiliks Technologies',
  legal: 'Hiliks Technologies Limited',
  tagline: 'Engineering Intelligent Operations Across Critical Industries',
  corporateLine: 'Industry-Focused Digital Engineering & Enterprise Technology',
  est: 1985,
  listing: 'BSE Listed',
  phone: '+91-7799169999',
  email: 'hr@hiliks.com',
  offices: [
    { region: 'India', detail: '510, Aparna Greens, Nanakramguda, Hyderabad — 500032' },
    { region: 'GCC', detail: 'UAE · KSA — enterprise delivery for the Gulf' },
  ],
} as const;

export type Vertical = {
  slug: string;
  name: string;
  unit: string;
  flagship?: boolean;
  accentVar: string; // CSS var name
  tagline: string;
  blurb: string;
  capabilities: { n: string; t: string; d?: string }[];
};

export const verticals: Vertical[] = [
  {
    slug: 'railways',
    name: 'Railways',
    unit: 'Hiliks Railways',
    flagship: true,
    accentVar: '--v-rail',
    tagline: 'Rail Technology, Engineering, Signaling & Digital Transformation',
    blurb:
      'Our deepest, most strategic practice — and the proof of our engineering-led approach. From the track to the operations centre, for Indian Railways, Etihad Rail and GCC operators.',
    capabilities: [
      { n: '01', t: 'Signaling & Safety', d: 'Train control, interlocking and safety-critical signaling engineered for reliability and compliance.' },
      { n: '02', t: 'Railway Telecom', d: 'OFC backbone and resilient trackside communications across distance and terrain.' },
      { n: '03', t: 'Smart Rail Systems', d: 'Connected trackside and station systems generating the data operations depend on.' },
      { n: '04', t: 'OCC Integration', d: 'Operations control centre integration — unifying systems, signals and data.' },
      { n: '05', t: 'AI-Led Operations', d: 'Analytics and automation that turn rail data into operational decisions.' },
      { n: '06', t: 'Predictive Maintenance', d: 'Condition monitoring fused with AI to predict failures and extend asset life.' },
      { n: '07', t: 'Enterprise Rail Systems', d: 'ERP, ECM, workflow and asset management for the railway enterprise.' },
    ],
  },
  {
    slug: 'telecom',
    name: 'Telecom',
    unit: 'Hiliks Telco',
    accentVar: '--v-telco',
    tagline: 'Connected, Automated Telecom Operations',
    blurb: 'Modernizing telecom operators with OSS/BSS, network operations, automation, managed services and analytics.',
    capabilities: [
      { n: '01', t: 'OSS/BSS Modernization' },
      { n: '02', t: 'Network Operations & Monitoring' },
      { n: '03', t: 'Intelligent Automation' },
      { n: '04', t: 'Managed Services & Analytics' },
    ],
  },
  {
    slug: 'bfsi',
    name: 'BFSI',
    unit: 'Hiliks BFSI',
    accentVar: '--v-bfsi',
    tagline: 'Digital, Compliant Financial Operations',
    blurb: 'Automation, ECM and AI for banks, financial services and insurers — from onboarding to compliance.',
    capabilities: [
      { n: '01', t: 'Onboarding & Workflow Automation' },
      { n: '02', t: 'ECM & Document Management' },
      { n: '03', t: 'Compliance & Risk' },
      { n: '04', t: 'AI & Analytics' },
    ],
  },
  {
    slug: 'public-sector',
    name: 'Public Sector',
    unit: 'Hiliks Public Sector',
    accentVar: '--v-gov',
    tagline: 'Digital Government & Citizen Services',
    blurb: 'eGovernance platforms, citizen services, smart governance and large-scale digitization.',
    capabilities: [
      { n: '01', t: 'eGovernance Platforms' },
      { n: '02', t: 'Citizen Services' },
      { n: '03', t: 'Smart Governance' },
      { n: '04', t: 'Records Digitization (ECM)' },
    ],
  },
  {
    slug: 'real-estate',
    name: 'Real Estate',
    unit: 'Hiliks Real Estate',
    accentVar: '--v-realestate',
    tagline: 'Smart, Connected Properties',
    blurb: 'Smart buildings, ECM, ERP and tenant systems that modernize property operations.',
    capabilities: [
      { n: '01', t: 'Smart Building Systems' },
      { n: '02', t: 'ECM & ERP' },
      { n: '03', t: 'Tenant & Facility Systems' },
      { n: '04', t: 'Operations & Analytics' },
    ],
  },
  {
    slug: 'oil-gas',
    name: 'Oil & Gas',
    unit: 'Hiliks Oil & Gas',
    accentVar: '--v-oil',
    tagline: 'Industrial Operations Intelligence',
    blurb: 'Industrial systems, compliance and operations intelligence built on digital-engineering depth.',
    capabilities: [
      { n: '01', t: 'Industrial Systems & SCADA Integration' },
      { n: '02', t: 'Compliance & Safety' },
      { n: '03', t: 'Operations Intelligence' },
      { n: '04', t: 'Digital Engineering' },
    ],
  },
  {
    slug: 'energy-utilities',
    name: 'Energy & Utilities',
    unit: 'Hiliks Energy & Utilities',
    accentVar: '--v-energy',
    tagline: 'Reliable, Predictive Utility Operations',
    blurb: 'Asset monitoring, predictive maintenance, field systems and automation for utilities.',
    capabilities: [
      { n: '01', t: 'Asset Monitoring' },
      { n: '02', t: 'Predictive Maintenance' },
      { n: '03', t: 'Field Systems' },
      { n: '04', t: 'Automation & Analytics' },
    ],
  },
];

export type Capability = { slug: string; n: string; name: string; blurb: string };

export const capabilities: Capability[] = [
  { slug: 'digital-engineering', n: '01', name: 'Digital Engineering', blurb: 'Embedded, product and platform engineering for critical systems.' },
  { slug: 'enterprise-applications', n: '02', name: 'Enterprise Applications', blurb: 'ERP, ECM and core enterprise platforms tailored to each industry.' },
  { slug: 'systems-integration', n: '03', name: 'Systems Integration', blurb: 'Connecting OT/IT, legacy and enterprise systems into one fabric.' },
  { slug: 'ai-analytics', n: '04', name: 'AI & Analytics', blurb: 'Predictive insight, analytics and decision intelligence.' },
  { slug: 'intelligent-automation', n: '05', name: 'Intelligent Automation', blurb: 'RPA and workflow automation that streamline operations at scale.' },
  { slug: 'managed-services', n: '06', name: 'Managed Services', blurb: 'L1/L2/L3 operations and 24×7 support for critical systems.' },
  { slug: 'infrastructure-monitoring', n: '07', name: 'Infrastructure & Monitoring', blurb: 'Cloud, network and operations monitoring.' },
  { slug: 'data-platforms', n: '08', name: 'Data & Platforms', blurb: 'Data engineering, platforms and governance.' },
];

export const whyHiliks = [
  { ico: '◆', t: 'Domain-Focused Expertise', d: "Verticalized practices that speak each industry's language." },
  { ico: '⚙', t: 'Engineering-Led Delivery', d: 'Real engineering depth — not just IT services.' },
  { ico: '▤', t: 'Enterprise Technology Depth', d: 'Full-stack: apps, integration, AI, automation, data and cloud.' },
  { ico: '⬡', t: 'Strategic Ecosystem Partnerships', d: 'Best-of-breed partners extend our reach and depth.' },
  { ico: '⤢', t: 'GCC Expansion Readiness', d: 'Enterprise tone and delivery for the UAE, KSA and India.' },
  { ico: '✦', t: 'Niche by Design', d: 'Engineering-led DNA, with a flagship Railways practice.' },
];

export const partners = [
  'Oracle', 'OpenText', 'Microsoft Azure', 'AWS', 'Google Cloud', 'UiPath',
  'G42', 'Moro Hub', 'Trend Micro', 'Forescout', 'AppDynamics',
];

export const ecosystemStats = [
  { v: '20+ yrs', k: 'Ecosystem experience' },
  { v: '15', k: 'Countries served' },
  { v: 'GCC + India', k: 'Delivery footprint' },
  { v: '11+', k: 'Technology partners' },
];

export const marqueeItems = [
  'Signaling & Safety', 'OSS / BSS', 'Predictive Maintenance', 'OCC Integration',
  'AI-Led Operations', 'Smart Rail', 'Digital Engineering', 'Managed Services',
];

export const primaryNav = [
  { label: 'Industries', href: '/industries' },
  { label: 'Railways', href: '/industries/railways' },
  { label: 'Solutions', href: '/solutions' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Ecosystem', href: '/ecosystem' },
  { label: 'Insights', href: '/insights' },
];
