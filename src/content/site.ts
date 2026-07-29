/**
 * EDITABLE CONTENT
 * Update personal details, links, projects, skills, and case studies here.
 * Values beginning with "xxxxxxxxx" are intentionally unconfigured.
 */

export const site = {
  name: 'Rawnaz Anam',
  role: 'Software Engineer | Enterprise Applications | SaaS Builder',
  title: 'Rawnaz Anam — Software Engineer & SaaS Builder',
  description:
    'Software engineer building reliable enterprise applications and SaaS products with .NET, Azure, modern frontend systems, and pragmatic architecture.',
  url: 'https://anamraz.github.io',
  location: 'United States',
  links: {
    github: 'https://github.com/AnamRaz',
    linkedin: 'xxxxxxxxx-linkedin-url',
    contact: 'xxxxxxxxx-email-or-contact-url',
    resume: 'xxxxxxxxx-resume-url',
  },
} as const;

export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Case study', href: '#case-study' },
  { label: 'Expertise', href: '#expertise' },
  { label: 'Contact', href: '#contact' },
] as const;

export const impactAreas = [
  {
    number: '01',
    title: 'Enterprise systems',
    text: 'Modern applications that fit real business workflows, integrate with established systems, and remain dependable in production.',
  },
  {
    number: '02',
    title: 'Product engineering',
    text: 'SaaS capabilities shaped from business problems through architecture, delivery, and operational ownership.',
  },
  {
    number: '03',
    title: 'Technical direction',
    text: 'Clear tradeoffs, maintainable boundaries, and delivery practices that help engineering teams move with confidence.',
  },
] as const;

export type Project = {
  title: string;
  eyebrow: string;
  summary: string;
  contributions: readonly string[];
  technologies: readonly string[];
  status?: string;
};

export const projects: readonly Project[] = [
  {
    title: 'Stockward',
    eyebrow: 'SaaS product · Founder engineering',
    summary:
      'A multi-location restaurant operations platform bringing inventory, financial reporting, workforce scheduling, receipt processing, and external sales integration work into one focused product.',
    contributions: [
      'Modeling operational workflows across locations',
      'Building database-backed reporting and receipt processing',
      'Developing integration capabilities for external sales data',
    ],
    technologies: ['.NET', 'Blazor', 'EF Core', 'SQL Server', 'Azure', 'OCR', 'External APIs'],
  },
  {
    title: 'Enterprise Application Modernization',
    eyebrow: 'Enterprise delivery',
    summary:
      'Modernizing business workflows while connecting contemporary applications with established enterprise systems—without compromising production reliability.',
    contributions: [
      'Improving application responsiveness and maintainability',
      'Connecting modern interfaces to enterprise data workflows',
      'Supporting production troubleshooting and operational continuity',
    ],
    technologies: ['.NET', 'Angular', 'SQL Server', 'Oracle', 'JDE', 'REST APIs'],
  },
  {
    title: 'Production Engineering & Architecture',
    eyebrow: 'Engineering practice',
    summary:
      'Designing the foundations that let teams evolve business-critical software safely: explicit access control, observable workflows, and testable system boundaries.',
    contributions: [
      'Secure authorization and database-backed workflows',
      'Observability and production debugging practices',
      'Deployment safety and regression coverage',
    ],
    technologies: ['ASP.NET Core', 'Azure', 'CI/CD', 'Monitoring', 'Testing'],
  },
  {
    title: 'Public Engineering Reference',
    eyebrow: 'Upcoming · Public project',
    summary:
      'A practical reference implementation documenting architecture decisions, delivery tradeoffs, and production-minded engineering in the open.',
    contributions: [
      'Architecture notes and decision records',
      'End-to-end implementation and automated checks',
      'Public documentation designed for reuse',
    ],
    technologies: ['Architecture', 'Documentation', 'Open source'],
    status: 'In development',
  },
];

export const skillGroups = [
  { title: 'Backend', items: ['C#', '.NET', 'ASP.NET Core', 'Blazor', 'Entity Framework Core', 'REST APIs'] },
  { title: 'Frontend', items: ['Angular', 'TypeScript', 'JavaScript', 'HTML', 'CSS'] },
  { title: 'Cloud & delivery', items: ['Azure', 'GitHub Actions', 'CI/CD', 'Application configuration', 'Logging & monitoring'] },
  { title: 'Data & enterprise', items: ['SQL Server', 'Oracle', 'JDE', 'Business-system integrations', 'Reporting workflows'] },
  { title: 'Engineering', items: ['Software architecture', 'Authorization', 'Performance optimization', 'Production debugging', 'Testing', 'Technical leadership'] },
] as const;

export type CaseStudy = {
  title: string;
  intro: string;
  sections: readonly { label: string; content: string }[];
};

export const caseStudy: CaseStudy = {
  title: 'Making a business-critical application faster and easier to operate',
  intro:
    'A sanitized example of performance work in an enterprise environment. Details are intentionally generalized to protect employer and system confidentiality.',
  sections: [
    {
      label: 'Business problem',
      content:
        'A frequently used workflow had become slow enough to interrupt day-to-day work and increase the burden on production support.',
    },
    {
      label: 'Constraints',
      content:
        'The improvement needed to preserve established business behavior, work within existing enterprise integrations, and be released with low operational risk.',
    },
    {
      label: 'Role',
      content:
        'Owned the technical investigation, shaped the remediation approach, and worked across application and data layers to validate the change.',
    },
    {
      label: 'Approach',
      content:
        'Traced the request path, isolated expensive operations, reviewed data-access patterns, and converted the findings into focused changes with regression checks.',
    },
    {
      label: 'Architecture',
      content:
        'Kept responsibilities explicit across the user interface, application services, integration boundary, and database so each layer could be measured independently.',
    },
    {
      label: 'Tradeoffs',
      content:
        'Preferred targeted, observable improvements over a broad rewrite, reducing delivery risk while leaving cleaner seams for future modernization.',
    },
    {
      label: 'Outcome',
      content:
        'The workflow became more responsive and supportable, with clearer diagnostic signals for future production investigation. No confidential metrics are disclosed.',
    },
    {
      label: 'Lessons learned',
      content:
        'Performance work is strongest when measurement, business context, and release safety are treated as one engineering problem—not separate activities.',
    },
  ],
};
