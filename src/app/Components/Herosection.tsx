"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { GoArrowRight, GoDownload } from "react-icons/go";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiFigma,
  SiFramer,
  SiJavascript,
  SiNodedotjs,
  SiGit,
  SiRedux,
} from "react-icons/si";

export default function Herosection() {
  const techLogos = [
    { name: "Next.js 15", icon: SiNextdotjs },
    { name: "React 19", icon: SiReact },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Figma", icon: SiFigma },
    { name: "Framer Motion", icon: SiFramer },
    { name: "JavaScript", icon: SiJavascript },
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Redux", icon: SiRedux },
    { name: "Git", icon: SiGit },
  ];

  return (
    <section className="relative pt-32 sm:pt-36 md:pt-44 pb-16 overflow-hidden">
      {/* Multi-Layer Ambient Luxury Aura Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] sm:w-[580px] sm:h-[580px] lg:w-[760px] lg:h-[760px] pointer-events-none z-0">
        <div className="w-full h-full rounded-full bg-gradient-to-tr from-lime-400/50 via-emerald-400/35 to-teal-300/20 blur-[100px] md:blur-[140px] animate-pulse-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Top Recognition Badge with Laurels Icon */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center items-center gap-2 mb-6"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/95 shadow-[0_4px_20px_rgba(15,23,42,0.06)] border border-slate-200/90 text-xs font-semibold text-slate-800 backdrop-blur-xl hover:border-lime-500/50 transition-colors">
            {/* Laurel Wreath SVG */}
            <svg
              className="w-4 h-4 text-lime-600"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
              <path d="M12 7v10" />
              <path d="M12 12H8" />
              <path d="M12 12h4" />
            </svg>
            <span className="tracking-wide">Frontend Engineer &amp; UI Specialist 2025</span>
          </div>
        </motion.div>

        {/* Hero Headline - Editorial Sans + Serif Italic */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-slate-900 leading-[1.08]">
            Hi I&apos;m Abdul{" "}
            <span className="block">
              <span className="inline-block font-serif italic font-normal tracking-normal text-slate-950 mt-1 pr-4 pb-1 select-none">
                Frontend Developer
              </span>
            </span>
          </h1>

          {/* Mobile Only: Subtitle Statement */}
          <p className="md:hidden text-center text-xs sm:text-sm text-slate-600 max-w-sm mx-auto mt-4 leading-relaxed font-medium">
            Passionate about creating intuitive digital experiences that connect users with real value.
          </p>

          {/* Mobile Only: Primary CTAs */}
          <div className="md:hidden flex items-center justify-center gap-3 mt-5">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white font-bold text-xs shadow-md border border-white/10 group"
            >
              <span>Get In Touch</span>
              <GoArrowRight className="w-3.5 h-3.5 text-lime-400 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/images/Abdul_TawabCV.pdf"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full glass-pill font-semibold text-xs text-slate-800 border border-slate-200/90 shadow-xs"
            >
              <GoDownload className="w-3.5 h-3.5 text-lime-600" />
              <span>Resume</span>
            </Link>
          </div>
        </motion.div>

        {/* Centerpiece Image & Floating Badges */}
        <div className="relative mt-8 md:mt-10 flex flex-col md:flex-row justify-center items-center min-h-[380px] md:min-h-[580px]">
          {/* Subtle halo ring behind image */}
          <div className="absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] md:w-[440px] md:h-[440px] rounded-full bg-gradient-to-b from-white/80 to-lime-200/20 blur-2xl pointer-events-none -z-0" />

          {/* Mobile Only: Available Pill above image */}
          <div className="md:hidden flex justify-center mb-3 z-20">
            <div className="glass-pill px-3.5 py-1.5 rounded-full shadow-xs flex items-center gap-2 border border-slate-200/90 bg-white/95">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-lime-500 shadow-sm" />
              </span>
              <span className="text-[11px] font-semibold text-slate-800 tracking-tight">
                Available for new opportunities
              </span>
            </div>
          </div>

          {/* Portrait Photo Cutout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 flex justify-center items-end"
          >
            <div className="relative w-[280px] h-[350px] sm:w-[360px] sm:h-[450px] md:w-[440px] md:h-[550px]">
              <Image
                src="/images/profile.png"
                alt="Abdul Tawab - Frontend Engineer"
                fill
                priority
                className="object-contain object-bottom drop-shadow-[0_20px_45px_rgba(15,23,42,0.18)] md:drop-shadow-[0_30px_60px_rgba(15,23,42,0.22)]"
              />
            </div>
          </motion.div>

          {/* Mobile Only: Trust Card below image */}
          <div className="md:hidden flex justify-center mt-3 z-20">
            <div className="glass-card p-3 rounded-2xl shadow-sm flex items-center gap-3 border border-slate-200/90 bg-white/95 max-w-[270px]">
              <div className="flex -space-x-2 overflow-hidden">
                <div className="inline-block h-7 w-7 rounded-full ring-2 ring-white bg-lime-400 text-slate-950 font-bold text-[10px] flex items-center justify-center shadow-sm">
                  AT
                </div>
                <div className="inline-block h-7 w-7 rounded-full ring-2 ring-white bg-slate-900 text-white font-bold text-[10px] flex items-center justify-center shadow-sm">
                  CC
                </div>
                <div className="inline-block h-7 w-7 rounded-full ring-2 ring-white bg-emerald-500 text-white font-bold text-[10px] flex items-center justify-center shadow-sm">
                  AA
                </div>
              </div>
              <div className="text-[11px] text-slate-600 leading-tight">
                <div className="flex items-center gap-1 mb-0.5">
                  <span className="text-amber-400 text-[10px] tracking-tighter">★★★★★</span>
                  <span className="text-[10px] font-bold text-slate-800">5.0</span>
                </div>
                <p className="font-bold text-slate-950">Trusted by 20+ clients</p>
                <p className="text-[10px] text-slate-500">worldwide &amp; local startups</p>
              </div>
            </div>
          </div>

          {/* Desktop Left Element 1: Available Pill */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden md:block absolute left-6 lg:left-12 top-20 lg:top-24 z-20"
          >
            <div className="glass-pill px-4 py-2.5 rounded-full shadow-[0_10px_28px_rgba(15,23,42,0.08)] flex items-center gap-2.5 border border-slate-200/90 bg-white/95 hover:scale-105 transition-transform duration-300">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-lime-500 shadow-sm" />
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-800 tracking-tight">
                Available for new opportunities
              </span>
            </div>
          </motion.div>

          {/* Desktop Left Element 2: Trust Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="hidden md:block absolute left-6 lg:left-12 bottom-10 lg:bottom-12 z-20 max-w-[270px] lg:max-w-[290px]"
          >
            <div className="glass-card p-3.5 sm:p-4 rounded-2xl shadow-[0_14px_36px_rgba(15,23,42,0.09)] flex items-center gap-3 border border-slate-200/90 bg-white/95 hover:-translate-y-1 transition-transform duration-300">
              <div className="flex -space-x-2.5 overflow-hidden">
                <div className="inline-block h-8 w-8 sm:h-9 sm:w-9 rounded-full ring-2 ring-white bg-lime-400 text-slate-950 font-bold text-xs flex items-center justify-center shadow-sm">
                  AT
                </div>
                <div className="inline-block h-8 w-8 sm:h-9 sm:w-9 rounded-full ring-2 ring-white bg-slate-900 text-white font-bold text-xs flex items-center justify-center shadow-sm">
                  CC
                </div>
                <div className="inline-block h-8 w-8 sm:h-9 sm:w-9 rounded-full ring-2 ring-white bg-emerald-500 text-white font-bold text-xs flex items-center justify-center shadow-sm">
                  AA
                </div>
              </div>
              <div className="text-[11px] sm:text-xs text-slate-600 leading-tight">
                <div className="flex items-center gap-1 mb-0.5">
                  <span className="text-amber-400 text-[10px] tracking-tighter">★★★★★</span>
                  <span className="text-[10px] font-bold text-slate-800">5.0</span>
                </div>
                <p className="font-bold text-slate-950">Trusted by 20+ clients</p>
                <p className="text-[10px] text-slate-500">worldwide &amp; local startups</p>
              </div>
            </div>
          </motion.div>

          {/* Desktop Right Element 1: Subtitle Statement */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="hidden md:block absolute right-6 lg:right-12 top-20 lg:top-28 z-20 max-w-[240px] lg:max-w-[270px] text-left"
          >
            <div className="glass-card p-4 rounded-2xl shadow-[0_14px_36px_rgba(15,23,42,0.09)] border border-slate-200/90 bg-white/95 hover:-translate-y-1 transition-transform duration-300">
              <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                Passionate about creating intuitive digital experiences that connect users with real value.
              </p>
            </div>
          </motion.div>

          {/* Desktop Right Element 2: Primary CTAs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="hidden md:flex absolute right-6 lg:right-12 bottom-10 lg:bottom-12 z-20 flex-col sm:flex-row gap-2.5"
          >
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white font-bold text-xs sm:text-sm tracking-wide shadow-[0_10px_25px_rgba(15,23,42,0.25)] hover:shadow-lime-500/20 hover:scale-105 active:scale-95 transition-all duration-300 border border-white/10 group"
            >
              <span>Get In Touch</span>
              <GoArrowRight className="w-4 h-4 text-lime-400 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/images/Abdul_TawabCV.pdf"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full glass-pill font-semibold text-xs sm:text-sm text-slate-800 hover:text-slate-950 hover:bg-white hover:scale-105 active:scale-95 transition-all duration-300 border border-slate-200/90 shadow-sm"
            >
              <GoDownload className="w-4 h-4 text-lime-600" />
              <span>Resume</span>
            </Link>
          </motion.div>
        </div>

        {/* Client & Tech Stack Ticker Row */}
        <div className="mt-14 pt-8 border-t border-slate-200/80 relative">
          <div className="overflow-hidden relative [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <div className="flex gap-4 sm:gap-6 w-max animate-marquee py-3">
              {[...techLogos, ...techLogos].map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-white/80 border border-slate-200/80 shadow-[0_2px_8px_rgba(15,23,42,0.03)] hover:border-lime-500/60 hover:bg-white hover:shadow-md transition-all duration-300 cursor-pointer group"
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-slate-600 group-hover:text-lime-600 transition-colors" />
                    <span className="text-xs font-bold tracking-wide uppercase text-slate-700 group-hover:text-slate-950 transition-colors">
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}