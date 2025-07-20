import About from "@/components/About";
import Education from "@/components/Education";
import Hero from "@/components/Hero"
import Project from "@/components/Project";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Hero />
      <About />
      <Skills />
      <Project />
      <Education />
    </div>
  );
}
