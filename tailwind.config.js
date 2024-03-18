/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        huge: ["80rem", { lineHeight: "1" }],
      },
      width: {
        searchBar: ["300%"],
      },
      scale: {
        image: ".4",
      },
      height: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
