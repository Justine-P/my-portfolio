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
    title: "To-Do List App",
    description:
      "A task management app for creating, organizing, and tracking daily tasks with clean UX and responsive design.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Neon PostgreSQL"],
    links: {
      live: "https://example.com/todo-list",
      github: "https://github.com/Justine-P/todo-list",
    },
  },
  {
    title: "School Monitoring System",
    description:
      "A web system for monitoring student performance, attendance, and records with role-based dashboards for staff.",
    techStack: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
    links: {
      live: "https://example.com/school-monitoring-system",
      github: "https://github.com/Justine-P/school-monitoring-system",
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
