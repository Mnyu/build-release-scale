import Link from "next/link";
import { ArrowRight, BotMessageSquare } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Technology } from "@/data/types";

interface ProjectProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: Technology[];
}

const CaseStudy = ({ title, description, imageUrl, technologies }: ProjectProps) => {
  return (
    <Card className="h-60 xl:h-75 py-0 gap-3 flex flex-col justify-between">
      <CardContent className="px-0">
        {/* <img src={imageUrl} alt="agent" className="w-full h-25 rounded-t-xl object-cover" /> */}
        <div className="flex items-center justify-center mt-5">
          <BotMessageSquare size={60} />
        </div>
      </CardContent>
      <CardHeader className="px-3">
        <CardTitle>{title}</CardTitle>
        <CardDescription className="">
          <span className="text-xs">{description}</span>
          <h1 className="py-2 font-semibold">Technologies</h1>
          <div className="flex gap-2">
            {technologies.map((tech) => (
              <img key={tech.id} src={tech.iconPath} alt="" width={25} height={40} />
            ))}
          </div>
        </CardDescription>
      </CardHeader>
      <CardFooter className="p-1 flex justify-end items-center">
        <Link href="/" className="flex text-xs text-muted-foreground">
          View Details
          <ArrowRight size={15} />
        </Link>
      </CardFooter>
    </Card>
  );
};
export default CaseStudy;
