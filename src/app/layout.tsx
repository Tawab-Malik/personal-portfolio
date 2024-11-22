import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
// import localFont from "next/font/local";
import Footer from "@/app/Components/Footer";
import "./globals.css";
import Header from "../app/Components/Header";
// Import Montserrat from Google Fonts
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "700"], // You can add other weights if needed
});




export const metadata: Metadata = {
  title:"Abdul-Tawab",
  description: "Personal PortFolio",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body
          className={` ${montserrat.variable} antialiased`}
      >
          <Header />
      {children}
      <Footer/>
      </body>
      </html>
  );
}
