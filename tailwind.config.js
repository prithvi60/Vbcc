/** @type {import('tailwindcss').Config} */
import { heroui } from "@heroui/theme";
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    // "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/components/(accordion|checkbox|tooltip|breadcrumbs).js",
  ],
  theme: {
    screens: {
      sm: "390px",
      md: "810px",
      lg: "1023px",
      xl: "1439px",
      "2xl": "1536px",
      "2xxl": "1952px",
      "3xl": "3840px",
    },
    fontFamily: {
      Lora: ["var(--font-lora)"],
      urbanist: ["var(--font-urbanist)"],
      Nunito: ["var(--font-nunito)"],
      Montserrat: ["var(--font-montserrat)"],
    },
    extend: {
      backdropColor: {
        "custom-blue": "#293271",
      },
      keyframes: {
        marquee_h: {
          from: { transform: "translateX(0%)" },
          to: { transform: "translateX(-45%)" },
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
        horizontal_carousel: "marquee_h 20s linear infinite",
        spin_word: "spinner 0.5s linear",
        reveal_In: "smooth 0.3s linear",
        reveal_Out: "smooth2 1s linear",
      },
    },
  },
  darkMode: "class",
  plugins: [
    require("@tailwindcss/typography"),
    heroui({
      themes: {
        light: {
          colors: {
            foreground: "#FFFFFF",
            primary: "#1c447e",
            secondary: "#F5F5F5",
            success: "#122149",
            warning: "#0D1924",
            danger: "#1D252D",
            info: "#ee7136",
            info1: "#F1F1F1",
          },
        },
      },
    }),
  ],
};

// #0C1831
