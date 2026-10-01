"use client";

import { motion } from "framer-motion";
import {
  HiOutlineBriefcase,
  HiOutlineCalendar,
  HiOutlineMapPin,
  HiCheck,
} from "react-icons/hi2";

export default function Experience() {
  const experiences = [
    {
      company: "Code Cradle Technologies",
      role: "Frontend Developer",
      type: "Full Time",
      period: "August 2026 — Present",
      location: "Bahawalpur, Pakistan",
      highlights: [
        "Returned to Code Cradle Technologies to spearhead frontend engineering on key client and in-house web applications.",
        "Architecting responsive, production-ready React & Next.js web applications with modern component design systems and smooth interactions.",
        "Collaborating across multidisciplinary teams to ensure optimal performance, reliable API integrations, and code quality standards.",
      ],
      skills: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "API Integration",
      ],
    },
    {
      company: "Xnerd Solutions",
      role: "Backend & Frontend Developer",
      type: "Full Time",
      period: "April 2026 — August 2026",
      location: "Pakistan",
      highlights: [
        "Developed and maintained backend services, implementing complete CRUD operations and scalable REST APIs.",
        "Conducted end-to-end API testing, validation, and endpoint debugging using Postman to ensure reliable service communication.",
        "Integrated client-side asynchronous data fetching, connecting backend endpoints seamlessly with interactive frontend interfaces.",
      ],
      skills: [
        "REST APIs",
        "CRUD Operations",
        "Postman",
        "Data Fetching",
        "Backend Dev",
        "React.js",
      ],
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
      skills: [
        "React.js",
        "Figma",
        "Tailwind CSS",
        "Context API",
        "Responsive Design",
      ],
    },
    {
      company: "Code Cradle Technologies",
      role: "Frontend Developer",
      type: "Full Time",
      period: "May 2024 — April 2026",
      location: "Bahawalpur, Pakistan",
      highlights: [
        "Architected and delivered over 10 production-ready React & Next.js applications with modern responsive design systems.",
        "Led frontend engineering on Wired Academy, a full-stack Next.js project with dynamic routing, ISR, and API route integrations.",
        "Collaborated with backend engineers to optimize RESTful endpoints and ensure sub-second page load speeds.",
        "Mentored junior developers on Git workflows, TypeScript standards, and component reusability.",
      ],
      skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST APIs"],
    },
  ];

  return (
    <section
      id="experience"
      className="py-24 relative overflow-hidden bg-[#fafbfc]"
    >
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-0 w-[450px] h-[450px] pointer-events-none z-0">
        <div className="w-full h-full rounded-full bg-lime-400/10 blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-slate-500 font-bold">
            / Career Journey
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 mt-2">
            Work Experience
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-3 font-normal">
            Proven track record delivering scalable frontend and backend
            architectures.
          </p>
        </div>

        {/* Executive Timeline Container */}
        <div className="relative pl-6 sm:pl-10 border-l-2 border-slate-200/80 space-y-10 ml-2 sm:ml-4">
          {experiences.map((exp, idx) => (
            <motion.div
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative group"
            >
              {/* Timeline Node Icon */}
              <div className="absolute -left-[31px] sm:-left-[51px] top-6 z-20 flex items-center justify-center">
                {idx === 0 ? (
                  <span className="relative flex h-5 w-5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-5 w-5 bg-lime-500 border-2 border-white shadow-md" />
                  </span>
                ) : (
                  <span className="w-4 h-4 rounded-full bg-slate-300 border-2 border-white group-hover:bg-lime-500 group-hover:scale-125 transition-all duration-300 shadow-xs" />
                )}
              </div>

              {/* Luxury Experience Card */}
              <div className="bg-white/95 backdrop-blur-xl p-7 sm:p-9 rounded-3xl border border-slate-200/90 shadow-[0_10px_30px_rgba(15,23,42,0.04)] group-hover:shadow-[0_20px_50px_rgba(15,23,42,0.08)] group-hover:border-lime-500/50 transition-all duration-300">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className="p-2.5 rounded-xl bg-lime-400/20 text-lime-800 shadow-xs">
                        <HiOutlineBriefcase className="w-5 h-5" />
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 group-hover:text-lime-800 transition-colors">
                        {exp.role}
                      </h3>
                    </div>
                    <p className="text-sm font-semibold text-slate-700">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200/60">
                      <HiOutlineCalendar className="w-3.5 h-3.5 text-lime-600" />
                      {exp.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200/60">
                      <HiOutlineMapPin className="w-3.5 h-3.5 text-lime-600" />
                      {exp.location}
                    </span>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold border ${
                        exp.period.includes("Present")
                          ? "bg-lime-400/30 text-lime-900 border-lime-400/60 shadow-xs"
                          : "bg-slate-100 text-slate-700 border-slate-200"
                      }`}
                    >
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
                      className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-50 text-slate-700 border border-slate-200/80 hover:border-lime-500 hover:text-slate-950 transition-colors"
                    >
                      {skill}
                    </span>
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
