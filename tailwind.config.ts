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
        "prime-blue": "#6374ff",
        "prime-dark": "#0c213a",
        "prime-lightblue": "#b3bbfd",
        "prime-bg": "#b3bbfd33",
        "sec": "#f1f1f1",
        "stroke": "#D1E3F5",
      },
      fontFamily: {
        sans: [
          "Satoshi-Variable",
          "Satoshi-VariableItalic",
          "Satoshi-Light",
          "Satoshi-LightItalic",
          "Satoshi-Regular",
          "Satoshi-Italic",
          "Satoshi-Medium",
          "Satoshi-MediumItalic",
          "Satoshi-Bold",
          "Satoshi-BoldItalic",
          "Satoshi-Black",
          "Satoshi-BlackItalic",
          "system-ui",
          "sans-serif",
        ],
        serif: [
          "Satoshi-Variable",
          "Satoshi-VariableItalic",
          "Satoshi-Light",
          "Satoshi-LightItalic",
          "Satoshi-Regular",
          "Satoshi-Italic",
          "Satoshi-Medium",
          "Satoshi-MediumItalic",
          "Satoshi-Bold",
          "Satoshi-BoldItalic",
          "Satoshi-Black",
          "Satoshi-BlackItalic",
          "serif",
        ],
        mono: [
          "Satoshi-Variable",
          "Satoshi-VariableItalic",
          "Satoshi-Light",
          "Satoshi-LightItalic",
          "Satoshi-Regular",
          "Satoshi-Italic",
          "Satoshi-Medium",
          "Satoshi-MediumItalic",
          "Satoshi-Bold",
          "Satoshi-BoldItalic",
          "Satoshi-Black",
          "Satoshi-BlackItalic",
          "monospace",
        ],
      },
    },
  },
  plugins: [],
};

export default config;
