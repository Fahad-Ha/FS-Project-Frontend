/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    backgroundImage: {
      "form-img": "url('../src/images/Dev-image.jpg')",
    },
  },
  plugins: [require("daisyui")],
};
