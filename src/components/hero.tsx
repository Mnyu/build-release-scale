import Link from "next/link";
import { cn } from "@/lib/utils";
import { Dock, DockIcon } from "./ui/dock";
import { buttonVariants } from "./ui/button";
import Navbar from "./navbar";
import ScrollButton from "./scroll-button";
import HeroTypewriter from "./hero-typewriter";
import { NAVIGATION_DATA } from "@/data";

const Hero = () => {
  return (
    <section
      id="intro"
      className="h-screen snap-start bg-[url('/images/hero.png')] bg-no-repeat bg-cover bg-bottom w-full h-screen"
    >
      <div className="w-full h-full flex flex-col items-start">
        <Navbar />
        <div className=" w-full h-full flex flex-col justify-between">
          <div className="pt-15 pl-40">
            <h1 className="text-white text-7xl font-bold">Abhimanyu Gupta</h1>
            <div className="pt-4">
              <HeroTypewriter />
            </div>
            <div className="pt-4">
              <ScrollButton scrollToId="projects" variant="secondary">
                Projects
              </ScrollButton>
            </div>
            <div className="pt-4">
              <ScrollButton scrollToId="casestudies" variant="secondary">
                Case Studies
              </ScrollButton>
            </div>
          </div>
          <div className="w-full flex flex-col justify-end">
            <Dock direction="bottom" className="">
              {Object.entries(NAVIGATION_DATA).map(
                ([groupName, group]) =>
                  Object.entries(group).map(([navigationKey, navigation]) => (
                    <DockIcon key={navigationKey}>
                      <Link
                        href={navigation.url}
                        aria-label={navigation.label}
                        className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "size-12 rounded-full")}
                      >
                        <navigation.icon className="size-4" />
                      </Link>
                    </DockIcon>
                  )),
                // <Separator orientation="vertical" className="h-full" />,
              )}
            </Dock>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
