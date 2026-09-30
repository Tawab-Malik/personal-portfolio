"use client";

import { motion } from "framer-motion";

export default function About() {
  const leftPills = [
    { name: "Frontend Strategy", color: "bg-amber-500", text: "text-amber-800", bg: "bg-amber-50 border-amber-200" },
    { name: "UI/UX Engineering", color: "bg-sky-500", text: "text-sky-800", bg: "bg-sky-50 border-sky-200" },
    { name: "Clean Architecture", color: "bg-slate-900", text: "text-slate-800", bg: "bg-slate-100 border-slate-200" },
  ];

  const rightPills = [
    { name: "Design Systems", color: "bg-yellow-500", text: "text-yellow-800", bg: "bg-yellow-50 border-yellow-200" },
    { name: "Responsive Testing", color: "bg-purple-500", text: "text-purple-800", bg: "bg-purple-50 border-purple-200" },
    { name: "Performance & SEO", color: "bg-lime-500", text: "text-lime-800", bg: "bg-lime-50 border-lime-200" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-white/70 border-y border-slate-200/60">
      {/* Soft ambient aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] pointer-events-none z-0">
        <div className="w-full h-full rounded-full bg-lime-400/20 blur-[100px]" />
      </div>

      <div className="max-w-6xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Editorial Greeting Tag */}
        <div className="text-center mb-5">
          <span className="font-serif italic text-3xl md:text-4xl text-slate-800">
            Hello!
          </span>
        </div>

        {/* Central Statement flanked by pills matching reference screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto">
          {/* Left Floating Pills Column */}
          <div className="lg:col-span-3 flex flex-row lg:flex-col flex-wrap justify-center lg:items-start gap-3">
            {leftPills.map((pill, idx) => (
              <motion.div
                key={pill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-semibold shadow-sm border ${pill.bg} ${pill.text}`}
              >
                <span className={`w-2 h-2 rounded-full ${pill.color}`} />
                <span>{pill.name}</span>
              </motion.div>
            ))}
          </div>

          {/* Central Editorial Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 text-center"
          >
            <h2 className="text-2xl sm:text-4xl md:text-[42px] font-medium tracking-tight text-slate-900 leading-snug md:leading-tight">
              focus is on blending{" "}
              <span className="font-semibold text-slate-950 underline decoration-lime-400 decoration-wavy underline-offset-8">
                clear strategy
              </span>
              , thoughtful design, and robust code to{" "}
              <span className="font-serif italic font-normal text-slate-950">
                craft experiences
              </span>{" "}
              that solve real problems.
            </h2>
          </motion.div>

          {/* Right Floating Pills Column */}
          <div className="lg:col-span-3 flex flex-row lg:flex-col flex-wrap justify-center lg:items-end gap-3">
            {rightPills.map((pill, idx) => (
              <motion.div
                key={pill.name}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-xs font-semibold shadow-sm border ${pill.bg} ${pill.text}`}
              >
                <span className={`w-2 h-2 rounded-full ${pill.color}`} />
                <span>{pill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Stats Row with Crisp White Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mt-16 max-w-4xl mx-auto">
          {[
            { value: "2.5+", label: "Years Experience" },
            { value: "20+", label: "Projects Completed" },
            { value: "100%", label: "Client Satisfaction" },
            { value: "24/7", label: "Reliable Support" },
          ].map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-6 rounded-3xl text-center border border-slate-200/90 shadow-[0_10px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.06)] hover:border-lime-500/50 transition-all"
            >
              <h3 className="text-3xl sm:text-4xl font-bold font-serif italic text-slate-950 mb-1">
                {stat.value}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 font-semibold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}