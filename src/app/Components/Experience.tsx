"use client"
import { IoCalendarNumberSharp, } from "react-icons/io5";
import Image from "next/image";
import { PiPaperPlaneRightFill } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
import { motion } from "framer-motion"



export default function Experience() {
    return (
        <>
            <section className=" dark:bg-black bg-white relative z-10 -mt-24 py-24">
                <div className=" max-w-7xl mx-5 xl:mx-auto">
                    <motion.div
                        initial={{ y: 50 }}
                        whileInView={{ y: 0, transition: { duration: 0.6, type: "spring", stiffness: 50, damping: 15, } }}
                        viewport={{ once: true }}
                        className=" flex flex-col justify-center items-center relative">
                        <h2 className="  text-[45px] md:text-[55px] drop-shadow-[0_1.2px_1.2px_#1aafb7] dark:drop-shadow-[0_1.2px_1.2px_#FDBC52] text-center font-bold text-white dark:text-black">Experience</h2>
                        <h2 className="absolute top-5  text-5xl text-center font-bold text-java dark:text-new-yellow">Experience</h2>
                    </motion.div>


                    {/*    main card*/}

                    {/* App aura */}
                    <div className="rounded-3xl  bg-white  text-new-yellow mt-20 mb-10 shadow-[0_2.2px_20px_#995FB6] duration-500  dark:shadow-[0_2.2px_20px_#FDBC52]">
                        <div className=" px-5 py-10">
                            <div className=" flex md:flex-row flex-col gap-y-2 justify-start  md:justify-between items-start md:items-center ">
                                <div
                                    className=" flex items-center flex-col justify-start bg-black py-2 px-6 rounded-full">
                                    <p className=" text-wisteria dark:text-new-yellow text-lg md:text-xl md:text-start text-center font-bold">AppAura.net</p>
                                    <div className="flex gap-x-2 items-center ">
                                        <FaLocationDot className=" h-4 w-4 text-wisteria dark:text-new-yellow" />
                                        <p className=" text-white text-sm font-bold">Lahore, Pakistan</p>
                                    </div>

                                </div>
                                <div>
                                    <div
                                        className=" flex items-center justify-start gap-x-3 bg-wisteria-200 dark:bg-new-yellow-200 py-2 px-4 rounded-full">
                                        <IoCalendarNumberSharp className=" text-black h-6 w-6" />
                                        <p className="  text-xl text-black font-bold">APRIL 2025-PRESENT</p>
                                    </div>
                                    <div className="g-wisteria-200 dark:bg-new-yellow-200 py-2 px-4 mt-2 rounded-full">
                                            <p className="  text-xl text-black text-center font-bold ">Part Time</p>
                                    </div>
                                </div>


                            </div>

                            {/*<div className=" flex gap-x-3 items-center my-5">*/}

                            {/*    <p className=" text-black text-xl font-bold bg-[#E7E7E7] py-2 px-4 rounded-full">Bachelor's*/}
                            {/*        Degree</p>*/}
                            {/*    <p className=" text-black text-xl font-bold bg-[#E7E7E7] py-2 px-4 rounded-full">BSCs</p>*/}
                            {/*</div>*/}
                            <div className=" flex gap-x-3 items-center mt-5">
                                <Image src="/images/experience/appaura.png" alt="img" height={80}
                                    width={80} className="p-2 bg-wisteria dark:bg-new-yellow rounded-full" />
                                <h2 className=" text-3xl text-black font-bold mt-5">Front End Developer</h2>
                            </div>


                            <div className=" space-y-3 mt-5">

                                <div className=" flex gap-x-3 items-start">
                                    <PiPaperPlaneRightFill
                                        className=" text-wisteria dark:text-new-yellow min-w-4 min-h-4 h-5 w-5" />
                                    <p className="  text-base text-black font-medium">Developed dynamic, responsive UI components with a focus on performance and reusability using REACT.js</p>
                                </div>
                                <div className=" flex gap-x-3 items-start">
                                    <PiPaperPlaneRightFill
                                        className=" text-wisteria dark:text-new-yellow min-w-4 min-h-4 h-5 w-5" />
                                    <p className="  text-base text-black font-medium">Collaborated closely with designers and backend developers to ensure seamless user experience and integration.</p>
                                </div>
                                <div className=" flex gap-x-3 items-start">
                                    <PiPaperPlaneRightFill
                                        className=" text-wisteria dark:text-new-yellow min-w-4 min-h-4 h-5 w-5" />
                                    <p className="  text-base text-black font-medium">Implemented modern features using React Hooks, Context API, and REST APIs to streamline data flow.</p>
                                </div>
                            </div>
                        </div>
                    </div>



                    {/* code cradle */}
                    <div className="rounded-3xl  bg-white  text-new-yellow mt-20 mb-10 shadow-[0_2.2px_20px_#995FB6] duration-500  dark:shadow-[0_2.2px_20px_#FDBC52]">
                        <div className=" px-5 py-10">
                            <div className=" flex md:flex-row flex-col gap-y-2 justify-start  md:justify-between items-start md:items-center ">
                                <div
                                    className=" flex items-center flex-col justify-start bg-black py-2 px-6 rounded-full">
                                    <p className=" text-wisteria dark:text-new-yellow text-lg md:text-xl md:text-start text-center font-bold">Code Cradle Technologies</p>
                                    <div className="flex gap-x-2 items-center ">
                                        <FaLocationDot className=" h-4 w-4 text-wisteria dark:text-new-yellow" />
                                        <p className=" text-white text-sm font-bold">Bahawalpur, Pakistan</p>
                                    </div>

                                </div>
                                <div>
                                    <div
                                        className=" flex items-center justify-start gap-x-3 bg-wisteria-200 dark:bg-new-yellow-200 py-2 px-4 rounded-full">
                                        <IoCalendarNumberSharp className=" text-black h-6 w-6" />
                                        <p className="  text-xl text-black font-bold">MAY 2024-PRESENT</p>
                                    </div>
                                    <div className="g-wisteria-200 dark:bg-new-yellow-200 py-2 px-4 mt-2 rounded-full">
                                            <p className="  text-xl text-black text-center font-bold ">Full Time</p>
                                    </div>
                                </div>

                            </div>

                            {/*<div className=" flex gap-x-3 items-center my-5">*/}

                            {/*    <p className=" text-black text-xl font-bold bg-[#E7E7E7] py-2 px-4 rounded-full">Bachelor's*/}
                            {/*        Degree</p>*/}
                            {/*    <p className=" text-black text-xl font-bold bg-[#E7E7E7] py-2 px-4 rounded-full">BSCs</p>*/}
                            {/*</div>*/}
                            <div className=" flex gap-x-3 items-center mt-5">
                                <Image src="/images/experience/programmer.png" alt="img" height={80}
                                    width={80} className="p-2 bg-wisteria dark:bg-new-yellow rounded-full" />
                                <h2 className=" text-3xl text-black font-bold mt-5">Front End Developer</h2>
                            </div>


                            <div className=" space-y-3 mt-5">

                                <div className=" flex gap-x-3 items-start">
                                    <PiPaperPlaneRightFill
                                        className=" text-wisteria dark:text-new-yellow min-w-4 min-h-4 h-5 w-5" />
                                    <p className="  text-base text-black font-medium">Designed and developed over
                                        10 complete React and NextJS full theme templates, showcasing proficiency
                                        in front-end design and development.</p>
                                </div>
                                <div className=" flex gap-x-3 items-start">
                                    <PiPaperPlaneRightFill
                                        className=" text-wisteria dark:text-new-yellow min-w-4 min-h-4 h-5 w-5" />
                                    <p className="  text-base text-black font-medium">Led the development of the Wired Academy project, a full-stack NextJS application.</p>
                                </div>
                                <div className=" flex gap-x-3 items-start">
                                    <PiPaperPlaneRightFill
                                        className=" text-wisteria dark:text-new-yellow min-w-4 min-h-4 h-5 w-5" />
                                    <p className="  text-base text-black font-medium">Managed both front-end and back-end aspects, utilizing NextJS API Routes for seamless integration.</p>
                                </div>
                                <div className=" flex gap-x-3 items-start">
                                    <PiPaperPlaneRightFill
                                        className=" text-wisteria dark:text-new-yellow min-w-4 min-h-4 h-5 w-5" />
                                    <p className="  text-base text-black font-medium">Successfully deployed the application on Vercel for optimal performance and accessibility.</p>
                                </div>

                            </div>

                        </div>
                    </div>



                </div>
            </section>
        </>
    )

}