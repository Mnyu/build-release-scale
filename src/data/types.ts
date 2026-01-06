import { JSX } from "react";
import { IconProps } from "@/components/icons";

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

export type Technology = {
  id: string;
  iconPath: string;
};

export type Agent = {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  technologies: Technology[];
};
