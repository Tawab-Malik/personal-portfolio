"use client"
import { useState, useEffect } from 'react';
import { BiMenuAltRight } from "react-icons/bi";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { IoSunnySharp } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";
import Link from 'next/link';
export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    return (
        <header className="flex  relative items-center justify-between p-1 mt-5 !bg-[#995fb6] dark:!bg-[#e7e7e7] transition-colors rounded-full duration-300 max-w-7xl mx-5 xl:mx-auto">
            <div className="flex items-center">
                <div className="flex items-center space-x-2 ">
                    <Link href="#"> <span className=" ml-2 font-normal text-lg md:text-xl text-white dark:text-black">ABDUL<span
                        className=" font-bold">TAWAB</span></span></Link>
                </div>
            </div>
            {/*right div*/}
            <div className=" flex items-center gap-x-1 md:gap-x-4">
                {/* Dark Mode Toggle Button */}
                <button
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className="p-3 rounded-full bg-white dark:bg-black text-gray-800 dark:text-gray-200 transition-transform duration-300"
                >
                    <AnimatePresence mode="wait" initial={false}>
                        {isDarkMode ? (
                            <motion.div
                                key="sun"
                                initial={{ opacity: 0, rotate: 180 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                exit={{ opacity: 0, rotate: -180 }}
                                transition={{ duration: 0.3 }}
                            >
                                <IoSunnySharp className="w-6 h-6 text-new-yellow" />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="moon"
                                initial={{ opacity: 0, rotate: -180 }}
                                animate={{ opacity: 1, rotate: 0 }}
                                exit={{ opacity: 0, rotate: 180 }}
                                transition={{ duration: 0.3 }}
                            >
                                <BsFillMoonStarsFill className="w-6 h-6" />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </button>

                {/* Menu Toggle Button */}
                <div className=" flex items-center gap-x-1 md:gap-x-2 bg-white dark:bg-black  rounded-full">
                    <p className=" pl-2 text-lg dark:text-white text-black font-semibold">Menu</p>
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="p-2 ml-1 md:ml-2 rounded-full bg-java dark:bg-new-yellow  text-black dark:text-white transition-transform duration-300"
                    >
                        <BiMenuAltRight className={`w-7 h-7 ${menuOpen ? 'rotate-180' : 'rotate-0'}`}/>
                    </button>
                </div>

            </div>


            {/* Dropdown Menu with Framer Motion */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.nav
                        initial={{opacity: 0, y: -20}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="absolute z-50 md:right-4 top-16 bg-white dark:bg-white border-2 border-java dark:border-new-yellow rounded-md shadow-lg w-full md:w-[300px]  p-4"
                    >
                        <ul className="space-y-2">
                            <motion.li
                                className="text-black hover:bg-java dark:hover:bg-new-yellow dark:text-gray-200 hover:text-yellow-500 text-lg md:text-xl font-semibold dark:hover:text-yellow-400 transition-colors"
                                whileHover={{ scale: 1.05 }}
                            >
                                <Link href="">Home</Link>
                            </motion.li>
                            <motion.li
                                className="text-black dark:text-gray-200 hover:text-yellow-500 text-lg md:text-xl font-semibold dark:hover:text-yellow-400 transition-colors"
                                whileHover={{ scale: 1.05 }}
                            >
                               <Link href="">About</Link>
                            </motion.li>
                            <motion.li
                                className="text-black dark:text-gray-200 hover:text-yellow-500 text-lg md:text-xl font-semibold dark:hover:text-yellow-400 transition-colors"
                                whileHover={{ scale: 1.05 }}
                            >
                               <Link href="">Contact</Link>
                            </motion.li>
                        </ul>
                    </motion.nav>
                )}
            </AnimatePresence>
        </header>
    );
}
