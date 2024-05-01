import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#202020",
        secondary: "#ffffff",
        background: "#5AA4E5",
      },
    },
    screens: {
      sm: "640px",

      md: "1024px",

      lg: "1536px",

      xl: "1920px",

      "2xl": "2560px",
    },
  },
  plugins: [require("daisyui")],
};
export default config;
