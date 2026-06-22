import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
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
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height, var(--accordion-panel-height, auto))" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height, var(--accordion-panel-height, auto))" },
          to: { height: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "scale-in": {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.4s ease-out",
        waPulse: "waPulse 2s ease-in-out infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        shimmer: "shimmer 3s ease-in-out infinite",
        float: "float 3s ease-in-out infinite",
        "scale-in": "scale-in 0.3s ease-out",
      },
      colors: {
        primary: "#263559",
        "primary-light": "#3b5282",
        accent: "#D9A955",
        surface: "var(--surface)",
        background: "var(--background)",
        foreground: "var(--foreground)",
        border: "var(--border)",
        ring: "var(--ring)",
        input: "var(--input)",
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
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
