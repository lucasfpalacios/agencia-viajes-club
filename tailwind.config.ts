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
        viajes: {
          fondo: "#F4EFEA",
          texto: "#2A2522",
          acento: "#8C5E45",
          iconos: "#E6D6C6",
        }
      },
    },
  },
  plugins: [],
};
export default config;