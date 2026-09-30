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
      {/* Ultra HD Multi-Layer Ambient Lime Aura Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[560px] sm:h-[560px] lg:w-[720px] lg:h-[720px] pointer-events-none z-0">
        <div className="w-full h-full rounded-full bg-gradient-to-tr from-lime-400/60 via-emerald-400/40 to-lime-200/30 blur-[90px] md:blur-[130px] animate-pulse-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Top Recognition Badge with Laurels Icon matching reference */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center items-center gap-2 mb-6"
        >
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/90 shadow-[0_4px_16px_rgba(0,0,0,0.06)] border border-slate-200/80 text-xs font-semibold text-slate-800 backdrop-blur-md">
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
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-slate-900 leading-[1.08]">
            Hi I&apos;m Abdul{" "}
            <span className="block font-serif italic font-normal tracking-tight text-slate-950 mt-1">
              Frontend Developer
            </span>
          </h1>
        </motion.div>

        {/* Centerpiece Image & Overlapping Floating Badges matching screenshot */}
        <div className="relative mt-8 md:mt-10 flex justify-center items-center min-h-[460px] md:min-h-[580px]">
          {/* Portrait Photo Cutout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 flex justify-center items-end"
          >
            <div className="relative w-[300px] h-[380px] sm:w-[380px] sm:h-[480px] md:w-[440px] md:h-[550px]">
              <Image
                src="/images/profile.png"
                alt="Abdul Tawab - Frontend Engineer"
                fill
                priority
                className="object-contain object-bottom drop-shadow-[0_25px_50px_rgba(0,0,0,0.18)]"
              />
            </div>
          </motion.div>

          {/* Left Element 1: Available Pill with Glowing Green Pulse */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="absolute left-2 sm:left-6 md:left-12 top-14 sm:top-24 z-20"
          >
            <div className="glass-pill px-4 py-2.5 rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.08)] flex items-center gap-2.5 border border-slate-200 bg-white/95">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-lime-500 shadow-sm" />
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-800">
                Available for new opportunities
              </span>
            </div>
          </motion.div>

          {/* Left Element 2: Trust Card with Stacked Avatars */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="absolute left-2 sm:left-6 md:left-12 bottom-6 sm:bottom-12 z-20 max-w-[260px] sm:max-w-[290px]"
          >
            <div className="glass-card p-3.5 sm:p-4 rounded-2xl shadow-[0_12px_32px_rgba(0,0,0,0.08)] flex items-center gap-3 border border-slate-200/90 bg-white/95">
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
                <p className="font-bold text-slate-950">Trusted by over 20+ happy clients</p>
                <p className="text-[10px] text-slate-500 mt-0.5">across residential and global projects</p>
              </div>
            </div>
          </motion.div>

          {/* Right Element 1: Subtitle Copy from Screenshot */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="absolute right-2 sm:right-6 md:right-12 top-16 sm:top-28 z-20 max-w-[220px] sm:max-w-[270px] text-left"
          >
            <div className="glass-card p-4 rounded-2xl shadow-[0_12px_32px_rgba(0,0,0,0.08)] border border-slate-200/90 bg-white/95">
              <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                Passionate about creating intuitive digital experiences that connect users with value.
              </p>
            </div>
          </motion.div>

          {/* Right Element 2: Primary CTAs */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="absolute right-2 sm:right-6 md:right-12 bottom-6 sm:bottom-12 z-20 flex flex-col sm:flex-row gap-2.5"
          >
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-slate-950 text-white font-bold text-xs sm:text-sm tracking-wide shadow-[0_6px_20px_rgba(0,0,0,0.2)] hover:bg-slate-800 hover:scale-105 active:scale-95 transition-all"
            >
              <span>Get In Touch</span>
              <GoArrowRight className="w-4 h-4 text-lime-400" />
            </Link>
            <Link
              href="/images/Abdul_TawabCV.pdf"
              target="_blank"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full glass-pill font-semibold text-xs sm:text-sm text-slate-800 hover:text-slate-950 hover:bg-white hover:scale-105 active:scale-95 transition-all border border-slate-200"
            >
              <GoDownload className="w-4 h-4 text-lime-600" />
              <span>Resume</span>
            </Link>
          </motion.div>
        </div>

        {/* Client & Tech Stack Ticker Row matching reference */}
        <div className="mt-14 pt-8 border-t border-slate-200/80 relative">
          <div className="overflow-hidden relative [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
            <div className="flex gap-10 sm:gap-14 w-max animate-marquee py-3">
              {[...techLogos, ...techLogos].map((tech, index) => {
                const Icon = tech.icon;
                return (
                  <div
                    key={index}
                    className="flex items-center gap-2.5 text-slate-500 hover:text-slate-900 transition-colors cursor-pointer group"
                  >
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 group-hover:text-lime-600 transition-colors" />
                    <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-slate-600 group-hover:text-slate-900">
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