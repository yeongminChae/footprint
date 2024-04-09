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
        borderColor: "#929292",
        bgColor: "#E9F7F3",
        btnColor: "#008B8B",
        unActiveBtnColor: "#B9B9B9",
        hoverColor: "#4AB3B3",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "custom-shadow": "0 4px 4px 0 rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
export default config;
