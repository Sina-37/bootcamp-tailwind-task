module.exports = {
  content: ["./public/**/*.html", "/src/js/theme.js"],

  theme: {
    extend: {
      fontFamily: {
        sans: ["vazir"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
