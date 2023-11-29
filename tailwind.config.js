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
      lg: '1024px',
      xl: '1440px',
    },
    fontFamily: {
      Lora: ['Lora', 'serif'],
      urbanist: ['Urbanist', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/hero-bg.png')",
        // 'footer-texture': "url('/img/footer-texture.png')",
      },
      keyframes: {
        // marquee_v: {
        //   from: { transform: 'translateY(0%)' },
        //   to: { transform: 'translateY(-100%)' }
        // },
        marquee_h: {
          from: { transform: 'translateX(0%)' },
          to: { transform: 'translateX(-45%)' }
        },
      },
      animation: {
        // vertical_carousel: 'marquee_v 20s linear infinite',
        horizontal_carousel: 'marquee_h 20s linear infinite',
        }
    },
  },
  darkMode: "class",
  plugins: [nextui({
    themes: {
      light: {
        colors: {
          primary: "#0C1831",
          primary2 :"#122149",
          secondary: "#F5F5F5",
          primaryText : "#0D1924",
          secondaryText :"#1D252D",
          info : "#FD6C2E"
        }
      },
    },
  }),]
}
