"use client";

import Link from "next/link";
import { HiArrowUp } from "react-icons/hi2";
import { SiGithub, SiLinkedin, SiWhatsapp, SiInstagram } from "react-icons/si";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { name: "GitHub", href: "https://github.com/Tawab-Malik", icon: SiGithub },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/abdul-tawab-78ab9525b",
      icon: SiLinkedin,
    },
    { name: "WhatsApp", href: "https://wa.me/923074563133", icon: SiWhatsapp },
    {
      name: "Instagram",
      href: "https://www.instagram.com/taw_abmalik/",
      icon: SiInstagram,
    },
  ];

  return (
    <footer className="pt-16 pb-12 border-t border-slate-200 bg-[#fbfbfc] relative z-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-200">
          {/* Brand */}
          <div className="text-center md:text-left">
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="inline-block font-serif italic text-3xl font-bold tracking-tight text-slate-900 pr-2">
                Abdul Tawab
              </span>
              <span className="font-sans text-[10px] uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-lime-400/25 text-lime-800 font-bold border border-lime-400/40">
                2025
              </span>
            </Link>
            <p className="text-xs text-slate-500 mt-2 max-w-sm font-normal">
              Frontend Engineer specializing in scalable Next.js architectures, modern UI design systems, and responsive user experiences.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map((s) => {
              const Icon = s.icon;
              return (
                <Link
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  aria-label={s.name}
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-slate-600 hover:text-lime-700 hover:border-lime-400 transition-all border border-slate-200 shadow-sm"
                >
                  <Icon className="w-4 h-4" />
                </Link>
              );
            })}
          </div>

          {/* Back to top button */}
          <div>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-xs font-bold uppercase tracking-wider text-slate-700 hover:text-slate-950 hover:border-lime-500 transition-all border border-slate-200 shadow-sm"
            >
              <span>Back to Top</span>
              <HiArrowUp className="w-4 h-4 text-lime-600" />
            </button>
          </div>
        </div>

        {/* Copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>&copy; {new Date().getFullYear()} Abdul Tawab. All rights reserved.</p>
          <p className="flex items-center gap-1.5 font-medium">
            <span>Crafted with</span>
            <span className="font-semibold text-slate-800">Next.js 15, React 19 &amp; Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}