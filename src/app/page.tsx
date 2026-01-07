import AiAgents from "@/components/ai-agents";
import Experience from "@/components/experience";
import Home from "@/components/home";
import Sidebar from "@/components/sidebar";

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
      <section id="projects" className="h-screen snap-start">
        <h1 className="text-center pt-2">Projects</h1>
      </section>
    </main>
  );
};

export default Page;
