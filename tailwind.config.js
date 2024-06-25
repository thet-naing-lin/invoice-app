/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    container: {
      // padding: {
      //   DEFAULT: "1rem",
      //   sm: "2rem",
      //   lg: "4rem",
      //   xl: "14rem",
      //   "2xl": "16rem",
      // },
    },
    extend: {
      fontFamily: {
        header: ["Playwrite FR Moderne", "cursive"],
        body: ["Nanum Gothic Coding", "monospace"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
