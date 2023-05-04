module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Montserrat",
    },
    extend: {
      backgroundColor: {
        primary: "#994F12",
        secondary: "#Cc9933",
        gray: "#eee",
      },
      colors: {
        black: "#000",
        borderPrimary: "#994F12",
      },
      backgroundImage: {
        hero: 'url("/src/assets/images/Heroe.jpg")',
      },
    },
  },
  plugins: [],
};
