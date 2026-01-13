import React from "react";
import { cn } from "@/lib/utils";

const Heading = ({ children, className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h2
      className={cn(
        "text-foreground text-3xl leading-tight font-bold tracking-tight text-pretty text-center pt-3",
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  );
};
export default Heading;
