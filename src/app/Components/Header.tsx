"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { GoArrowUpRight } from "react-icons/go";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Ensure dark class is removed on mount
    document.documentElement.classList.remove("dark");
    document.documentElement.classList.add("light");

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Process", href: "#process" },
    { name: "Selected Works", href: "#works" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-4 sm:px-8">
      <div
        className={`max-w-7xl mx-auto flex items-center justify-between transition-all duration-300 rounded-full px-5 py-3 ${
          scrolled
            ? "glass-pill shadow-[0_10px_35px_rgba(15,23,42,0.08)] border border-slate-200/90 bg-white/95 backdrop-blur-2xl"
            : "bg-white/80 backdrop-blur-xl border border-slate-200/70 shadow-xs"
        }`}
      >
        {/* Brand / Logo matching reference */}
        <Link href="/" className="group flex items-center gap-2">
          <span className="inline-block font-serif italic text-2xl font-bold tracking-tight text-slate-900 group-hover:text-lime-700 transition-colors pr-2 py-0.5">
            Abdul Tawab
          </span>
          <span className="font-sans text-[10px] uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-lime-400/25 text-lime-900 font-extrabold border border-lime-400/50 shadow-2xs">
            Portfolio
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:text-slate-950 transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-lime-500 hover:after:w-full after:transition-all duration-200"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-bold tracking-wide uppercase bg-gradient-to-r from-slate-950 via-slate-900 to-black text-white hover:scale-105 active:scale-95 shadow-[0_4px_16px_rgba(15,23,42,0.2)] hover:shadow-lime-500/20 transition-all duration-200 border border-white/10"
          >
            <span>Let&apos;s Talk</span>
            <GoArrowUpRight className="w-3.5 h-3.5 text-lime-400" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="md:hidden w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 text-slate-900 hover:bg-slate-200 transition-colors"
          >
            {menuOpen ? <HiX className="w-5 h-5" /> : <HiMenuAlt4 className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="md:hidden max-w-sm mx-auto mt-3 rounded-3xl p-6 glass-card shadow-2xl border border-slate-200"
          >
            <nav className="flex flex-col gap-4 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="py-2 text-base font-semibold text-slate-800 hover:text-lime-600 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/images/Abdul_TawabCV.pdf"
                target="_blank"
                onClick={() => setMenuOpen(false)}
                className="mt-2 py-3 rounded-full bg-lime-400 text-slate-950 font-bold text-xs tracking-wider uppercase shadow-md transition-all"
              >
                Download Resume (CV)
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
