import { JSX } from "react";
import { IconProps } from "@/components/icons";

export interface Navigation {
  label: string;
  url: string;
  icon: (props: IconProps) => JSX.Element;
}
export interface NagigationGroup {
  [navigationKey: string]: Navigation;
}

export interface NavigationData {
  [groupName: string]: NagigationGroup;
}

export interface Technology {
  id: string;
  iconPath: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: Technology[];
}

export interface Agent {
  id: string;
  name: string;
}
