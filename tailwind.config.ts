import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "Montserrat", "sans-serif"],
        serif: ["var(--font-serif)", "Playfair Display", "serif"],
        display: ["var(--font-display)", "Playfair Display", "serif"],
      },
      colors: {
        aura: {
          lime: "#bef264",
          green: "#4ade80",
          glow: "#84cc16",
          dark: "#0a0d0a",
        },
        darkSurface: {
          DEFAULT: "#0f1115",
          card: "#16181e",
          border: "rgba(255, 255, 255, 0.08)",
        },
        lightSurface: {
          DEFAULT: "#fbfbfd",
          card: "#ffffff",
          border: "rgba(0, 0, 0, 0.06)",
        },
        // Legacy compatibility
        firefly: {
          DEFAULT: "#0A1124",
          500: "#0A1124",
        },
        java: {
          DEFAULT: "#1AAFB7",
          500: "#1AAFB7",
        },
        "new-yellow": {
          DEFAULT: "#FEB901",
          200: "#FEDB7B",
          500: "#FEB901",
          700: "#8E6801",
          900: "#1E1600",
        },
        wisteria: {
          DEFAULT: "#995FB6",
          200: "#CFB3DC",
          500: "#995FB6",
        },
      },
      animation: {
        float: "float 4s ease-in-out infinite alternate",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        marquee: "marquee 28s linear infinite",
        "marquee-reverse": "marquee-reverse 28s linear infinite",
      },
      keyframes: {
        float: {
          "0%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" },
          "100%": { transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;