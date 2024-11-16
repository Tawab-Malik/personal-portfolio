const { nextui } = require("@nextui-org/react");
import type { Config } from "tailwindcss"

const config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "",
  theme: {
    colors: {
      filter: {
        "blur-20": "blur(20px)",
        "blur-25": "blur(25px)",
      },
      'white': '#FFFFFF',
      'black': '#000000',
      'firefly': {
        DEFAULT: '#0A1124',
        50: '#3255B4',
        100: '#2D4DA4',
        200: '#253E84',
        300: '#1C2F64',
        400: '#132044',
        500: '#0A1124',
        600: '#000000',
        700: '#000000',
        800: '#000000',
        900: '#000000',
        950: '#000000'
      },
      'java': {
        DEFAULT: '#1AAFB7',
        50: '#98ECF0',
        100: '#86E9EE',
        200: '#63E2E9',
        300: '#3FDBE4',
        400: '#1FD1DB',
        500: '#1AAFB7',
        600: '#138086',
        700: '#0C5155',
        800: '#052224',
        900: '#000000',
        950: '#000000'
      },
      'downriver': {
        DEFAULT: '#102762',
        50: '#4873E1',
        100: '#3766DE',
        200: '#2151CB',
        300: '#1B43A8',
        400: '#163585',
        500: '#102762',
        600: '#081432',
        700: '#000102',
        800: '#000000',
        900: '#000000',
        950: '#000000'
      },
      'new-yellow': {
        DEFAULT: '#FEB901',
        50: '#FFEBB8',
        100: '#FFE6A4',
        200: '#FEDB7B',
        300: '#FECF52',
        400: '#FEC42A',
        500: '#FEB901',
        600: '#C69001',
        700: '#8E6801',
        800: '#563F00',
        900: '#1E1600',
        950: '#030200'
      },
      'wisteria': {
        DEFAULT: '#995FB6',
        50: '#E9DDF0',
        100: '#E0CFE9',
        200: '#CFB3DC',
        300: '#BD97D0',
        400: '#AB7BC3',
        500: '#995FB6',
        600: '#7C4598',
        700: '#5D3471',
        800: '#3D224B',
        900: '#1E1024',
        950: '#0E0811'
      },
    },
    container: {
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "bg-position": {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" },
        },
        float: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
          '100%': { transform: 'translateY(0)' },
        },
        wave: {
          '0%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(-5deg)' },
          '100%': { transform: 'translateY(0) rotate(0deg)' },
        },
        wave2: {
          '0%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(5deg)' },
          '100%': { transform: 'translateY(0) rotate(0deg)' },
        },
        "bob-1": {
          "0%": { transform: "translate(0, 0) rotate(0deg)" },
          "25%": { transform: "translate(30px, -15px) rotate(15deg)" },
          "50%": { transform: "translate(-30px, 15px) rotate(-15deg)" },
          "75%": { transform: "translate(30px, 5px) rotate(10deg)" },
          "100%": { transform: "translate(0, 0) rotate(0deg)" },
        },
        "bob-2": {
          "0%": { transform: "translate(0, 0) rotate(0deg)" },
          "25%": { transform: "translate(-20px, 20px) rotate(-10deg)" },
          "50%": { transform: "translate(20px, -20px) rotate(10deg)" },
          "75%": { transform: "translate(-20px, 10px) rotate(-5deg)" },
          "100%": { transform: "translate(0, 0) rotate(0deg)" },
        },
        "pop-blob": {
          "0%": { transform: "scale(1) " },
          "33%": { transform: "scale(1.2)" },
          "66%": { transform: "scale(0.8)" },
          "100%": { transform: "scale(1)" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "pop-blob": "pop-blob 20s infinite",
        "bob-1": "bob-1 15s ease-in-out infinite",
        "bob-2": "bob-2 15s ease-in-out infinite",
        float: 'float 3s ease-in-out infinite alternate',
        wave: 'wave 3s ease-in-out infinite alternate',
        wave2: 'wave2 3s ease-in-out infinite alternate',
        bgposition: 'bg-position 3s ease-in-out infinite alternate',
      },
    },
  },
  plugins: [require("tailwindcss-animate"),
  require("tailwindcss-animate"),
  nextui(),
  require("tailwindcss-animate")],
} satisfies Config

export default config