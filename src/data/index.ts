import { JSX } from "react";
import { IconProps, Icons } from "@/components/icons";

export type Navigation = {
  label: string;
  url: string;
  icon: (props: IconProps) => JSX.Element;
};
export type NagigationGroup = {
  [navigationKey: string]: Navigation;
};

export type NavigationData = {
  [groupName: string]: NagigationGroup;
};

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
