import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Project from "./project";
import { PROJECTS } from "@/data";

const Projects = () => {
  return (
    <section id="projects" className="snap-start">
      <div className="min-h-screen">
        <h1 className="text-center p-2">Projects</h1>
        <div className="max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {PROJECTS.map(({ id, title, description, imageUrl, technologies }) => (
            <Project key={id} title={title} description={description} imageUrl={imageUrl} technologies={technologies} />
          ))}
          <Link href="/" className="col-span-1 md:col-span-2 lg:col-span-3 flex items-center justify-end text-xs">
            View More
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Projects;
