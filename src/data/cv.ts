/**
 * Editable CV content for Alejandro Guerra’s portfolio.
 */

export const person = {
  name: "Alejandro Guerra",
  initials: "AG",
  title: "Junior Software Developer",
  location: "Las Palmas de Gran Canaria, Spain",
  tagline:
    "Building reliable software, with curiosity for AI and emerging technology.",
  about: [
    "I care about clear code, solid foundations, and products that people can trust. I enjoy thoughtful system design, practical uses of AI, and picking up a tool when it helps solve a real problem.",
    "I’m finishing a BSc in Computer Engineering at the University of Las Palmas de Gran Canaria. The final project is written and only the defence is left. I recently worked as a full‑stack intern at Workfactory, building features on a live product and integrating an LLM through the OpenAI API. I’m looking for a role, remote or on-site, in Spain or elsewhere in Europe.",
  ],
  links: {
    email: "alejandroguerraj013@gmail.com",
    github: "https://github.com/AlejandroGuerraJimenez",
    linkedin: "https://www.linkedin.com/in/alejandroguerrajimenez/",
  },
} as const;

export type TimelineEntry = {
  id: string;
  period: string;
  title: string;
  org: string;
  description: string;
  tech?: string[];
};

/** Chronological story — newest first. Add or remove entries freely. */
export const timeline: TimelineEntry[] = [
  {
    id: "tfg",
    period: "Sep 2026 – Present",
    title: "Final degree project — VR fairground",
    org: "Universidad de Las Palmas de Gran Canaria",
    description:
      "A virtual-reality fairground in Unity. The app detects horizontal surfaces, places the booths, and runs attractions — balloon throw, basketball, duck fishing, and a punching ball — with session rules and automated tests. The project is written; the oral defence is still pending.",
    tech: ["C#", "Unity", "OpenXR"],
  },
  {
    id: "kippo",
    period: "Mar 2026 – May 2026",
    title: "Kippo",
    org: "Personal project",
    description:
      "Android app for a shared household: tasks, grocery lists, expenses, settlements, and rewards. Sign-in and live data go through Firebase, and the interface is built with Jetpack Compose.",
    tech: ["Kotlin", "Jetpack Compose", "Firebase"],
  },
  {
    id: "workfactory",
    period: "Feb 2026 – May 2026",
    title: "Full-stack Software Engineer",
    org: "Workfactory",
    description:
      "Full-stack internship on real product features, both frontend and backend, with Angular, React, Fastify, and Node.js. Built landing-page animation in Three.js, styled the interface with Tailwind CSS, persisted data with Drizzle ORM, and integrated an LLM through the OpenAI API. Collaborated in an agile team using Git, pull requests, and code reviews.",
    tech: [
      "Angular",
      "React",
      "Fastify",
      "Node.js",
      "Three.js",
      "Tailwind CSS",
      "Drizzle ORM",
      "OpenAI API",
    ],
  },
  {
    id: "tictactoe",
    period: "Feb 2026",
    title: "Tic-tac-toe",
    org: "Personal project",
    description:
      "Full-stack game with an Angular client and a Fastify API. The backend handles JWT auth, WebSockets, and PostgreSQL, and the frontend ships in Docker.",
    tech: ["TypeScript", "Angular", "Fastify", "PostgreSQL", "Docker"],
  },
  {
    id: "redhat-training",
    period: "2024",
    title: "Red Hat Linux training",
    org: "Red Hat",
    description:
      "Completed Getting Started with Linux Fundamentals (RH104), Red Hat System Administration I (RH124), and Red Hat System Administration II (RH134).",
    tech: ["RH104", "RH124", "RH134", "Linux"],
  },
  {
    id: "education",
    period: "2022 – Present",
    title: "BSc Computer Engineering",
    org: "Universidad de Las Palmas de Gran Canaria",
    description:
      "Four-year degree, pending the final-project defence. Coursework spans software engineering, databases, web and native mobile development, systems administration, virtualization, network services, graphics, computer vision, and autonomous robotic systems. Systems administration was centred on Linux. Virtualization used VirtualBox and KVM, and network services stayed low-level: hosting basic services and managing permissions. Algorithms and Programming included Python exercises on graphs, sorting, backtracking, and dynamic programming, and MiniZinc models for problems such as knapsack and stable matching. Also used C in other coursework.",
    tech: [
      "Algorithms and Programming",
      "Software Engineering",
      "Databases",
      "Web and Mobile Programming",
      "Software Production",
      "Systems Administration",
      "Virtualization",
      "Network Services",
      "Computer Graphics",
      "Autonomous Robotic Systems",
      "Computer Vision",
      "Native Mobile Apps",
    ],
  },
];

export type TechCategory = {
  id: string;
  label: string;
  items: string[];
};

/** Skills by category — only items backed by projects, coursework, or the internship. */
export const technologies: TechCategory[] = [
  {
    id: "programming",
    label: "Programming",
    items: [
      "TypeScript",
      "JavaScript",
      "Python",
      "Java",
      "Kotlin",
      "C",
      "C#",
      "SQL",
      "MiniZinc",
    ],
  },
  {
    id: "frameworks",
    label: "Frameworks",
    items: [
      "Angular",
      "React",
      "Astro",
      "Fastify",
      "Node.js",
      "Three.js",
      "Jetpack Compose",
      "Unity",
    ],
  },
  {
    id: "databases",
    label: "Databases",
    items: ["PostgreSQL", "Drizzle ORM", "Firebase"],
  },
  {
    id: "tools",
    label: "Tools",
    items: [
      "Linux",
      "VirtualBox",
      "KVM",
      "Git",
      "Docker",
      "Jira",
      "Trello",
      "Figma",
      "CI/CD",
      "Tailwind CSS",
      "OpenAI API",
      "Cursor",
      "Claude Code",
    ],
  },
];

/** Soft skills as prose — backed by the internship recommendation and day-to-day work. */
export const softSkillsText =
  "I’m proactive when something breaks or a requirement shifts, and I look for a solution instead of waiting for instructions. I work well in a team: clear communication, pull requests, and code reviews. I stay organised with the work in front of me, and I keep learning — new tools, new stacks — when they help ship something real.";

export type SpokenLanguage = {
  name: string;
  level: string;
  /** 0–4 visual level for the progress marker */
  rank: number;
};

export const spokenLanguages: SpokenLanguage[] = [
  { name: "Spanish", level: "Native", rank: 4 },
  { name: "English", level: "C1 (approx.)", rank: 3 },
  { name: "German", level: "Beginner", rank: 1 },
  { name: "French", level: "Beginner", rank: 1 },
];

export const nav = [
  { href: "#about", label: "About me" },
  { href: "#story", label: "My story" },
  { href: "#technologies", label: "Technologies" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
] as const;
