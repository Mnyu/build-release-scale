import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import Heading from "./heading";
import { AGENTS } from "@/data";

const AiAgents = () => {
  return (
    <section id="ai-agents" className="h-screen snap-start">
      <div className="h-full flex flex-col gap-5">
        <Heading>AI Agents</Heading>
        <div className="w-full h-full max-w-5xl mx-auto border rounded-3xl">
          <Tabs defaultValue={AGENTS[0].id} className="h-full flex-row">
            <TabsList className="bg-background flex-col justify-start h-full py-15 px-5 border-r rounded-3xl">
              {AGENTS.map((agent) => (
                <div key={agent.id}>
                  <TabsTrigger
                    value={agent.id}
                    className="w-full py-2 px-5 data-[state=active]:bg-primary dark:data-[state=active]:bg-primary data-[state=active]:text-primary-foreground dark:data-[state=active]:text-primary-foreground dark:data-[state=active]:border-transparent"
                  >
                    {agent.name}
                  </TabsTrigger>
                </div>
              ))}
            </TabsList>
            {AGENTS.map((agent, index) => (
              <TabsContent key={agent.id} value={agent.id} className="py-3">
                <Tabs defaultValue={`demo${index + 1}`}>
                  <TabsList className="bg-background">
                    <div>
                      <TabsTrigger
                        value={`demo${index + 1}`}
                        className="w-full py-2 px-5 data-[state=active]:bg-primary dark:data-[state=active]:bg-primary data-[state=active]:text-primary-foreground dark:data-[state=active]:text-primary-foreground dark:data-[state=active]:border-transparent"
                      >
                        Demo
                      </TabsTrigger>
                    </div>
                    <div>
                      <TabsTrigger
                        value={`architecture${index + 1}`}
                        className="w-full py-2 px-5 data-[state=active]:bg-primary dark:data-[state=active]:bg-primary data-[state=active]:text-primary-foreground dark:data-[state=active]:text-primary-foreground dark:data-[state=active]:border-transparent"
                      >
                        Architecture
                      </TabsTrigger>
                    </div>
                    <div>
                      <TabsTrigger
                        value={`metrics${index + 1}`}
                        className="w-full py-2 px-5 data-[state=active]:bg-primary dark:data-[state=active]:bg-primary data-[state=active]:text-primary-foreground dark:data-[state=active]:text-primary-foreground dark:data-[state=active]:border-transparent"
                      >
                        Metrics
                      </TabsTrigger>
                    </div>
                  </TabsList>
                  <TabsContent value={`demo${index + 1}`} className="p-4">
                    Demo {index + 1}
                  </TabsContent>
                  <TabsContent value={`architecture${index + 1}`} className="p-4">
                    Architecture {index + 1}
                  </TabsContent>
                  <TabsContent value={`metrics${index + 1}`} className="p-4">
                    Metrics {index + 1}
                  </TabsContent>
                </Tabs>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
    // <section id="case-studies" className="h-screen snap-start">
    //   <h1 className="text-center pt-2">Case Studies</h1>
    //   <div className="flex justify-center items-center">
    //     <div className="relative rounded-xl aspect-video max-w-3xl">
    //         <video
    //           className="object-cover"
    //           src="/videos/video_1.mp4"
    //           autoPlay
    //           loop
    //           muted
    //           playsInline
    //           preload="metadata"
    //         />
    //       </div>
    //   </div>
    // </section>
  );
};
export default AiAgents;
