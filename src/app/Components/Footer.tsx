"use client"
import {motion} from "framer-motion";
import Image from "next/image";
import Link from "next/link";


export default function Footer(){
    const skills = [

        { id: 1, name: "Figma", image: "/images/skills/figma.png" },
        { id: 2, name: "NextJS", image: "/images/skills/next.svg" },
        { id: 3, name: "Tailwind CSS", image: "/images/skills/tailwindcss.svg" },
        { id: 4, name: "JavaScript", image: "/images/skills/javascript.svg" },
        { id: 5, name: "Framer Motion", image: "/images/skills/framermotion.svg" },
    ];
                           return(
                               <>
                                 <footer className="dark:bg-black bg-white relative z-10 -mt-24 pb-12 pt-24">
                                     <div className=" max-w-7xl mx-5 xl:mx-auto">
                                         <motion.div
                                             initial={{y: 50}}
                                             whileInView={{y: 0,
                                                 transition: {
                                                     duration: 0.6,
                                                     type: "spring",
                                                     stiffness: 50,
                                                     damping: 15,
                                                 }
                                             }}
                                             viewport={{once: true}}
                                             className=" flex flex-col justify-center items-center relative">
                                             <h2 className=" text-[55px] drop-shadow-[0_1.2px_1.2px_#1aafb7] dark:drop-shadow-[0_1.2px_1.2px_#FDBC52] text-center font-bold text-white dark:text-black">Portfolio Made with</h2>
                                             <h2 className="absolute top-5  text-5xl text-center font-bold text-java dark:text-new-yellow">Portfolio Made with</h2>
                                         </motion.div>

                                         {/*    tech I use */}
                                         <div
                                             className="flex flex-wrap gap-5 justify-center items-center my-10 md:mx-20">
                                             {skills.map((skill) => (
                                                 <div
                                                     key={skill.id}
                                                     className="dark:bg-white bg-[#995FB6] w-full md:w-auto py-3 px-5 flex gap-x-4 items-center rounded-full hover:-translate-y-2 duration-500"
                                                 >
                                                     <Image src={skill.image} alt={skill.name} height={50}
                                                            width={50} />
                                                     <p className="text-xl text-black font-semibold">{skill.name}</p>
                                                 </div>
                                             ))}
                                         </div>


                                         <div className="flex items-center md:flex-row flex-col gap-y-2 justify-between !bg-[#995fb6] dark:!bg-new-yellow py-4 px-5 rounded-3xl mt-20">
                                                 <Link href="/"> <span className=" ml-2 font-normal text-lg md:text-xl text-white dark:text-black">ABDUL<span
                                                     className=" font-bold">TAWAB</span></span></Link>
                                                 <p className=" text-base font-medium text-black">Designed & Built by Tawab Malikx</p>
                                         </div>
                                     </div>
                                 </footer>
                               </>
                           )
}