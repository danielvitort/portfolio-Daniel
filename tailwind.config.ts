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
        'header': '#0E171E',
        'primary': '#101B24',
        'secondary': '#E7F5FF',
        'card-skill': '#121F29'
      },
    },
  },
  plugins: [],
};
export default config;
