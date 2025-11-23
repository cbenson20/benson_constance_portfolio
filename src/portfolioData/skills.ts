export type Skills = {
  description: string;
  languages: string[];
  tools: string[];
  cloudPlatforms: string[];
  architectures: string[];
  testingAutomation: string[];
  collaboration: string[];
};

export const skills: Skills = {
  description:
    "I work across the full stack, from front-end interfaces to back-end APIs, deployment, and automation. I enjoy taking an idea from rough requirements to a working, tested, and deployed solution.",

  languages: [
    "JavaScript (React.js, TypeScript)",
    "C#",
    "Java",
    "Python",
    "HTML5",
    "CSS3",
    ".NET Core",
    "Node.js",
    "Express",
  ],
  tools: [
    "Docker",
    "Git",
    "GitHub Actions",
    "Jenkins",
    "GitLab CI/CD",
    "VS Code",
    "Visual Studio",
    "Postman",
    "Insomnia",
  ],
  cloudPlatforms: ["AWS", "Azure", "Vercel", "Nginx"],
  architectures: [
    "REST APIs",
    "Microservices",
    "MVC",
    "Clean Architecture",
    "Layered Architecture",
  ],
  testingAutomation: [
    "Unit Testing (Jest, Mocha)",
    "Integration Testing",
    "Selenium",
    "Power Automate",
    "Pandas",
  ],
  collaboration: ["Agile / Scrum", "Microsoft 365", "Lucidchart", "Visio"],
};
