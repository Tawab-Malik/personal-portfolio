"use client";
import Link from "next/link";
import Image from "next/image";
import { HiLink } from "react-icons/hi";
import { motion } from "framer-motion";
import { Button } from "@nextui-org/react";
import { useState } from "react";

// import { GoDownload } from "react-icons/go";
// import { IoEyeSharp } from "react-icons/io5";

export default function Compo() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const projects = [
        {
            id: 1,
            name: "Match-Maker Capital",
            description: "Technologies I have used",
            image: "/images/project/match.png",
            link: "https://match-maker-dev.vercel.app/",
            backgroundColor: "bg-wisteria-200 dark:bg-[#D43FDE]",
            skillColors: ["bg-wisteria-500 dark:bg-[#af38b7]"],
            relatedSkills: [1, 2, 3, 4],
        },
        {
            id: 2,
            name: "Scale Pass",
            description: "Technologies I have used",
            image: "/images/project/scalepass.png",
            link: "https://scalepass-dev.vercel.app/",
            backgroundColor: "bg-[#70d1b1] dark:bg-[#9ae0c9]",
            skillColors: ["bg-[#57a88d] dark:bg-[#49aa8a]"],
            relatedSkills: [1, 7, 8, 4],
        },
        {
            id: 3,
            name: "Dragon Bull Run",
            description: "Technologies I have used",
            image: "/images/project/dragon.png",
            link: "https://dragonbull.vercel.app/",
            backgroundColor: "bg-new-yellow-600",
            skillColors: ["bg-new-yellow-700"],
            relatedSkills: [1, 5, 3, 4],
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
            relatedSkills: [1, 2, 6, 9],
        },
        {
            id: 6,
            name: "Durag Dog",
            description: "Technologies I have used",
            image: "/images/project/duragdog.png",
            link: "https://duragdoge.vercel.app/",
            backgroundColor: "bg-[#1F4659]",
            skillColors: ["bg-[#193744]"],
            relatedSkills: [1, 2, 3, 4],
            category: "next.js",

        },
        {
            id: 7,
            name: "Mythic Wings",
            description: "Technologies I have used",
            image: "/images/project/mythic.png",
            link: "https://mythicwings.vercel.app/",
            backgroundColor: "bg-[#63443F]",
            skillColors: ["bg-[#543935]"],
            relatedSkills: [5, 2, 3, 4],
            category: "wordpress",
        },
        {
            id: 8,
            name: "SatoshiDex",
            description: "Technologies I have used",
            image: "/images/project/stoshi.png",
            link: "https://stoshi-dex.vercel.app/",
            backgroundColor: "bg-[#241116]",
            skillColors: ["bg-[#351a21]"],
            relatedSkills: [1, 2, 3, 4],
            category: "wordpress",
        },

        {
            id: 9,
            name: "Uni-Bridge",
            description: "Technologies I have used",
            image: "/images/project/unibridge.png",
            link: "https://uni-bridge-nine.vercel.app/",
            backgroundColor: "bg-[#0D5857]",
            skillColors: ["bg-[#093534]"],
            relatedSkills: [1, 2, 3, 4],
            category: "wordpress",
        },
        {
            id: 10,
            name: "StratoNode",
            description: "Technologies I have used",
            image: "/images/project/stratonode.png",
            link: "https://stratonode-two.vercel.app/",
            backgroundColor: "bg-[#c9ab34]",
            skillColors: ["bg-[#826e1f]"],
            relatedSkills: [1, 2, 3, 4],
            category: "wordpress",
        },
        {
            id: 11,
            name: "AI ChatBot",
            description: "Technologies I have used",
            image: "/images/project/chatbot.png",
            link: "https://ai-assistant-chi-seven.vercel.app/",
            backgroundColor: "bg-[#a2bc2f]",
            skillColors: ["bg-[#74871f]"],
            relatedSkills: [1, 2, 3, 4],
            category: "next.js",
        },
    ];

    const skills = [
        { id: 1, name: "NextJS", image: "/images/skills/next.svg" },
        { id: 2, name: "Tailwind CSS", image: "/images/skills/tailwindcss.svg" },
        { id: 3, name: "JavaScript", image: "/images/skills/javascript.svg" },
        { id: 4, name: "TypeScript", image: "/images/skills/typescript.svg" },
        { id: 5, name: "Git", image: "/images/skills/git.svg" },
        { id: 6, name: "Styled Components", image: "/images/skills/styled.svg" },
        { id: 7, name: "HTML5", image: "/images/skills/html.svg" },
        { id: 8, name: "Framer Motion", image: "/images/skills/framermotion.svg" },
    ];


    const categories = ["All", "next.js", "wordpress", "Elementor"];

    const filteredProjects =
        selectedCategory === "All"
            ? projects
            : projects.filter((project) => project.category === selectedCategory);
    return (
        <section className="dark:bg-black bg-white relative z-10 py-24">
            <div className="max-w-7xl mx-5 xl:mx-auto">
                <motion.div
                    initial={{ y: 50 }}
                    whileInView={{ y: 0, transition: { duration: 0.6, type: "spring", stiffness: 50, damping: 15 } }}
                    viewport={{ once: true }}
                    className="flex flex-col justify-center items-center relative"
                >
                    <h2 className="text-[55px] leading-[40px] md:leading-[64px] drop-shadow-[0_1.2px_1.2px_#1aafb7] dark:drop-shadow-[0_1.2px_1.2px_#FDBC52] text-center font-bold text-white dark:text-black">
                        All Projects
                    </h2>
                    <h2 className="absolute top-5 text-5xl text-center font-bold text-java dark:text-new-yellow">
                        All Projects
                    </h2>
                </motion.div>

                {/* Category Filter Buttons */}
                <div className="flex justify-center space-x-4 mt-10">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setSelectedCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-semibold ${selectedCategory === category
                                    ? "bg-new-yellow-600 text-white"
                                    : "bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                                } transition-transform hover:scale-105`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Project Cards */}
                <div
                    className="grid gap-8 mt-20  grid-cols-1"
                    // variants={{
                    //     hidden: { opacity: 0 },
                    //     visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
                    // }}
                    // initial="hidden"
                    // whileInView="visible"
                    // viewport={{ once: true }}
                >
                    {filteredProjects.map((project) => (
                        <div
                            key={project.id}
                            className={`rounded-2xl px-4 py-8 md:p-8 text-white ${project.backgroundColor}`}
                            // variants={{
                            //     hidden: { opacity: 0, y: 50 },
                            //     visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                            // }}
                        >
                            <div className=" flex justify-center gap-10 w-full ">
                                <Image
                                    src={project.image}
                                    alt={`${project.name} screenshot`}
                                    height={1000}
                                    width={1000}
                                    className="w-full h-auto md:w-2/4 bg-downriver-200 rounded-2xl shadow-lg"
                                />
                                <div className="mt-10 ml-0 lg:mt-0 w-full">
                                    <h3 className="text-3xl font-bold">{project.name}</h3>
                                    <p className="mt-2">{project.description}</p>
                                    <div className="flex justify-start gap-x-2 mt-4 flex-wrap">
                                        {(project.relatedSkills ?? []).map((skillId,index) => {
                                            const skill = skills.find((s) => s.id === skillId);
                                            return skill ? (
                                                <div
                                                    key={skill.id}
                                                    className={`${project.skillColors[index % project.skillColors.length]
                                                    } w-full md:w-auto py-3 px-5 flex gap-x-2 items-center rounded-full hover:!-translate-y-2 duration-500`}
                                                >
                                                    <Image
                                                        src={skill.image}
                                                        alt={skill.name}
                                                        width={20}
                                                        height={20}
                                                        className="rounded-full"
                                                    />
                                                    <span className="text-sm font-medium">{skill.name}</span>
                                                </div>
                                            ) : null;
                                        })}
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
                        </div>
                    ))}
                </div>

                {/* Button */}
                <div className="flex justify-center mt-16">
                    <Link href="/#contact">
                        <Button className="bg-[#995FB6] border-2 border-[#995FB6] dark:border-new-yellow text-black flex justify-center rounded-full text-lg dark:hover:bg-new-yellow-700 dark:bg-new-yellow !py-3 h-auto !px-6 items-center gap-x-2 font-semibold">
                            Hire Me
                        </Button>
                    </Link>
                </div>
            </div>

           
        </section>
    );
}

