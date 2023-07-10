/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
  theme: {
    extend: {},
    backgroundImage: {
      "form-img": "url('../src/images/Dev-image.jpg')",
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
