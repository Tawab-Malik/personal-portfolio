"use client"
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { GoDownload } from "react-icons/go";
import { motion } from "framer-motion"

export default function Skills() {
    const skills = [
        { id: 1, name: "Adobe XD", image: "/images/skills/xd.png" },
        { id: 2, name: "Figma", image: "/images/skills/figma.png" },
        { id: 3, name: "MaterialUI", image: "/images/skills/material.svg" },
        { id: 4, name: "ReactJS", image: "/images/skills/react.svg" },
        { id: 5, name: "NextJS", image: "/images/skills/next.svg" },
        { id: 6, name: "Tailwind CSS", image: "/images/skills/tailwindcss.svg" },
        { id: 7, name: "Bootstrap", image: "/images/skills/bootstrap.svg" },
        { id: 8, name: "JavaScript", image: "/images/skills/javascript.svg" },
        { id: 9, name: "TypeScript", image: "/images/skills/typescript.svg" },
        { id: 10, name: "Git", image: "/images/skills/git.svg" },
        { id: 11, name: "Styled Components", image: "/images/skills/styled.svg" },
        { id: 12, name: "Html5", image: "/images/skills/html.svg" },
        { id: 13, name: "CSS3", image: "/images/skills/css.svg" },
        { id: 14, name: "Framer Motion", image: "/images/skills/framermotion.svg" },
    ];

    const tools = [
        { id: 1, name: "Visual Studio Code", image: "/images/skills/vscode.svg" },
        { id: 2, name: "Web Storm", image: "/images/skills/webstorm.svg" },
        { id: 3, name: "Github", image: "/images/skills/github.svg" },
        { id: 4, name: "Postman", image: "/images/skills/postman.svg" },

    ];
    return (
        <>
            <section className=" dark:bg-black bg-white relative z-10 -mt-24 py-24">
                <div className=" max-w-7xl mx-5 xl:mx-auto">
                    <motion.div
                        initial={{ y: 50 }}
                        whileInView={{ y: 0, transition: { duration: 0.6, type: "spring", stiffness: 50, damping: 15, } }}
                        viewport={{ once: true }}

                        className=" flex flex-col justify-center items-center relative">
                        <h2 className="  text-[45px] md:text-[55px] drop-shadow-[0_1.2px_1.2px_#1aafb7] dark:drop-shadow-[0_1.2px_1.2px_#FDBC52] text-center font-bold text-white dark:text-black">Skills</h2>
                        <h2 className="absolute top-5  text-5xl text-center font-bold text-java dark:text-new-yellow">Skills</h2>
                    </motion.div>
                    {/*          tools*/}
                    <motion.div
                        initial={{ y: 50 }}
                        whileInView={{ y: 0, transition: { duration: 0.6, type: "spring", stiffness: 50, damping: 15, delay: 0.1 } }}
                        viewport={{ once: true }}
                        className=" flex flex-col justify-center items-center relative mt-14">
                        <h2 className=" text-[50px] drop-shadow-[0_1.2px_1.2px_#1aafb7] dark:drop-shadow-[0_1.2px_1.2px_#FDBC52] text-center font-bold text-white dark:text-black">Design
                            Tools I Use</h2>
                        <h2 className="absolute top-6  text-4xl text-center font-bold text-java dark:text-new-yellow">Design
                            Tools I Use</h2>
                    </motion.div>

                    {/*  list*/}
                    <div
                        className=" flex gap-x-5 md:flex-row flex-col gap-y-5 justify-center items-center my-10">
                        {/*1st */}
                        <div
                            className=" dark:bg-white bg-[#995FB6] w-full md:w-auto py-3 px-5 flex gap-x-4 items-center rounded-full hover:-translate-y-2 duration-500">
                            <Image src="/images/skills/xd.png" alt="imges" height={50}
                                width={50} />
                            <p className=" text-xl text-black  font-semibold">Adobe
                                XD</p>
                        </div>
                        {/*2nd */}
                        <div
                            className=" dark:bg-white bg-[#995FB6] w-full md:w-auto py-3 px-5 flex gap-x-4 items-center rounded-full hover:-translate-y-2 duration-500">
                            <Image src="/images/skills/figma.png" alt="imges"
                                height={50} width={50} />
                            <p className=" text-xl text-black  font-semibold">Figma</p>
                        </div>

                    </div>
                    {/*          technologies i use */}
                    <motion.div
                        initial={{ y: 50 }}
                        whileInView={{ y: 0, transition: { duration: 0.6, type: "spring", stiffness: 50, damping: 15, delay: 0.2 } }}
                        viewport={{ once: true }}

                        className=" flex flex-col justify-center items-center relative mt-10">
                        <h2 className=" text-[50px] drop-shadow-[0_1.2px_1.2px_#1aafb7] dark:drop-shadow-[0_1.2px_1.2px_#FDBC52] text-center font-bold text-white dark:text-black">Technologies
                            I Use</h2>
                        <h2 className="absolute top-6  text-4xl text-center font-bold text-java dark:text-new-yellow">Technologies
                            I Use</h2>
                    </motion.div>
                    {/*    tech i use */}
                    <div
                        className="flex flex-wrap gap-5 justify-center items-center my-10">
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


                    {/*    Development Tools i use */}
                    <motion.div
                        initial={{ y: 50 }}
                        whileInView={{ y: 0, transition: { duration: 0.6, type: "spring", stiffness: 50, damping: 15, } }}
                        viewport={{ once: true }}
                        className=" flex flex-col justify-center items-center relative mt-16">
                        <h2 className=" text-[40px] leading-[50px] md:leading-normal drop-shadow-[0_1.2px_1.2px_#1aafb7] dark:drop-shadow-[0_1.2px_1.2px_#FDBC52] text-center font-bold text-white dark:text-black">DEVELOPEMENT
                            & PRODUCTIVITY <br></br> TOOLS I USE</h2>
                        <h2 className="absolute top-6  text-4xl text-center font-bold text-java dark:text-new-yellow">DEVELOPEMENT
                            & PRODUCTIVITY <br></br> TOOLS I USE</h2>
                    </motion.div>
                    {/*    tech i use */}
                    <div
                        className="flex flex-wrap gap-5 justify-center items-center my-10">
                        {tools.map((tools) => (
                            <div
                                key={tools.id}
                                className="dark:bg-white bg-[#995FB6] w-full md:w-auto py-3 px-5 flex gap-x-4 items-center rounded-full hover:-translate-y-2 duration-500"
                            >
                                <Image src={tools.image} alt={tools.name} height={50}
                                    width={50} />
                                <p className="text-xl text-black font-semibold">{tools.name}</p>
                            </div>
                        ))}
                    </div>

                    {/*    button*/}
                    <div className=" flex justify-center mt-16">
                        <Button href="#"
                            className=" bg-[#995FB6] border-2  border-[#995FB6] dark:border-new-yellow  text-black flex justify-center rounded-full text-lg dark:hover:bg-new-yellow-700 dark:bg-new-yellow  !py-3 h-auto !px-6  items-center gap-x-2 font-semibold"><GoDownload
                                className=" text-black h-5 w-5" /> Resume</Button>
                    </div>
                </div>
            </section>
        </>
    )
}