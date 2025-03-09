import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "768px",
      lg: "1200px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
      },
    },
    extend: {
      fontFamily: {
        sans: "var(--font-sans)",
        serif: "var(--font-serif)",
      },
      keyframes: {
        "ping-large": {
          "75%, 100%": {
            transform: "scale(3)",
            opacity: "0",
          },
        },
        // Slow-motion ping animation
        ping: {
          "0%": {
            transform: "scale(1)",
            opacity: "1",
          },
          "75%, 100%": {
            transform: "scale(2)",
            opacity: "0",
          },
        },
        // Marquee animation keyframes
        marquee: {
          from: {
            transform: "translateX(0%)", // Start from the original position
          },
          to: {
            transform: "translateX(-100%)", // Move to the left by 100% of its width
          },
        },
        "marquee-left": {
          from: {
            transform: "translateX(0%)", // Start from the original position
          },
          to: {
            transform: "translateX(-50%)", // Move to the left by 50% of its width
          },
        },
        "marquee-right": {
          from: {
            transform: "translateX(-50%)", // Start from the left by 50% of its width
          },
          to: {
            transform: "translateX(0%)", // Move to the original position
          },
        },
      },
      animation: {
        "ping-large": "ping-large 1s ease-in-out infinite",
        // Slow-motion ping animation
        ping: "ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite", // Slower ping animation
        // Marquee animation utilities
        marquee: "marquee 30s linear infinite", // Default marquee animation
        "marquee-left": "marquee-left 20s linear infinite", // Left-to-right animation
        "marquee-right": "marquee-right 20s linear infinite", // Right-to-left animation
      },
    },
  },
  plugins: [],
};

export default config;