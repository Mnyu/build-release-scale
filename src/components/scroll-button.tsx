"use client";
import { scrollTo } from "@/hooks/useScroll";
import { Button } from "./ui/button";

interface Props {
  scrollToId: string;
  variant?: "default" | "link" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined;
  children?: React.ReactNode;
}

const ScrollButton = ({ children, scrollToId, variant = "default" }: Props) => {
  return (
    <Button
      variant={variant}
      onClick={() => {
        scrollTo(scrollToId);
      }}
    >
      {children}
    </Button>
  );
};
export default ScrollButton;
