/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Merriweather Sans", "sans-serif"],
      },
    },
    screens: {
      tablet: "481px",
      slaptop: "769px",
      desktop: "1025px",
      xlscreens: "1201px",
    },
  },
  plugins: [require('tailwindcss-animated')],
};
