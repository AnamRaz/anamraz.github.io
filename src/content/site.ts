/**
 * EDITABLE CONTENT
 * Update personal details, links, projects, skills, and case studies here.
 * Keep only approved, public links in this file.
 */

export const site = {
  name: 'Rawnaz Anam',
  role: 'Senior Software Engineer | .NET · Angular · Enterprise Integrations',
  employmentTitle: 'Senior Software Developer',
  positioning:
    'Senior Software Engineer building enterprise applications, ERP integrations, workflow automation, and SaaS products.',
  title: 'Rawnaz Anam | Senior Software Engineer',
  description:
    'Software engineer with 5+ years of experience building and supporting enterprise applications using C#, .NET, Angular, SQL Server, and Oracle, with ERP integrations and workflow automation.',
  url: 'https://anamraz.github.io',
  links: {
    github: 'https://github.com/AnamRaz',
    linkedin: 'https://www.linkedin.com/in/rawnazanam/',
    resume: '/resume.pdf',
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
    title: 'Enterprise applications',
    text: 'Business-critical .NET and Angular systems designed around operational workflows, reliable integrations, and long-term maintainability.',
  },
  {
    number: '02',
    title: 'ERP & workflow automation',
    text: 'Modern applications and automations that connect JDE EnterpriseOne, JDE Orchestrator, Oracle data, and the teams who depend on them.',
  },
  {
    number: '03',
    title: 'Architecture & product',
    text: 'Architecture discussions, code reviews, and testing support alongside hands-on product development as the founder of ATARVI.',
  },
] as const;

export type Project = {
  title: string;
  eyebrow: string;
  summary: string;
  contributions: readonly string[];
  technologies: readonly string[];
  status?: string;
  href?: string;
  linkLabel?: string;
  note?: string;
};

export const projects: readonly Project[] = [
  {
    title: 'ATARVI',
    eyebrow: 'Independent product · Founder & Software Engineer · 2025–Present',
    summary:
      'An independent restaurant operations product in active development and pilot preparation, covering inventory, recipes, OCR-assisted receipt review, scheduling, and multi-location reporting.',
    contributions: [
      'Designing multi-tenant workflows with role-based access',
      'Owning architecture, implementation, and operator feedback',
      'Preparing Azure deployment and pilot readiness',
    ],
    technologies: ['.NET 10', 'Blazor', 'EF Core', 'SQL Server', 'Azure', 'OCR', 'Role-based access'],
    status: 'Pilot preparation',
  },
  {
    title: 'Enterprise Workflow Automation',
    eyebrow: 'ERP integration · Operational impact',
    summary:
      'Replacing manual and paper-heavy operational processes with maintainable integrations and automations across modern applications and enterprise systems.',
    contributions: [
      'Develop and maintain 30+ ERP and workflow automations',
      'Connected .NET applications, JDE EnterpriseOne, JDE Orchestrator, and Oracle data',
      'Replace manual and paper-based processes and support daily operations',
    ],
    technologies: ['.NET', 'JDE EnterpriseOne', 'JDE Orchestrator', 'Oracle', 'REST APIs', 'Workflow automation'],
  },
  {
    title: 'Enterprise Application Engineering',
    eyebrow: 'Full-stack production systems',
    summary:
      'Own development and production support for an enterprise platform serving approximately 300 employees, with an Angular web/PWA successor to a legacy Electron application in development.',
    contributions: [
      '.NET and Angular delivery across interfaces, APIs, and data workflows',
      'Integrating .NET APIs and a Windows helper for local printing and file workflows',
      'Ongoing web/PWA modernization and production troubleshooting',
    ],
    technologies: ['.NET', 'Angular', 'REST APIs', 'EF Core', 'SQL Server', 'Oracle'],
    status: 'Ongoing modernization',
  },
  {
    title: 'Technical Leadership',
    eyebrow: 'Engineering enablement',
    summary:
      'Guide two developers through architecture discussions, code reviews, testing support, and production troubleshooting.',
    contributions: [
      'Architecture guidance and pragmatic design review',
      'Code reviews, troubleshooting, and testing support',
      'Development guidance for two developers',
    ],
    technologies: ['Architecture guidance', 'Code review', 'Testing support', 'Production support'],
  },
];

export const skillGroups = [
  { title: 'Application development', items: ['C#', '.NET', 'ASP.NET Core', 'Blazor', 'Angular', 'TypeScript', 'JavaScript', 'EF Core'] },
  { title: 'Enterprise systems', items: ['SQL Server', 'Oracle', 'REST APIs', 'OpenAPI/Swagger', 'JDE EnterpriseOne', 'JDE Orchestrator'] },
  { title: 'Cloud & delivery', items: ['Azure App Service', 'Azure SQL', 'Blob Storage', 'Key Vault', 'Application Insights', 'GitHub Actions'] },
  { title: 'Architecture & production', items: ['Authentication & authorization', 'Multi-tenant design', 'Background processing', 'Production troubleshooting'] },
  { title: 'Leadership', items: ['Architecture guidance', 'Code reviews', 'Testing support', 'Requirements discovery', 'Development guidance'] },
] as const;

export type CaseStudy = {
  title: string;
  intro: string;
  sections: readonly { label: string; content: string; items?: readonly string[] }[];
};

export const caseStudy: CaseStudy = {
  title: 'Modernizing Enterprise Workflows with JDE Automation',
  intro:
    'A sanitized view of enterprise automation work. Employer, application, and internal architecture details are intentionally omitted.',
  sections: [
    {
      label: 'Problem',
      content:
        'Operational workflows depended on manual entry, paper processes, or disconnected systems, adding avoidable effort and making consistent execution harder.',
    },
    {
      label: 'Constraints',
      content:
        'The work spans enterprise applications, ERP integrations, and continued production support.',
    },
    {
      label: 'Approach',
      content:
        'Built and maintained integrations and automations using modern .NET applications, Oracle data, JDE EnterpriseOne, JDE Orchestrator, and supporting APIs.',
    },
    {
      label: 'Engineering considerations',
      content:
        'Application delivery is supported by architecture discussions, code reviews, testing support, and production troubleshooting.',
      items: [
        'Architecture guidance',
        'Code reviews',
        'Testing support',
        'Production troubleshooting',
      ],
    },
    {
      label: 'Outcome',
      content:
        'Develop and maintain 30+ ERP and workflow automations that replace manual and paper-based processes.',
    },
  ],
};
