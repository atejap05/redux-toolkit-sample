/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,jsx,ts,tsx}"],
  important: "#root", // https://tailwindcss.com/docs/configuration#important
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
