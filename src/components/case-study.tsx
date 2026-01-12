import Link from "next/link";
import { BotMessageSquare } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Technology } from "@/data/types";

interface ProjectProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  technologies: Technology[];
}

const CaseStudy = ({ title, description, imageUrl, link, technologies }: ProjectProps) => {
  return (
    <Link href={link}>
      <Card className="h-60 xl:h-75 py-0 flex flex-col gap-10 hover:border-ring lg:hover:scale-101 lg:ease-in-out lg:duration-100">
        <CardContent className="px-0">
          {/* <img src={imageUrl} alt="agent" className="w-full h-25 rounded-t-xl object-cover" /> */}
          <div className="flex items-center justify-center mt-5">
            <BotMessageSquare size={70} />
          </div>
        </CardContent>
        <CardHeader className="px-3">
          <CardTitle>{title}</CardTitle>
          <CardDescription className="">
            <span className="text-sm">{description}</span>
            <h2 className="py-2 text-md font-semibold dark:text-secondary">Technologies</h2>
            <div className="flex gap-2">
              {technologies.map((tech) => (
                <img key={tech.id} src={tech.iconPath} alt="" width={25} height={40} />
              ))}
            </div>
          </CardDescription>
        </CardHeader>
        {/* <CardFooter className="p-1 flex justify-end items-center">
        <Link href="/" className="flex text-xs text-muted-foreground">
          View Details
          <ArrowRightIcon size={15} />
        </Link>
      </CardFooter> */}
      </Card>
    </Link>
  );
};
export default CaseStudy;
