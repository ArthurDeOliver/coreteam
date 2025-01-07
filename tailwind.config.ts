import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "primary-color": {
          50: "#fff6eb",
          100: "#fee4c7",
          200: "#fdc88a",
          300: "#fcab4d",
          400: "#fb9724",
          500: "#f5880b",
          600: "#d97706", //default
          700: "#b46509",
          800: "#92550e",
          900: "#78470f",
          950: "#452603",
        },
        "bg-page": {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
          950: "#121212", //default
        },
        "font-primary": {
          50: "#f7f7f7",
          100: "#ededed",
          200: "#e5e5e5", //default
          300: "#c8c8c8",
          400: "#adadad",
          500: "#999999",
          600: "#888888",
          700: "#7b7b7b",
          800: "#676767",
          900: "#545454",
          950: "#363636",
        },
        "card-default": {
          50: "#f6f6f6",
          100: "#e7e7e7",
          200: "#d1d1d1",
          300: "#b0b0b0",
          400: "#888888",
          500: "#6d6d6d",
          600: "#5d5d5d",
          700: "#4f4f4f",
          800: "#454545",
          900: "#3d3d3d",
          950: "#1f1f1f", //default
        },
        "card-hover": {
          50: "#fef6ee",
          100: "#fdead7",
          200: "#fad2ae",
          300: "#f4a261", //default
          400: "#f18746",
          500: "#ed6722",
          600: "#de4e18",
          700: "#b83a16",
          800: "#933019",
          900: "#762a18",
          950: "#40120a",
        },
        "cancel-color": {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444", //default
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
          950: "#450a0a",
        },
        "success-color": {
          50: "#ecfdf7",
          100: "#d1faec",
          200: "#a7f3da",
          300: "#6ee7bf",
          400: "#34d39e",
          500: "#10b981", //default
          600: "#059666",
          700: "#047852",
          800: "#065f42",
          900: "#064e36",
          950: "#022c1e",
        },
        "danger-color": {
          50: "#fff8eb",
          100: "#feeac7",
          200: "#fdd28a",
          300: "#fcbb4d",
          400: "#fbab24",
          500: "#f59e0b", //default
          600: "#d98b06",
          700: "#b47409",
          800: "#92610e",
          900: "#78510f",
          950: "#452c03",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
