import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon, ExternalLinkIcon } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "./ui/card";
import { Icons } from "./icons";
import Heading from "./heading";
import { PROJECTS } from "@/data";

const Projects = () => {
  return (
    <section id="projects" className="snap-start">
      <div className="min-h-screen max-w-5xl mx-auto flex flex-col gap-5 px-5">
        <Heading>Projects</Heading>
        {PROJECTS.map((project) => (
          <div key={project.id} className="pt-5">
            <Card className="py-0 pt-3 gap-1 hover:border-ring">
              <CardHeader className="px-3">
                <div className="flex justify-between items-center">
                  <CardTitle className="w-full text-center">{project.title}</CardTitle>
                  <div className="flex items-center gap-3">
                    <Link href={project.link}>
                      <ExternalLinkIcon className="size-5" />
                    </Link>
                    <Link href={project.github}>
                      <Icons.Github className="size-5" />
                    </Link>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col items-center lg:flex-row gap-1">
                <Link href="" className="lg:hover:scale-110 lg:ease-in-out lg:duration-100">
                  <Image src={project.imageUrl} alt={project.title} width={400} height={400} />
                </Link>
                <div className="flex flex-col gap-2 px-5 lg:px-2">
                  <span className="text-sm text-foreground">{project.description}</span>
                  <span className="text-md dark:text-secondary">Technologies</span>
                  <div className="flex gap-2">
                    {project.technologies.map((tech) => (
                      <img key={tech.id} src={tech.iconPath} alt="" width={25} height={40} />
                    ))}
                    {/* <Image src="https://skillicons.dev/icons?i=ts" alt="js" width={40} height={40} /> */}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-1 flex justify-end items-center">
                <Link href="/" className="flex text-xs text-muted-foreground">
                  View Details
                  <ArrowRightIcon size={15} />
                </Link>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Projects;
