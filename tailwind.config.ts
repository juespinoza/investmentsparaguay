import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1a365d",
        secondary: "#c05621",
        accent: "#f6ad55"
      }
    }
  },
  plugins: []
};
export default config;
