// import Image from "next/image";
import Header from "../app/Components/Header";
import {NextUIProvider} from "@nextui-org/react";
import Herosection from "@/app/Components/Herosection";
import About from "@/app/Components/About";
import Education from "@/app/Components/Education";
import Experience from "@/app/Components/Experience";
import Skills from "@/app/Components/Skills";
import Project from "./Components/Project";
import Checkout from "./Components/Checkout";
// import PhotoCompare from "./Components/Swipe";

export default function Home() {
  return (
    <>
          <NextUIProvider>
              <Header/>
              <Herosection/>
              <About/>
              <Education/>
              <Experience/>
              <Skills/>
              <Project/>
              <Checkout/>
              {/* <div className="flex justify-center">
              <PhotoCompare  originalImg="/images/orignal.jpeg"
        avatarImg="/images/avatar.jpeg" />
              </div> */}
              
          </NextUIProvider>

    </>
  );
}
