import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
        mono: ["var(--font-mono)", ...fontFamily.mono],
      },
      colors: {
        primarygray: {
          DEFAULT: "#F7F7FB",
          200: "#E8E8FB",
          300: "#BFBFE3",
        },
        yellow: {
          50: "#ff100109",
          100: "#fffdf0",
          200: "#fef8be",
          300: "#fdf390",
          400: "#fded5e",
          500: "#fce72c",
          600: "#e7d103",
          700: "#ab9a02",
          800: "#6f6402",
          900: "#322d01",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const utilities = {
        ".bg-hero": {
          "background-image": "url(/hero.png)",
        },
      };
      addUtilities(utilities);
    }),
  ],
};

export default config;
