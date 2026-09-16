export const profile = {
  name: "Sarawit Kraukham",
  nickname: "Bom",
  role: "Software Engineer",
  location: "Bangkok, Thailand",
  linkedin: "https://www.linkedin.com/in/sarawit-kraukham/",
  // Set to an image in public/ when a real portrait is available.
  portrait: null as string | null,
  summary:
    "From banking APIs to real-time web experiences, I turn practical problems into working software. My experience spans backend development, internal tools, and helping others take their first steps in code.",
};

export type ProjectImage = { src: string; alt: string; caption: string };
export type Project = {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  contribution: string;
  tags: string[];
  images: ProjectImage[];
  links: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    id: "internal-tools",
    title: "From scripts to a simpler workflow.",
    category: "Internal web tools",
    year: "2025",
    description:
      "A side project during my ttb spark internship: turning a workflow that relied on running Python scripts into a web-based tool for the team.",
    contribution:
      "Helped move script-driven tasks into a web UI, alongside contributions to REST APIs, activity logs, and Auto Loan Car APIs for the Tablet Onboarding Platform team.",
    tags: ["Web application", "Python workflows", "REST APIs"],
    images: [
      {
        src: "/images/tools-preview.svg",
        alt: "Illustrative blue dashboard layout for the internal tools project; not an actual product screenshot",
        caption: "Dashboard · image template",
      },
      {
        src: "/images/workflow-preview.svg",
        alt: "Illustrative workflow diagram from script to web interface; not an actual product screenshot",
        caption: "Workflow · image template",
      },
    ],
    links: [{ label: "Related experience", href: "/experiences#ttb-spark" }],
  },
  {
    id: "starter-pack",
    title: "A place to connect, in real time.",
    category: "IT Starter Pack",
    year: "2024",
    description:
      "A web starter pack and event landing page with a real-time chat board, built for the IT Starter Pack event at KMUTT.",
    contribution:
      "Developed the landing page and Socket.io chat board, and supported implementation, setup, and technical coordination as part of the event team.",
    tags: ["TypeScript", "Socket.io", "Real-time web"],
    images: [
      {
        src: "/images/community-preview.svg",
        alt: "Illustrative event landing page template, not a screenshot of IT Starter Pack",
        caption: "Landing page · image template",
      },
      {
        src: "/images/chat-preview.svg",
        alt: "Illustrative real-time chat layout, not a screenshot of IT Starter Pack",
        caption: "Chat board · image template",
      },
    ],
    links: [{ label: "Related experience", href: "/experiences#starter-pack" }],
  },
  {
    id: "among-ducks",
    title: "Learning to build, one duck at a time.",
    category: "Among Ducks",
    year: "2023",
    description:
      "A 2D game built with Phaser 3 and Node.js to teach game development during SIT Hello World Goose at KMUTT.",
    contribution:
      "Contributed maps, gameplay logic, animation, and optimization. Led sessions on Phaser basics, game logic, map and object design, and performance.",
    tags: ["Phaser 3", "Node.js", "Game development"],
    images: [
      {
        src: "/images/game-preview.svg",
        alt: "Illustrative pixel-art game map template, not an actual Among Ducks screenshot",
        caption: "Game world · image template",
      },
      {
        src: "/images/workflow-preview.svg",
        alt: "Illustrative development workflow template; replace with an Among Ducks workshop image",
        caption: "Workshop · image template",
      },
    ],
    links: [{ label: "Related experience", href: "/experiences#hello-world" }],
  },
];

export type Experience = {
  id: string;
  company: string;
  mark: string;
  role: string;
  period: string;
  type: string;
  location: string;
  current?: boolean;
  description: string;
  highlights: string[];
  tags: string[];
};

export const experiences: Experience[] = [
  {
    id: "ttb-bank",
    company: "ttb bank",
    mark: "ttb",
    role: "Software Engineer",
    period: "Sep 2026 — Present",
    type: "Internship",
    location: "Bangkok · On-site",
    current: true,
    description: "Currently a Software Engineer intern at ttb bank in Bangkok.",
    highlights: [],
    tags: [],
  },
  {
    id: "ttb-spark",
    company: "ttb spark",
    mark: "ttb",
    role: "Software Engineer",
    period: "Jan 2025 — Jul 2025",
    type: "Internship",
    location: "Bangkok · Hybrid",
    description:
      "Contributed to the TOP (Tablet Onboarding Platform) team, supporting backend services and tools that solve day-to-day team needs.",
    highlights: [
      "Supported implementation of REST APIs, activity logs, and Auto Loan Car APIs.",
      "Worked on a side project that moved Python script workflows into a web UI.",
    ],
    tags: ["REST APIs", "Microservices", "Agile", "Internal tools"],
  },
  {
    id: "starter-pack",
    company: "King Mongkut’s University of Technology Thonburi",
    mark: "K",
    role: "Web Developer & Technical Team",
    period: "Jul 2024 — Aug 2024",
    type: "IT Starter Pack 2024 · Seasonal",
    location: "Bangkok · On-site",
    description:
      "Built for a community event, with real-time interaction at its heart.",
    highlights: [
      "Developed a starter landing page with a chat board using Socket.io.",
      "Supported implementation, setup, and technical coordination for the event.",
    ],
    tags: ["TypeScript", "Socket.io", "Teamwork"],
  },
  {
    id: "hello-world",
    company: "King Mongkut’s University of Technology Thonburi",
    mark: "K",
    role: "Game Development Speaker",
    period: "Nov 2023 — Dec 2023",
    type: "SIT Hello World Goose 2023 · Seasonal",
    location: "Bangkok · On-site",
    description:
      "Helped make game development approachable through Among Ducks, a hands-on 2D game project.",
    highlights: [
      "Contributed map implementation, gameplay logic, animation, and optimization using Phaser 3 and Node.js.",
      "Led sessions on Phaser functions, game logic, map and object design, and performance optimization.",
    ],
    tags: ["Phaser 3", "Node.js", "Teaching", "Game development"],
  },
];
