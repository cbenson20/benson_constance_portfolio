export type Project = {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  techList: string[];
};

export const projects: Project[] = [
  {
    title: "UI Garden – Component Library",
    description:
      "A reusable React + TypeScript component library (buttons, cards, tables, inputs) with Storybook, tests, and Docker deployment.",
    imageUrl: "https://via.placeholder.com/400x200?text=UI+Garden",
    link: "https://github.com/cbenson20/benson_constance_ui_garden",
    techList: ["React", "TypeScript", "Styled Components", "Storybook", "Jest"]
  },
  {
    title: "Coding Assignment 13 – CI/CD Pipeline",
    description:
      "Added Husky pre-commit hooks and GitHub Actions CI workflow to enforce Prettier, ESLint, and tests before allowing code to build or deploy.",
    imageUrl: "https://via.placeholder.com/400x200?text=CI%2FCD",
    link: "https://github.com/cbenson20/benson_constance_coding_assignment13",
    techList: ["Husky", "Lint-Staged", "ESLint", "Prettier", "GitHub Actions"]
  },
  {
    title: "Ucheson E-Commerce Store",
    description:
      "An e-commerce platform for building materials business (for my father's company), including product listings and UI pages.",
    imageUrl: "https://via.placeholder.com/400x200?text=Ecommerce",
    link: "https://github.com/cbenson20/ecommerce_ucheson",
    techList: ["HTML", "CSS", "JavaScript", "Responsive Design"]
  },
  {
    title: "Nigeria Tourism CMS",
    description:
      "A content management system focused on Nigerian destinations, allowing admin to manage categories and tourism info.",
    imageUrl: "https://via.placeholder.com/400x200?text=Tourism+CMS",
    link: "https://github.com/cbenson20/nigeria-tourism",
    techList: ["PHP", "MySQL", "HTML", "CSS"]
  },
  {
    title: "Global Aviation Tracker",
    description:
      "A project exploring aviation data with flight information visualization and a global perspective.",
    imageUrl: "https://via.placeholder.com/400x200?text=Aviation+Tracker",
    link: "https://github.com/cbenson20/global-aviation-tracker",
    techList: ["HTML", "CSS", "JavaScript", "REST APIs"]
  },
  {
    title: "Project 3 – Website",
    description:
      "A web project built earlier in the program, focusing on form validation and user interaction with JavaScript.",
    imageUrl: "https://via.placeholder.com/400x200?text=Project+3",
    link: "https://github.com/cbenson20/project3-website",
    techList: ["JavaScript", "DOM", "Client-side Validation"]
  }
];
