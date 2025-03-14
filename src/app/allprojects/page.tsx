"use client";
import Link from "next/link";
import Image from "next/image";
import { HiLink } from "react-icons/hi";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/react";
// import Compo from "../Components/compo2";
// import { GoDownload } from "react-icons/go";
// import { IoEyeSharp } from "react-icons/io5";

export default function AllProjects() {
    const projects = [
        {
            id: 1,
            name: "Match-Maker Capital",
            description: "Technologies I have used",
            image: "/images/project/match.png",
            link: "https://match-maker-dev.vercel.app/",
            backgroundColor: "bg-wisteria-200 dark:bg-[#D43FDE]",
            skillColors: ["bg-wisteria-500 dark:bg-[#af38b7]"],
        },
        {
            id: 2,
            name: "Scale Pass",
            description: "Technologies I have used",
            image: "/images/project/scalepass.png",
            link: "https://scalepass-dev.vercel.app/",
            backgroundColor: "bg-[#70d1b1] dark:bg-[#9ae0c9]",
            skillColors: ["bg-[#57a88d] dark:bg-[#49aa8a]"],
        },
        {
            id: 3,
            name: "Dragon Bull Run",
            description: "Technologies I have used",
            image: "/images/project/dragon.png",
            link: "https://dragonbull.vercel.app/",
            backgroundColor: "bg-[#f97316]",
            skillColors: ["bg-[#b75717]"],
        },
        {
            id: 4,
            name: "Flatcap Ape",
            description: "Technologies I have used",
            image: "/images/project/flatcap.png",
            link: "https://flatcapape.vercel.app/",
            backgroundColor: "bg-[#FF9000]",
            skillColors: ["bg-[#c47009]"],
        },
        {
            id: 5,
            name: "Moon Rat",
            description: "Technologies I have used",
            image: "/images/project/moonrat.png",
            link: "https://moonrat-dev.vercel.app/",
            backgroundColor: "bg-[#F29C86]",
            skillColors: ["bg-[#ce8573]"],
        },
        {
            id: 6,
            name: "Durag Dog",
            description: "Technologies I have used",
            image: "/images/project/duragdog.png",
            link: "https://duragdoge.vercel.app/",
            backgroundColor: "bg-[#1F4659]",
            skillColors: ["bg-[#193744]"],
        },
        {
            id: 7,
            name: "Mythic Wings",
            description: "Technologies I have used",
            image: "/images/project/mythic.png",
            link: "https://mythicwings.vercel.app/",
            backgroundColor: "bg-[#63443F]",
            skillColors: ["bg-[#543935]"],
        },
        {
            id: 8,
            name: "SatoshiDex",
            description: "Technologies I have used",
            image: "/images/project/stoshi.png",
            link: "https://stoshi-dex.vercel.app/",
            backgroundColor: "bg-[#241116]",
            skillColors: ["bg-[#351a21]"],
        },
        {
            id: 9,
            name: "Uni-Bridge",
            description: "Technologies I have used",
            image: "/images/project/unibridge.png",
            link: "https://uni-bridge-nine.vercel.app/",
            backgroundColor: "bg-[#0D5857]",
            skillColors: ["bg-[#093534]"],
        },
        {
            id: 10,
            name: "StratoNode",
            description: "Technologies I have used",
            image: "/images/project/stratonode.png",
            link: "https://stratonode-two.vercel.app/",
            backgroundColor: "bg-[#c9ab34]",
            skillColors: ["bg-[#826e1f]"],
        },
        // {
        //     id: 11,
        //     name: "AI ChatBot",
        //     description: "Technologies I have used",
        //     image: "/images/project/chatbot.png",
        //     link: "https://ai-assistant-chi-seven.vercel.app/",
        //     backgroundColor: "bg-[#a2bc2f]",
        //     skillColors: ["bg-[#74871f]"],
        // },
        {
            id: 11,
            name: "RollBlock",
            description: "Technologies I have used",
            image: "/images/project/rollblock.png",
            link: "https://presale-rollblock.com/",
            backgroundColor: "bg-[#FAC725]",
            skillColors: ["bg-[#bf961c]"],
        },
        {
            id: 12,
            name: "RebelSatoshi",
            description: "Technologies I have used",
            image: "/images/project/satoshi.png",
            link: "https://rebelsatoshi.com/",
            backgroundColor: "bg-[#5B5F71]",
            skillColors: ["bg-[#373a44]"],
        },
        {
            id: 13,
            name: "BUY RebelSatoshi",
            description: "Technologies I have used",
            image: "/images/project/satoshi2.png",
            link: "https://rblz.rebelsatoshi.com/",
            backgroundColor: "bg-[#A31B0C]",
            skillColors: ["bg-[#5e110a]"],
        },
        {
            id: 14,
            name: "RECQ RebelSatoshi",
            description: "Technologies I have used",
            image: "/images/project/satoshi3.png",
            link: "https://recq.rebelsatoshi.com/",
            backgroundColor: "bg-[#241246]",
            skillColors: ["bg-[#1a0d33]"],
        },
        {
            id: 15,
            name: "Ether Ticket",
            description: "Technologies I have used",
            image: "/images/project/ether.png",
            link: "https://etherticket-v2.vercel.app/",
            backgroundColor: "bg-[#010220]",
            skillColors: ["bg-[#4E3995]"],
        },
        {
            id: 16,
            name: "Borroe-Landing",
            description: "Technologies I have used",
            image: "/images/project/borroe2.png",
            link: "https://borroe-landing.vercel.app/",
            backgroundColor: "bg-[#0B111B]",
            skillColors: ["bg-[#152748]"],
        },
    ];

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
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            className={`rounded-2xl px-4 py-8 md:p-8 text-white ${project.backgroundColor}`}
                            variants={itemVariants}
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-2 md:space-x-6">
                                <Image
                                    src={project.image}
                                    alt={`${project.name} screenshot`}
                                    height={1000}
                                    width={1000}
                                    className="w-full h-auto md:h-full bg-downriver-200 rounded-2xl shadow-lg"
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
