// import Image from "next/image";

import { NextUIProvider } from "@nextui-org/react";
import Herosection from "@/app/Components/Herosection";
import About from "@/app/Components/About";
import Education from "@/app/Components/Education";
import Experience from "@/app/Components/Experience";
import Skills from "@/app/Components/Skills";
import Project from "./Components/Project";
import Checkout from "./Components/Checkout";
import Connect from "./Components/Connect";
import Contact from "./Components/Contact";
export default function Home() {
  return (
    <>
      <NextUIProvider>
        <Herosection />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Project />
        <Checkout />
        <Connect />
        <Contact/>
      </NextUIProvider>
    </>
  );
}
