import {TypewriterEffect, TypewriterEffectSmooth} from "@/components/ui/typewriter-effect";
import {Button} from "@nextui-org/button";
import { GoDownload } from "react-icons/go";
import BlurryBlob from "@/components/ui/BlurBob";
import Image from "next/image";
import Link from "next/link";
export default function Herosection(){
    const words = [
        {
            text: "Hello!",
        },
        {
            text: "I'm",
        },
        {
            text: "Abdul",
            className: "text-java dark:text-new-yellow",
        },
        {
            text: "Tawab",
            className: "text-java dark:text-new-yellow",
        },

    ];
          return(
              <>
                  <section className=" py-24 overflow-hidden ">
                      <div className=" max-w-7xl mx-5 xl:mx-auto relative ">

                          <div className=" flex gap-x-2 items-center justify-center relative z-10">
                              <h1 className=" text-5xl">👋</h1>
                              <TypewriterEffectSmooth words={words} />
                          </div>
                          <p className=" text-2xl text-black dark:text-white text-center mt-4 relative z-10">A <span className=" font-semibold">Front End Developer | Web Designer</span> </p>
                          <p className=" text-lg  text-black dark:text-white text-center mt-2 relative z-10">with <span className=" mx-2 border-2 border-[#2f2f2f] dark:border-[#2f2f2f] bg-[#241d0b] px-3 py-1 rounded-2xl dark:bg-[#241d0b] text-[#995FB6] dark:text-new-yellow ">2+ Years</span> Experience</p>
                          <div className=" flex justify-center items-center gap-x-5 mt-8 relative z-10">
                            <Link href="/images/abdultawab.pdf" target="_blank">
                            <Button  className=" text-[#995FB6] dark:text-new-yellow flex justify-center rounded-full text-lg bg-black dark:bg-[#241d0b] border-2 !py-2 h-auto !px-6 dark:border-new-yellow border-[#995FB6] items-center gap-x-2 font-semibold"><GoDownload className="dark:text-new-yellow text-[#995FB6] h-5 w-5" /> Resume</Button>

                            </Link>
                            <Link href="#contact">
                            <Button  className="h-auto bg-[#995FB6] dark:bg-new-yellow dark:hover:bg-new-yellow-700 text-black flex justify-center rounded-full text-lg  border-2 !py-2 !px-8 border-[#995FB6] dark:border-new-yellow items-center font-semibold gap-x-2">Hire Me</Button>

                            </Link>
                          </div>


                          <BlurryBlob
                              className="rounded-xl opacity-45"
                              firstBlobColor="dark:!bg-new-yellow-900"
                              secondBlobColor="bg-new-yellow dark:!bg-new-yellow"
                          />

                      {/*    last div*/}
                          <div className=" relative mt-20 md:mt-40">


                              {/*    list divs*/}
                              <div className=" relative  md:absolute top-0 z-10">
                                  {/*    1st div*/}
                                  <div
                                      className=" relative flex md:flex-row flex-col gap-y-3 justify-start gap-x-3 md:justify-between md:max-w-[50rem] lg:max-w-5xl mx-auto ml-0 lg:ml-[186px]">
                                      <div
                                          className=" flex items-center animate-wave2 justify-center gap-x-3 bg-[#995FB6] dark:bg-white py-2 md:py-5 px-5 md:px-7 rounded-full ">
                                          <Image src="/images/herosection/next.svg"
                                                 className=" h-[30px] w-[30px] md:h-[50px] md:w-[50px]" alt='icon'
                                                 height="50" width="50"/>
                                          <p className=" text-lg md:text-2xl font-semibold text-black">NextJS</p>
                                      </div>
                                      <div
                                          className=" flex items-center animate-wave justify-center gap-x-3 bg-[#995FB6] dark:bg-white rounded-full py-2 md:py-5 px-5 md:px-7 md:-mr-[60px] lg:mr-[100px] ">
                                          <Image src="/images/herosection/tailwindcss.svg"
                                                 className=" h-[30px] w-[30px] md:h-[50px] md:w-[50px]" alt='icon'
                                                 height="50" width="50"/>
                                          <p className=" text-lg md:text-2xl font-semibold text-black">Tailwind CSS</p>
                                      </div>
                                  </div>
                                  {/*    2nd div*/}
                                  <div
                                      className=" relative flex md:flex-row flex-col gap-y-3 justify-between md:max-w-[50rem] lg:max-w-7xl mx-auto ml-0 lg:ml-[60px] xl:ml-[100px] mt-3 md:mt-10">
                                      <div
                                          className=" flex items-center animate-wave2 justify-center gap-x-3 bg-[#995FB6] dark:bg-white py-2 md:py-5 px-5 md:px-7 rounded-full ">
                                          <Image src="/images/herosection/react.svg"
                                                 className=" h-[30px] w-[30px] md:h-[50px] md:w-[50px]" alt='icon'
                                                 height="50" width="50"/>
                                          <p className=" text-lg md:text-2xl font-semibold text-black">ReactJS</p>
                                      </div>
                                      <div
                                          className=" flex items-center animate-wave  justify-center gap-x-3 bg-[#995FB6] dark:bg-white rounded-full py-2 md:py-5 px-5 md:px-7  md:ml-[150px] lg:ml-[420px] xl:ml-[650px] ">
                                          <Image src="/images/herosection/javascript.svg"
                                                 className=" h-[30px] w-[30px] md:h-[50px] md:w-[50px]" alt='icon'
                                                 height="50" width="50"/>
                                          <p className=" text-lg md:text-2xl font-semibold text-black">JavaScript</p>
                                      </div>
                                  </div>
                                  {/*    3rd div*/}
                                  <div
                                      className=" relative flex md:flex-row flex-col gap-y-3 justify-between md:max-w-6xl mx-auto md:ml-[75px] lg:ml-[186px] mt-3 md:mt-10">
                                      <div
                                          className=" flex items-center animate-wave2 justify-center gap-x-3 bg-[#995FB6] dark:bg-white py-2 md:py-5 px-5 md:px-7 rounded-full ">
                                          <Image src="/images/herosection/bootstrap.svg" alt='icon'
                                                 className=" h-[30px] w-[30px] md:h-[50px] md:w-[50px]" height="50"
                                                 width="50"/>
                                          <p className=" text-lg md:text-2xl font-semibold text-black">Bootstrap</p>
                                      </div>
                                      <div
                                          className=" flex items-center animate-wave justify-center gap-x-3 bg-[#995FB6] dark:bg-white rounded-full py-2 md:py-5 px-5 md:px-7 md:ml-[150px] lg:mr-[150px] ">
                                          <Image src="/images/herosection/figma.svg" alt='icon'
                                                 className=" h-[30px] w-[30px] md:h-[50px] md:w-[50px]" height="50"
                                                 width="50"/>
                                          <p className=" text-lg md:text-2xl font-semibold text-black">Figma</p>
                                      </div>
                                  </div>
                              </div>
                              {/*    profile*/}
                              <div className=" flex justify-center items-center relative z-10 md:z-0 mt-10 md:mt-0">
                                  <Image src="/images/profile.png" className=" h-[400px] w-[350px] relative z-10"
                                         alt="profile" height={500} width={300}/>
                                  <div
                                      className=" shadow-[0_2.2px_20px_#1AAFB7] duration-500  dark:shadow-[0_2.2px_20px_#FDBC52] h-[500px] w-[500px] absolute top-0 rounded-full dark:bg-new-yellow bg-java"></div>
                              </div>
                          </div>


                      </div>

                  </section>
              </>
          )
}