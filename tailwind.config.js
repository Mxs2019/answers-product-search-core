module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      display: ["group-hover"],
      zIndex: ["hover", "active", "focus-within"],
      position: ["focus-within"],
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
