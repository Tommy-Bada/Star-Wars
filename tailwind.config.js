/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        boxBg: "url('./assets/bg-1.jpeg')",
      },
    },
  },
  plugins: [],
};
