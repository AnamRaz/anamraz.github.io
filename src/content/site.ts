/** Shared portfolio content. Career facts follow the owner-supplied 2026 résumé. */
const headline = 'Senior Software Engineer | .NET · Angular · Enterprise Integrations';

export const site = {
  name: 'Rawnaz Anam',
  headline,
  employmentTitle: 'Senior Software Developer',
  title: `Rawnaz Anam | ${headline}`,
  description: 'Software engineer with 5+ years of experience building and supporting enterprise applications with C#, .NET, Angular, SQL Server, and Oracle. Enterprise integrations, workflow automation, and ongoing web modernization.',
  introduction: 'I build and support enterprise applications with C#, .NET, Angular, SQL Server, and Oracle. My work spans application delivery, ERP integrations, production troubleshooting, and technical guidance for other developers.',
  url: 'https://anamraz.github.io',
  location: 'Lebanon, PA',
  email: 'rawnaz.anam@gmail.com',
  links: {
    github: 'https://github.com/AnamRaz',
    linkedin: 'https://www.linkedin.com/in/rawnazanam/',
    resume: '/resume.pdf',
  },
} as const;

export const navigation = [
  { label: 'Experience', href: '#experience' },
  { label: 'Selected work', href: '#work' },
  { label: 'Skills', href: '#expertise' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
] as const;

export const experience = [
  {
    title: site.employmentTitle,
    dates: 'May 2022 – Present',
    employer: 'Harrington Hoists, Inc.',
    context: 'A Columbus McKinnon company · Manheim, PA',
    contributions: [
      'Own development and production support for an enterprise platform serving approximately 300 employees, using .NET, Angular, REST APIs, EF Core, Oracle, and SQL Server.',
      'Develop and maintain 30+ ERP and workflow automations that replace manual and paper-based processes.',
      'Guide two developers through architecture discussions, code reviews, testing support, and production troubleshooting.',
    ],
  },
  {
    title: 'Application Developer',
    dates: 'Feb 2021 – May 2022',
    employer: 'Dutch Valley Food Inc.',
    context: 'Myerstown, PA',
    contributions: [
      'Developed .NET applications, database-driven tools, reports, and integrations supporting daily business operations.',
      'Automated manual processes and improved the reliability of systems used by operational teams.',
    ],
  },
  {
    title: 'Freelance Web Application Developer',
    dates: '2017 – 2021',
    employer: 'Independent Projects',
    context: 'Remote / Pennsylvania · Overlapping freelance experience',
    contributions: [
      'Built websites and web applications for small businesses, from requirements and interface updates to data-driven features, deployment, and client support.',
    ],
  },
] as const;

export const earlierExperience = 'Earlier experience: Help Desk / Customer Service Representative, Vertical Screen · May 2017 – Feb 2021';

export type Project = {
  title: string;
  eyebrow: string;
  problem: string;
  contribution: string;
  outcome: string;
  outcomeLabel: 'Current stage' | 'Outcome';
  technologies: readonly string[];
  status: string;
};

export const projects: readonly Project[] = [
  {
    title: 'Enterprise web & PWA modernization',
    eyebrow: 'Enterprise application development',
    problem: 'A legacy Electron application needs a web successor that supports local printing and file workflows.',
    contribution: 'Developing an Angular web/PWA successor, integrating .NET APIs and a Windows helper for local printing and file workflows.',
    outcome: 'The Angular web/PWA successor is in active development.',
    outcomeLabel: 'Current stage',
    technologies: ['Angular', '.NET', 'REST APIs', 'PWA'],
    status: 'Ongoing modernization',
  },
  {
    title: 'ERP & workflow automation',
    eyebrow: 'Enterprise integrations',
    problem: 'Operational workflows rely on manual and paper-based processes.',
    contribution: 'Develop and maintain 30+ ERP and workflow automations, alongside full-stack application delivery and production support.',
    outcome: 'Automations replace manual and paper-based processes and remain under active maintenance.',
    outcomeLabel: 'Outcome',
    technologies: ['.NET', 'JDE EnterpriseOne', 'JDE Orchestrator', 'Oracle', 'SQL Server'],
    status: 'Development & maintenance',
  },
  {
    title: 'ATARVI',
    eyebrow: 'Independent product · Founder & Software Engineer · 2025 – Present',
    problem: 'Restaurant operations span inventory, recipes, receipt review, scheduling, and reporting across locations.',
    contribution: 'Building a multi-tenant platform with role-based access and OCR-assisted receipt review. Own architecture, implementation, operator feedback, and Azure deployment preparation.',
    outcome: 'Active development and pilot preparation.',
    outcomeLabel: 'Current stage',
    technologies: ['.NET 10', 'Blazor', 'EF Core', 'SQL Server', 'Azure'],
    status: 'Pilot preparation',
  },
];

export const skillGroups = [
  { title: 'Application development', items: ['C#', '.NET / ASP.NET Core', 'Angular', 'TypeScript / JavaScript', 'Blazor', 'EF Core'] },
  { title: 'Data & integrations', items: ['SQL Server', 'Oracle', 'REST APIs', 'OpenAPI / Swagger', 'JDE EnterpriseOne', 'JDE Orchestrator'] },
  { title: 'Cloud & delivery', items: ['Azure App Service', 'Azure SQL', 'Blob Storage', 'Key Vault', 'Application Insights', 'GitHub Actions'] },
  { title: 'Engineering practices', items: ['Authentication / authorization', 'Multi-tenant design', 'Background processing', 'Code review'] },
] as const;

export const education = {
  degree: 'B.S. Information Science and Technology',
  school: 'Temple University',
  location: 'Philadelphia, PA',
  date: 'Dec 2020',
} as const;
