/**
 * EDITABLE CONTENT
 * Update personal details, links, projects, skills, and case studies here.
 * Keep only approved, public links in this file.
 */

export const site = {
  name: 'Rawnaz Anam',
  role: 'Senior Software Engineer',
  positioning:
    'Senior Software Engineer building enterprise applications, ERP integrations, workflow automation, and SaaS products.',
  title: 'Rawnaz Anam | Senior Software Engineer',
  description:
    'Senior Software Engineer specializing in .NET, Azure, Angular, JDE EnterpriseOne, ERP automation, enterprise applications, and SaaS development.',
  url: 'https://anamraz.github.io',
  location: 'United States',
  links: {
    github: 'https://github.com/AnamRaz',
    linkedin: 'https://www.linkedin.com/in/rawnazanam/',
    stockward: 'https://anamraz.github.io/stockward-website/',
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
    text: 'Technical guidance for production teams alongside hands-on SaaS architecture and development as the founder of Stockward.',
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
    title: 'Stockward',
    eyebrow: 'SaaS product · Founder & software architect',
    summary:
      'A multi-tenant restaurant operations platform designed to help multi-location operators manage inventory, financial workflows, scheduling, receipt processing, and external sales data.',
    contributions: [
      'Designing multi-tenant, role-based operational workflows',
      'Building reporting, scheduling, and OCR-assisted receipt processing',
      'Preparing the platform for pilot production use',
    ],
    technologies: ['.NET 10', 'Blazor Server', 'EF Core', 'SQL Server', 'Azure', 'OCR', 'Role-based access', 'External integrations'],
    status: 'Active development',
    href: site.links.stockward,
    linkLabel: 'Visit Stockward',
    note: 'Product source is maintained privately while public product information is available through the Stockward website.',
  },
  {
    title: 'Enterprise Workflow Automation',
    eyebrow: 'ERP integration · Operational impact',
    summary:
      'Replacing manual and paper-heavy operational processes with maintainable integrations and automations across modern applications and enterprise systems.',
    contributions: [
      'Created and maintains more than 30 ERP and workflow automations',
      'Connected .NET applications, JDE EnterpriseOne, JDE Orchestrator, and Oracle data',
      'Saved thousands of employee hours annually while preserving operational reliability',
    ],
    technologies: ['.NET', 'JDE EnterpriseOne', 'JDE Orchestrator', 'Oracle', 'REST APIs', 'Workflow automation'],
  },
  {
    title: 'Enterprise Application Engineering',
    eyebrow: 'Full-stack production systems',
    summary:
      'Building and modernizing production applications that connect operational teams with the data and business systems they use every day.',
    contributions: [
      '.NET and Angular delivery across interfaces, APIs, and data workflows',
      'Authorization and integration across Oracle, SQL Server, and business systems',
      'Production troubleshooting, performance improvement, and reliability work',
    ],
    technologies: ['ASP.NET Core', 'Angular', 'REST APIs', 'SQL Server', 'Oracle', 'Authorization', 'Azure'],
  },
  {
    title: 'Technical Leadership',
    eyebrow: 'Engineering enablement',
    summary:
      'Helping developers and delivery teams make sound technical decisions and support business-critical systems with consistency.',
    contributions: [
      'Architecture guidance and pragmatic design review',
      'Code reviews, troubleshooting, and testing support',
      'Mentoring, development guidance, and consistent engineering practices',
    ],
    technologies: ['Architecture guidance', 'Code review', 'Mentoring', 'Testing', 'Production support'],
  },
];

export const skillGroups = [
  { title: 'Application development', items: ['C#', '.NET', 'ASP.NET Core', 'Blazor', 'Angular', 'TypeScript', 'REST APIs', 'Entity Framework Core'] },
  { title: 'Enterprise systems', items: ['JDE EnterpriseOne', 'JDE Orchestrator', 'Oracle', 'ERP integrations', 'Workflow automation', 'Operational reporting'] },
  { title: 'Cloud & delivery', items: ['Azure App Service', 'Azure SQL', 'Blob Storage', 'Key Vault', 'Application Insights', 'GitHub Actions', 'Docker', 'CI/CD'] },
  { title: 'Architecture & production', items: ['Authentication & authorization', 'Multi-tenant architecture', 'Background processing', 'Production troubleshooting', 'Performance optimization', 'Logging & observability', 'Testing', 'Deployment safety'] },
  { title: 'Leadership', items: ['Architecture guidance', 'Code reviews', 'Mentoring', 'Requirements discovery', 'Cross-functional problem solving'] },
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
        'Solutions had to work with existing ERP data, business rules, production operations, and legacy dependencies without disrupting daily work.',
    },
    {
      label: 'Approach',
      content:
        'Built and maintained integrations and automations using modern .NET applications, Oracle data, JDE EnterpriseOne, JDE Orchestrator, and supporting APIs.',
    },
    {
      label: 'Engineering considerations',
      content:
        'Production automation required more than a successful happy path. Each workflow was shaped around operational safety and supportability.',
      items: [
        'Data validation and authorization',
        'Failure handling and logging',
        'Operational support and backward compatibility',
        'Maintainability and gradual rollout',
      ],
    },
    {
      label: 'Outcome',
      content:
        'More than 30 automated workflows were delivered and maintained, replacing manual processes and saving thousands of employee hours annually.',
    },
  ],
};
