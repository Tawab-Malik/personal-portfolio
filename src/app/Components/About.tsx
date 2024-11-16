"use client"
import Image from "next/image";
import {GoDownload} from "react-icons/go";
import {Button} from "@nextui-org/button";
import { motion } from 'framer-motion';




  export default function About() {


    return (
        <section className=" dark:bg-black bg-white relative z-10 -mt-24 py-24">
            <div className=" max-w-7xl mx-5 xl:mx-auto">
                <motion.div
                    initial={{ y: 50 }}
                    whileInView={{ y: 0, transition: { duration: 0.6, type: "spring" ,stiffness: 50,damping: 15, } }}
                    viewport={{ once: true }}
                    className=" flex flex-col justify-center items-center relative">
                    <h2 className=" text-[55px] drop-shadow-[0_1.2px_1.2px_#1aafb7] dark:drop-shadow-[0_1.2px_1.2px_#FDBC52] text-center font-bold text-white dark:text-black">About Me</h2>
                    <h2 className="absolute top-5  text-5xl text-center font-bold text-java dark:text-new-yellow">About Me</h2>
                </motion.div>

            {/*    main div*/}
                <div className=" flex justify-between xl:flex-row flex-col gap-y-10 items-center mt-10">
                {/*    left div*/}
                    <div className=" flex justify-start flex-col items-start gap-x-5 w-full md:w-auto">
                        <div className="flex justify-center md:justify-start  items-center gap-x-5">
                            <div>
                                <Image src="/images/about/logo.jpeg"
                                       className=" rounded-full dark:border-new-yellow border-java border-2" alt="Logo"
                                       height={70} width={70}/>
                            </div>
                            {/*    right*/}
                            <div className=" flex flex-col justify-center items-center relative">
                                <h2 className=" text-[37px] drop-shadow-[0_1.2px_1.2px_#1aafb7] dark:drop-shadow-[0_1.2px_1.2px_#FDBC52] text-center font-bold text-white dark:text-black">I
                                    Love
                                </h2>
                                <h2 className="absolute top-3.5  text-3xl text-center font-bold text-java dark:text-new-yellow">I
                                    Love</h2>
                            </div>
                        </div>


                        {/*    list*/}
                        <div className='flex justify-start md:flex-row flex-col gap-y-5 gap-x-5 mt-10 w-full md:w-auto'>

                            {/*1st */}
                            <div
                                className=" dark:bg-white bg-[#995FB6] py-3 px-5 flex gap-x-4 items-center rounded-full hover:-translate-y-2 duration-500">
                                <Image src="/images/about/Headphones.png" alt="imges" height={50} width={50}/>
                                <p className=" text-xl text-black dark:text-[#4DC7EB] font-semibold">Listening to
                                    Music</p>
                            </div>
                            {/*2nd */}
                            <div
                                className=" dark:bg-white bg-[#995FB6] py-3 px-5 flex gap-x-4 items-center rounded-full hover:-translate-y-2 duration-500">
                                <Image src="/images/about/money.png" alt="imges" height={50} width={50}/>
                                <p className=" text-xl text-black dark:text-[#37C381] font-semibold">Money</p>
                            </div>
                        </div>
                        {/*   2nd list*/}
                        <div className='flex md:flex-row flex-col gap-y-5 justify-start gap-x-5 mt-5 w-full md:w-auto'>

                            {/*1st */}
                            <div className=" dark:bg-white bg-[#995FB6] py-3 px-5 flex gap-x-4 items-center rounded-full hover:-translate-y-2 duration-500">
                                <Image src="/images/about/coding.png" alt="imges" height={50} width={50}/>
                                <p className=" text-xl text-black dark:text-[#747E87] font-semibold">Programming</p>
                            </div>
                            {/*2nd */}
                            <div className=" dark:bg-white bg-[#995FB6] py-3 px-5 flex gap-x-4 items-center rounded-full hover:-translate-y-2 duration-500">
                                <Image src="/images/about/mountains.png" alt="imges" height={50} width={50}/>
                                <p className=" text-xl text-black dark:text-[#98C901] font-semibold">Mountains</p>
                            </div>
                        </div>
                    </div>

                {/*    right div*/}
                    <div className=" flex  gap-x-8 items-center">

                        <div className=" bg-[#F3F3F3] dark:bg-[#181818] py-10 px-5 md:px-10 rounded-[4rem] shadow-[0_2.2px_20px_#995FB6] duration-500  dark:shadow-[0_2.2px_20px_#FDBC52]">
                            <h2 className=' text-3xl md:text-5xl font-bold text-[#995FB6] dark:text-new-yellow text-center'>1.9+</h2>
                            <p className=" text-xl md:text-3xl font-bold text-black dark:text-white text-center py-3 dark:bg-[#181818]">Years <br></br>Experience </p>
                        </div>
                        {/*2nd*/}
                        <div className=" bg-[#F3F3F3] dark:bg-[#181818] py-10 px-5 md:px-10 rounded-[4rem] shadow-[0_2.2px_20px_#995FB6] duration-500  dark:shadow-[0_2.2px_20px_#FDBC52]">
                            <h2 className=' text-3xl md:text-5xl font-bold text-[#995FB6] dark:text-new-yellow text-center'>10+</h2>
                            <p className=" text-xl md:text-3xl font-bold text-black dark:text-white text-center py-3 ">Project <br></br>Completed </p>
                        </div>
                    </div>


                </div>

            {/*    paragraph*/}
                <p className="bg-[#F3F3F3] shadow-[0_2.2px_20px_#995FB6] duration-500  dark:shadow-[0_2.2px_20px_#FDBC52] dark:bg-[#181818] text-black dark:text-white font-normal md:font-semibold text-sm md:text-lg py-7 px-5 rounded-2xl mt-16">

                    A passionate Front End Developer with a Bachelor's in Computer Application and over 1.9 years of experience in crafting captivating digital experiences. My expertise lies in leveraging cutting-edge technologies such as ReactJS, NextJS and various UI frameworks including Material UI, NextUI, Tailwind CSS, Chakra UI, and Bootstrap. I take pride in my ability to design seamless user interfaces and components that align perfectly with the intended aesthetic, creating responsive websites that adapt gracefully to any device. My skill set also extends to proficient API integration, ensuring the seamless flow of data between the front end and back end. In addition, I am known for writing clean, well-structured code that not only functions flawlessly but also enhances the overall maintainability of projects. With a track record of contributing to well- known products like Fxguyz.io, MatchmakerCapital, and MoonRat, I am committed to pushing the boundaries of web development to deliver exceptional digital solutions.
                </p>

                <div className=" flex justify-center mt-16">
                    <Button href="#" className=" text-[#995FB6] dark:text-new-yellow flex justify-center rounded-full text-lg bg-black dark:bg-[#241d0b] border-2 !py-3 h-auto !px-6 dark:border-new-yellow border-[#995FB6] items-center gap-x-2 font-semibold"><GoDownload className="dark:text-new-yellow text-[#995FB6] h-5 w-5" /> Contact Me</Button>
                </div>


            </div>
        </section>
    );
  }