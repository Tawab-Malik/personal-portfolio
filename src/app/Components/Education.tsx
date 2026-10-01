"use client";

import { motion } from "framer-motion";
import { HiAcademicCap, HiCalendar, HiMapPin } from "react-icons/hi2";

export default function Education() {
  const degrees = [
    {
      degree: "Bachelor of Computer Application (BCA)",
      institution: "The Islamia University of Bahawalpur",
      period: "2020 — 2024",
      location: "Bahawalpur, Pakistan",
      description:
        "Comprehensive coursework in Software Engineering, Data Structures, Web Development, Database Management, and Object-Oriented Programming.",
    },
    {
      degree: "Intermediate in Computer Science (ICS)",
      institution: "Punjab College",
      period: "2018 — 2020",
      location: "Bahawalpur, Pakistan",
      description:
        "Foundational education in Computer Fundamentals, Programming in C/C++, Mathematics, and Statistics.",
    },
  ];

  return (
    <section id="education" className="py-20 relative overflow-hidden bg-[#fafbfe]">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest text-slate-500 font-bold">
            / Academic Background
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mt-2">
            Education
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {degrees.map((deg, idx) => (
            <motion.div
              key={deg.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-white/95 backdrop-blur-xl p-7 sm:p-8 rounded-3xl border border-slate-200/90 shadow-[0_10px_30px_rgba(15,23,42,0.04)] flex flex-col justify-between hover:border-lime-500/50 hover:shadow-[0_20px_45px_rgba(15,23,42,0.08)] hover:-translate-y-1.5 transition-all duration-300"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-lime-400/20 text-lime-800 flex items-center justify-center mb-6 shadow-xs">
                  <HiAcademicCap className="w-6 h-6" />
                </div>

                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200/60">
                    <HiCalendar className="w-3.5 h-3.5 text-lime-600" />
                    {deg.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200/60">
                    <HiMapPin className="w-3.5 h-3.5 text-lime-600" />
                    {deg.location}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  {deg.degree}
                </h3>
                <p className="text-sm font-semibold text-lime-700 mb-4">
                  {deg.institution}
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {deg.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}