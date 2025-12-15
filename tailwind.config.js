/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        background: {
          dark: "#000000",
          blue: "#14213d",
          darkblue: "#131022"
        },
        text: {
          light: "#e5e5e5",
          dark: "#000000",
          purple: "#9a90cb"
        },
        primary: "#4500BD",
        secondary: "#0d00a4",
      },
      fontFamily: {
        title: ["Exo2_700Bold"],
        titleLight: ["Exo2_300Light"],
        body: ["RobotoCondensed_400Regular"],
        bodyBold: ["RobotoCondensed_700Bold"],
      },
    },
  },
  plugins: [],
};
