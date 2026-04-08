export const siteConfig = {
  name: "Justine Camello",
  role: "Web Developer",
  email: "hello@justinecamello.dev",
  location: "Philippines",
  intro:
    "I build fast, user-focused web applications with clean architecture and delightful interfaces.",
  description:
    "Portfolio of Justine Camello, a web developer focused on modern frontend experiences and reliable backend systems.",
  socials: {
    github: "https://github.com/justinecamello",
    linkedin: "https://www.linkedin.com/in/justinecamello",
  },
};

export const projects = [
  {
    title: "TaskFlow",
    description:
      "A collaborative task manager with real-time updates, role-based access, and analytics dashboards.",
    techStack: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
    links: {
      live: "https://example.com/taskflow",
      github: "https://github.com/justinecamello/taskflow",
    },
  },
  {
    title: "Shoply",
    description:
      "An e-commerce storefront with server-rendered catalog pages, cart persistence, and secure checkout.",
    techStack: ["React", "Node.js", "Stripe", "Prisma"],
    links: {
      live: "https://example.com/shoply",
      github: "https://github.com/justinecamello/shoply",
    },
  },
  {
    title: "InsightBoard",
    description:
      "A metrics platform that visualizes product and marketing KPIs through interactive charts and reports.",
    techStack: ["Next.js", "Neon", "Framer Motion", "Recharts"],
    links: {
      live: "https://example.com/insightboard",
      github: "https://github.com/justinecamello/insightboard",
    },
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
    ],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "Neon", "REST APIs"],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub Actions", "Vercel", "Figma", "Postman"],
  },
];
