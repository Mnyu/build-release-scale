import { Icons } from "@/components/icons";
import { CaseStudy, Navigation, NavigationData, Agent, Project } from "./types";

export const NAVIGATION_DATA: NavigationData = {
  internal: {
    home: {
      label: "Home",
      url: "/",
      icon: Icons.Home,
    },
    blog: {
      label: "Blog",
      url: "/",
      icon: Icons.Edit,
    },
  },
  social: {
    gitHub: {
      label: "GitHub",
      url: "/",
      icon: Icons.Github,
    },
    linkedIn: {
      label: "LinkedIn",
      url: "/",
      icon: Icons.Linkedin,
    },
    x: {
      label: "X",
      url: "/",
      icon: Icons.X,
    },
    email: {
      label: "Send Email",
      url: "/",
      icon: Icons.Email,
    },
  },
};

export const NAVIGATION_ITEMS: Navigation[] = [
  { label: "Home", url: "/#home", icon: Icons.Home },
  { label: "Experience", url: "/#experience", icon: Icons.IdCard },
  { label: "AI Agents", url: "/#ai-agents", icon: Icons.Bot },
  { label: "Case Studies", url: "/#case-studies", icon: Icons.Rocket },
  { label: "Projects", url: "/#projects", icon: Icons.SquareCode },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "casestudy1",
    title: "Case Study 1",
    description: "This is description of Case Study 1",
    imageUrl: "/images/bot.svg",
    technologies: [
      { id: "casestudy-1-ai", iconPath: "https://skillicons.dev/icons?i=ai" },
      { id: "casestudy-1-js", iconPath: "https://skillicons.dev/icons?i=ts" },
    ],
  },
  {
    id: "casestudy2",
    title: "Case Study 2",
    description: "This is description of Case Study 2",
    imageUrl: "/images/bot.svg",
    technologies: [
      { id: "casestudy-2-ai", iconPath: "https://skillicons.dev/icons?i=ai" },
      { id: "casestudy-2-js", iconPath: "https://skillicons.dev/icons?i=ts" },
    ],
  },
  {
    id: "casestudy3",
    title: "Case Study 3",
    description: "This is description of Case Study 3",
    imageUrl: "/images/bot.svg",
    technologies: [
      { id: "casestudy-3-ai", iconPath: "https://skillicons.dev/icons?i=ai" },
      { id: "casestudy-3-js", iconPath: "https://skillicons.dev/icons?i=ts" },
    ],
  },
  {
    id: "casestudy4",
    title: "Case Study 4",
    description: "This is description of Case Study 4",
    imageUrl: "/images/bot.svg",
    technologies: [
      { id: "casestudy-4-ai", iconPath: "https://skillicons.dev/icons?i=ai" },
      { id: "casestudy-4-js", iconPath: "https://skillicons.dev/icons?i=ts" },
    ],
  },
  {
    id: "casestudy5",
    title: "Case Study 5",
    description: "This is description of Case Study 5",
    imageUrl: "/images/bot.svg",
    technologies: [
      { id: "casestudy-5-ai", iconPath: "https://skillicons.dev/icons?i=ai" },
      { id: "casestudy-5-js", iconPath: "https://skillicons.dev/icons?i=ts" },
    ],
  },
];

export const AGENTS: Agent[] = [
  { id: "agent1", name: "Agent 1" },
  { id: "agent2", name: "Agent 2" },
  { id: "agent3", name: "Agent 3" },
];

export const PROJECTS: Project[] = [
  {
    id: "chayanai",
    title: "CHAYAN(चयन) AI",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis numquam ex odit? Voluptate consequatur quod sunt dolores ipsa, quibusdam beatae odit numquam fugiat harum quo quasi aperiam. At accusantium eos.",
    imageUrl: "/images/project1.png",
    technologies: [
      { id: "chayanaipy", iconPath: "https://skillicons.dev/icons?i=py" },
      { id: "chayanaireact", iconPath: "https://skillicons.dev/icons?i=react" },
      { id: "chayanaijs", iconPath: "https://skillicons.dev/icons?i=js" },
      { id: "chayanaihtml", iconPath: "https://skillicons.dev/icons?i=html" },
      { id: "chayanaicss", iconPath: "https://skillicons.dev/icons?i=css" },
    ],
    link: "/",
    github: "/",
  },
  {
    id: "vibely",
    title: "VIBELY",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis numquam ex odit? Voluptate consequatur quod sunt dolores ipsa, quibusdam beatae odit numquam fugiat harum quo quasi aperiam. At accusantium eos.",
    imageUrl: "/images/project1.png",
    technologies: [
      { id: "vibelynextjs", iconPath: "https://skillicons.dev/icons?i=nextjs" },
      { id: "vibelyts", iconPath: "https://skillicons.dev/icons?i=ts" },
    ],
    link: "/",
    github: "/",
  },
  {
    id: "project3",
    title: "PROJECT 3",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis numquam ex odit? Voluptate consequatur quod sunt dolores ipsa, quibusdam beatae odit numquam fugiat harum quo quasi aperiam. At accusantium eos.",
    imageUrl: "/images/project1.png",
    technologies: [
      { id: "vibelyts", iconPath: "https://skillicons.dev/icons?i=ts" },
      { id: "vibelyreact", iconPath: "https://skillicons.dev/icons?i=react" },
      { id: "vibelyhtml", iconPath: "https://skillicons.dev/icons?i=html" },
      { id: "vibelycss", iconPath: "https://skillicons.dev/icons?i=css" },
    ],
    link: "/",
    github: "/",
  },
];
