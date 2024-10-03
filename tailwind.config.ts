import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'slow-bounce': 'bounce 2s infinite', // Custom animation duration
      },
      colors: {
        "prime-blue": "#6374ff",
        "prime-dark": "#0c213a",
        "prime-lightblue": "#b3bbfd",
        "prime-bg": "#b3bbfd33",
        "sec": "#f1f1f1",
        "stroke": "#D1E3F5",
      },
      fontFamily: {
      },
    },
  },
  plugins: [],
};

export default config;
