export type Resource = {
  title: string;
  iconUrl: string;
  summary: string;
  link: string;
};

export const resources: Resource[] = [
  {
    title: "React Docs",
    iconUrl: "https://via.placeholder.com/100x100?text=React",
    summary: "The official React documentation — helped me build UIs efficiently.",
    link: "https://react.dev/"
  },
  {
    title: "Storybook",
    iconUrl: "https://via.placeholder.com/100x100?text=SB",
    summary: "Visual tool for building and testing UI components.",
    link: "https://storybook.js.org/"
  },
  {
    title: "FreeCodeCamp",
    iconUrl: "https://via.placeholder.com/100x100?text=FCC",
    summary: "A big resource for improving frontend and backend skills.",
    link: "https://freecodecamp.org"
  }
];
