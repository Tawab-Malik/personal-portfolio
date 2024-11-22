"use client"
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const skills = [
    { id: 1, name: "Whatsapp", image: "/images/social/whatsapp.png", url: "https://wa.me/+923074563133", color: "#25D366" },
    { id: 2, name: "Facebook", image: "/images/social/facebook.png", url: "https://www.facebook.com/share/1MB5c1kn5E/", color: "#1877F2" },
    { id: 3, name: "Instagram", image: "/images/social/insta.png", url: "https://www.instagram.com/taw_abmalik/", color: "#E1306C" },
    { id: 4, name: "Linkedin", image: "/images/social/linkedin.png", url: "https://www.linkedin.com/in/abdul-tawab-78ab9525b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", color: "#0077B5" },
    { id: 5, name: "tchannar5@gmail.com", image: "/images/social/gmail.png", url: "mailto:tchannar5@gmail.com", color: "#D14836" },
];

export default function Connect() {
    return (
        <>
            <section className="dark:bg-black bg-white relative z-10 -mt-24 pt-24 ">
                <div className="max-w-7xl mx-5 xl:mx-auto">
                    <motion.div
                        initial={{ y: 50 }}
                        whileInView={{
                            y: 0,
                            transition: {
                                duration: 0.6,
                                type: "spring",
                                stiffness: 50,
                                damping: 15,
                            },
                        }}
                        viewport={{ once: true }}
                        className="flex flex-col justify-center items-center relative"
                    >
                        <h2 className=" text-[45px] md:text-[55px] leading-[64px] drop-shadow-[0_1.2px_1.2px_#1aafb7] dark:drop-shadow-[0_1.2px_1.2px_#FDBC52] text-center font-bold text-white dark:text-black">
                            Connect With Me
                        </h2>
                        <h2 className="absolute top-5 text-5xl text-center font-bold text-java dark:text-new-yellow">
                            Connect With Me
                        </h2>
                    </motion.div>
                    {/* Social Icons */}
                    <div className="flex flex-wrap gap-5 justify-center items-center md:px-10 my-10 pt-10">
                        {skills.map((skill) => (
                            <Link
                                key={skill.id}
                                href={skill.url}
                                passHref
                                target="_blank"
                                prefetch={true}
                                className=" w-full md:w-auto"
                            >
                                <div
                                    className="group w-full md:w-auto py-1 px-5 flex gap-x-2 items-center rounded-full hover:-translate-y-2 duration-500"
                                    style={{ backgroundColor: skill.color }}
                                >
                                    <Image
                                        src={skill.image}
                                        alt={skill.name}
                                        className="group-hover:-rotate-12 drop-shadow-2xl transition-transform duration-500 h-[50px] sm:h-[80px] w-[50px] sm:w-[80px]"
                                        height={80}
                                        width={80}
                                    />
                                    <p className=" text-lg md:text-2xl text-white font-bold">{skill.name} </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                    {/* avatar */}
                    <div className=" flex justify-center">
                        <Image src="/images/social/avatar1.png" alt="avatar"  className=" hidden dark:block" height={400} width={400} />
                        <Image src="/images/social/avatar2.png" className=" block dark:hidden" alt="avatar" height={250} width={250} />
                    </div>
                </div>
            </section>
        </>
    );
}
