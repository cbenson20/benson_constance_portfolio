export type Resource = {
  title: string;
  icon: string;
  summary: string;
  link: string;
};

export const resources: Resource[] = [
  {
    title: "VS Code",
    icon: "/icons/vscode.png",
    summary:
      "My daily code editor. I use it with extensions like Prettier, ESLint, GitLens, and Docker for efficient development.",
    link: "https://code.visualstudio.com/",
  },
  {
    title: "GitHub",
    icon: "/icons/github.png",
    summary:
      "Version control, collaboration, and portfolio hosting. Also used for Actions CI/CD workflows and static hosting through GitHub Pages.",
    link: "https://github.com/",
  },
  {
    title: "Docker",
    icon: "/icons/docker.png",
    summary:
      "Used for containerizing applications, testing environments, and deploying production-ready builds. Essential for DevOps workflows.",
    link: "https://www.docker.com/",
  },
  {
    title: "Storybook",
    icon: "/icons/storybook.png",
    summary:
      "Modern tool for UI development. I use it to isolate, develop, and document reusable components in my libraries.",
    link: "https://storybook.js.org/",
  },
  {
    title: "LinkedIn Learning",
    icon: "/icons/linkedin.png",
    summary:
      "Go-to platform for expanding on technical skills through structured tutorials. Supplemented my learning during school.",
    link: "https://www.linkedin.com/learning/",
  },
  {
    title: "React Docs",
    icon: "/icons/react.png",
    summary:
      "My reference for everything React — from state management to hooks. Always up-to-date and detailed.",
    link: "https://react.dev/",
  },
];
