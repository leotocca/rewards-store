module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  purge: [
    "src/**/*.js",
    "src/**/*.jsx",
    "src/**/*.ts",
    "src/**/*.tsx",
    "public/**/*.html",
  ],
  theme: {
    extend: {
      colors: {
        brand: "#0AD4FA",
      },
      inset: {
        0: 0,
        auto: "auto",
        "1/2": "50%",
      },
    },
    variants: {},
    plugins: [],
  },
};