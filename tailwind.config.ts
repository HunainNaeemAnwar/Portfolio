import { Inter } from "next/font/google";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        Inter: "var(--font-Inter)",
        Montserrat: "var(--font-Montserrat)",
        Poppins: "var(--font-Poppins)",
        Satoshi: "var(--font-satoshi-medium)",
        Integral: "var(--font-integral-cf)",
      },
    },
  },
  plugins: [],
} satisfies Config;
