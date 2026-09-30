"use client";

import { motion } from "framer-motion";
import { HiOutlineBriefcase, HiOutlineCalendar, HiOutlineMapPin, HiCheck } from "react-icons/hi2";

export default function Experience() {
  const experiences = [
    {
      company: "Code Cradle Technologies",
      role: "Frontend Developer",
      type: "Full Time",
      period: "May 2024 — Present",
      location: "Bahawalpur, Pakistan",
      highlights: [
        "Architected and delivered over 10 production-ready React & Next.js applications with modern responsive design systems.",
        "Led frontend engineering on Wired Academy, a full-stack Next.js project with dynamic routing, ISR, and API route integrations.",
        "Collaborated with backend engineers to optimize RESTful endpoints and ensure sub-second page load speeds.",
        "Mentored junior developers on Git workflows, TypeScript standards, and component reusability.",
      ],
      skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST APIs"],
    },
    {
      company: "AppAura.net",
      role: "Frontend Developer",
      type: "Part Time",
      period: "April 2025 — July 2025",
      location: "Lahore, Pakistan",
      highlights: [
        "Engineered reactive UI components with an emphasis on performance, micro-interactions, and reusable architecture.",
        "Collaborated closely with UI/UX designers to translate Figma design tokens into clean, maintainable Tailwind components.",
        "Integrated state management with React Hooks, Context API, and third-party Web3 integrations.",
      ],
      skills: ["React.js", "Figma", "Tailwind CSS", "Context API", "Responsive Design"],
    },
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-[#fbfbfc]">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-slate-500 font-bold">
            / Career Journey
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mt-2">
            Work Experience
          </h2>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="bg-white p-7 sm:p-9 rounded-3xl border border-slate-200/90 shadow-[0_15px_35px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.07)] transition-all"
            >
              {/* Header row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="p-2.5 rounded-xl bg-lime-400/20 text-lime-700">
                      <HiOutlineBriefcase className="w-5 h-5" />
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                      {exp.role}
                    </h3>
                  </div>
                  <p className="text-sm font-semibold text-slate-700">
                    {exp.company}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
                    <HiOutlineCalendar className="w-3.5 h-3.5 text-lime-600" />
                    {exp.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700">
                    <HiOutlineMapPin className="w-3.5 h-3.5 text-lime-600" />
                    {exp.location}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-lime-400/25 text-lime-800 border border-lime-400/40">
                    {exp.type}
                  </span>
                </div>
              </div>

              {/* Bullet highlights */}
              <div className="mt-6 space-y-3">
                {exp.highlights.map((point, pIdx) => (
                  <div key={pIdx} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-lime-400/20 text-lime-700 flex items-center justify-center shrink-0 mt-0.5">
                      <HiCheck className="w-3.5 h-3.5" />
                    </span>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {point}
                    </p>
                  </div>
                ))}
              </div>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-slate-100">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}