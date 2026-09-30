import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import Footer from "@/app/Components/Footer";
import Header from "@/app/Components/Header";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Abdul Tawab — Frontend Engineer & UI Specialist",
  description:
    "Passionate about creating intuitive, high-performance digital experiences that connect users with value. Specialized in Next.js, React, and modern UI engineering.",
  keywords: [
    "Abdul Tawab",
    "Frontend Developer",
    "Next.js",
    "React",
    "Tailwind CSS",
    "UI/UX Designer",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Abdul Tawab" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth light">
      <body
        className={`${sans.variable} ${serif.variable} font-sans antialiased bg-[#fbfbfc] text-slate-900 min-h-screen selection:bg-lime-400 selection:text-black`}
      >
        <Header />
        <main className="overflow-hidden bg-mesh-grid">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
