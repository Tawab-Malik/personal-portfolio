"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      category: "Frontend Core & Frameworks",
      items: [
        { name: "Next.js 15", image: "/images/skills/next.svg" },
        { name: "React 19", image: "/images/skills/react.svg" },
        { name: "TypeScript", image: "/images/skills/typescript.svg" },
        { name: "JavaScript", image: "/images/skills/javascript.svg" },
        { name: "React Native", image: "/images/skills/react.svg" },
        { name: "HTML5 Semantic", image: "/images/skills/html.svg" },
      ],
    },
    {
      category: "Styling & Motion Systems",
      items: [
        { name: "Tailwind CSS", image: "/images/skills/tailwindcss.svg" },
        { name: "Framer Motion", image: "/images/skills/framermotion.svg" },
        { name: "Material UI", image: "/images/skills/material.svg" },
        { name: "Modern CSS3", image: "/images/skills/css.svg" },
        { name: "Styled Components", image: "/images/skills/styled.svg" },
        { name: "Bootstrap 5", image: "/images/skills/bootstrap.svg" },
      ],
    },
    {
      category: "Design & Developer Tools",
      items: [
        { name: "Figma", image: "/images/skills/figma.png" },
        { name: "Adobe XD", image: "/images/skills/xd.png" },
        { name: "VS Code", image: "/images/skills/vscode.svg" },
        { name: "Git & GitHub", image: "/images/skills/github.svg" },
        { name: "Postman API", image: "/images/skills/postman.svg" },
        { name: "WebStorm", image: "/images/skills/webstorm.svg" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-white border-y border-slate-200/70">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-slate-500 font-bold">
            / Skills &amp; Tools
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mt-2">
            Technical Arsenal
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-3 font-normal">
            Every tool and technology I rely on to turn concepts into resilient digital products.
          </p>
        </div>

        {/* 3 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((group, gIdx) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: gIdx * 0.15 }}
              className="bg-white/95 backdrop-blur-xl p-7 rounded-3xl border border-slate-200/90 shadow-[0_10px_30px_rgba(15,23,42,0.04)] hover:shadow-[0_20px_45px_rgba(15,23,42,0.08)] hover:border-lime-500/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-100">
                  <h3 className="text-xs uppercase tracking-wider font-extrabold text-slate-900">
                    {group.category}
                  </h3>
                  <span className="w-2 h-2 rounded-full bg-lime-500 shadow-xs" />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {group.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2.5 p-3 rounded-2xl bg-slate-50/80 hover:bg-white hover:border-lime-500/70 hover:shadow-sm border border-slate-200/70 transition-all duration-200 hover:scale-[1.02] group"
                    >
                      <div className="w-7 h-7 relative shrink-0 p-0.5">
                        <Image
                          src={skill.image}
                          alt={skill.name}
                          fill
                          className="object-contain group-hover:scale-110 transition-transform duration-200"
                        />
                      </div>
                      <span className="text-xs font-semibold text-slate-800 group-hover:text-lime-800 transition-colors truncate">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}