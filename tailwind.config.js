module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: "#0AD4FA",
        brandblack: "#272635",
        brandwhite: "#FBF5F3",
        brandgreen: "#9FCC2E",
        brandred: "#D64550",
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ["first"],
      backgroundColor: ["first"],
    },
  },
  plugins: [],
};
