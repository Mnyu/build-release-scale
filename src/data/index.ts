import { Icons } from "@/components/icons";
import { Project, Navigation, NavigationData, Agent } from "./types";

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

export const PROJECTS: Project[] = [
  {
    id: "project1",
    title: "Project 1",
    description: "This is description of Project 1",
    imageUrl: "/images/bot.svg",
    technologies: [
      { id: "project-1-openai", iconPath: "/icons/openai.png" },
      { id: "project-1-js", iconPath: "/icons/js.svg" },
    ],
  },
  {
    id: "project2",
    title: "Project 2",
    description: "This is description of Project 2",
    imageUrl: "/images/bot.svg",
    technologies: [
      { id: "project-2-openai", iconPath: "/icons/openai.png" },
      { id: "project-2-js", iconPath: "/icons/js.svg" },
    ],
  },
  {
    id: "project3",
    title: "Project 3",
    description: "This is description of Project 3",
    imageUrl: "/images/bot.svg",
    technologies: [
      { id: "project-3-openai", iconPath: "/icons/openai.png" },
      { id: "project-3-js", iconPath: "/icons/js.svg" },
    ],
  },
  {
    id: "project4",
    title: "Project 4",
    description: "This is description of Project 4",
    imageUrl: "/images/bot.svg",
    technologies: [
      { id: "project-4-openai", iconPath: "/icons/openai.png" },
      { id: "project-4-js", iconPath: "/icons/js.svg" },
    ],
  },
  {
    id: "project5",
    title: "Project 5",
    description: "This is description of Project 5",
    imageUrl: "/images/bot.svg",
    technologies: [
      { id: "project-5-openai", iconPath: "/icons/openai.png" },
      { id: "project-5-js", iconPath: "/icons/js.svg" },
    ],
  },
  {
    id: "project6",
    title: "Project 6",
    description: "This is description of Project 6",
    imageUrl: "/images/bot.svg",
    technologies: [
      { id: "project-6-openai", iconPath: "/icons/openai.png" },
      { id: "project-6-js", iconPath: "/icons/js.svg" },
    ],
  },
];

export const AGENTS: Agent[] = [
  { id: "agent1", name: "Agent 1" },
  { id: "agent2", name: "Agent 2" },
  { id: "agent3", name: "Agent 3" },
];
