export type WorkItem = {
  title: string;
  description: string;
  image: string;
  link: string;
  tech: string[];
};

export const work: WorkItem[] = [
  {
    title: "UI Garden Component Library & Build Pipeline",
    description:
      "A fully reusable and styled React component library built with TypeScript and Storybook, and a full CI pipeline using Husky, ESLint, Prettier, tests, Docker, and GitHub Actions.",
    image: "/images/ui-garden.png",
    link: "https://github.com/cbenson20/benson_constance_ui_garden",
    tech: [
      "React",
      "TypeScript",
      "Storybook",
      "Jest",
      "Style Components",
      "ESLint",
      "Prettier",
      "GitHub Actions",
      "Docker",
      "Nginx",
    ],
  },
  {
    title: "Ucheson & Sons E-commerce Platform",
    description:
      "An e-commerce concept site for my family’s building materials business, including product listings, cart flow, and requirements for online ordering and quotations.",
    image: "/images/ucheson-store.png",
    link: "https://github.com/cbenson20/ecommerce_ucheson",
    tech: ["Rails", "PostgreSQL", "ActiveAdmin", "Docker"],
  },
  {
    title: "Nigeria Tourism CMS",
    description:
      "Tourism content management system (CMS) designed to promote Nigerian destinations and cultural experiences. Admins can manage attractions, galleries, and content via a secured dashboard.",
    image: "/images/nigeria-tourism-cms.png",
    link: "https://github.com/cbenson20/nigeria_tourism_cms",
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Global Aviation Tracker",
    description:
      "A flight tracking web app that consumes public APIs to display aviation data, helping users explore flights and airport information in real time.",
    image: "/icons/global-aviation-tracker.png",
    link: "https://github.com/cbenson20/global-aviation-tracker",
    tech: ["React", "TypeScript", "REST APIs"],
  },
  {
    title: "Simple Store App",
    description:
      "A minimalist Rails store application with product listings, categories, and shopping cart functionality. Designed as a foundation for advanced e-commerce workflows.",
    image: "/images/simple-store.png",
    link: "https://github.com/cbenson20/simple_store",
    tech: ["Ruby on Rails", "ActiveRecord", "SQLite"],
  },
  {
    title: "Calculator App (SRS-Based)",
    description:
      "A basic calculator app developed from a formal Software Requirements Specification (SRS) document. Includes core arithmetic operations designed for classroom use.",
    image: "/images/calculator-app.png",
    link: "https://github.com/cbenson20/calculator_srs",
    tech: ["JavaScript", "HTML", "CSS"],
  },
];
