import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        waPulse: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.12)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.4s ease-out",
        waPulse: "waPulse 2s ease-in-out infinite",
      },
      colors: {
        primary: "#263559",
        "primary-light": "#3b5282",
        accent: "#D9A955",
        surface: "#f8fafc",
        blue: {
          50: "#f0f4ff",
          100: "#dbe4ff",
          200: "#b3c9ff",
          300: "#8aadff",
          400: "#6292ff",
          500: "#3b76ff",
          600: "#1a5cff",
          700: "#0047e0",
          800: "#0036ad",
          900: "#00267a",
        },
        gold: {
          50: "#fef9ed",
          100: "#fdf0cc",
          200: "#fae08a",
          300: "#f0cd4a",
          400: "#e3b92e",
          500: "#D9A955",
          600: "#b88a3a",
          700: "#936e2c",
          800: "#755323",
          900: "#4f3b1b",
        },
      },
    },
  },
  plugins: [],
};

export default config;
