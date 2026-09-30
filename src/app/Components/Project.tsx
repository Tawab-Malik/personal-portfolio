"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";
import { BiLinkExternal } from "react-icons/bi";

export default function Project() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      name: "Match-Maker Capital",
      category: "Fintech",
      subcategory: "Product Design",
      description:
        "High-performance investment platform with real-time portfolio tracking, responsive dashboard architecture, and smooth data visualization.",
      image: "/images/project/match.png",
      link: "https://match-maker-dev.vercel.app/",
      tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      id: 2,
      name: "Scale Pass",
      category: "SaaS",
      subcategory: "Web App",
      description:
        "Enterprise subscription and licensing dashboard featuring complex authentication, permission flows, and unified layout systems.",
      image: "/images/project/scalepass.png",
      link: "https://scalepass-dev.vercel.app/",
      tags: ["React 19", "Framer Motion", "Tailwind"],
    },
    {
      id: 3,
      name: "Moon Rat DeFi",
      category: "Web3",
      subcategory: "DeFi Platform",
      description:
        "Decentralized token platform with real-time liquidity pools, wallet connect integration, and high-frequency trading animations.",
      image: "/images/project/moonrat.png",
      link: "https://moonrat-dev.vercel.app/",
      tags: ["Web3.js", "Next.js", "Ethers.js"],
    },
    {
      id: 4,
      name: "Durag Dog Ecosystem",
      category: "Web3",
      subcategory: "Interactive Experience",
      description:
        "Creative Web3 brand experience with custom micro-interactions, responsive 3D assets, and community token launchpad.",
      image: "/images/project/duragdog.png",
      link: "https://duragdoge.vercel.app/",
      tags: ["React", "Tailwind CSS", "Animations"],
    },
    {
      id: 5,
      name: "Uni-Bridge Protocol",
      category: "Web3",
      subcategory: "Cross-Chain Interface",
      description:
        "Cross-chain asset bridge with instant transaction estimation, gas tracking, and reactive transaction status.",
      image: "/images/project/unibridge.png",
      link: "https://uni-bridge-nine.vercel.app/",
      tags: ["Next.js", "TypeScript", "API Routes"],
    },
    {
      id: 6,
      name: "Firebase Cloud Blog",
      category: "Full Stack",
      subcategory: "Cloud Platform",
      description:
        "Full-stack publishing application with Google Authentication, markdown editor, live comments, and dynamic cloud media storage.",
      image: "/images/project/firebase.png",
      link: "https://personal-blogfirebase.vercel.app/",
      tags: ["Firebase", "Next.js", "Tailwind"],
    },
  ];

  const categories = [
    { label: "All Projects", value: "all" },
    { label: "Fintech & SaaS", value: "Fintech" },
    { label: "Web3 & DeFi", value: "Web3" },
    { label: "Full Stack", value: "Full Stack" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter(
          (p) =>
            p.category.toLowerCase() === activeFilter.toLowerCase() ||
            (activeFilter === "Fintech" && (p.category === "Fintech" || p.category === "SaaS"))
        );

  return (
    <section id="works" className="py-24 relative overflow-hidden bg-white">
      {/* Background radial accent */}
      <div className="absolute top-1/3 right-10 w-[460px] h-[460px] pointer-events-none z-0">
        <div className="w-full h-full rounded-full bg-lime-400/15 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header matching reference */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-slate-500 font-bold">
              / Best Projects
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mt-2">
              Selected Works
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveFilter(cat.value)}
                className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition-all ${
                  activeFilter === cat.value
                    ? "bg-slate-950 text-white shadow-md"
                    : "bg-slate-100 text-slate-600 hover:text-slate-950 hover:bg-slate-200 border border-slate-200"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Showcase Grid matching reference cards */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-[0_15px_35px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.09)] hover:border-lime-400 transition-all flex flex-col justify-between"
              >
                {/* Image Container with Crisp Framing */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 p-3 sm:p-4">
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-inner border border-black/5 bg-slate-50">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Top Floating Badge */}
                  <div className="absolute top-6 left-6 z-10">
                    <span className="glass-pill px-3 py-1 rounded-full text-[11px] font-bold text-slate-900 shadow-sm border border-slate-200">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Floating Action */}
                  <Link
                    href={project.link}
                    target="_blank"
                    className="absolute bottom-6 right-6 z-10 w-10 h-10 rounded-full bg-slate-950 text-white flex items-center justify-center shadow-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-lime-500 hover:text-slate-950"
                  >
                    <HiArrowUpRight className="w-5 h-5" />
                  </Link>
                </div>

                {/* Card Content matching reference typography */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <h3 className="text-xl font-bold text-slate-900 group-hover:text-lime-700 transition-colors">
                        {project.name}
                      </h3>
                      <Link
                        href={project.link}
                        target="_blank"
                        className="text-slate-400 hover:text-slate-900 transition-colors"
                      >
                        <BiLinkExternal className="w-4 h-4" />
                      </Link>
                    </div>

                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs font-semibold text-slate-500">
                        {project.subcategory}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 line-clamp-2 mb-4 leading-relaxed font-normal">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack Chips */}
                  <div className="flex flex-wrap gap-1.5 pt-4 border-t border-slate-100">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-full bg-slate-100 text-[10px] font-semibold text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Projects Link */}
        <div className="text-center mt-12">
          <Link
            href="/allprojects"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-slate-100 font-bold text-xs uppercase tracking-wider text-slate-900 hover:bg-slate-200 hover:border-lime-500 active:scale-95 transition-all shadow-sm border border-slate-200"
          >
            <span>Explore All Projects Archive</span>
            <HiArrowUpRight className="w-4 h-4 text-lime-600" />
          </Link>
        </div>
      </div>
    </section>
  );
}
