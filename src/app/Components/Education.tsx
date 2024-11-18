"use client"
import MovingGradient from "@/components/ui/BGanimation";
// import MovingBlobCard from "@/app/Components/BlobContainer";
// import BlurryBlob from "@/components/ui/BlurBob";
import { IoCalendarNumberSharp } from "react-icons/io5";
import Image from "next/image";
import {motion} from "framer-motion"





             export default function Education(){
                        return(
                            <>
                                <section className=" dark:bg-black bg-white relative z-10 -mt-24 py-24">
                                    <div className=" max-w-7xl mx-5 xl:mx-auto">

                                        <motion.div
                                        initial={{ y: 50 }}
                                        whileInView={{ y: 0, transition: { duration: 0.6, type: "spring" ,stiffness: 50,damping: 15, } }}
                                        viewport={{ once: true }}
                                        className=" flex flex-col justify-center items-center relative">
                                            <h2 className=" text-[55px] drop-shadow-[0_1.2px_1.2px_#1aafb7] dark:drop-shadow-[0_1.2px_1.2px_#FDBC52] text-center font-bold text-white dark:text-black">Education</h2>
                                            <h2 className="absolute top-5  text-5xl text-center font-bold text-java dark:text-new-yellow">Education</h2>
                                        </motion.div>

                                        {/*main div*/}
                                        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-5 mt-20 pb-5">

                                        {/*    left div*/}
                                            <MovingGradient className="rounded-3xl shadow-md bg-opacity-50 dark:bg-opacity-80   text-new-yellow">
                                                <div className=" p-5">
                                                    <div className=" flex md:flex-row flex-col gap-3 justify-start  md:justify-between items-start md:items-center ">
                                                        <div
                                                            className=" flex items-center justify-start gap-x-3 bg-black py-2 px-4 rounded-full">
                                                            <IoCalendarNumberSharp className=" text-wisteria dark:text-new-yellow h-6 w-6"/>
                                                            <p className=" text-wisteria dark:text-new-yellow text-xl font-bold">2018-2020</p>
                                                        </div>
                                                        <div
                                                            className=" flex items-center justify-start gap-x-3 !bg-opacity-100 bg-[#fff0f5] dark:bg-white py-2 px-4 rounded-full">
                                                            <Image src="/images/about/inter.png" alt="img" height={40}
                                                                   width={40} className=""/>
                                                            <p className="  text-xl text-black font-bold">Intermediate</p>
                                                        </div>

                                                    </div>

                                                    <div className=" flex md:flex-row flex-col gap-3 items-start md:items-center my-3 md:my-5">
                                                        <p className=" text-black text-xl font-bold bg-[#fff0f5] dark:bg-white py-2 px-4 rounded-full">Inter
                                                            Degree</p>
                                                        <p className=" text-black text-xl font-bold bg-[#fff0f5] dark:bg-white py-2 px-4 rounded-full">Ics</p>
                                                    </div>

                                                    <h2 className=" text-3xl text-black font-bold mt-7 md:mt-5">Intermediate in Computer Science</h2>

                                                    <div className=" space-y-3 mt-5">

                                                        <div
                                                            className=" flex items-center justify-start gap-x-3 ">
                                                            <Image src="/images/about/university.png" alt="img" height={40}
                                                                   width={40} className="p-2 bg-white rounded-full"/>
                                                            <p className="  text-xl text-black font-medium">Government
                                                                Post-Graduate College</p>
                                                        </div>
                                                        <div
                                                            className=" flex items-center justify-start gap-x-3 ">
                                                            <Image src="/images/about/location.png" alt="img" height={40}
                                                                   width={40} className=" p-2 bg-white rounded-full"/>
                                                            <p className="  text-xl text-black font-medium">Bahawalpur, Pakistan</p>
                                                        </div>
                                                    </div>

                                                </div>

                                            </MovingGradient>
                                        {/*    right div*/}
                                            <div className="rounded-3xl shadow-md  bg-[#f3f3f3] dark:bg-white  text-new-yellow">
                                                <div className=" p-5">
                                                    <div className=" flex md:flex-row flex-col gap-3 justify-start  md:justify-between items-start md:items-center ">
                                                        <div
                                                            className=" flex items-center justify-start gap-x-3 bg-black py-2 px-4 rounded-full">
                                                            <IoCalendarNumberSharp className=" text-wisteria dark:text-new-yellow h-6 w-6"/>
                                                            <p className=" text-wisteria dark:text-new-yellow text-xl font-bold">2020-2024</p>
                                                        </div>
                                                        <div
                                                            className=" flex items-center justify-start gap-x-3 bg-wisteria-200 dark:bg-new-yellow-200 py-2 px-4 rounded-full">
                                                            <Image src="/images/about/graduation.png" alt="img" height={40}
                                                                   width={40} className=""/>
                                                            <p className="  text-xl text-black font-bold">Graduation</p>
                                                        </div>

                                                    </div>

                                                    <div className=" flex md:flex-row flex-col gap-3 items-start md:items-center my-3 md:my-5">

                                                        <p className=" text-black text-xl font-bold bg-[#E7E7E7] py-2 px-4 rounded-full">Bachelor's
                                                            Degree</p>
                                                        <p className=" text-black text-xl font-bold bg-[#E7E7E7] py-2 px-4 rounded-full">BSCs</p>
                                                    </div>

                                                    <h2 className=" text-3xl text-black font-bold mt-7 md:mt-5">Bachelor's in
                                                        Computer Science</h2>

                                                    <div className=" space-y-3 mt-5">

                                                        <div
                                                            className=" flex items-center justify-start gap-x-3 ">
                                                            <Image src="/images/about/university.png" alt="img" height={40}
                                                                   width={40} className="p-2 bg-white rounded-full"/>
                                                            <p className="  text-xl text-black font-medium">Government
                                                                Sadiq Egerton College</p>
                                                        </div>
                                                        <div
                                                            className=" flex items-center justify-start gap-x-3 ">
                                                            <Image src="/images/about/location.png" alt="img" height={40}
                                                                   width={40} className=" p-2 bg-white rounded-full"/>
                                                            <p className="  text-xl text-black font-medium">Bahawalpur, Pakistan</p>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                        </div>



                                    </div>
                                </section>
                            </>
                        )
             }