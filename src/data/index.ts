import { Icons } from "@/components/icons";
import { Agent, Navigation, NavigationData } from "./types";

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

export const AGENTS: Agent[] = [
  {
    id: "agent1",
    title: "Agent 1",
    description: "This is description of Agent 1",
    imageUrl: "/images/bot.svg",
    technologies: [
      { id: "agent-1-openai", iconPath: "/icons/openai.png" },
      { id: "agent-1-js", iconPath: "/icons/js.svg" },
    ],
  },
  {
    id: "agent2",
    title: "Agent 2",
    description: "This is description of Agent 2",
    imageUrl: "/images/bot.svg",
    technologies: [
      { id: "agent-2-openai", iconPath: "/icons/openai.png" },
      { id: "agent-2-js", iconPath: "/icons/js.svg" },
    ],
  },
  {
    id: "agent3",
    title: "Agent 3",
    description: "This is description of Agent 3",
    imageUrl: "/images/bot.svg",
    technologies: [
      { id: "agent-3-openai", iconPath: "/icons/openai.png" },
      { id: "agent-3-js", iconPath: "/icons/js.svg" },
    ],
  },
  {
    id: "agent4",
    title: "Agent 4",
    description: "This is description of Agent 4",
    imageUrl: "/images/bot.svg",
    technologies: [
      { id: "agent-4-openai", iconPath: "/icons/openai.png" },
      { id: "agent-4-js", iconPath: "/icons/js.svg" },
    ],
  },
  {
    id: "agent5",
    title: "Agent 5",
    description: "This is description of Agent 5",
    imageUrl: "/images/bot.svg",
    technologies: [
      { id: "agent-5-openai", iconPath: "/icons/openai.png" },
      { id: "agent-5-js", iconPath: "/icons/js.svg" },
    ],
  },
  {
    id: "agent6",
    title: "Agent 6",
    description: "This is description of Agent 6",
    imageUrl: "/images/bot.svg",
    technologies: [
      { id: "agent-6-openai", iconPath: "/icons/openai.png" },
      { id: "agent-6-js", iconPath: "/icons/js.svg" },
    ],
  },
];
