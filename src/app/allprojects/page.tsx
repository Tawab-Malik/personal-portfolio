"use client";
import Link from "next/link";
import Image from "next/image";
import { HiLink } from "react-icons/hi";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/react";
import Projects from "@/components/Projects.json"
export default function AllProjects() {
   

    const skills = [
        { id: 1, name: "NextJS", image: "/images/skills/next.svg" },
        { id: 2, name: "Tailwind CSS", image: "/images/skills/tailwindcss.svg" },
        { id: 3, name: "JavaScript", image: "/images/skills/javascript.svg" },
        { id: 4, name: "TypeScript", image: "/images/skills/typescript.svg" },
        { id: 5, name: "Git", image: "/images/skills/git.svg" },
        { id: 6, name: "Styled Components", image: "/images/skills/styled.svg" },
        { id: 7, name: "Html5", image: "/images/skills/html.svg" },
        { id: 8, name: "Framer Motion", image: "/images/skills/framermotion.svg" },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (index: any) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: index * 0.3, // Delay based on index
            },
        }),
    };

    return (
        <section className="dark:bg-black bg-white relative z-10  py-24">
            <div className="max-w-7xl mx-5 xl:mx-auto">
                <motion.div
                    initial={{ y: 50 }}
                    whileInView={{ y: 0, transition: { duration: 0.6, type: "spring" ,stiffness: 50,damping: 15, } }}
                    viewport={{ once: true }}
                    className="flex flex-col justify-center items-center relative">
                    <h2 className="text-[55px] leading-[40px] md:leading-[64px] drop-shadow-[0_1.2px_1.2px_#1aafb7] dark:drop-shadow-[0_1.2px_1.2px_#FDBC52] text-center font-bold text-white dark:text-black">
                        All Projects
                    </h2>
                    <h2 className="absolute top-5 text-5xl text-center font-bold text-java dark:text-new-yellow">
                        All Projects
                    </h2>
                </motion.div>

                {/* Project Cards */}
                <motion.div
                    className="grid gap-8 mt-20"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true,}} >
                    {Projects.map((project:any) => (
                        <motion.div
                            key={project.id}
                            className={`rounded-2xl px-4 py-8 md:p-8 text-white ${project.backgroundColor}`}
                            variants={itemVariants}
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2 md:space-x-6">
                                <Image
                                    src={project.image}
                                    alt={`${project.name} screenshot`}
                                    height={500}
                                    width={600}
                                    className="w-full h-auto md:h-full rounded-2xl shadow-lg select-none"
                                />
                                <div className="mt-10 ml-0 lg:mt-0">
                                    <h3 className="text-3xl font-bold">{project.name}</h3>
                                    <p className="mt-2">{project.description}</p>
                                    <div className="flex flex-wrap gap-3 justify-start items-center my-5">
                                        {skills.map((skill, index) => (
                                            <motion.div
                                                key={skill.id}
                                                className={`${project.skillColors[index % project.skillColors.length]
                                                } w-full md:w-auto py-3 px-5 flex gap-x-2 items-center rounded-full hover:!-translate-y-2 duration-500`}
                                                custom={index} // Pass index to the variant
                                                variants={itemVariants}>
                                                <Image src={skill.image} alt={skill.name} height={20} width={20} />
                                                <p className="text-sm dark:!text-white !text-black font-semibold">{skill.name}</p>
                                            </motion.div>
                                        ))}
                                    </div>
                                    <div className="flex justify-center md:justify-start">
                                        <Link
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex gap-x-2 items-center font-semibold mt-6 px-5 py-2 bg-white text-black rounded-full"
                                        >
                                            <HiLink className="h-4 w-4" /> View Project
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>


                {/*    button*/}
                <div className=" flex justify-center mt-16">
                    <Link href="/#contact">
                        <Button
                            className="  bg-[#995FB6] border-2  border-[#995FB6] dark:border-new-yellow  text-black flex justify-center rounded-full text-lg dark:hover:bg-new-yellow-700 dark:bg-new-yellow  !py-3 h-auto !px-6  items-center gap-x-2 font-semibold"> Hire Me</Button>
                    </Link>

                </div>
            </div>

            {/* <Compo/> */}
        </section>
    );
}
