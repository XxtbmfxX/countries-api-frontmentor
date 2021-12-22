module.exports = {
  // mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        app_dark: "#202C37",
        info_dark: "#2B3945",
        data: "#858585",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
