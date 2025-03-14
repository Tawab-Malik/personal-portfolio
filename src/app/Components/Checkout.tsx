"use client"
import Image from "next/image";
import { Button } from "@nextui-org/react";
import { GoDownload } from "react-icons/go";
import { motion } from "framer-motion"
import Link from "next/link"
export default function Checkout() {
    return (
        <>
            <section className="dark:bg-black bg-white relative z-10 -mt-24 py-24">
                <div className="max-w-7xl mx-5 xl:mx-auto">
                    <motion.div
                        initial={{ y: 50 }}
                        whileInView={{ y: 0, transition: { duration: 0.6, type: "spring", stiffness: 50, damping: 15, } }}
                        viewport={{ once: true }} className="flex flex-col justify-center items-center relative">
                        <h2 className=" text-[45px] md:text-[55px] leading-[40px] md:leading-[64px] drop-shadow-[0_1.2px_1.2px_#1aafb7] dark:drop-shadow-[0_1.2px_1.2px_#FDBC52] text-center font-bold text-white dark:text-black">
                            Checkout my <br /> Resume
                        </h2>
                        <h2 className="absolute top-5 text-4xl md:text-5xl text-center font-bold text-java dark:text-new-yellow">
                            Checkout my <br /> Resume
                        </h2>
                    </motion.div>

                    {/* main div */}
                    <div className="mt-16 pb-14 pt-10 bg-[#f3f3f3] dark:bg-[#181818] rounded-3xl">
                        <div className="flex justify-center">
                            <Image src="/images/about/logo.jpeg"
                                className=" rounded-full dark:border-new-yellow border-[#995FB6] border-2" alt="Logo"
                                height={100} width={100} />
                        </div>
                        <motion.h2
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1, transition: { duration: 1.0, type: "spring", stiffness: 50, damping: 15, } }}
                            viewport={{ once: true }}

                            className="text-4xl text-[#995FB6] dark:text-new-yellow text-center font-bold pt-5">Abdul Tawab</motion.h2>
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1, transition: { duration: 1.0, type: "spring", stiffness: 50, damping: 15, } }}
                            viewport={{ once: true }}
                            className="text-xl text-black dark:text-white text-center  font-semibold pt-5">Front End Developer / Web Designer / UI Developer</motion.p>
                        <div className=" flex sm:flex-row flex-col w-full sm:w-auto justify-center items-center gap-y-2 gap-x-1 md:gap-x-5 mt-8 relative z-10">
                        <Link href="/images/Abdul_TawabCV.pdf" target="_blank" >
                        <Button href="#" className=" text-[#995FB6] dark:text-new-yellow flex justify-center rounded-full text-sm md:text-lg bg-black dark:bg-[#241d0b] border-2 !py-2 h-auto !px-6 dark:border-new-yellow border-[#995FB6] items-center gap-x-2 font-semibold"><GoDownload className="dark:text-new-yellow text-[#995FB6] h-5 w-5" /> Resume</Button>
                        </Link>
                        <Link  href="#contact">
                        <Button className="h-auto bg-[#995FB6] dark:bg-new-yellow dark:hover:bg-new-yellow-700 text-black flex justify-center rounded-full text-sm md:text-lg  border-2 !py-2 !px-8 border-[#995FB6] dark:border-new-yellow items-center font-semibold gap-x-2">Discuss Project</Button>
                        </Link>
                           
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}