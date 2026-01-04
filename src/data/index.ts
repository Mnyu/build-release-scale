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
      icon: Icons.home,
    },
    blog: {
      label: "Blog",
      url: "/",
      icon: Icons.edit,
    },
  },
  social: {
    gitHub: {
      label: "GitHub",
      url: "/",
      icon: Icons.github,
    },
    linkedIn: {
      label: "LinkedIn",
      url: "/",
      icon: Icons.linkedin,
    },
    x: {
      label: "X",
      url: "/",
      icon: Icons.x,
    },
    email: {
      label: "Send Email",
      url: "/",
      icon: Icons.email,
    },
  },
};
