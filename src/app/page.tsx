import Herosection from "@/app/Components/Herosection";
import About from "@/app/Components/About";
import Process from "@/app/Components/Process";
import Project from "@/app/Components/Project";
import Experience from "@/app/Components/Experience";
import Skills from "@/app/Components/Skills";
import Education from "@/app/Components/Education";
import Contact from "@/app/Components/Contact";

export default function Home() {
  return (
    <>
      <Herosection />
      <About />
      <Process />
      <Project />
      <Experience />
      <Skills />
      <Education />
      <Contact />
    </>
  );
}
