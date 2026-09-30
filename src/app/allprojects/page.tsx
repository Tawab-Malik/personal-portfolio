"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { HiArrowUpRight, HiArrowLeft } from "react-icons/hi2";
import { BiLinkExternal } from "react-icons/bi";
import Projects from "@/components/Projects.json";

export default function AllProjects() {
  return (
    <section className="min-h-screen pt-32 pb-24 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[350px] pointer-events-none z-0">
        <div className="w-full h-full rounded-full bg-lime-400/10 blur-[110px]" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-pill text-xs font-semibold text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white hover:border-lime-400 transition-all"
          >
            <HiArrowLeft className="w-4 h-4 text-lime-500" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-lime-500 dark:text-lime-400 font-semibold">
            / Complete Archive
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-slate-900 dark:text-white mt-2">
            All Projects
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-300 mt-3">
            A comprehensive collection of web applications, platforms, and interactive interfaces built by Abdul Tawab.
          </p>
        </div>

        {/* Grid of Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {Projects.map((project: any, idx: number) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (idx % 6) * 0.05 }}
              className="group glass-card rounded-3xl overflow-hidden border border-slate-200/80 dark:border-white/10 hover:border-lime-400/40 hover:shadow-xl transition-all flex flex-col justify-between"
            >
              {/* Image Preview */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-900/60 p-3 sm:p-4">
                <div className="relative w-full h-full rounded-2xl overflow-hidden border border-black/5 dark:border-white/5">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Info */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-lime-500 transition-colors">
                      {project.name}
                    </h3>
                    <Link
                      href={project.link}
                      target="_blank"
                      className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                    >
                      <BiLinkExternal className="w-4 h-4" />
                    </Link>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-lime-600 dark:text-lime-400">
                    Project #{project.id}
                  </span>
                  <Link
                    href={project.link}
                    target="_blank"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-lime-500 transition-colors"
                  >
                    <span>Live Demo</span>
                    <HiArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-slate-950 text-white dark:bg-lime-400 dark:text-slate-950 font-bold text-xs uppercase tracking-wider hover:opacity-90 active:scale-95 transition-all shadow-lg"
          >
            <span>Have a project? Hire Me</span>
            <HiArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
