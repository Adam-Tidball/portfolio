// All site copy lives here. Edit this file to update the portfolio; the components only handle layout.

export const profile = {
  name: "Adam Tidball",
  headline: "Data Engineer at OpenSport",
  intro:
    "Software Engineering grad from the University of Victoria, now working with data at OpenSport. I studied data mining and machine learning, and I enjoy building things that turn data into something useful.",
  email: "abtidball@gmail.com",
  github: "https://github.com/Adam-Tidball",
  linkedin: "https://www.linkedin.com/in/adam-tidball-146117202/",
  resume: "/resumes/adam-tidball-resume.pdf",
};

export const about = [
  "I got into software for the problem-solving, and data engineering has kept that going. Before OpenSport, my co-ops took me through QA at a mining tech company, IT at a pension fund investment firm, and running a project of my own.",
  "Away from the keyboard you'll find me playing hockey, golf or chess.",
];

export type Job = {
  role: string;
  company: string;
  location?: string;
  period?: string;
  points: string[];
};

export const experience: Job[] = [
  {
    role: "Data Engineer",
    company: "OpenSport",
    // TODO(Adam): add start date, e.g. "Sep 2024 – Present", and 2–3 bullet points.
    points: [],
  },
  {
    role: "Technology Department Co-op",
    company: "BC Investment Management Corp.",
    location: "Victoria, BC",
    period: "Jan 2023 – Apr 2023",
    points: [
      "Solved user technology and configuration issues alongside the service desk team.",
      "Worked with third-party vendors to resolve escalated problems.",
    ],
  },
  {
    role: "Founder, Entrepreneurial Co-op",
    company: "NFTs for Charity",
    location: "Vancouver, BC",
    period: "May 2022 – Aug 2022",
    points: [
      "Planned and ran a charity NFT project with a board of advisors, using backward planning and Gantt charts.",
      "Designed and deployed the project website with HTML, CSS and JavaScript.",
    ],
  },
  {
    role: "Software Engineering Co-op",
    company: "Wenco International Mining Systems",
    location: "Richmond, BC",
    period: "May 2021 – Dec 2021",
    points: [
      "Tested the fleet management system manually and wrote automated test cases.",
      "Wrote and maintained the Wenco Message Bus documentation for internal and external system messages.",
    ],
  },
];

export const education = {
  degree: "Bachelor of Software Engineering",
  school: "University of Victoria",
  period: "2019 – 2024",
  note: "Focus on data mining, AI and machine learning. PitchIt Competition winner (2022).",
};

export const skills: { group: string; items: string[] }[] = [
  { group: "Languages", items: ["Python", "SQL", "C", "C++", "R", "JavaScript"] },
  { group: "Data & ML", items: ["PostgreSQL", "PyTorch", "Vector embeddings"] },
  { group: "Tools", items: ["Docker", "FastAPI", "Next.js", "Git"] },
];

export type ProjectImage = { src: string; alt: string; caption: string; width: number; height: number };

export type Project = {
  title: string;
  summary: string;
  points: string[];
  tags: string[];
  links: { label: string; href: string; kind: "github" | "web" }[];
  images: ProjectImage[];
};

export const projects: Project[] = [
  {
    title: "UVic Marketplace Recommender",
    summary:
      "Recommendation service for a student marketplace, built on a 12-person team using Agile Scrum.",
    points: [
      "Owned the recommender: item descriptions are embedded as 768-dimension vectors with PyTorch.",
      "Each user gets a “taste vector” from a weighted sum of the items they've interacted with, so likes pull it closer and dislikes push it away.",
      "Recommendations are the nearest items to that vector, served in real time.",
      "The wider app ran as containerized microservices on Kubernetes, with a FastAPI backend and PostgreSQL.",
    ],
    tags: ["Python", "PyTorch", "FastAPI", "PostgreSQL", "Docker", "Kubernetes"],
    links: [{ label: "Repository", href: "https://github.com/matt-lebl/uvic-marketplace", kind: "github" }],
    images: [
      {
        src: "/marketplace/recommender_flow_v2.JPG",
        alt: "Diagram of user interactions weighting item vectors into a user taste vector",
        caption: "How a user's taste vector is built",
        width: 1450,
        height: 607,
      },
      {
        src: "/marketplace/architecture_diagram.PNG",
        alt: "Architecture diagram of the Kubernetes cluster with frontend, FastAPI backend, recommender service and PostgreSQL",
        caption: "System architecture",
        width: 909,
        height: 875,
      },
      {
        src: "/marketplace/UI_rec3.PNG",
        alt: "Marketplace page showing a list of recommended listings",
        caption: "Recommendations in the app",
        width: 1920,
        height: 1026,
      },
    ],
  },
  {
    title: "Huffman Coding Optimization",
    summary: "A Huffman encoder and decoder in C, tuned for speed at the C and assembly level.",
    points: [
      "Wrote the encoder and decoder in C.",
      "Sped up the hot paths with low-level tricks like bit shifting.",
      "Went past the C source and optimized the compiled assembly too.",
    ],
    tags: ["C", "Assembly", "Performance"],
    links: [],
    images: [],
  },
  {
    title: "NFTs for Charity",
    summary:
      "A 5,000-piece generative art collection meant to raise money for charity. It never launched, but I learned a lot building it.",
    points: [
      "Generated 5,000 unique bears by layering commissioned art components, each trait with its own rarity weight.",
      "Ran the project end to end: planning, working with the artist and advisors, and building the website.",
    ],
    tags: ["Generative art", "Web", "Project management"],
    links: [],
    images: [
      {
        src: "/NFTs/NFT_Bears_Breakdown.jpeg",
        alt: "Grid of layered art components with the rarity percentage of each trait",
        caption: "Art layers and trait rarities",
        width: 594,
        height: 640,
      },
      {
        src: "/NFTs/4983.webp",
        alt: "Example generated bear wearing a hat and a green shirt",
        caption: "One of the 5,000 bears",
        width: 800,
        height: 800,
      },
    ],
  },
];
