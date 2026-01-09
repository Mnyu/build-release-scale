import Projects from "@/components/projects";
import Experience from "@/components/experience";
import Home from "@/components/home";
import Sidebar from "@/components/sidebar";
import AiAgents from "@/components/ai-agents";

const Page = () => {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <Sidebar />
      <Home />
      <Experience />
      <AiAgents />
      <section id="case-studies" className="h-screen snap-start">
        <h1 className="text-center pt-2">Case Studies</h1>
      </section>
      <Projects />
    </main>
  );
};

export default Page;
