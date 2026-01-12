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

export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  technologies: Technology[];
}

export interface Agent {
  id: string;
  name: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  github: string;
  technologies: Technology[];
}
