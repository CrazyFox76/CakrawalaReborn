import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0d4f4f",
        "primary-light": "#1a7a7a",
        accent: "#c9a84c",
        surface: "#f8fafc",
        teal: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
        },
        gold: {
          50: "#fdf8ed",
          100: "#f9edcc",
          200: "#f2d98a",
          300: "#ecc44a",
          400: "#d9ad2e",
          500: "#c9a84c",
          600: "#a8883a",
          700: "#876a2c",
          800: "#6b5023",
          900: "#4f3b1b",
        },
      },
    },
  },
  plugins: [],
};

export default config;
