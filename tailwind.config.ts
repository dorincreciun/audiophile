import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-d8": "#D87D4A",
        "color-10": "#101010",
        "color-f1": "#F1F1F1",
        "color-fa": "#FAFAFA",
        "color-fb": "#fbaf85",
        "color-ff": "#FFFFFF",
        "color-00": "#000000",
      },
    },
  },
  plugins: [],
} satisfies Config;
