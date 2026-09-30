"use client";

import { motion } from "framer-motion";
import { BiSolidQuoteAltLeft } from "react-icons/bi";

export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Discover",
      description:
        "Understanding your goals, users, and technical challenges through thorough research and architecture strategy.",
    },
    {
      number: "02",
      title: "Design",
      description:
        "Transforming insights into intuitive, beautiful, and modular frontend architectures with clean, reusable components.",
    },
    {
      number: "03",
      title: "Deliver",
      description:
        "Testing, refining, and launching the final product with ultra-fast speed, accessibility, and pixel precision.",
    },
  ];

  const testimonials = [
    {
      quote:
        "Working with Abdul was seamless from start to finish. He understood our goals quickly, asked the right questions, and delivered clean code that scaled perfectly with our growing app.",
      author: "Jawaid Saeed",
      role: "Lead Tech Founder at AppAura",
    },
    {
      quote:
        "Abdul brought our product vision to life with incredible attention to detail. His ability to balance clean aesthetics with robust performance made our platform stand out.",
      author: "Sarah Nguyen",
      role: "Product Manager at PolyScale",
    },
  ];

  return (
    <section id="process" className="py-24 relative overflow-hidden bg-[#fafbfe]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-slate-500 font-bold">
            / Our Process Explained
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mt-2">
            Here&apos;s how it works
          </h2>
        </div>

        {/* 3 Step Cards with Decorative Connector */}
        <div className="relative">
          {/* Subtle curved connecting line behind cards */}
          <div className="hidden lg:block absolute top-1/2 left-[15%] right-[15%] -translate-y-1/2 h-16 pointer-events-none z-0">
            <svg
              className="w-full h-full text-lime-400/60"
              viewBox="0 0 800 60"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="M0 30 Q200 60 400 30 T800 30"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
            </svg>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
                className="bg-white p-8 sm:p-9 rounded-3xl relative border border-slate-200/90 shadow-[0_15px_35px_rgba(0,0,0,0.04)] hover:shadow-[0_25px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between"
              >
                <div>
                  {/* Step Number */}
                  <div className="mb-6">
                    <span className="font-serif italic text-4xl sm:text-5xl font-bold text-slate-400 group-hover:text-lime-600 transition-colors">
                      {step.number}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-lime-500" />
                  <span className="text-[11px] text-slate-500 font-semibold uppercase tracking-wider">
                    Milestone {step.number}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Client Testimonials matching reference layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16 max-w-5xl mx-auto">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-white p-7 sm:p-8 rounded-3xl border border-slate-200/80 shadow-[0_10px_30px_rgba(0,0,0,0.03)] relative"
            >
              <BiSolidQuoteAltLeft className="w-8 h-8 text-lime-500/25 mb-3" />
              <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-6 font-serif">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-950 text-white flex items-center justify-center font-bold text-sm shadow-sm">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    {t.author}
                  </h4>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
