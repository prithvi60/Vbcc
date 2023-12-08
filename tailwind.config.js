/** @type {import('tailwindcss').Config} */
import {nextui} from "@nextui-org/react";
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    screens: {
      sm: '390px',
      md: '810px',
      lg: '1023px',
      xl: '1439px',
      "2xl": '1536px'
    },
    fontFamily: {
      Lora: ['Lora', 'serif'],
      urbanist: ['Urbanist', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/hero-bg.png')",
        'hero-pattern-2': "url('/hero-bg-2.png')",
        'hero-pattern-3': "url('/hero-bg-3.png')",
        'statistics': "url('/Statistics.png')",
      },
      keyframes: {
        marquee_h: {
          from: { transform: 'translateX(0%)' },
          to: { transform: 'translateX(-45%)' }
        },
        spinner: {
          from: { transform: "translateY(100%)" },
          to: { transform: "translateY(0%)" },
        },
        smooth: {
          from: { transform: "translateX(100%)" },
          to: { transform: "translateX(0%)" },
        },
        smooth2: {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(100%)" },
        },
      },
      animation: {
        horizontal_carousel: 'marquee_h 20s linear infinite',
        spin_word: "spinner 0.5s linear",
        reveal_In : "smooth 0.5s linear",
        reveal_Out : "smooth2 2s linear 1s"
        }
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          foreground: "#FFFFFF",
          primary: "#0C1831",
          secondary: "#F5F5F5",
          success :"#122149",
          warning : "#0D1924",
          danger :"#1D252D",
          info : "#FD6C2E",
        }
      },
    },
  }),]
}
