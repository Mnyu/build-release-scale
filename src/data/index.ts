import { Icons } from "@/components/icons";
import { CaseStudy, Navigation, NavigationData, Agent } from "./types";

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
