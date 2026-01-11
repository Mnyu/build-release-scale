import Link from "next/link";
import { ExternalLinkIcon } from "lucide-react";
import { Card, CardHeader } from "./ui/card";
import CaseStudy from "./case-study";
import { CASE_STUDIES } from "@/data";

const CaseStudies = () => {
  return (
    <section id="case-studies" className="snap-start">
      <div className="min-h-screen max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto flex flex-col gap-10">
        <h1 className="text-center p-2">Case Studies</h1>
        <div className="w-full px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
          {CASE_STUDIES.map(({ id, title, description, imageUrl, technologies }) => (
            <CaseStudy
              key={id}
              title={title}
              description={description}
              imageUrl={imageUrl}
              technologies={technologies}
            />
          ))}
          <Card className="h-60 xl:h-75">
            <CardHeader className="w-full h-full flex justify-center items-center">
              <Link
                href="/case-studies"
                className="h-full w-full flex items-center justify-center text-muted-foreground"
              >
                View All Case Studies &nbsp;
                <ExternalLinkIcon size={20} />
              </Link>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  );
};
export default CaseStudies;
