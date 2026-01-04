import Intro from "@/components/intro";
import ScrollButton from "@/components/scroll-button";

const Home = () => {
  return (
    <main className="h-screen overflow-y-scroll snap-y snap-mandatory">
      <Intro />
      <section id="projects" className="h-screen snap-start">
        Projects
        <div className="pt-4">
          <ScrollButton scrollToId="intro" variant="outline">
            Intro
          </ScrollButton>
        </div>
        <div className="pt-4">
          <ScrollButton scrollToId="casestudies" variant="outline">
            Case Studies
          </ScrollButton>
        </div>
      </section>
      <section id="casestudies" className="h-screen snap-start">
        Case Studies
        <div className="pt-4">
          <ScrollButton scrollToId="intro" variant="outline">
            Intro
          </ScrollButton>
        </div>
        <div className="pt-4">
          <ScrollButton scrollToId="projects" variant="outline">
            Projects
          </ScrollButton>
        </div>
      </section>
    </main>
  );
};

export default Home;
