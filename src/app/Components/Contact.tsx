"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlineUser, HiOutlineEnvelope, HiOutlinePhone, HiOutlineChatBubbleBottomCenterText, HiArrowUpRight } from "react-icons/hi2";
import { SiWhatsapp, SiLinkedin, SiGithub, SiGmail } from "react-icons/si";
import { GoDownload } from "react-icons/go";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [popupVisible, setPopupVisible] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in your name, email, and message.");
      setPopupVisible(true);
      setTimeout(() => setPopupVisible(false), 3500);
      return;
    }

    setIsSubmitting(true);
    setStatus("Sending message...");
    setPopupVisible(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully! I'll get back to you within 24 hours.");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setStatus("Failed to send email. Please reach out directly via WhatsApp or Email.");
      }
    } catch (error) {
      setStatus("An error occurred. Please contact directly via WhatsApp or Email.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setPopupVisible(false), 4000);
    }
  };

  const directContacts = [
    {
      name: "WhatsApp",
      handle: "+92 307 4563133",
      href: "https://wa.me/923074563133",
      icon: SiWhatsapp,
      color: "hover:text-[#25D366]",
    },
    {
      name: "Email",
      handle: "abdultawab218@gmail.com",
      href: "mailto:abdultawab218@gmail.com",
      icon: SiGmail,
      color: "hover:text-[#EA4335]",
    },
    {
      name: "LinkedIn",
      handle: "in/abdul-tawab-78ab9525b",
      href: "https://www.linkedin.com/in/abdul-tawab-78ab9525b",
      icon: SiLinkedin,
      color: "hover:text-[#0A66C2]",
    },
    {
      name: "GitHub",
      handle: "Tawab-Malik",
      href: "https://github.com/Tawab-Malik",
      icon: SiGithub,
      color: "hover:text-black",
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-white border-t border-slate-200/80">
      {/* Background ambient lighting */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[600px] h-[350px] pointer-events-none z-0">
        <div className="w-full h-full rounded-full bg-lime-400/20 blur-[110px]" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-slate-500 font-bold">
            / Let&apos;s Connect
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 mt-2">
            Have a project in mind?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-4 leading-relaxed font-normal">
            Whether you need a complete web application built from scratch, a UI redesign, or a senior frontend engineer for your team, let&apos;s discuss how I can help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Links & Resume Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#fafbfe] p-7 sm:p-8 rounded-3xl border border-slate-200/90 shadow-[0_15px_35px_rgba(0,0,0,0.03)]">
              <h3 className="text-xl font-bold text-slate-900 mb-2">
                Direct Channels
              </h3>
              <p className="text-xs text-slate-500 mb-6 font-normal">
                Feel free to ping me directly. I respond quickly.
              </p>

              <div className="space-y-3">
                {directContacts.map((contact) => {
                  const Icon = contact.icon;
                  return (
                    <Link
                      key={contact.name}
                      href={contact.href}
                      target="_blank"
                      className={`flex items-center justify-between p-3.5 rounded-2xl bg-white border border-slate-200/80 hover:border-lime-500/70 hover:shadow-sm transition-all group ${contact.color}`}
                    >
                      <div className="flex items-center gap-3">
                        <Icon className="w-5 h-5 text-slate-600 group-hover:text-lime-600 transition-colors" />
                        <div>
                          <p className="text-xs font-bold text-slate-900">
                            {contact.name}
                          </p>
                          <p className="text-[11px] text-slate-500 font-mono">
                            {contact.handle}
                          </p>
                        </div>
                      </div>
                      <HiArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 transition-colors" />
                    </Link>
                  );
                })}
              </div>

              {/* CV Download banner */}
              <div className="mt-8 pt-6 border-t border-slate-200">
                <Link
                  href="/images/Abdul_TawabCV.pdf"
                  target="_blank"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-slate-950 text-white font-bold text-xs uppercase tracking-wider hover:bg-slate-800 active:scale-95 transition-all shadow-md"
                >
                  <GoDownload className="w-4 h-4 text-lime-400" />
                  <span>Download Curriculum Vitae (CV)</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#fafbfe] p-7 sm:p-8 rounded-3xl border border-slate-200/90 shadow-[0_15px_35px_rgba(0,0,0,0.03)] relative">
              <h3 className="text-xl font-bold text-slate-900 mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Your Name *
                    </label>
                    <div className="relative">
                      <HiOutlineUser className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500 shadow-inner transition-all"
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Your Email *
                    </label>
                    <div className="relative">
                      <HiOutlineEnvelope className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500 shadow-inner transition-all"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Phone Number (Optional)
                    </label>
                    <div className="relative">
                      <HiOutlinePhone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500 shadow-inner transition-all"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Subject
                    </label>
                    <div className="relative">
                      <HiOutlineChatBubbleBottomCenterText className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="New Project Inquiry"
                        className="w-full pl-10 pr-4 py-3 rounded-2xl bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500 shadow-inner transition-all"
                      />
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Your Message *
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project scope, timeline, and goals..."
                    className="w-full p-4 rounded-2xl bg-white border border-slate-200 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-lime-500 focus:ring-1 focus:ring-lime-500 shadow-inner transition-all resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full bg-slate-950 text-white font-bold text-xs uppercase tracking-wider hover:bg-slate-800 active:scale-95 disabled:opacity-50 transition-all shadow-md flex items-center justify-center gap-2"
                >
                  {isSubmitting ? "Sending..." : "Send Message ↗"}
                </button>
              </form>

              {/* Status Alert Notification */}
              <AnimatePresence>
                {popupVisible && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="mt-4 p-3 rounded-2xl bg-lime-100 border border-lime-300 text-lime-900 text-center text-xs font-semibold"
                  >
                    {status}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
