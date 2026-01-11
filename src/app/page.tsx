import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Home from "@/components/home";
import Sidebar from "@/components/sidebar";
import AiAgents from "@/components/ai-agents";
import CaseStudies from "@/components/case-studies";

const Page = () => {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <Sidebar />
      <Home />
      <Experience />
      <AiAgents />
      <CaseStudies />
      <Projects />
    </main>
  );
};

export default Page;
